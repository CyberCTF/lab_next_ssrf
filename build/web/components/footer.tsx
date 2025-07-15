import Link from "next/link";
import React from "react";
import { getFooterLinks, getSocialLinks, getSiteInfo } from "@/lib/metadata";
import Image from "next/image";

export const Footer = () => {
  const footerLinks = getFooterLinks();
  const socialLinks = getSocialLinks();
  const siteInfo = getSiteInfo();

  return (
    <div className="relative">
      <div className="border-t border-neutral-900 px-8 pt-20 pb-32 relative">
        <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex flex-row justify-between items-start gap-12 ">
          <div>
            <div className="mr-4  md:flex mb-4">
              <Image src="/cyberctf_logo.svg" alt="Logo" width={50} height={50} />
            </div>
            <div>Copyright &copy; {siteInfo.copyright}</div>
            <div className="mt-2">All rights reserved</div>
          </div>
          
          <div className="flex flex-row gap-12">
            <div className="flex flex-col space-y-2 min-w-[120px]">
              <h3 className="text-white font-semibold">Links</h3>
              {footerLinks?.map((link) => (
                <Link
                  key={link.title}
                  href={link.link}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            
            <div className="flex flex-col space-y-2 min-w-[120px]">
              <h3 className="text-white font-semibold">Social</h3>
              {socialLinks?.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-neutral-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
