import { FunctionComponent } from 'react';
import styles from './index.module.css';
import { Locale } from '@/i18n';
import { X } from 'lucide-react';
import { decos } from '@/routes/Information/Deco';

interface LanguageSwitchProps {
  locale: Locale;
  url: string;
  onClose: () => void;
}

const Deco = decos['ltr'];

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
      {/*
            t21: y_{new} = y + width / 400 * 381 / 0.9525
            t22: y_{new} = y + width / 400 * 386 / 0.9525
            t23: y_{new} = y + width / 408 * 500 / 0.9525
            t24: y_{new} = y + width / 404 * 600 / 0.9525
            t25: y_{new} = y + width / 400 * 480 / 0.9525
           */}
      <Deco l m s t21 x="8%" y="14.00%" rot="12deg" width="8%" />
      <Deco l m s t22 x="16.5%" y="97.12%" rot="340deg" width="9%" flip />
      <Deco l m s t23 x="95.75%" y="19.65%" rot="200deg" width="7.5%" />
      <Deco l m s t24 x="90%" y="94.47%" rot="110deg" width="8%" />
      <Deco l m s t25 x="54.25%" y="84.71%" rot="260deg" width="8.5%" flip />
      <Deco l m s t22 x="75.9%" y="13.90%" rot="75deg" width="7.8%" />
      <Deco l m s t21 x="10%" y="54.00%" rot="300deg" width="8%" flip />
      <Deco l m s t23 x="102%" y="60.29%" rot="185deg" width="8%" />
      <Deco l m s t24 x="32.5%" y="110.03%" rot="20deg" width="9%" />
      <Deco l m s t25 x="3.5%" y="38.82%" rot="330deg" width="7%" flip />
      <Deco l m s t21 x="44%" y="8.00%" rot="140deg" width="8%" />
      <Deco l m s t22 x="104%" y="26.10%" rot="210deg" width="8%" flip />
      <Deco l m s t23 x="85.75%" y="47.65%" rot="95deg" width="7.5%" />
      <Deco l m s t24 x="24%" y="15.47%" rot="280deg" width="8%" />
      <Deco l m s t25 x="18.1%" y="80.33%" rot="340deg" width="8.2%" flip />
      <Deco l m s t22 x="60%" y="108.10%" rot="120deg" width="8%" />
      <Deco l m s t21 x="37.8%" y="93.60%" rot="40deg" width="7.6%" />
      <Deco l m s t23 x="80%" y="68.29%" rot="160deg" width="8%" flip />
      <Deco l m s t24 x="6%" y="74.47%" rot="250deg" width="8%" />
      <Deco l m s t25 x="31.95%" y="59.95%" rot="320deg" width="7.9%" flip />
      <Deco l m s t21 x="66%" y="64.00%" rot="300deg" width="8%" flip />
      <Deco l m s t23 x="69.75%" y="87.65%" rot="95deg" width="7.5%" />
      <Deco l m s t25 x="59.25%" y="13.71%" rot="260deg" width="8.5%" flip />
    </div>
  );
};

export default LanguageSwitch;
