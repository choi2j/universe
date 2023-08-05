<script>
    import logo from "$lib/assets/home/universe_moto.png";
    import info from "$lib/assets/howToTravelUniversum.svg";
    import qwertyLogo from "$lib/assets/home/universe_qwerty.png";
    import iconA from "$lib/assets/intro/a.svg";
    import iconB from "$lib/assets/intro/b.svg";
    import iconC from "$lib/assets/intro/c.svg";
    import iconD from "$lib/assets/intro/d.svg";
</script>

<div id="page">
    <img src={logo} alt="logo" id="logo">
    <p id="introduce">
        유니버스는 웹 개발 동아리 QWERTY의 2023년 동아리 전시회에요.<br>
        유니버스 모드에선 실제 우주의 행성을 방문하는것 처럼 만들었어요.<br>
        QWERTY의 부원들이 방학동안 열심히 준비한 웹 페이지를<br>
        유니버스만의 아름다운 우주속에서 관람해주세요.
    </p>
    <img src={info} alt="How to travel Universe" id="info">
    <div id="temp1">
        <div class="temp2">
            <img src={iconA} alt="soundIcon">
            <p class="rule">음악 들으면서 관람하기</p>
            <p class="desc">실제로 우주를 탐험하는듯한 소리를 들으면서 유니버스를 관람해주세요.</p>
        </div>
        <div class="temp2">
            <img src={iconB} alt="rocketIcon">
            <p class="rule">유니버스 카드 만들기</p>
            <p class="desc">유니버스 카드를 만들어 유니버스에서의 추억을 간직해주세요.</p> <!--카드 데이터 DB에 저장-->
        </div>
        <div class="temp2">
            <img src={iconC} alt="penIcon">
            <p class="rule">방명록 적기</p>
            <p class="desc">행성에 자신이 왔다는 흔적을 남겨주세요. 처음으로 발을 딛은 사람은 누굴까요?</p> <!--방명록 데이터 DB에 저장-->
        </div>
        <div class="temp2">
            <img src={iconD} alt="flagIcon">
            <p class="rule">깃발 꽂아 흔적 남기기</p>
            <p class="desc">이 행성에 맘에 들었다면 깃발을 꽂아주세요.<br>깃발을 꽂아 인상적인 행성을 알려주세요.</p> <!--깃발 개수 DB에 저장-->
        </div>
    </div>
    <img id="qwertyLogo" src={qwertyLogo} alt="qwerty">
</div>

<style>
    #page {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: scroll;
        padding-top: 100px;
    }

    #logo {
        width: 695px;
        margin-bottom: 120px;
    }

    #introduce {
        font-size: 24px;
        color: white;
        text-align: center;
        margin-bottom: 120px;
    }

    #info {
        width: 867px;
        margin-bottom: 120px;
    }

    #temp1 {
        margin-bottom: 48px;
        width: 824px;
        height: 744px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    .temp2 {
        width: 388px;
        height: 348px;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(12px);
        border-radius: 48px;
        color: white;
        padding: 46px 24px 0 24px;
        margin: 12px;
    }

    .rule {
        font-size: 32px;
        font-weight: 600;
        margin: 24px 0;
    }

    .desc {
        font-size: 18px;
    }

    #qwertyLogo {
        width: 116px;
    }

    #text {
        display: none;
    }
</style>