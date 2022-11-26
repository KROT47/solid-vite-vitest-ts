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

import {
  ColorModeScript,
  HopeProvider,
  injectCriticalStyle,
} from '~/shared/ui';
import { MainHeader } from '~/widgets';
import { Modals, ModalsProvider } from '~/globals/modals';

import './root.css';

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
            <Suspense>
              <ErrorBoundary>
                <MainHeader />

                <Routes>
                  <FileRoutes />
                </Routes>

                <Modals />
              </ErrorBoundary>
            </Suspense>
          </ModalsProvider>
        </HopeProvider>
        <Scripts />
      </Body>
    </Html>
  );
}
