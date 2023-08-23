<script>
    import Parts from "../../../components/Participant.svelte";
    import icon from "$lib/assets/project/icon1.svg";
    import leftArrow from "$lib/assets/leftarrow.svg";
    import flag from "$lib/assets/project/flag.svg"
</script>

<div id="page">
    <a href="../"><img src={leftArrow} alt="back"></a>
    <img src={icon} alt="icon" id="icon">
    <div id="desc">
        <p class="text-big">Bucket</p>
        <p class="text-small">Awesome Description Here</p>
    </div>
    
    <div id="part">
        <Parts jobCode=1 name="최재원"></Parts>
        <Parts jobCode=2 name="김정우"></Parts>
        <Parts jobCode=3 name="Jimin"></Parts>
    </div>

    <div id="buttons">
        <a href="team1page" class="btn">
            <div class="btn-bg" />
            <div class="btn-border" />
            <div class="btn-text">확인해보기</div>
        </a>
        <button>
            <img src={flag} alt="flag">
        </button>
    </div>
</div>

<style>
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
</style>