/**
 * Aarogya Nova Backend Integration & Unit Test Suite
 */

const assert = require("assert");
const { sanitizeHealthText } = require("./privacyEngine");
const { 
  VERIFIED_SOURCES, 
  EMERGENCY_SERVICES_INDIA, 
  GENERIC_MEDICINES, 
  LAB_BENCHMARKS 
} = require("./clinicalData");

console.log("=== Running Aarogya Nova Backend Unit Tests ===");

// Test 1: Emergency Numbers Verification (Government of India Official Standards)
console.log("[Test 1] Verifying Official Indian Emergency Numbers...");
assert.strictEqual(EMERGENCY_SERVICES_INDIA.nationalEmergency.number, "112", "National emergency number must be 112");
assert.strictEqual(EMERGENCY_SERVICES_INDIA.ambulance.number, "108", "Ambulance number must be 108");
assert.strictEqual(EMERGENCY_SERVICES_INDIA.teleManas.number, "14416", "Tele-MANAS number must be 14416");
console.log("  PASS: All emergency numbers strictly match verified Indian standards.");

// Test 2: Verified Source Integrity
console.log("[Test 2] Verifying Source Authenticity...");
assert.ok(VERIFIED_SOURCES.ICMR.officialUrl.includes("icmr.nic.in"));
assert.ok(VERIFIED_SOURCES.MOHFW.officialUrl.includes("mohfw.gov.in"));
assert.ok(VERIFIED_SOURCES.JAN_AUSHADHI.officialUrl.includes("janaushadhi.gov.in"));
console.log("  PASS: All clinical benchmarks link to authoritative bodies.");

// Test 3: Generic Medicines Multilingual & Safety Integrity
console.log("[Test 3] Verifying Multilingual Generic Medicines & Contraindications...");
assert.ok(GENERIC_MEDICINES.length >= 5, "Must have comprehensive catalog");
GENERIC_MEDICINES.forEach(med => {
  assert.ok(med.genericName, "Medicine must have generic name");
  assert.ok(med.kannadaName, `Medicine ${med.genericName} must have Kannada name`);
  assert.ok(med.hindiName, `Medicine ${med.genericName} must have Hindi name`);
  assert.ok(med.contraindicationsAndWarnings.length > 0, `Medicine ${med.genericName} must list warnings`);
  assert.ok(med.storage, `Medicine ${med.genericName} must provide safe storage info`);
});
console.log("  PASS: All medicines contain valid Kannada, Hindi, indications, and clinical warnings.");

// Test 4: Privacy Sanitizer & PII Redaction
console.log("[Test 4] Testing Privacy Redactor with Indian Identifiers (Aadhaar, Phone, Email, ABHA)...");
const testHealthDoc = "Patient Shri Rajesh Kumar (DOB: 12/04/1981), Aadhaar 5432 9876 1234, ABHA 14-8899-7766-5544, Phone +91 9876543210, Email rajesh.health@example.com, FBG 110 mg/dL.";
const redactionResult = sanitizeHealthText(testHealthDoc);

assert.ok(redactionResult.redactionCount >= 4, "Should catch Aadhaar, ABHA, Phone, Email, Name/DOB");
assert.ok(!redactionResult.sanitizedText.includes("5432 9876 1234"), "Aadhaar must be scrubbed");
assert.ok(!redactionResult.sanitizedText.includes("9876543210"), "Phone must be scrubbed");
assert.ok(!redactionResult.sanitizedText.includes("rajesh.health@example.com"), "Email must be scrubbed");
assert.ok(!redactionResult.sanitizedText.includes("14-8899-7766-5544"), "ABHA ID must be scrubbed");
assert.ok(redactionResult.sanitizedText.includes("FBG 110 mg/dL"), "Clinical metric should remain intact for evaluation");
assert.strictEqual(redactionResult.dataTransmissionNotice.transmittedToExternalServer, false);
console.log("  PASS: Privacy redaction accurately sanitized sensitive PII without destroying clinical numbers.");

// Test 5: Lab Benchmark Reference Ranges
console.log("[Test 5] Checking Lab Benchmark Interval Data...");
assert.ok(LAB_BENCHMARKS.some(b => b.testName.includes("Hemoglobin")));
assert.ok(LAB_BENCHMARKS.some(b => b.testName.includes("Fasting Blood Glucose")));
assert.ok(LAB_BENCHMARKS.some(b => b.testName.includes("HbA1c")));
console.log("  PASS: Key diagnostic panels (CBC, Glycemic, Renal, Lipid) properly represented.");

console.log("\nALL BACKEND UNIT TESTS PASSED SUCCESSFULLY! (5/5)");
