import Image from "next/image";
import { getSiteInfo } from "@/lib/metadata";

interface LogoProps {
  variant?: "navbar" | "footer";
}

export function Logo({ variant = "navbar" }: LogoProps) {
  const siteInfo = getSiteInfo();
  
  if (variant === "navbar") {
    return (
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
          <span className="text-black text-lg font-bold">🎯</span>
        </div>
        <span className="text-xl font-bold text-white">{siteInfo.name}</span>
      </div>
    );
  }
  
  return (
    <div className="flex items-center space-x-2">
      <Image
        src="/cyberctf_logo.svg"
        alt={siteInfo.name}
        width={32}
        height={32}
        className="w-8 h-8"
      />
      <span className="text-xl font-bold text-white">{siteInfo.name}</span>
    </div>
  );
} 