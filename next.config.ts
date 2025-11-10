import type { NextConfig } from "next";
import withExportImages from 'next-export-optimize-images';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
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
  //   return pages.map((page) => ({
  //     source: page,
  //     destination: `/default${page}`
  //   }));
  // },
  output: 'export',
};

export default withExportImages(nextConfig);