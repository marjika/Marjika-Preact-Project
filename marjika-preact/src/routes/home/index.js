import { h } from 'preact';
import Board from '../../components/board';
import style from './style';

const Home = () => (
	<div class={style.home}>
		<h1>Scrabboggle</h1>
		<p>This is the Home component.</p>
		<Board></Board>
	</div>
);

export default Home;
