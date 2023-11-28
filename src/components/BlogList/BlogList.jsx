import Posts from "./Posts";
import Pagination from "../Pagination/Pagination";
import { useParams } from "react-router-dom";
export default function BlogList() {
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

          <Posts />
        </div>
      </section>
      <Pagination />
    </div>
  );
}
