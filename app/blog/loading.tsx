export default function Loading() {
  const lodingPosts = Array.from({ length: 3 }, (_, index) => index);
  return (
    <div className="max-w-3xl mx-auto grid gap-8">
      {lodingPosts.map((_, index) => (
        <article
          key={index}
          className="border rounded-lg p-6 bg-card animate-pulse"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <div className="w-4 h-4 bg-muted rounded-full" />
            <div className="h-4 w-24 bg-muted rounded" />
          </div>
          <div className="h-6 w-3/4 bg-muted rounded mb-3" />
          <div className="h-4 w-full bg-muted rounded mb-2" />
          <div className="h-4 w-5/6 bg-muted rounded mb-4" />
          <div className="h-4 w-24 bg-muted rounded" />
        </article>
      ))}
    </div>
  );
}
