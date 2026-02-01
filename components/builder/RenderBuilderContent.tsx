'use client';

import { Content, isPreviewing } from '@builder.io/sdk-react';
import { BUILDER_API_KEY } from '@/lib/builder';

interface RenderBuilderContentProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  model: string;
}

export function RenderBuilderContent({ content, model }: RenderBuilderContentProps) {
  const isPreview = isPreviewing();

  if (!content && !isPreview) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-white/50">This Builder.io page hasn&apos;t been created yet.</p>
          <p className="text-white/30 mt-2 text-sm">
            Go to <a href="https://builder.io/content" className="text-purple-400 underline">Builder.io</a> to create it.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Content
        content={content}
        model={model}
        apiKey={BUILDER_API_KEY}
      />
    </div>
  );
}
