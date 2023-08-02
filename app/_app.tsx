/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, ComponentType } from 'react'; // Import ComponentType
import type { AppProps } from 'next/app';
import { isAnyArrayBuffer } from 'util/types';

type MyAppProps = AppProps & {
  Component: ComponentType; // Use ComponentType instead of NextComponentType
};

function MyApp({ Component, pageProps }: MyAppProps) {
  useEffect(() => {
    // Your global useEffect logic (if needed)
  }, []);

  // Check if Component exists before rendering
  return Component ? Component :pageProps ;
}

export default MyApp;
