import React from 'react';
import { 
  HelpCircle, 
  Plus, 
  Trash2, 
  Copy, 
  Check, 
  Printer, 
  Sparkles,
  ClipboardList
} from 'lucide-react';
import { TRANSLATIONS } from '../translations';
import type { SupportedLanguage } from '../translations';

interface Props {
  language: SupportedLanguage;
  customQuestionsList: string[];
  onRemoveQuestion: (index: number) => void;
  onAddCustomQuestion: (question: string) => void;
}

export const DoctorQuestionBuilderView: React.FC<Props> = ({
  language,
  customQuestionsList,
  onRemoveQuestion,
  onAddCustomQuestion
}) => {
  const t = TRANSLATIONS[language];
  const [selectedConcerns, setSelectedConcerns] = React.useState<string[]>(['sugar', 'lifestyle']);
  const [newQuestionInput, setNewQuestionInput] = React.useState<string>("");
  const [copiedState, setCopiedState] = React.useState<boolean>(false);

  const availableConcerns = [
    { id: 'sugar', labelEn: 'Blood Sugar / Diabetes', labelKn: 'ರಕ್ತದಲ್ಲಿ ಸಕ್ಕರೆ ಅಂಶ / ಮಧುಮೇಹ', labelHi: 'रक्त शर्करा / मधुमेह' },
    { id: 'bp', labelEn: 'Blood Pressure / Hypertension', labelKn: 'ರಕ್ತದೊತ್ತಡ / ಬಿಪಿ', labelHi: 'रक्तचाप / हाइपरटेंशन' },
    { id: 'kidney', labelEn: 'Kidney / Creatinine Health', labelKn: 'ಮೂತ್ರಪಿಂಡ / ಕ್ರಿಯೇಟಿನೈನ್ ಆರೋಗ್ಯ', labelHi: 'किडनी / क्रिएटिनिन स्वास्थ्य' },
    { id: 'lifestyle', labelEn: 'Diet, Nutrition & Physical Activity', labelKn: 'ಆಹಾರ ಕ್ರಮ ಮತ್ತು ವ್ಯಾಯಾಮ', labelHi: 'आहार, पोषण एवं शारीरिक व्यायाम' },
    { id: 'meds', labelEn: 'Medication Side Effects & Schedule', labelKn: 'ಔಷಧಿಗಳ ಸಮಯ ಮತ್ತು ಅಡ್ಡಪರಿಣಾಮ', labelHi: 'दवाओं का समय व दुष्प्रभाव' }
  ];

  const getConcernLabel = (c: any) => {
    if (language === 'kn') return c.labelKn;
    if (language === 'hi') return c.labelHi;
    return c.labelEn;
  };

  const toggleConcern = (id: string) => {
    setSelectedConcerns(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleGenerateQuestions = () => {
    const generated: string[] = [];

    if (selectedConcerns.includes('sugar')) {
      generated.push(language === 'kn' 
        ? "ನನ್ನ ಇತ್ತೀಚಿನ ಸಕ್ಕರೆ ಮಟ್ಟಕ್ಕೆ ಅನುಗುಣವಾಗಿ ನಾನು ಎಷ್ಟು ತಿಂಗಳಿಗೊಮ್ಮೆ HbA1c ಪರೀಕ್ಷೆ ಮಾಡಿಸಬೇಕು?"
        : language === 'hi'
        ? "मेरी हालिया शुगर रिपोर्ट के आधार पर मुझे कितने समय बाद दोबारा HbA1c जांच करानी चाहिए?"
        : "Based on my current fasting glucose and HbA1c, what is my ideal individual glycemic target?");
    }

    if (selectedConcerns.includes('bp')) {
      generated.push(language === 'kn'
        ? "ದಿನದ ಯಾವ ಸಮಯದಲ್ಲಿ ನನ್ನ ರಕ್ತದೊತ್ತಡವನ್ನು ಅಳೆಯುವುದು ಸೂಕ್ತ?"
        : language === 'hi'
        ? "दिन के किस समय मेरा ब्लड प्रेशर नापना सबसे सटीक रहेगा?"
        : "What is the best time of day to monitor my blood pressure at home for consistency?");
    }

    if (selectedConcerns.includes('lifestyle')) {
      generated.push(language === 'kn'
        ? "ನನ್ನ ಪರೀಕ್ಷಾ ವರದಿಗೆ ತಕ್ಕಂತೆ ಆಹಾರದಲ್ಲಿ ಯಾವ ನಿರ್ದಿಷ್ಟ ಬದಲಾವಣೆಗಳನ್ನು ಮಾಡಬೇಕು?"
        : language === 'hi'
        ? "मेरी जांच रिपोर्ट के अनुसार मुझे अपने दैनिक भोजन में क्या बदलाव करने चाहिए?"
        : "What specific dietary and exercise guidelines are most safe and effective for my lab parameters?");
    }

    if (selectedConcerns.includes('kidney')) {
      generated.push(language === 'kn'
        ? "ನನ್ನ ಕಿಡ್ನಿ (ಕ್ರಿಯೇಟಿನೈನ್) ಕಾರ್ಯಕ್ಷಮತೆಯ ಮೇಲೆ ನಾನು ತೆಗೆದುಕೊಳ್ಳುತ್ತಿರುವ ಔಷಧಿಗಳು ಪರಿಣಾಮ ಬೀರುತ್ತಿವೆಯೇ?"
        : language === 'hi'
        ? "क्या मेरी किसी दवा का मेरी किडनी (क्रिएटिनिन) पर कोई अतिरिक्त दबाव पड़ रहा है?"
        : "Does my serum creatinine or filtration rate require medication adjustments or special fluid intake?");
    }

    if (selectedConcerns.includes('meds')) {
      generated.push(language === 'kn'
        ? "ನಾನು ತೆಗೆದುಕೊಳ್ಳುವ ಔಷಧಿಗಳಿಗೆ ಜನೌಷಧಿ ಕೇಂದ್ರದ ಜೆನೆರಿಕ್ ಪರ್ಯಾಯಗಳು ಲಭ್ಯವಿವೆಯೇ?"
        : language === 'hi'
        ? "क्या मेरी दवाओं के जन औषधि जेनेरिक विकल्प उपलब्ध हैं?"
        : "Are there certified Jan Aushadhi generic equivalents available for my prescribed brand medications?");
    }

    generated.forEach(q => onAddCustomQuestion(q));
  };

  const handleCopyChecklist = () => {
    const textToCopy = [
      `AAROGYA NOVA - Doctor Consultation Questions Checklist`,
      `Date: ${new Date().toLocaleDateString()}`,
      `--------------------------------------------------`,
      ...customQuestionsList.map((q, idx) => `${idx + 1}. [ ] ${q}`),
      `--------------------------------------------------`,
      `Note: Generated for educational consultation clarity. Not a diagnosis.`
    ].join('\n');

    navigator.clipboard.writeText(textToCopy);
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1000px', margin: '0 auto', textAlign: 'left' }}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '28px', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <HelpCircle color="#0284c7" size={28} /> {t.doctorQuestions.title}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>{t.doctorQuestions.subtitle}</p>
      </div>

      {/* Health Concerns Selector */}
      <div style={{
        backgroundColor: 'var(--bg-card)',
        borderRadius: '12px',
        padding: '20px',
        border: '1px solid var(--border-color)',
        marginBottom: '24px'
      }}>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '17px' }}>
          {t.doctorQuestions.selectConcerns}
        </h3>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
          {availableConcerns.map(c => {
            const isSelected = selectedConcerns.includes(c.id);
            return (
              <button
                key={c.id}
                onClick={() => toggleConcern(c.id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: isSelected ? '2px solid var(--primary-accent)' : '1px solid var(--border-color)',
                  backgroundColor: isSelected ? 'var(--primary-subtle)' : 'var(--bg-primary)',
                  color: isSelected ? 'var(--primary-accent)' : 'var(--text-main)',
                  fontWeight: isSelected ? 600 : 400,
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                {isSelected ? '✓ ' : '+ '} {getConcernLabel(c)}
              </button>
            );
          })}
        </div>

        <button
          onClick={handleGenerateQuestions}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: 'var(--primary-accent)',
            color: '#fff',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          <Sparkles size={16} /> {t.doctorQuestions.btnGenerate}
        </button>
      </div>

      {/* Manual Question Addition Input */}
      <div style={{
        backgroundColor: 'var(--bg-card)',
        borderRadius: '12px',
        padding: '16px 20px',
        border: '1px solid var(--border-color)',
        marginBottom: '24px',
        display: 'flex',
        gap: '10px'
      }}>
        <input 
          type="text"
          value={newQuestionInput}
          onChange={e => setNewQuestionInput(e.target.value)}
          placeholder="Add your own question for the doctor..."
          style={{
            flex: 1,
            padding: '10px 14px',
            borderRadius: '8px',
            border: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-main)',
            fontSize: '14px'
          }}
          onKeyDown={e => {
            if (e.key === 'Enter' && newQuestionInput.trim()) {
              onAddCustomQuestion(newQuestionInput.trim());
              setNewQuestionInput("");
            }
          }}
        />
        <button
          onClick={() => {
            if (newQuestionInput.trim()) {
              onAddCustomQuestion(newQuestionInput.trim());
              setNewQuestionInput("");
            }
          }}
          style={{
            padding: '10px 16px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: 'var(--primary-accent)',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <Plus size={16} /> Add
        </button>
      </div>

      {/* Structured Checklist Preview */}
      <div style={{
        backgroundColor: 'var(--bg-card)',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        padding: '24px',
        boxShadow: 'var(--card-shadow)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ margin: 0, fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ClipboardList size={20} color="#0284c7" /> {t.doctorQuestions.checklistTitle} ({customQuestionsList.length})
          </h3>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={handleCopyChecklist}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'transparent',
                color: 'var(--text-main)',
                cursor: 'pointer',
                fontSize: '13px'
              }}
            >
              {copiedState ? <Check size={14} color="#15803d" /> : <Copy size={14} />}
              {copiedState ? t.doctorQuestions.copied : t.doctorQuestions.copyBtn}
            </button>

            <button
              onClick={handlePrint}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'transparent',
                color: 'var(--text-main)',
                cursor: 'pointer',
                fontSize: '13px'
              }}
            >
              <Printer size={14} /> {t.doctorQuestions.printBtn}
            </button>
          </div>
        </div>

        {customQuestionsList.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '32px', color: 'var(--text-muted)' }}>
            No questions generated yet. Select concerns above or add questions directly from the Document Explorer and Glossary tabs.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {customQuestionsList.map((q, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ 
                    fontWeight: 700, 
                    color: 'var(--primary-accent)', 
                    width: '24px', 
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px'
                  }}>
                    {idx + 1}
                  </span>
                  <span style={{ fontSize: '15px' }}>{q}</span>
                </div>

                <button
                  onClick={() => onRemoveQuestion(idx)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ef4444',
                    cursor: 'pointer',
                    padding: '6px'
                  }}
                  title="Remove question"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
