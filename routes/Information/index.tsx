import Contacts from './Contacts';
import Deco from "./Deco";
import Sponsors from "./Sponsors";
import styles from "./index.module.css";
import { getMessages, Locale } from "@/i18n/index";

// import { ReactNode } from 'react';
// const Group = (props: { children: ReactNode } & { [k: string]: any }) => (
//   <>{props.children}</>
// );

const Information = ({ locale }: { locale: Locale }) => {
  const messages = getMessages(locale);
  const loc = locale;
  return (
    <div className={styles.information}>
      <section>
        <div className={styles.center} id="anitimeAbout">
          <Deco l t21 x="25%" y="-3%" rot="270deg" width="20%" flip loc={loc} />
          <Deco l t25 x="0%" y="-15%" rot="330deg" width="21%" flip loc={loc} />
          <Deco l t23 x="50%" y="0%" rot="170deg" width="21%" flip loc={loc} />
          <Deco l t24 x="85%" y="-10%" rot="90deg" width="25%" loc={loc} />
          <Deco l t22 x="70%" y="20%" rot="90deg" width="12%" loc={loc} />
          <Deco l t21 x="115%" y="20%" rot="180deg" width="22%" flip loc={loc} />
          <Deco l t24 x="105%" y="40%" rot="180deg" width="27%" flip loc={loc} />
          <Deco l t23 x="-35%" y="5%" rot="80deg" width="32%" flip loc={loc} />
          <Deco l t22 x="-25%" y="50%" rot="90deg" width="12%" loc={loc} />
          <Deco l t24 x="-25%" y="70%" rot="90deg" width="27%" loc={loc} />
          <Deco l t23 x="95%" y="95%" rot="90deg" width="25%" flip loc={loc} />
          <Deco l t23 x="-25%" y="130%" rot="170deg" width="21%" flip loc={loc} />
          <Deco l t22 x="110%" y="140%" rot="90deg" width="12%" loc={loc} />
          <Deco l t21 x="80%" y="170%" rot="180deg" width="30%" flip loc={loc} />
          <Deco l t22 x="105%" y="193%" rot="90deg" width="20%" loc={loc} />
          <Deco l t25 x="-30%" y="180%" rot="200deg" width="26%" flip loc={loc} />
          <Deco l t24 x="65%" y="205%" rot="250deg" width="35%" loc={loc} />
          <Deco l t24 x="-30%" y="220%" rot="160deg" width="25%" loc={loc} />
          {/* <Deco l t22 x="80%" y="15%" rot="0deg" width="12%" flip loc={loc} /> */}
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
          <Deco l t21 x="-20%" y="10%" rot="110deg" width="20%" flip loc={loc} />
          <Deco l t22 x="20%" y="10%" rot="90deg" width="10%" loc={loc} />
          <Deco l t25 x="45%" y="30%" rot="60deg" width="21%" loc={loc} />
          <Deco l t22 x="65%" y="10%" rot="90deg" width="13%" loc={loc} />
          <Deco l t24 x="90%" y="10%" rot="90deg" width="25%" loc={loc} />
          <h2>{messages.contactsTitle}</h2>
          <Contacts locale={locale} />
        </div>
      </section>
    </div>
  );
};

export default Information;
