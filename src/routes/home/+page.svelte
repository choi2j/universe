<script>
	import uni1 from "$lib/assets/home/universe_qwerty.png";
	import uni2 from "$lib/assets/home/universe_moto.png";
    import arrow from "$lib/assets/arrow.svg";
</script>

<div id="home">
	<img class="img1" src={uni1} alt="" />
	<img class="img2" src={uni2} alt="" />

    <a class="arrow" href="/planet">
        <img src={arrow} alt="">
    </a>
</div>

<style scoped>
	#home {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

    .img1 {
        height: 7.25rem;
    }

    .img2 {
        height: 14.3125rem;
    }

    .arrow {
        position: fixed;
        bottom: 2rem;
        transition: 300ms;
    }

    .arrow:hover {
        bottom: 1rem;
		padding-top: 1rem;
    }
</style>
