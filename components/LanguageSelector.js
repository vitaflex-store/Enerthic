import { useRouter } from 'next/router';

export default function LanguageSelector() {
  const router = useRouter();
  const { locale, locales, asPath } = router;

  const changeLanguage = (e) => {
    const newLocale = e.target.value;
    router.push(asPath, asPath, { locale: newLocale });
  };

  return (
    <select onChange={changeLanguage} value={locale} style={{ padding: '6px', borderRadius: '6px' }}>
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {loc === 'de' ? 'Deutsch' : loc === 'es' ? 'Español' : 'English'}
        </option>
      ))}
    </select>
  );
}