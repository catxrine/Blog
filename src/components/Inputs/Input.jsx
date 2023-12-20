export default function Input({
  placeholder,
  type = "text",
  label,
  name,
  register,
  style = "input-variant-1",
}) {
  return (
    <label className="flex flex-col text-base">
      <span className="text-gray-700">{label}</span>
      <input
        {...register(name)}
        className={style}
        placeholder={placeholder}
        type={type}
      />
    </label>
  );
}
