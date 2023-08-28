<script>
// @ts-nocheck

    import leftArrow from "$lib/assets/leftarrow.svg";
    import rightArrow from "$lib/assets/rightarrow.svg";
	import Proj from "../../components/Proj.svelte";

    import data from "$lib/projData";
    $: state = 0;
    $: show = 0;

    function toggleProj() {
        // let target = document.querySelector('.comp');
        // let collateralTarget = document.querySelector('.back');


        let target = document.querySelector('#comp').style.display;
        let collateralTarget = document.querySelector('#back').style.zIndex;

        console.log(target);
        console.log(collateralTarget);
        target = 'none';
        collateralTarget = 0;

    }
</script>

<div id="planet">
    <button id="back" on:click={() => {toggleProj()}}>
        <img src={leftArrow} alt="back">
    </button>
    <div id="togglePlanet">
        <div id="leftArrow"></div>
        <div id=""></div>
        <div id="rightArrow"></div>
    </div>
    <div id="comp">
        <Proj title={data[state].title} desc={data[state].desc} src={data[state].src} team={data[state].team} />
    </div>
    
</div>

<style>
    #planet {
        display: flex;
        height: 100%;
        width: 100%;
    }

    #comp {
        height: 100%;
        width: 100%;
        display: flex;
    }

    #back {
        
        position: fixed;
        left: 12.5rem;
        top: 6.5rem;
        z-index: 1;
    }

    button {
		border: none;
		background: none;
	}
</style>


