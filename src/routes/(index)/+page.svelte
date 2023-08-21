<script>
	import src from "$lib/assets/root/neu_universum.mp4";
	import arrow from "$lib/assets/arrow.svg";
	import audioOn from "$lib/assets/root/audioOn.svg";
	import audioOff from "$lib/assets/root/audioOff.svg";
	let audio = false;
	/**
	 */
	function toggleAudio() {
		if (audio) {
			// @ts-ignore
			document.querySelector("#mainVideo").muted = true;
			// @ts-ignore
			document.querySelector("#buttonImg").src = audioOff;
			console.log(`off, ${audio}`);
			
		} else {
			// @ts-ignore
			document.querySelector("#mainVideo").muted = false;
			// @ts-ignore
			document.querySelector("#buttonImg").src = audioOn;
			console.log(`on, ${audio}`);
		}
		audio = !audio;
	}
</script>

<div id="landing">
	<video id="mainVideo" preload="auto" autoplay muted>
		<track kind="captions" />
		<source {src} type="video/mp4" />
	</video>

	<button type="button" on:click={() => toggleAudio()}>
		<img id="buttonImg" src={audioOff} alt=""/>
	</button>

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
		width: 100%;
		box-sizing: border-box;
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

	button {
		position: fixed;
		top: 4rem;
		right: 2rem;
		background-color: rgba(0, 0, 0, 0);
		border: none;
	}
</style>
