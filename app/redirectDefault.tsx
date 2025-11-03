import { redirect } from 'next/navigation';

const detectPreferredLocale = () => {
  const supported = ['en', 'es', 'fr'];
  return (
    navigator.languages
      .find((l) => supported.includes(l.split('-')[0]))
      ?.split('-')[0] || 'en'
  );
};

export default function redirectDefault({
  params
}: {
  params: { url?: string[] };
}) {
  const slug = params.url?.join('/') ?? '';
  redirect(`/${detectPreferredLocale()}/${slug}`);
}
