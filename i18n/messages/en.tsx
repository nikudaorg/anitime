import type { Messages } from '../Messages';

export default {
  seo: {
    title: 'Anitime',
    description: 'todo'
  },
  buyTicketsLink: 'https://www.anumuseum.org.il/he/events/animation-films/',
  emailCopied: 'The email is copied',
  aboutFestival: {
    title: 'ABOUT FESTIVAL',
    content: (
      <p>
        <strong>ANITIME is a new animation festival in Tel Aviv,</strong>
        <br />
        created by a team of young volunteers united by the idea of building a
        space where animation becomes a bridge between cultures and people.
        <br />
        <br />
        The festival will take place at the{' '}
        <strong>
          ANU Museum of the Jewish People on November 20th at 17:00
        </strong>
      </p>
    )
  },
  inProgram: {
    title: 'PROGRAM INCLUDES',
    content: (
      <ul>
        <li>
          <strong>A competition of Israeli and international films</strong>{' '}
          (from student projects to studio works)
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
          <strong>A market</strong> prepared by participants of{' '}
          <strong>The Walks</strong> project.
        </li>
      </ul>
    )
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
    contacts: 'CONTACTS'
  },
  banner: {
    time: '20 November 17:00',
    address: 'ANU MUSEUM OF THE JEWISH PEOPLE'
  },
  movies: {
    seo: {
      title: 'Anitime - Movies',
      description: 'todo'
    }
  }
} satisfies Messages;
