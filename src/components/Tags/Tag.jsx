export default function Tag({ text }) {
  return (
    <li className="tags-style cursor-pointer">
      <a>{text}</a>
    </li>
  );
}
