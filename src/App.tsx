import { useState } from 'react'

// ─── Types & Localized Copy ──────────────────────────────────────────────────

type ThemeMode = 'dark' | 'light'
type Language = 'EN' | 'RU' | 'HE'

interface PresetPalette {
  id: string
  name: string
  primary: string
  secondary: string
  bg: string
  accent: string
}

const PALETTE_PRESETS: PresetPalette[] = [
  { id: '1', name: 'Navy & Emerald', primary: '#020617', secondary: '#22c55e', bg: '#0b1329', accent: '#4ade80' },
  { id: '2', name: 'Navy & Amber', primary: '#0f172a', secondary: '#f59e0b', bg: '#1e293b', accent: '#fbbf24' },
  { id: '3', name: 'Indigo & Mint', primary: '#1e1b4b', secondary: '#10b981', bg: '#312e81', accent: '#34d399' },
  { id: '4', name: 'Royal Blue & Emerald', primary: '#172554', secondary: '#16a34a', bg: '#1e3a8a', accent: '#22c55e' },
  { id: '5', name: 'Slate & Crimson', primary: '#020617', secondary: '#ef4444', bg: '#0f172a', accent: '#f87171' },
  { id: '6', name: 'Midnight & Gold', primary: '#09090b', secondary: '#eab308', bg: '#18181b', accent: '#fde047' },
  { id: '7', name: 'Teal & Coral', primary: '#042f2e', secondary: '#f97316', bg: '#134e4a', accent: '#fb923c' },
  { id: '8', name: 'Violet & Cyan', primary: '#2e1065', secondary: '#06b6d4', bg: '#3b0764', accent: '#22d3ee' },
]

const TEXTS: Record<Language, {
  nav: { howItWorks: string; prospects: string; sponsors: string; partners: string; customPptx: string; pricing: string; login: string; demo: string }
  hero: {
    tagline: string
    headline: string
    subheadline: string
    mechanism: string
    ctaPrimary: string
    ctaSecondary: string
    liveSignalLabel: string
    signalBadge: string
  }
  howItWorks: { title: string; subtitle: string; step1Title: string; step1Desc: string; step2Title: string; step2Desc: string; step3Title: string; step3Desc: string }
  engines: { title: string; subtitle: string }
  features: { title: string; subtitle: string }
  pptxSection: { title: string; subtitle: string; presetLabel: string; customPickersLabel: string; slideTitle: string }
  dashboard: { title: string; subtitle: string; fitDist: string; pipelineStage: string; signal breakdown: string }
  governance: { title: string; subtitle: string; profileTitle: string; profileDesc: string; adminTitle: string; adminDesc: string }
  cta: { title: string; desc: string; button: string }
}> = {
  EN: {
    nav: {
      howItWorks: 'How it works',
      prospects: 'Prospects',
      sponsors: 'Sponsors',
      partners: 'Partners',
      customPptx: 'PPTX Deck Customizer',
      pricing: 'Pricing',
      login: 'Log in',
      demo: 'Request Demo',
    },
    hero: {
      tagline: 'Know who to call before they call you.',
      headline: 'AI Sales Intelligence & Strategic Discovery',
      subheadline: 'Continuous web crawling, signal extraction, and automated PPTX briefing decks — built for B2B sales teams who want ranked opportunities, not raw lead spreadsheets.',
      mechanism: 'Crawls 40+ public sources (web, news, job boards, funding, compliance DBs) → scores fit → generates 1-click executive briefs.',
      ctaPrimary: 'Request Demo →',
      ctaSecondary: 'Try Live Deck Generator',
      liveSignalLabel: 'LIVE INTENT SIGNAL DETECTED',
      signalBadge: '🟢 HIGH FIT · SCORE 94',
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Three deterministic steps. Zero generic AI summaries.',
      step1Title: '01. Crawl',
      step1Desc: 'Continuously sweeps company sites, news, hiring boards, funding registries, and sanctions DBs.',
      step2Title: '02. Score',
      step2Desc: 'Claude-extracted signals tagged by category & urgency (Hot/Warm/Cold) with transparent fit reasoning.',
      step3Title: '03. Brief',
      step3Desc: 'Generates structured talking points, decision maker contact language, and 1-click branded PPTX decks.',
    },
    engines: {
      title: 'Three Intents. One Engine.',
      subtitle: 'While competitors only handle buyer prospecting, Prospect Intelligence powers your entire GTM discovery.',
    },
    features: {
      title: 'Concrete Platform Capabilities',
      subtitle: 'Engineered for RevOps precision, multi-lingual teams, and executive-level rep adoption.',
    },
    pptxSection: {
      title: 'Dedicated PPTX Deck Customizer',
      subtitle: 'Export 1-click branded pitch decks per record. Choose from 8 curated palette presets or supply custom brand hex codes.',
      presetLabel: 'CURATED BRAND PALETTES',
      customPickersLabel: 'CUSTOM BRAND HEX PICKER',
      slideTitle: 'LIVE DECK SLIDE PREVIEW',
    },
    dashboard: {
      title: 'Pipeline & AI Usage Analytics',
      subtitle: 'Full RevOps visibility into fit-score distribution, pipeline stages, and team API consumption.',
      fitDist: 'Fit Score Distribution',
      pipelineStage: 'Pipeline Stage Breakdown',
      breakdown: 'Signal Category Breakdown',
    },
    governance: {
      title: 'Seller Profiles & AI Governance',
      subtitle: 'Seamless onboarding and enterprise governance for compliance-first sales organizations.',
      profileTitle: 'Seller Profile Auto-Extraction',
      profileDesc: 'Autofill your ICP criteria directly from a company URL, uploaded DOCX/PPTX product collateral, or manual entry.',
      adminTitle: 'AI Usage & Governance Admin',
      adminDesc: 'Manage ML data consent, API key thresholds, user seats, and SOC 2 Type II audit logging across your team.',
    },
    cta: {
      title: 'Stop Researching. Start Closing.',
      desc: 'Get your ranked target account list, complete with live intent signals and 1-click PPTX briefs, in under 4 minutes.',
      button: 'Request Demo →',
    },
  },
  RU: {
    nav: {
      howItWorks: 'Как это работает',
      prospects: 'Проспекты',
      sponsors: 'Спонсоры',
      partners: 'Партнеры',
      customPptx: 'Настройка PPTX',
      pricing: 'Цены',
      login: 'Войти',
      demo: 'Запросить демо',
    },
    hero: {
      tagline: 'Знайте, кому звонить, раньше ваших конкурентов.',
      taglineSub: '',
      headline: 'ИИ-разведка B2B-продаж и стратегический поиск',
      subheadline: 'Непрерывное сканирование веб-источников, извлечение сигналов и автоматические PPTX-презентации для отделов продаж.',
      mechanism: 'Сканирует 40+ открытых источников (сайты, новости, вакансии, реестры) → оценивает соответствие → создает презентации в 1 клик.',
      ctaPrimary: 'Запросить демо →',
      ctaSecondary: 'Попробовать демо PPTX',
      liveSignalLabel: 'СИГНАЛ В НАСТОЯЩЕМ ВРЕМЕНИ',
      signalBadge: '🟢 ВЫСОКИЙ FIT · 94/100',
    },
    howItWorks: {
      title: 'Как это работает',
      subtitle: 'Три четких шага. Никаких общих ИИ-текстов.',
      step1Title: '01. Сканирование',
      step1Desc: 'Непрерывный мониторинг сайтов компаний, новостей, вакансий, реестров и соцсетей.',
      step2Title: '02. Оценка Fit',
      step2Desc: 'Извлечение сигналов с помощью Claude: категории, срочность (Hot/Warm) и причины оценки.',
      step3Title: '03. Брифинг',
      step3Desc: 'Создание тезисов для переговоров, контактов ЛПР и брендированных PPTX-презентаций.',
    },
    engines: {
      title: 'Три направления. Один движок.',
      subtitle: 'В отличие от стандартных CRM, платформа охватывает покупателей, спонсоров и партнеров.',
    },
    features: {
      title: 'Функциональные возможности',
      subtitle: 'Точность для RevOps, поддержка мультиязычности и удобство для SDR/AE.',
    },
    pptxSection: {
      title: 'Брендирование PPTX-презентаций',
      subtitle: 'Экспорт готовых слайдов в 1 клик. Выберите из 8 палитр или задайте фирменные HEX-цвета.',
      presetLabel: 'ГОТОВЫЕ ЦВЕТОВЫЕ ПАЛИТРЫ',
      customPickersLabel: 'ПОЛЬЗОВАТЕЛЬСКИЕ HEX-ЦВЕТА',
      slideTitle: 'ПРЕВЬЮ СЛАЙДА В РЕАЛЬНОМ ВРЕМЕНИ',
    },
    dashboard: {
      title: 'Аналитика пайплайна и ИИ',
      subtitle: 'Полный контроль RevOps за распределением оценок, стадиями сделок и расходом API.',
      fitDist: 'Распределение оценок Fit',
      pipelineStage: 'Стадии пайплайна',
      breakdown: 'Категории сигналов',
    },
    governance: {
      title: 'Профиль продавца и ИИ-безопасность',
      subtitle: 'Быстрый старт и полный контроль данных для корпоративных клиентов.',
      profileTitle: 'Извлечение профиля из документов',
      profileDesc: 'Заполнение критериев ICP из URL компании, загруженных DOCX/PPTX или вручную.',
      adminTitle: 'Администрирование ИИ и безопасность',
      adminDesc: 'Управление согласием ML, лимитами API, правами доступа и аудит-логами SOC 2.',
    },
    cta: {
      title: 'Перестаньте искать. Начинайте продавать.',
      desc: 'Получите ранжированный список аккаунтов с сигналами и готовыми PPTX-брифами за 4 минуты.',
      button: 'Запросить демо →',
    },
  },
  HE: {
    nav: {
      howItWorks: 'תהליך העבודה',
      prospects: 'לקוחות פוטנציאליים',
      sponsors: 'ספונסרים',
      partners: 'שותפים',
      customPptx: 'התאמת מצגות PPTX',
      pricing: 'תמחור',
      login: 'התחברות',
      demo: 'תיאום הדגמה',
    },
    hero: {
      tagline: 'דע למי להתקשר לפני שהמתחרים שלך יודעים.',
      headline: 'מודיעין מכירות B2B וגילוי אסטרטגי',
      subheadline: 'סריקה רציפה של מקורות מידע, חילוץ אותות כוונה והפקת מצגות תדרוך ב-PPTX בלחיצת כפתור אחת.',
      mechanism: 'סורק 40+ מקורות מידע גלויים (אתרים, חדשות, דרושים, רשמים) ← מדרג התאמה ← מפיק מצגת מנהלים ב-1 קליק.',
      ctaPrimary: 'בקש הדגמה ←',
      ctaSecondary: 'נסה מחולל מצגות',
      liveSignalLabel: 'אות כוונה בזמן אמת',
      signalBadge: '🟢 התאמה גבוהה · 94/100',
    },
    howItWorks: {
      title: 'איך זה עובד',
      subtitle: 'שלושה שלבים מדויקים. ללא סיכומי בינה מלאכותית כלליים.',
      step1Title: '01. סריקה (Crawl)',
      step1Desc: 'סורק ברציפות אתרי חברות, דיווחי חדשות, לוחות דרושים, סבבי גיוס ורשמי חברות.',
      step2Title: '02. דירוג (Score)',
      step2Desc: 'חילוץ אותות באמצעות Claude לפי קטגוריה ודחיפות (Hot/Warm) עם נימוק שקוף.',
      step3Title: '03. תדרוך (Brief)',
      step3Desc: 'הפקת נקודות שיחה מותאמות, אנשי קשר מפתח ומצגת PPTX ממותגת ב-1 קליק.',
    },
    engines: {
      title: 'מנוע אחד. שלוש מטרות אסטרטגיות.',
      subtitle: 'בניגוד לכלי CRM רגילים, הפלטפורמה מכסה לקוחות, ספונסרים ושותפים עסקיים.',
    },
    features: {
      title: 'יכולות פלטפורמה מובנות',
      subtitle: 'תכנון מדויק ל-RevOps, צוותים רב-לשוניים ואימוץ מלא של אנשי המכירות.',
    },
    pptxSection: {
      title: 'מחולל ומעצב מצגות PPTX',
      subtitle: 'ייצוא מצגות ממותגות ב-1 קליק. בחרו מתוך 8 פלטות צבעים או הגדירו קודי HEX מותאמים.',
      presetLabel: 'פלטות צבעים מומלצות',
      customPickersLabel: 'הגדרת קודי HEX מותאמים',
      slideTitle: 'תצוגה מקדימה של השקופית בזמן אמת',
    },
    dashboard: {
      title: 'אנליטיקת צנרת מכירות ו-AI',
      subtitle: 'שקיפות מלאה ל-RevOps על התפלגות ציוני התאמה, שלבי צנרת ושימוש ב-API.',
      fitDist: 'התפלגות ציוני התאמה (Fit)',
      pipelineStage: 'פירוח שלבי צנרת מכירות',
      breakdown: 'פילוח אותות כוונה לפי קטגוריה',
    },
    governance: {
      title: 'פרופיל מוכר ואבטחת AI',
      subtitle: 'הטמעה מהירה ובקרת נתונים מלאה לארגונים בעלי דרישות רגולציה קפדניות.',
      profileTitle: 'חילוץ פרופיל מוכר מאתר / מסמך',
      profileDesc: 'מילוי אוטומטי של קריטריוני ICP ישירות מכתובת אתר, מסמך DOCX/PPTX או הזנה ידנית.',
      adminTitle: 'ניהול שימוש ב-AI ואבטחה',
      adminDesc: 'ניהול הסכמות ML, מגבלות API, הרשאות משתמשים ויומני ביקורת בתקן SOC 2 Type II.',
    },
    cta: {
      title: 'הפסיקו לחקור. התחילו לסגור עסקאות.',
      desc: 'קבלו רשימת חשבונות יעד מדורגת עם אותות כוונה בזמן אמת ומצגת PPTX בפחות מ-4 דקות.',
      button: 'בקש הדגמה ←',
    },
  },
}

// ─── Main App Component ──────────────────────────────────────────────────────

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark')
  const [lang, setLanguage] = useState<Language>('EN')

  // PPTX Customization State
  const [selectedPalette, setSelectedPalette] = useState<PresetPalette>(PALETTE_PRESETS[0])
  const [customPrimaryHex, setCustomPrimaryHex] = useState('#020617')
  const [customSecondaryHex, setCustomSecondaryHex] = useState('#22c55e')
  const [useCustomHex, setUseCustomHex] = useState(false)

  // Demo Deck Modal State
  const [showDeckModal, setShowDeckModal] = useState(false)

  // Side-by-Side Dashboard Theme Switcher State
  const [dashPreviewTheme, setDashPreviewTheme] = useState<ThemeMode>('dark')

  const txt = TEXTS[lang]
  const isRtl = lang === 'HE'
  const isDark = theme === 'dark'

  // Computed slide colors
  const activeSlideBg = useCustomHex ? customPrimaryHex : selectedPalette.primary
  const activeSlideAccent = useCustomHex ? customSecondaryHex : selectedPalette.secondary

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`min-h-screen font-sans transition-colors duration-200 ${
        isDark ? 'theme-dark bg-grid-dark' : 'theme-light bg-grid-light'
      }`}
    >
      {/* ─── 1. Navigation Bar ───────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors ${
          isDark
            ? 'bg-[#020617]/90 border-slate-800 text-slate-100'
            : 'bg-white/90 border-slate-200 text-slate-900 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo Wordmark with Accent */}
          <a href="#" className="flex items-center gap-2.5 focus-ring rounded-lg p-1">
            <div className="w-7 h-7 rounded-lg bg-[#22c55e] flex items-center justify-center text-slate-950 font-bold text-sm shadow-xs shadow-emerald-500/20 radar-signal">
              ◎
            </div>
            <span className="font-bold text-lg tracking-tight">
              <span className={isDark ? 'text-white' : 'text-slate-900'}>Prospect</span>
              <span className="text-[#22c55e] ml-0.5">Intelligence</span>
            </span>
          </a>

          {/* Nav Anchors */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium">
            <a
              href="#how-it-works"
              className={`hover:text-[#22c55e] transition-colors focus-ring rounded px-1 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {txt.nav.howItWorks}
            </a>
            <a
              href="#three-engines"
              className={`hover:text-[#22c55e] transition-colors focus-ring rounded px-1 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {txt.nav.prospects} / {txt.nav.sponsors} / {txt.nav.partners}
            </a>
            <a
              href="#pptx-customizer"
              className={`hover:text-[#22c55e] transition-colors focus-ring rounded px-1 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {txt.nav.customPptx}
            </a>
            <a
              href="#features"
              className={`hover:text-[#22c55e] transition-colors focus-ring rounded px-1 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {txt.nav.pricing}
            </a>
          </nav>

          {/* Header Controls: Theme Toggle, Language Switcher, Demo CTA */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle (Sun / Moon) */}
            <div className="relative group">
              <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} theme`}
                className={`p-2 rounded-lg border text-xs font-mono font-semibold flex items-center gap-1.5 transition-all focus-ring cursor-pointer ${
                  isDark
                    ? 'bg-slate-900 border-slate-700 text-slate-200 hover:border-emerald-500'
                    : 'bg-slate-100 border-slate-300 text-slate-800 hover:border-emerald-600'
                }`}
              >
                <span>{isDark ? '🌙' : '☀️'}</span>
                <span className="hidden sm:inline">{isDark ? 'Dark' : 'Light'}</span>
              </button>
              {/* Tooltip for accessibility */}
              <div className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 hidden group-hover:block bg-slate-900 text-white text-[10px] font-mono px-2 py-1 rounded shadow-md whitespace-nowrap z-10 border border-slate-700">
                Toggle {isDark ? 'Light' : 'Dark'} Theme
              </div>
            </div>

            {/* Language Switcher (EN / RU / HE) */}
            <div className="relative group">
              <div
                className={`flex items-center p-1 rounded-lg border text-xs ${
                  isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
                }`}
              >
                {(['EN', 'RU', 'HE'] as Language[]).map(l => (
                  <button
                    key={l}
                    onClick={() => setLanguage(l)}
                    className={`px-2 py-1 text-[11px] font-mono font-bold rounded-md transition-all focus-ring cursor-pointer ${
                      lang === l
                        ? 'bg-[#22c55e] text-slate-950 font-extrabold shadow-xs'
                        : isDark
                        ? 'text-slate-400 hover:text-white'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <div className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 hidden group-hover:block bg-slate-900 text-white text-[10px] font-mono px-2 py-1 rounded shadow-md whitespace-nowrap z-10 border border-slate-700">
                Language (EN/RU/HE RTL)
              </div>
            </div>

            {/* Primary CTA */}
            <a
              href="#cta"
              className="px-4 py-2 rounded-lg bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 font-bold text-xs transition-all shadow-sm focus-ring cursor-pointer"
            >
              {txt.nav.demo}
            </a>
          </div>
        </div>
      </header>

      {/* ─── 2. Hero Section ─────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 lg:pt-36 lg:pb-28 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[#22c55e] font-mono text-xs font-semibold w-fit">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
              {txt.hero.tagline}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
              {txt.hero.headline}
            </h1>

            <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {txt.hero.subheadline}
            </p>

            {/* One-Sentence Mechanism Callout */}
            <div
              className={`p-4 rounded-xl border text-xs sm:text-sm font-mono leading-relaxed ${
                isDark
                  ? 'bg-slate-900/80 border-slate-800 text-emerald-400'
                  : 'bg-emerald-50/80 border-emerald-200 text-slate-800'
              }`}
            >
              <strong className="text-[#22c55e]">Mechanism:</strong> {txt.hero.mechanism}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#cta"
                className="px-6 py-3.5 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 font-bold text-sm transition-all shadow-md focus-ring flex items-center gap-2 cursor-pointer"
              >
                {txt.hero.ctaPrimary}
              </a>
              <button
                onClick={() => setShowDeckModal(true)}
                className={`px-6 py-3.5 rounded-xl border font-semibold text-sm transition-all focus-ring cursor-pointer ${
                  isDark
                    ? 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800'
                    : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50'
                }`}
              >
                📊 {txt.hero.ctaSecondary}
              </button>
            </div>
          </div>

          {/* Hero Right Visual: Mocked Signal Card */}
          <div className="lg:col-span-5">
            <div
              className={`rounded-2xl border p-6 shadow-2xl relative overflow-hidden transition-all ${
                isDark
                  ? 'bg-slate-900 border-slate-800 shadow-emerald-950/20'
                  : 'bg-white border-slate-200 shadow-slate-200'
              }`}
            >
              {/* Radar Ping Pulse header */}
              <div className="flex items-center justify-between border-b pb-4 mb-4 border-slate-800/40">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] radar-signal" />
                  <span className="font-mono text-xs font-bold text-[#22c55e] tracking-wider">
                    {txt.hero.liveSignalLabel}
                  </span>
                </div>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-[#22c55e] font-bold border border-emerald-500/30">
                  {txt.hero.signalBadge}
                </span>
              </div>

              {/* Account Brief Details */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">Acme Enterprise Corp</h3>
                      <p className="font-mono text-xs text-slate-400">acme-corp.com · FinTech / SaaS</p>
                    </div>
                    <span className="text-xl">🇺🇸</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    CRAWLED INTENT SIGNALS
                  </span>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    <span className="px-2.5 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/20 font-semibold">
                      🔥 Series B · $42M Raised (12m ago)
                    </span>
                    <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
                      ⚡ Hiring 12 SDRs & VP Sales
                    </span>
                    <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-[#22c55e] border border-emerald-500/20 font-semibold">
                      🎯 Competitor Stack Churn Risk
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/40 text-xs flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">👤 Key Decision Maker:</span>
                    <span className="font-bold text-[#22c55e]">Sarah Chen (VP Sales)</span>
                  </div>
                  <button
                    onClick={() => setShowDeckModal(true)}
                    className="font-mono text-[11px] text-[#22c55e] hover:underline font-bold cursor-pointer"
                  >
                    1-Click PPTX →
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 3. How It Works (Exactly 3 steps, icon-led) ────────────────────── */}
      <section id="how-it-works" className="py-20 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold">{txt.howItWorks.title}</h2>
            <p className={`text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {txt.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1: Crawl */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/30 flex items-center justify-center font-bold text-xl mb-4">
                🕷️
              </div>
              <h3 className="font-bold text-lg mb-2">{txt.howItWorks.step1Title}</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {txt.howItWorks.step1Desc}
              </p>
            </div>

            {/* Step 2: Score */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-[#22c55e] border border-emerald-500/30 flex items-center justify-center font-bold text-xl mb-4">
                🎯
              </div>
              <h3 className="font-bold text-lg mb-2">{txt.howItWorks.step2Title}</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {txt.howItWorks.step2Desc}
              </p>
            </div>

            {/* Step 3: Brief */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold text-xl mb-4">
                📊
              </div>
              <h3 className="font-bold text-lg mb-2">{txt.howItWorks.step3Title}</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {txt.howItWorks.step3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. Three-Engine Showcase ────────────────────────────────────────── */}
      <section id="three-engines" className="py-20 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold text-[#22c55e] uppercase tracking-widest">
              3 INTENTS · 1 ENGINE
            </span>
            <h2 className="text-3xl font-extrabold mt-2">{txt.engines.title}</h2>
            <p className={`text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {txt.engines.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Prospects Card */}
            <div
              className={`p-8 rounded-2xl border flex flex-col justify-between ${
                isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div>
                <div className="inline-block px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 font-mono text-xs font-bold mb-4">
                  PROSPECTS
                </div>
                <h3 className="font-bold text-xl mb-2">Who would buy from you</h3>
                <p className={`text-xs leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Surface target organizations displaying active buying signals: headcount growth, tech stack churn, new budget owners, or compliance pain.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 font-mono text-xs text-indigo-300">
                Example Signal: "Company expanded sales team +45% in Q3"
              </div>
            </div>

            {/* Sponsors Card */}
            <div
              className={`p-8 rounded-2xl border flex flex-col justify-between ${
                isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div>
                <div className="inline-block px-2.5 py-1 rounded bg-emerald-500/10 text-[#22c55e] font-mono text-xs font-bold mb-4">
                  SPONSORS
                </div>
                <h3 className="font-bold text-xl mb-2">Who would fund or back you</h3>
                <p className={`text-xs leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Identify corporate innovation grants, event sponsorships, co-branding funds, and strategic backing matched to your profile.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 font-mono text-xs text-emerald-400">
                Example Signal: "Corporate innovation fund open for AI startups"
              </div>
            </div>

            {/* Partners Card */}
            <div
              className={`p-8 rounded-2xl border flex flex-col justify-between ${
                isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div>
                <div className="inline-block px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 font-mono text-xs font-bold mb-4">
                  PARTNERS
                </div>
                <h3 className="font-bold text-xl mb-2">Who would go-to-market with you</h3>
                <p className={`text-xs leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Find channel resellers, system integrators, and JV candidates by mapping complementary product portfolios and partnership intent.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 font-mono text-xs text-amber-300">
                Example Signal: "Press release: seeking EMEA integration partners"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. Feature Grid (6 concrete cards) ──────────────────────────────── */}
      <section id="features" className="py-20 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold">{txt.features.title}</h2>
            <p className={`text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {txt.features.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🎯',
                title: 'AI Fit Scoring (High/Med/Low)',
                desc: 'Calculates fit score (0-100) per organization with step-by-step reasoning you can interrogate — no blind black-box outputs.',
              },
              {
                icon: '⚡',
                title: 'Intent Signal Detection',
                desc: 'Tags signals by category and urgency (Hot, Warm, Cold) so reps know exactly which account to prioritize today.',
              },
              {
                icon: '👤',
                title: 'Contact & Language Intelligence',
                desc: 'Extracts decision maker names, roles, LinkedIn links, best-effort emails, and preferred outreach language (EN / RU / HE).',
              },
              {
                icon: '🎨',
                title: 'Customizable PPTX Deck Export',
                desc: '1-Click branded deck per record. Choose from 8 palette presets or input free-form brand hex codes for full match.',
              },
              {
                icon: '📊',
                title: 'Pipeline & AI Usage Admin',
                desc: 'Track fit-score distribution, pipeline stages (New → Won), ML data consent settings, and team API usage limits.',
              },
              {
                icon: '💬',
                title: 'Report Chat & Persistent Notes',
                desc: 'Ask follow-up questions directly on generated briefs. Notes and answers persist and feed the next automated re-crawl.',
              },
            ].map((f, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border transition-all ${
                  isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-base mb-2">{f.title}</h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. Dedicated PPTX Customizer Callout ───────────────────────────── */}
      <section id="pptx-customizer" className="py-20 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold text-[#22c55e] uppercase tracking-widest">
              CONCRETE DIFFERENTIATOR
            </span>
            <h2 className="text-3xl font-extrabold mt-2">{txt.pptxSection.title}</h2>
            <p className={`text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {txt.pptxSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Customizer Controls Left */}
            <div className="lg:col-span-6 space-y-6">
              {/* Presets Swatch Grid */}
              <div>
                <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                  {txt.pptxSection.presetLabel}
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {PALETTE_PRESETS.map(p => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setSelectedPalette(p)
                        setUseCustomHex(false)
                      }}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer focus-ring ${
                        !useCustomHex && selectedPalette.id === p.id
                          ? 'border-[#22c55e] ring-2 ring-[#22c55e]/40 bg-[#22c55e]/10'
                          : isDark
                          ? 'bg-slate-900 border-slate-800 hover:border-slate-700'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: p.primary }} />
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: p.secondary }} />
                      </div>
                      <span className="font-semibold block truncate text-[11px]">{p.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Hex Pickers */}
              <div
                className={`p-4 rounded-xl border space-y-3 ${
                  isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-400 uppercase">
                    {txt.pptxSection.customPickersLabel}
                  </span>
                  <label className="flex items-center gap-2 text-xs cursor-pointer">
                    <input
                      type="checkbox"
                      checked={useCustomHex}
                      onChange={e => setUseCustomHex(e.target.checked)}
                      className="accent-[#22c55e] cursor-pointer"
                    />
                    <span>Use custom hex</span>
                  </label>
                </div>

                {useCustomHex && (
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="text-[11px] font-mono text-slate-400 block mb-1">Primary Color (Slide BG)</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={customPrimaryHex}
                          onChange={e => setCustomPrimaryHex(e.target.value)}
                          className="w-8 h-8 rounded border border-slate-700 cursor-pointer"
                        />
                        <input
                          type="text"
                          value={customPrimaryHex}
                          onChange={e => setCustomPrimaryHex(e.target.value)}
                          className="font-mono text-xs px-2 py-1 rounded border border-slate-700 bg-slate-950 text-white w-full"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] font-mono text-slate-400 block mb-1">Secondary Accent</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={customSecondaryHex}
                          onChange={e => setCustomSecondaryHex(e.target.value)}
                          className="w-8 h-8 rounded border border-slate-700 cursor-pointer"
                        />
                        <input
                          type="text"
                          value={customSecondaryHex}
                          onChange={e => setCustomSecondaryHex(e.target.value)}
                          className="font-mono text-xs px-2 py-1 rounded border border-slate-700 bg-slate-950 text-white w-full"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Slide Preview Right */}
            <div className="lg:col-span-6">
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider block text-center">
                  {txt.pptxSection.slideTitle}
                </span>

                {/* Simulated PPTX Slide Frame */}
                <div
                  className="rounded-2xl p-6 sm:p-8 shadow-2xl transition-all duration-300 border border-slate-700/50 aspect-4/3 flex flex-col justify-between"
                  style={{ backgroundColor: activeSlideBg, color: '#f8fafc' }}
                >
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="font-mono text-xs opacity-70">SLIDE 1 OF 5 · ACCOUNT BRIEF</span>
                    <span
                      className="font-mono text-xs font-bold px-2.5 py-0.5 rounded text-slate-950"
                      style={{ backgroundColor: activeSlideAccent }}
                    >
                      FIT SCORE 94/100
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-extrabold text-2xl tracking-tight">Acme Enterprise Corp</h3>
                    <p className="font-mono text-xs opacity-80">
                      Key Signals: Series B ($42M) · Hiring 12 SDRs · Competitor Churn
                    </p>
                    <div
                      className="p-3 rounded-lg text-xs font-mono border border-white/10"
                      style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                    >
                      <span style={{ color: activeSlideAccent }} className="font-bold">
                        Outreach Hook:
                      </span>{' '}
                      "Noticed your Series B expansion. ProspectIntelligence automates discovery research..."
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[11px] font-mono opacity-60 border-t border-white/10 pt-3">
                    <span>Generated by ProspectIntelligence</span>
                    <span>1-Click PPTX Export</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 7. Product Dashboard Screenshot Showcase ──────────────────────── */}
      <section className="py-20 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold">{txt.dashboard.title}</h2>
            <p className={`text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {txt.dashboard.subtitle}
            </p>

            {/* Dashboard Theme Mode Preview Switcher */}
            <div className="inline-flex items-center gap-2 mt-6 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
              <span className="text-slate-400 font-mono text-[11px] px-2">Dashboard Preview:</span>
              <button
                onClick={() => setDashPreviewTheme('dark')}
                className={`px-3 py-1 rounded-lg font-mono font-bold cursor-pointer ${
                  dashPreviewTheme === 'dark' ? 'bg-[#22c55e] text-slate-950' : 'text-slate-400'
                }`}
              >
                Dark Theme
              </button>
              <button
                onClick={() => setDashPreviewTheme('light')}
                className={`px-3 py-1 rounded-lg font-mono font-bold cursor-pointer ${
                  dashPreviewTheme === 'light' ? 'bg-[#22c55e] text-slate-950' : 'text-slate-400'
                }`}
              >
                Light Theme
              </button>
            </div>
          </div>

          {/* Browser Chrome Frame */}
          <div
            className={`rounded-2xl border shadow-2xl overflow-hidden transition-colors ${
              dashPreviewTheme === 'dark' ? 'bg-[#020617] border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            {/* Browser Header Bar */}
            <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-slate-500">app.prospectintel.ai/dashboard</span>
              </div>
              <span>SOC 2 ENCRYPTED SESSION</span>
            </div>

            {/* Mock Dashboard Body */}
            <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Stat Card 1 */}
              <div
                className={`lg:col-span-4 p-5 rounded-xl border ${
                  dashPreviewTheme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              >
                <span className="font-mono text-xs font-bold text-slate-400 uppercase">{txt.dashboard.fitDist}</span>
                <div className="mt-3 space-y-2">
                  <div>
                    <div className="flex justify-between text-xs font-mono font-bold mb-1">
                      <span className="text-[#22c55e]">HIGH FIT (75-100)</span>
                      <span>42% (128 orgs)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-[#22c55e] w-[42%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono font-bold mb-1">
                      <span className="text-amber-400">MEDIUM FIT (50-74)</span>
                      <span>38% (114 orgs)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-amber-400 w-[38%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div
                className={`lg:col-span-4 p-5 rounded-xl border ${
                  dashPreviewTheme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              >
                <span className="font-mono text-xs font-bold text-slate-400 uppercase">{txt.dashboard.pipelineStage}</span>
                <div className="mt-3 grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    <span className="text-slate-400 block text-[10px]">NEW DISCOVERIES</span>
                    <span className="text-xl font-bold text-[#22c55e]">84</span>
                  </div>
                  <div className="p-2.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                    <span className="text-slate-400 block text-[10px]">QUALIFIED & BRIEFED</span>
                    <span className="text-xl font-bold text-indigo-400">56</span>
                  </div>
                </div>
              </div>

              {/* Stat Card 3 */}
              <div
                className={`lg:col-span-4 p-5 rounded-xl border ${
                  dashPreviewTheme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              >
                <span className="font-mono text-xs font-bold text-slate-400 uppercase">{txt.dashboard.breakdown}</span>
                <div className="mt-3 space-y-1.5 text-xs font-mono">
                  <div className="flex justify-between items-center">
                    <span>🔥 Funding & Round B</span>
                    <span className="font-bold text-[#22c55e]">45 signals</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>⚡ Hiring SDRs/Execs</span>
                    <span className="font-bold text-[#22c55e]">38 signals</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>⚠️ Tech Churn / Gap</span>
                    <span className="font-bold text-amber-400">22 signals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. Seller Profile & AI Governance Callout ───────────────────────── */}
      <section className="py-20 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold">{txt.governance.title}</h2>
            <p className={`text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {txt.governance.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className={`p-8 rounded-2xl border ${
                isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-[#22c55e] flex items-center justify-center font-bold text-lg mb-4">
                📄
              </div>
              <h3 className="font-bold text-xl mb-2">{txt.governance.profileTitle}</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {txt.governance.profileDesc}
              </p>
            </div>

            <div
              className={`p-8 rounded-2xl border ${
                isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-lg mb-4">
                🛡️
              </div>
              <h3 className="font-bold text-xl mb-2">{txt.governance.adminTitle}</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {txt.governance.adminDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. Full-Width CTA Band ──────────────────────────────────────────── */}
      <section id="cta" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#020617] border border-slate-800 rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#22c55e]/10 rounded-full blur-3xl pointer-events-none" />
            
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 tracking-tight">
              {txt.cta.title}
            </h2>
            <p className="text-slate-300 text-base max-w-xl mx-auto mb-8 leading-relaxed">
              {txt.cta.desc}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="px-8 py-4 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 focus-ring cursor-pointer"
              >
                {txt.cta.button}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 10. Footer ──────────────────────────────────────────────────────── */}
      <footer className={`py-12 border-t text-xs ${isDark ? 'bg-[#020617] border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-base tracking-tight">
              <span>Prospect</span>
              <span className="text-[#22c55e]">Intelligence</span>
            </span>
            <span>— AI Sales Discovery & Briefing</span>
          </div>

          <div className="flex items-center gap-6 font-mono">
            <span>Language: EN / RU / HE (RTL)</span>
            <span>·</span>
            <span>WCAG AA Contrast Compliant</span>
            <span>·</span>
            <span>SOC 2 Type II</span>
          </div>

          <div className="font-mono text-slate-500">
            © 2026 Prospect Intelligence. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ─── Sample PPTX Briefing Deck Modal ─────────────────────────────────── */}
      {showDeckModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#020617] border border-slate-800 rounded-3xl max-w-2xl w-full p-8 shadow-2xl text-white relative">
            <button
              onClick={() => setShowDeckModal(false)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-900 text-slate-400 hover:text-white flex items-center justify-center font-bold text-sm cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#22c55e]/10 text-[#22c55e] flex items-center justify-center font-bold text-lg">
                📊
              </div>
              <div>
                <h3 className="font-bold text-xl">Branded PPTX Brief Deck Generator</h3>
                <p className="font-mono text-xs text-slate-400">1-Click Executive Pitch Deck Output</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 font-mono text-xs space-y-4 mb-6">
              <div className="flex justify-between items-center text-slate-400 border-b border-slate-800 pb-2">
                <span>SLIDE 1: EXECUTIVE BRIEFING</span>
                <span className="text-[#22c55e] font-bold">FIT SCORE: 94/100</span>
              </div>
              <div><strong className="text-emerald-400">TARGET ACCOUNT:</strong> Acme Enterprise Corp (acme-corp.com)</div>
              <div>
                <strong className="text-emerald-400">INTENT SIGNALS:</strong>
                <ul className="list-disc pl-5 text-slate-300 mt-1 space-y-1">
                  <li>Series B ($42M) Raised 12 minutes ago</li>
                  <li>Hiring 12 Sales Development Representatives</li>
                  <li>Public churn signal detected from competitor stack</li>
                </ul>
              </div>
              <div>
                <strong className="text-emerald-400">PREFERRED LANGUAGE HOOK ({lang}):</strong>
                <p className="text-amber-300 italic mt-1 bg-slate-950 p-3 rounded border border-slate-800">
                  {lang === 'HE'
                    ? '"ראינו את גיוס ה-Series B והרחבת צוות המכירות. הפלטפורמה שלנו מייעלת את מחקר הלידים מ-3 שעות ל-4 דקות."'
                    : lang === 'RU'
                    ? '"Мы заметили ваш Раунд B и расширение отдела продаж. Наша платформа сокращает время исследования аккаунтов с 3 часов до 4 минут."'
                    : '"Noticed your Series B expansion and hiring push for 12 SDRs. ProspectIntelligence automates discovery research..."'
                  }
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-400">Exports 5 auto-formatted executive slides.</span>
              <button
                onClick={() => {
                  alert('Sample .PPTX deck file generated & downloaded!')
                  setShowDeckModal(false)
                }}
                className="px-6 py-2.5 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                Download .PPTX File
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
