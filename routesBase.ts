import { Metadata } from 'next';
import { ReactNode } from 'react';

export type Component<Props extends object> = (props: Props) => ReactNode;

export type Page = { Component: Component<object>; metadata: Metadata };

export type RouteDef = {
  page?: Page;
  routes?: {
    [K in `${string}/`]: RouteDef;
  };
};
