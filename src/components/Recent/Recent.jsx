import PostTertiary from "../Posts/PostTertiary";

export default function Recent() {
  return (
    <section className="section posts-entry posts-entry-sm">
      <div className="container">
        <h2>Recent Posts</h2>
        <div className="row mt-4 bg-gray-50 p-4 rounded">
          <PostTertiary />
          <PostTertiary />
          <PostTertiary />
          <PostTertiary />
        </div>
      </div>
    </section>
  );
}
