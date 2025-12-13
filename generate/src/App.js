import {  useEffect, useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";

const App = () => {
    const [user, setUser] = useState("ayub");
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        document.title = user ? `${user}` : "Please Login";
    }, [user])
    if (!user) return <Login setUser={setUser} />
    return (
        <>
        <h1>Generate</h1>
        <Header user={user} setUser={setUser} />
        <CreatePost posts={posts} setPosts={setPosts} />
        {
            posts.map(
                post => (
                    <div>
                        <h1>{post.content}</h1>
                        <img src={URL.createObjectURL(post.image)} alt="" style={{width: "300px"}} />
                    </div>
                )
            )
        }
        </>
    );
};
export default App