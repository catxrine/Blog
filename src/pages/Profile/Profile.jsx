import Posts from "../../components/BlogList/Posts";
import Pagination from "../../components/Pagination/Pagination";
import ProfileIntro from "../../components/ProfileIntro/ProfileIntro";
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
          <Posts />
        </div>
      </div>
      <Pagination />
    </div>
  );
}
