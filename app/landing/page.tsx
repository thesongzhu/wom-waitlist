import { fetchOneEntry } from '@builder.io/sdk-react';
import { RenderBuilderContent } from '@/components/builder/RenderBuilderContent';
import { BUILDER_API_KEY } from '@/lib/builder';

export default async function LandingPage() {
  const content = await fetchOneEntry({
    model: 'page',
    apiKey: BUILDER_API_KEY,
    userAttributes: { urlPath: '/landing' },
  });

  return <RenderBuilderContent content={content} model="page" />;
}
