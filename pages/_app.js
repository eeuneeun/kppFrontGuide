import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='wrapper'>
      <Header />

      <div className='contents inner'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
