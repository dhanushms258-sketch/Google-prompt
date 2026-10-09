import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Trash2, 
  CheckCircle2, 
  ServerOff
} from 'lucide-react';
import { TRANSLATIONS } from '../translations';
import type { SupportedLanguage } from '../translations';

interface Props {
  language: SupportedLanguage;
}

export const PrivacyControlsView: React.FC<Props> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const [inputText, setInputText] = React.useState<string>(
    "Patient: Mr. Suresh Gowda, DOB: 14/08/1975\nAadhaar: 4321 8765 2109, ABHA: 14-3456-7890-1234\nPhone: +91 9845012345, Email: suresh.gowda@example.com\nLab Findings: Fasting Glucose 115 mg/dL, HbA1c 6.1%, Creatinine 0.9 mg/dL."
  );
  const [sanitizedResult, setSanitizedResult] = React.useState<any>(null);
  const [cacheClearedMessage, setCacheClearedMessage] = React.useState<boolean>(false);

  const handleRunClientRedactor = () => {
    // Client-side regex engine matching Indian national identifiers
    let text = inputText;
    const detected: string[] = [];

    if (/\b\d{4}\s?\d{4}\s?\d{4}\b/.test(text)) {
      text = text.replace(/\b\d{4}\s?\d{4}\s?\d{4}\b/g, "[REDACTED_AADHAAR_ID]");
      detected.push("Aadhaar National ID");
    }

    if (/\b\d{2}-\d{4}-\d{4}-\d{4}\b/.test(text)) {
      text = text.replace(/\b\d{2}-\d{4}-\d{4}-\d{4}\b/g, "[REDACTED_ABHA_HEALTH_ID]");
      detected.push("Ayushman Bharat Health Account (ABHA)");
    }

    if (/(?:\+91[\s-]?)?[6789]\d{9}/.test(text)) {
      text = text.replace(/(?:\+91[\s-]?)?[6789]\d{9}/g, "[REDACTED_PHONE_NUMBER]");
      detected.push("Indian Mobile Number");
    }

    if (/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(text)) {
      text = text.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, "[REDACTED_EMAIL]");
      detected.push("Email Address");
    }

    if (/(?:DOB|Date of Birth|D\.O\.B)[:\s]+\d{1,2}[/-]\d{1,2}[/-]\d{2,4}/i.test(text)) {
      text = text.replace(/(?:DOB|Date of Birth|D\.O\.B)[:\s]+\d{1,2}[/-]\d{1,2}[/-]\d{2,4}/gi, "DOB: [REDACTED_BIRTH_DATE]");
      detected.push("Date of Birth");
    }

    if (/(?:Mr\.|Mrs\.|Ms\.|Dr\.|Shri|Smt\.)\s+[A-Z][a-z]+(?:\s+[A-Z][a-z]+){1,3}/.test(text)) {
      text = text.replace(/(?:Mr\.|Mrs\.|Ms\.|Dr\.|Shri|Smt\.)\s+[A-Z][a-z]+(?:\s+[A-Z][a-z]+){1,3}/g, "Patient: [REDACTED_PATIENT_NAME]");
      detected.push("Patient Full Name");
    }

    setSanitizedResult({
      sanitizedText: text,
      redactedCount: detected.length,
      categories: detected,
      timestamp: new Date().toLocaleTimeString(),
      networkStatus: "100% In-Browser Memory Sanitization (Zero remote bytes transmitted)"
    });
  };

  const handleWipeLocalStorage = () => {
    localStorage.clear();
    sessionStorage.clear();
    setCacheClearedMessage(true);
    setTimeout(() => setCacheClearedMessage(false), 3000);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1000px', margin: '0 auto', textAlign: 'left' }}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '28px', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ShieldCheck color="#0284c7" size={28} /> {t.privacy.title}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>{t.privacy.subtitle}</p>
      </div>

      {/* Disclosed Data Transmission & DPDP Compliance Banner */}
      <div style={{
        backgroundColor: 'var(--bg-card)',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        padding: '20px',
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '16px'
      }}>
        <ServerOff color="#15803d" size={28} style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <h3 style={{ margin: '0 0 6px 0', fontSize: '17px', color: 'var(--success-color)' }}>
            Transparent External Data Transmission Disclosure
          </h3>
          <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: 'var(--text-muted)' }}>
            {t.privacy.localProcessingNotice} Aarogya Nova never transmits full medical records, patient names, Aadhaar numbers, or contact identifiers to unvetted cloud engines or third-party marketing services.
          </p>
        </div>
      </div>

      {/* Interactive PII Sanitizer Sandbox */}
      <div style={{
        backgroundColor: 'var(--bg-card)',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        padding: '24px',
        marginBottom: '24px',
        boxShadow: 'var(--card-shadow)'
      }}>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '18px' }}>
          {t.privacy.pasteTestReport}
        </h3>

        <textarea
          rows={5}
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-main)',
            fontSize: '14px',
            fontFamily: 'monospace',
            marginBottom: '14px'
          }}
        />

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
          <button
            onClick={handleRunClientRedactor}
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: 'var(--primary-accent)',
              color: '#fff',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px'
            }}
          >
            <Lock size={16} /> {t.privacy.btnSanitize}
          </button>

          <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            Demonstrates real-time de-identification before document exploration
          </span>
        </div>

        {sanitizedResult && (
          <div style={{
            backgroundColor: 'var(--bg-primary)',
            borderRadius: '8px',
            padding: '16px',
            border: '1px solid var(--border-color)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <strong style={{ fontSize: '14px', color: 'var(--success-color)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} /> {t.privacy.redactedOutput}
              </strong>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                {sanitizedResult.networkStatus}
              </span>
            </div>

            <pre style={{
              whiteSpace: 'pre-wrap',
              margin: '0 0 14px 0',
              fontSize: '13px',
              backgroundColor: 'var(--bg-card)',
              padding: '12px',
              borderRadius: '6px',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)'
            }}>
              {sanitizedResult.sanitizedText}
            </pre>

            <div>
              <strong style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                {t.privacy.removedItems}
              </strong>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                {sanitizedResult.categories.map((cat: string, i: number) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '11px',
                      backgroundColor: 'var(--danger-bg)',
                      color: 'var(--danger-color)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontWeight: 600
                    }}
                  >
                    ✓ {cat} Redacted
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Local Storage Data Wipe */}
      <div style={{
        backgroundColor: 'var(--bg-card)',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h4 style={{ margin: '0 0 4px 0', fontSize: '16px' }}>
            Local Browser Session Reset
          </h4>
          <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>
            Erase all consultation questions, theme preferences, and cached lab entries.
          </p>
        </div>

        <button
          onClick={handleWipeLocalStorage}
          style={{
            padding: '10px 16px',
            borderRadius: '8px',
            border: '1px solid var(--border-color)',
            backgroundColor: 'var(--danger-bg)',
            color: 'var(--danger-color)',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px'
          }}
        >
          <Trash2 size={16} />
          {cacheClearedMessage ? t.privacy.storageCleared : t.privacy.clearStorageBtn}
        </button>
      </div>
    </div>
  );
};
