import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <a href="#main-content" className="skip-to-content">
      Skip to main content
    </a>
    <Navbar />
    <main id="main-content" className="flex-1 pt-20" role="main">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
