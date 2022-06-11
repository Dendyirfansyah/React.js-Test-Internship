import "./comment.css";

function Comment() {
  return (
    <div className="com">
      <div className="person">
        <div className="profile"></div>
      </div>
      <div className="desc">
        <p>Person</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex obcaecati
          iusto officiis dolorem rem nulla, nesciunt libero perferendis nisi
          fuga maxime minus quae, laborum reprehenderit consequatur ipsum
          temporibus tempora accusantium.
        </p>
        {/* sub comment */}
        <div className="sb_com">
          <div className="person">
            <div className="profile"></div>
          </div>
          <div className="desc">
            <p>Person</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              obcaecati iusto officiis dolorem rem nulla, nesciunt libero
              perferendis nisi fuga maxime minus quae, laborum reprehenderit
              consequatur ipsum temporibus tempora accusantium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
