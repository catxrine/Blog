import PostPrimary from "../../components/Posts/PostPrimary";
import ProfileIntro from "../../components/ProfileIntro/ProfileIntro";
import Pagination from "../../components/Pagination/Pagination";
import { isAuth } from "../../utils/user";
import AuthUserProfileView from "../../components/AuthUserProfileView";

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
          {isAuth ? (
            <AuthUserProfileView />
          ) : (
            <div>
              <div className="flex flex-row flex-wrap mt-5 pb-5">
                {/* <PostPrimary />
                <PostPrimary />
                <PostPrimary /> */}
                posts
              </div>
              <Pagination />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
