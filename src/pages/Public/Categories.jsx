import Pagination from "../../components/Pagination/Pagination";
import PostPrimary from "../../components/Posts/PostPrimary";
import { useParams } from "react-router-dom";
export default function Categories() {
  const { category } = useParams();
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="row mb-4">
            <div className="col-sm-6">
              <h2 className="posts-entry-title">
                {category ? category : "All"}
              </h2>
            </div>
          </div>
          <div className="row">
            <PostPrimary />
            <PostPrimary />
            <PostPrimary />
            <PostPrimary />
            <PostPrimary />
            <PostPrimary />
          </div>
        </div>
      </section>
      <Pagination />
    </div>
  );
}
