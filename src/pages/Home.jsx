export default function Home() {
 return (<main className="home-main" id="main" tabIndex="-1">
<section className="hero" aria-labelledby="hero-title">
<div className="container hero-inner">
<p className="eyebrow"><span></span> YEOUL MEDICAL CENTER</p>
<h1 id="hero-title">일상 가까이,<br /><em>여울병원</em></h1>
<p className="hero-copy">작은 불편함을 이야기하는 순간부터<br />다시 일상으로 돌아가는 길까지 함께합니다.</p>
<a className="button primary" href="#/care">진료과목 보기 <svg aria-hidden="true"><use href="#arrow"></use></svg></a>
<div className="hero-index" aria-hidden="true"><i></i> 01 / YEOUL</div>
</div>
</section>
<div className="container shortcuts" aria-label="빠른 안내">
<a href="#/guide#hours"><svg aria-hidden="true"><use href="#clock"></use></svg><span><b>진료시간</b><small>평일 09:00–18:00 · 토요일 09:00–13:00</small></span><svg className="shortcut-arrow" aria-hidden="true"><use href="#arrow"></use></svg></a>
<a href="#/guide#directions"><svg aria-hidden="true"><use href="#pin"></use></svg><span><b>오시는 길</b><small>대중교통과 주차 안내</small></span><svg className="shortcut-arrow" aria-hidden="true"><use href="#arrow"></use></svg></a>
</div>
</main>);
}
