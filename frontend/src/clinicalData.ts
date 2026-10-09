/**
 * Clinical Data Types and Verified Client Mock Fallback
 * Guarantees zero downtime even if backend network port is unreachable.
 */

export interface VerifiedReference {
  name: string;
  officialUrl: string;
  guidelines: string;
  description: string;
}

export interface GenericMedicine {
  id: string;
  genericName: string;
  kannadaName: string;
  hindiName: string;
  drugClass: string;
  commonIndications: string[];
  pmbjpJanAushadhiAvailable: boolean;
  standardAdultDosageGeneral: string;
  contraindicationsAndWarnings: string[];
  storage: string;
  verifiedReference: VerifiedReference;
}

export interface LabBenchmark {
  testName: string;
  kannadaName: string;
  hindiName: string;
  category: string;
  unit: string;
  standardAdultInterval: Record<string, string>;
  plainLanguageExplanation: string;
  kannadaExplanation: string;
  hindiExplanation: string;
  lowMeaning: string;
  highMeaning: string;
  suggestedDoctorQuestions: string[];
  verifiedReference: VerifiedReference;
}

export interface DocumentRecord {
  testName: string;
  value: number;
  unit: string;
  referenceRange: string;
  status: string;
  statusClass: 'normal' | 'warning' | 'critical';
  category: string;
}

export interface SampleMedicalDocument {
  id: string;
  title: string;
  kannadaTitle: string;
  hindiTitle: string;
  patientMeta: {
    patientPseudonym: string;
    ageGender: string;
    reportDate: string;
    facility: string;
  };
  records: DocumentRecord[];
  plainLanguageSummary: string;
  kannadaSummary: string;
  hindiSummary: string;
}

export const VERIFIED_SOURCES: Record<string, VerifiedReference> = {
  ICMR: {
    name: "Indian Council of Medical Research (ICMR)",
    officialUrl: "https://www.icmr.nic.in",
    guidelines: "ICMR Guidelines for Management of Type 2 Diabetes & Cardiovascular Health",
    description: "Apex medical research organization in India under MoHFW."
  },
  MOHFW: {
    name: "Ministry of Health and Family Welfare, Govt. of India",
    officialUrl: "https://www.mohfw.gov.in",
    guidelines: "National Health Mission Clinical Guidance Standards",
    description: "Federal government ministry managing national health infrastructure and standards."
  },
  WHO: {
    name: "World Health Organization (South-East Asia)",
    officialUrl: "https://www.who.int/southeastasia",
    guidelines: "WHO Essential Medicines & Laboratory Standard Ranges",
    description: "United Nations global public health body."
  },
  JAN_AUSHADHI: {
    name: "Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP)",
    officialUrl: "https://janaushadhi.gov.in",
    guidelines: "Department of Pharmaceuticals, Govt. of India",
    description: "National initiative providing quality, tested generic medicines at affordable costs."
  },
  MEDLINEPLUS: {
    name: "MedlinePlus (National Library of Medicine)",
    officialUrl: "https://medlineplus.gov",
    guidelines: "Consumer Health Information & Laboratory Test Interpretation",
    description: "Authoritative medical library service for patients and healthcare consumers."
  }
};

export const FALLBACK_MEDICINES: GenericMedicine[] = [
  {
    id: "pcm-500",
    genericName: "Paracetamol (Acetaminophen)",
    kannadaName: "ಪ್ಯಾರಸಿಟಮಾಲ್ (ಜ್ವರ ಹಾಗೂ ನೋವು ನಿವಾರಕ)",
    hindiName: "पैरासिटामोल (बुखार एवं दर्द निवारक)",
    drugClass: "Analgesic & Antipyretic",
    commonIndications: ["Mild-to-moderate pain relief", "Temporary fever reduction"],
    pmbjpJanAushadhiAvailable: true,
    standardAdultDosageGeneral: "Typically 500mg-650mg every 4-6 hours as needed; strict maximum 4000mg in 24 hours under medical guidance.",
    contraindicationsAndWarnings: [
      "Severe pre-existing liver impairment or chronic alcoholism.",
      "Never combine with multiple over-the-counter cold medicines containing paracetamol to prevent toxic overdose.",
      "Seek doctor consultation if fever continues beyond 3 days."
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
    commonIndications: ["Type 2 Diabetes Mellitus glycemic management"],
    pmbjpJanAushadhiAvailable: true,
    standardAdultDosageGeneral: "Typically started at 500mg once or twice daily with meals as prescribed by a licensed physician.",
    contraindicationsAndWarnings: [
      "Severe renal impairment (eGFR < 30 mL/min).",
      "Acute metabolic acidosis or diabetic ketoacidosis.",
      "Take with meals to minimize gastrointestinal discomfort.",
      "Requires periodic monitoring of kidney function."
    ],
    storage: "Store below 25°C in original blister pack away from sunlight.",
    verifiedReference: VERIFIED_SOURCES.ICMR
  },
  {
    id: "aml-5",
    genericName: "Amlodipine Besylate",
    kannadaName: "ಆಮ್ಲೋಡಿಪೈನ್ ಬೆಸಿಲೇಟ್ (ರಕ್ತದೊತ್ತಡ ನಿಯಂತ್ರಕ)",
    hindiName: "एम्लोडिपिन बेसिलेट (रक्तचाप नियंत्रक)",
    drugClass: "Calcium Channel Blocker",
    commonIndications: ["Hypertension (High Blood Pressure)", "Chronic stable angina"],
    pmbjpJanAushadhiAvailable: true,
    standardAdultDosageGeneral: "Usually 5mg orally once daily, adjusted by physician based on patient response.",
    contraindicationsAndWarnings: [
      "Severe hypotension (systolic BP < 90 mmHg).",
      "May cause peripheral ankle swelling or dizziness when standing up quickly.",
      "Do not discontinue abruptly without cardiologist advice."
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
    commonIndications: ["GERD (Acid reflux)", "Acid peptic disorder", "Gastric ulcers"],
    pmbjpJanAushadhiAvailable: true,
    standardAdultDosageGeneral: "Typically 20mg once daily taken 30-60 minutes before morning breakfast.",
    contraindicationsAndWarnings: [
      "Known hypersensitivity to proton pump inhibitors.",
      "Long-term unmonitored usage may reduce magnesium and vitamin B12 absorption.",
      "Seek emergency care if chest pain radiates to left arm or jaw (potential cardiac symptom)."
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
    commonIndications: ["Hypercholesterolemia (elevated LDL cholesterol)", "Cardiovascular risk reduction"],
    pmbjpJanAushadhiAvailable: true,
    standardAdultDosageGeneral: "Usually 10mg-40mg once daily in evening or bedtime as directed by physician.",
    contraindicationsAndWarnings: [
      "Active liver disease or unexplained persistent enzyme elevation.",
      "Pregnancy and breastfeeding.",
      "Report unexplained muscle pain or weakness immediately."
    ],
    storage: "Store in tightly closed container below 25°C.",
    verifiedReference: VERIFIED_SOURCES.ICMR
  }
];

export const FALLBACK_BENCHMARKS: LabBenchmark[] = [
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
    plainLanguageExplanation: "Hemoglobin is the vital protein in red blood cells that ferries oxygen from your lungs to every organ in your body.",
    kannadaExplanation: "ಹಿಮೋಗ್ಲೋಬಿನ್ ಕೆಂಪು ರಕ್ತಕಣಗಳಲ್ಲಿರುವ ಪ್ರಮುಖ ಪ್ರೋಟೀನ್ ಆಗಿದ್ದು, ಶ್ವಾಸಕೋಶದಿಂದ ಇಡೀ ದೇಹದ ಅಂಗಗಳಿಗೆ ಆಮ್ಲಜನಕವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    hindiExplanation: "हीमोग्लोबिन लाल रक्त कोशिकाओं में मौजूद प्रोटीन है जो फेफड़ों से शरीर के सभी अंगों तक ऑक्सीजन पहुंचाता है।",
    lowMeaning: "Often signifies anemia due to iron or B12 deficiency, or blood loss. Associated with fatigue, pale skin, and shortness of breath.",
    highMeaning: "Can reflect dehydration, living at high elevations, or chronic smoking.",
    suggestedDoctorQuestions: [
      "Is my hemoglobin reading consistent with nutritional iron deficiency?",
      "Would you recommend checking ferritin or Vitamin B12 levels?"
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
      normal: "70 - 99 mg/dL",
      prediabetes: "100 - 125 mg/dL",
      diabetesAlert: "≥ 126 mg/dL"
    },
    plainLanguageExplanation: "Measures blood glucose concentration after 8-10 hours of fasting overnight.",
    kannadaExplanation: "ರಾತ್ರಿ ೮ ರಿಂದ ೧೦ ಗಂಟೆಗಳ ಕಾಲ ಏನನ್ನೂ ಸೇವಿಸದೆ ಬೆಳಿಗ್ಗೆ ಖಾಲಿ ಹೊಟ್ಟೆಯಲ್ಲಿ ರಕ್ತದಲ್ಲಿರುವ ಗ್ಲೂಕೋಸ್ ಪ್ರಮಾಣವನ್ನು ಅಳೆಯುತ್ತದೆ.",
    hindiExplanation: "8 से 10 घंटे रात भर उपवास के बाद आपके रक्त में शर्करा (ग्लूकोज) के स्तर को मापता है।",
    lowMeaning: "Hypoglycemia (< 70 mg/dL): Can cause trembling, cold sweat, rapid heart rate, and lightheadedness.",
    highMeaning: "Signals insulin resistance or decreased insulin output from the pancreas.",
    suggestedDoctorQuestions: [
      "Does this fasting level warrant checking an HbA1c to see my 3-month average?",
      "What meal adjustments and physical activities are most helpful right now?"
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
      diabetesRange: "≥ 6.5%"
    },
    plainLanguageExplanation: "Indicates the average percentage of blood glucose that bonded to red blood cells over the preceding 2 to 3 months.",
    kannadaExplanation: "ಕಳೆದ ಎರಡರಿಂದ ಮೂರು ತಿಂಗಳ ಅವಧಿಯಲ್ಲಿ ರಕ್ತದಲ್ಲಿನ ಸರಾಸರಿ ಸಕ್ಕರೆ ಪ್ರಮಾಣವನ್ನು ಇದು ಸ್ಪಷ್ಟವಾಗಿ ತಿಳಿಸುತ್ತದೆ.",
    hindiExplanation: "यह पिछले 2 से 3 महीनों में आपके रक्त शर्करा के औसत स्तर को दर्शाता है।",
    lowMeaning: "Less common; can occur with rapid red blood cell turnover or recent severe hemorrhage.",
    highMeaning: "Reflects ongoing elevated sugar in the bloodstream over recent months.",
    suggestedDoctorQuestions: [
      "What is my personalized target HbA1c goal?",
      "How frequently should we monitor this metric?"
    ],
    verifiedReference: VERIFIED_SOURCES.ICMR
  },
  {
    testName: "Serum Creatinine",
    kannadaName: "ಸೀರಮ್ ಕ್ರಿಯೇಟಿನೈನ್ (ಮೂತ್ರಪಿಂಡ / ಕಿಡ್ನಿ ಕಾರ್ಯಕ್ಷಮತೆ)",
    hindiName: "सीरम क्रिएटिनिन (गुर्दे / किडनी की कार्यप्रणाली)",
    category: "Renal Function",
    unit: "mg/dL",
    standardAdultInterval: {
      male: "0.7 - 1.3 mg/dL",
      female: "0.5 - 1.1 mg/dL"
    },
    plainLanguageExplanation: "A normal byproduct of muscle breakdown that healthy kidneys continuously filter out of the bloodstream.",
    kannadaExplanation: "ಸ್ನಾಯುಗಳ ಚಟುವಟಿಕೆಯಿಂದ ಉತ್ಪತ್ತಿಯಾಗುವ ತ್ಯಾಜ್ಯ. ಆರೋಗ್ಯಕರ ಮೂತ್ರಪಿಂಡಗಳು ಇದನ್ನು ರಕ್ತದಿಂದ ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಫಿಲ್ಟರ್ ಮಾಡುತ್ತವೆ.",
    hindiExplanation: "मांसपेशियों की कार्यप्रणाली से उत्पन्न अपशिष्ट पदार्थ जिसे स्वस्थ गुर्दे (किडनी) खून से छानकर बाहर निकालते हैं।",
    lowMeaning: "Can be related to low muscle mass, advanced liver conditions, or malnutrition.",
    highMeaning: "Suggests reduced filtering efficiency by the kidneys or acute dehydration.",
    suggestedDoctorQuestions: [
      "What is my estimated Glomerular Filtration Rate (eGFR)?",
      "Are any of my routine medicines or painkillers safe for my kidneys?"
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
      totalCholesterol: "< 200 mg/dL",
      ldl: "< 100 mg/dL"
    },
    plainLanguageExplanation: "Measures circulating fats in the blood. Excess LDL can accumulate in blood vessel walls over time.",
    kannadaExplanation: "ರಕ್ತದಲ್ಲಿನ ಕೊಬ್ಬಿನಾಂಶ. ಎಲ್.ಡಿ.ಎಲ್ ಹೆಚ್ಚಾದರೆ ರಕ್ತನಾಳಗಳಲ್ಲಿ ಅಡೆತಡೆಗಳು ಉಂಟಾಗುವ ಸಾಧ್ಯತೆ ಇರುತ್ತದೆ.",
    hindiExplanation: "रक्त में वसा की मात्रा। अधिक एलडीएल धमनियों में रुकावट पैदा कर सकता है।",
    lowMeaning: "Uncommon; can be associated with hyperthyroidism or malabsorption.",
    highMeaning: "Increases risk of cardiovascular plaque build-up.",
    suggestedDoctorQuestions: [
      "What is my 10-year heart health risk score?",
      "Do I need statin therapy or can lifestyle modifications suffice for now?"
    ],
    verifiedReference: VERIFIED_SOURCES.ICMR
  }
];

export const FALLBACK_SAMPLE_DOCS: SampleMedicalDocument[] = [
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
    plainLanguageSummary: "Your lab tests show normal red blood cell oxygen capacity (Hemoglobin) and healthy kidney filtration (Creatinine). Fasting glucose and HbA1c (6.2%) fall into the prediabetes range, and total cholesterol is mildly higher than desirable. This provides an empowering window to review dietary habits, physical activity, and sleep with your physician before medication is required.",
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
