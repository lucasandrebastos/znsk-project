export default function LayoutSlug({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="max-w-3xl mx-auto mb-12 text-left my-12">
      {children}
    </article>
  );
}
