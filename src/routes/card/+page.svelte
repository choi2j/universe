<script>
	import text from '../../assets/myIDCardText.svg';
	import card from '../../assets/IDCardSample.svg';
</script>

<div id="card">
	<img id="text" src={text} alt="" />
	<img id="sample" src={card} alt="" />
	<div class="btn">
		<div class="btn-bg" />
		<div class="btn-border" />
		<div class="btn-text">인증 카드 받기</div>
	</div>
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
		background: linear-gradient(-45deg, #8C8AFF, #DB74FF00, #DB74FF00, #DB74FF) border-box;
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
