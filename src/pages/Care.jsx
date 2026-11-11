export default function Care() {
 return (<main id="main" tabIndex="-1">
<section className="page-intro" aria-labelledby="page-title">
<div className="container page-intro-inner">
<div>
<a className="home-link" href="#/">홈</a>
<p className="eyebrow section-label"><span></span> OUR DEPARTMENTS</p>
<h1 id="page-title">진료과목</h1>
<p className="page-description">일상에서 자주 겪는 건강 고민을 진료과별로 확인해 보세요.</p>
</div>
<img className="page-photo photo-care" src={import.meta.env.BASE_URL + "images/care.webp"} alt="진료실에서 환자의 이야기를 듣는 의료진" width="1200" height="600" fetchPriority="high" />
</div>
</section>
<section className="container section page-content" aria-labelledby="care-title">
<h2 id="care-title">진료과별 주요 진료</h2>
<div className="care-grid">
<details className="department">
<summary><div className="card-top"><svg aria-hidden="true"><use href="#heart"></use></svg><small>01</small></div><span className="english">INTERNAL MEDICINE</span><h3>내과</h3><p>일상 속 몸의 변화와 만성질환을 살핍니다.</p><span className="details-label"><span className="show">주요 진료 보기</span><span className="hide">주요 진료 닫기</span><i aria-hidden="true"></i></span></summary>
<div className="details-body"><ul><li>소화기·호흡기 증상 상담</li><li>혈압·혈당 및 만성질환 관리</li></ul></div>
</details>
<details className="department">
<summary><div className="card-top"><svg aria-hidden="true"><use href="#bone"></use></svg><small>02</small></div><span className="english">ORTHOPEDICS</span><h3>정형외과</h3><p>관절과 근육의 불편함을 살핍니다.</p><span className="details-label"><span className="show">주요 진료 보기</span><span className="hide">주요 진료 닫기</span><i aria-hidden="true"></i></span></summary>
<div className="details-body"><ul><li>목·허리·관절 통증 상담</li><li>운동 중 발생한 근골격계 손상 진료</li></ul></div>
</details>
<details className="department">
<summary><div className="card-top"><svg aria-hidden="true"><use href="#leaf"></use></svg><small>03</small></div><span className="english">FAMILY MEDICINE</span><h3>가정의학과</h3><p>생활습관과 건강관리 계획을 함께 살핍니다.</p><span className="details-label"><span className="show">주요 진료 보기</span><span className="hide">주요 진료 닫기</span><i aria-hidden="true"></i></span></summary>
<div className="details-body"><ul><li>생활습관과 예방접종 상담</li><li>건강검진 결과 상담</li></ul></div>
</details>
</div>
</section>
</main>);
}
