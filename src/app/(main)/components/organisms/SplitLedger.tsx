import { WORKS } from '@/constants/works';

/**
 * 여섯 쌍이 막을 0.16씩 나눠 갖는다. 램프는 창의 12%라 고원이 창의 3/4다.
 * 빠르게 들어와 오래 머물고 빠르게 나간다. 첫 쌍은 greet, 마지막 쌍은 막이 끝나기 전에 꺼진다.
 */
const cueFor = (index: number) => {
	const from = index * 0.16;
	const to = Math.min(from + 0.2, 1);

	return `${from.toFixed(2)} ${to.toFixed(2)} ${index === 0 ? 0 : 0.12} 0.12`;
};

const tallyAt = (index: number) => (index * 0.16 + 0.03).toFixed(2);

const hostOf = (href: string) => href.replace(/^https?:\/\//, '');

/**
 * 2막 · 장부. 왼쪽에 "없어서"가 한 줄씩, 오른쪽엔 도구 여섯 이름이 장부처럼 늘 서 있고
 * 차례로 하나씩 켜진다. 켜진 것 아래에 스택과 저장소가 붙는다. 켜질 때 선에 획이 하나 그어진다.
 */
export const SplitLedger = () => {
	return (
		<section className="home-act home-ledger" data-sc-act="pin" data-sc-span="4.2" data-home-act="ledger">
			<div className="sc-stage home-stage" data-sc-stage="">
				<div className="home-half home-half--paper">
					<h2 className="sr-only">없어서 만든 도구</h2>
					<div className="home-slot home-slot--paper">
						{WORKS.map((work, index) => (
							<p key={work.name} className="home-void" data-sc-cue={cueFor(index)}>
								{work.reason}
							</p>
						))}
					</div>
				</div>

				<div className="home-half home-half--night">
					<ol className="home-ledger__index">
						{WORKS.map((work, index) => (
							<li key={work.name} className="home-ledger__row">
								<span className="home-ledger__dim" aria-hidden>
									{work.name}
								</span>
								<span
									className="home-ledger__lit"
									data-sc-cue={cueFor(index)}
									data-tally-at={tallyAt(index)}
								>
									{work.name}
								</span>
							</li>
						))}
					</ol>
					<div className="home-slot home-slot--night home-ledger__detail">
						{WORKS.map((work, index) => (
							<div key={work.name} className="home-made" data-sc-cue={cueFor(index)}>
								<p className="home-mono">{work.stack}</p>
								<a href={work.href} target="_blank" rel="noreferrer" className="home-link home-mono">
									{hostOf(work.href)}
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
