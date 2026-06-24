export const profile = {
  name: "윤희권",
  role: "UI개발자",
  summary:
    "이커머스, 웹에이전시, 스타트업 경험이 있는 8년+ UI개발자입니다. 웹 접근성, 반응형 디자인, 사용성 개선에 강점을 가지고 사용자 중심의 UI를 구현합니다.",
  keywords: ["근성", "긍정", "신뢰"],
  email: "zzaa0303@nate.com",
  phone: "010-5245-5058",
  location: "서울 ",
  totalExperience: "8년 7개월",
};

export const skills = [
  { name: "HTML5", category: "core" },
  { name: "CSS3", category: "core" },
  { name: "SASS", category: "core" },
  { name: "JavaScript", category: "core" },
  { name: "TypeScript", category: "framework" },
  { name: "React", category: "framework" },
  { name: "Next.js", category: "framework" },
  { name: "Tailwind CSS", category: "framework" },
  { name: "jQuery", category: "framework" },
  { name: "Storybook", category: "tool" },
  { name: "Git", category: "tool" },
  { name: "Webpack", category: "tool" },
  { name: "반응형 웹", category: "specialty" },
  { name: "웹 접근성", category: "specialty" },
  { name: "웹 표준", category: "specialty" },
];

export const experiences = [
  {
    company: "인케이지",
    role: "LMS개발 과장",
    period: "2025.10 ~ 현재",
    duration: "재직 중",
    description:
      "Next.js / TypeScript 기반 LMS 관리자 및 사용자 페이지 프론트엔드 개발. Tailwind CSS 반응형 UI, React 컴포넌트 구조 설계 및 API 연동.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    url: "https://bler.co.kr/",
  },
  {
    company: "에스엘즈",
    role: "DX팀 매니저",
    period: "2025.06 ~ 2025.09",
    duration: "4개월",
    description:
      "React(Next.js), TypeScript 기반 자사 웹 솔루션 UI 개발. Storybook 컴포넌트 문서화, 재사용 가능한 컴포넌트 구조 설계.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Storybook"],
  },
  {
    company: "디아이웨어",
    role: "CJ더마켓 식품제조물류파트 대리",
    period: "2022.03 ~ 2024.10",
    duration: "2년 8개월",
    description:
      "CJ더마켓 운영/구축/개선 업무. 쿠폰 고도화, 상품 상세 페이지 개편, GNB 개선, 프로모션 페이지 구축 및 QA.",
    tech: ["HTML", "CSS", "JavaScript", "GitLab"],
  },
  {
    company: "와이즈버즈",
    role: "프론트엔드개발팀 주임연구원",
    period: "2017.12 ~ 2018.09",
    duration: "10개월",
    description:
      "Adwitt2 솔루션 신규 구축(React SPA). Sass 스타일링, Webpack 환경 세팅, API 연동 및 커스터마이징.",
    tech: ["React", "Sass", "Webpack"],
  },
  {
    company: "티켓몬스터",
    role: "표준화개발유닛 팀원",
    period: "2016.02 ~ 2017.09",
    duration: "1년 8개월",
    description:
      "TMON PLUS 반응형 개편, 통합 파트너센터 개편, 시즌별 프로모션 페이지 다수 제작.",
    tech: ["HTML", "Sass", "JavaScript", "Git"],
  },
  {
    company: "PCN",
    role: "UI기술팀",
    period: "2015.08 ~ 2015.12",
    duration: "5개월",
    description:
      "서울삼성병원 영문 모바일 웹, 금융감독원 비교공시통합시스템(WCAG), 한국관광공사 일본어 사이트 구축.",
    tech: ["HTML", "CSS", "JavaScript", "웹접근성"],
  },
  {
    company: "KBS미디어",
    role: "국제방송팀",
    period: "2013.09 ~ 2015.07",
    duration: "1년 11개월",
    description:
      "KBS World 사이트 구축·유지보수, 11개 언어 프로모션 페이지 UI 개발, WorldTV 온에어 리뉴얼.",
    tech: ["HTML", "CSS", "JavaScript", "반응형웹"],
    url: "http://world.kbs.co.kr/service/index.htm?lang=e",
  },
];

export const projects = [
  {
    title: "Bler LMS",
    company: "인케이지",
    description:
      "Next.js / TypeScript 기반 LMS 관리자 및 사용자 페이지 프론트엔드 개발",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://bler.co.kr/",
  },
  {
    title: "CJ더마켓",
    company: "디아이웨어",
    description:
      "쿠폰 고도화, 상품 상세 페이지 개편, GNB 개선, 프로모션 페이지 구축",
    tech: ["HTML", "CSS", "JavaScript"],
    url:"https://www.cjthemarket.com/"
  },
  {
    title: "Adwitt2",
    company: "와이즈버즈",
    description: "React.js 기반 SPA 광고 솔루션 신규 구축 및 운영",
    tech: ["React", "Sass", "Webpack"],
  },
  {
    title: "TMON ",
    company: "티켓몬스터",
    description: "PC/모바일 통합 반응형 웹 개편 및 파트너센터 UI 개편",
    tech: ["HTML", "Sass", "JavaScript"],
  },
  {
    title: "금융감독원 비교공시",
    company: "PCN",
    description: "WCAG 웹 접근성 준수 공공기관 사이트 리뉴얼",
    tech: ["HTML", "CSS", "웹접근성"],
    url: "http://finlife.fss.or.kr/",
  },
  {
    title: "KBS World",
    company: "KBS미디어",
    description: "11개 언어 글로벌 방송 사이트 구축 및 프로모션 UI 개발",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "http://world.kbs.co.kr/service/index.htm?lang=e",
  },
];

export const education = [
  {
    school: "한국폴리텍Ⅱ(인천)",
    major: "컴퓨터정보",
    period: "2014.03 ~ 2016.02",
    status: "졸업",
  },
  {
    school: "금곡고등학교",
    major: "",
    period: "2007",
    status: "졸업",
  },
];

export const certifications = [
  { name: "G-TELP", issuer: "TELP 한국위원회", date: "2025.09" },
  { name: "한국사능력검정 3급", issuer: "국사편찬위원회", date: "2025.08" },
  { name: "정보기기운용기능사", issuer: "한국산업인력공단", date: "2006.05" },
  { name: "컴퓨터활용능력 3급", issuer: "", date: "" },
];

export const about = {
  intro:
    "저를 세 글자로 표현하자면 근성, 긍정, 신뢰입니다. 이 세 가지 키워드는 제 성격과 일하는 방식을 잘 보여줍니다.",
  traits: [
    {
      title: "근성",
      description:
        "어려운 과제가 주어지더라도 끝까지 해결해내는 집중력과 끈기를 갖고 있습니다. 새로운 환경에도 호기심과 열정으로 빠르게 적응합니다.",
    },
    {
      title: "긍정",
      description:
        "언제나 긍정적인 태도로 팀 내 분위기 메이커 역할을 해왔습니다. 안 되는 상황에서도 해결책을 찾아가는 사고방식으로 협업에서 높은 신뢰를 얻습니다.",
    },
    {
      title: "신뢰",
      description:
        "사람들과의 관계에서 신뢰를 가장 중요한 가치로 여깁니다. 기술자로서뿐 아니라 동료들로부터 신뢰받는 존재가 되어 팀과 조직의 성장에 기여합니다.",
    },
  ],
  philosophy:
    "인터넷 서비스 사용자와의 가장 가까운 기술자라고 생각합니다. 사용자 입장에서 불편하지 않은 UI를 위해 체계적인 기획과 정보가 바탕이 되어야 하며, 협업이 잘 이루어질 수 있는 구조로 작업합니다.",
};
