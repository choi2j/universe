<script>
	import bg4 from "$lib/assets/background4.png";
</script>

<div id="background" style="background-image: url({bg4});">
    <div id="page"></div>
</div>

<style>
    #background {
        height: 100%;
        width: 100%;
        
    }

    #page {
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(50px);
    }
</style>