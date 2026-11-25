<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Cache-Control: no-store');
$cfg = require __DIR__ . '/../../leads-config.php';
function sb($cfg, $path){
  $ch=curl_init(rtrim($cfg['supabase_url'],'/').$path);
  curl_setopt_array($ch,[CURLOPT_RETURNTRANSFER=>true,CURLOPT_HTTPHEADER=>['apikey: '.$cfg['service_role_key'],'Authorization: Bearer '.$cfg['service_role_key']]]);
  $resp=curl_exec($ch); $code=curl_getinfo($ch,CURLINFO_HTTP_CODE); curl_close($ch);
  return $code>=200&&$code<300 ? (json_decode($resp,true)?:[]) : [];
}
$slug = preg_replace('/[^a-z0-9\-]/','', strtolower((string)($_GET['slug']??'')));
if($slug){
  $rows = sb($cfg, '/rest/v1/webping_posts?select=*&slug=eq.'.urlencode($slug).'&status=eq.published&limit=1');
  echo json_encode(['ok'=>true,'post'=>$rows[0]??null], JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
} else {
  $rows = sb($cfg, '/rest/v1/webping_posts?select=id,created_at,title,slug,excerpt,cover_image,author,tags,status&status=eq.published&order=created_at.desc&limit=50');
  echo json_encode(['ok'=>true,'posts'=>$rows], JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
}
