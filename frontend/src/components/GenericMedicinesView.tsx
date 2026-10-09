import React from 'react';
import { 
  Pill, 
  Search, 
  ShieldCheck, 
  AlertTriangle, 
  Thermometer, 
  ExternalLink,
  Info
} from 'lucide-react';
import { TRANSLATIONS } from '../translations';
import type { SupportedLanguage } from '../translations';
import { FALLBACK_MEDICINES } from '../clinicalData';
import type { GenericMedicine } from '../clinicalData';

interface Props {
  language: SupportedLanguage;
  onReadAloud?: (text: string) => void;
  onAddQuestionToBuilder?: (question: string) => void;
}

export const GenericMedicinesView: React.FC<Props> = ({
  language,
  onAddQuestionToBuilder
}) => {
  const t = TRANSLATIONS[language];
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [medicines] = React.useState<GenericMedicine[]>(FALLBACK_MEDICINES);

  const filtered = medicines.filter(m => {
    const q = searchQuery.toLowerCase();
    return m.genericName.toLowerCase().includes(q) ||
           m.kannadaName.toLowerCase().includes(q) ||
           m.hindiName.toLowerCase().includes(q) ||
           m.drugClass.toLowerCase().includes(q);
  });

  const getMedicineName = (m: GenericMedicine) => {
    if (language === 'kn') return m.kannadaName;
    if (language === 'hi') return m.hindiName;
    return m.genericName;
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1100px', margin: '0 auto', textAlign: 'left' }}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '28px', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Pill color="#0284c7" size={28} /> {t.medicines.title}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>{t.medicines.subtitle}</p>
      </div>

      {/* Jan Aushadhi & Generic Awareness Banner */}
      <div style={{
        backgroundColor: 'var(--primary-subtle)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        padding: '16px 20px',
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <Info color="#0284c7" size={24} style={{ flexShrink: 0 }} />
        <span style={{ fontSize: '14px', color: 'var(--text-main)', lineHeight: 1.5 }}>
          {t.medicines.genericNotice}
        </span>
      </div>

      {/* Search Input */}
      <div style={{ 
        position: 'relative', 
        marginBottom: '24px',
        backgroundColor: 'var(--bg-card)',
        borderRadius: '10px',
        border: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px'
      }}>
        <Search size={20} color="var(--text-muted)" />
        <input 
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder={t.medicines.searchPlaceholder}
          style={{
            width: '100%',
            padding: '14px 12px',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            color: 'var(--text-main)',
            fontSize: '15px'
          }}
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery("")}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--text-muted)', 
              cursor: 'pointer',
              fontSize: '14px' 
            }}
          >
            Clear
          </button>
        )}
      </div>

      {/* Medicines Catalog Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))', gap: '20px' }}>
        {filtered.map(med => (
          <div
            key={med.id}
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: '12px',
              padding: '24px',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--card-shadow)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  backgroundColor: 'var(--success-bg)',
                  color: 'var(--success-color)',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <ShieldCheck size={14} /> {t.medicines.janAushadhiPill}
                </span>

                <a 
                  href={med.verifiedReference.officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: '12px',
                    color: 'var(--primary-accent)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  PMBJP Ref <ExternalLink size={12} />
                </a>
              </div>

              <h3 style={{ margin: '0 0 6px 0', fontSize: '20px' }}>
                {getMedicineName(med)}
              </h3>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '14px' }}>
                Generic Name: <strong>{med.genericName}</strong> • Class: {med.drugClass}
              </div>

              {/* Indications */}
              <div style={{ marginBottom: '14px' }}>
                <strong style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                  {t.medicines.indications}:
                </strong>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '14px' }}>
                  {med.commonIndications.map((ind, i) => (
                    <li key={i}>{ind}</li>
                  ))}
                </ul>
              </div>

              {/* General Non-Prescription Dosage Notes */}
              <div style={{ 
                backgroundColor: 'var(--bg-primary)', 
                padding: '12px', 
                borderRadius: '8px', 
                marginBottom: '14px',
                fontSize: '13px'
              }}>
                <strong style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '2px' }}>
                  {t.medicines.dosageAdvice}:
                </strong>
                {med.standardAdultDosageGeneral}
              </div>

              {/* Contraindications & Safety Warnings */}
              <div style={{ 
                backgroundColor: 'var(--danger-bg)', 
                borderLeft: '4px solid var(--danger-color)',
                padding: '12px', 
                borderRadius: '4px', 
                marginBottom: '14px',
                fontSize: '13px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--danger-color)', fontWeight: 700, marginBottom: '6px' }}>
                  <AlertTriangle size={16} /> {t.medicines.warnings}
                </div>
                <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--text-main)', lineHeight: 1.5 }}>
                  {med.contraindicationsAndWarnings.map((warn, i) => (
                    <li key={i}>{warn}</li>
                  ))}
                </ul>
              </div>

              {/* Safe Storage */}
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Thermometer size={16} color="var(--primary-accent)" /> 
                <span><strong>{t.medicines.storage}:</strong> {med.storage}</span>
              </div>
            </div>

            {/* Quick Action */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '12px', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => {
                  const q = `Doctor, is ${med.genericName} suitable for my regimen, and what side effects should I be watchful for?`;
                  if (onAddQuestionToBuilder) onAddQuestionToBuilder(q);
                }}
                style={{
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'transparent',
                  color: 'var(--primary-accent)',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: 600
                }}
              >
                + Add Doctor Question
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
