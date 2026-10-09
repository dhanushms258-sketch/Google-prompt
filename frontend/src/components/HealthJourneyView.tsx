import React from 'react';
import { 
  Heart, 
  BookOpen, 
  FileText, 
  HelpCircle, 
  Pill, 
  ArrowRight, 
  RotateCcw,
  AlertCircle
} from 'lucide-react';
import { TRANSLATIONS } from '../translations';
import type { SupportedLanguage } from '../translations';

interface Props {
  language: SupportedLanguage;
  onNavigateTab: (tab: any) => void;
  onReadAloud?: (text: string) => void;
}

export const HealthJourneyView: React.FC<Props> = ({ language, onNavigateTab, onReadAloud }) => {
  const [currentStep, setCurrentStep] = React.useState<number>(0);
  const t = TRANSLATIONS[language];

  const steps = [
    {
      num: 1,
      title: t.journey.step1Title,
      desc: t.journey.step1Desc,
      icon: FileText,
      tabTarget: 'explorer',
      badge: "Step 1: Diagnostics"
    },
    {
      num: 2,
      title: t.journey.step2Title,
      desc: t.journey.step2Desc,
      icon: BookOpen,
      tabTarget: 'glossary',
      badge: "Step 2: Literacy"
    },
    {
      num: 3,
      title: t.journey.step3Title,
      desc: t.journey.step3Desc,
      icon: HelpCircle,
      tabTarget: 'doctorQuestions',
      badge: "Step 3: Consultation"
    },
    {
      num: 4,
      title: t.journey.step4Title,
      desc: t.journey.step4Desc,
      icon: Pill,
      tabTarget: 'medicines',
      badge: "Step 4: Therapeutics"
    }
  ];

  const activeStep = steps[currentStep];

  return (
    <div style={{ padding: '24px', maxWidth: '1000px', margin: '0 auto', textAlign: 'left' }}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '28px', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Heart color="#0284c7" size={28} /> {t.journey.title}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>{t.journey.subtitle}</p>
      </div>

      {/* Journey Stepper Bar */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '8px', 
        marginBottom: '28px',
        backgroundColor: 'var(--bg-card)',
        padding: '12px',
        borderRadius: '12px',
        border: '1px solid var(--border-color)'
      }}>
        {steps.map((s, idx) => {
          const isActive = idx === currentStep;
          const isDone = idx < currentStep;
          return (
            <button
              key={idx}
              onClick={() => {
                setCurrentStep(idx);
                if (onReadAloud) onReadAloud(`${s.title}. ${s.desc}`);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 14px',
                borderRadius: '8px',
                border: isActive ? '2px solid var(--primary-accent)' : '1px solid transparent',
                backgroundColor: isActive ? 'var(--primary-subtle)' : isDone ? 'var(--success-bg)' : 'transparent',
                color: 'var(--text-main)',
                cursor: 'pointer',
                fontWeight: isActive ? 600 : 500,
                textAlign: 'left'
              }}
            >
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: isActive ? 'var(--primary-accent)' : isDone ? 'var(--success-color)' : '#94a3b8',
                color: '#fff',
                fontSize: '13px'
              }}>
                {s.num}
              </span>
              <span style={{ fontSize: '13px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {s.title.split('.')[1] || s.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Card */}
      <div 
        style={{
          backgroundColor: 'var(--bg-card)',
          borderRadius: '16px',
          padding: '32px',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--card-shadow)',
          marginBottom: '24px'
        }}
        onClick={() => {
          if (onReadAloud) onReadAloud(`${activeStep.title}. ${activeStep.desc}`);
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <span style={{ 
            fontSize: '12px', 
            fontWeight: 700, 
            letterSpacing: '0.05em', 
            color: 'var(--primary-accent)',
            textTransform: 'uppercase',
            backgroundColor: 'var(--primary-subtle)',
            padding: '4px 10px',
            borderRadius: '999px'
          }}>
            {activeStep.badge}
          </span>
          <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
            Stage {currentStep + 1} of 4
          </span>
        </div>

        <h3 style={{ fontSize: '24px', margin: '0 0 12px 0', color: 'var(--text-main)' }}>
          {activeStep.title}
        </h3>

        <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '24px' }}>
          {activeStep.desc}
        </p>

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            onClick={() => onNavigateTab(activeStep.tabTarget)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              backgroundColor: 'var(--primary-accent)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '15px',
              cursor: 'pointer'
            }}
          >
            Launch Interactive Tool <ArrowRight size={18} />
          </button>

          <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            Jump directly into this module's dedicated workbench
          </span>
        </div>
      </div>

      {/* Non-Diagnostic Safety Callout */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        backgroundColor: 'var(--primary-subtle)',
        border: '1px solid var(--border-color)',
        padding: '16px',
        borderRadius: '10px',
        marginBottom: '24px'
      }}>
        <AlertCircle color="#0284c7" size={24} style={{ flexShrink: 0 }} />
        <span style={{ fontSize: '14px', color: 'var(--text-main)' }}>
          {t.journey.nonDiagNotice}
        </span>
      </div>

      {/* Stepper Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          disabled={currentStep === 0}
          onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
          style={{
            padding: '10px 18px',
            borderRadius: '8px',
            border: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-card)',
            color: currentStep === 0 ? '#94a3b8' : 'var(--text-main)',
            cursor: currentStep === 0 ? 'not-allowed' : 'pointer',
            fontWeight: 500
          }}
        >
          {t.journey.btnPrev}
        </button>

        <button
          onClick={() => setCurrentStep(0)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          <RotateCcw size={14} /> {t.journey.btnReset}
        </button>

        <button
          onClick={() => {
            if (currentStep < 3) {
              setCurrentStep(prev => prev + 1);
            } else {
              onNavigateTab('explorer');
            }
          }}
          style={{
            padding: '10px 22px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: 'var(--primary-accent)',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          {currentStep === 3 ? "Explore Documents" : t.journey.btnNext}
        </button>
      </div>
    </div>
  );
};
