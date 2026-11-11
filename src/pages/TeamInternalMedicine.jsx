export default function TeamInternalMedicine() {
 return (<main id="main" tabIndex="-1">
<section className="page-intro clinician-intro" aria-labelledby="clinician-name">
<div className="container clinician-layout">
<div className="clinician-bio">
<a className="home-link" href="#/team#team-title">← 의료진 목록</a>
<p className="eyebrow section-label"><span></span> INTERNAL MEDICINE</p>
<h1 id="clinician-name">한서윤</h1>
<p className="clinician-department">내과 의료진</p>
<p className="page-description">증상이 시작된 시점과 평소 생활에서 달라진 점을 함께 살핍니다. 진료 결과와 이후 관리 방법을 일상에서 이해하고 이어갈 수 있도록 설명합니다.</p>
</div>
<figure className="clinician-photo">
<div className="clinician-portrait portrait-left">
<img src={import.meta.env.BASE_URL + "images/team.webp"} alt="내과 한서윤 의료진의 가상 프로필 사진" width="1200" height="600" fetchPriority="high" />
</div>
<figcaption className="sample">가상의 의료진입니다.</figcaption>
</figure>
</div>
</section>
<section className="container section page-content" aria-labelledby="specialties-title">
<h2 id="specialties-title">주요 진료 분야</h2>
<ul className="clinician-specialties">
<li>소화기·호흡기 증상 상담</li>
<li>혈압·혈당 및 만성질환 관리</li>
</ul>
<a className="text-link" href="#/care">전체 진료과목 보기 <svg aria-hidden="true"><use href="#arrow"></use></svg></a>
</section>
</main>);
}
