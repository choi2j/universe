<script>
    import text from '../../assets/myIDCardText.svg';
    import card from '../../assets/IDCardSample.svg';
</script>



<div id="card">
    <img id="text" src={text} alt="" />
    <img id="sample" src={card} alt="" />
    <div id="button">인증 카드 받기</div>
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
        height: 125px;
    }

    #sample {
        height: 600px;
        margin-top: 64px;
        margin-bottom: 32px;
    }

    #button {

        /* Auto layout */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 18px 42px;
        gap: 10px;

        position: absolute;
        width: 250px;
        height: 64px;
        left: calc(50% - 244px/2);
        top: 965.16px;

        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(2px);

        font-family: 'SUIT';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 100%;

        color: #FFFFFF;
        border-radius: 999px;
        border: 3px double transparent;
        background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), 
            linear-gradient(150deg, #DB74FF, rgba(0, 0, 0, 0), #8C8AFF);
        background-origin: border-box;
        background-clip: content-box, border-box;
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    
</style>