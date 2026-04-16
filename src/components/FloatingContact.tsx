import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const FloatingContact = () => {
  const { lang } = useLanguage();
  const phoneNumber = "972542234726";
  const message = lang === "he"
    ? "שלום, אשמח לקבל ייעוץ משפטי."
    : "Hello, I'd like to schedule a legal consultation.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={lang === "he" ? "שלח הודעה בוואטסאפ" : "Send a WhatsApp message"}
      className="fixed bottom-6 end-6 z-[70] w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#20bd5a] transition-all duration-300 hover:scale-105"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </a>
  );
};

export default FloatingContact;
