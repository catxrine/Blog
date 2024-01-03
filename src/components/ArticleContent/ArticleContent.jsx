import CommentsSection from "../Comments/CommentsSection";

export default function ArticleContent({ data }) {
  return (
    <div className="col-md-12 col-lg-8 main-content">
      <h2>{data?.title}</h2>
      <div className="post-content-body break-all">{data?.description}</div>
      <CommentsSection commentsCount={data?.comments_count} />
    </div>
  );
}
