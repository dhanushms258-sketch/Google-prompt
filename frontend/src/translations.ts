/**
 * Multilingual Translations for Aarogya Nova
 * Prioritizing English, ಕನ್ನಡ (Kannada), and हिन्दी (Hindi).
 */

export type SupportedLanguage = 'en' | 'kn' | 'hi';

export interface TranslationDictionary {
  appName: string;
  tagline: string;
  disclaimerBadge: string;
  disclaimerFull: string;
  tabs: {
    journey: string;
    explorer: string;
    glossary: string;
    doctorQuestions: string;
    medicines: string;
    accessibility: string;
    privacy: string;
  };
  emergencyBar: {
    label: string;
    dialAmbulance: string;
    dialEmergency: string;
    dialTeleManas: string;
  };
  journey: {
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    btnNext: string;
    btnPrev: string;
    btnReset: string;
    nonDiagNotice: string;
  };
  explorer: {
    title: string;
    subtitle: string;
    sampleSelector: string;
    patientDetails: string;
    testName: string;
    observedValue: string;
    referenceRange: string;
    clinicalStatus: string;
    plainMeaning: string;
    doctorInquiryTip: string;
    uploadNotice: string;
    uploadButton: string;
  };
  glossary: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    normalRange: string;
    lowLevelImpact: string;
    highLevelImpact: string;
    verifiedSource: string;
  };
  doctorQuestions: {
    title: string;
    subtitle: string;
    selectConcerns: string;
    btnGenerate: string;
    checklistTitle: string;
    copyBtn: string;
    copied: string;
    printBtn: string;
  };
  medicines: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    genericNotice: string;
    janAushadhiPill: string;
    indications: string;
    dosageAdvice: string;
    warnings: string;
    storage: string;
  };
  accessibility: {
    title: string;
    subtitle: string;
    themeMode: string;
    themeLight: string;
    themeDark: string;
    themeHighContrast: string;
    textSize: string;
    sizeSmall: string;
    sizeMedium: string;
    sizeLarge: string;
    sizeExtraLarge: string;
    dyslexiaFont: string;
    reducedMotion: string;
    audioReader: string;
    audioReaderActive: string;
    audioReaderIdle: string;
  };
  privacy: {
    title: string;
    subtitle: string;
    localProcessingNotice: string;
    pasteTestReport: string;
    btnSanitize: string;
    redactedOutput: string;
    removedItems: string;
    dpdpNotice: string;
    clearStorageBtn: string;
    storageCleared: string;
  };
  footer: {
    copyright: string;
    guidelinesNotice: string;
  };
}

export const TRANSLATIONS: Record<SupportedLanguage, TranslationDictionary> = {
  en: {
    appName: "AAROGYA NOVA",
    tagline: "Multilingual Healthcare Accessibility & Literacy Platform",
    disclaimerBadge: "Strictly Educational & Non-Diagnostic",
    disclaimerFull: "Aarogya Nova is an educational literacy aid designed to empower patient understanding. It does not provide medical diagnoses, treatment decisions, or clinical prescriptions. Always consult a qualified registered healthcare professional.",
    tabs: {
      journey: "Health Journey",
      explorer: "Document Explorer",
      glossary: "Verified Terms",
      doctorQuestions: "Doctor Q-Builder",
      medicines: "Generic Medicines",
      accessibility: "Accessibility Studio",
      privacy: "Privacy Controls"
    },
    emergencyBar: {
      label: "Official India Emergency Contacts (24/7 Toll-Free):",
      dialAmbulance: "Ambulance: 108",
      dialEmergency: "National Emergency: 112",
      dialTeleManas: "Tele-MANAS: 14416"
    },
    journey: {
      title: "Interactive Health Understanding Journey",
      subtitle: "Empowering yourself with clarity before, during, and after medical consultations.",
      step1Title: "1. Lab Report Deconstruction",
      step1Desc: "Understand why diagnostic values fluctuate and what standard reference intervals mean for your demographic group.",
      step2Title: "2. Plain-Language Discovery",
      step2Desc: "Translate complex biological indicators (like HbA1c, eGFR, LDL) into direct daily-life terms without panic.",
      step3Title: "3. Doctor Consultation Preparation",
      step3Desc: "Structure your concerns and generate concrete, high-priority questions to make the most of your 10-minute clinic visit.",
      step4Title: "4. Prescribed Medication Literacy",
      step4Desc: "Learn how to search generic equivalents via Jan Aushadhi, identify contraindications, and safely store your medicines.",
      btnNext: "Next Step",
      btnPrev: "Previous Step",
      btnReset: "Restart Journey",
      nonDiagNotice: "Safe Learning Note: This journey helps you formulate informed questions for your physician."
    },
    explorer: {
      title: "Medical Document Explorer",
      subtitle: "Inspect lab reports and health summaries with bilingual plain-language translations and verified reference standards.",
      sampleSelector: "Select a Verified Sample Report:",
      patientDetails: "Patient Demographic Reference",
      testName: "Diagnostic Parameter",
      observedValue: "Observed Value",
      referenceRange: "Verified Adult Range",
      clinicalStatus: "Clinical Finding",
      plainMeaning: "Plain-Language Explanation",
      doctorInquiryTip: "Suggested Question For Your Doctor",
      uploadNotice: "Upload Your Lab Document (Processed 100% locally on your device with automatic PII redaction)",
      uploadButton: "Import Lab File (PDF/Image/Text)"
    },
    glossary: {
      title: "Verified Plain-Language Medical References",
      subtitle: "Standard biological reference intervals vetted against ICMR, WHO, and MoHFW clinical guidance.",
      searchPlaceholder: "Search test name (e.g. Hemoglobin, Glucose, Creatinine, Lipid)...",
      normalRange: "Standard Biological Reference Interval",
      lowLevelImpact: "What lower values usually mean",
      highLevelImpact: "What elevated values usually mean",
      verifiedSource: "Authoritative Reference Body"
    },
    doctorQuestions: {
      title: "Doctor-Question Builder",
      subtitle: "Build a structured checklist of meaningful questions for your upcoming medical consultation.",
      selectConcerns: "Select areas of health concern to address with your doctor:",
      btnGenerate: "Generate Tailored Consultation Checklist",
      checklistTitle: "Your Consultation Checklist",
      copyBtn: "Copy Checklist",
      copied: "Copied to Clipboard!",
      printBtn: "Print / Save as PDF"
    },
    medicines: {
      title: "Generic Medicine Information Lookup",
      subtitle: "Verified pharmaceutical guidance based on the Jan Aushadhi (PMBJP) essential catalog and MoHFW guidelines.",
      searchPlaceholder: "Search generic name or drug class (e.g., Paracetamol, Metformin, Amlodipine)...",
      genericNotice: "Generic medicines have identical active ingredients, efficacy, and safety as branded drugs at significantly lower cost.",
      janAushadhiPill: "Jan Aushadhi Available (PMBJP)",
      indications: "Primary Approved Indications",
      dosageAdvice: "General Information (Non-Prescription)",
      warnings: "Contraindications & Safety Precautions",
      storage: "Safe Storage Requirements"
    },
    accessibility: {
      title: "Accessibility Studio",
      subtitle: "Customize your viewing and reading experience to match your cognitive and sensory preferences (WCAG 2.1 AAA Compliant).",
      themeMode: "Visual Theme",
      themeLight: "Standard Light",
      themeDark: "Eye-Comfort Dark",
      themeHighContrast: "High Contrast (AAA)",
      textSize: "Reading Text Size",
      sizeSmall: "Compact (14px)",
      sizeMedium: "Default (16px)",
      sizeLarge: "Enhanced (18px)",
      sizeExtraLarge: "Maximum (21px)",
      dyslexiaFont: "Dyslexia-Friendly Typography",
      reducedMotion: "Reduced Motion (Disable Animations)",
      audioReader: "Screen Reader Speech Assistance",
      audioReaderActive: "Speech Synthesizer Active (Click any card to read aloud)",
      audioReaderIdle: "Speech Synthesizer Inactive"
    },
    privacy: {
      title: "Privacy Controls & Data Transmission Disclosure",
      subtitle: "Strict client-side protection complying with India's Digital Personal Data Protection (DPDP) standards.",
      localProcessingNotice: "Zero Remote Data Leakage: All medical text analysis, plain-language translation, and redaction runs locally inside your browser process or local verified backend.",
      pasteTestReport: "Test Document Redaction Engine (Paste raw medical discharge or report text):",
      btnSanitize: "Redact Sensitive PII (Aadhaar, Phone, Email, ABHA ID)",
      redactedOutput: "Redacted Safe Document Output:",
      removedItems: "Redacted Protected Identifiers:",
      dpdpNotice: "Decoupled Identifier Architecture: No patient identity is ever paired with diagnostic numbers.",
      clearStorageBtn: "Wipe All Local Session Health Data",
      storageCleared: "Local Session Cache Cleared Successfully!"
    },
    footer: {
      copyright: "Aarogya Nova — Open-Source Healthcare Accessibility Platform.",
      guidelinesNotice: "Compliant with WHO, ICMR, and MoHFW health literacy frameworks. Never substitute for qualified medical care."
    }
  },
  kn: {
    appName: "ಆರೋಗ್ಯ ನೋವಾ",
    tagline: "ಬಹುಭಾಷಾ ಆರೋಗ್ಯ ಜಾಗೃತಿ ಮತ್ತು ಸುಲಭ ಸಂಪರ್ಕ ವೇದಿಕೆ",
    disclaimerBadge: "ಕೇವಲ ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಮಾಹಿತಿ ಉದ್ದೇಶಕ್ಕಾಗಿ ಮಾತ್ರ",
    disclaimerFull: "ಆರೋಗ್ಯ ನೋವಾ ಕೇವಲ ಆರೋಗ್ಯ ಜ್ಞಾನ ಹೆಚ್ಚಿಸಲು ರೂಪಿಸಲಾದ ತಂತ್ರಾಂಶವಾಗಿದೆ. ಇದು ಯಾವುದೇ ರೋಗನಿರ್ಣಯ ಅಥವಾ ಚಿಕಿತ್ಸೆಯನ್ನು ನೀಡುವುದಿಲ್ಲ. ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳಿಗೆ ದಯವಿಟ್ಟು ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
    tabs: {
      journey: "ಆರೋಗ್ಯ ಪಯಣ",
      explorer: "ವರದಿ ಪರಿಶೋಧಕ",
      glossary: "ಪರಿಶೀಲಿತ ಪದಕೋಶ",
      doctorQuestions: "ವೈದ್ಯರ ಪ್ರಶ್ನಾವಳಿ",
      medicines: "ಜೆನೆರಿಕ್ ಔಷಧಿಗಳು",
      accessibility: "ಸುಲಭ ಪ್ರವೇಶ ಸೆಟ್ಟಿಂಗ್",
      privacy: "ಗೌಪ್ಯತೆ ಮತ್ತು ರಕ್ಷಣೆ"
    },
    emergencyBar: {
      label: "ಭಾರತ ಸರ್ಕಾರದ ಅಧಿಕೃತ ತುರ್ತು ಸಹಾಯವಾಣಿಗಳು (೨೪/೭ ಉಚಿತ):",
      dialAmbulance: "ಆಂಬ್ಯುಲೆನ್ಸ್: 108",
      dialEmergency: "ರಾಷ್ಟ್ರೀಯ ತುರ್ತು ಸಂಖ್ಯೆ: 112",
      dialTeleManas: "ಟೆಲಿ-ಮಾನಸ್ ಮಾನಸಿಕ ಆರೋಗ್ಯ: 14416"
    },
    journey: {
      title: "ಪಾರಸ್ಪರಿಕ ಆರೋಗ್ಯ ತಿಳುವಳಿಕೆ ಪಯಣ",
      subtitle: "ವೈದ್ಯರನ್ನು ಭೇಟಿಯಾಗುವ ಮುನ್ನ, ಭೇಟಿಯ ಸಮಯದಲ್ಲಿ ಮತ್ತು ನಂತರ ಸ್ಪಷ್ಟ ತಿಳುವಳಿಕೆ ಪಡೆಯಿರಿ.",
      step1Title: "೧. ಲ್ಯಾಬ್ ವರದಿ ವಿಶ್ಲೇಷಣೆ",
      step1Desc: "ನಿಮ್ಮ ರಕ್ತ ಪರೀಕ್ಷೆಯ ಫಲಿತಾಂಶಗಳು ಏಕೆ ಬದಲಾಗುತ್ತವೆ ಮತ್ತು ಸಾಮಾನ್ಯ ಮಿತಿಗಳು ಏನನ್ನು ಸೂಚಿಸುತ್ತವೆ ಎಂಬುದನ್ನು ತಿಳಿಯಿರಿ.",
      step2Title: "೨. ಸರಳ ಭಾಷೆಯಲ್ಲಿ ಅರ್ಥೈಸಿಕೊಳ್ಳುವಿಕೆ",
      step2Desc: "HbA1c, ಕ್ರಿಯೇಟಿನೈನ್ ಮತ್ತು ಕೊಲೆಸ್ಟ್ರಾಲ್‌ನಂತಹ ಸಂಕೀರ್ಣ ಪದಗಳನ್ನು ಸರಳ ಕನ್ನಡದಲ್ಲಿ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.",
      step3Title: "೩. ವೈದ್ಯರನ್ನು ಭೇಟಿಯಾಗಲು ಸಿದ್ಧತೆ",
      step3Desc: "ವೈದ್ಯರ ಬಳಿ ಕೇಳಬೇಕಾದ ಪ್ರಮುಖ ಪ್ರಶ್ನೆಗಳನ್ನು ಮೊದಲೇ ಸಿದ್ಧಪಡಿಸಿಕೊಳ್ಳಿ.",
      step4Title: "೪. ಔಷಧಿಗಳ ಬಗ್ಗೆ ಅರಿವು",
      step4Desc: "ಜನೌಷಧಿ ಕೇಂದ್ರಗಳ ಜೆನೆರಿಕ್ ಔಷಧಿಗಳು, ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು ಮತ್ತು ಸರಿಯಾದ ಸಂಗ್ರಹಣಾ ವಿಧಾನಗಳನ್ನು ತಿಳಿಯಿರಿ.",
      btnNext: "ಮುಂದಿನ ಹಂತ",
      btnPrev: "ಹಿಂದಿನ ಹಂತ",
      btnReset: "ಮೊದಲಿಂದ ಪ್ರಾರಂಭಿಸಿ",
      nonDiagNotice: "ಸುರಕ್ಷಿತ ಕಲಿಕೆ: ಇದು ವೈದ್ಯರ ಜೊತೆ ಚರ್ಚಿಸಲು ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳನ್ನು ರೂಪಿಸಲು ನೆರವಾಗುತ್ತದೆ."
    },
    explorer: {
      title: "ವೈದ್ಯಕೀಯ ದಾಖಲೆಗಳ ಪರಿಶೋಧಕ",
      subtitle: "ಲ್ಯಾಬ್ ವರದಿಗಳನ್ನು ಸರಳ ವಿವರಣೆ ಹಾಗೂ ಅಧಿಕೃತ ಮಾನದಂಡಗಳೊಂದಿಗೆ ಕನ್ನಡದಲ್ಲಿ ವೀಕ್ಷಿಸಿ.",
      sampleSelector: "ಮಾದರಿ ವರದಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
      patientDetails: "ರೋಗಿಯ ಸಾಮಾನ್ಯ ವಿವರ",
      testName: "ಪರೀಕ್ಷಾ ವಿವರ",
      observedValue: "ನಿಮ್ಮ ಪರೀಕ್ಷಾ ಫಲಿತಾಂಶ",
      referenceRange: "ಸಾಮಾನ್ಯ ಮಾನದಂಡದ ಮಿತಿ",
      clinicalStatus: "ವರದಿಯ ಸ್ಥಿತಿ",
      plainMeaning: "ಸರಳ ವಿವರಣೆ",
      doctorInquiryTip: "ವೈದ್ಯರ ಬಳಿ ಕೇಳಬೇಕಾದ ಪ್ರಶ್ನೆ",
      uploadNotice: "ನಿಮ್ಮ ವರದಿಯನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ (ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲೇ ಸುರಕ್ಷಿತವಾಗಿ ಸಂಸ್ಕರಿಸಲಾಗುತ್ತದೆ)",
      uploadButton: "ವರದಿ ಫೈಲ್ ಆಯ್ಕೆಮಾಡಿ"
    },
    glossary: {
      title: "ಪರಿಶೀಲಿತ ವೈದ್ಯಕೀಯ ಪದಕೋಶ",
      subtitle: "ICMR ಮತ್ತು WHO ಮಾನದಂಡಗಳ ಆಧಾರದ ಮೇಲೆ ಸಿದ್ಧಪಡಿಸಲಾದ ವೈದ್ಯಕೀಯ ವಿವರಣೆಗಳು.",
      searchPlaceholder: "ಪರೀಕ್ಷೆಯ ಹೆಸರನ್ನು ಹುಡುಕಿ (ಉದಾ: ಹಿಮೋಗ್ಲೋಬಿನ್, ಸಕ್ಕರೆ ಮಟ್ಟ, ಕ್ರಿಯೇಟಿನೈನ್)...",
      normalRange: "ಸಾಮಾನ್ಯ ಮಾನದಂಡದ ಮಿತಿ",
      lowLevelImpact: "ಕಡಿಮೆ ಪ್ರಮಾಣದ ಅರ್ಥವೇನು?",
      highLevelImpact: "ಹೆಚ್ಚಿನ ಪ್ರಮಾಣದ ಅರ್ಥವೇನು?",
      verifiedSource: "ಅಧಿಕೃತ ವೈದ್ಯಕೀಯ ಮೂಲ"
    },
    doctorQuestions: {
      title: "ವೈದ್ಯರ ಪ್ರಶ್ನಾವಳಿ ಬಿಲ್ಡರ್",
      subtitle: "ವೈದ್ಯರ ಭೇಟಿಯ ವೇಳೆ ಕೇಳಲು ಮುಖ್ಯವಾದ ಪ್ರಶ್ನೆಗಳ ಪಟ್ಟಿಯನ್ನು ಸಿದ್ಧಪಡಿಸಿ.",
      selectConcerns: "ನಿಮ್ಮ ಆರೋಗ್ಯ ಕಾಳಜಿಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
      btnGenerate: "ಪ್ರಶ್ನೆಗಳ ಪಟ್ಟಿಯನ್ನು ರಚಿಸಿ",
      checklistTitle: "ನಿಮ್ಮ ವೈದ್ಯಕೀಯ ಪ್ರಶ್ನಾವಳಿ ಪಟ್ಟಿ",
      copyBtn: "ಪ್ರಶ್ನೆಗಳನ್ನು ನಕಲಿಸಿ",
      copied: "ನಕಲಿಸಲಾಗಿದೆ!",
      printBtn: "ಮುದ್ರಿಸಿ / ಪಿಡಿಎಫ್ ಉಳಿಸಿ"
    },
    medicines: {
      title: "ಜೆನೆರಿಕ್ ಔಷಧಿ ಮಾಹಿತಿ ಕೋಶ",
      subtitle: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಭಾರತೀಯ ಜನೌಷಧಿ ಪರಿಯೋಜನೆ (PMBJP) ಮತ್ತು MoHFW ಆಧಾರಿತ ಪರಿಶೀಲಿತ ಮಾಹಿತಿ.",
      searchPlaceholder: "ಔಷಧಿಯ ಜೆನೆರಿಕ್ ಹೆಸರು ಹುಡುಕಿ (ಉದಾ: ಪ್ಯಾರಸಿಟಮಾಲ್, ಮೆಟ್‌ಫಾರ್ಮಿನ್, ಆಮ್ಲೋಡಿಪೈನ್)...",
      genericNotice: "ಜೆನೆರಿಕ್ ಔಷಧಿಗಳು ಬ್ರಾಂಡೆಡ್ ಔಷಧಿಗಳಷ್ಟೇ ಪರಿಣಾಮಕಾರಿ ಮತ್ತು ಕಡಿಮೆ ವೆಚ್ಚದಲ್ಲಿ ಲಭ್ಯವಿರುತ್ತವೆ.",
      janAushadhiPill: "ಜನೌಷಧಿ ಕೇಂದ್ರಗಳಲ್ಲಿ ಲಭ್ಯ",
      indications: "ಮುಖ್ಯ ಉಪಯೋಗಗಳು",
      dosageAdvice: "ಸಾಮಾನ್ಯ ಮಾಹಿತಿ",
      warnings: "ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು ಮತ್ತು ನಿರ್ಬಂಧಗಳು",
      storage: "ಸಂಗ್ರಹಣಾ ನಿಯಮಗಳು"
    },
    accessibility: {
      title: "ಸುಲಭ ಪ್ರವೇಶ ಸ್ಟುಡಿಯೋ (Accessibility)",
      subtitle: "ನಿಮ್ಮ ದೃಷ್ಟಿ ಹಾಗೂ ಓದುವ ಅನುಕೂಲಕ್ಕೆ ತಕ್ಕಂತೆ ಅಕ್ಷರ ಮತ್ತು ಬಣ್ಣಗಳನ್ನು ಬದಲಾಯಿಸಿಕೊಳ್ಳಿ.",
      themeMode: "ಬಣ್ಣದ ಥೀಮ್",
      themeLight: "ಬೆಳಕು (Light)",
      themeDark: "ಕತ್ತಲೆ (Dark)",
      themeHighContrast: "ಹೆಚ್ಚಿನ ಕಾಂಟ್ರಾಸ್ಟ್ (AAA)",
      textSize: "ಅಕ್ಷರದ ಗಾತ್ರ",
      sizeSmall: "ಸಣ್ಣದು (14px)",
      sizeMedium: "ಸಾಮಾನ್ಯ (16px)",
      sizeLarge: "ದೊಡ್ಡದು (18px)",
      sizeExtraLarge: "ಅತಿ ದೊಡ್ಡದು (21px)",
      dyslexiaFont: "ಡಿಸ್ಲೆಕ್ಸಿಯಾ ಸ್ನೇಹಿ ಫಾಂಟ್",
      reducedMotion: "ಚಲನೆ ಕಡಿತಗೊಳಿಸಿ (No Animations)",
      audioReader: "ಧ್ವನಿ ಓದುವ ಸಹಾಯಕ (Screen Reader)",
      audioReaderActive: "ಧ್ವನಿ ಸಹಾಯಕ ಸಕ್ರಿಯವಾಗಿದೆ (ಯಾವುದೇ ಕಾರ್ಡ್ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ)",
      audioReaderIdle: "ಧ್ವನಿ ಸಹಾಯಕ ನಿಷ್ಕ್ರಿಯವಾಗಿದೆ"
    },
    privacy: {
      title: "ಗೌಪ್ಯತೆ ನಿಯಂತ್ರಣ ಮತ್ತು ಡೇಟಾ ಸುರಕ್ಷತೆ",
      subtitle: "ಭಾರತದ ಡಿಪಿಡಿಪಿ (DPDP) ಕಾಯ್ದೆಯ ಮಾನದಂಡಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ಸಂಪೂರ್ಣ ಆಫ್‌ಲೈನ್ ರಕ್ಷಣೆ.",
      localProcessingNotice: "ಯಾವುದೇ ಬಾಹ್ಯ ಸರ್ವರ್‌ಗೆ ನಿಮ್ಮ ವೈದ್ಯಕೀಯ ದಾಖಲೆಗಳನ್ನು ಕಳುಹಿಸುವುದಿಲ್ಲ. ನಿಮ್ಮ ಸಾಧನದಲ್ಲೇ ಪರಿಶೀಲನೆ ನಡೆಯುತ್ತದೆ.",
      pasteTestReport: "ವೈದ್ಯಕೀಯ ವರದಿಯನ್ನು ಪರೀಕ್ಷಿಸಿ (ಖಾಸಗಿ ವಿವರಗಳನ್ನು ಅಳಿಸಲು):",
      btnSanitize: "ಖಾಸಗಿ ಮಾಹಿತಿಗಳನ್ನು ಅಳಿಸಿ (ಆಧಾರ್, ಫೋನ್, ಇಮೇಲ್, ಆಭಾ)",
      redactedOutput: "ಸುರಕ್ಷಿತ ವರದಿ:",
      removedItems: "ಅಳಿಸಲಾದ ಖಾಸಗಿ ಅಂಶಗಳು:",
      dpdpNotice: "ರೋಗಿಯ ಹೆಸರು ಮತ್ತು ಪರೀಕ್ಷಾ ವಿವರಗಳನ್ನು ಪ್ರತ್ಯೇಕಿಸಿ ಸುರಕ್ಷತೆ ಕಾಪಾಡಲಾಗುತ್ತದೆ.",
      clearStorageBtn: "ಸ್ಥಳೀಯ ಡೇಟಾವನ್ನು ಸಂಪೂರ್ಣ ಅಳಿಸಿ",
      storageCleared: "ಡೇಟಾ ಯಶಸ್ವಿಯಾಗಿ ಅಳಿಸಲಾಗಿದೆ!"
    },
    footer: {
      copyright: "ಆರೋಗ್ಯ ನೋವಾ — ಮುಕ್ತ ಮೂಲ ಆರೋಗ್ಯ ಸುಲಭ ಸಂಪರ್ಕ ವೇದಿಕೆ.",
      guidelinesNotice: "ICMR, WHO ಮತ್ತು MoHFW ಮಾರ್ಗಸೂಚಿಗಳಿಗೆ ಅನುಗುಣವಾಗಿದೆ. ವೈದ್ಯಕೀಯ ಸಲಹೆಗೆ ಬದಲಿಯಾಗಿ ಬಳಸಬೇಡಿ."
    }
  },
  hi: {
    appName: "आरोग्य नोवा",
    tagline: "बहुभाषी स्वास्थ्य सुगमता एवं साक्षरता मंच",
    disclaimerBadge: "केवल शैक्षणिक एवं गैर-निदानात्मक उद्देश्य",
    disclaimerFull: "आरोग्य नोवा एक स्वास्थ्य साक्षरता सहायता मंच है। यह कोई चिकित्सीय निदान, उपचार या दवा का नुस्खा नहीं देता है। किसी भी स्वास्थ्य समस्या के लिए योग्य पंजीकृत चिकित्सक से परामर्श लें।",
    tabs: {
      journey: "स्वास्थ्य यात्रा",
      explorer: "दस्तावेज़ अन्वेषक",
      glossary: "सत्यापित शब्दावली",
      doctorQuestions: "डॉक्टर प्रश्न निर्माता",
      medicines: "जेनेरिक दवाएं",
      accessibility: "सुलभता केंद्र",
      privacy: "गोपनीयता नियंत्रण"
    },
    emergencyBar: {
      label: "भारत सरकार आधिकारिक आपातकालीन हेल्पलाइन (24/7 टोल-फ्री):",
      dialAmbulance: "एम्बुलेंस: 108",
      dialEmergency: "राष्ट्रीय आपातकालीन नंबर: 112",
      dialTeleManas: "टेली-मानस मानसिक स्वास्थ्य: 14416"
    },
    journey: {
      title: "संवादात्मक स्वास्थ्य समझ यात्रा",
      subtitle: "डॉक्टर से परामर्श से पहले, परामर्श के दौरान और बाद में पूरी स्पष्टता प्राप्त करें।",
      step1Title: "1. लैब रिपोर्ट का विश्लेषण",
      step1Desc: "समझें कि लैब परीक्षणों के मान क्यों बदलते हैं और सामान्य संदर्भ सीमाएं आपके लिए क्या मायने रखती हैं।",
      step2Title: "2. सरल भाषा में स्पष्टीकरण",
      step2Desc: "HbA1c, क्रिएटिनिन, कोलेस्ट्रॉल जैसी जटिल जांचों को बिना घबराहट सरल भाषा में समझें।",
      step3Title: "3. डॉक्टर परामर्श की तैयारी",
      step3Desc: "अपनी समस्याओं को व्यवस्थित करें और क्लिनिक में पूछने के लिए महत्वपूर्ण प्रश्नों की सूची तैयार करें।",
      step4Title: "4. दवा साक्षरता",
      step4Desc: "जन औषधि केंद्रों की जेनेरिक दवाओं, सावधानियों और दवाओं के सुरक्षित भंडारण की जानकारी प्राप्त करें।",
      btnNext: "अगला चरण",
      btnPrev: "पिछला चरण",
      btnReset: "पुनः आरंभ करें",
      nonDiagNotice: "सुरक्षित शिक्षण नोट: यह आपके डॉक्टर से सार्थक चर्चा के लिए प्रश्न तैयार करने में मदद करता है।"
    },
    explorer: {
      title: "मेडिकल दस्तावेज़ अन्वेषक",
      subtitle: "लैब रिपोर्टों को द्विभाषी सरल भाषा और सत्यापित मानकों के साथ समझें।",
      sampleSelector: "सत्यापित नमूना रिपोर्ट चुनें:",
      patientDetails: "मरीज का सामान्य विवरण",
      testName: "जांच का नाम",
      observedValue: "परीक्षण परिणाम",
      referenceRange: "वयस्कों के लिए सामान्य सीमा",
      clinicalStatus: "जांच स्थिति",
      plainMeaning: "सरल भाषा में अर्थ",
      doctorInquiryTip: "डॉक्टर से पूछने योग्य प्रश्न",
      uploadNotice: "अपनी लैब रिपोर्ट आयात करें (आपकी डिवाइस पर 100% स्थानीय स्तर पर निजी डेटा हटाकर जांची जाती है)",
      uploadButton: "फ़ाइल अपलोड करें"
    },
    glossary: {
      title: "सत्यापित सरल-भाषा चिकित्सा शब्दावली",
      subtitle: "ICMR, WHO और स्वास्थ्य मंत्रालय के दिशानिर्देशों पर आधारित मानक संदर्भ सीमाएं।",
      searchPlaceholder: "जांच का नाम खोजें (जैसे हीमोग्लोबिन, ग्लूकोज, क्रिएटिनिन, लिपिड)...",
      normalRange: "सामान्य जैविक संदर्भ सीमा",
      lowLevelImpact: "कम स्तर का सामान्य अर्थ",
      highLevelImpact: "बढ़े हुए स्तर का सामान्य अर्थ",
      verifiedSource: "प्रामाणिक चिकित्सा संदर्भ संस्था"
    },
    doctorQuestions: {
      title: "डॉक्टर-प्रश्न निर्माता",
      subtitle: "अपने आगामी डॉक्टर परामर्श के लिए महत्वपूर्ण प्रश्नों की संरचित चेकलिस्ट बनाएं।",
      selectConcerns: "अपने स्वास्थ्य संबंधी चिंताओं का चयन करें:",
      btnGenerate: "अनुकूलित प्रश्न सूची तैयार करें",
      checklistTitle: "आपकी डॉक्टर परामर्श चेकलिस्ट",
      copyBtn: "प्रश्न कॉपी करें",
      copied: "कॉपी हो गया!",
      printBtn: "प्रिंट / पीडीएफ सुरक्षित करें"
    },
    medicines: {
      title: "जेनेरिक दवा सूचना कोष",
      subtitle: "प्रधानमंत्री भारतीय जनऔषधि परियोजना (PMBJP) एवं स्वास्थ्य मंत्रालय पर आधारित सत्यापित जानकारी।",
      searchPlaceholder: "जेनेरिक नाम या वर्ग खोजें (जैसे पैरासिटामोल, मेटफॉर्मिन, एम्लोडिपिन)...",
      genericNotice: "जेनेरिक दवाएं ब्रांडेड दवाओं के समान ही प्रभावी, सुरक्षित एवं बहुत कम कीमत पर उपलब्ध होती हैं।",
      janAushadhiPill: "जन औषधि केंद्र में उपलब्ध",
      indications: "मुख्य स्वीकृत उपयोग",
      dosageAdvice: "सामान्य सूचना",
      warnings: "सावधानियां एवं मतभेद",
      storage: "सुरक्षित भंडारण नियम"
    },
    accessibility: {
      title: "सुलभता केंद्र (Accessibility Studio)",
      subtitle: "अपनी पसंद और सुविधा के अनुसार रंग, कंट्रास्ट और अक्षरों का आकार अनुकूलित करें (WCAG 2.1 AAA)।",
      themeMode: "विज़ुअल थीम",
      themeLight: "लाइट मोड",
      themeDark: "आंखों के लिए सौम्य डार्क मोड",
      themeHighContrast: "उच्च कंट्रास्ट (AAA)",
      textSize: "टेक्स्ट का आकार",
      sizeSmall: "छोटा (14px)",
      sizeMedium: "मध्यम (16px)",
      sizeLarge: "बड़ा (18px)",
      sizeExtraLarge: "अति बड़ा (21px)",
      dyslexiaFont: "डिस्लेक्सिया-अनुकूल फॉन्ट",
      reducedMotion: "कम मोशन (एनीमेशन बंद)",
      audioReader: "स्क्रीन रीडर आवाज सहायता",
      audioReaderActive: "वॉयस रीडर सक्रिय है (किसी भी कार्ड पर क्लिक करके सुनें)",
      audioReaderIdle: "वॉयस रीडर निष्क्रिय है"
    },
    privacy: {
      title: "गोपनीयता नियंत्रण एवं डेटा प्रकटीकरण",
      subtitle: "भारत के डिजिटल व्यक्तिगत डेटा संरक्षण (DPDP) मानकों का अनुपालन।",
      localProcessingNotice: "शून्य बाहरी डेटा रिसाव: आपकी सभी जांचें और निजी डेटा निष्कासन सीधे आपके ब्राउज़र में सुरक्षित रूप से होता है।",
      pasteTestReport: "दस्तावेज़ सैनिटाइजेशन टेस्ट (अपनी रिपोर्ट यहां पेस्ट करें):",
      btnSanitize: "संवेदनशील पहचान हटाएं (आधार, फोन, ईमेल, आभा)",
      redactedOutput: "सुरक्षित संपादित दस्तावेज़:",
      removedItems: "हटाए गए संवेदनशील पहचानकर्ता:",
      dpdpNotice: "पहचान व स्वास्थ्य विवरण को अलग रखकर सुरक्षा सुनिश्चित की जाती है।",
      clearStorageBtn: "स्थानीय सत्र डेटा साफ़ करें",
      storageCleared: "स्थानीय डेटा सफलतापूर्वक मिटा दिया गया!"
    },
    footer: {
      copyright: "आरोग्य नोवा — ओपन-सोर्स स्वास्थ्य सुगमता मंच।",
      guidelinesNotice: "ICMR, WHO और स्वास्थ्य मंत्रालय के मानकों के अनुरूप। चिकित्सा सलाह का विकल्प नहीं है।"
    }
  }
};
