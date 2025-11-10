/* eslint-disable @next/next/no-img-element */
import styles from "./index.module.css";
import instagramIcon from './icons/instagram.svg';
import facebookIcon from './icons/facebook.svg';
import telegramIcon from './icons/telegram.svg';
import { getMessages, Locale } from "@/i18n";
import CopyText from "../CopyText";
import SoonLink from "../SoonLink";

const email = "ani.open.fest@gmail.com";

const Contacts = ({ locale }: { locale: Locale }) => {
  const messages = getMessages(locale);

  const instagramLink =
    locale === "ru"
      ? "https://www.instagram.com/vchemodanefest"
      : "https://www.instagram.com/anitime.fest";
  const facebookLink = locale === "ru" ? "https://www.facebook.com/vchemodanefest" : undefined;
  const telegramLink = locale === "ru" ? "https://t.me/chemodanfest" : undefined;
  return (
    <div className={styles.contacts}>
      <div className={styles.icons}>
        {locale === "ru" ? (
          <a href={facebookLink}>
            <img src={facebookIcon.src} alt="Instagram icon" />
          </a>
        ) : (
          <SoonLink soonMessage="Soon...">
            <img src={facebookIcon.src} alt="Instagram icon" />
          </SoonLink>
        )}
        <a href={instagramLink}>
          <div className={styles.instagram}>
            <img src={instagramIcon.src} alt="Instagram icon" />
          </div>
        </a>
        {locale === "ru" ? (
          <a href={telegramLink}>
            <img src={telegramIcon.src} alt="Telegram icon" />
          </a>
        ) : (
          <SoonLink soonMessage="Soon...">
            <img src={telegramIcon.src} alt="Telegram icon" />
          </SoonLink>
        )}
      </div>
      <div className={styles.email}>
        <CopyText copiedMessage={messages.emailCopied} text={email}>
          {email}
        </CopyText>
      </div>
    </div>
  );
};

export default Contacts;
