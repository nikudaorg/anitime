import Contacts from './Contacts';
import Sponsors from './Sponsors';
import styles from './index.module.css';
import { getMessages, Locale } from '@/i18n/index';

// import { ReactNode } from 'react';
// const Group = (props: { children: ReactNode } & { [k: string]: any }) => (
//   <>{props.children}</>
// );

const Information = ({ locale }: { locale: Locale }) => {
  const messages = getMessages(locale);
  return (
    <div className={styles.information}>
      <section>
        <div className={styles.center} id="anitimeAbout">
          <h2>{messages.aboutFestival.title}</h2>
          {messages.aboutFestival.content}
        </div>
      </section>
      <section>
        <div className={styles.center}>
          <h2>{messages.inProgram.title}</h2>
          {messages.inProgram.content}
        </div>
      </section>
      {/* <section>
        <div className={styles.center}>
          <h2>УЧАСТНИКИ МАРКЕТА</h2>
          <MarketGallery />
        </div>
      </section> */}
      <section className={styles.sponsors}>
        <div className={styles.center} id="anitimeSponsors">
          <h2>{messages.ourSponsorsTitle}</h2>
        </div>
        <Sponsors />
      </section>
      <section>
        <div className={styles.center} id="anitimeContacts">
          <h2>{messages.contactsTitle}</h2>
          <Contacts />
        </div>
      </section>
    </div>
  );
};

export default Information;
