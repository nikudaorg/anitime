import redirectDefault from '@/app/redirectDefault';

export default function DefaultPage({
  params
}: {
  params: { url?: string[] };
}) {
  redirectDefault({ params });
}

export const dynamic = 'force-static';
export const revalidate = false;
