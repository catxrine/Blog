import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categories } from "../../utils/utils";
import { fetchData } from "../../utils/fetchData";

import Pagination from "../../components/Pagination/Pagination";
import PostPrimary from "../../components/Posts/PostPrimary";
import Loader from "../UtilPages/Loader";
import CheckParam from "./../../routes/CheckParam";

export default function Categories() {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchData({
      url: `/api/posts?page=${currentPage}`,
      method: "GET",
    }).then((res) => {
      setPosts(res.data);
      setPages(res.last_page);
      setLoading(false);
    });
  }, [currentPage]);

  if (loading) return <Loader />;

  return (
    <CheckParam data={categories} param={category}>
      <div className="container section">
        <div className="row mb-4">
          <h2 className="posts-entry-title">{category}</h2>
        </div>
        <div className="row">
          {posts?.map((post) => (
            <PostPrimary key={post.id} data={post} />
          ))}
        </div>
      </div>
      <Pagination
        nPages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </CheckParam>
  );
}
