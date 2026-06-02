declare function gtag(...args: unknown[]): void;

export function loadGA() {
  if (typeof gtag !== "undefined") {
    gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
    });
  }
}

export function initAnalytics() {
  if (typeof window !== "undefined" && localStorage.getItem("hy-cookie-consent") === "accepted") {
    loadGA();
  }
}
