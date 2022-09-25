import ExampleContextWrapper from '@/context/ExampleContext';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ExampleContextWrapper>
      <Component {...pageProps} />
    </ExampleContextWrapper>
  );
}

export default MyApp;
