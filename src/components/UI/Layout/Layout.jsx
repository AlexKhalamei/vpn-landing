// components
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Cards from '../Cards/Cards';
import Plans from '../Plans/Plans';
import Experience from '../Experience/Experience';
import Comments from '../Comments/Comments';
import Faq from '../Faq/Faq';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cards />
        <Plans />
        <Experience />
        <Comments />
        <Faq />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
