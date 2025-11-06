import { useTranslation } from 'react-i18next'

export default function LocaleButton() {
  const { i18n } = useTranslation()

  return (
    <div className="flex gap-2">
      <button
        className="px-3 py-1 bg-white/80 rounded hover:bg-white"
        onClick={() => i18n.changeLanguage('en')}
      >
        EN
      </button>
      <button
        className="px-3 py-1 bg-white/80 rounded hover:bg-white"
        onClick={() => i18n.changeLanguage('cs')}
      >
        CZ
      </button>
    </div>
  )
}
