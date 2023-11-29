export default function Card({ label, details }) {
  return (
    <div className="px-4 py-3 shadow-sm rounded bg-purple-100">
      <dl>
        <dt className="text-sm leading-5 font-medium text-purple-700 truncate">
          {label}
        </dt>
        <dd className="mt-1 text-3xl leading-9 font-semibold">{details}</dd>
      </dl>
    </div>
  );
}
