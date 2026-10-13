const observer = new IntersectionObserver((entries)=>{
 entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelector('.menu').addEventListener('click',()=>{
 const links=document.querySelector('.navlinks');
 links.style.display = links.style.display==='flex' ? 'none' : 'flex';
 if(links.style.display==='flex'){
   links.style.position='absolute';links.style.top='68px';links.style.left='4%';links.style.right='4%';
   links.style.flexDirection='column';links.style.background='#fff';links.style.padding='20px';links.style.borderRadius='18px';
   links.style.boxShadow='0 20px 50px rgba(20,30,70,.15)';
 }
});

const authOverlay=document.getElementById('authOverlay');
document.getElementById('loginBtn').addEventListener('click',()=>authOverlay.classList.add('active'));
document.getElementById('closeAuth').addEventListener('click',()=>authOverlay.classList.remove('active'));
document.getElementById('successClose').addEventListener('click',()=>{authOverlay.classList.remove('active');document.getElementById('courses').scrollIntoView({behavior:'smooth'});});
document.getElementById('loginForm').addEventListener('submit',(e)=>{
 e.preventDefault(); document.getElementById('authForm').style.display='none'; document.getElementById('authSuccess').style.display='block';
});
authOverlay.addEventListener('click',(e)=>{if(e.target===authOverlay)authOverlay.classList.remove('active')});

const courseData=[
 {title:"UI/UX Design Masterclass",desc:"Learn the complete UI/UX design process—from user research and wireframes to polished interfaces and prototypes. Build design thinking skills you can use on real projects.",level:"Beginner to Intermediate",duration:"8 weeks",lessons:"24 lessons",cert:"Certificate included",price:"₹1,499",img:"https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=90"},
 {title:"Digital Marketing in 2026",desc:"Build practical digital marketing skills across content, SEO, social media, analytics and paid campaigns. Turn strategy into measurable growth.",level:"Beginner",duration:"6 weeks",lessons:"18 lessons",cert:"Certificate included",price:"₹1,199",img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=90"},
 {title:"Python From Zero to Projects",desc:"Start with Python fundamentals and progress into practical projects that strengthen your programming skills, problem solving and confidence with code.",level:"Beginner",duration:"10 weeks",lessons:"20 lessons",cert:"Certificate included",price:"₹1,699",img:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=90"},
 {title:"Business Strategy Essentials",desc:"Understand customers, competition, positioning, business models and strategic decision-making through clear frameworks and practical examples.",level:"Beginner to Intermediate",duration:"7 weeks",lessons:"16 lessons",cert:"Certificate included",price:"₹1,399",img:"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=90"},
 {title:"Communication & Presentation",desc:"Become clearer and more confident when presenting ideas. Practice storytelling, structure, body language, professional communication and persuasive presentations.",level:"All levels",duration:"5 weeks",lessons:"14 lessons",cert:"Certificate included",price:"₹999",img:"https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=90"},
 {title:"Data Analytics with Excel",desc:"Turn raw spreadsheets into useful insights with formulas, dashboards, data cleaning, visualizations and practical business analysis workflows.",level:"Beginner",duration:"7 weeks",lessons:"17 lessons",cert:"Certificate included",price:"₹1,299",img:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=90"}
];
const courseView=document.getElementById('courseView');
function openCourse(i){
 const c=courseData[i];
 document.getElementById('detailTitle').textContent=c.title;
 document.getElementById('detailDesc').textContent=c.desc;
 document.getElementById('detailImg').src=c.img;
 document.getElementById('detailImg').alt=c.title;
 document.getElementById('detailPrice').textContent=c.price;
 document.getElementById('detailMeta').innerHTML=`<span class="detail-chip">◉ ${c.level}</span><span class="detail-chip">◷ ${c.duration}</span><span class="detail-chip">▣ ${c.lessons}</span><span class="detail-chip">✓ ${c.cert}</span>`;
 courseView.classList.add('active'); document.body.style.overflow='hidden'; window.scrollTo(0,0);
}
document.querySelectorAll('.course[data-course]').forEach(card=>card.addEventListener('click',()=>openCourse(Number(card.dataset.course))));
function closeCourse(){courseView.classList.remove('active');document.body.style.overflow='';document.getElementById('courses').scrollIntoView({behavior:'smooth'});}
document.getElementById('backCourse').addEventListener('click',closeCourse);
document.getElementById('detailEnroll').addEventListener('click',()=>{courseView.classList.remove('active');document.body.style.overflow='';authOverlay.classList.add('active')});
document.getElementById('detailEnroll2').addEventListener('click',()=>{courseView.classList.remove('active');document.body.style.overflow='';authOverlay.classList.add('active')});


const mentorData=[
 {name:"Maya Sharma",role:"Senior Product Designer",qualification:"M.Des — Interaction Design",experience:"9+ years in product & UX design",courses:"4 mentor-led courses",rating:"4.9 ★",bio:"Maya helps learners turn user research into clear, usable digital products. Her mentoring focuses on practical design thinking, interface systems and portfolio-ready case studies.",expertise:["UX Research","Figma","Design Systems","Prototyping"],img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=90"},
 {name:"Arjun Mehra",role:"Software Engineer & Educator",qualification:"M.Tech — Computer Science",experience:"10+ years in software development",courses:"6 mentor-led courses",rating:"4.9 ★",bio:"Arjun teaches programming through practical builds and clear problem-solving. He guides beginners from core concepts into real web and Python projects with professional development habits.",expertise:["Python","Web Development","APIs","Software Engineering"],img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=90"},
 {name:"Neha Kapoor",role:"Growth Marketing Strategist",qualification:"MBA — Marketing & Strategy",experience:"8+ years in digital growth",courses:"3 mentor-led courses",rating:"4.8 ★",bio:"Neha brings campaign strategy, content, analytics and experimentation together. Her sessions help learners connect marketing decisions to measurable business outcomes.",expertise:["Growth Strategy","Content","Performance Marketing","Analytics"],img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=90"},
 {name:"Kabir Rao",role:"Business & Leadership Coach",qualification:"MBA — Business Management",experience:"12+ years in leadership & strategy",courses:"5 mentor-led courses",rating:"4.9 ★",bio:"Kabir works with learners on strategic thinking, communication and leadership. His mentoring uses realistic business situations to strengthen decision-making and team leadership skills.",expertise:["Leadership","Business Strategy","Communication","Decision Making"],img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=90"}
];
const mentorOverlay=document.getElementById('mentorOverlay');
function openMentor(i){
 const m=mentorData[i],img=document.getElementById('mentorProfileImg');
 document.getElementById('mentorProfileName').textContent=m.name;
 document.getElementById('mentorProfileRole').textContent=m.role;
 document.getElementById('mentorProfileBio').textContent=m.bio;
 document.getElementById('mentorQualification').textContent=m.qualification;
 document.getElementById('mentorExperience').textContent=m.experience;
 document.getElementById('mentorCourses').textContent=m.courses;
 document.getElementById('mentorRating').textContent=m.rating;
 document.getElementById('mentorExpertise').innerHTML=m.expertise.map(x=>`<span>${x}</span>`).join('');
 const cardImg=document.querySelector(`.instructor[data-mentor="${i}"] .instructor-img img`);
 const cardSrc=cardImg?.getAttribute('src') || m.img;
 img.alt=m.name+" — "+m.role;
 img.onerror=()=>{img.onerror=null;img.src='data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="500" height="600" viewBox="0 0 500 600"><rect width="500" height="600" fill="#e9ecff"/><circle cx="250" cy="220" r="92" fill="#a9b1e9"/><path d="M75 560c0-110 78-185 175-185s175 75 175 185" fill="#a9b1e9"/><text x="250" y="590" font-size="22" font-family="Arial" text-anchor="middle" fill="#394476">Mentor profile</text></svg>`)};
 img.src=cardImg?.currentSrc || cardSrc;
 mentorOverlay.classList.add('active');mentorOverlay.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
}
function closeMentor(){mentorOverlay.classList.remove('active');mentorOverlay.setAttribute('aria-hidden','true');document.body.style.overflow='';}
document.querySelectorAll('.instructor[data-mentor]').forEach(card=>{
 card.addEventListener('click',()=>openMentor(Number(card.dataset.mentor)));
 card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openMentor(Number(card.dataset.mentor));}});
});
document.getElementById('mentorClose').addEventListener('click',closeMentor);
mentorOverlay.addEventListener('click',e=>{if(e.target===mentorOverlay)closeMentor();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mentorOverlay.classList.contains('active'))closeMentor();});


// Enhanced interactions
const progress=document.getElementById('scrollProgress'), toTop=document.getElementById('toTop');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(h?scrollY/h*100:0)+'%';toTop.classList.toggle('show',scrollY>600)});
toTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
document.querySelectorAll('.faq button').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open')));
document.getElementById('newsletterForm').addEventListener('submit',e=>{e.preventDefault();const b=e.currentTarget.querySelector('button');b.textContent='You’re subscribed ✓';b.disabled=true;});
// Animate numeric stats when visible
const statObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting||entry.target.dataset.done)return;entry.target.dataset.done='1';const el=entry.target.querySelector('strong');const original=el.textContent;const m=original.match(/([0-9]+)(.*)/);if(!m)return;const target=+m[1],suffix=m[2];let start=0;const dur=1100,t0=performance.now();function tick(now){const p=Math.min(1,(now-t0)/dur);el.textContent=Math.floor(target*(1-Math.pow(1-p,3)))+suffix;if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick)}),{threshold:.45});document.querySelectorAll('.stat').forEach(x=>statObserver.observe(x));
// close mobile menu after selection
 document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<=900)document.querySelector('.navlinks').style.display='none'}));


// Custom select menus: reliable in browser previews and on mobile.
(function(){
 const fields=[...document.querySelectorAll('#loginForm .field select')];
 const closeAll=()=>document.querySelectorAll('#loginForm .dropdown-field.open').forEach(f=>{f.classList.remove('open');f.querySelector('.dropdown-toggle').setAttribute('aria-expanded','false')});
 fields.forEach((sel,index)=>{
  const field=sel.closest('.field');field.classList.add('dropdown-field');
  const toggle=document.createElement('button');toggle.type='button';toggle.className='dropdown-toggle';toggle.setAttribute('aria-haspopup','listbox');toggle.setAttribute('aria-expanded','false');toggle.textContent=sel.options[sel.selectedIndex]?.textContent||'Select';
  const choices=document.createElement('div');choices.className='dropdown-options';choices.setAttribute('role','listbox');
  [...sel.options].filter(opt=>opt.value!=='').forEach(opt=>{
   const btn=document.createElement('button');btn.type='button';btn.className='dropdown-option';btn.setAttribute('role','option');btn.textContent=opt.textContent;
   btn.addEventListener('click',()=>{sel.value=opt.value;sel.dispatchEvent(new Event('change',{bubbles:true}));toggle.textContent=opt.textContent;closeAll();toggle.focus()});
   choices.appendChild(btn);
  });
  sel.after(toggle,choices);
  toggle.addEventListener('click',()=>{const wasOpen=field.classList.contains('open');closeAll();if(!wasOpen){field.classList.add('open');toggle.setAttribute('aria-expanded','true')}});
  toggle.addEventListener('keydown',e=>{if(e.key==='ArrowDown'||e.key==='Enter'||e.key===' '){e.preventDefault();field.classList.add('open');toggle.setAttribute('aria-expanded','true');choices.querySelector('button')?.focus()}});
  choices.addEventListener('keydown',e=>{if(e.key==='Escape'){closeAll();toggle.focus()}});
 });
 document.addEventListener('click',e=>{if(!e.target.closest('#loginForm .dropdown-field'))closeAll()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape')closeAll()});
})();
