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

/** Fire a GA4 "generate_lead" conversion event on successful form submission. */
export function trackLead(source: string) {
  if (typeof gtag !== "undefined") {
    gtag("event", "generate_lead", { source, currency: "ILS", value: 0 });
  }
}
