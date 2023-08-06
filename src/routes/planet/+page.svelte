<script>
    import leftArrow from "$lib/assets/leftarrow.svg";
    import rightArrow from "$lib/assets/rightarrow.svg";
    import planetA from "$lib/assets/project/planetA_1.svg";
    import planetB from "$lib/assets/project/planetB_1.svg";
    import planetC from "$lib/assets/project/planetC_1.svg";
    import planetD from "$lib/assets/project/planetD_1.svg";
    import planetE from "$lib/assets/project/planetE_1.svg";
	import Planet from "../../components/Planet.svelte";
	import Proj from "../../components/Proj.svelte";

    import data from "$lib/projData";
    $: state = 0;
    $: show = 0;
</script>

<div id="planet">
    <Planet src={planetA} bind:state={state} id={0} show={show} />
    <Planet src={planetB} bind:state={state} id={1} show={show} />
    <Planet src={planetC} bind:state={state} id={2} show={show} />
    <Planet src={planetD} bind:state={state} id={3} show={show} />
    <Planet src={planetE} bind:state={state} id={4} show={show} />
    <div id="togglePlanet">
        <div id="leftArrow"></div>
        <div id=""></div>
        <div id="rightArrow"></div>
    </div>

    <Proj title={data[state].title} desc={data[state].desc} src={data[state].src} team={data[state].team}/>
</div>

<style>
    #planet {
        display: flex;
    }
</style>