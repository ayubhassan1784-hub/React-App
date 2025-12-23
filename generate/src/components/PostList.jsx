const PostList = ({ posts }) => {
  return (
    <>
      {posts.map((post, index) => (
        <div key={index}>
          <h1>{post.content}</h1>
          {post.image && (
            <img
              src={URL.createObjectURL(post.image)}
              alt=""
              style={{ width: "300px" }}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default PostList;
