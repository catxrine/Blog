import CommentsSection from "../Comments/CommentsSection";

export default function Content({ title, info }) {
  return (
    <div className="col-md-12 col-lg-8 main-content">
      <h2>{title}</h2>
      <div className="post-content-body">{info}</div>
      <CommentsSection />
    </div>
  );
}
