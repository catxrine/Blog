import Tag from "./Tag";
export default function Tags({ tagsData }) {
  return (
    <div className="sidebar-box">
      <h3 className="heading">Tags</h3>
      <ul className="tags">
        <Tag label="Science" />
        <Tag label="Science" />
        <Tag label="Science" />
        <Tag label="Science" />
        <Tag label="Science" />
      </ul>
    </div>
  );
}
