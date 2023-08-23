<script>
    import logo from "$lib/assets/universe_logo.svg";
    import barcode from "$lib/assets/card/card_barcode.svg";
    import leftArrow from "$lib/assets/leftarrow.svg";
    import rightArrow from "$lib/assets/rightarrow.svg";
    import bg4 from "$lib/assets/background4.png";
    const portraits = import.meta.glob("$lib/assets/portraits/*.svg");
    const faces = import.meta.glob("$lib/assets/faces/*.svg");
    let name = "Kim Sunrin";
    let job = "Developer";
    let prevNum = 56;
    let nextNum = 8;
    let currNum = 0;
    let selectMode = "head";
    /**
	 * @type {HTMLButtonElement}
	 */
    let head;
    /**
	 * @type {HTMLButtonElement}
	 */
    let clothes;
    /**
	 * @type {any[]}
	 */
    let portraitPaths = [];
    /**
	 * @type {any[]}
	 */
    let facePaths = [];
    
    for (const modulePath in portraits) {
        portraitPaths.push(modulePath);
    }

    for (const modulePath in faces) {
        facePaths.push(modulePath);
    }

    function leftButton() {
        if (selectMode === "head") {
            

            if (currNum < 8) {
                currNum += 56;
            } else {
                currNum -= 8;
            }

            if (currNum - 8 >= 0) {
                prevNum = currNum - 8;
            } else {
                prevNum = currNum + 56;
            }

            if (currNum + 8 < 64) {
                nextNum = currNum + 8;
            } else {
                nextNum = currNum - 56;
            }
        } else if (selectMode == "clothes") {
            if (currNum % 8 == 0) {
                currNum += 7;
            } else {
                currNum--;
            }

            if (currNum % 8 == 0) {
                prevNum = currNum + 7;
            } else {
                prevNum = currNum - 1;
            }

            if (currNum % 8 == 7) {
                nextNum = currNum - 7;
            } else {
                nextNum = currNum + 1
            }
        }
        console.log(`${prevNum},${currNum},${nextNum}`);
    }

    function rightButton() {
        if (selectMode === "head") {
            if (currNum > 55) {
                currNum -= 56;
            } else {
                currNum += 8;
            }

            if (currNum - 8 >= 0) {
                prevNum = currNum - 8;
            } else {
                prevNum = currNum + 56;
            }

            if (currNum + 8 < 64) {
                nextNum = currNum + 8;
            } else {
                nextNum = currNum - 56;
            }
        } else if (selectMode == "clothes") {
            if (currNum % 8 == 7) {
                currNum -= 7;
            } else {
                currNum++;
            }

            if (currNum % 8 == 0) {
                prevNum = currNum + 7;
            } else {
                prevNum = currNum - 1;
            }

            if (currNum % 8 == 7) {
                nextNum = currNum - 7;
            } else {
                nextNum = currNum + 1
            }
        }
        console.log(`${prevNum},${currNum},${nextNum}`);
    }

    function headButton() {
        // @ts-ignore
        head.style.backgroundColor = "rgba(255,255,255,0.8)";
        head.style.color = "#1E1E1E";
        clothes.style.backgroundColor = "rgba(0,0,0,0)";
        clothes.style.color = "#ffffff";
        selectMode = "head";
        if (currNum - 8 < 0) {
            prevNum = currNum + 56;
        } else {
            prevNum = currNum - 8;
        }
        if (currNum + 8 > 63) {
            nextNum = currNum - 56;
        } else {
            nextNum = currNum + 8;
        }
        
        console.log(selectMode);
    }

    function clothesButton () {
        head.style.backgroundColor = "rgba(0,0,0,0)";
        head.style.color = "#ffffff";
        clothes.style.backgroundColor = "rgba(255,255,255,0.8)";
        clothes.style.color = "#1e1e1e";
        selectMode = "clothes";
        console.log(selectMode);

        if (currNum % 8 == 0) {
            prevNum = currNum + 7;
        } else {
            prevNum = currNum - 1;
        }
        if (currNum % 8 == 7) {
            nextNum = currNum - 7;
        } else {
            nextNum = currNum + 1;
        }
    }

</script>

<div id="makingCard" style="background-image: url({bg4});">
    <div id="centerContents">
        <div id="sample" class="card">
            <div class="card-bg">
                <div class="card-inner">
                    <img id="logo" src={logo} alt="logo">
                    <img id="background" src={portraitPaths[currNum]} alt="face">
                    <div id="name">{name}</div>
                    <div id="job">{job}</div>
                    <img id="barcode" src={barcode} alt="barcode">
                    <div id="date">2023.09.15</div>
                </div>
            </div>
            <div class="card-border" />
        </div>

        <div id="inputs">
            <div class="inp">
                <div class="t18 inp-div">이름  <span class="t12">영어로 입력해주세요.</span></div>
                <input type="text" class="t18" placeholder="Kim Sunrin" bind:value={name}>
            </div>
            <div class="inp">
                <div class="t18 inp-div">직무  <span class="t12">영어로 입력해주세요.</span></div>
                <input type="text" class="t18" placeholder="Web Developer" bind:value={job}>
            </div>
            <div id="faceSelect">
                <img src={facePaths[prevNum]} alt="prev">
                <img src={facePaths[currNum]} alt="curr">
                <img src={facePaths[nextNum]} alt="next">
            </div>
            <div id="buttons">
                <button id="leftButton" on:click={() => {leftButton()}}>
                    <img class="arrow" src={leftArrow} alt="leftArrow">
                </button>
                <div id="headToggle">
                    <div id="headToggle-bg">
                        <button class="toggleButton" id="head" bind:this={head} on:click={() => {headButton()}}>머리</button>
                        <div id="temp8"></div>
                        <button class="toggleButton" id="clothes" bind:this={clothes} on:click={() => {clothesButton()}}>상의</button>
                    </div>
                    <div id="headToggle-border"></div>
                </div>
                <button id="rightButton" on:click={() => {rightButton()}}>
                    <img class="arrow" src={rightArrow} alt="rightArrow">
                </button>
            </div>
            
        </div>
    </div>
    
    <a href="/card/result" class="btn">
		<div class="btn-bg" />
		<div class="btn-border" />
		<div class="btn-text">인증 카드 받기</div>
	</a>
</div>

<style>
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

    div {
        color: white;
    }

    button {
        border: none;
        background-color: #00000000;
    }

    #centerContents {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
        margin-bottom: 5rem;
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
        position: fixed;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
        margin-top: 20px;
        top: 950px;
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
        margin: 12px;
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

    #buttons {
        display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
    }

    #headToggle {
        height: 52px;
        width: 168px;
        display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
        box-sizing: border-box;
        margin: 0 32px;
    }

    #headToggle-bg {
        border-radius: 32px;
		grid-column: 1/2;
		grid-row: 1/2;
		z-index: 1;
		background-color: #ffffff33;
        display: flex;
        flex-direction: row;
		align-items: center;
		justify-content: center;
    }

    #headToggle-border {
        grid-column: 1/2;
		grid-row: 1/2;
		z-index: 2;
		border-radius: 32px;
		border: 3px solid transparent;
		background: linear-gradient(-45deg, #8c8aff, #db74ff00, #db74ff00, #db74ff) border-box;
		-webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
        z-index: 0;
    }

    .arrow {
        height: 52px;
        width: 52px;
    }

    .toggleButton {
        width: 56px;
        height: 34px;
        border-radius: 999px;
        font-size: 18px;
        z-index: 1;
    }

    #temp8 {
        width: 8px;
    }

    #head {
        background-color: rgba(255, 255, 255, 0.8);
        color: #1e1e1e;
    }

    #clothes {
        background-color: rgba(0, 0, 0, 0);
        color: #ffffff;
    }

    .inp-div {
        margin-bottom: 12px;
    }

    
</style>