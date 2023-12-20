export default function Tag({ label }) {
  return (
    <li className="tags-style cursor-pointer">
      <a>{label}</a>
    </li>
  );
}
