import React from 'react';
import { 
  BookOpen, 
  Search, 
  ExternalLink, 
  ArrowDownCircle, 
  ArrowUpCircle,
  ShieldCheck
} from 'lucide-react';
import { TRANSLATIONS } from '../translations';
import type { SupportedLanguage } from '../translations';
import { FALLBACK_BENCHMARKS } from '../clinicalData';
import type { LabBenchmark } from '../clinicalData';

interface Props {
  language: SupportedLanguage;
  onReadAloud?: (text: string) => void;
  onAddQuestionToBuilder?: (question: string) => void;
}

export const VerifiedGlossaryView: React.FC<Props> = ({ 
  language, 
  onReadAloud, 
  onAddQuestionToBuilder 
}) => {
  const t = TRANSLATIONS[language];
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [benchmarks] = React.useState<LabBenchmark[]>(FALLBACK_BENCHMARKS);

  const filtered = benchmarks.filter(b => {
    const q = searchQuery.toLowerCase();
    return b.testName.toLowerCase().includes(q) ||
           b.kannadaName.toLowerCase().includes(q) ||
           b.hindiName.toLowerCase().includes(q) ||
           b.category.toLowerCase().includes(q);
  });

  const getTestTitle = (b: LabBenchmark) => {
    if (language === 'kn') return b.kannadaName;
    if (language === 'hi') return b.hindiName;
    return b.testName;
  };

  const getExplanation = (b: LabBenchmark) => {
    if (language === 'kn') return b.kannadaExplanation;
    if (language === 'hi') return b.hindiExplanation;
    return b.plainLanguageExplanation;
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1100px', margin: '0 auto', textAlign: 'left' }}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '28px', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <BookOpen color="#0284c7" size={28} /> {t.glossary.title}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>{t.glossary.subtitle}</p>
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
          placeholder={t.glossary.searchPlaceholder}
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

      {/* Benchmarks Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))', gap: '20px' }}>
        {filtered.map((item, idx) => (
          <div
            key={idx}
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
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--primary-accent)',
                  backgroundColor: 'var(--primary-subtle)',
                  padding: '3px 8px',
                  borderRadius: '6px'
                }}>
                  {item.category}
                </span>

                <a 
                  href={item.verifiedReference.officialUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '12px',
                    color: 'var(--primary-accent)',
                    textDecoration: 'none'
                  }}
                >
                  <ShieldCheck size={14} /> {item.verifiedReference.name.split('(')[1]?.replace(')', '') || 'Verified'} <ExternalLink size={12} />
                </a>
              </div>

              <h3 style={{ margin: '0 0 6px 0', fontSize: '20px' }}>
                {getTestTitle(item)}
              </h3>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '14px' }}>
                English: {item.testName} ({item.unit})
              </div>

              <p 
                style={{ 
                  margin: '0 0 16px 0', 
                  fontSize: '14px', 
                  lineHeight: 1.6, 
                  cursor: 'pointer',
                  backgroundColor: 'var(--bg-primary)',
                  padding: '10px 12px',
                  borderRadius: '8px'
                }}
                onClick={() => {
                  if (onReadAloud) onReadAloud(`${getTestTitle(item)}. ${getExplanation(item)}`);
                }}
              >
                {getExplanation(item)}
              </p>

              {/* Standard Adult Interval Reference */}
              <div style={{ marginBottom: '16px', fontSize: '13px' }}>
                <strong style={{ display: 'block', marginBottom: '4px', color: 'var(--text-muted)' }}>
                  {t.glossary.normalRange}:
                </strong>
                <div style={{
                  backgroundColor: 'var(--primary-subtle)',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontWeight: 600,
                  color: 'var(--primary-accent)'
                }}>
                  {Object.entries(item.standardAdultInterval).map(([k, v]) => `${k.toUpperCase()}: ${v}`).join(' | ')}
                </div>
              </div>

              {/* High / Low Impacts */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px', fontSize: '12px' }}>
                <div style={{ backgroundColor: 'var(--bg-primary)', padding: '10px', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--warning-color)', fontWeight: 600, marginBottom: '4px' }}>
                    <ArrowDownCircle size={14} /> {t.glossary.lowLevelImpact}
                  </div>
                  <div style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {item.lowMeaning}
                  </div>
                </div>

                <div style={{ backgroundColor: 'var(--bg-primary)', padding: '10px', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--warning-color)', fontWeight: 600, marginBottom: '4px' }}>
                    <ArrowUpCircle size={14} /> {t.glossary.highLevelImpact}
                  </div>
                  <div style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {item.highMeaning}
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Question Quick Add */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                Consultation Guidance:
              </span>
              <button
                onClick={() => {
                  const q = item.suggestedDoctorQuestions[0] || `What does my ${item.testName} mean for my overall health?`;
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
