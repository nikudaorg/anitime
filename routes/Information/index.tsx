import Contacts from './Contacts';
import { decos } from './Deco';
import Sponsors from './Sponsors';
import styles from './index.module.css';
import { getMessages, Locale } from '@/i18n/index';

// import { ReactNode } from 'react';
// const Group = (props: { children: ReactNode } & { [k: string]: any }) => (
//   <>{props.children}</>
// );

const Information = ({ locale }: { locale: Locale }) => {
  const messages = getMessages(locale);
  const Deco = decos[locale === 'he' ? 'rtl' : 'ltr'];
  return (
    <div className={styles.information}>
      <section>
        <div className={styles.center} id="anitimeAbout">
          {/*
            t21: y+width/400*381/1.96
            t22: y+width/400*386/1.96
            t23: y+width/408*500/1.96
            t24: y+width/404*600/1.96
            t25: y+width/400*480/1.96
           */}
          <Deco l t22 x="-21%" y="-6.25%" rot="90deg" width="18%" />
          <Deco l t21 x="35%" y="6.72%" rot="270deg" width="20%" flip />
          <Deco l t25 x="10.5%" y="-1.53%" rot="330deg" width="21%" flip />
          <Deco l t23 x="60.5%" y="13.125%" rot="170deg" width="21%" flip />
          <Deco l t24 x="97.5%" y="8.94%" rot="90deg" width="25%" />
          <Deco l t22 x="76%" y="25.8%" rot="90deg" width="12%" />
          <Deco l t21 x="126%" y="30.7%" rot="180deg" width="22%" flip />
          <Deco l t24 x="118.5%" y="60.5%" rot="180deg" width="27%" flip />
          <Deco l t23 x="-19%" y="25%" rot="80deg" width="32%" flip />
          <Deco l t22 x="-19%" y="55.8%" rot="90deg" width="12%" />
          <Deco l t24 x="-11.5%" y="90.5%" rot="90deg" width="27%" />
          <Deco l t23 x="107.5%" y="115%" rot="90deg" width="25%" flip />
          <Deco l t23 x="-14.5%" y="150%" rot="170deg" width="21%" flip />
          <Deco l t22 x="116%" y="146%" rot="90deg" width="12%" />
          <Deco l t21 x="95%" y="185%" rot="180deg" width="30%" flip />
          <Deco l t22 x="115%" y="203%" rot="90deg" width="20%" />
          <Deco l t25 x="-17%" y="196%" rot="200deg" width="26%" flip />
          <Deco l t24 x="82.5%" y="232%" rot="250deg" width="35%" />
          <Deco l t24 x="-17.5%" y="239%" rot="160deg" width="25%" />
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
          {/*
            t21: width/400*381/0.929
            t22: width/400*386/0.929
            t23: width/408*500/0.929
            t24: width/404*600/0.929
            t25: width/400*480/0.929
           */}
          <Deco l t21 x="-10%" y="30.5%" rot="110deg" width="20%" flip />
          <Deco l t22 x="25%" y="20.4%" rot="90deg" width="10%" />
          <Deco l t25 x="55.5%" y="57.1%" rot="60deg" width="21%" />
          <Deco l t22 x="71.5%" y="23.5%" rot="90deg" width="13%" />
          <Deco l t24 x="102.5%" y="50%" rot="90deg" width="25%" />
          <h2>{messages.contactsTitle}</h2>
          <Contacts locale={locale} />
        </div>
      </section>
    </div>
  );
};

export default Information;
