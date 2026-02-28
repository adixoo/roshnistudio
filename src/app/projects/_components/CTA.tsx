export default function CTA() {
  return (
    <section className="bg-[#F5F1E8] px-6 py-32 text-center md:px-12">
      <div className="mx-auto max-w-4xl border-y border-black/5 py-24">
        <h2 className="font-display mb-10 text-4xl italic md:text-6xl">
          Have a project in mind?
        </h2>
        <a
          className="font-display border-primary inline-block border-b pb-2 text-sm tracking-[0.3em] uppercase transition-opacity hover:opacity-50"
          href="mailto:studio@kylemills.com"
        >
          Inquire for Collaboration
        </a>
      </div>
    </section>
  );
}
