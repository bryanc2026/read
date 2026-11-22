export default function EmailCapture() {
  return (
    <section className="border-t border-boom-black/10 bg-boom-cream pb-14 pt-8 md:pb-20 md:pt-12">
      <div className="container-content">
        <div className="mx-auto max-w-xl">
          {/* Klaviyo renders the actual signup form (fields, copy, styling) into this
              div client-side, based on the form configured under this ID in Klaviyo. */}
          <div className="klaviyo-form-WZJ2Ft" />
        </div>
      </div>
    </section>
  );
}
