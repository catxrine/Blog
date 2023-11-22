import Content from "../Content/Content";
import LatestPosts from "../LatestPosts/LatestPosts";
import ProfileIntro from "../ProfileIntro/ProfileIntro";
import Tags from "../Tags/Tags";

export default function Article() {
  return (
    <section className="section">
      <div className="container">
        <div className="row blog-entries element-animate">
          <Content
            title="Lorem Ipsum"
            info=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          nam quas inventore, ut iure iste modi eos adipisci ad ea itaque labore
          earum autem nobis et numquam, minima eius. Nam eius, non unde ut aut
          sunt eveniet rerum repellendus porro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          nam quas inventore, ut iure iste modi eos adipisci ad ea itaque labore
          earum autem nobis et numquam, minima eius. Nam eius, non unde ut aut
          sunt eveniet rerum repellendus porro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          nam quas inventore, ut iure iste modi eos adipisci ad ea itaque labore
          earum autem nobis et numquam, minima eius. Nam eius, non unde ut aut
          sunt eveniet rerum repellendus porro.
          numquam, minima eius. Nam eius, non unde ut aut
          sunt eveniet rerum repellendus porro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          nam quas inventore, ut iure iste modi eos adipisci ad ea itaque labore
          earum autem nobis et numquam, minima enumquam, minima eius. Nam eius, non unde ut aut
          sunt eveniet rerum repellendus porro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          nam quas inventore, ut iure iste modi eos adipisci ad ea itaque labore
          earum autem nobis et numquam, minima enumquam, minima eius. Nam eius, non unde ut aut
          sunt eveniet rerum repellendus porro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          nam quas inventore, ut iure iste modi eos adipisci ad ea itaque labore
          earum autem nobis et numquam, minima e
          numquam, minima eius. Nam eius, non unde ut aut
          sunt eveniet rerum repellendus porro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          nam quas inventore, ut iure iste modi eos adipisci ad ea itaque labore
          earum autem nobis et numquam, minima enumquam, minima eius. Nam eius, non unde ut aut
          sunt eveniet rerum repellendus porro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          nam quas inventore, ut iure iste modi eos adipisci ad ea itaque labore
          earum autem nobis et numquam, minima e
          "
          />

          <div className="col-md-12 col-lg-4 sidebar">
            <ProfileIntro
              username="Hannah Anderson"
              bio=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem facilis sunt repellendus excepturi beatae porro
            debitis voluptate nulla quo veniam fuga sit molestias minus."
            />
            <LatestPosts />
            <Tags />
          </div>
        </div>
      </div>
    </section>
  );
}
