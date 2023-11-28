import Comment from "./Comment";
export default function Comments({ commentsData }) {
  return (
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
    </ul>
  );
}
