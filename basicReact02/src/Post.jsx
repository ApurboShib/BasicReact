import ".post.css";

export default function Post({ post }) {
  // console.log(post);

  const { userId, id, title, body } = post;
  return (
    <div className="box">
      <p>
        <small>userId : {userId} </small>
      </p>
      <p>
        <small>ID : {id} </small>
      </p>
      <p>
        <small>Title : {title}</small>
      </p>
      <p>
        <small>Body : {body}</small>
      </p>
    </div>
  );
}
