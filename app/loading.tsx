export default function Loading() {
  const lodingPosts = Array.from({ length: 2 }, (_, index) => index);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {lodingPosts.map((_, index) => (
        <div
          key={index}
          className="border rounded-lg p-6 bg-card animate-pulse"
        >
          <div className="h-4 w-24 bg-muted rounded mb-2" />

          <div className="h-6 w-3/4 bg-muted rounded mb-3" />

          <div className="h-4 w-full bg-muted rounded mb-2" />
          <div className="h-4 w-5/6 bg-muted rounded mb-4" />

          <div className="h-4 w-20 bg-muted rounded" />
        </div>
      ))}
    </div>
  );
}
