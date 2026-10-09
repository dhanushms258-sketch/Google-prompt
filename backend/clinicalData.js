/**
 * Aarogya Nova Clinical Knowledge Base & Verified References
 * Non-diagnostic, strictly educational, citing verified benchmarks:
 * ICMR (Indian Council of Medical Research), MoHFW, WHO, Jan Aushadhi (PMBI), MedlinePlus
 */

const VERIFIED_SOURCES = {
  ICMR: {
    name: "Indian Council of Medical Research (ICMR)",
    officialUrl: "https://www.icmr.nic.in",
    guidelines: "ICMR Guidelines for Management of Type 2 Diabetes & Cardiovascular Health (India)",
    description: "Apex body in India for the formulation, coordination and promotion of biomedical research."
  },
  MOHFW: {
    name: "Ministry of Health and Family Welfare, Govt. of India",
    officialUrl: "https://www.mohfw.gov.in",
    guidelines: "National Health Mission Clinical Guidance Standards",
    description: "Government of India ministry overseeing public health and family welfare."
  },
  WHO: {
    name: "World Health Organization (South-East Asia)",
    officialUrl: "https://www.who.int/southeastasia",
    guidelines: "WHO Essential Medicines & Laboratory Standard Ranges",
    description: "United Nations agency specialized in international public health."
  },
  JAN_AUSHADHI: {
    name: "Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP)",
    officialUrl: "https://janaushadhi.gov.in",
    guidelines: "Department of Pharmaceuticals, Ministry of Chemicals & Fertilizers",
    description: "Initiative to make quality generic medicines accessible at affordable prices across India."
  },
  MEDLINEPLUS: {
    name: "MedlinePlus (National Library of Medicine)",
    officialUrl: "https://medlineplus.gov",
    guidelines: "Consumer Health Information & Medical Test Interpreters",
    description: "Trusted service of the National Library of Medicine providing plain-language health information."
  }
};

const EMERGENCY_SERVICES_INDIA = {
  nationalEmergency: {
    number: "112",
    title: "National Emergency Number",
    scope: "All-in-one emergency helpline across India"
  },
  ambulance: {
    number: "108",
    title: "Emergency Medical Response / Ambulance",
    scope: "Toll-free emergency medical services across Indian states"
  },
  teleManas: {
    number: "14416",
    title: "Tele-MANAS Mental Health Assistance",
    scope: "24/7 Free comprehensive mental health helpline under MoHFW"
  },
  nationalPoisonCenter: {
    number: "1800-116-117",
    title: "National Poisons Information Centre (AIIMS New Delhi)",
    scope: "Toll-free 24/7 clinical poison exposure guidance"
  }
};

// Verified Generic Medicines (Indian Healthcare & PMBJP Essential Catalog)
const GENERIC_MEDICINES = [
  {
    id: "pcm-500",
    genericName: "Paracetamol (Acetaminophen)",
    kannadaName: "ಪ್ಯಾರಸಿಟಮಾಲ್ (ಜ್ವರ ಹಾಗೂ ನೋವು ನಿವಾರಕ)",
    hindiName: "पैरासिटामोल (बुखार एवं दर्द निवारक)",
    drugClass: "Analgesic & Antipyretic",
    commonIndications: ["Mild-to-moderate pain relief", "Temporary fever reduction"],
    pmbjpJanAushadhiAvailable: true,
    standardAdultDosageGeneral: "Typically 500mg-650mg every 4-6 hours as needed; strict maximum 4000mg (4g) in 24 hours under medical direction.",
    contraindicationsAndWarnings: [
      "Severe pre-existing liver impairment or chronic alcoholism.",
      "Never combine with multiple over-the-counter flu remedies containing paracetamol to prevent accidental toxic overdose.",
      "Seek urgent medical evaluation if fever persists beyond 3 days."
    ],
    storage: "Store in a cool, dry place below 30°C. Protect from direct heat and moisture.",
    verifiedReference: VERIFIED_SOURCES.JAN_AUSHADHI
  },
  {
    id: "met-500",
    genericName: "Metformin Hydrochloride",
    kannadaName: "ಮೆಟ್‌ಫಾರ್ಮಿನ್ ಹೈಡ್ರೋಕ್ಲೋರೈಡ್ (ಮಧುಮೇಹ ನಿಯಂತ್ರಕ)",
    hindiName: "मेटफॉर्मिन हाइड्रोक्लोराइड (मधुमेह नियंत्रक)",
    drugClass: "Biguanide (Antidiabetic Agent)",
    commonIndications: ["Type 2 Diabetes Mellitus management (helps lower hepatic glucose output)"],
    pmbjpJanAushadhiAvailable: true,
    standardAdultDosageGeneral: "Typically initiated at 500mg once or twice daily with meals as prescribed by a licensed clinician.",
    contraindicationsAndWarnings: [
      "Severe renal impairment (eGFR < 30 mL/min).",
      "Acute metabolic acidosis or diabetic ketoacidosis.",
      "Must take with meals to minimize gastrointestinal discomfort.",
      "Requires routine kidney and liver function monitoring."
    ],
    storage: "Store below 25°C in original blister packaging away from sunlight.",
    verifiedReference: VERIFIED_SOURCES.ICMR
  },
  {
    id: "aml-5",
    genericName: "Amlodipine Besylate",
    kannadaName: "ಆಮ್ಲೋಡಿಪೈನ್ ಬೆಸಿಲೇಟ್ (ರಕ್ತದೊತ್ತಡ ನಿಯಂತ್ರಕ)",
    hindiName: "एम्लोडिपिन बेसिलेट (रक्तचाप नियंत्रक)",
    drugClass: "Calcium Channel Blocker (Dihydropyridine)",
    commonIndications: ["Hypertension (High Blood Pressure)", "Chronic stable angina"],
    pmbjpJanAushadhiAvailable: true,
    standardAdultDosageGeneral: "Usually 5mg orally once daily, adjusted by physician based on patient response.",
    contraindicationsAndWarnings: [
      "Severe hypotension (systolic BP < 90 mmHg) or cardiogenic shock.",
      "May cause peripheral ankle edema (swelling) or dizziness upon standing abruptly.",
      "Do not discontinue abruptly without consulting your cardiologist."
    ],
    storage: "Store at controlled room temperature (15°C to 30°C).",
    verifiedReference: VERIFIED_SOURCES.MOHFW
  },
  {
    id: "ome-20",
    genericName: "Omeprazole",
    kannadaName: "ಒಮೆಪ್ರಜೋಲ್ (ಆಮ್ಲೀಯತೆ ಹಾಗೂ ಅಸಿಡಿಟಿ ಶಮನ)",
    hindiName: "ओमेप्राजोल (एसिडिटी एवं गैस्ट्रिक राहत)",
    drugClass: "Proton Pump Inhibitor (PPI)",
    commonIndications: ["Gastroesophageal reflux disease (GERD)", "Acid peptic disorder", "Gastric ulcers"],
    pmbjpJanAushadhiAvailable: true,
    standardAdultDosageGeneral: "Typically 20mg once daily taken 30-60 minutes before morning breakfast.",
    contraindicationsAndWarnings: [
      "Known hypersensitivity to substituted benzimidazoles.",
      "Long-term unsupervised usage may impair Vitamin B12 and magnesium absorption.",
      "Consult a doctor if chest pain radiates to arm, shoulder, or jaw (may mimic cardiac event)."
    ],
    storage: "Store protected from moisture and light below 25°C.",
    verifiedReference: VERIFIED_SOURCES.JAN_AUSHADHI
  },
  {
    id: "ato-10",
    genericName: "Atorvastatin Calcium",
    kannadaName: "ಅಟೋರ್ವಾಸ್ಟಾಟಿನ್ ಕ್ಯಾಲ್ಸಿಯಂ (ಕೊಲೆಸ್ಟ್ರಾಲ್ ನಿಯಂತ್ರಣ)",
    hindiName: "एटोरवास्टेटिन कैल्शियम (कोलेस्ट्रॉल नियंत्रक)",
    drugClass: "HMG-CoA Reductase Inhibitor (Statin)",
    commonIndications: ["Hypercholesterolemia (elevated LDL cholesterol)", "Prevention of cardiovascular events"],
    pmbjpJanAushadhiAvailable: true,
    standardAdultDosageGeneral: "Usually 10mg-40mg once daily in the evening or at bedtime as advised by physician.",
    contraindicationsAndWarnings: [
      "Active liver disease or unexplained persistent elevations of transaminases.",
      "Pregnancy and lactation.",
      "Report prompt, unexplained muscle soreness or tenderness (myopathy alert)."
    ],
    storage: "Store in tight container below 25°C.",
    verifiedReference: VERIFIED_SOURCES.ICMR
  },
  {
    id: "amox-500",
    genericName: "Amoxicillin Trihydrate",
    kannadaName: "ಅಮೋಕ್ಸಿಸಿಲಿನ್ ಟ್ರೈಹೈಡ್ರೇಟ್ (ಪ್ರತಿಜೀವಕ / ಆಂಟಿಬಯೋಟಿಕ್)",
    hindiName: "एमोक्सिसिलिन ट्राइहाइड्रेट (एंटीबायोटिक दवा)",
    drugClass: "Beta-lactam Antibiotic (Penicillin class)",
    commonIndications: ["Bacterial infections of respiratory tract, ear-nose-throat, skin (strictly bacterial, ineffective against viral colds)"],
    pmbjpJanAushadhiAvailable: true,
    standardAdultDosageGeneral: "Varies strictly by specific clinical culture; typically 500mg every 8 hours under strict prescription.",
    contraindicationsAndWarnings: [
      "History of severe penicillin allergy / anaphylaxis.",
      "Always complete full prescribed regimen to prevent antimicrobial resistance.",
      "Ineffective for viral conditions such as common cold or flu."
    ],
    storage: "Store capsules/tablets below 25°C in moisture-resistant packs.",
    verifiedReference: VERIFIED_SOURCES.WHO
  }
];

// Verified Lab Test Interpretations (Standard Adult Biological Reference Intervals)
const LAB_BENCHMARKS = [
  {
    testName: "Hemoglobin (Hb)",
    kannadaName: "ಹಿಮೋಗ್ಲೋಬಿನ್ (ರಕ್ತಕಣ ಸಾಮರ್ಥ್ಯ)",
    hindiName: "हीमोग्लोबिन (रक्त में ऑक्सीजन वाहक)",
    category: "Complete Blood Count (CBC)",
    unit: "g/dL",
    standardAdultInterval: {
      male: "13.0 - 17.0 g/dL",
      female: "12.0 - 15.5 g/dL"
    },
    plainLanguageExplanation: "Hemoglobin is an iron-rich protein inside red blood cells that carries vital oxygen from your lungs to the rest of your body.",
    kannadaExplanation: "ಹಿಮೋಗ್ಲೋಬಿನ್ ಕೆಂಪು ರಕ್ತಕಣಗಳಲ್ಲಿರುವ ಪ್ರಮುಖ ಪ್ರೋಟೀನ್ ಆಗಿದ್ದು, ಶ್ವಾಸಕೋಶದಿಂದ ಇಡೀ ದೇಹದ ಅಂಗಗಳಿಗೆ ಆಮ್ಲಜನಕವನ್ನು ಸರಬರಾಜು ಮಾಡುತ್ತದೆ.",
    hindiExplanation: "हीमोग्लोबिन लाल रक्त कोशिकाओं में पाया जाने वाला प्रोटीन है जो फेफड़ों से शरीर के सभी अंगों तक ऑक्सीजन पहुंचाता है।",
    lowMeaning: "May indicate anemia, nutritional iron or vitamin deficiency, or chronic blood loss. Often manifests as fatigue or dizziness.",
    highMeaning: "Can be seen in dehydration, chronic low oxygen conditions (e.g. high altitude), or heavy smoking.",
    suggestedDoctorQuestions: [
      "Are my hemoglobin results indicative of dietary iron deficiency or something else?",
      "Would you recommend checking ferritin, Vitamin B12, or folic acid levels?"
    ],
    verifiedReference: VERIFIED_SOURCES.MEDLINEPLUS
  },
  {
    testName: "Fasting Blood Glucose (FBG)",
    kannadaName: "ಉಪವಾಸ ರಕ್ತದ ಸಕ್ಕರೆ ಪ್ರಮಾಣ (ಫಾಸ್ಟಿಂಗ್ ಬ್ಲಡ್ ಶುಗರ್)",
    hindiName: "फास्टिंग ब्लड ग्लूकोज (खाली पेट शर्करा स्तर)",
    category: "Glycemic Profile",
    unit: "mg/dL",
    standardAdultInterval: {
      general: "70 - 99 mg/dL (Normal fasting), 100 - 125 mg/dL (Impaired fasting glucose / Prediabetes), ≥ 126 mg/dL (Requires clinical evaluation for diabetes)"
    },
    plainLanguageExplanation: "Measures the sugar concentration in your bloodstream after an overnight fast of 8 to 10 hours.",
    kannadaExplanation: "ರಾತ್ರಿ ೮ ರಿಂದ ೧೦ ಗಂಟೆಗಳ ಕಾಲ ಏನನ್ನೂ ಸೇವಿಸದೆ ಬೆಳಿಗ್ಗೆ ಖಾಲಿ ಹೊಟ್ಟೆಯಲ್ಲಿ ರಕ್ತದಲ್ಲಿರುವ ಗ್ಲೂಕೋಸ್ (ಸಕ್ಕರೆ) ಪ್ರಮಾಣವನ್ನು ಅಳೆಯುತ್ತದೆ.",
    hindiExplanation: "8 से 10 घंटे रात भर उपवास के बाद आपके रक्त में शर्करा (ग्लूकोज) के स्तर को मापता है।",
    lowMeaning: "Hypoglycemia (< 70 mg/dL): Can cause shakiness, sweating, palpitations, and confusion.",
    highMeaning: "Elevated fasting sugar signals insulin resistance or inadequate pancreatic insulin release.",
    suggestedDoctorQuestions: [
      "Does this fasting level warrant an HbA1c test to assess my average over the last 3 months?",
      "What lifestyle or dietary modifications should I begin with?"
    ],
    verifiedReference: VERIFIED_SOURCES.ICMR
  },
  {
    testName: "Glycated Hemoglobin (HbA1c)",
    kannadaName: "ಎಚ್‌ಬಿಎ೧ಸಿ (ಮೂರು ತಿಂಗಳ ಸರಾಸರಿ ಸಕ್ಕರೆ ಮಟ್ಟ)",
    hindiName: "एचबीए1सी (3 महीने का औसत रक्त शर्करा)",
    category: "Glycemic Profile",
    unit: "%",
    standardAdultInterval: {
      normal: "< 5.7%",
      prediabetes: "5.7% - 6.4%",
      diabetesCriteria: "≥ 6.5%"
    },
    plainLanguageExplanation: "Reflects the average proportion of blood glucose attached to red blood cells over the preceding 2 to 3 months.",
    kannadaExplanation: "ಕಳೆದ ಎರಡರಿಂದ ಮೂರು ತಿಂಗಳ ಅವಧಿಯಲ್ಲಿ ರಕ್ತದಲ್ಲಿನ ಸರಾಸರಿ ಸಕ್ಕರೆ ಪ್ರಮಾಣವನ್ನು ಇದು ಸ್ಪಷ್ಟವಾಗಿ ತಿಳಿಸುತ್ತದೆ.",
    hindiExplanation: "यह पिछले 2 से 3 महीनों में आपके रक्त शर्करा के औसत स्तर को दर्शाता है।",
    lowMeaning: "Very low levels are uncommon and can correlate with hemolytic anemia or recent severe bleeding.",
    highMeaning: "Indicates chronic hyperglycemia; risk factor for microvascular complications if unmanaged.",
    suggestedDoctorQuestions: [
      "What is my personal target HbA1c based on my age and general health?",
      "How frequently should I repeat this HbA1c test?"
    ],
    verifiedReference: VERIFIED_SOURCES.ICMR
  },
  {
    testName: "Serum Creatinine",
    kannadaName: "ಸೀರಮ್ ಕ್ರಿಯೇಟಿನೈನ್ (ಮೂತ್ರಪಿಂಡ / ಕಿಡ್ನಿ ಕಾರ್ಯಕ್ಷಮತೆ)",
    hindiName: "सीरम क्रिएटिनिन (गुर्दे / किडनी की कार्यप्रणाली)",
    category: "Renal Function Test (KFT)",
    unit: "mg/dL",
    standardAdultInterval: {
      male: "0.7 - 1.3 mg/dL",
      female: "0.5 - 1.1 mg/dL"
    },
    plainLanguageExplanation: "A natural metabolic waste product from muscle breakdown filtered out of the blood exclusively by healthy kidneys.",
    kannadaExplanation: "ಸ್ನಾಯುಗಳ ಚಟುವಟಿಕೆಯಿಂದ ಉತ್ಪತ್ತಿಯಾಗುವ ತ್ಯಾಜ್ಯ. ಆರೋಗ್ಯಕರ ಮೂತ್ರಪಿಂಡಗಳು ಇದನ್ನು ರಕ್ತದಿಂದ ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಫಿಲ್ಟರ್ ಮಾಡುತ್ತವೆ.",
    hindiExplanation: "मांसपेशियों के कामकाज से उत्पन्न अपशिष्ट पदार्थ जिसे स्वस्थ गुर्दे (किडनी) खून से छानकर बाहर निकालते हैं।",
    lowMeaning: "May correlate with diminished muscle mass, severe liver disease, or malnutrition.",
    highMeaning: "May reflect reduced renal filtration capability or acute dehydration.",
    suggestedDoctorQuestions: [
      "What is my estimated Glomerular Filtration Rate (eGFR) calculated from this number?",
      "Are any of my current medications putting extra strain on my kidneys?"
    ],
    verifiedReference: VERIFIED_SOURCES.MOHFW
  },
  {
    testName: "Total Cholesterol & LDL-C",
    kannadaName: "ಕೊಲೆಸ್ಟ್ರಾಲ್ ಹಾಗೂ ಎಲ್.ಡಿ.ಎಲ್ (ಲಿಪಿಡ್ ಪ್ರೊಫೈಲ್)",
    hindiName: "कोलेस्ट्रॉल एवं एलडीएल (लिपिड प्रोफाइल)",
    category: "Lipid Profile",
    unit: "mg/dL",
    standardAdultInterval: {
      totalCholesterolDesirable: "< 200 mg/dL",
      ldlOptimal: "< 100 mg/dL",
      hdlProtective: "> 40 mg/dL (Male), > 50 mg/dL (Female)",
      triglyceridesNormal: "< 150 mg/dL"
    },
    plainLanguageExplanation: "Measures fats in the blood. LDL is commonly termed 'bad' cholesterol because excessive levels can build plaque in artery walls.",
    kannadaExplanation: "ರಕ್ತದಲ್ಲಿನ ಜಿಡ್ಡು ಅಥವಾ ಕೊಬ್ಬಿನಾಂಶ. ಎಲ್.ಡಿ.ಎಲ್ ಹೆಚ್ಚಾದರೆ ರಕ್ತನಾಳಗಳಲ್ಲಿ ಅಡೆತಡೆಗಳು ಉಂಟಾಗುವ ಸಾಧ್ಯತೆ ಇರುತ್ತದೆ.",
    hindiExplanation: "रक्त में वसा की मात्रा। एलडीएल को सामान्यतः 'खराब कोलेस्ट्रॉल' कहा जाता है क्योंकि यह धमनियों में जमा हो सकता है।",
    lowMeaning: "Rare; can occur with severe hyperthyroidism, malabsorption, or advanced malnutrition.",
    highMeaning: "Elevated LDL increases atherosclerotic cardiovascular disease risk.",
    suggestedDoctorQuestions: [
      "What is my 10-year cardiovascular risk score?",
      "Should I focus on dietary changes or is medication needed to reach target LDL?"
    ],
    verifiedReference: VERIFIED_SOURCES.ICMR
  }
];

// Sample Verified Demo Reports for Medical Document Explorer
const SAMPLE_DOCUMENTS = [
  {
    id: "doc-sample-1",
    title: "Comprehensive Metabolic & Lipid Health Check",
    kannadaTitle: "ಸಮಗ್ರ ಮೆಟಾಬಾಲಿಕ್ ಮತ್ತು ಲಿಪಿಡ್ ಆರೋಗ್ಯ ವರದಿ",
    hindiTitle: "व्यापक मेटाबॉलिक एवं लिपिड स्वास्थ्य जांच रिपोर्ट",
    patientMeta: {
      patientPseudonym: "Patient-AN-4092",
      ageGender: "48 Y / Female",
      reportDate: "2026-09-18",
      facility: "District Diagnostic & Wellness Centre, Karnataka"
    },
    records: [
      {
        testName: "Fasting Blood Glucose (FBG)",
        value: 118,
        unit: "mg/dL",
        referenceRange: "70 - 99 mg/dL",
        status: "Elevated",
        statusClass: "warning",
        category: "Glycemic Profile"
      },
      {
        testName: "Glycated Hemoglobin (HbA1c)",
        value: 6.2,
        unit: "%",
        referenceRange: "< 5.7%",
        status: "Elevated (Prediabetes range)",
        statusClass: "warning",
        category: "Glycemic Profile"
      },
      {
        testName: "Hemoglobin (Hb)",
        value: 12.8,
        unit: "g/dL",
        referenceRange: "12.0 - 15.5 g/dL",
        status: "Within Expected Range",
        statusClass: "normal",
        category: "Complete Blood Count"
      },
      {
        testName: "Total Cholesterol",
        value: 224,
        unit: "mg/dL",
        referenceRange: "< 200 mg/dL",
        status: "Elevated",
        statusClass: "warning",
        category: "Lipid Profile"
      },
      {
        testName: "LDL Cholesterol",
        value: 138,
        unit: "mg/dL",
        referenceRange: "< 100 mg/dL",
        status: "Elevated",
        statusClass: "warning",
        category: "Lipid Profile"
      },
      {
        testName: "Serum Creatinine",
        value: 0.85,
        unit: "mg/dL",
        referenceRange: "0.5 - 1.1 mg/dL",
        status: "Within Expected Range",
        statusClass: "normal",
        category: "Renal Function"
      }
    ],
    plainLanguageSummary: "Your lab tests show normal red blood cell oxygen capacity (Hemoglobin) and healthy kidney filtration (Creatinine). The fasting glucose and HbA1c (6.2%) fall into the prediabetes range, and your total cholesterol is mildly higher than desirable. This provides an empowering window to review dietary habits, physical activity, and sleep with your physician before medication is required.",
    kannadaSummary: "ನಿಮ್ಮ ರಕ್ತ ಪರೀಕ್ಷೆಯ ಫಲಿತಾಂಶದಲ್ಲಿ ಹಿಮೋಗ್ಲೋಬಿನ್ ಮತ್ತು ಮೂತ್ರಪಿಂಡದ ಕ್ರಿಯೇಟಿನೈನ್ ಕಾರ್ಯಕ್ಷಮತೆ ಸಾಮಾನ್ಯವಾಗಿದೆ. ಆದರೆ ಉಪವಾಸದ ಸಕ್ಕರೆ ಪ್ರಮಾಣ ಹಾಗೂ ಮೂರು ತಿಂಗಳ ಸರಾಸರಿ ಎಚ್‌ಬಿಎ೧ಸಿ (೬.೨%) ಪ್ರಿಡಯಾಬಿಟಿಸ್ ಶ್ರೇಣಿಯಲ್ಲಿದೆ, ಹಾಗೆಯೇ ಕೊಲೆಸ್ಟ್ರಾಲ್ ಸ್ವಲ್ಪ ಹೆಚ್ಚಾಗಿದೆ. ನಿಮ್ಮ ವೈದ್ಯರನ್ನು ಭೇಟಿಯಾಗಿ ಆಹಾರ ಮತ್ತು ವ್ಯಾಯಾಮದ ಮೂಲಕ ಇದನ್ನು ಸುಲಭವಾಗಿ ನಿಯಂತ್ರಿಸಬಹುದು.",
    hindiSummary: "आपकी जांच में हीमोग्लोबिन और किडनी की कार्यप्रणाली (क्रिएटिनिन) पूरी तरह सामान्य है। हालांकि फास्टिंग शुगर और 3 महीने का HbA1c (6.2%) प्रीडायबिटीज रेंज में है तथा कोलेस्ट्रॉल हल्का बढ़ा हुआ है। इसे अपने डॉक्टर से परामर्श कर सही आहार व व्यायाम से समय रहते नियंत्रित किया जा सकता है।"
  },
  {
    id: "doc-sample-2",
    title: "General Wellness & Routine Blood Count",
    kannadaTitle: "ಸಾಮಾನ್ಯ ರಕ್ತ ತಪಾಸಣೆ ವರದಿ",
    hindiTitle: "सामान्य स्वास्थ्य एवं रक्त गणना रिपोर्ट",
    patientMeta: {
      patientPseudonym: "Patient-AN-7120",
      ageGender: "32 Y / Male",
      reportDate: "2026-10-02",
      facility: "Community Health Dispensary, New Delhi"
    },
    records: [
      {
        testName: "Hemoglobin (Hb)",
        value: 14.6,
        unit: "g/dL",
        referenceRange: "13.0 - 17.0 g/dL",
        status: "Within Expected Range",
        statusClass: "normal",
        category: "Complete Blood Count"
      },
      {
        testName: "Fasting Blood Glucose (FBG)",
        value: 88,
        unit: "mg/dL",
        referenceRange: "70 - 99 mg/dL",
        status: "Within Expected Range",
        statusClass: "normal",
        category: "Glycemic Profile"
      },
      {
        testName: "Serum Creatinine",
        value: 0.98,
        unit: "mg/dL",
        referenceRange: "0.7 - 1.3 mg/dL",
        status: "Within Expected Range",
        statusClass: "normal",
        category: "Renal Function"
      }
    ],
    plainLanguageSummary: "All tested parameters are sitting squarely within standard clinical reference intervals for a healthy adult male.",
    kannadaSummary: "ಪರೀಕ್ಷಿಸಲಾದ ಎಲ್ಲಾ ಅಂಶಗಳು ಆರೋಗ್ಯವಂತ ವಯಸ್ಕ ಪುರುಷನ ಸಾಮಾನ್ಯ ಶ್ರೇಣಿಯಲ್ಲೇ ಇವೆ.",
    hindiSummary: "जांच किए गए सभी पैरामीटर एक स्वस्थ वयस्क पुरुष के सामान्य मानकों के अनुसार हैं।"
  }
];

module.exports = {
  VERIFIED_SOURCES,
  EMERGENCY_SERVICES_INDIA,
  GENERIC_MEDICINES,
  LAB_BENCHMARKS,
  SAMPLE_DOCUMENTS
};
