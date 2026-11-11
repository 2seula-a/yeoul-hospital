export default function Team() {
 return (<main id="main" tabIndex="-1">
<section className="page-intro" aria-labelledby="page-title">
<div className="container page-intro-inner">
<div>
<a className="home-link" href="#/">홈</a>
<p className="eyebrow section-label"><span></span> OUR MEDICAL TEAM</p>
<h1 id="page-title">의료진 소개</h1>
<p className="page-description">내과·정형외과·가정의학과 의료진을 소개합니다.</p>
</div>
<img className="page-photo photo-team" src={import.meta.env.BASE_URL + "images/team.webp"} alt="밝은 진료 공간에 함께 선 가상의 의료진 세 명" width="1200" height="600" fetchPriority="high" />
</div>
</section>
<section className="container section page-content" aria-labelledby="team-title">
<h2 id="team-title">진료과별 의료진</h2>
<div className="content-grid">
<a className="info content-card clinician-card" href="#/team-internal-medicine" aria-labelledby="internal-medicine-name internal-medicine-cta">
<span className="english">INTERNAL MEDICINE</span>
<h3 id="internal-medicine-name">내과 · 한서윤</h3>
<p>소화기·호흡기 증상과 혈압·혈당을 살피고, 진료 후 관리 방법을 안내합니다.</p>
<span className="clinician-card-cta" id="internal-medicine-cta">의료진 상세 보기 <svg aria-hidden="true"><use href="#arrow"></use></svg></span>
</a>
<a className="info content-card clinician-card" href="#/team-orthopedics" aria-labelledby="orthopedics-name orthopedics-cta">
<span className="english">ORTHOPEDICS</span>
<h3 id="orthopedics-name">정형외과 · 이도현</h3>
<p>목·허리·관절의 불편함과 운동 중 생긴 근골격계 손상을 살핍니다.</p>
<span className="clinician-card-cta" id="orthopedics-cta">의료진 상세 보기 <svg aria-hidden="true"><use href="#arrow"></use></svg></span>
</a>
<a className="info content-card clinician-card" href="#/team-family-medicine" aria-labelledby="family-medicine-name family-medicine-cta">
<span className="english">FAMILY MEDICINE</span>
<h3 id="family-medicine-name">가정의학과 · 정유진</h3>
<p>생활습관과 건강검진 결과를 바탕으로 일상에서 이어갈 건강관리를 상담합니다.</p>
<span className="clinician-card-cta" id="family-medicine-cta">의료진 상세 보기 <svg aria-hidden="true"><use href="#arrow"></use></svg></span>
</a>
</div>
<p className="sample">이미지는 가상의 의료진을 표현한 예시입니다.</p>
</section>
</main>);
}
