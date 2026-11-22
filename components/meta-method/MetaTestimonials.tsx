import Testimonials from "@/components/Testimonials";
import { metaMethodPage, testimonialsListPrimary } from "@/lib/data";

export default function MetaTestimonials() {
  const { testimonials } = metaMethodPage;
  const items = testimonialsListPrimary.filter((t) => testimonials.names.includes(t.name));

  return <Testimonials title={testimonials.title} subhead={testimonials.subhead} testimonials={items} />;
}
