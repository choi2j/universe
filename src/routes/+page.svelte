<script>
	import src from '../assets/universe_video.mp4';
	import arrow from '../assets/arrow.svg';
</script>

<div id="landing">
	<video preload="auto" autoplay>
		<track kind="captions" />
		<source {src} type="video/mp4" />
	</video>

	<a class="arrow" href="/home">
		<img src={arrow} alt="" />
	</a>
</div>

<style scoped>
	#landing {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	video {
		height: 100%;
		box-sizing: border-box;
	}

	.arrow {
		position: fixed;
		bottom: 2rem;
		transition: 300ms;
	}

	.arrow:hover {
		bottom: 1rem;
	}
</style>
