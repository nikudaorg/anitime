import locales from '@/locales';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
