const GA_ID = "G-XXXXXXXXXX"; // החלף ב-Measurement ID שלך מ-Google Analytics

export function loadGA() {
  if (typeof window === "undefined") return;
  if (document.getElementById("ga-script")) return;

  const s1 = document.createElement("script");
  s1.id = "ga-script";
  s1.async = true;
  s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s1);

  const s2 = document.createElement("script");
  s2.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`;
  document.head.appendChild(s2);
}

export function initAnalytics() {
  if (typeof window === "undefined") return;
  if (localStorage.getItem("hy-cookie-consent") === "accepted") loadGA();
}
