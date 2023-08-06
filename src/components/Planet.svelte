<script>
// @ts-nocheck

    export let state;
    export let id;
    export let src;
    export let show;

    function stateChange()
    {
        if(id == 0) state = 0;
        if(id == 1) state = 1;
        if(id == 2) state = 2;
        if(id == 3) state = 3;
        if(id == 4) state = 4;
        show = 1;
    }
</script>

<button class="planet" on:click={stateChange}>
    <img {src} alt=""/>
</button>

<style scoped>
    .planet {
        border: none;
        background: none;
        width: fit-content;
    }

    img {
        width: 10rem;
    }
</style>