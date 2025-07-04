// src/app/layout.tsx

import { AppLayout } from '@/components/layout/AppLayout';
import { MusicProvider } from '@/context/MusicContext';
import { ThemeContextProvider } from '@/context/ThemeContext';
import GlobalStyle from '@/styles/globalStyle';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <ThemeContextProvider>
          <GlobalStyle />
          <MusicProvider>
            <AppLayout>{children}</AppLayout>
          </MusicProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
