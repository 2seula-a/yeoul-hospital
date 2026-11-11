export default function TeamOrthopedics() {
 return (<main id="main" tabIndex="-1">
<section className="page-intro clinician-intro" aria-labelledby="clinician-name">
<div className="container clinician-layout">
<div className="clinician-bio">
<a className="home-link" href="#/team#team-title">← 의료진 목록</a>
<p className="eyebrow section-label"><span></span> ORTHOPEDICS</p>
<h1 id="clinician-name">이도현</h1>
<p className="clinician-department">정형외과 의료진</p>
<p className="page-description">어떤 자세나 움직임에서 불편함이 생기는지 살피고, 진료 과정과 이후 일상에서 주의할 점을 차근차근 안내합니다.</p>
</div>
<figure className="clinician-photo">
<div className="clinician-portrait portrait-center">
<img src={import.meta.env.BASE_URL + "images/team.webp"} alt="정형외과 이도현 의료진의 가상 프로필 사진" width="1200" height="600" fetchPriority="high" />
</div>
<figcaption className="sample">가상의 의료진입니다.</figcaption>
</figure>
</div>
</section>
<section className="container section page-content" aria-labelledby="specialties-title">
<h2 id="specialties-title">주요 진료 분야</h2>
<ul className="clinician-specialties">
<li>목·허리·관절 통증 상담</li>
<li>운동 중 발생한 근골격계 손상 진료</li>
</ul>
<a className="text-link" href="#/care">전체 진료과목 보기 <svg aria-hidden="true"><use href="#arrow"></use></svg></a>
</section>
</main>);
}
