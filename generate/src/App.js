import {  useEffect, useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";

const App = () => {
    const [user, setUser] = useState("ayub");
    useEffect(() => {
        document.title = user ? `${user}` : "Please Login";
    }, [user])
    if (!user) return <Login setUser={setUser} />
    return (
        <>
        <H1>Generate</H1>
        <Header user={user} setUser={setUser} />
        <CreatePost />
        </>
    );
};
export default App