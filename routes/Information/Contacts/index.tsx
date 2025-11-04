/* eslint-disable @next/next/no-img-element */
import styles from './index.module.css';
import instagramIcon from '@/assets/icons/instagram.svg';
import facebookIcon from '@/assets/icons/facebook.svg';
import telegramIcon from '@/assets/icons/telegram.svg';

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.icons}>
        <img src={facebookIcon.src} alt="Facebook icon" />
        <div className={styles.instagram}>
          <img src={instagramIcon.src} alt="Instagram icon" />
        </div>
        <img src={telegramIcon.src} alt="Telegram icon" />
      </div>
      <div className={styles.email}>ani.open.fest@gmail.com</div>
    </div>
  );
};

export default Contacts;
