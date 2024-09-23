export default function ArticlePage({ params }) {
  return (
    <>
      <h1>Article Page</h1>
      <p>Article Id: {params.article}</p>
    </>
  );
}
