function gs(key){try{return JSON.parse(localStorage.getItem(key)||'{}')}catch(e){return{}}}
function ss(key,s){localStorage.setItem(key,JSON.stringify(s))}
function getChk(key,sid,si,idx,f){var v=gs(key)[sid+'_'+si+'_'+idx+'_'+f];return v!==undefined?v:null}
function setChk(key,sid,si,idx,f,v){var s=gs(key);s[sid+'_'+si+'_'+idx+'_'+f]=v;ss(key,s)}

function calcSubjectFixed(key,subj){
  var total=0,done=0;
  subj.sections.forEach(function(sec,si){
    sec.items.forEach(function(item,idx){
      ['lec','anki'].forEach(function(f){
        total++;
        var v=getChk(key,subj.id,si,idx,f);
        var def=(f==='lec'?item.lec:item.anki);
        if(v!==null?v:def) done++;
      });
    });
  });
  return{pct:total?Math.round(done/total*100):0,done:done,total:total};
}

function calcOverall(key,subjects){
  var total=0,done=0;
  subjects.forEach(function(s){
    var r=calcSubjectFixed(key,s);total+=r.total;done+=r.done;
  });
  return{pct:total?Math.round(done/total*100):0,done:done,total:total};
}

function refreshOverall(key,subjects){
  var r=calcOverall(key,subjects);
  document.getElementById('overall-pct').textContent=r.pct+'%';
  document.getElementById('overall-bar').style.width=r.pct+'%';
  document.getElementById('overall-label').textContent=r.done+' of '+r.total+' items checked';
}

function refreshSubject(key,subjects,sid){
  var subj=null;
  for(var i=0;i<subjects.length;i++){if(subjects[i].id===sid){subj=subjects[i];break;}}
  if(!subj) return;
  var r=calcSubjectFixed(key,subj);
  document.getElementById('pct-'+sid).textContent=r.pct+'%';
  document.getElementById('bar-'+sid).style.width=r.pct+'%';
}

function renderItem(key,subj,si,item,idx){
  var lecOn=(getChk(key,subj.id,si,idx,'lec')!==null?getChk(key,subj.id,si,idx,'lec'):item.lec);
  var ankiOn=(getChk(key,subj.id,si,idx,'anki')!==null?getChk(key,subj.id,si,idx,'anki'):item.anki);
  var dur=item.dur?'<span class="t-duration">'+item.dur+'</span>':'';
  return '<div class="t-item">'
    +'<span class="t-name">'+item.n+'</span>'+dur
    +'<div class="check-grp">'
    +'<div class="check-col"><span class="check-lbl">Lec</span>'
    +'<div class="chk'+(lecOn?' on':'')+'" data-sid="'+subj.id+'" data-si="'+si+'" data-idx="'+idx+'" data-f="lec" onclick="handleTog(this)"></div></div>'
    +'<div class="check-col"><span class="check-lbl">Anki</span>'
    +'<div class="chk'+(ankiOn?' on':'')+'" data-sid="'+subj.id+'" data-si="'+si+'" data-idx="'+idx+'" data-f="anki" onclick="handleTog(this)"></div></div>'
    +'</div></div>';
}

function secAllOn(key,subjects,sid,si,f){
  var subj=null;
  for(var i=0;i<subjects.length;i++){if(subjects[i].id===sid){subj=subjects[i];break;}}
  if(!subj) return false;
  var sec=subj.sections[si];
  for(var idx=0;idx<sec.items.length;idx++){
    var v=getChk(key,sid,si,idx,f);
    var def=(f==='lec'?sec.items[idx].lec:sec.items[idx].anki);
    if(!(v!==null?v:def)) return false;
  }
  return true;
}

function renderSection(key,subjects,subj,si,sec){
  var title=sec.title?'<div class="sub-section-title">'+sec.title+'</div>':'';
  var allLec=secAllOn(key,subjects,subj.id,si,'lec');
  var allAnki=secAllOn(key,subjects,subj.id,si,'anki');
  var checkAll='<div class="check-all-bar"><div class="check-all-spacer"></div>'
    +'<div class="check-grp">'
    +'<div class="check-col"><span class="check-lbl">Lec</span>'
    +'<div class="chk check-all'+(allLec?' on':'')+'" id="call-lec-'+subj.id+'-'+si+'"'
    +' data-sid="'+subj.id+'" data-si="'+si+'" data-f="lec" onclick="handleTogAll(this)"></div></div>'
    +'<div class="check-col"><span class="check-lbl">Anki</span>'
    +'<div class="chk check-all'+(allAnki?' on':'')+'" id="call-anki-'+subj.id+'-'+si+'"'
    +' data-sid="'+subj.id+'" data-si="'+si+'" data-f="anki" onclick="handleTogAll(this)"></div></div>'
    +'</div></div>';
  var items='';
  sec.items.forEach(function(item,idx){items+=renderItem(key,subj,si,item,idx);});
  return '<div class="sub-section">'+title+checkAll+items+'</div>';
}

function buildAll(key,subjects){
  var html='';
  subjects.forEach(function(subj){
    var r=calcSubjectFixed(key,subj);
    var body='';
    subj.sections.forEach(function(sec,si){body+=renderSection(key,subjects,subj,si,sec);});
    var durHtml=subj.dur?'<span class="subject-dur">&#9200; '+subj.dur+'</span>':'';
    html+='<div class="subject-block" id="sb-'+subj.id+'">'
      +'<div class="subject-header" onclick="toggleSubject(\''+subj.id+'\')">'
      +'<span class="subject-title">'+subj.title+'</span>'
      +'<div class="subject-meta">'+durHtml
      +'<div class="subj-bar-wrap"><div class="subj-bar-fill" id="bar-'+subj.id+'" style="width:'+r.pct+'%"></div></div>'
      +'<span class="subject-pct" id="pct-'+subj.id+'">'+r.pct+'%</span>'
      +'<span class="subject-chevron">&#9660;</span>'
      +'</div></div>'
      +'<div class="subject-body">'+body+'</div>'
      +'</div>';
  });
  document.getElementById('subjects').innerHTML=html;
}

function toggleSubject(id){document.getElementById('sb-'+id).classList.toggle('open');}

function handleTog(el){
  var sid=el.getAttribute('data-sid');
  var si=parseInt(el.getAttribute('data-si'));
  var idx=parseInt(el.getAttribute('data-idx'));
  var f=el.getAttribute('data-f');
  var on=!el.classList.contains('on');
  el.classList.toggle('on',on);
  setChk(TRACKER_KEY,sid,si,idx,f,on);
  var allOn=secAllOn(TRACKER_KEY,SUBJECTS,sid,si,f);
  var allEl=document.getElementById('call-'+f+'-'+sid+'-'+si);
  if(allEl) allEl.classList.toggle('on',allOn);
  refreshSubject(TRACKER_KEY,SUBJECTS,sid);
  refreshOverall(TRACKER_KEY,SUBJECTS);
}

function handleTogAll(el){
  var sid=el.getAttribute('data-sid');
  var si=parseInt(el.getAttribute('data-si'));
  var f=el.getAttribute('data-f');
  var on=!el.classList.contains('on');
  el.classList.toggle('on',on);
  var subj=null;
  for(var i=0;i<SUBJECTS.length;i++){if(SUBJECTS[i].id===sid){subj=SUBJECTS[i];break;}}
  if(!subj) return;
  var sec=subj.sections[si];
  sec.items.forEach(function(item,idx){
    setChk(TRACKER_KEY,sid,si,idx,f,on);
    var allEls=document.querySelectorAll('[data-sid="'+sid+'"][data-si="'+si+'"][data-f="'+f+'"][data-idx="'+idx+'"]');
    allEls.forEach(function(chk){chk.classList.toggle('on',on);});
  });
  refreshSubject(TRACKER_KEY,SUBJECTS,sid);
  refreshOverall(TRACKER_KEY,SUBJECTS);
}

function initStorage(key,subjects){
  var state=gs(key); var dirty=false;
  subjects.forEach(function(subj){
    subj.sections.forEach(function(sec,si){
      sec.items.forEach(function(item,idx){
        ['lec','anki'].forEach(function(f){
          var k=subj.id+'_'+si+'_'+idx+'_'+f;
          if(!(k in state)){state[k]=false;dirty=true;}
        });
      });
    });
  });
  if(dirty) ss(key,state);
}

function initTracker(){
  initStorage(TRACKER_KEY,SUBJECTS);
  buildAll(TRACKER_KEY,SUBJECTS);
  refreshOverall(TRACKER_KEY,SUBJECTS);
}
