import styles from './page.module.scss';
import ScrollSmootherWrapper from '@/utils/gsap/ScrollSmoother';
import Footer from '@/components/Footer/Footer';

const s = styles;

function Home() {
  return (
    <ScrollSmootherWrapper>
      <main className="Main">

      </main>
      <Footer />
    </ScrollSmootherWrapper>
  );
}

export default Home;