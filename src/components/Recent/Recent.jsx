import { useState, useEffect } from "react";
import { getPosts } from "../../services/Article";
import { handleErrorMessage } from "../../utils/utils";

import PostPrimary from "../Posts/PostPrimary";
import Loader from "../../pages/UtilPages/Loader";

export default function Recent() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getPosts(1)
      .then((res) => {
        setPosts(res.data.slice(0, 3));
        setLoading(false);
      })
      .catch((err) => {
        handleErrorMessage(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <section className="section posts-entry posts-entry-sm">
      <div className="container">
        <h2>Recent Posts</h2>
        <div className="row mt-4 bg-gray-50 p-4 rounded">
          {posts?.map((post) => (
            <PostPrimary key={post.id} data={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
