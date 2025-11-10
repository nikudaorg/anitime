import { FunctionComponent } from 'react';
import styles from './index.module.css';
import { Locale } from '@/i18n';
import { X } from 'lucide-react';
import Deco from '@/routes/Information/Deco';

interface LanguageSwitchProps {
  locale: Locale;
  url: string;
  onClose: () => void;
}

const LanguageSwitch: FunctionComponent<LanguageSwitchProps> = ({ locale: loc, url, onClose }) => {
  return (
    <div className={styles.root}>
      <X className={styles.closeIcon} onClick={onClose} />
      {[
        ...(loc === 'en' ? [] : ['Choose the language']),
        ...(loc === 'ru' ? [] : ['Выбери язык']),
        ...(loc === 'he' ? [] : ['בחר את השפה']),
      ].join(' / ')}
      {loc === 'ru' ? null : <a href={`/ru/${url}`}>Русский</a>}
      {loc === 'en' ? null : <a href={`/en/${url}`}>English</a>}
      {loc === 'he' ? null : <a href={`/he/${url}`}>עברית</a>}
      <Deco l m s t21 x="4%" y="6%" rot="12deg" width="8%" />
      <Deco l m s t22 x="12%" y="88%" rot="340deg" width="9%" flip />
      <Deco l m s t23 x="92%" y="10%" rot="200deg" width="7.5%" />
      <Deco l m s t24 x="86%" y="82%" rot="110deg" width="8%" />
      <Deco l m s t25 x="50%" y="74%" rot="260deg" width="8.5%" flip />
      <Deco l m s t22 x="72%" y="6%" rot="75deg" width="7.8%" />
      <Deco l m s t21 x="6%" y="46%" rot="300deg" width="8%" flip />
      <Deco l m s t23 x="98%" y="50%" rot="185deg" width="8%" />
      <Deco l m s t24 x="28%" y="96%" rot="20deg" width="9%" />
      <Deco l m s t25 x="0%" y="30%" rot="330deg" width="7%" flip />
      <Deco l m s t21 x="40%" y="0%" rot="140deg" width="8%" />
      <Deco l m s t22 x="100%" y="18%" rot="210deg" width="8%" flip />
      <Deco l m s t23 x="82%" y="38%" rot="95deg" width="7.5%" />
      <Deco l m s t24 x="20%" y="3%" rot="280deg" width="8%" />
      <Deco l m s t25 x="14%" y="70%" rot="340deg" width="8.2%" flip />
      <Deco l m s t22 x="56%" y="100%" rot="120deg" width="8%" />
      <Deco l m s t21 x="34%" y="86%" rot="40deg" width="7.6%" />
      <Deco l m s t23 x="76%" y="58%" rot="160deg" width="8%" flip />
      <Deco l m s t24 x="2%" y="62%" rot="250deg" width="8%" />
      <Deco l m s t25 x="28%" y="50%" rot="320deg" width="7.9%" flip />
      <Deco l m s t21 x="62%" y="56%" rot="300deg" width="8%" flip />
      <Deco l m s t23 x="66%" y="78%" rot="95deg" width="7.5%" />
      <Deco l m s t25 x="55%" y="3%" rot="260deg" width="8.5%" flip />
    </div>
  );
};

export default LanguageSwitch;
