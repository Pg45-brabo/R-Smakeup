// ============================================================
//  CONFIGURAÇÃO DO SUPABASE — R&S Makeup
// ============================================================

const SUPABASE_URL      = 'https://eubiiekiaczoeynqxonv.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_XsEirbquY7qQOc7rLVCj4Q_8niVuAgI';
const WHATSAPP_NUMBER   = localStorage.getItem('rs_wpp') || '5531999999999';

// ── Cliente Supabase singleton ──
let _supabase = null;

function getSupabase() {
  if (_supabase) return _supabase;
  try {
    _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch(e) {
    console.warn('[RS] Supabase não disponível:', e.message);
    return null;
  }
  return _supabase;
}

function resetSupabase(url, key) {
  localStorage.setItem('rs_sb_url', url);
  localStorage.setItem('rs_sb_key', key);
  _supabase = window.supabase.createClient(url, key);
  return _supabase;
}

function wppLink(productName) {
  const num = WHATSAPP_NUMBER || '00000000000';
  const msg = encodeURIComponent(`Olá! Quero comprar o produto: ${productName}`);
  return `https://wa.me/${num}?text=${msg}`;
}
