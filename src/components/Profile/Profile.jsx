import Post from "../BlogList/Post";
import Pagination from "../Pagination";
import ProfileIntro from "../ProfileIntro/ProfileIntro";
export default function Profile() {
  return (
    <div>
      <div className="container">
        <div className="row blog-entries element-animate">
          <div className="col-md-12 col-lg-4 sidebar text-center justify-center m-auto pt-4">
            <ProfileIntro
              button={false}
              username="Hannah Anderson"
              bio=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Exercitationem facilis sunt repellendus excepturi beatae porro
        debitis voluptate nulla quo veniam fuga sit molestias minus."
            />
          </div>
          <div className="row">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
}
