export default function TeamFamilyMedicine() {
 return (<main id="main" tabIndex="-1">
<section className="page-intro clinician-intro" aria-labelledby="clinician-name">
<div className="container clinician-layout">
<div className="clinician-bio">
<a className="home-link" href="#/team#team-title">← 의료진 목록</a>
<p className="eyebrow section-label"><span></span> FAMILY MEDICINE</p>
<h1 id="clinician-name">정유진</h1>
<p className="clinician-department">가정의학과 의료진</p>
<p className="page-description">검진 결과와 평소 생활습관을 함께 살펴봅니다. 지금 궁금한 건강 문제를 정리하고, 실천할 수 있는 관리 방법을 함께 이야기합니다.</p>
</div>
<figure className="clinician-photo">
<div className="clinician-portrait portrait-right">
<img src={import.meta.env.BASE_URL + "images/team.webp"} alt="가정의학과 정유진 의료진의 가상 프로필 사진" width="1200" height="600" fetchPriority="high" />
</div>
<figcaption className="sample">가상의 의료진입니다.</figcaption>
</figure>
</div>
</section>
<section className="container section page-content" aria-labelledby="specialties-title">
<h2 id="specialties-title">주요 진료 분야</h2>
<ul className="clinician-specialties">
<li>생활습관과 예방접종 상담</li>
<li>건강검진 결과 상담</li>
</ul>
<a className="text-link" href="#/care">전체 진료과목 보기 <svg aria-hidden="true"><use href="#arrow"></use></svg></a>
</section>
</main>);
}
