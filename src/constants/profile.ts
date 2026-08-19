export const PROFILE = {
	handle: 'devxian96',
	name: '장석현',
	nameEn: 'Seokhyun Jang',
	role: 'Full-Stack Engineer',
	company: 'Cafe24',
	location: 'Gyeonggi-do, Republic of Korea',
	career: '경력 6년 11개월',
	tagline: '없으면 만든다.',
	taglineEn: "If it doesn't exist, I build it.",
	email: 'coolman555@me.com',
	github: 'https://github.com/devxian96',
	linkedin: 'https://www.linkedin.com/in/devxian',
	avatar: '/images/avatar.png',
} as const;

/** 이력서 첫 문단. 이 사람이 무엇을 중요하게 여기는지가 여기 다 있다. */
export const CREDO = [
	'코드는 순간의 결과물이지만 그것이 만드는 경험은 오래 남습니다.',
	'기능을 구현하는 데 그치지 않고 삶 속에 자연스럽게 스며드는 경험을 만들고자 합니다.',
] as const;

export const INTRO = [
	'프레임워크가 없어서 만들었고 라이브러리가 아쉬워서 만들었고',
	'라이브러리 없이도 되는지 궁금해서 클럽을 만들었습니다.',
] as const;

export interface EducationEntry {
	period: string;
	school: string;
	major: string;
}

export const EDUCATION: EducationEntry[] = [
	{ period: '2019.02 — 2022.08', school: '한림대학교', major: '빅데이터학과 졸업' },
	{ period: '2015.02 — 2017.02', school: '여주대학교', major: '컴퓨터정보과 졸업' },
];
