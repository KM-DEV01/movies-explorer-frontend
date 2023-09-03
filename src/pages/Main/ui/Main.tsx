import { Header } from '@widgets/Header';
import { AboutMe } from '@widgets/Landing/AboutMe';
import { AboutProject } from '@widgets/Landing/AboutProject';
import { Portfolio } from '@widgets/Landing/Portfolio';
import { Promo } from '@widgets/Landing/Promo';
import { Techs } from '@widgets/Landing/Techs';
import { Footer } from '@widgets/Footer';

export function Main() {
  return (
    <>
      <Header />
      <main className='landing'>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
