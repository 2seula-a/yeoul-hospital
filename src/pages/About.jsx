export default function About() {
 return (<main id="main" tabIndex="-1">
<section className="page-intro" aria-labelledby="page-title">
<div className="container page-intro-inner">
<div>
<a className="home-link" href="#/">홈</a>
<p className="eyebrow section-label"><span></span> ABOUT YEOUL</p>
<h1 id="page-title">병원소개</h1>
<p className="page-description">일상의 작은 불편함부터 함께 살피는 여울병원입니다.</p>
</div>
<img className="page-photo photo-about" src={import.meta.env.BASE_URL + "images/about.webp"} alt="나무와 정원이 어우러진 여울병원 건물의 예시 이미지" width="1200" height="600" fetchPriority="high" />
</div>
</section>
<section className="container section page-content prose">
<p className="eyebrow section-label"><span></span> OUR APPROACH</p>
<h2>진료의 시작은<br />이야기를 듣는 일입니다.</h2>
<p className="about-copy">여울병원은 동네에서 자주 마주하는 건강 고민을 살피는 병원입니다. 무엇이 불편한지 충분히 듣고, 진료 과정과 다음에 할 일을 이해하기 쉬운 말로 안내합니다.</p>
<a className="text-link" href="#/guide#first-visit">첫 방문 흐름 살펴보기 <svg aria-hidden="true"><use href="#arrow"></use></svg></a>
</section>
</main>);
}
