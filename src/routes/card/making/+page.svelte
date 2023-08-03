<script>
    import logo from "$lib/assets/universe_logo.svg";
    import barcode from "$lib/assets/card/card_barcode.svg";
    const portraits = import.meta.glob("$lib/assets/portraits/*.svg");
    let name = "Kim Sunrin";
    let job = "Developer";
    let portraitNum = 0;
    /**
	 * @type {any[]}
	 */
    let portraitPaths = [];
    
    for (const modulePath in portraits) {
        portraitPaths.push(modulePath);
    }

    console.log(portraitPaths);
</script>

<div id="makingCard">
    <div id="centerContents">
        <div id="sample" class="card">
            <div class="card-bg" />
            <div class="card-border" />
            <div>
                <div class="card-inner">
                    <img id="logo" src={logo} alt="logo">
                    <img id="background" src={portraitPaths[portraitNum]} alt="face">
                    <div id="name">{name}</div>
                    <div id="job">{job}</div>
                    <img id="barcode" src={barcode} alt="barcode">
                    <div id="date">2023.09.05</div>
                </div>
            </div>
            
        </div>

        <div id="inputs">
            <div class="inp">
                <div class="t18">이름 <span class="t12">영어로 입력해주세요.</span></div>
                <input type="text" placeholder="Kim Sunrin" bind:value={name}>
            </div>
            <div class="inp">
                <div class="t18">직무<span class="t12">영어로 입력해주세요.</span></div>
                <input type="text" placeholder="Web Developer" bind:value={job}>
            </div>
            
            
        </div>
    </div>
    
    <a href="card/result" class="btn">
		<div class="btn-bg" />
		<div class="btn-border" />
		<div class="btn-text">인증 카드 받기</div>
	</a>
</div>

<style>
    div {
        color: white;
    }

    #centerContents {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
    }

    #makingCard {
        height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
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
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 38px 28px;
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
		border-radius: 60rem;
		grid-column: 1/2;
		grid-row: 1/2;
		z-index: 1;
		background-color: #ffffff33;
	}

	.card-border {
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

    .card-inner {
        height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
    }

    #inputs {
        display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
        position: relative;
        width: 502px;
        height: 560px;

        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(12px);
        /* Note: backdrop-filter has minimal browser support */
        border-radius: 32px;
        margin-left: 48px;
    }

    .inp {
        width: 390px;
    }

    .t12 {
        font-size: 12px;
    }

    .t18 {
        font-size: 18px;
    }

    input {
        width: 100%;
        height: 42px;
        border: none;
        border-radius: 8px;
        padding: 14px;
    }
</style>