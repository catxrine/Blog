import Post from "./Post";

export default function BlogList() {
  return (
    <section className="section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-sm-6">
            <h2 className="posts-entry-title">Articles</h2>
          </div>
        </div>

        <div className="row">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </section>
  );
}
