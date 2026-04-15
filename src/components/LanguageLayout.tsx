import { Outlet } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";

const LanguageLayout = () => (
  <LanguageProvider>
    <Outlet />
  </LanguageProvider>
);

export default LanguageLayout;
