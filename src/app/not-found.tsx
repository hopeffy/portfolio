export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <span className="text-gradient-mixed font-headline text-6xl font-bold mb-4">
        404
      </span>
      <h1 className="font-headline text-2xl font-semibold text-on-surface mb-4">
        Page Not Found
      </h1>
      <p className="font-body text-on-surface-variant">
        The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-mixed-gradient text-[#0B0B10] font-headline font-semibold text-sm tracking-wide hover:translate-x-[2px] transition-transform"
      >
        Return Home
      </a>
    </section>
  );
}