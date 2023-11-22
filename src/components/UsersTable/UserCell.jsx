export default function UserCell({ username, email, role }) {
  return (
    <tbody className="bg-white divide-y">
      <tr className="text-gray-700">
        <td className="p-4">
          <div className="flex items-center text-sm">
            <p className="font-semibold">{username}</p>
          </div>
        </td>

        <td className="p-4 text-sm">{email}</td>

        <td className="p-4">
          <button className="px-2 py-1 font-semibold text-sm text-red-700 bg-red-100 rounded">
            Delete
          </button>
        </td>
        <td className="p-4">
          <button className="px-2 py-1 font-semibold text-sm text-purple-700 bg-purple-100 rounded">
            {role}
          </button>
        </td>
      </tr>
    </tbody>
  );
}
