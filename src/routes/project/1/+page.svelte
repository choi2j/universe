<script>
    import Parts from "../../../components/Participant.svelte";
    import icon from "$lib/assets/project/icon1.svg";
    import leftArrow from "$lib/assets/leftarrow.svg";
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
</style>