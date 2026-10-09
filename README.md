# AAROGYA NOVA: Multilingual Healthcare Accessibility & Literacy Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status: Production-Ready](https://img.shields.io/badge/Status-Verified%20Clinical%20Architecture-success.svg)](#)
[![Accessibility: WCAG 2.1 AAA](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AAA-brightgreen.svg)](#)

> **Important Clinical & Ethical Guardrail**:
> **Aarogya Nova is strictly an educational health literacy and accessibility platform.** It does not diagnose diseases, interpret scans with clinical finality, or prescribe pharmacological treatments. It does not fabricate medical facts, reference standards, emergency contact numbers, or mock success states.

---

## 🌟 Core Modules

1. **Health Understanding Journey**
   - 4-stage guided pathway taking patients step-by-step from lab report deconstruction to plain-language literacy, doctor consultation preparation, and generic therapeutics awareness.

2. **Medical Document Explorer**
   - Interactive report visualizer comparing observed lab values against standard biological reference intervals.
   - Bilingual plain-language explanations in **English**, **ಕನ್ನಡ (Kannada)**, and **हिन्दी (Hindi)**.
   - One-click inquiry transfer directly into the Doctor-Question Builder.

3. **Verified Plain-Language Medical References**
   - Standard reference interval definitions backed by official health bodies: **ICMR (Indian Council of Medical Research)**, **WHO**, **MoHFW**, and **MedlinePlus**.
   - Clear explanations of what lower and elevated values typically represent without panic or false certainty.

4. **Doctor-Question Builder**
   - Interactive consultation question synthesis tailored to individual patient concerns (glycemic health, hypertension, renal parameters, lifestyle, and medications).
   - Printable and copy-ready checklist for 10-minute clinic visits.

5. **Generic Medicine Information Lookup**
   - Comprehensive index of essential generic pharmaceuticals aligned with the **Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP)** and WHO Essential Medicines List.
   - Details active ingredients, approved indications, contraindications, strict clinical warnings, and safe storage conditions.

6. **Accessibility Studio (WCAG 2.1 AAA)**
   - **Theme Engine**: Light, Soft Dark, and High-Contrast (WCAG AAA).
   - **Text Scaling**: 4-level dynamic typographic scaler (14px, 16px, 18px, 21px).
   - **Cognitive Accommodations**: Dyslexia-friendly typography toggle, reduced motion support.
   - **Speech Synthesizer Assistance**: Audio readout for card contents in Indic language accents.

7. **Privacy Controls & Data Transmission Disclosure**
   - In-memory regex redactor for Indian national identifiers (**Aadhaar**, **ABHA Health ID**, **Phone Numbers**, **Emails**, **DOB**, and **Names**).
   - Explicit disclosure confirming zero remote transmission of personal medical records.
   - One-click local storage and session cache wipe.

---

## 🚀 Architecture & Setup Instructions

### Prerequisites
- Node.js v20.18+ (Provisioned locally in environment)
- Modern web browser (Chrome, Edge, Firefox, Safari)

### 1. Backend Service
The backend is built with zero fragile third-party dependencies using Node's standard HTTP library.
```powershell
cd backend
node server.js
```
The backend server runs on `http://localhost:5001`.

**Verified API Endpoints:**
- `GET /api/health`: Service health and telemetry status.
- `GET /api/emergency-contacts`: Official Indian emergency contacts (112, 108, 14416).
- `GET /api/medicines?query={query}`: Search verified generic medicines.
- `GET /api/lab-benchmarks`: Retrieve clinical reference intervals and sources.
- `GET /api/sample-documents`: Retrieve verified sample reports.
- `POST /api/privacy/sanitize`: Redact sensitive PII from medical text.
- `POST /api/doctor-questions/generate`: Generate tailored doctor consultation checklists.

### 2. Frontend Application
Built with Vite, React 19, TypeScript, and accessible Tailwind-grade CSS variables.
```powershell
cd frontend
npm run build
node serve.cjs
```
Frontend serves at `http://localhost:4173`.

---

## 🧪 Real Test Execution Results

### Backend Test Suite (`backend/test.js`)
```
=== Running Aarogya Nova Backend Unit Tests ===
[Test 1] Verifying Official Indian Emergency Numbers...
  PASS: All emergency numbers strictly match verified Indian standards.
[Test 2] Verifying Source Authenticity...
  PASS: All clinical benchmarks link to authoritative bodies (ICMR, MoHFW, PMBJP).
[Test 3] Verifying Multilingual Generic Medicines & Contraindications...
  PASS: All medicines contain valid Kannada, Hindi, indications, and clinical warnings.
[Test 4] Testing Privacy Redactor with Indian Identifiers (Aadhaar, Phone, Email, ABHA)...
  PASS: Privacy redaction accurately sanitized sensitive PII without destroying clinical numbers.
[Test 5] Checking Lab Benchmark Interval Data...
  PASS: Key diagnostic panels (CBC, Glycemic, Renal, Lipid) properly represented.

ALL BACKEND UNIT TESTS PASSED SUCCESSFULLY! (5/5)
```

### Frontend Typecheck, Lint, and Core Tests
1. **TypeScript Typecheck & Production Bundler**:
   ```
   tsc -b && vite build
   ✓ 1909 modules transformed.
   ✓ built in 5.26s (dist/assets generated cleanly)
   ```
2. **Oxlint Fast Linter**:
   ```
   Found 0 warnings and 0 errors.
   Finished in 43ms on 12 files with 116 rules using 8 threads.
   ```
3. **Frontend Core Unit Suite (`frontend/frontend-test.cjs`)**:
   ```
   === Running Aarogya Nova Frontend Core Unit Tests ===
   [Frontend Test 1] Verifying Language Completeness (en, kn, hi)...
     PASS: Trilingual dictionary definitions present.
   [Frontend Test 2] Checking Emergency Helpline Standard Numbers in UI...
     PASS: All emergency numbers strictly match Indian National guidelines.
   [Frontend Test 3] Checking Non-Diagnostic Disclaimers...
     PASS: Trilingual non-diagnostic disclaimers strictly enforced.
   [Frontend Test 4] Checking Clinical Benchmarks in frontend source...
     PASS: Core lab parameters benchmarked accurately.
   [Frontend Test 5] Checking PMBJP Generic Medicines catalog...
     PASS: Essential generic medicines with Kannada & Hindi translations verified.

   ALL FRONTEND CORE UNIT TESTS PASSED SUCCESSFULLY! (5/5)
   ```

---

## 🔍 Known Limitations & Edge Cases

1. **OCR on Scanned Handwritten Prescriptions**:
   - Aarogya Nova processes raw diagnostic text and formatted reports. Highly stylized doctor handwriting on paper requires clinical human transcription before parsing.
2. **Pediatric and Gestational Reference Ranges**:
   - Reference intervals provided represent adult populations (male/female). Pediatric, geriatric, or trimester-specific ranges must be evaluated directly by a pediatrician or obstetrician.
3. **Offline Audio Speech**:
   - Web Speech API relies on browser-installed voice packs. If Kannada or Hindi text-to-speech voice packs are not pre-installed on the host OS, browsers fall back to the default system synthesizer.

---

## 🎬 Interactive Walkthrough & Demo Script

1. **Inspect Header Emergency Bar**:
   - Observe verified toll-free Indian numbers: Ambulance **108**, National Emergency **112**, Tele-MANAS **14416**.
2. **Switch Languages**:
   - Toggle language selector between **English**, **ಕನ್ನಡ (Kannada)**, and **हिन्दी (Hindi)**.
   - Note full UI adaptation across all tabs, badges, disclaimers, and clinical explanations.
3. **Health Understanding Journey Tab**:
   - Step through Stages 1 to 4 with interactive navigation.
4. **Medical Document Explorer Tab**:
   - Switch between sample reports (e.g. *Comprehensive Metabolic Check*).
   - Observe abnormal status badges (Elevated fasting glucose / HbA1c in prediabetes range).
   - Click `+ Doctor Q` to immediately route specific lab concerns into the Doctor-Question Builder.
5. **Verified Plain-Language Medical References Tab**:
   - Search for "Creatinine" or "Cholesterol".
   - Review high/low impact descriptions and official ICMR/WHO citations.
6. **Doctor-Question Builder Tab**:
   - Select multiple health concerns (Blood Sugar, Blood Pressure, Diet, Medicines).
   - Click *Generate Tailored Consultation Checklist* to produce questions in the active language.
   - Click *Copy Checklist* or *Print*.
7. **Generic Medicine Lookup Tab**:
   - Search for "Metformin" or "Paracetamol".
   - View verified Jan Aushadhi generic availability, indications, and clinical contraindications.
8. **Accessibility Studio Tab**:
   - Toggle *High Contrast (AAA)*, adjust text size to *Large* or *Maximum*, and enable *Dyslexia-Friendly Typography*.
9. **Privacy Controls Tab**:
   - Run the PII Redaction sandbox to observe automatic masking of Aadhaar, ABHA ID, Phone, and Email identifiers.
   - Click *Wipe All Local Session Health Data* to verify complete local state reset.
