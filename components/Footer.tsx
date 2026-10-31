import Image from "next/image";
import { footerLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-boom-black py-14 text-white/60">
      <div className="container-content flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start">
            <Image src="/images/boom-logo.png" alt="Boom Ecommerce" width={990} height={396} className="h-8 w-auto rounded-md" />
          </div>
          <p className="mt-4 max-w-xs text-sm">
            Ecommerce coaching for Shopify founders. Capped at 20 brands, so none of it goes to your competitors.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm md:justify-end">
          {footerLinks.company.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="container-content mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs md:flex-row">
        <p>&copy; {new Date().getFullYear()} Boom Ecommerce. All rights reserved.</p>
        <p>Sydney, Australia</p>
      </div>
    </footer>
  );
}
