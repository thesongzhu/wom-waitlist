import { fetchOneEntry } from '@builder.io/sdk-react';
import { RenderBuilderContent } from '@/components/builder/RenderBuilderContent';
import { BUILDER_API_KEY } from '@/lib/builder';

interface PageProps {
  params: { page?: string[] };
}

export default async function BuilderPage({ params }: PageProps) {
  const urlPath = '/builder/' + (params?.page?.join('/') || '');
  
  const content = await fetchOneEntry({
    model: 'page',
    apiKey: BUILDER_API_KEY,
    userAttributes: { urlPath },
  });

  return <RenderBuilderContent content={content} model="page" />;
}
