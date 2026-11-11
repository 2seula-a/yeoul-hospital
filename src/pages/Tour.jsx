import TourGallery from "../components/TourGallery.jsx";
export default function Tour() {
 return (<main id="main" tabIndex="-1">
<section className="page-intro" aria-labelledby="page-title">
<div className="container page-intro-inner">
<div>
<a className="home-link" href="#/">홈</a>
<p className="eyebrow section-label"><span></span> HOSPITAL TOUR</p>
<h1 id="page-title">병원 둘러보기</h1>
<p className="page-description">처음 오시는 분도 편하게 머물 수 있도록 병원 공간을 소개합니다.</p>
</div>
<TourGallery />
</div>
</section>
<section className="container section page-content" aria-labelledby="tour-title">
<h2 id="tour-title">어떤 공간이 있나요?</h2>
<div className="content-grid">
<article className="info content-card"><span className="english">01 / RECEPTION</span><h3>안내 데스크</h3><p>병원에 도착하면 1층 안내 데스크에서 접수하고 진료실 위치를 확인합니다.</p></article>
<article className="info content-card"><span className="english">02 / WAITING AREA</span><h3>대기 공간</h3><p>접수를 마친 뒤 대기 공간에서 진료 순서를 기다립니다.</p></article>
<article className="info content-card"><span className="english">03 / EXAM ROOMS</span><h3>진료실</h3><p>안내받은 진료실에서 의료진과 증상 및 진료 계획을 이야기합니다.</p></article>
</div>
<a className="text-link" href="#/guide#first-visit">첫 방문 절차 확인하기 <svg aria-hidden="true"><use href="#arrow"></use></svg></a>
</section>
</main>);
}
