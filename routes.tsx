import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Locale } from './i18n';
import HomePage, {
  generateMetadata as generateHomeMetadata
} from './routes/Page';
import MoviesPage, {
  generateMetadata as generateMoviesMetadata
} from './routes/movies/Page';
import InsertLocalePage from './routes/InsertLocalePage';
import locales from './locales';

export type Component<Props extends object> = (props: Props) => ReactNode;

export type LayoutComponent = Component<{ children: ReactNode }>;

export type Routes = [
  `${string}/`,
  {
    page?: { Component: Component<object>; metadata: Metadata };
    Layout?: LayoutComponent;
    routes?: Routes;
  }
][];

const getSiteRoutes = (locale?: Locale): Routes => [
  [
    '/',
    {
      routes: [
        [
          'movies/',
          {
            page: {
              Component: () =>
                locale ? (
                  <MoviesPage locale={locale} />
                ) : (
                  <InsertLocalePage parts={['movies']} />
                ),
              metadata: generateMoviesMetadata(locale || 'en')
            }
          }
        ]
      ],
      page: {
        Component: () =>
          locale ? (
            <HomePage locale={locale} />
          ) : (
            <InsertLocalePage parts={[]} />
          ),
        metadata: generateHomeMetadata(locale || 'en')
      }
    }
  ]
];

const routes: Routes = [
  ...getSiteRoutes(),
  ...locales.map((locale): Routes[number] => [
    `${locale}/`,
    { routes: getSiteRoutes(locale) }
  ])
];

export default routes;
