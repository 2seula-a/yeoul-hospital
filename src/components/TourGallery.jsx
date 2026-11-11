import {useEffect,useState} from "react";
const slides=[
 ["tour-reception.webp","곡선형 나무 카운터가 놓인 병원 안내데스크","안내데스크","안내데스크"],
 ["tour.webp","연한 올리브색 의자와 햇살이 드는 병원 대기실","대기실","대기실"],
 ["tour-internal.webp","상담 책상과 커튼 옆 진찰용 침대가 있는 내과 진료실","내과 진료실","내과"],
 ["tour-ortho.webp","올리브색 조절식 진찰대가 있는 정형외과 진료실","정형외과 진료실","정형외과"],
 ["tour-family.webp","둥근 모서리의 상담 책상과 의자가 놓인 가정의학과 진료실","가정의학과 진료실","가정의학과"]
];
export default function TourGallery(){
 const [current,setCurrent]=useState(0);
 const [playing,setPlaying]=useState(()=>!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
 useEffect(()=>{if(!playing)return;const id=setInterval(()=>{if(!document.hidden)setCurrent(i=>(i+1)%slides.length)},3000);return()=>clearInterval(id)},[playing]);
 return <section className="tour-gallery" aria-label="병원 공간 사진">
  <div id="tour-slides" className="tour-slides" aria-live={playing?"off":"polite"}>
    {slides.map(([file,alt,title],i)=><figure className="tour-slide" key={file} hidden={current!==i}><img className="page-photo" src={import.meta.env.BASE_URL+"images/"+file} alt={alt} width="1200" height="600"/><figcaption>{title}</figcaption></figure>)}
  </div>
  <div className="tour-controls"><button className="tour-autoplay" type="button" onClick={()=>setPlaying(p=>!p)}>{playing?"자동 전환 일시정지":"자동 전환 재생"}</button>
   <div className="tour-selectors" role="group" aria-label="공간 사진 선택">{slides.map(([file,,title,label],i)=><button key={file} type="button" aria-controls="tour-slides" aria-current={current===i?"true":undefined} onClick={()=>setCurrent(i)}>{label}</button>)}</div>
  </div>
 </section>
}
