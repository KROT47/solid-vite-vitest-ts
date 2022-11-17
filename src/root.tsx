// @refresh reload
import {
  ColorModeScript,
  HopeProvider,
  injectCriticalStyle,
} from '@hope-ui/core';
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

import { MainHeader } from '~/widgets';

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
          <Suspense>
            <ErrorBoundary>
              <MainHeader />

              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </Suspense>
        </HopeProvider>
        <Scripts />
      </Body>
    </Html>
  );
}
