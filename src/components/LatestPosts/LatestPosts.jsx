import PostSecondary from "../Posts/PostSecondary";

export default function LatestPosts() {
  return (
    <div className="sidebar-box">
      <h3 className="heading">Latest Posts</h3>
      <div className="post-entry-sidebar">
        <ul>
          <PostSecondary
            date="March 15, 2018"
            title="There’s a Cool New Way for Men to Wear Socks and Sandals"
          />
          <PostSecondary
            date="March 15, 2018"
            title="There’s a Cool New Way for Men to Wear Socks and Sandals"
          />
          <PostSecondary date="March 15, 2018" title="Lorem Ipsum?!" />
          <PostSecondary
            date="March 15, 2018"
            title="Mastery, by Robert Greene"
          />
        </ul>
      </div>
    </div>
  );
}
