import UserCell from "./UserCell";
import Pagination from "../Pagination/Pagination";

export default function UsersTable() {
  return (
    <div className="w-full mb-8 mt-3 overflow-hidden rounded-lg shadow-xs">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Actions</th>
              <th className="px-4 py-3">Role</th>
            </tr>
          </thead>
          <UserCell username="catxrin" email="catxrin@gmail.com" role="Admin" />
          <UserCell username="anon" email="anon@gmail.com" role="User" />
          <UserCell username="alexa" email="alexa@gmail.com" role="User" />
          <UserCell username="catxrin" email="catxrin@gmail.com" role="User" />
          <UserCell username="jakeWhite" email="jake@gmail.com" role="User" />
          <UserCell username="kris0" email="kris@gmail.com" role="User" />
        </table>
      </div>
      <Pagination />
    </div>
  );
}
