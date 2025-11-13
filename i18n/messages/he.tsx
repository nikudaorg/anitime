import AboutFestivalDecos from '../decorations/aboutFestival';
import ProgramShortDecos from '../decorations/program/Short';

export default {
  seo: {
    title: 'Anitime',
    description: 'todo',
  },
  buyTicketsLink: 'https://www.anumuseum.org.il/he/events/animation-films/',
  emailCopied: 'האימייל הועתק',
  aboutFestival: {
    title: 'על הפסטיבל',
    content: (
      <>
        <p>
          <strong>ANITIME הוא פסטיבל אנימציה חדש בתל אביב,</strong>
          <br />
          שנוצר על ידי צוות צעיר של מתנדבים, מתוך רצון לבנות מרחב שבו האנימציה הופכת לגשר בין
          תרבויות ואנשים.
          <br />
          <br />
          נשמח לראותכם ב <strong>מוזיאון העם היהודי ANU ב-20 בנובמבר בשעה 17:00</strong>
        </p>
        <AboutFestivalDecos rtl />
      </>
    ),
  },
  inProgram: {
    title: 'בתכנית',
    content: (
      <>
        <ul>
          <li>תחרות סרטים ישראליים ובינלאומיים (מפרויקטים של סטודנטים ועד עבודות אולפן)</li>
          <li>מפגשים עם במאים</li>
          <li>סדנאות לילדים ולמבוגרים</li>
          <li>הרצאות של אנימטורים מובילים</li>
          <li>שוק שהוכן על ידי משתתפי פרויקט The Walks</li>
        </ul>
        <ProgramShortDecos rtl />
      </>
    ),
  },
  ourSponsorsTitle: 'השותפים שלנו',
  contactsTitle: 'יצירת קשר',
  menu: {
    submitYourFilm: 'שלחו את הסרט שלכם',
    buyTickets: 'רכישת כרטיסים',
    films: 'סרטים',
    aboutFestival: 'על הפסטיבל',
    marketParticipants: 'משתתפי השוק',
    team: 'הצוות',
    ourSponsors: 'השותפים שלנו',
    contacts: 'יצירת קשר',
    schedule: 'תוכנית',
  },
  banner: {
    time: '20 בנובמבר 17:00',
    address: 'מוזיאון העם היהודי ANU',
  },
  movies: {
    seo: {
      title: 'Anitime - סרטים',
      description: 'todo',
    },
  },
} as const;
