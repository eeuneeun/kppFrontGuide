import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='wrapper'>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
