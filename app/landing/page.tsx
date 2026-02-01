import { fetchOneEntry } from '@builder.io/sdk-react';
import { RenderBuilderContent } from '@/components/builder/RenderBuilderContent';
import { BUILDER_API_KEY } from '@/lib/builder';

export default async function LandingPage() {
  const content = await fetchOneEntry({
    model: 'page',
    apiKey: BUILDER_API_KEY,
    userAttributes: { urlPath: '/landing' },
  });

  return (
    <>
      <RenderBuilderContent content={content} model="page" />
      <footer className="text-center py-6 bg-gray-50 text-gray-400 text-xs">
        <div className="flex justify-center gap-4 mb-2">
          <a href="/terms" className="hover:text-gray-600 transition-colors">Terms of Service</a>
          <span>·</span>
          <a href="/privacy" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
        </div>
        &copy; 2025 WOM — Word of Mouth
      </footer>
    </>
  );
}
