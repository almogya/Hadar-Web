import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Head } from "vite-react-ssg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  // Detect language from URL
  const isHe = location.pathname.startsWith("/he");

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Head>
        <title>{isHe ? "הדף לא נמצא (404) | HY Law Offices" : "Page Not Found (404) | HY Law Offices"}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-display font-bold text-foreground">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{isHe ? "הדף לא נמצא" : "Page not found"}</p>
        <a href={isHe ? "/he" : "/en"} className="text-gold underline hover:text-gold/80">
          {isHe ? "חזרה לדף הבית" : "Return to Home"}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
