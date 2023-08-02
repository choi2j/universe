<script>
    import logo from "$lib/assets/universe_logo.svg";
    import barcode from "$lib/assets/card/card_barcode.svg";
    let name = "";
    let job = "";
</script>

<div id="makingCard">
    <div id="centerContents">
        <div id="sample">
            <img id="logo" src={logo} alt="logo">
            <img id="background" src={logo} alt="face">
            <div id="name">{name}</div>
            <div id="job">{job}</div>
            <img id="barcode" src={barcode} alt="barcode">
            <div id="date">2023.09.05</div>
        </div>
        <div id="inputs">
            <div>이름 <span>영어로 입력해주세요.</span></div>
            <input type="text" placeholder="Kim Sunrin" bind:value={name}>
            <div>직무<span>영어로 입력해주세요.</span></div>
            <input type="text" placeholder="Web Developer" bind:value={job}>
        </div>
    </div>
    
    <div id="button">
        <a href="/result">인증 카드 받기</a>
    </div>
</div>

<style>
    div {
        color: white;
    }
</style>