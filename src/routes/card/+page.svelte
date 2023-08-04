<script>
	import text from "$lib/assets/card/myIDCardText.svg";
	import card from "$lib/assets/card/IDCardSample.svg";
	import bg4 from "$lib/assets/background4.png";
</script>

<div id="card" style="background-image: url({bg4});">
	<img id="text" src={text} alt="" />
	<img id="sample" src={card} alt="" />
	<a href="card/making" class="btn">
		<div class="btn-bg" />
		<div class="btn-border" />
		<div class="btn-text">인증 카드 받기</div>
	</a>
</div>

<style>
	#card {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	#text {
		height: 8rem;
	}

	#sample {
		height: 600px;
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
</style>
