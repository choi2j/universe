<script>
// @ts-nocheck

    import leftArrow from "$lib/assets/leftarrow.svg";
    import rightArrow from "$lib/assets/rightarrow.svg";
    import planetA from "$lib/assets/project/planetA_1.svg";
    import planetB from "$lib/assets/project/planetB_1.svg";
    import planetC from "$lib/assets/project/planetC_1.svg";
    import planetD from "$lib/assets/project/planetD_1.svg";
    import planetE from "$lib/assets/project/planetE_1.svg";
	import Proj from "../../components/Proj.svelte";

    import data from "$lib/projData";
    $: state = 0;
    $: show = 0;
</script>

<div id="planet">
    <div id="togglePlanet">
        <div id="leftArrow"></div>
        <div id=""></div>
        <div id="rightArrow"></div>
    </div>

    <Proj title={data[state].title} desc={data[state].desc} src={data[state].src} team={data[state].team} />
</div>

<style>
    #planet {
        display: flex;
        height: 100%;
        width: 100%;
    }
</style>