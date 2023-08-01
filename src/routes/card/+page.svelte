<script>
    import text from '../../assets/myIDCardText.svg';
    import card from '../../assets/IDCardSample.svg';
</script>



<div id="card">
    <img id="text" src={text} />
    <img id="sample" src={card} />
    <button>인증 카드 받기</button>
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
        height: 64px;
    }

    #sample {
        height: 600px;
    }
</style>