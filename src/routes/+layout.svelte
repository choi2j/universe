<script>
	import "$lib/style.css";
	import Header from "../components/Header.svelte";

	import bg1 from "$lib/assets/background1.png";
	import bg2 from "$lib/assets/background2.png";
	import bg3 from "$lib/assets/background3.png";
	import bg4 from "$lib/assets/background4.png";

	const bg = [bg1, bg2, bg3, bg4];
	let state = 0;
</script>

<main style={`background-image: url(${bg[state]})`}>
	<Header />
	<slot />
</main>
