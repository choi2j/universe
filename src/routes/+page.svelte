<script>
	import '$lib/style.css';
	import Header from '../components/Header.svelte';
	import Proj from '../components/Proj.svelte';

	import data from '$lib/projData';

	import bg from '$lib/assets/background1.png';

	import uni1 from '$lib/assets/home/universe_qwerty.png';
	import uni2 from '$lib/assets/home/universe_moto.png';
	import arrow from '$lib/assets/arrow.svg';

	import pl1 from '$lib/assets/project/clip_planet.svg';
	import pl2 from '$lib/assets/project/tfta_planet.svg';
	import pl3 from '$lib/assets/project/buket_planet.svg';
	import pl4 from '$lib/assets/project/arcade_planet.svg';
	import pl5 from '$lib/assets/project/bigbang_planet.svg';

	import larr from '$lib/assets/leftarrow.svg';
	import rarr from '$lib/assets/rightarrow.svg';

	let planetSet = [
		{ name: 'fi', planet: pl1 },
		{ name: 'se', planet: pl2 },
		{ name: 'center', planet: pl3 },
		{ name: 'th', planet: pl4 },
		{ name: 'fo', planet: pl5 }
	];

	let planetName = ['fi', 'se', 'center', 'th', 'fo'];
	let planetState = [0, 1, 2, 3, 4];

	// @ts-ignore
	function changeCenter(dir) {
		if (dir == 'L') {
			for (let i = 0; i < 5; i++) {
				planetState[i] = (planetState[i] + 1) % 5;
				planetSet[i].name = planetName[planetState[i]];
			}
			console.log(planetState, planetSet);
		}
		if (dir == 'R') {
			for (let i = 0; i < 5; i++) {
				planetState[i] = (planetState[i] + 4) % 5;
				planetSet[i].name = planetName[planetState[i]];
			}
			console.log(planetState, planetSet);
		}
	}

	let display = 0;
	let state = 0;
	// @ts-ignore
	function showProject(idx) {
		state = idx;
		display = 1;
	}
</script>

<Header />

<div id="home">
	<div class="background" style={`background-image: url(${bg})`} />

	<div class="home" id="one">
		<img class="img1" src={uni1} alt="" />
		<img class="img2" src={uni2} alt="" />

		<a class="arrow" href="#two">
			<img src={arrow} alt="" />
		</a>
	</div>

	<div class="galaxy" id="two">
		{#each planetSet as e, idx}
			<button class="planet {e.name}" on:click={() => {showProject((idx + 3) % 5)}}>
				<img src={e.planet} alt="planet" />
			</button>
		{/each}
		<div class="mode">
			<button
				on:click={() => {
					changeCenter('L');
				}}><img src={larr} alt="" /></button
			>
			<button
				on:click={() => {
					changeCenter('R');
				}}><img src={rarr} alt="" /></button
			>
		</div>
	</div>

	<div class="list disnone" id="three" />

	<div class={display ? 'proj disflex' : 'proj disnone'}>
		<Proj
			title={data[state].title}
			desc={data[state].desc}
			src={data[state].src}
			team={data[state].team}
			bind:display={display}
		/>
	</div>
</div>

<style scoped>
	.background {
		height: 100vh;
		width: 100%;
		position: fixed;
		z-index: -10;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.disnone {
		display: none;
	}
	
	.disflex {
		display: flex;
	}

	/* Home #one */
	#home {
		height: 200vh;
		width: 100%;
	}

	.home {
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.img1 {
		height: 7rem;
	}

	.img2 {
		height: 14rem;
	}

	.arrow {
		position: absolute;
		bottom: 2rem;
		transition: 300ms;
		background: none;
		border: none;
		cursor: pointer;
	}

	.arrow:hover {
		bottom: 1rem;
		padding-top: 1rem;
	}

	/* Planet #two */
	.galaxy {
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		justify-content: center;
	}

	.planet {
		background: none;
		border: none;
		border-radius: 100%;
		width: fit-content;
		position: absolute;
		transition: ease-in-out all 300ms;
	}

	.planet img {
		transition: ease-in-out all 300ms;
	}

	/* planet positoin */
	.fi {
		top: calc(100vh + 30rem);
		left: 10vw;
	}

	.se {
		top: calc(100vh + 5rem);
		left: 25vw;
	}

	.center {
		top: calc(100vh + 30vh);
		left: 38vw;
	}

	.th {
		top: calc(100vh + 5rem);
		left: 60vw;
	}

	.fo {
		top: calc(100vh + 30rem);
		left: 80vw;
	}

	/* static img size */
	.fi img {
		height: 14rem;
	}

	.se img {
		height: 12rem;
	}

	.center img {
		height: 25rem;
	}

	.th img {
		height: 10rem;
	}

	.fo img {
		height: 15rem;
	}

	/* hover effect */
	.fi:hover {
		top: calc(100vh + 29.5rem);
		left: calc(10vw - 0.5rem);
	}

	.se:hover {
		top: calc(100vh + 4.5rem);
		left: calc(25vw - 0.5rem);
	}

	.center:hover {
		top: calc(100vh + 30vh - 0.5rem);
		left: calc(38vw - 0.5rem);
	}

	.th:hover {
		top: calc(100vh + 4.5rem);
		left: calc(60vw - 0.5rem);
	}

	.fo:hover {
		top: calc(100vh + 29.5rem);
		left: calc(80vw - 0.5rem);
	}

	.fi img:hover {
		height: 15rem;
	}

	.se img:hover {
		height: 13rem;
	}

	.center img:hover {
		height: 26rem;
	}

	.th img:hover {
		height: 11rem;
	}

	.fo img:hover {
		height: 16rem;
	}

	.mode {
		margin-bottom: 5rem;
	}

	.mode button {
		background: none;
		border: none;
		border-radius: 100%;
	}

	/* List #three */

	/* Project */
	.proj {
		position: static;
		height: 100vh;
		width: 100%;
	}
</style>
