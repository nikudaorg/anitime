import routes, { Component, LayoutComponent, Routes } from '@/routes';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type FlatRoutes = (readonly [string[], Component<object>, Metadata])[];

const flattenRoutes = (
  routes: Routes,
  baseParts: string[] = [],
  baseLayout: LayoutComponent = ({ children }) => children
): FlatRoutes => {
  return [
    ...routes.flatMap(([path, { page, routes, Layout: OwnLayout }]) => {
      const parts = [...baseParts, ...path.split('/').filter((e) => e)];
      const Layout: LayoutComponent = OwnLayout
        ? ({ children }) =>
            baseLayout({ children: OwnLayout({ children: children }) })
        : baseLayout;
      return [
        ...(page
          ? ([
              [
                parts,
                async (props: object) =>
                  Layout({ children: page.Component(props) }),
                page.metadata
              ]
            ] as const)
          : []),
        ...(routes ? flattenRoutes(routes, parts, Layout) : [])
      ];
    })
  ];
};

const flatRoutes = flattenRoutes(routes);

export async function generateStaticParams() {
  return flatRoutes.map(([parts]) => ({
    url: parts
  }));
}

type Mapping = {
  routes: { [k: string]: Mapping };
  page?: { Component: Component<object>; metadata: Metadata };
};

const createRoutesMapping = () => {
  const mapping: Mapping = { routes: {} };
  flatRoutes.forEach(([parts, Page, metadata]) => {
    let current = mapping;
    parts.forEach((part) => {
      current.routes = current.routes || {};
      current.routes[part] = current.routes[part] || {};
      current = current.routes[part] as Mapping;
    });
    current.page = { Component: Page, metadata };
  });
  return mapping;
};

const routesMapping = createRoutesMapping();

const getRoute = (url: string[] | undefined) => {
  return (url || []).reduce(
    (mapping, part) => mapping.routes[part],
    routesMapping
  ).page;
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ url: string[] }>;
}) {
  const { url } = await params;

  const page = getRoute(url);

  return page?.metadata;
}

export default async function UrlPage({
  params
}: {
  params: Promise<{ url?: string[] }>;
}) {
  const { url } = await params;

  const page = getRoute(url);

  return page ? <page.Component /> : notFound();
}

export const dynamic = 'force-static';
export const revalidate = false;

export const viewport: Viewport = {
  themeColor: '#2c1c51',
};
