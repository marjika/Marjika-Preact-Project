import { h } from 'preact';
import Game from '../../components/game';
import style from './style';

const Home = () => (
	<div class={style.home}>
		<h1>Scrabboggle</h1>
		<Game></Game>
	</div>
);

export default Home;