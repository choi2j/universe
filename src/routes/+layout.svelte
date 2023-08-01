<script>
	import '$lib/style.css';
	import Header from '../components/Header.svelte';

	import bg1 from '../assets/background1.png';
	import bg2 from '../assets/background2.png';
	import bg3 from '../assets/background3.png';

	const bg = [bg1, bg2, bg3];
	let state = 0;
</script>

<main style={`background-image: url(${bg[state]})`}>
	<Header />
	<slot />
</main>

<style>
	main {
		overflow: hidden;
	}
</style>
