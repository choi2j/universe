<script>
// @ts-nocheck

	export let title;
	export let desc;
	export let src;
	export let team;
</script>

<div class="proj">
	<div class="info">
		<p class="title">{title}</p>
		<p class="desc">{desc}</p>
		{#each team as a}
			<p class="cont">{a.role} by {a.name}</p>
		{/each}
	</div>
	<div class="img">
		<img {src} alt="" />
	</div>
</div>
