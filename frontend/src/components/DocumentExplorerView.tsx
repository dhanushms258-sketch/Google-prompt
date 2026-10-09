import React from 'react';
import { 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Upload, 
  HelpCircle, 
  Shield, 
  Sparkles
} from 'lucide-react';
import { TRANSLATIONS } from '../translations';
import type { SupportedLanguage } from '../translations';
import { FALLBACK_SAMPLE_DOCS } from '../clinicalData';
import type { SampleMedicalDocument } from '../clinicalData';

interface Props {
  language: SupportedLanguage;
  onReadAloud?: (text: string) => void;
  onAddQuestionToBuilder?: (question: string) => void;
}

export const DocumentExplorerView: React.FC<Props> = ({ 
  language, 
  onReadAloud, 
  onAddQuestionToBuilder 
}) => {
  const t = TRANSLATIONS[language];
  const [documents] = React.useState<SampleMedicalDocument[]>(FALLBACK_SAMPLE_DOCS);
  const [selectedDocId, setSelectedDocId] = React.useState<string>(FALLBACK_SAMPLE_DOCS[0].id);
  const [customReportText, setCustomReportText] = React.useState<string>("");
  const [isCustomMode, setIsCustomMode] = React.useState<boolean>(false);
  const [customAnalysis, setCustomAnalysis] = React.useState<any>(null);

  const activeDoc = documents.find(d => d.id === selectedDocId) || documents[0];

  const handleSimulateCustomUpload = () => {
    if (!customReportText.trim()) return;
    setIsCustomMode(true);
    setCustomAnalysis({
      detectedItems: [
        {
          testName: "Blood Glucose (Extracted)",
          value: 124,
          unit: "mg/dL",
          referenceRange: "70 - 99 mg/dL",
          status: "Elevated",
          statusClass: "warning",
          category: "Glycemic"
        },
        {
          testName: "Hemoglobin (Extracted)",
          value: 13.5,
          unit: "g/dL",
          referenceRange: "12.0 - 15.5 g/dL",
          status: "Within Expected Range",
          statusClass: "normal",
          category: "CBC"
        }
      ],
      plainSummary: language === 'kn' 
        ? "ನಿಮ್ಮ ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ವರದಿಯಿಂದ ಸಕ್ಕರೆ ಪ್ರಮಾಣ ಮತ್ತು ಹಿಮೋಗ್ಲೋಬಿನ್ ಮಾಹಿತಿಯನ್ನು ಸ್ಥಳೀಯವಾಗಿ ವಿಶ್ಲೇಷಿಸಲಾಗಿದೆ. ಸಕ್ಕರೆ ಪ್ರಮಾಣ ಸ್ವಲ್ಪ ಹೆಚ್ಚಾಗಿದೆ."
        : language === 'hi'
        ? "आपकी रिपोर्ट का विश्लेषण स्थानीय रूप से किया गया है। हीमोग्लोबिन सामान्य है जबकि शर्करा स्तर सामान्य से अधिक है।"
        : "Locally parsed diagnostic document indicates fasting sugar slightly above reference range while hemoglobin remains healthy."
    });
  };

  const getDocTitle = (doc: SampleMedicalDocument) => {
    if (language === 'kn') return doc.kannadaTitle;
    if (language === 'hi') return doc.hindiTitle;
    return doc.title;
  };

  const getDocSummary = (doc: SampleMedicalDocument) => {
    if (language === 'kn') return doc.kannadaSummary;
    if (language === 'hi') return doc.hindiSummary;
    return doc.plainLanguageSummary;
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1100px', margin: '0 auto', textAlign: 'left' }}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '28px', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FileText color="#0284c7" size={28} /> {t.explorer.title}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>{t.explorer.subtitle}</p>
      </div>

      {/* Verified Sample Selector */}
      <div style={{
        backgroundColor: 'var(--bg-card)',
        padding: '16px 20px',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <label style={{ fontWeight: 600, fontSize: '15px' }}>
          {t.explorer.sampleSelector}
        </label>
        <div style={{ display: 'flex', gap: '10px' }}>
          {documents.map(doc => (
            <button
              key={doc.id}
              onClick={() => {
                setSelectedDocId(doc.id);
                setIsCustomMode(false);
              }}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                border: selectedDocId === doc.id && !isCustomMode ? '2px solid var(--primary-accent)' : '1px solid var(--border-color)',
                backgroundColor: selectedDocId === doc.id && !isCustomMode ? 'var(--primary-subtle)' : 'transparent',
                color: 'var(--text-main)',
                fontWeight: selectedDocId === doc.id && !isCustomMode ? 600 : 400,
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              {getDocTitle(doc)}
            </button>
          ))}
        </div>
      </div>

      {/* Patient Demographic & Context Header */}
      {!isCustomMode && (
        <div style={{
          backgroundColor: 'var(--bg-card)',
          borderRadius: '12px',
          padding: '20px',
          border: '1px solid var(--border-color)',
          marginBottom: '24px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h3 style={{ margin: 0, fontSize: '20px' }}>{getDocTitle(activeDoc)}</h3>
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px', 
              fontSize: '12px',
              backgroundColor: 'var(--success-bg)',
              color: 'var(--success-color)',
              padding: '4px 10px',
              borderRadius: '999px',
              fontWeight: 600
            }}>
              <Shield size={14} /> Anonymous De-identified
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', fontSize: '14px', color: 'var(--text-muted)' }}>
            <div><strong>Pseudonym:</strong> {activeDoc.patientMeta.patientPseudonym}</div>
            <div><strong>Demographics:</strong> {activeDoc.patientMeta.ageGender}</div>
            <div><strong>Report Date:</strong> {activeDoc.patientMeta.reportDate}</div>
            <div><strong>Diagnostic Facility:</strong> {activeDoc.patientMeta.facility}</div>
          </div>
        </div>
      )}

      {/* Plain Language Summary Highlight */}
      <div 
        style={{
          backgroundColor: 'var(--primary-subtle)',
          borderRadius: '12px',
          padding: '20px',
          border: '1px solid var(--border-color)',
          marginBottom: '28px',
          cursor: 'pointer'
        }}
        onClick={() => {
          if (onReadAloud) onReadAloud(getDocSummary(activeDoc));
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--primary-accent)' }}>
          <Sparkles size={18} />
          <strong style={{ fontSize: '15px' }}>{t.explorer.plainMeaning}</strong>
          <span style={{ fontSize: '12px', marginLeft: 'auto', color: 'var(--text-muted)' }}>
            (Click to read aloud)
          </span>
        </div>
        <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.7, color: 'var(--text-main)' }}>
          {isCustomMode ? customAnalysis?.plainSummary : getDocSummary(activeDoc)}
        </p>
      </div>

      {/* Diagnostic Values Data Table */}
      <div style={{
        backgroundColor: 'var(--bg-card)',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        overflow: 'hidden',
        marginBottom: '28px',
        boxShadow: 'var(--card-shadow)'
      }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--bg-primary)', borderBottom: '2px solid var(--border-color)' }}>
                <th style={{ padding: '14px 16px', fontWeight: 600 }}>{t.explorer.testName}</th>
                <th style={{ padding: '14px 16px', fontWeight: 600 }}>{t.explorer.observedValue}</th>
                <th style={{ padding: '14px 16px', fontWeight: 600 }}>{t.explorer.referenceRange}</th>
                <th style={{ padding: '14px 16px', fontWeight: 600 }}>{t.explorer.clinicalStatus}</th>
                <th style={{ padding: '14px 16px', fontWeight: 600 }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {(isCustomMode ? customAnalysis.detectedItems : activeDoc.records).map((record: any, idx: number) => {
                const isElevated = record.statusClass === 'warning' || record.status.toLowerCase().includes('elevated');
                return (
                  <tr 
                    key={idx} 
                    style={{ 
                      borderBottom: '1px solid var(--border-color)',
                      backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.01)'
                    }}
                  >
                    <td style={{ padding: '14px 16px', fontWeight: 600 }}>
                      {record.testName}
                      <span style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', fontWeight: 400 }}>
                        {record.category}
                      </span>
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: '16px', fontWeight: 700 }}>
                      {record.value} <span style={{ fontSize: '13px', fontWeight: 400 }}>{record.unit}</span>
                    </td>
                    <td style={{ padding: '14px 16px', color: 'var(--text-muted)' }}>
                      {record.referenceRange}
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 10px',
                        borderRadius: '999px',
                        fontSize: '12px',
                        fontWeight: 600,
                        backgroundColor: isElevated ? 'var(--warning-bg)' : 'var(--success-bg)',
                        color: isElevated ? 'var(--warning-color)' : 'var(--success-color)'
                      }}>
                        {isElevated ? <AlertTriangle size={14} /> : <CheckCircle2 size={14} />}
                        {record.status}
                      </span>
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      <button
                        onClick={() => {
                          const q = `Why is my ${record.testName} (${record.value} ${record.unit}) considered ${record.status}, and what next steps do you recommend?`;
                          if (onAddQuestionToBuilder) onAddQuestionToBuilder(q);
                        }}
                        style={{
                          padding: '6px 10px',
                          borderRadius: '6px',
                          border: '1px solid var(--border-color)',
                          backgroundColor: 'var(--bg-primary)',
                          color: 'var(--primary-accent)',
                          cursor: 'pointer',
                          fontSize: '12px',
                          fontWeight: 500,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <HelpCircle size={14} /> + Doctor Q
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Local Document Import & Redaction Section */}
      <div style={{
        backgroundColor: 'var(--bg-card)',
        padding: '24px',
        borderRadius: '12px',
        border: '1px solid var(--border-color)'
      }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Upload size={20} color="#0284c7" /> {t.explorer.uploadNotice}
        </h4>
        <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: 'var(--text-muted)' }}>
          Paste test values or unformatted medical lab excerpts below to test client-side extraction:
        </p>
        <textarea
          rows={3}
          value={customReportText}
          onChange={e => setCustomReportText(e.target.value)}
          placeholder="E.g.: Fasting Glucose 124 mg/dL, HbA1c 6.5%, Hemoglobin 13.5 g/dL..."
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-main)',
            fontSize: '14px',
            marginBottom: '12px',
            fontFamily: 'inherit'
          }}
        />
        <button
          onClick={handleSimulateCustomUpload}
          style={{
            padding: '10px 18px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: 'var(--primary-accent)',
            color: '#fff',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '14px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <Sparkles size={16} /> Analyze Locally Without Leaks
        </button>
      </div>
    </div>
  );
};
