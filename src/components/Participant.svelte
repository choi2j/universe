<script>
    export let jobCode;
    /**
	 * @type {string}
	 */
    let job;
    if (jobCode == 1) {
        job = "Directed";
    } else if (jobCode == 2) {
        job = "Developed";
    } else if (jobCode == 3) {
        job = "Designed";
    }
    /**
	 * @type {string}
	 */
    export let name;
    import circ from "$lib/assets/props/whiteCircle.svg";
</script>

<div>
    <img src={circ} alt="circle">
    <p>{job} by {name}</p>
</div>

<style>
    p {
        color: white;
        font-size: 24px;
        display: inline;
    }

    img {
        display: inline;
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 270px;
    }
</style>
