import type { Messages } from '../Messages';

export default {
  seo: {
    title: 'Anitime',
    description: 'todo'
  },
  aboutFestival: {
    title: 'О ФЕСТИВАЛЕ',
    content: (
      <p>
        <strong>ANITIME — новый фестиваль анимации в Тель-Авиве,</strong>
        <br />
        Создан командой молодых волонтёров, как пространство, <br />
        где анимация становится мостом между культурами и людьми.
        <br />
        <br />
        Ждем вас в{' '}
        <strong>АНУ-музее еврейского народа 20 ноября в 17:00</strong>
      </p>
    )
  },
  inProgram: {
    title: 'В ПРОГРАММЕ',
    content: (
      <ul>
        <li>
          конкурс израильских и международных фильмов (от студенческих проектов
          до студийных работ)
        </li>
        <li>встречи с режиссёрами</li>
        <li>мастер-классы для детей и взрослых</li>
        <li>лекции известных мультипликаторов</li>
        <li>маркет, подготовленный участниками проекта The walks</li>
      </ul>
    )
  },
  ourSponsorsTitle: 'НАШИ СПОНСОРЫ',
  contactsTitle: 'КОНТАКТЫ',
  menu: {
    submitYourFilm: 'ОТПРАВИТЬ СВОЙ ФИЛЬМ',
    buyTickets: 'КУПИТЬ БИЛЕТЫ',
    films: 'ФИЛЬМЫ',
    aboutFestival: 'О ФЕСТИВАЛЕ',
    marketParticipants: 'УЧАСТНИКИ МАРКЕТА',
    team: 'КОМАНДА',
    ourSponsors: 'НАШИ СПОНСОРЫ',
    contacts: 'КОНТАКТЫ'
  },
  banner: {
    time: '20 НОЯБРЯ 17:00',
    address: 'АНУ - МУЗЕЙ ЕВРЕЙСКОГО НАРОДА'
  },
  movies: {
    seo: {
      title: 'Anitime - Фильмы',
      description: 'todo'
    }
  }
} satisfies Messages;
