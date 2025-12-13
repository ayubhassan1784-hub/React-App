import { useState } from "react";

const CreatePost = ({posts, setPosts}) => {
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(content, image);
        const newPost = {content, image};
        setPosts([newPost, ...posts]);
    }
    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Post Content"
                onChange={(e)=>setContent(e.target.value)} />
                <input type="file" 
                onChange={(e)=> setImage(e.target.files[0])} />
                <button type="submit">Submit</button>
            </form>
            {/* <p>{content}</p> */}
            {/* {image && <img src={URL.createObjectURL(image)} alt="" style={{width: "300px"}} />} */}
        </div>
    )
}
export default CreatePost;