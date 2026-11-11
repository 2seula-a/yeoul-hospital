export default function Notices() {
 return (<main id="main" tabIndex="-1">
<section className="page-intro" aria-labelledby="page-title">
<div className="container page-intro-inner">
<div>
<a className="home-link" href="#/">홈</a>
<p className="eyebrow section-label"><span></span> NOTICES</p>
<h1 id="page-title">공지사항</h1>
<p className="page-description">여울병원의 진료 일정과 이용 관련 소식을 확인해 보세요.</p>
</div>
<img className="page-photo photo-notices" src={import.meta.env.BASE_URL + "images/notices.webp"} alt="안내 데스크 위에 놓인 달력과 올리브색 펜" width="1200" height="600" fetchPriority="high" />
</div>
</section>
<section className="container section page-content" aria-labelledby="notice-title">
<h2 id="notice-title">이용 관련 공지</h2>
<div className="notice-list">
<details className="notice">
<summary><span className="english">진료 일정</span><strong>일요일 및 공휴일 휴진 안내</strong></summary>
<div><p>일요일과 공휴일은 휴진입니다. 평일과 토요일 진료시간은 이용안내에서 확인할 수 있습니다.</p><a className="text-link" href="#/guide#hours">진료시간 확인하기 <svg aria-hidden="true"><use href="#arrow"></use></svg></a></div>
</details>
<details className="notice">
<summary><span className="english">처음 오시는 분</span><strong>첫 방문 접수 및 진료 절차 안내</strong></summary>
<div><p>첫 방문 시 1층 안내 데스크에서 접수한 뒤, 안내받은 진료실 앞에서 순서를 기다려 주세요.</p><a className="text-link" href="#/guide#first-visit">첫 방문 절차 확인하기 <svg aria-hidden="true"><use href="#arrow"></use></svg></a></div>
</details>
</div>
<p className="sample">가상의 병원 사이트에 표시되는 예시 공지입니다.</p>
</section>
</main>);
}
