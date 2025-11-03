import type { NextConfig } from "next";
import locales from './locales';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true
  // turbopack: {
  //   rules: {
  //     '*.svg': {
  //       loaders: ['@svgr/webpack'],
  //       as: '*.js'
  //     }
  //   }
  // }
  // not sure rewrites is ok for SSG
  // see https://nextjs.org/docs/messages/export-no-custom-routes
  // but apparently it works
  // rewrites: () => {
  //   const localeRules = locales.map((locale) => ({
  //     source: `/${locale}/:path*`,
  //     destination: `/${locale}/:path*`
  //   }));

  //   // Fallback rule for routes that do NOT start with a locale
  //   const fallbackRule = {
  //     source: '/:path*',
  //     destination: `/default/:path*`
  //   };

  //   return [...localeRules, fallbackRule];
  // }
};

export default nextConfig;