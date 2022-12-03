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
import { I18nContext } from '@solid-primitives/i18n';

import {
  ColorModeScript,
  extendTheme,
  HeadingTheme,
  HopeProvider,
  injectCriticalStyle,
} from '~/shared/ui';
import { MainHeader } from '~/widgets';
import { Modals, ModalsProvider } from '~/globals/modals';
import { i18nContext } from '~/globals/i18n';
import { ErrorPage } from '~/pages';

import './root.css';

const queryClient = new QueryClient();

const theme = extendTheme({
  components: {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    Heading: {
      defaultProps: {
        level: 2,
        size: '5xl',
      },
      styleConfigOverride: {
        root: {
          baseStyle: {
            color: 'white',
          },
        },
      },
    } as HeadingTheme,
  },
});

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
        <HopeProvider theme={theme}>
          <I18nContext.Provider value={i18nContext}>
            <ModalsProvider>
              <QueryClientProvider client={queryClient}>
                <Suspense>
                  <ErrorBoundary
                    fallback={
                      process.env.NODE_ENV === 'production'
                        ? (e): JSXElement => <ErrorPage error={e} />
                        : undefined
                    }
                  >
                    <MainHeader />

                    <Routes>
                      <FileRoutes />
                    </Routes>

                    <Modals />
                  </ErrorBoundary>
                </Suspense>
              </QueryClientProvider>
            </ModalsProvider>
          </I18nContext.Provider>
        </HopeProvider>
        <Scripts />
      </Body>
    </Html>
  );
}
