import { AppProps } from 'next/app';

import { PizzaJuiceProvider } from '@pizza-juice/provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PizzaJuiceProvider>
      <Component {...pageProps} />
    </PizzaJuiceProvider>
  );
}

export default MyApp;
