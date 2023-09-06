<script>
	import '$lib/style.css';
	import Header from '../../components/Header.svelte';

	import moto from '$lib/assets/home/universe_moto.png';
	import httu from '$lib/assets/howToTravelUniversum.svg';

	import screen from '$lib/assets/intro/a.svg';
	import rocket from '$lib/assets/intro/b.svg';
	import pen from '$lib/assets/intro/c.svg';
	import flag from '$lib/assets/intro/d.svg';

	import logo from '$lib/assets/home/universe_qwerty.png';

	import bg from '$lib/assets/background5.png';
</script>

<Header />
<div class="background"/>

<div id="intro" style={`background-image: url(${bg})`}>
	<img src={moto} alt="moto" class="moto" />
	<p class="text">
		유니버스는 웹 개발 동아리 QWERTY의 2023년 동아리 전시회에요.<br />
		유니버스 모드에선 실제 우주의 행성을 방문하는것 처럼 만들었어요.<br />
		QWERTY의 부원들이 방학동안 열심히 준비한 웹 페이지를<br />
		유니버스만의 아름다운 우주속에서 관람해주세요.<br />
	</p>
	<img src={httu} alt="httu" class="httu" />
	<div class="rules">
		<div class="rule">
			<img src={screen} alt="screen" class="icon" />
			<p class="title">웹사이트 구경하기</p>
			<p class="desc">
				실제로 우주를 탐험하듯이 유니버스를 관람해주세요. 각 웹사이트마다 특별한 이벤트가 준비되어
				있답니다.
			</p>
		</div>

		<div class="rule">
			<img src={rocket} alt="rocket" class="icon" />
			<p class="title">유니버스 카드 만들기</p>
			<p class="desc">유니버스 카드를 만들어 유니버스에서의 추억을 간직해주세요.</p>
		</div>

		<div class="rule">
			<img src={pen} alt="pen" class="icon" />
			<p class="title">포토존 촬영하기</p>
			<p class="desc">
				아름다운 우주에서 사진을 찍어보세요. 포토존에서 유니버스 특별 쿼티네컷이 준비돼 있어요.
			</p>
		</div>

		<div class="rule">
			<img src={flag} alt="flag" class="icon" />
			<p class="title">깃발 꽂아 흔적 남기기</p>
			<p class="desc">
				이 행성에 맘에 들었다면 깃발을 꽂아주세요. 깃발을 꽂아 인상적인 행성을 알려주세요.
			</p>
		</div>
	</div>

	<img src={logo} alt="logo" class="logo" />
</div>

<style scoped>
	.background {
		height: 100vh;
		width: 100%;
		position: fixed;
		z-index: -10;
		background: #070813;
	}

	/* Intro */
	#intro {
		height: fit-content;
		width: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10rem;
		padding: 5rem;
	}

	.moto {
		height: 15rem;
		width: fit-content;
	}

	.text {
		font-size: 1.3rem;
		font-weight: 500;
		text-align: center;
		color: #fff;
	}

	.httu {
		height: 5rem;
	}

	.rules {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 2rem;
	}

	.rule {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 4rem 2rem;
		border-radius: 3rem;
		background: #ffffff33;
		backdrop-filter: blur(1rem);
		aspect-ratio: 1/1;
		max-width: 28rem;
		gap: 1rem;
	}

	.icon {
		height: 8rem;
	}

	.title {
		font-size: 2rem;
		font-weight: 700;
		color: #fff;
	}

	.desc {
		font-size: 1.2rem;
		font-weight: 400;
		color: #fff;
		word-break: keep-all;
	}

	.logo {
		height: 5rem;
	}
</style>
