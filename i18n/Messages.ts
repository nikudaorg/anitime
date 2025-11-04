import { ReactNode } from 'react';

export type Messages = {
  seo: {
    title: string;
    description: string;
  };
  buyTicketsLink: string;
  emailCopied: string;
  aboutFestival: {
    title: string;
    content: ReactNode;
  };
  inProgram: {
    title: string;
    content: ReactNode;
  };
  ourSponsorsTitle: string;
  contactsTitle: string;
  menu: {
    submitYourFilm: string;
    buyTickets: string;
    films: string;
    aboutFestival: string;
    marketParticipants: string;
    team: string;
    ourSponsors: string;
    contacts: string;
  };
  banner: {
    time: string;
    address: string;
  };
  movies: {
    seo: {
      title: string;
      description: string;
    };
  };
};
