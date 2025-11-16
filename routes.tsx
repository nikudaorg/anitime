import { Locale } from './i18n';
import { rHome } from './routes/Page';
import InsertLocalePage from './routes/InsertLocalePage';
import locales from './locales';
import { RouteDef } from './routesBase';
import { ReactNode } from 'react';
import { Metadata } from 'next';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare const routeSymbol: unique symbol;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare const pageSymbol: unique symbol;

type PageFun = (
  def: (
    locale: Locale,
    basePath: string
  ) => { Component: (props: object) => ReactNode; metadata: Metadata }
) => typeof pageSymbol;

type RouteFun = <Path extends `${string}/`>(
  path: Path,
  r: R
) => { [K in Path]: typeof routeSymbol };

export type R = (
  route: RouteFun,
  page: PageFun
) => {
  page?: typeof pageSymbol;
  routes?: { [K in `${string}/`]: typeof routeSymbol };
};

import { Amatic_SC } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const amaticSC = Amatic_SC({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic', 'hebrew'],
});

function Layout({ children, locale }: { children: ReactNode; locale: Locale }) {
  return (
    <html lang={locale}>
      <Analytics />
      <body className={`${amaticSC.className} antialiased`}>{children}</body>
    </html>
  );
}

const getPageFun =
  (locale: Locale | undefined, path: `${string}/`): PageFun =>
  (def) => {
    if (locale) {
      const result = def(locale, path);
      return {
        metadata: result.metadata,
        Component: () => (
          <Layout locale={locale}>
            <result.Component />
          </Layout>
        ),
      } as never as typeof pageSymbol;
    }
    return {
      Component: () => <InsertLocalePage path={path} />,
      metadata: def('en', path).metadata,
    } as never as typeof pageSymbol;
  };

const getRouteFun =
  (locale: Locale | undefined, basePath: `${string}/`): RouteFun =>
  (path, r) => {
    const newPath = `${basePath}${path}` as const as `${string}/`;
    const routeDef: typeof routeSymbol = r(
      getRouteFun(locale, newPath),
      getPageFun(locale, newPath)
    ) as never as typeof routeSymbol;
    return { [path]: routeDef } as never;
  };

const baseRoute = (locale: Locale | undefined, r: R) => {
  return r(getRouteFun(locale, '/'), getPageFun(locale, '/')) as never as RouteDef;
};

const routes: RouteDef = {
  page: baseRoute(undefined, rHome).page,
  routes: {
    ...baseRoute(undefined, rHome).routes,
    ...Object.fromEntries(
      locales.map((locale): [string, RouteDef] => [`${locale}/`, baseRoute(locale, rHome)])
    ),
  },
};

export default routes;
