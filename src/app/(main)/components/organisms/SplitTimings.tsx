import { HOME_TIMINGS } from '@/constants/home';

/**
 * 네 줄이 0.18 간격으로 켜지고 쌓인다. 넷째 줄은 0.54에 켜져 막이 끝날 때까지 0.4를 머문다.
 * 끝에서 꺼지지 않는다(rampOut 0). 꺼지면 빈 무대가 한 화면 밀려 올라간 뒤 다음 무대가 오는데,
 * 그 두 번의 빈 화면이 이음새를 끊는다. 켜진 채 무대와 같이 올라가면 한 컷으로 읽힌다.
 * 고정 헤더가 없어 홀드해도 겹칠 것이 없다. 숫자는 켜진 직후 0.12 동안 차오른다.
 */
const STEP = 0.18;
const cueFor = (index: number) => (index === 0 ? '0 1 0 0' : `${(index * STEP).toFixed(2)} 1 0.06 0`);
const countAt = (index: number) => `${(index * STEP + 0.01).toFixed(2)} ${(index * STEP + 0.13).toFixed(2)}`;

/**
 * 4막 · 시간. 왼쪽엔 그게 무엇이었는지, 오른쪽엔 걸린 시간이 숫자로 차오른다.
 * 숫자는 전부 이력서에서 왔다. 세지 않은 숫자는 없고, 없는 숫자에 카운터를 달지 않는다.
 */
export const SplitTimings = () => {
	return (
		<section className="home-act home-timings" data-sc-act="pin" data-sc-span="3" data-home-act="timings">
			<div className="sc-stage home-stage" data-sc-stage="">
				<div className="home-half home-half--paper">
					<h2 className="sr-only">걸린 시간</h2>
					<ol className="home-timings__list">
						{HOME_TIMINGS.map((timing, index) => (
							<li key={timing.what} className="home-timings__what" data-sc-cue={cueFor(index)}>
								<span className="home-timings__text">{timing.what}</span>
							</li>
						))}
					</ol>
				</div>

				<div className="home-half home-half--night">
					<ol className="home-timings__list" aria-hidden>
						{HOME_TIMINGS.map((timing, index) => (
							<li key={timing.what} className="home-timings__value" data-sc-cue={cueFor(index)}>
								<span className="home-timings__num">
									<span
										className="sc-nums"
										data-sc-count={`0 ${timing.value}`}
										data-sc-count-at={countAt(index)}
									>
										0
									</span>
									<span className="home-timings__unit">{timing.unit}</span>
								</span>
								<i className="home-timings__bar" aria-hidden />
							</li>
						))}
					</ol>
				</div>
			</div>
		</section>
	);
};
