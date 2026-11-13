import LogoWall from "./LogoWall";
import { featuredBy } from "@/lib/data";

export default function PressAndPartners() {
  return (
    <LogoWall
      title={featuredBy.title}
      subhead={featuredBy.subhead}
      logos={featuredBy.logos}
      logoImages={featuredBy.logoImages}
      theme="dark"
      mono
      cardLogos={["Add To Cart"]}
    />
  );
}
