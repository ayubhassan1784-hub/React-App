import { useEffect, useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

const App = () => {
  const [user, setUser] = useState("ayub");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.title = user ? user : "Please Login";
  }, [user]);

  if (!user) return <Login setUser={setUser} />;

  return (
    <>
  <div
    style={{textAlign: "center",border: "1px solid #ddd",margin: "40px auto",padding: "25px",maxWidth: "420px",borderRadius: "12px",boxShadow: "0 8px 20px rgba(0,0,0,0.1)",backgroundColor: "#ffffff"}}
  >
    <h1 style={{ marginBottom: "20px", color: "#333" }}>Generate</h1>
    <Header user={user} setUser={setUser} />
    <CreatePost posts={posts} setPosts={setPosts} />
  </div>

  <div style={{ maxWidth: "600px", margin: "30px auto" }}>
    <PostList posts={posts} />
  </div>
</>

  );
};

export default App;
