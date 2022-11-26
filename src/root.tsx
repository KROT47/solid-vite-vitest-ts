// @refresh reload
import { Suspense } from 'solid-js';
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from 'solid-start';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';

import {
  ColorModeScript,
  HopeProvider,
  injectCriticalStyle,
} from '~/shared/ui';
import { MainHeader } from '~/widgets';
import { Modals, ModalsProvider } from '~/globals/modals';

import './root.css';

const queryClient = new QueryClient();

export default function Root(): JSXElement {
  injectCriticalStyle();

  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Body>
        <ColorModeScript />
        <HopeProvider>
          <ModalsProvider>
            <QueryClientProvider client={queryClient}>
              <Suspense>
                <ErrorBoundary>
                  <MainHeader />

                  <Routes>
                    <FileRoutes />
                  </Routes>

                  <Modals />
                </ErrorBoundary>
              </Suspense>
            </QueryClientProvider>
          </ModalsProvider>
        </HopeProvider>
        <Scripts />
      </Body>
    </Html>
  );
}
