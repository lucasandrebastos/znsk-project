export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await fetch(`http://localhost:3001/blog/${slug}`).then((res) =>
    res.json()
  );

  console.log(post);
  return (
    <article>
      <h1>{post.title}</h1>
      <h2>{post.sumary}</h2>
      <p>{post.date}</p>
      <p>{post.content}</p>
    </article>
  );
}
