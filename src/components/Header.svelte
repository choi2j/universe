<script>
	import logo from '$lib/assets/universe_logo.svg';
</script>

<div id="header">
	<a href="/">
		<img src={logo} alt="" />
	</a>

	<ul class="nav">
		<li class="item"><a href="/intro">전시회 소개</a></li>
		<li class="item"><a href="/">체험하기</a></li>
		<li class="item"><a href="/card">인증 카드 만들기</a></li>
	</ul>
</div>

<style>
	#header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 0.5rem 12.5rem;
		background: var(--dark);
		position: fixed;
		width: 100%;
		z-index: 10;
	}

	#header .nav {
		list-style-type: none;
		display: flex;
		gap: 3rem;
		margin-left: auto;
	}

	#header .nav .item a {
		color: var(--light);
	}
</style>
