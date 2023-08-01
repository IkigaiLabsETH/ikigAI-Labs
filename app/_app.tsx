/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'; // Import the jsx pragma from the theme-ui package
import { useEffect } from 'react'; // Import useEffect from the react package
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Your global useEffect logic (if needed)
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
