import redirectDefault from '@/app/redirectDefault';

export default async function DefaultPage({
  params
}: {
  params: Promise<{ url?: string[] }>;
}) {
  redirectDefault({ params: await params });
}

export const dynamic = 'force-static';
export const revalidate = false;
