<script>
	import uni1 from '$lib/assets/home/universe_qwerty.png';
	import uni2 from '$lib/assets/home/universe_moto.png';
	import arrow from '$lib/assets/arrow.svg';
</script>

<!--home-->
<div id="home">
	<!-- <img class="img1" src={uni1} alt="" /> -->
	<img class="img2" src={uni2} alt="" />

	<a class="arrow" href="/planet">
		<img src={arrow} alt="" />
	</a>
</div>

<style scoped>
	/*home page*/
	#home {
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.img2 {
		height: 21.6rem;
		width: 43.5rem;
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

	/*planet page*/
	#planet {
		height: 100vh;
		width: 100%;
	}

	/*list page*/
	#list {
		height: 100vh;
		width: 100%;
	}
</style>
