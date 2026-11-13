import LogoWall from "./LogoWall";
import { officialPartners } from "@/lib/data";

export default function OfficialPartners() {
  return (
    <LogoWall
      title={officialPartners.title}
      logos={officialPartners.logos}
      logoImages={officialPartners.logoImages}
      theme="dark"
      mono
      cardLogos={["Meta Business Partners"]}
    />
  );
}
