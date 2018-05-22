import { h, FunctionalComponent } from 'preact';
import Header from './header';
import Main from './main';
import Footer from './footer';

const Root: FunctionalComponent = () => (
  <div class="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default Root;
