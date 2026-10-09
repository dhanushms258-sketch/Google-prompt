import React from 'react';
import { 
  Eye, 
  Volume2, 
  VolumeX, 
  Type, 
  Sun, 
  Moon, 
  Contrast, 
  Sliders,
  CheckCircle2
} from 'lucide-react';
import { TRANSLATIONS } from '../translations';
import type { SupportedLanguage } from '../translations';

interface Props {
  language: SupportedLanguage;
  currentTheme: string;
  onThemeChange: (theme: string) => void;
  textSize: string;
  onTextSizeChange: (size: string) => void;
  dyslexicFont: boolean;
  onToggleDyslexicFont: () => void;
  reducedMotion: boolean;
  onToggleReducedMotion: () => void;
  speechEnabled: boolean;
  onToggleSpeech: () => void;
}

export const AccessibilityStudioView: React.FC<Props> = ({
  language,
  currentTheme,
  onThemeChange,
  textSize,
  onTextSizeChange,
  dyslexicFont,
  onToggleDyslexicFont,
  reducedMotion,
  onToggleReducedMotion,
  speechEnabled,
  onToggleSpeech
}) => {
  const t = TRANSLATIONS[language];

  return (
    <div style={{ padding: '24px', maxWidth: '1000px', margin: '0 auto', textAlign: 'left' }}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '28px', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Eye color="#0284c7" size={28} /> {t.accessibility.title}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>{t.accessibility.subtitle}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
        {/* Theme Settings Card */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--card-shadow)'
        }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sun size={20} color="#0284c7" /> {t.accessibility.themeMode}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              onClick={() => onThemeChange('light')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '8px',
                border: currentTheme === 'light' ? '2px solid var(--primary-accent)' : '1px solid var(--border-color)',
                backgroundColor: currentTheme === 'light' ? 'var(--primary-subtle)' : 'var(--bg-primary)',
                color: 'var(--text-main)',
                cursor: 'pointer',
                fontWeight: currentTheme === 'light' ? 600 : 400
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Sun size={18} /> {t.accessibility.themeLight}
              </span>
              {currentTheme === 'light' && <CheckCircle2 size={18} color="var(--primary-accent)" />}
            </button>

            <button
              onClick={() => onThemeChange('dark')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '8px',
                border: currentTheme === 'dark' ? '2px solid var(--primary-accent)' : '1px solid var(--border-color)',
                backgroundColor: currentTheme === 'dark' ? 'var(--primary-subtle)' : 'var(--bg-primary)',
                color: 'var(--text-main)',
                cursor: 'pointer',
                fontWeight: currentTheme === 'dark' ? 600 : 400
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Moon size={18} /> {t.accessibility.themeDark}
              </span>
              {currentTheme === 'dark' && <CheckCircle2 size={18} color="var(--primary-accent)" />}
            </button>

            <button
              onClick={() => onThemeChange('high-contrast')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '8px',
                border: currentTheme === 'high-contrast' ? '2px solid var(--primary-accent)' : '1px solid var(--border-color)',
                backgroundColor: currentTheme === 'high-contrast' ? 'var(--primary-subtle)' : 'var(--bg-primary)',
                color: 'var(--text-main)',
                cursor: 'pointer',
                fontWeight: currentTheme === 'high-contrast' ? 600 : 400
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Contrast size={18} /> {t.accessibility.themeHighContrast} (WCAG AAA)
              </span>
              {currentTheme === 'high-contrast' && <CheckCircle2 size={18} color="var(--primary-accent)" />}
            </button>
          </div>
        </div>

        {/* Text Scaling Card */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--card-shadow)'
        }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Type size={20} color="#0284c7" /> {t.accessibility.textSize}
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {[
              { id: 'sm', label: t.accessibility.sizeSmall },
              { id: 'md', label: t.accessibility.sizeMedium },
              { id: 'lg', label: t.accessibility.sizeLarge },
              { id: 'xl', label: t.accessibility.sizeExtraLarge }
            ].map(s => (
              <button
                key={s.id}
                onClick={() => onTextSizeChange(s.id)}
                style={{
                  padding: '12px',
                  borderRadius: '8px',
                  border: textSize === s.id ? '2px solid var(--primary-accent)' : '1px solid var(--border-color)',
                  backgroundColor: textSize === s.id ? 'var(--primary-subtle)' : 'var(--bg-primary)',
                  color: 'var(--text-main)',
                  fontWeight: textSize === s.id ? 700 : 400,
                  cursor: 'pointer',
                  textAlign: 'center'
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div style={{ marginTop: '20px', padding: '12px', backgroundColor: 'var(--bg-primary)', borderRadius: '8px', fontSize: '14px' }}>
            <strong>Sample Preview:</strong> Clinical reference standard intervals for adult diagnostics.
          </div>
        </div>

        {/* Cognitive & Reading Ergonomics Card */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--card-shadow)'
        }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sliders size={20} color="#0284c7" /> Reading Ergonomics
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
              <span>{t.accessibility.dyslexiaFont}</span>
              <input 
                type="checkbox"
                checked={dyslexicFont}
                onChange={onToggleDyslexicFont}
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
              />
            </label>

            <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
              <span>{t.accessibility.reducedMotion}</span>
              <input 
                type="checkbox"
                checked={reducedMotion}
                onChange={onToggleReducedMotion}
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
              />
            </label>
          </div>
        </div>

        {/* Screen Reader & Audio Assistant Card */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--card-shadow)'
        }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            {speechEnabled ? <Volume2 size={20} color="#15803d" /> : <VolumeX size={20} color="var(--text-muted)" />}
            {t.accessibility.audioReader}
          </h3>

          <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--text-muted)' }}>
            {speechEnabled ? t.accessibility.audioReaderActive : t.accessibility.audioReaderIdle}
          </p>

          <button
            onClick={onToggleSpeech}
            style={{
              padding: '10px 18px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: speechEnabled ? 'var(--danger-bg)' : 'var(--primary-accent)',
              color: speechEnabled ? 'var(--danger-color)' : '#fff',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            {speechEnabled ? <VolumeX size={16} /> : <Volume2 size={16} />}
            {speechEnabled ? "Disable Screen Reader" : "Enable Screen Reader"}
          </button>
        </div>
      </div>
    </div>
  );
};
