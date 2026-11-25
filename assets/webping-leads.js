(function(){
  var SUPABASE_URL='https://webping.webpeaker.com/supabase';
  var ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlIiwiaWF0IjoxNzkxMTk2MDc5LCJleHAiOjE5NDg4NzYwNzl9.mnBVDOC5OeZprcStrb8h2c7xLUe8ThhPWS50KHc35bc';
  var ICO={ok:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>',err:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>',send:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>'};
  function qs(f,n){return f.querySelector('[name="'+n+'"]')}
  function val(f,n){var e=qs(f,n); return e?String(e.value||'').trim():''}
  async function submit(e){
    e.preventDefault();
    var f=e.currentTarget, btn=f.querySelector('button[type=submit]'), msg=f.querySelector('.wl-msg');
    msg.className='wl-msg'; msg.innerHTML='';
    var data={full_name:val(f,'full_name'), business_name:val(f,'business_name'), email:val(f,'email'), phone:val(f,'phone')||null, company_website:val(f,'company_website')||null, message:val(f,'message'), page_url:location.href, status:'new'};
    if(!data.full_name||!data.business_name||!data.email||!data.message){ msg.className='wl-msg err'; msg.innerHTML=ICO.err+'<span>Please fill full name, business name, email, and message.</span>'; return; }
    btn.disabled=true; var orig=btn.innerHTML; btn.innerHTML='<span class="wl-spin"></span> Sending...';
    try{
      var r=await fetch(SUPABASE_URL+'/rest/v1/webping_leads',{method:'POST',headers:{'apikey':ANON_KEY,'Authorization':'Bearer '+ANON_KEY,'Content-Type':'application/json','Prefer':'return=minimal'},body:JSON.stringify(data)});
      if(!r.ok){ var t=''; try{t=await r.text()}catch(_){} throw new Error(t||('HTTP '+r.status)); }
      f.reset(); msg.className='wl-msg ok'; msg.innerHTML=ICO.ok+'<span><b>Message sent.</b> Our team will get back to you soon.</span>';
    }catch(err){ msg.className='wl-msg err'; msg.innerHTML=ICO.err+'<span>Could not send now. Email <a href="mailto:webping@webpeaker.com">webping@webpeaker.com</a> or <a href="https://wa.me/918696778246" target="_blank">WhatsApp us</a>.</span>'; }
    finally{ btn.disabled=false; btn.innerHTML=orig; }
  }
  function bind(root){ (root||document).querySelectorAll('form.wl-form').forEach(function(f){ if(f.__wl) return; f.__wl=1; f.addEventListener('submit',submit); }); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',function(){bind(document)}); else bind(document);
  window.webpingLeadBind=bind;
})();
