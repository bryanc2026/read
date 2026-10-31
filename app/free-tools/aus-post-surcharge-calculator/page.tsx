import type { Metadata } from "next";
import Header from "@/components/Header";
import FreeToolEmbed from "@/components/FreeToolEmbed";
import { freeToolsPages } from "@/lib/data";

const tool = freeToolsPages.find((t) => t.slug === "aus-post-surcharge-calculator")!;

export const metadata: Metadata = {
  title: `${tool.title} | Boom`,
  description: tool.description,
};

export default function AusPostSurchargeCalculatorPage() {
  return (
    <main>
      <Header />
      <FreeToolEmbed {...tool} />
    </main>
  );
}
