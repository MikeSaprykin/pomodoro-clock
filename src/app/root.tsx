import { h } from 'preact';
import Header from './header';
import Main from './main';
import Footer from './footer';

export default () => (
    <div class="app">
        <Header />
        <Main />
        <Footer />
    </div>
);