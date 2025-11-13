import AboutFestivalDecos from '../decorations/aboutFestival';
import ProgramShortDecos from '../decorations/program/Short';

export default {
  seo: {
    title: 'Anitime – A New Animation Festival in Tel Aviv',
    description:
      'ANITIME is a new animation festival in Tel Aviv created by a team of young volunteers united by the idea of building a space where animation becomes a bridge between cultures and people.',
  },
  buyTicketsLink: 'https://www.anumuseum.org.il/he/events/animation-films/',
  emailCopied: 'The email is copied',
  aboutFestival: {
    title: 'ABOUT FESTIVAL',
    content: (
      <>
        <p>
          <strong>ANITIME is a new animation festival in Tel Aviv,</strong>
          <br />
          created by a team of young volunteers united by the idea of building a space where
          animation becomes a bridge between cultures and people.
          <br />
          <br />
          The festival will take place at the{' '}
          <strong>ANU Museum of the Jewish People on November 20th at 17:00</strong>
        </p>
        <AboutFestivalDecos />
      </>
    ),
  },
  inProgram: {
    title: 'PROGRAM INCLUDES',
    content: (
      <>
        <ul>
          <li>
            <strong>A competition of Israeli and international films</strong> (from student projects
            to studio works)
          </li>
          <li>
            <strong>Meetings</strong> with directors
          </li>
          <li>
            <strong>Workshops</strong> for children and adults
          </li>
          <li>
            <strong>Lectures</strong> by renowned animators
          </li>
          <li>
            <strong>A market</strong> prepared by participants of <strong>The Walks</strong>{' '}
            project.
          </li>
        </ul>
        <ProgramShortDecos />
      </>
    ),
  },
  ourSponsorsTitle: 'OUR SPONSORS',
  contactsTitle: 'CONTACTS',
  menu: {
    submitYourFilm: 'SUBMIT YOUR FILM',
    buyTickets: 'BUY TICKETS',
    films: 'FILMS',
    aboutFestival: 'ABOUT FESTIVAL',
    marketParticipants: 'MARKET PARTICIPANTS',
    team: 'TEAM',
    ourSponsors: 'OUR SPONSORS',
    contacts: 'CONTACTS',
    schedule: 'SCHEDULE',
  },
  banner: {
    time: '20 November 17:00',
    address: 'ANU MUSEUM OF THE JEWISH PEOPLE',
  },
  movies: {
    seo: {
      title: 'Anitime – Movies',
      description:
        'ANITIME is a new animation festival in Tel Aviv created by a team of young volunteers united by the idea of building a space where animation becomes a bridge between cultures and people.',
    },
  },
} as const;
