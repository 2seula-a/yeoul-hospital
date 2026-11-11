import {useEffect,useState} from "react";
import {useLocation} from "react-router-dom";
export default function SiteLayout({children}) {
 const [open,setOpen]=useState(false);
 const location=useLocation();
 useEffect(()=>{setOpen(false);document.documentElement.classList.add("has-js");window.scrollTo(0,0);
  const hash=window.location.hash.split("#")[2]; if(hash) requestAnimationFrame(()=>document.getElementById(hash)?.scrollIntoView());
 },[location.pathname,location.hash]);
 useEffect(()=>{const onKey=e=>{if(e.key==="Escape")setOpen(false)};window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey)},[]);
 return (<><a className="skip" href="#main" onClick={(e)=>{e.preventDefault();document.getElementById("main")?.focus();document.getElementById("main")?.scrollIntoView()}}>본문 바로가기</a><svg className="symbols" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<symbol id="brand-mark" viewBox="0 0 40 40"><path fill="currentColor" stroke="none" d="M20 18C9 18 5 12 5 5c9 0 15 4 15 13Zm2 2C22 9 28 5 35 5c0 9-4 15-13 15Zm-2 2c11 0 15 6 15 13-9 0-15-4-15-13Zm-2-2c0 11-6 15-13 15 0-9 4-15 13-15Z"></path></symbol>
<symbol id="arrow" viewBox="0 0 24 24"><path d="M4 12h15m-6-6 6 6-6 6"></path></symbol>
<symbol id="clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7v5l3 2"></path></symbol>
<symbol id="pin" viewBox="0 0 24 24"><path d="M19 10c0 5-7 10-7 10s-7-5-7-10a7 7 0 1 1 14 0Z"></path><circle cx="12" cy="10" r="2"></circle></symbol>
<symbol id="heart" viewBox="0 0 32 32"><path d="M16 27 5 16a6.5 6.5 0 0 1 9.2-9.2l1.8 1.8 1.8-1.8A6.5 6.5 0 0 1 27 16L16 27Z"></path><path d="M6 15h5l2-4 4 8 2-4h7"></path></symbol>
<symbol id="bone" viewBox="0 0 32 32"><path d="m11 11 10 10c4-2 8 2 5 5-2 2-4 1-5 0-2 2-6 0-5-3L9 16c-3 1-5-3-3-5-1-1-2-3 0-5 3-3 7 1 5 5Z"></path></symbol>
<symbol id="leaf" viewBox="0 0 32 32"><path d="M25 6C11 4 5 10 8 20c10 5 18-1 17-14ZM6 26l13-13M11 21v-6m5 2h5"></path></symbol>
<symbol id="menu-icon" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"></path></symbol>
<symbol id="close" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"></path></symbol>
</svg><header className="header" id="top">
<div className="container header-inner">
<a className="brand" href="#/"><svg aria-hidden="true"><use href="#brand-mark"></use></svg><span>여울병원<small>YEOUL MEDICAL</small></span></a>
<button className="menu-toggle" aria-expanded={open} onClick={() => setOpen(v => !v)} aria-controls="navigation" aria-label={open ? "메뉴 닫기" : "메뉴 열기"}><svg aria-hidden="true"><use href={open ? "#close" : "#menu-icon"}></use></svg></button>
<nav onClick={(e) => { if (e.target.closest("a")) setOpen(false); }} className={open ? "is-open" : ""} id="navigation" aria-label="주 메뉴">
<div className="nav-links">
<a href="#/about">병원소개</a>
<a href="#/team">의료진 소개</a>
<a href="#/tour">병원 둘러보기</a>
<a href="#/care">진료과목</a>
<a href="#/notices">공지사항</a>
</div>
<a className="button header-cta" href="#/guide">이용안내 <svg aria-hidden="true"><use href="#arrow"></use></svg></a>
</nav>
</div>
</header>{children}<footer className="footer">
<div className="container footer-inner">
<a className="brand" href="#/"><svg aria-hidden="true"><use href="#brand-mark"></use></svg><span>여울병원<small>YEOUL MEDICAL</small></span></a>
<p>가상의 병원을 소개하는 데모 웹사이트입니다.</p>
<a className="back-top" href="#top" onClick={(e)=>{e.preventDefault();window.scrollTo({top:0,behavior:"smooth"})}}>맨 위로 ↑</a>
</div>
</footer></>);
}
