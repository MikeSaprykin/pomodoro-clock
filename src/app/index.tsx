import { h, render } from 'preact';
import Root from './containers/root';

const rootEl = document.querySelector('#root');

render(<Root />, rootEl);
