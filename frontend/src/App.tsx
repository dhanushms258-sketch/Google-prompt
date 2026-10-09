import React from 'react';
import { 
  Heart, 
  FileText, 
  BookOpen, 
  HelpCircle, 
  Pill, 
  Eye, 
  ShieldCheck, 
  AlertOctagon, 
  Languages, 
  PhoneCall
} from 'lucide-react';
import { TRANSLATIONS } from './translations';
import type { SupportedLanguage } from './translations';
import { HealthJourneyView } from './components/HealthJourneyView';
import { DocumentExplorerView } from './components/DocumentExplorerView';
import { VerifiedGlossaryView } from './components/VerifiedGlossaryView';
import { DoctorQuestionBuilderView } from './components/DoctorQuestionBuilderView';
import { GenericMedicinesView } from './components/GenericMedicinesView';
import { AccessibilityStudioView } from './components/AccessibilityStudioView';
import { PrivacyControlsView } from './components/PrivacyControlsView';

export function App() {
  const [language, setLanguage] = React.useState<SupportedLanguage>('en');
  const [activeTab, setActiveTab] = React.useState<string>('journey');
  const [theme, setTheme] = React.useState<string>('light');
  const [textSize, setTextSize] = React.useState<string>('md');
  const [dyslexicFont, setDyslexicFont] = React.useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = React.useState<boolean>(false);
  const [speechEnabled, setSpeechEnabled] = React.useState<boolean>(false);
  const [customQuestions, setCustomQuestions] = React.useState<string[]>([
    "How do my current fasting glucose and HbA1c levels correlate with each other?",
    "Should we re-test the lipid and blood glucose panel in 3 months to monitor lifestyle impact?"
  ]);

  // Synchronize accessibility attributes on document root
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-text-size', textSize);
    document.documentElement.setAttribute('data-dyslexia', dyslexicFont ? 'true' : 'false');
    document.documentElement.setAttribute('data-reduced-motion', reducedMotion ? 'true' : 'false');
  }, [theme, textSize, dyslexicFont, reducedMotion]);

  const t = TRANSLATIONS[language];

  // Speech synthesizer assistance
  const handleReadAloud = (text: string) => {
    if (!speechEnabled || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    if (language === 'hi') utterance.lang = 'hi-IN';
    else if (language === 'kn') utterance.lang = 'kn-IN';
    else utterance.lang = 'en-IN';
    window.speechSynthesis.speak(utterance);
  };

  const handleAddQuestion = (q: string) => {
    if (!customQuestions.includes(q)) {
      setCustomQuestions(prev => [...prev, q]);
    }
  };

  const handleRemoveQuestion = (idx: number) => {
    setCustomQuestions(prev => prev.filter((_, i) => i !== idx));
  };

  const navItems = [
    { id: 'journey', label: t.tabs.journey, icon: Heart },
    { id: 'explorer', label: t.tabs.explorer, icon: FileText },
    { id: 'glossary', label: t.tabs.glossary, icon: BookOpen },
    { id: 'doctorQuestions', label: `${t.tabs.doctorQuestions} (${customQuestions.length})`, icon: HelpCircle },
    { id: 'medicines', label: t.tabs.medicines, icon: Pill },
    { id: 'accessibility', label: t.tabs.accessibility, icon: Eye },
    { id: 'privacy', label: t.tabs.privacy, icon: ShieldCheck }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Official Verified India Emergency Bar */}
      <div style={{
        backgroundColor: '#7f1d1d',
        color: '#ffffff',
        padding: '8px 16px',
        fontSize: '13px',
        fontWeight: 600,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <PhoneCall size={16} />
          <span>{t.emergencyBar.label}</span>
        </div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <span>🚑 {t.emergencyBar.dialAmbulance}</span>
          <span>🚨 {t.emergencyBar.dialEmergency}</span>
          <span>🧠 {t.emergencyBar.dialTeleManas}</span>
        </div>
      </div>

      {/* Main App Navigation Bar */}
      <header style={{
        backgroundColor: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border-color)',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div>
          <h1 style={{ 
            margin: 0, 
            fontSize: '24px', 
            fontWeight: 800, 
            letterSpacing: '-0.02em', 
            color: 'var(--primary-accent)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Heart fill="var(--primary-accent)" size={24} /> {t.appName}
          </h1>
          <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: 'var(--text-muted)' }}>
            {t.tagline}
          </p>
        </div>

        {/* Right Utility: Indic Language Switcher & Accessibility Quick Toggles */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: 'var(--bg-primary)',
            padding: '4px 8px',
            borderRadius: '8px',
            border: '1px solid var(--border-color)'
          }}>
            <Languages size={16} color="var(--primary-accent)" />
            <select
              value={language}
              onChange={e => setLanguage(e.target.value as SupportedLanguage)}
              style={{
                border: 'none',
                background: 'transparent',
                color: 'var(--text-main)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                outline: 'none'
              }}
              aria-label="Select Language"
            >
              <option value="en">English</option>
              <option value="kn">ಕನ್ನಡ (Kannada)</option>
              <option value="hi">हिन्दी (Hindi)</option>
            </select>
          </div>

          <button
            onClick={() => setActiveTab('accessibility')}
            title="Accessibility Studio"
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--text-main)',
              cursor: 'pointer',
              fontSize: '13px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Eye size={16} /> Studio
          </button>
        </div>
      </header>

      {/* Mandatory Non-Diagnostic Clinical Safety Banner */}
      <div style={{
        backgroundColor: 'var(--warning-bg)',
        borderBottom: '1px solid var(--border-color)',
        padding: '10px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '13px',
        color: 'var(--warning-color)'
      }}>
        <AlertOctagon size={18} style={{ flexShrink: 0 }} />
        <span style={{ fontWeight: 700 }}>{t.disclaimerBadge}:</span>
        <span style={{ color: 'var(--text-main)' }}>{t.disclaimerFull}</span>
      </div>

      {/* Module Tabs Navigation */}
      <nav 
        aria-label="Platform Modules"
        style={{
          display: 'flex',
          overflowX: 'auto',
          backgroundColor: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border-color)',
          padding: '0 16px'
        }}
      >
        {navItems.map(item => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 18px',
                border: 'none',
                borderBottom: isActive ? '3px solid var(--primary-accent)' : '3px solid transparent',
                backgroundColor: 'transparent',
                color: isActive ? 'var(--primary-accent)' : 'var(--text-muted)',
                fontWeight: isActive ? 700 : 500,
                fontSize: '14px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              }}
            >
              <Icon size={18} /> {item.label}
            </button>
          );
        })}
      </nav>

      {/* Active Tab Viewport */}
      <main style={{ flex: 1 }}>
        {activeTab === 'journey' && (
          <HealthJourneyView 
            language={language} 
            onNavigateTab={tab => setActiveTab(tab)} 
            onReadAloud={handleReadAloud}
          />
        )}
        {activeTab === 'explorer' && (
          <DocumentExplorerView 
            language={language}
            onReadAloud={handleReadAloud}
            onAddQuestionToBuilder={handleAddQuestion}
          />
        )}
        {activeTab === 'glossary' && (
          <VerifiedGlossaryView 
            language={language}
            onReadAloud={handleReadAloud}
            onAddQuestionToBuilder={handleAddQuestion}
          />
        )}
        {activeTab === 'doctorQuestions' && (
          <DoctorQuestionBuilderView 
            language={language}
            customQuestionsList={customQuestions}
            onRemoveQuestion={handleRemoveQuestion}
            onAddCustomQuestion={handleAddQuestion}
          />
        )}
        {activeTab === 'medicines' && (
          <GenericMedicinesView 
            language={language}
            onReadAloud={handleReadAloud}
            onAddQuestionToBuilder={handleAddQuestion}
          />
        )}
        {activeTab === 'accessibility' && (
          <AccessibilityStudioView 
            language={language}
            currentTheme={theme}
            onThemeChange={setTheme}
            textSize={textSize}
            onTextSizeChange={setTextSize}
            dyslexicFont={dyslexicFont}
            onToggleDyslexicFont={() => setDyslexicFont(prev => !prev)}
            reducedMotion={reducedMotion}
            onToggleReducedMotion={() => setReducedMotion(prev => !prev)}
            speechEnabled={speechEnabled}
            onToggleSpeech={() => setSpeechEnabled(prev => !prev)}
          />
        )}
        {activeTab === 'privacy' && (
          <PrivacyControlsView language={language} />
        )}
      </main>

      {/* Multilingual Certified Footer */}
      <footer style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-color)',
        padding: '20px 24px',
        textAlign: 'center',
        fontSize: '13px',
        color: 'var(--text-muted)'
      }}>
        <div style={{ marginBottom: '6px' }}>{t.footer.copyright}</div>
        <div>{t.footer.guidelinesNotice}</div>
      </footer>
    </div>
  );
}

export default App;
