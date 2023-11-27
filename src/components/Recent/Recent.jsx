import Post from "./Post";

export default function Recent() {
  return (
    <section className="section posts-entry posts-entry-sm">
      <div className="container">
        <h2>Recent Posts</h2>
        <div className="row mt-4 bg-gray-50 p-4 rounded">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </section>
  );
}
