<script>
	import text from "$lib/assets/card/myIDCardText.svg";
	import card from "$lib/assets/card/IDCardSample.svg";
	import bg4 from "$lib/assets/background4.png";

	import logo from "$lib/assets/universe_logo.svg";
    import barcode from "$lib/assets/card/card_barcode.svg";
	import portrait from "$lib/assets/portraits/portrait00.svg";
</script>

<div id="card" style="background-image: url({bg4});">
	<img id="text" src={text} alt="" />
	<p id="text2">유니버스카드로 유니버스에서의 추억을 간직해주세요.</p>
	<div id="sample" class="card">
		<div class="card-bg">
			<div class="card-inner">
				<img id="logo" src={logo} alt="logo">
				<img id="background" src={portrait} alt="face">
				<div id="name">Kim Sunrin</div>
				<div id="job">Developer</div>
				<img id="barcode" src={barcode} alt="barcode">
				<div id="date">2023.09.05</div>
			</div>
		</div>
		<div class="card-border" />
	</div>

	<a href="card/making" class="btn">
		<div class="btn-bg" />
		<div class="btn-border" />
		<div class="btn-text">인증 카드 받기</div>
	</a>
</div>

<style>
	* {
		color: white;
	}

	#card {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	#text {
		height: 82px;
		margin-bottom: 24px;
	}

	#text2 {
		font-size: 24px;
		color: white;
	}

	#sample {
		height: 560px;
		margin-top: 4rem;
		margin-bottom: 4rem;
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

	.card {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
        box-sizing: border-box;

        /* Auto layout */
        /* display: flex; */
        justify-content: center;
        gap: 10px;

        position: relative;
        width: 354px;
        height: 560px;

        background: linear-gradient(159.12deg, rgba(137, 149, 255, 0.2) 3.62%, rgba(255, 255, 255, 0.002) 50.74%, rgba(200, 130, 255, 0.2) 97.86%);
        backdrop-filter: blur(6px);
        /* Note: backdrop-filter has minimal browser support */
        border-radius: 32px;
	}

	.card-bg {
		border-radius: 32px;
		grid-column: 1/2;
		grid-row: 1/2;
		z-index: 1;
	}

	.card-border {
		grid-column: 1/2;
		grid-row: 1/2;
		z-index: 2;
		border-radius: 32px;
		border: 3px solid transparent;
		background: linear-gradient(-45deg, #8c8aff, #db74ff00, #db74ff00, #db74ff) border-box;
		-webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
	}

    .card-inner {
        height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
    }

	#logo {
        width: 227px;
    }

    #background {
        width: 180px;
        margin: 28px 0;
    }

	#name {
        font-size: 32px;
        margin-bottom: 12px;
        font-weight: 600;
    }

    #job {
        font-size: 16px;
        margin-bottom: 30px;
        font-weight: 600;
    }

	#date {
        font-size: 24px;
        margin-top: 35px;
    }
</style>
