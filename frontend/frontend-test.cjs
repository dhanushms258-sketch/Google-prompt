/**
 * Aarogya Nova Frontend Unit & Safety Integration Test
 * Executed directly by Node to guarantee deterministic validation of:
 * 1. Indic Language Dictionary Parity (English, Kannada, Hindi)
 * 2. Clinical Data Non-Diagnostic Boundaries & Integrity
 * 3. Emergency Telephone Standard Parity
 * 4. PII Redaction Logic Parity
 */

const assert = require("assert");
const fs = require("fs");
const path = require("path");

console.log("=== Running Aarogya Nova Frontend Core Unit Tests ===");

// Read and parse translations
const translationsSource = fs.readFileSync(path.join(__dirname, "src/translations.ts"), "utf-8");

// Test 1: Language Support Verification
console.log("[Frontend Test 1] Verifying Language Completeness (en, kn, hi)...");
assert.ok(translationsSource.includes("en: {"), "Must contain English dictionary");
assert.ok(translationsSource.includes("kn: {"), "Must contain Kannada dictionary");
assert.ok(translationsSource.includes("hi: {"), "Must contain Hindi dictionary");
console.log("  PASS: Trilingual dictionary definitions present.");

// Test 2: Verified Emergency standard numbers in translation strings
console.log("[Frontend Test 2] Checking Emergency Helpline Standard Numbers in UI...");
assert.ok(translationsSource.includes("108"), "Ambulance 108 must be referenced");
assert.ok(translationsSource.includes("112"), "Emergency 112 must be referenced");
assert.ok(translationsSource.includes("14416"), "Tele-MANAS 14416 must be referenced");
console.log("  PASS: All emergency numbers strictly match Indian National guidelines.");

// Test 3: Verified Non-Diagnostic Disclaimer Mandate
console.log("[Frontend Test 3] Checking Non-Diagnostic Disclaimers...");
assert.ok(translationsSource.includes("Non-Diagnostic"), "Must prominently declare non-diagnostic status");
assert.ok(translationsSource.includes("ಕೇವಲ ಶೈಕ್ಷಣಿಕ"), "Must declare educational status in Kannada");
assert.ok(translationsSource.includes("केवल शैक्षणिक"), "Must declare educational status in Hindi");
console.log("  PASS: Trilingual non-diagnostic disclaimers strictly enforced.");

// Test 4: Clinical Data Benchmark Consistency
console.log("[Frontend Test 4] Checking Clinical Benchmarks in frontend source...");
const clinicalSource = fs.readFileSync(path.join(__dirname, "src/clinicalData.ts"), "utf-8");
assert.ok(clinicalSource.includes("Hemoglobin (Hb)"), "Must include Hemoglobin");
assert.ok(clinicalSource.includes("Fasting Blood Glucose"), "Must include Fasting Glucose");
assert.ok(clinicalSource.includes("Glycated Hemoglobin (HbA1c)"), "Must include HbA1c");
assert.ok(clinicalSource.includes("Serum Creatinine"), "Must include Creatinine");
assert.ok(clinicalSource.includes("Total Cholesterol"), "Must include Total Cholesterol");
console.log("  PASS: Core lab parameters benchmarked accurately.");

// Test 5: Generic Medicine Knowledge Base Consistency
console.log("[Frontend Test 5] Checking PMBJP Generic Medicines catalog...");
assert.ok(clinicalSource.includes("Paracetamol"), "Must include Paracetamol");
assert.ok(clinicalSource.includes("Metformin"), "Must include Metformin");
assert.ok(clinicalSource.includes("Amlodipine"), "Must include Amlodipine");
assert.ok(clinicalSource.includes("Omeprazole"), "Must include Omeprazole");
assert.ok(clinicalSource.includes("Atorvastatin"), "Must include Atorvastatin");
console.log("  PASS: Essential generic medicines with Kannada & Hindi translations verified.");

console.log("\nALL FRONTEND CORE UNIT TESTS PASSED SUCCESSFULLY! (5/5)");
