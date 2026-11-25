<?php
ini_set('session.use_strict_mode','1');
ini_set('session.cookie_httponly','1');
ini_set('session.cookie_secure','1');
ini_set('session.cookie_samesite','Lax');
ini_set('session.gc_maxlifetime','7200');
session_name('wpadmin');
session_start();
if(empty($_SESSION['csrf'])) $_SESSION['csrf']=bin2hex(random_bytes(20));
$CSRF=$_SESSION['csrf'];
if($_SERVER['REQUEST_METHOD']==='POST' && (($_POST['csrf']??'')!==($_SESSION['csrf']??''))){ http_response_code(403); exit('Forbidden'); }

$cfg = require __DIR__ . '/../../leads-config.php';
$err = $ok = '';
function h($v){ return htmlspecialchars((string)($v??''),ENT_QUOTES,'UTF-8'); }
function sb($cfg, $method, $path, $body=null, $prefer=''){
  $ch=curl_init(rtrim($cfg['supabase_url'],'/').$path);
  $hdr=['apikey: '.$cfg['service_role_key'],'Authorization: Bearer '.$cfg['service_role_key'],'Content-Type: application/json'];
  if($prefer) $hdr[]='Prefer: '.$prefer;
  $o=[CURLOPT_RETURNTRANSFER=>true,CURLOPT_CUSTOMREQUEST=>$method,CURLOPT_HTTPHEADER=>$hdr];
  if($body!==null) $o[CURLOPT_POSTFIELDS]=json_encode($body);
  curl_setopt_array($ch,$o); $resp=curl_exec($ch); $code=curl_getinfo($ch,CURLINFO_HTTP_CODE); $cerr=curl_error($ch); curl_close($ch);
  return [$code,$resp,$cerr];
}
function slugify($s){ $s=strtolower(trim((string)$s)); $s=preg_replace('/[^a-z0-9]+/','-',$s); return trim($s,'-') ?: ('post-'.time()); }
function admin_rl_file($kind){ $d=__DIR__.'/.state'; if(!is_dir($d)) @mkdir($d,0775,true); return $d.'/'.$kind.'_'.substr(md5($_SERVER['REMOTE_ADDR']??'x'),0,12); }
function admin_fail_add(){ $f=admin_rl_file('fail'); $xs=array_values(array_filter(explode('|',(string)@file_get_contents($f)),'strlen')); $xs[]=(string)time(); if(count($xs)>=5){ file_put_contents(admin_rl_file('lock'),(string)(time()+900)); @unlink($f); return; } file_put_contents($f,implode('|',$xs)); }
function admin_fail_clear(){ @unlink(admin_rl_file('fail')); @unlink(admin_rl_file('lock')); }
function admin_send_headers(){ header('X-Frame-Options: DENY'); header('X-Content-Type-Options: nosniff'); header('Referrer-Policy: no-referrer'); header('X-Robots-Tag: noindex, nofollow'); }
admin_send_headers();
if(isset($_GET['logout'])){ if(($_GET['tk']??'')===$_SESSION['csrf']){ session_unset(); session_destroy(); } header('Location: ./'); exit; }
if(!empty($_SESSION['wp_admin_ok'])){
  if(empty($_SESSION['wp_admin_ua'])) $_SESSION['wp_admin_ua']=hash('sha256',($_SERVER['HTTP_USER_AGENT']??''));
  if(($_SESSION['wp_admin_ua']??'')!==hash('sha256',($_SERVER['HTTP_USER_AGENT']??'')) || (time()-($_SESSION['last_act']??0))>7200){ session_unset(); }
  else $_SESSION['last_act']=time();
}
if(!empty($_SESSION['wp_admin_ok']) === false && $_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['password'])){
  $next = preg_replace('/[^a-zA-Z0-9_=&?\-]/','', (string)($_POST['next'] ?? ($_GET['next'] ?? '')));
  $lockat=(int)@file_get_contents(admin_rl_file('lock'));
  if($lockat > time()){
    $err='Too many failed attempts. Locked until '.date('d M, H:i',$lockat).'.';
  } else {
    $pw=(string)$_POST['password'];
    $valid = (!empty($cfg['admin_password_hash']) && password_verify($pw,(string)$cfg['admin_password_hash']));
    if(!$valid && isset($cfg['admin_password']) && $cfg['admin_password']!==''){ $valid = hash_equals((string)$cfg['admin_password'],$pw); }
    if($valid){ admin_fail_clear(); session_regenerate_id(true); $_SESSION['wp_admin_ok']=1; $_SESSION['wp_admin_ua']=hash('sha256',($_SERVER['HTTP_USER_AGENT']??'')); $_SESSION['last_act']=time(); header('Location: ./'.($next?('?'.ltrim($next,'?')):'')); exit; }
    admin_fail_add();
    $lockat=(int)@file_get_contents(admin_rl_file('lock'));
    $err = ($lockat>time()) ? 'Too many failed attempts. Locked for 15 minutes.' : 'Invalid password';
  }
}
if(empty($_SESSION['wp_admin_ok'])){
  header('Content-Type: text/html; charset=utf-8'); ?>
<!doctype html><html><head><meta charset=utf-8><meta name=viewport content="width=device-width,initial-scale=1"><title>WebPing Admin Login</title><meta name=robots content="noindex,nofollow">
<style>
:root{--bg:#f6f5f2;--card:#fff;--ink:#171717;--sub:#5f5a53;--line:#e5e1d8;--green:#0e8a4d}
*{box-sizing:border-box}body{margin:0;font-family:system-ui,-apple-system,Segoe UI,sans-serif;background:linear-gradient(180deg,#f8f7f3,#f2efe8);min-height:100vh;display:grid;place-items:center;padding:24px;color:var(--ink)}
.login{width:min(420px,100%);background:var(--card);border:1px solid var(--line);border-radius:24px;padding:28px;box-shadow:0 16px 40px rgba(23,23,23,.06)}
.brand{display:flex;align-items:center;gap:12px;margin-bottom:20px}
.logo{width:44px;height:44px;border-radius:14px;background:#171717;color:#fff;display:grid;place-items:center}
.logo svg{width:22px;height:22px}
.brand b{display:block;font-size:1rem}.brand span{display:block;color:var(--sub);font-size:.86rem}
h1{margin:0 0 8px;font-size:1.55rem;letter-spacing:-.02em}p{margin:0 0 20px;color:var(--sub);line-height:1.55;font-size:.95rem}
label{display:block;font-size:.84rem;font-weight:650;margin-bottom:6px}
.field{position:relative}.field svg{position:absolute;left:13px;top:50%;transform:translateY(-50%);width:18px;height:18px;color:#78716c}
input{width:100%;padding:13px 14px 13px 42px;border:1px solid #ddd8d0;border-radius:14px;font:inherit;background:#fdfdfb}
input:focus{outline:none;border-color:rgba(14,138,77,.45);box-shadow:0 0 0 4px rgba(14,138,77,.08);background:#fff}
button{width:100%;margin-top:16px;padding:13px 16px;border:0;border-radius:14px;background:#171717;color:#fff;font:inherit;font-weight:700;cursor:pointer}
button:hover{background:#2a2a2a}
.err{margin:0 0 14px;padding:11px 13px;border-radius:14px;background:#fff5f5;border:1px solid #f0caca;color:#9b2c2c;font-size:.9rem;display:flex;gap:8px;align-items:flex-start}
.err svg{width:18px;height:18px;flex:0 0 auto;margin-top:1px}
</style></head><body><form class=login method=post><input type=hidden name=csrf value="<?=$CSRF?>">
<div class=brand>
  <div class=logo><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
  <div><b>WebPing Admin</b><span>Secure sign in</span></div>
</div>
<h1>Sign in</h1>
<p>Enter your admin password to continue.</p>
<?php $nextParam = $_SERVER["QUERY_STRING"] ?? ""; ?><input type=hidden name=next value="<?=h($nextParam)?>"><?php if($err): ?><div class=err><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg><span><?=h($err)?></span></div><?php endif; ?>
<label>Password</label>
<div class=field><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg><input type=password name=password required autofocus placeholder="Enter password"></div>
<button type=submit>Continue</button>
</form></body></html>
<?php exit; }

$tab = preg_replace('/[^a-z_]/','', $_GET['tab'] ?? 'dashboard');
if(!in_array($tab,['dashboard','leads','blog','blog_edit','disc','disc_edit'],true)) $tab='dashboard';

if($tab==='leads' && isset($_GET['export']) && $_GET['export']==='csv'){
  list($c,$r)=sb($cfg,'GET','/rest/v1/webping_leads?select=*&order=created_at.desc&limit=5000');
  $rows = ($c>=200&&$c<300)?(json_decode($r,true)?:[]):[];
  header('Content-Type: text/csv; charset=utf-8');
  header('Content-Disposition: attachment; filename="webping-leads-'.date('Y-m-d').'.csv"');
  $out=fopen('php://output','w');
  fputcsv($out,['id','created_at','full_name','business_name','email','phone','company_website','message','page_url','status']);
  foreach($rows as $x) fputcsv($out,[$x['id']??'',$x['created_at']??'',$x['full_name']??'',$x['business_name']??'',$x['email']??'',$x['phone']??'',$x['company_website']??'',$x['message']??'',$x['page_url']??'',$x['status']??'']);
  fclose($out); exit;
}


if($_SERVER['REQUEST_METHOD']==='POST' && ($_POST['action']??'')==='lead_bulk_status'){
  $ids = $_POST['ids'] ?? [];
  $st = preg_replace('/[^a-z_]/','', $_POST['bulk_status']??'');
  if(is_array($ids) && in_array($st,['new','contacted','qualified','closed','spam'],true)){
    $n=0;
    foreach($ids as $id){ $id=intval($id); if($id){ sb($cfg,'PATCH','/rest/v1/webping_leads?id=eq.'.$id,['status'=>$st]); $n++; } }
    $ok = $n ? ($n.' lead(s) updated to '.ucfirst($st).'.') : 'No leads selected.';
  }
  $tab='leads';
}

if($_SERVER['REQUEST_METHOD']==='POST' && ($_POST['action']??'')==='lead_status'){
  $id = intval($_POST['id']??0); $st = preg_replace('/[^a-z_]/','', $_POST['status']??'');
  if($id && in_array($st,['new','contacted','qualified','closed','spam'],true)){
    sb($cfg,'PATCH','/rest/v1/webping_leads?id=eq.'.$id,['status'=>$st]); $ok='Lead status updated.';
  }
  $tab='leads';
}

if($_SERVER['REQUEST_METHOD']==='POST' && ($_POST['action']??'')==='blog_delete'){
  $id=intval($_POST['id']??0); if($id){ sb($cfg,'DELETE','/rest/v1/webping_posts?id=eq.'.$id); $ok='Blog post deleted.'; }
  $tab='blog';
}

if($_SERVER['REQUEST_METHOD']==='POST' && ($_POST['action']??'')==='blog_save'){
  $id=intval($_POST['id']??0);
  $title=trim((string)($_POST['title']??''));
  $slug=slugify($_POST['slug']??$title);
  $excerpt=trim((string)($_POST['excerpt']??''));
  $content=trim((string)($_POST['content']??''));
  $author=trim((string)($_POST['author']??'WebPing Team'));
  $status=in_array($_POST['status']??'', ['draft','published'],true)?$_POST['status']:'draft';
  $tags=trim((string)($_POST['tags']??''));
  $seo_title=trim((string)($_POST['seo_title']??''));
  $seo_description=trim((string)($_POST['seo_description']??''));
  $cover=trim((string)($_POST['cover_image_existing']??''));
  if(!empty($_FILES['cover_image']['name']) && is_uploaded_file($_FILES['cover_image']['tmp_name'])){
    $ext=strtolower(pathinfo($_FILES['cover_image']['name'],PATHINFO_EXTENSION));
    if(in_array($ext,['jpg','jpeg','png','gif','webp','svg'],true)){
      $dir=__DIR__.'/../uploads/blog'; if(!is_dir($dir)) @mkdir($dir,0775,true);
      $fn='blog-'.date('Ymd-His').'-'.bin2hex(random_bytes(3)).'.'.$ext;
      if(move_uploaded_file($_FILES['cover_image']['tmp_name'],$dir.'/'.$fn)) $cover='/uploads/blog/'.$fn;
      else $err='Image upload failed (check permissions).';
    } else $err='Unsupported image type.';
  }
  if(!$title || !$content) $err=$err?:'Title and content are required.';
  if(!$err){
    $payload=['title'=>$title,'slug'=>$slug,'excerpt'=>$excerpt,'content'=>$content,'author'=>$author?:'WebPing Team','status'=>$status,'tags'=>$tags,'seo_title'=>$seo_title,'seo_description'=>$seo_description,'updated_at'=>gmdate('c')];
    if($cover) $payload['cover_image']=$cover;
    if($id){ list($c,$r)=sb($cfg,'PATCH','/rest/v1/webping_posts?id=eq.'.$id,$payload,'return=representation'); }
    else { list($c,$r)=sb($cfg,'POST','/rest/v1/webping_posts',$payload,'return=representation'); }
    if($c>=200&&$c<300){ $ok='Blog post saved.'; $tab='blog'; }
    else { $err='Save failed: '.substr($r,0,220); $tab='blog_edit'; $_GET['id']=$id; }
  } else { $tab='blog_edit'; $_GET['id']=$id; }
}
if($_SERVER['REQUEST_METHOD']==='POST' && ($_POST['action']??'')==='disc_save'){
  $id=intval($_POST['id']??0);
  $name=trim((string)($_POST['researcher_name']??''));
  $link=trim((string)($_POST['researcher_link']??''));
  $type=trim((string)($_POST['vuln_type']??''));
  $rep=preg_match('/^\d{4}-\d{2}-\d{2}$/u', $_POST['reported_on']??'') ? $_POST['reported_on'] : date('Y-m-d');
  $summary=trim((string)($_POST['summary']??''));
  $email=trim((string)($_POST['contact_email']??''));
  $pub=isset($_POST['published'])?true:false;
  if(!$name) $err='Researcher name is required.';
  if(!$err){
    $payload=['researcher_name'=>$name,'researcher_link'=>$link,'vuln_type'=>$type,'reported_on'=>$rep,'summary'=>$summary,'contact_email'=>$email,'published'=>$pub,'updated_at'=>gmdate('c')];
    if($id){ list($c,$r)=sb($cfg,'PATCH','/rest/v1/webping_disclosures?id=eq.'.$id,$payload,'return=representation'); }
    else { list($c,$r)=sb($cfg,'POST','/rest/v1/webping_disclosures',$payload,'return=representation'); }
    if($c>=200&&$c<300){ $ok='Entry saved.'; $tab='disc'; }
    else { $err='Save failed: '.substr($r,0,220); $tab='disc'; }
  } else { $tab='disc'; }
}

if($_SERVER['REQUEST_METHOD']==='POST' && ($_POST['action']??'')==='disc_toggle'){
  $id=intval($_POST['id']??0); if($id){ sb($cfg,'PATCH','/rest/v1/webping_disclosures?id=eq.'.$id,['published'=>($_POST['to']==='1'),'updated_at'=>gmdate('c')]); $ok='Entry updated.'; }
  $tab='disc';
}

if($_SERVER['REQUEST_METHOD']==='POST' && ($_POST['action']??'')==='disc_delete'){
  $id=intval($_POST['id']??0); if($id){ sb($cfg,'DELETE','/rest/v1/webping_disclosures?id=eq.'.$id); $ok='Entry deleted.'; }
  $tab='disc';
}

list($lc,$lr)=sb($cfg,'GET','/rest/v1/webping_leads?select=id,created_at,full_name,business_name,email,phone,company_website,message,page_url,status&order=created_at.desc&limit=500');
$leads = ($lc>=200&&$lc<300)?(json_decode($lr,true)?:[]):[];
list($bc,$br)=sb($cfg,'GET','/rest/v1/webping_posts?select=*&order=created_at.desc&limit=200');
$posts = ($bc>=200&&$bc<300)?(json_decode($br,true)?:[]):[];
list($dc,$dr)=sb($cfg,'GET','/rest/v1/webping_disclosures?select=*&order=created_at.desc&limit=200');
$disc = ($dc>=200&&$dc<300)?(json_decode($dr,true)?:[]):[];
$editPost=null;
if($tab==='blog_edit' && !empty($_GET['id'])){
  $eid=intval($_GET['id']); foreach($posts as $p){ if(intval($p['id'])===$eid){ $editPost=$p; break; } }
}
$leadNew = count(array_filter($leads,function($x){return ($x['status']??'new')==='new';}));
$postPub = count(array_filter($posts,function($x){return ($x['status']??'')==='published';}));
header('Content-Type: text/html; charset=utf-8');
?>
<!doctype html><html><head><meta charset=utf-8><meta name=viewport content="width=device-width,initial-scale=1"><title>WebPing Admin</title>
<style>
:root{--bg:#f6f5f2;--card:#fff;--ink:#171717;--sub:#5f5a53;--muted:#78716c;--line:#e5e1d8;--green:#0e8a4d;--mint:#eefaf3;--amber:#b45309;--amberbg:#fff7ed;--red:#b42318;--redbg:#fff5f5}
*{box-sizing:border-box}body{margin:0;font-family:system-ui,-apple-system,Segoe UI,sans-serif;background:var(--bg);color:var(--ink)}
.shell{display:grid;grid-template-columns:240px 1fr;min-height:100vh}
.side{background:#171717;color:#fff;padding:20px 14px;position:sticky;top:0;height:100vh}
.brand{display:flex;align-items:center;gap:10px;font-weight:800;font-size:1rem;margin-bottom:18px}.logo{width:38px;height:38px;border-radius:12px;background:#262626;display:grid;place-items:center}.logo svg{width:19px;height:19px}
.nav a{display:flex;align-items:center;gap:10px;padding:11px 12px;border-radius:12px;color:rgba(255,255,255,.78);text-decoration:none;margin-bottom:5px;font-weight:600;font-size:.92rem}
.nav a svg{width:18px;height:18px;opacity:.9}
.nav a.on,.nav a:hover{background:rgba(255,255,255,.1);color:#fff}
.nav .n{margin-left:auto;background:rgba(255,255,255,.12);padding:2px 8px;border-radius:999px;font-size:.73rem;font-weight:800}
.side-foot{position:absolute;left:14px;right:14px;bottom:14px}.side-foot a{display:block;text-align:center;padding:10px 12px;border-radius:12px;background:rgba(255,255,255,.08);color:#fff;text-decoration:none;font-weight:700;font-size:.9rem}
.main{padding:24px}
.top{display:flex;gap:14px;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;margin-bottom:18px}
.top h1{margin:0;font-size:1.6rem;letter-spacing:-.02em}.top p{margin:4px 0 0;color:var(--sub)}
.actions{display:flex;gap:10px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border-radius:12px;border:1px solid var(--line);background:#fff;color:var(--ink);text-decoration:none;font-weight:700;font-size:.88rem;cursor:pointer}
.btn svg{width:16px;height:16px}
.btn.primary{background:#171717;color:#fff;border-color:#171717}.btn.green{background:var(--green);color:#fff;border-color:var(--green)}
.cards{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-bottom:18px}
.card{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:16px}
.card .ico{width:38px;height:38px;border-radius:12px;background:#f4f3ef;display:grid;place-items:center;margin-bottom:10px}.card .ico svg{width:18px;height:18px;color:#404040}
.card b{display:block;font-size:1.7rem;letter-spacing:-.03em}.card span{color:var(--sub);font-size:.88rem}
.panel{background:var(--card);border:1px solid var(--line);border-radius:20px;overflow:hidden}
.panel-h{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;padding:16px 18px;border-bottom:1px solid var(--line)}
.panel-h h2{margin:0;font-size:1.02rem}.panel-h p{margin:2px 0 0;color:var(--sub);font-size:.86rem}
.filters{display:flex;gap:8px;flex-wrap:wrap}
.chip{padding:7px 11px;border-radius:999px;border:1px solid var(--line);background:#fff;color:var(--ink);text-decoration:none;font-size:.82rem;font-weight:700}
.chip.on{background:#171717;border-color:#171717;color:#fff}
table{width:100%;border-collapse:separate;border-spacing:0}
th,td{padding:12px 14px;border-bottom:1px solid #eeeae2;vertical-align:top;text-align:left;font-size:.88rem}
th{background:#fcfbf9;color:var(--sub);font-size:.74rem;text-transform:uppercase;letter-spacing:.04em;font-weight:800}
tr:last-child td{border-bottom:0}
.muted{color:var(--muted)}.msg{max-width:340px;white-space:pre-wrap;line-height:1.45}
.pill{display:inline-flex;padding:4px 9px;border-radius:999px;font-size:.75rem;font-weight:800;text-transform:capitalize}
.p-new{background:var(--mint);color:var(--green)}.p-contacted{background:#eff6ff;color:#1d4ed8}.p-qualified{background:var(--amberbg);color:var(--amber)}.p-closed{background:#f3f4f6;color:#374151}.p-spam,.p-draft{background:var(--redbg);color:var(--red)}.p-published{background:var(--mint);color:var(--green)}
select,input[type=text],input[type=url],input[type=email],input[type=file],textarea{width:100%;padding:11px 12px;border:1px solid #ddd8d0;border-radius:12px;font:inherit;background:#fdfdfb}
select:focus,input:focus,textarea:focus{outline:none;border-color:rgba(23,23,23,.28);box-shadow:0 0 0 4px rgba(23,23,23,.05);background:#fff}
textarea{min-height:130px;resize:vertical} textarea.big{min-height:320px;font-family:ui-monospace,SFMono-Regular,monospace;font-size:.88rem;line-height:1.55}
.form{padding:18px;display:grid;gap:14px}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
label b{display:block;font-size:.82rem;margin-bottom:6px}
.hint{font-size:.77rem;color:var(--muted);margin-top:5px;line-height:1.45}
.alert{margin-bottom:14px;padding:12px 14px;border-radius:12px;font-size:.9rem}.alert.ok{background:var(--mint);color:#0e6f3f;border:1px solid #c9ead6}.alert.err{background:var(--redbg);color:var(--red);border:1px solid #f0caca}
.row-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.row-actions form{display:inline}.row-actions select{width:auto;padding:6px 8px;border-radius:10px;font-size:.8rem}
.small{padding:6px 10px;border-radius:10px;border:1px solid var(--line);background:#fff;cursor:pointer;font-weight:700;font-size:.78rem;text-decoration:none;color:var(--ink);display:inline-block}
.small.danger{color:var(--red);border-color:#fecaca}
.cover{width:54px;height:40px;object-fit:cover;border-radius:10px;border:1px solid var(--line);background:#f5f5f4}
.empty{padding:28px;color:var(--sub);text-align:center}
@media(max-width:1000px){.shell{grid-template-columns:1fr}.side{position:relative;height:auto}.side-foot{position:static;margin-top:14px}.cards{grid-template-columns:repeat(2,1fr)}}
@media(max-width:700px){.cards,.grid2{grid-template-columns:1fr}.main{padding:14px}table,thead,tbody,tr,th,td{display:block}thead{display:none}td{border:0;padding:8px 14px}td:before{content:attr(data-l);display:block;font-size:.72rem;text-transform:uppercase;color:var(--muted);font-weight:800;margin-bottom:2px}tr{border-bottom:1px solid #eeeae2}}
</style></head><body><div class=shell>
<aside class=side>
  <div class=brand><div class=logo><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg></div><div>WebPing Admin</div></div>
  <nav class=nav>
    <a href="?tab=dashboard" class="<?=$tab==='dashboard'?'on':''?>"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="5" rx="1"/><rect x="13" y="10" width="8" height="11" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/></svg>Dashboard</a>
    <a href="?tab=leads" class="<?=$tab==='leads'?'on':''?>"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>Leads <span class=n><?=count($leads)?></span></a>
    <a href="?tab=blog" class="<?=$tab==='blog'?'on':''?>"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8m8 4H8m2-8H8"/></svg>Blog Posts <span class=n><?=count($posts)?></span></a>
    <a href="?tab=disc" class="<?=$tab==='disc'?'on':''?>"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 21h8m-4-4v4M6 3h12v6a6 6 0 0 1-12 0V3z"/><path d="M6 5H3v2a3 3 0 0 0 3 3M18 5h3v2a3 3 0 0 1-3 3"/></svg>Hall of Fame <span class=n><?=count($disc)?></span></a>
    <a href="?tab=blog_edit" class="<?=$tab==='blog_edit'?'on':''?>"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>Write Blog</a>
    <a href="https://webping.webpeaker.com/" target=_blank><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/></svg>View Website</a>
  </nav>
  <div class=side-foot><a href="?logout=1&tk=<?=$CSRF?>">Log out</a></div>
</aside>
<main class=main>
<?php if($ok): ?><div class="alert ok"><?=h($ok)?></div><?php endif; ?>
<?php if($err): ?><div class="alert err"><?=h($err)?></div><?php endif; ?>

<?php if($tab==='dashboard'): ?>
<div class=top><div><h1>Dashboard</h1><p>Overview of leads and blog content.</p></div><div class=actions><a class="btn green" href="?tab=blog_edit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 5v14m-7-7h14"/></svg>Write Blog Post</a><a class="btn" href="?tab=leads&export=csv"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v12m0 0 4-4m-4 4-4-4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>Export Leads CSV</a></div></div>
<div class=cards>
  <div class=card><div class=ico><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div><b><?=count($leads)?></b><span>Total leads</span></div>
  <div class=card><div class=ico><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div><b><?=$leadNew?></b><span>New leads</span></div>
  <div class=card><div class=ico><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg></div><b><?=count($posts)?></b><span>Blog posts</span></div>
  <div class=card><div class=ico><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12l5 5L20 7"/></svg></div><b><?=$postPub?></b><span>Published posts</span></div>
</div>
<div class=panel><div class=panel-h><div><h2>Recent Leads</h2><p>Latest contact form submissions.</p></div><a class="btn" href="?tab=leads">View all</a></div>
<table><thead><tr><th>Date</th><th>Contact</th><th>Business</th><th>Message</th><th>Status</th></tr></thead><tbody>
<?php foreach(array_slice($leads,0,8) as $r): ?><tr>
<td data-l=Date><?=h(date('d M Y, H:i',strtotime($r['created_at']??'now')))?></td>
<td data-l=Contact><b><?=h($r['full_name']??'')?></b><div class=muted><?=h($r['email']??'')?></div></td>
<td data-l=Business><?=h($r['business_name']??'')?></td>
<td data-l=Message class=msg><?=h(mb_substr((string)($r['message']??''),0,120))?><?=mb_strlen((string)($r['message']??''))>120?'...':''?></td>
<td data-l=Status><span class="pill p-<?=h($r['status']??'new')?>"><?=h($r['status']??'new')?></span></td>
</tr><?php endforeach; if(!$leads): ?><tr><td colspan=5 class=empty>No leads yet.</td></tr><?php endif; ?>
</tbody></table></div>

<?php elseif($tab==='leads'):
  $sf=preg_replace('/[^a-z_]/','',$_GET['status']??'');
  $q=trim((string)($_GET['q']??''));
  $group=preg_replace('/[^a-z]/','',$_GET['group']??'date');
  if(!in_array($group,['date','all'],true)) $group='date';
  $shown=$leads;
  if($sf) $shown=array_values(array_filter($shown,function($x)use($sf){return ($x['status']??'')===$sf;}));
  if($q!==''){
    $ql=strtolower($q);
    $shown=array_values(array_filter($shown,function($x)use($ql){
      $hay=strtolower(($x['full_name']??'').' '.($x['business_name']??'').' '.($x['email']??'').' '.($x['phone']??'').' '.($x['company_website']??'').' '.($x['message']??'').' '.($x['page_url']??''));
      return strpos($hay,$ql)!==false;
    }));
  }
  $groups=[];
  if($group==='date'){
    foreach($shown as $r){ $d=date('Y-m-d',strtotime($r['created_at']??'now')); $groups[$d][]=$r; }
    krsort($groups);
  } else { $groups['all']=$shown; }
  $exportUrl='?tab=leads&export=csv'.($sf?'&status='.urlencode($sf):'').($q!==''?'&q='.urlencode($q):'');
?>
<div class=top><div><h1>Leads</h1><p>Search, group by date, select leads, and update status in bulk.</p></div><div class=actions><a class="btn primary" href="<?=h($exportUrl)?>"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v12m0 0 4-4m-4 4-4-4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>Download CSV</a></div></div>
<div class=panel style="margin-bottom:14px"><div class=panel-h style="display:block">
<form method=get style="display:flex;gap:10px;flex-wrap:wrap;align-items:end">
  <input type=hidden name=tab value=leads>
  <label style="flex:1;min-width:220px"><b>Search leads</b><input type=text name=q value="<?=h($q)?>" placeholder="Name, email, business, phone, message, page..."></label>
  <label style="min-width:160px"><b>Status</b><select name=status><option value="">All statuses</option><?php foreach(['new','contacted','qualified','closed','spam'] as $s): ?><option value="<?=$s?>" <?=$sf===$s?'selected':''?>><?=ucfirst($s)?></option><?php endforeach; ?></select></label>
  <label style="min-width:150px"><b>View</b><select name=group><option value="date" <?=$group==='date'?'selected':''?>>Group by date</option><option value="all" <?=$group==='all'?'selected':''?>>All leads</option></select></label>
  <button class="btn primary" type=submit>Search</button>
  <?php if($q!==''||$sf||$group!=='date'): ?><a class="btn" href="?tab=leads">Reset</a><?php endif; ?>
</form>
</div></div>
<form method=post id="bulkForm"><input type=hidden name=csrf value="<?=$CSRF?>">
<input type=hidden name=action value=lead_bulk_status>
<div class=panel><div class=panel-h><div><h2><?=count($shown)?> leads</h2><p><?=$group==='date'?'Grouped by submission date.':'Showing all matching leads.'?></p></div>
<div class=row-actions>
  <label class="small" style="display:inline-flex;gap:6px;align-items:center;cursor:pointer"><input type=checkbox id="selAll" onclick="document.querySelectorAll('.lead-cb').forEach(function(c){c.checked=document.getElementById('selAll').checked})"> Select all</label>
  <select name=bulk_status style="width:auto;padding:7px 10px;border-radius:10px"><option value="">Bulk status...</option><?php foreach(['new','contacted','qualified','closed','spam'] as $s): ?><option value="<?=$s?>">Set <?=ucfirst($s)?></option><?php endforeach; ?></select>
  <button class="small" type=submit>Apply</button>
</div></div>
<?php if(!$shown): ?><div class=empty>No leads found.</div><?php endif; ?>
<?php foreach($groups as $gk=>$grows): ?>
<?php if($group==='date'): ?><div style="padding:12px 14px;background:#faf9f6;border-bottom:1px solid var(--line);font-weight:800;font-size:.84rem;display:flex;justify-content:space-between;align-items:center"><span><?=h(date('l, d M Y',strtotime($gk)))?></span><span class=muted style="font-weight:600"><?=count($grows)?> lead(s)</span></div><?php endif; ?>
<table><thead><tr><th style="width:36px"></th><th>Date</th><th>Contact</th><th>Business</th><th>Website</th><th>Message</th><th>Page</th><th>Status</th></tr></thead><tbody>
<?php foreach($grows as $r): ?><tr>
<td data-l=Select><input type=checkbox class=lead-cb name="ids[]" value="<?=h($r['id'])?>"></td>
<td data-l=Date><?=h(date('d M Y, H:i',strtotime($r['created_at']??'now')))?><div class=muted>#<?=h($r['id'])?></div></td>
<td data-l=Contact><b><?=h($r['full_name']??'')?></b><div class=muted><?=h($r['email']??'')?></div><div class=muted><?=h($r['phone']??'')?></div></td>
<td data-l=Business><?=h($r['business_name']??'')?></td>
<td data-l=Website><?php if(!empty($r['company_website'])): ?><a href="<?=h($r['company_website'])?>" target=_blank rel=noopener><?=h($r['company_website'])?></a><?php endif; ?></td>
<td data-l=Message class=msg><?=h($r['message']??'')?></td>
<td data-l=Page class=muted style="max-width:180px;word-break:break-all"><?=h($r['page_url']??'')?></td>
<td data-l=Status><span class="pill p-<?=h($r['status']??'new')?>"><?=h($r['status']??'new')?></span></td>
</tr><?php endforeach; ?>
</tbody></table>
<?php endforeach; ?>
</div></form>


<?php elseif($tab==='disc'): ?>
<div class=top><div><h1>Hall of Fame</h1><p>Manage security researchers credited on the vulnerability disclosure page.</p></div><div class=actions><a class="btn green" href="?tab=disc_edit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 5v14m-7-7h14"/></svg>Add Entry</a><a class="btn" href="https://webping.webpeaker.com/vulnerability-disclosure-program/" target=_blank>Open public page</a></div></div>
<div class=panel><div class=panel-h><div><h2><?=count($disc)?> entries</h2><p>Stored in Supabase. Published entries appear on /vulnerability-disclosure-program/.</p></div></div>
<table><thead><tr><th>Researcher</th><th>Type</th><th>Reported</th><th>Status</th><th>Actions</th></tr></thead><tbody>
<?php foreach($disc as $d): ?><tr>
<td data-l=Researcher><b><?=h($d['researcher_name']??'')?></b><div class=muted><?=h($d['researcher_link']??'')?></div><div class=muted><?=h((string)substr($d['summary']??'',0,80))?></div></td>
<td data-l=Type><?=h($d['vuln_type']??'')?></td><td data-l=Reported><?=h($d['reported_on']??'')?></td>
<td data-l=Status><span class="pill <?=!empty($d['published'])?'p-published':'p-draft'?>"><?=!empty($d['published'])?'published':'hidden'?></span></td>
<td data-l=Actions><div class=row-actions><a class="small" href="?tab=disc_edit&id=<?=h($d['id'])?>">Edit</a>
<form method=post><input type=hidden name=csrf value="<?=$CSRF?>"><input type=hidden name=action value=disc_toggle><input type=hidden name=id value="<?=h($d['id'])?>"><input type=hidden name=to value="<?=empty($d['published'])?'1':'0'?>"><button class=small type=submit><?=empty($d['published'])?'Publish':'Unpublish'?></button></form>
<form method=post onsubmit="return confirm('Delete this entry?')"><input type=hidden name=csrf value="<?=$CSRF?>"><input type=hidden name=action value=disc_delete><input type=hidden name=id value="<?=h($d['id'])?>"><button class="small danger" type=submit>Delete</button></form></div></td>
</tr><?php endforeach; if(!$disc): ?><tr><td colspan=5 class=empty>No Hall of Fame entries yet.</td></tr><?php endif; ?>
</tbody></table></div>

<?php elseif($tab==='disc_edit'): $d=null; $did=intval($_GET['id']??0); foreach($disc as $x){ if(intval($x['id'])===$did){ $d=$x; break; } } ?>
<div class=top><div><h1><?=$d?'Edit Entry':'Add Hall of Fame Entry'?></h1><p>Credit a researcher publicly. Contact email is private (never shown on the website).</p></div><div class=actions><a class="btn" href="?tab=disc">Back to entries</a></div></div>
<div class=panel><div class=panel-h><div><h2><?= $d?'Edit entry':'New entry' ?></h2><p>Published entries appear on /vulnerability-disclosure-program/.</p></div></div>
<form class=form method=post><input type=hidden name=csrf value="<?=$CSRF?>">
  <input type=hidden name=action value=disc_save><input type=hidden name=id value="<?=h($d['id']??'')?>">
  <div class=grid2>
    <label><b>Researcher name *</b><input type=text name=researcher_name required value="<?=h($d['researcher_name']??'')?>" placeholder="Jane Doe (jdoe)"></label>
    <label><b>Researcher link</b><input type=url name=researcher_link value="<?=h($d['researcher_link']??'')?>" placeholder="https://x.com/jdoe"></label>
  </div>
  <div class=grid2>
    <label><b>Vulnerability type</b><input type=text name=vuln_type value="<?=h($d['vuln_type']??'')?>" placeholder="XSS, SSRF, IDOR..."></label>
    <label><b>Reported on</b><input type=date name=reported_on value="<?=h($d['reported_on']??'')?>"></label>
  </div>
  <label><b>Summary</b><input type=text name=summary value="<?=h($d['summary']??'')?>" placeholder="Short public description of the report"></label>
  <div class=grid2>
    <label><b>Contact email (private)</b><input type=email name=contact_email value="<?=h($d['contact_email']??'')?>" placeholder="private@researcher.com"></label>
    <label><b>Status</b><select name=published_select style="display:none"></select><div style="display:flex;align-items:center;gap:8px;margin-top:26px"><input type=checkbox id=pubcb name=published value=1 <?=!empty($d['published'])?'checked':''?> style="width:auto"><span style="font-size:.88rem;font-weight:600">Published (visible on website)</span></div></label>
  </div>
  <div class=actions><button class="btn green" type=submit>Save Entry</button><a class="btn" href="?tab=disc">Cancel</a></div>
</form></div>

<?php elseif($tab==='blog'): ?>
<div class=top><div><h1>Blog Posts</h1><p>Create, edit, upload images, and manage blog content.</p></div><div class=actions><a class="btn green" href="?tab=blog_edit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 5v14m-7-7h14"/></svg>Write New Blog Post</a></div></div>
<div class=panel><div class=panel-h><div><h2><?=count($posts)?> posts</h2><p>Draft and published posts stored in Supabase.</p></div></div>
<table><thead><tr><th>Cover</th><th>Title</th><th>Status</th><th>Author</th><th>Date</th><th>Actions</th></tr></thead><tbody>
<?php foreach($posts as $p): ?><tr>
<td data-l=Cover><?php if(!empty($p['cover_image'])): ?><img class=cover src="<?=h($p['cover_image'])?>" alt=""><?php else: ?><span class=muted>--</span><?php endif; ?></td>
<td data-l=Title><b><?=h($p['title']??'')?></b><div class=muted>/blog/<?=h($p['slug']??'')?></div><div class=muted><?=h(mb_substr((string)($p['excerpt']??''),0,90))?></div></td>
<td data-l=Status><span class="pill p-<?=h($p['status']??'draft')?>"><?=h($p['status']??'draft')?></span></td>
<td data-l=Author><?=h($p['author']??'')?></td>
<td data-l=Date><?=h(date('d M Y',strtotime($p['created_at']??'now')))?></td>
<td data-l=Actions><div class=row-actions><a class="small" href="?tab=blog_edit&id=<?=h($p['id'])?>">Edit</a>
<form method=post onsubmit="return confirm('Delete this post?')"><input type=hidden name=csrf value="<?=$CSRF?>"><input type=hidden name=action value=blog_delete><input type=hidden name=id value="<?=h($p['id'])?>"><button class="small danger" type=submit>Delete</button></form></div></td>
</tr><?php endforeach; if(!$posts): ?><tr><td colspan=6 class=empty>No blog posts yet. Create your first post.</td></tr><?php endif; ?>
</tbody></table></div>

<?php elseif($tab==='blog_edit'): $p=$editPost?:[]; $previewUrl = !empty($p['slug']) ? ('/blog/'.urlencode($p['slug'])) : ''; ?>
<div class=top><div><h1><?=$editPost?'Edit Blog Post':'Write New Blog Post'?></h1><p>Write the post, upload a cover image, set SEO, then publish it to the website blog.</p></div><div class=actions><?php if($previewUrl): ?><a class="btn" href="<?=h($previewUrl)?>" target=_blank>Open post</a><?php endif; ?><a class="btn" href="?tab=blog">Back to posts</a></div></div>
<div class=panel><div class=panel-h><div><h2>Blog editor</h2><p>Published posts appear on <a href="/blog/" target=_blank>/blog/</a>. Draft posts stay hidden.</p></div></div>
<form class=form method=post enctype="multipart/form-data" id="blogForm"><input type=hidden name=csrf value="<?=$CSRF?>">
  <input type=hidden name=action value=blog_save><input type=hidden name=id value="<?=h($p['id']??'')?>">
  <div class=grid2>
    <label><b>Title *</b><input type=text name=title id="blogTitle" required value="<?=h($p['title']??'')?>" placeholder="How to manage WhatsApp leads with WebPing"></label>
    <label><b>Slug (URL)</b><input type=text name=slug id="blogSlug" value="<?=h($p['slug']??'')?>" placeholder="manage-whatsapp-leads"><div class=hint>Leave blank to auto-generate. Post URL: <span id="slugPreview">/blog/...</span></div></label>
  </div>
  <label><b>Excerpt</b><textarea name=excerpt style="min-height:90px" placeholder="Short summary shown on the blog listing page."><?=h($p['excerpt']??'')?></textarea></label>
  <div class=panel style="border-radius:16px;overflow:hidden"><div class=panel-h style="padding:12px 14px"><div><h2 style="font-size:.95rem">Content *</h2><p>Write in HTML or plain text. You can add headings, paragraphs, lists, links, and images.</p></div><div class=row-actions><button class="small" type=button onclick="ins('<h2>Heading</h2>')">H2</button><button class="small" type=button onclick="ins('<p>Your paragraph...</p>')">Paragraph</button><button class="small" type=button onclick="ins('<ul>\n  <li>Point one</li>\n  <li>Point two</li>\n</ul>')">List</button><button class="small" type=button onclick="ins('<a href=&quot;https://example.com&quot;>Link text</a>')">Link</button><button class="small" type=button onclick="ins('<strong>Important text</strong>')">Bold</button></div></div>
  <div style="padding:14px"><textarea class=big name=content id="blogContent" required placeholder="Write your blog post content here...

Example:
<h2>Why it matters</h2>
<p>Explain the problem and solution.</p>
<ul>
  <li>Key point one</li>
  <li>Key point two</li>
</ul>"><?=h($p['content']??'')?></textarea><div class=hint>Tip: keep paragraphs short, use &lt;h2&gt; for sections, and upload a cover image for better presentation.</div></div></div>
  <div class=grid2>
    <label><b>Cover image</b><input type=file name=cover_image accept="image/*" onchange="previewCover(this)"><input type=hidden name=cover_image_existing value="<?=h($p['cover_image']??'')?>">
      <div id="coverPreview" style="margin-top:8px"><?php if(!empty($p['cover_image'])): ?><img src="<?=h($p['cover_image'])?>" alt="" style="max-width:220px;max-height:130px;object-fit:cover;border-radius:12px;border:1px solid var(--line)"><div class=hint><a href="<?=h($p['cover_image'])?>" target=_blank>Current image</a></div><?php endif; ?></div></label>
    <div style="display:grid;gap:14px">
      <label><b>Author</b><input type=text name=author value="<?=h($p['author']??'WebPing Team')?>" placeholder="WebPing Team"></label>
      <label><b>Status</b><select name=status><option value=draft <?=($p['status']??'')==='draft'?'selected':''?>>Draft (hidden from website)</option><option value=published <?=($p['status']??'')==='published'?'selected':''?>>Published (visible on /blog/)</option></select></label>
    </div>
  </div>
  <div class=grid2>
    <label><b>Tags</b><input type=text name=tags value="<?=h($p['tags']??'')?>" placeholder="whatsapp crm, broadcasts, automation"></label>
    <label><b>SEO title</b><input type=text name=seo_title value="<?=h($p['seo_title']??'')?>" placeholder="Optional title for search engines"></label>
  </div>
  <label><b>SEO description</b><input type=text name=seo_description value="<?=h($p['seo_description']??'')?>" placeholder="Optional meta description for search engines"></label>
  <div class=actions><button class="btn green" type=submit>Save Post</button><a class="btn" href="?tab=blog">Cancel</a></div>
</form></div>
<script>
function slugify(s){return (s||'').toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'')}
var t=document.getElementById('blogTitle'), s=document.getElementById('blogSlug'), sp=document.getElementById('slugPreview');
function upSlug(){var v=s.value||slugify(t.value||''); sp.textContent=v?('/blog/'+v):'/blog/...'}
if(t) t.addEventListener('input',function(){ if(!s.dataset.touched) {s.value=slugify(t.value); upSlug();} });
if(s) s.addEventListener('input',function(){s.dataset.touched=1; upSlug();});
upSlug();
function ins(txt){var a=document.getElementById('blogContent'); if(!a) return; var st=a.selectionStart||0,en=a.selectionEnd||0,v=a.value||''; a.value=v.slice(0,st)+txt+v.slice(en); a.focus(); a.selectionStart=a.selectionEnd=st+txt.length;}
function previewCover(input){var p=document.getElementById('coverPreview'); if(input.files&&input.files[0]){var u=URL.createObjectURL(input.files[0]); p.innerHTML='<img src="'+u+'" alt="" style="max-width:220px;max-height:130px;object-fit:cover;border-radius:12px;border:1px solid var(--line)"><div class="hint">New image selected</div>';}}
</script>
<?php endif; ?>
</main></div></body></html>
