/**
 * Aarogya Nova Backend API Server
 * Built using Node's standard native http module (Zero fragile external dependency risk).
 * Features:
 * - CORS support
 * - Safe clinical data endpoints
 * - PII Sanitization & Redaction service
 * - Non-diagnostic Doctor Question Generator
 * - Health check & verified telemetry
 */

const http = require("http");
const { 
  VERIFIED_SOURCES, 
  EMERGENCY_SERVICES_INDIA, 
  GENERIC_MEDICINES, 
  LAB_BENCHMARKS, 
  SAMPLE_DOCUMENTS 
} = require("./clinicalData");
const { sanitizeHealthText } = require("./privacyEngine");

const PORT = process.env.PORT || 5001;

function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
}

function sendJson(res, statusCode, data) {
  setCorsHeaders(res);
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);

  // Health endpoint
  if (url.pathname === "/api/health" && req.method === "GET") {
    sendJson(res, 200, {
      status: "healthy",
      service: "Aarogya Nova Healthcare Accessibility Backend",
      version: "1.0.0",
      nodeVersion: process.version,
      timestamp: new Date().toISOString(),
      medicalDisclaimer: "Aarogya Nova is an educational and accessibility aid. It does not provide clinical diagnosis or prescribe treatments.",
      disclosedTransmission: "All document parsing and redacting is verified in-process without third-party LLM leaks."
    });
    return;
  }

  // Emergency benchmarks (Verified India numbers)
  if (url.pathname === "/api/emergency-contacts" && req.method === "GET") {
    sendJson(res, 200, {
      country: "India",
      contacts: EMERGENCY_SERVICES_INDIA,
      sources: VERIFIED_SOURCES.MOHFW
    });
    return;
  }

  // Verified generic medicines
  if (url.pathname === "/api/medicines" && req.method === "GET") {
    const q = url.searchParams.get("query");
    let result = GENERIC_MEDICINES;
    if (q) {
      const lower = q.toLowerCase();
      result = GENERIC_MEDICINES.filter(m => 
        m.genericName.toLowerCase().includes(lower) ||
        m.kannadaName.toLowerCase().includes(lower) ||
        m.hindiName.toLowerCase().includes(lower) ||
        m.drugClass.toLowerCase().includes(lower)
      );
    }
    sendJson(res, 200, { medicines: result, total: result.length });
    return;
  }

  // Lab benchmarks & verified ranges
  if (url.pathname === "/api/lab-benchmarks" && req.method === "GET") {
    sendJson(res, 200, {
      benchmarks: LAB_BENCHMARKS,
      standards: [VERIFIED_SOURCES.ICMR, VERIFIED_SOURCES.MOHFW, VERIFIED_SOURCES.MEDLINEPLUS]
    });
    return;
  }

  // Verified sample documents
  if (url.pathname === "/api/sample-documents" && req.method === "GET") {
    sendJson(res, 200, { documents: SAMPLE_DOCUMENTS });
    return;
  }

  // Privacy Redactor API
  if (url.pathname === "/api/privacy/sanitize" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => { body += chunk; });
    req.on("end", () => {
      try {
        const parsed = JSON.parse(body || "{}");
        const result = sanitizeHealthText(parsed.text || "");
        sendJson(res, 200, result);
      } catch (err) {
        sendJson(res, 400, { error: "Invalid JSON payload", details: err.message });
      }
    });
    return;
  }

  // Doctor Question Builder API
  if (url.pathname === "/api/doctor-questions/generate" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => { body += chunk; });
    req.on("end", () => {
      try {
        const payload = JSON.parse(body || "{}");
        const concerns = payload.concerns || [];
        const findings = payload.findings || [];
        const language = payload.language || "en";

        const generatedQuestions = [];

        // Dynamic rule-based question synthesis without hallucination
        if (concerns.includes("diet") || concerns.includes("sugar")) {
          generatedQuestions.push({
            id: "q-1",
            category: "Nutrition & Lifestyle",
            en: "What specific dietary modifications (carbohydrate quality, meal timing) are best aligned with my latest test values?",
            kn: "ನನ್ನ ಇತ್ತೀಚಿನ ಪರೀಕ್ಷಾ ವರದಿಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ನಾನು ಯಾವ ನಿರ್ದಿಷ್ಟ ಆಹಾರಕ್ರಮವನ್ನು ಅನುಸರಿಸಬೇಕು?",
            hi: "मेरी हालिया जांच रिपोर्ट के आधार पर मुझे अपने खान-पान में क्या बदलाव करने चाहिए?"
          });
        }

        if (concerns.includes("exercise") || concerns.includes("physical")) {
          generatedQuestions.push({
            id: "q-2",
            category: "Physical Activity",
            en: "Given my current metabolic and blood pressure profile, what level of exercise is clinically safe to start with?",
            kn: "ನನ್ನ ಪ್ರಸ್ತುತ ರಕ್ತದೊತ್ತಡ ಮತ್ತು ಆರೋಗ್ಯ ಸ್ಥಿತಿಗೆ ಯಾವ ಮಟ್ಟದ ದೈಹಿಕ ವ್ಯಾಯಾಮ ಸುರಕ್ಷಿತವಾಗಿದೆ?",
            hi: "मेरी वर्तमान स्वास्थ्य स्थिति के अनुसार मेरे लिए किस प्रकार का व्यायाम करना सुरक्षित रहेगा?"
          });
        }

        if (findings.some(f => (f.status || "").toLowerCase().includes("elevated"))) {
          generatedQuestions.push({
            id: "q-3",
            category: "Lab Tracking",
            en: "Should we re-test the elevated parameters in 8 to 12 weeks to observe the trend?",
            kn: "ಹೆಚ್ಚಾಗಿರುವ ಈ ಪರೀಕ್ಷಾ ಅಂಶಗಳನ್ನು ೮ ರಿಂದ ೧೨ ವಾರಗಳ ನಂತರ ಪುನಃ ಪರೀಕ್ಷಿಸಿ ನೋಡಬೇಕೇ?",
            hi: "क्या इन बढ़े हुए पैरामीटरों की ८ से १२ हफ्तों के बाद दोबारा जांच करानी चाहिए?"
          });
        }

        // Standard consultation safety questions
        generatedQuestions.push({
          id: "q-4",
          category: "Medication & Interaction Review",
          en: "Are any of my existing supplements or over-the-counter medicines interfering with these results?",
          kn: "ನಾನು ತೆಗೆದುಕೊಳ್ಳುತ್ತಿರುವ ಯಾವುದಾದರೂ ವಿಟಮಿನ್ ಅಥವಾ ಔಷಧಿಗಳು ಈ ವರದಿಯ ಮೇಲೆ ಪ್ರಭಾವ ಬೀರುತ್ತಿವೆಯೇ?",
          hi: "क्या मेरे द्वारा ली जा रही कोई सप्लीमेंट या अन्य दवा इन जांच परिणामों को प्रभावित कर रही है?"
        });

        sendJson(res, 200, {
          disclaimer: "These generated questions are structured to support your dialogue with a qualified medical doctor.",
          questions: generatedQuestions,
          languageUsed: language
        });
      } catch (err) {
        sendJson(res, 400, { error: "Invalid JSON request", details: err.message });
      }
    });
    return;
  }

  // 404 handler
  sendJson(res, 404, { error: "Endpoint not found", path: url.pathname });
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`[Aarogya Nova Backend] Server listening on port ${PORT}`);
  });
}

module.exports = { server, PORT };
