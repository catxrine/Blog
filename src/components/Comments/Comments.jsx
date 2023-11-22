import Comment from "./Comment";
import CommentsForm from "./CommentsForm";
export default function Comments() {
  return (
    <div className="pt-5 comment-wrap">
      <h3 className="mb-5 heading">6 Comments</h3>
      <ul className="comment-list">
        <Comment
          username="Jean Doe"
          date="January 9, 2018"
          comment=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia,
          fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit
          necessitatibus, nihil?"
        />
        <Comment
          username="Jean Doe"
          date="January 9, 2018"
          comment=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia,
          fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit
          necessitatibus, nihil?"
        />
        <Comment
          username="Jean Doe"
          date="January 9, 2018"
          comment=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia,
          fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit
          necessitatibus, nihil?"
        />
        <Comment
          username="Jean Doe"
          date="January 9, 2018"
          comment=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia,
          fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit
          necessitatibus, nihil?"
        />
      </ul>

      <CommentsForm />
    </div>
  );
}
