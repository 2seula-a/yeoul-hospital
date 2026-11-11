export default function Guide() {
 return (<main id="main" tabIndex="-1">
<section className="container section visit guide" id="visit">
<a className="home-link" href="#/">홈</a>
<p className="eyebrow section-label"><span></span> VISIT GUIDE</p>
<h1>이용안내</h1>
<p className="page-description">진료시간과 첫 방문 절차를 확인해 보세요.</p>
<div className="visit-grid">
<article className="info" id="hours"><svg aria-hidden="true"><use href="#clock"></use></svg><h3>진료시간</h3><dl><div><dt>월–금</dt><dd>09:00–18:00</dd></div><div><dt>토요일</dt><dd>09:00–13:00</dd></div><div><dt>평일 점심시간</dt><dd>13:00–14:00</dd></div><div><dt>일요일·공휴일</dt><dd>휴진</dd></div></dl></article>
<article className="info" id="directions"><svg aria-hidden="true"><use href="#pin"></use></svg><h3>오시는 길</h3><dl><div><dt>지하철</dt><dd>여울역 2번 출구에서 도보 5분</dd></div><div><dt>버스</dt><dd>여울공원 정류장 하차</dd></div><div><dt>주차</dt><dd>병원 건물 지하 1층</dd></div></dl><p className="sample">역명과 교통 정보는 데모용 예시입니다.</p></article>
</div>
<div className="first-visit" id="first-visit">
<h3>처음 오시나요?</h3>
<ol><li><span>01</span><div><b>접수</b><p>1층 안내 데스크에서 방문을 접수합니다.</p></div></li><li><span>02</span><div><b>진료</b><p>안내받은 진료실 앞에서 순서를 기다립니다.</p></div></li><li><span>03</span><div><b>수납 및 안내</b><p>진료 후 수납과 다음 방문 안내를 받습니다.</p></div></li></ol>
</div>
</section>
</main>);
}
