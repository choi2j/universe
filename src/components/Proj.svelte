<script>
// @ts-nocheck

	export let title;
	export let desc;
	export let src;
	export let team;
	import circ from "$lib/assets/props/whiteCircle.svg";
	import leftArrow from "$lib/assets/leftarrow.svg";
	import flag from "$lib/assets/project/flag.svg";
	import icon1 from "$lib/assets/project/icon1.svg";
	import icon2 from "$lib/assets/project/icon2.svg";
	import icon3 from "$lib/assets/project/icon3.svg";
	import icon4 from "$lib/assets/project/icon4.svg";
	import icon5 from "$lib/assets/project/icon5.svg";

	export let display;
	console.log(team);
</script>

<div class="proj">

	<div class="f5417">
		<div class="info">
			<p class="title text-big">{title}</p>
			<p class="desc text-small">{desc}</p>
			<div class="f5411">
				{#each team as a}
					<div class="part">
						<img src={circ} alt="circle">
						<p class="cont">{a.role} by {a.name}</p>
					</div>
				{/each}
			</div>
		</div>
		<div class="img">
			<img {src} alt="" />
		</div>
	</div>

	<div class="f5426">
        <button on:click={() => {display = 0}}>
            <img src={leftArrow} alt="flag">
        </button>
        <a href="만든 프로젝트 링크" class="btn">
            <div class="btn-bg" />
            <div class="btn-border" />
            <div class="btn-text">확인해보기</div>
        </a>
        <button>
            <img src={flag} alt="flag">
        </button>
    </div>
</div>

<style>
	* {
		color: white;
	}

	button {
		border: none;
		background: none;
	}

	.text-big {
        color: #FFF;
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%; /* 48px */
    }

    .text-small {
        color: #FFF;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

	.desc {
		margin-top: 4.5rem;
		margin-bottom: 6.5rem;
		width: 37.25rem;
	}

	.proj {
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, 0.60);
		backdrop-filter: blur(100px);
	}

	.cont {
		display: inline-block;
		font-size: 1.5rem;
	}

	.part {
		display: flex;
		flex-direction: row;
		align-items:center;
		gap: 0.75rem;
	}

	.img {
		height: 31.25rem;
		width: 31.25rem;
	}

	.f5411 {
		width: 600px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.75rem;
	}

	.f5417 {
		display: grid;
		align-items: center;
		grid-template-columns: auto 31.25rem;
		margin: 18.5rem 12.5rem;
	}

    .f5426 {
		position: fixed;
        display: flex;
		justify-content: center;
		align-items: center;
		top: 59.5em;
		gap: 1rem;
		width: 100%;
		background: rgba(0, 0, 0, 0.60);
		backdrop-filter: blur(100px);
    }

	.btn {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
	}

	.btn-bg {
		border-radius: 60rem;
		grid-column: 1/2;
		grid-row: 1/2;
		z-index: 1;
		background-color: #ffffff33;
	}

	.btn-border {
		grid-column: 1/2;
		grid-row: 1/2;
		z-index: 2;
		border-radius: 60rem;
		border: 3px solid transparent;
		background: linear-gradient(-45deg, #8c8aff, #db74ff00, #db74ff00, #db74ff) border-box;
		-webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
	}

	.btn-text {
		padding: 1rem 2.5rem;
		grid-column: 1/2;
		grid-row: 1/2;
		white-space: nowrap;
		color: white;
		z-index: 2;
		text-transform: uppercase;
		font-size: 1.75rem;
	}


</style>