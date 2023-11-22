import Card from "../../components/Card.jsx";
import UsersTable from "../../components/UsersTable.jsx";
import UserPost from "../../components/UserPost.jsx";
export default function AdminControl() {
  return (
    <div>
      <div className="flex flex-row gap-4">
        <Card label="Total users" details="6389" />
        <Card label="Approved" details="603" />
        <Card label="Pending" details="20" />
      </div>
      <UsersTable />
      <div
        className={`overflow-y-auto rounded-lg w-[19vw] sm:w-full h-[74vh] py-2 px-3 flex flex-col bg-gray-50`}
      >
        <div className="flex flex-row gap-1 justify-center">
          <div className="flex flex-row gap-10">
            <h2 className="label-primary underline cursor-pointer">
              Approved
              <span className="material-symbols-outlined text-green-700">
                check_circle
              </span>
            </h2>
            <h2 className="label-primary cursor-pointer">
              Pending
              <span className="material-symbols-outlined text-blue-700">
                pending
              </span>
            </h2>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-3 mt-5 pb-5">
          <UserPost
            author="catxrin"
            likes="0"
            title="Lorem Ipsum"
            description=" Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis
                dignissim turpis, non suscipit mauris interdum at. Morbi sed gravida
                nisl, a pharetra nulla. Etiam tincidunt turpis leo, ut mollis ipsum
                consectetur quis. Etiam faucibus est risus, ac condimentum mauris
                consequat nec. Curabitur eget feugiat massa. Morbi sed gravida
                nisl, a pharetra nulla.🌙"
          />

          <UserPost
            author="catxrin"
            likes="0"
            title="Lorem Ipsum"
            description=" Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis
            dignissim turpis, non suscipit mauris interdum at. Morbi sed gravida
            nisl, a pharetra nulla. Etiam tincidunt turpis leo, ut mollis ipsum
            consectetur quis. Etiam faucibus est risus, ac condimentum mauris
            consequat nec. Curabitur eget feugiat massa"
          />
          <UserPost
            author="catxrin"
            likes="0"
            title="Lorem Ipsum"
            description=" Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis
                dignissim turpis, non suscipit mauris interdum at. Morbi sed gravida
                nisl, a pharetra nulla."
          />
          <UserPost
            likes="0"
            author="catxrin"
            title="Lorem Ipsum"
            description=" Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis
                dignissim turpis, non suscipit mauris interdum at. Morbi sed gravida
                nisl, a pharetra nulla. Etiam tincidunt turpis leo, ut mollis ipsum
                consectetur quis. Etiam faucibus est risus, ac condimentum mauris
                consequat nec. Curabitur eget feugiat massa. Etiam tincidunt turpis leo, ut mollis ipsum
                consectetur quis. Etiam faucibus est risus, ac condimentum mauris
                consequat nec. Curabitur eget feugiat massa"
          />
        </div>
      </div>
    </div>
  );
}
