import routeDef from '@/routes';
import { Component } from '@/routesBase';
import { RouteDef } from '@/routesBase';
import { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';

type FlatRoutes = (readonly [string[], Component<object>, Metadata])[];

const flattenRouteDef = (routeDef: RouteDef, baseParts: string[] = []): FlatRoutes => {
  const page = routeDef.page;
  const routes = routeDef.routes;
  return [
    ...(page ? ([[baseParts, page.Component, page.metadata]] as const) : []),
    ...(routes
      ? Object.entries(routes).flatMap(([path, routeDef]) => {
          const parts = [...baseParts, ...path.slice(0, -1).split('/')];
          return flattenRouteDef(routeDef, parts);
        })
      : []),
  ];
};

const flatRoutes = flattenRouteDef(routeDef);

export async function generateStaticParams() {
  return flatRoutes.map(([parts]) => ({
    url: parts,
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
  let current = routesMapping;

  for (const part of url ?? []) {
    const next = current.routes?.[part];
    if (next === undefined) return 'notFound';
    current = next;
  }

  return current.page ?? 'notFound';
};

export async function generateMetadata({ params }: { params: Promise<{ url: string[] }> }) {
  const { url } = await params;

  const page = getRoute(url);
  if (page === 'notFound') return notFound();

  return page?.metadata;
}

export default async function UrlPage({ params }: { params: Promise<{ url?: string[] }> }) {
  const { url } = await params;

  const page = getRoute(url);

  if (page === 'notFound') return notFound();

  return page ? <page.Component /> : notFound();
}

export const dynamic = 'force-static';
export const revalidate = false;

export const viewport: Viewport = {
  themeColor: '#2c1c51',
};
