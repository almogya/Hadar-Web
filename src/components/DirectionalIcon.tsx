import { ArrowRight, ArrowLeft, ChevronRight, ChevronLeft } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LucideIcon } from "lucide-react";

type IconName = "arrow" | "chevron";

interface DirectionalIconProps {
  icon?: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

/**
 * Renders a directional icon that automatically flips in RTL mode.
 * "arrow" → ArrowRight (LTR) / ArrowLeft (RTL)
 * "chevron" → ChevronRight (LTR) / ChevronLeft (RTL)
 */
const DirectionalIcon = ({ icon = "arrow", size = 16, className, strokeWidth }: DirectionalIconProps) => {
  const { dir } = useLanguage();
  const isRtl = dir === "rtl";

  const iconMap: Record<IconName, [LucideIcon, LucideIcon]> = {
    arrow: [ArrowRight, ArrowLeft],
    chevron: [ChevronRight, ChevronLeft],
  };

  const [LtrIcon, RtlIcon] = iconMap[icon];
  const Icon = isRtl ? RtlIcon : LtrIcon;

  return <Icon size={size} className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
};

export default DirectionalIcon;
