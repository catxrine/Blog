import { useParams } from "react-router-dom";
import { getArticle } from "../../services/Article";
import { useEffect, useState } from "react";
import Loading from "../UtilPages/Loader";
import ArticleContent from "../../components/ArticleContent/ArticleContent";
import ProfileIntro from "../../components/ProfileIntro/ProfileIntro";
import LatestPosts from "../../components/LatestPosts/LatestPosts";
import Tags from "../../components/Tags/Tags";

export default function Article() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getArticle(id)
      .then((res) => setData(res))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(data);
  if (loading) return <Loading />;
  return (
    <section className="section">
      <div className="container">
        <div className="row blog-entries element-animate">
          <ArticleContent data={data} />

          <div className="col-md-12 col-lg-4 sidebar">
            <ProfileIntro data={data} />
            <LatestPosts />
            <Tags />
          </div>
        </div>
      </div>
    </section>
  );
}
