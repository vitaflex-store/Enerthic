
import { useRouter } from 'next/router';

export default function LanguageSelector() {
  const router = useRouter();

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <select onChange={changeLanguage} defaultValue={router.locale} style={selectStyle}>
      <option value="de">Deutsch</option>
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
  );
}

const selectStyle = {
  padding: '5px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontFamily: 'Inter, sans-serif'
};
