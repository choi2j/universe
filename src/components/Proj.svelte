<script>
// @ts-nocheck

	export let title;
	export let desc;
	export let src;
	export let team;
	import circ from "$lib/assets/props/whiteCircle.svg";
	import leftArrow from "$lib/assets/leftarrow.svg";
	import flag from "$lib/assets/project/flag.svg";
	console.log(team);
</script>

<div class="proj">
	<button>
		<img src={leftArrow} alt="back">
	</button>
	<div class="info">
		<p class="title">{title}</p>
		<p class="desc">{desc}</p>
		{#each team as a}
			<div>
				<img src={circ} alt="circle">
				<p class="cont">{a.role} by {a.name}</p>
			</div>
		{/each}
	</div>
	<div class="img">
		<img {src} alt="" />
	</div>
	<div id="buttons">
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








<!-- <style>
    #part {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 600px;
        height: 100px;
    }

    a {
        position: fixed;
        top: 100px;
        left: 200px;
    }

    button {
        background-color: #00000000;
        border: none;
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

    #buttons {
        display: flex;
    }
</style> -->