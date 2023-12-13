export default function Input({
  label,
  placeholder,
  type = "text",
  style = "input-variant-1",
}) {
  return (
    <label className="block my-4 text-base">
      <span className="text-gray-700 ">{label}</span>
      <input className={style} placeholder={placeholder} type={type} />
    </label>
  );
}
