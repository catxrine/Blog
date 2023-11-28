import CommentsForm from "./CommentsForm";
import Comments from "./Comments";
import Pagination from "../Pagination/Pagination";

export default function CommentsSection() {
  return (
    <div className="pt-5 comment-wrap">
      <h3 className="mb-5 heading">6 Comments</h3>
      <Comments />
      <Pagination />
      <CommentsForm />
    </div>
  );
}
