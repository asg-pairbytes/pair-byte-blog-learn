import { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "../Stylesheet/create.module.css";

const Create = () => {
    const [title,setTitle] = useState("")
    const [data,setData] = useState("")
    const [author,setAuthor] = useState("")
    const [pending,setPending] = useState(false)
    const history = useHistory()
    const handleSubmit = (e) =>{
        e.preventDefault();
        setPending(true)
        const blog={title,data,author};
        if(author!=="")
        {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs',{
                method: 'POST',
                headers: {'content-type': "application/json"},
                body: JSON.stringify(blog)
            }).then(()=>{
                console.log("item add")
                setPending(false)
                history.push("/")
            })
        }, 100);
    }
    }
      return (
    <div className={styles["create-section"]}>
      <form className={styles["create-blog-form"]} onSubmit={handleSubmit}>
        <h2>Add New Blog</h2>
        <label className={styles["create-label"]}>Blog Title</label>
        <input type="text" required value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <label className={styles["create-label"]}>Blog Data</label>
        <textarea required value={data} onChange={(e)=>{setData(e.target.value)}}></textarea>
        <label className={styles["create-label"]}>Author</label>
        <select required value={author} onChange={(e)=>{setAuthor(e.target.value)}}>
          <option value="" selected>None</option>
          <option value="Ashish Garg">Ashish Garg</option>
          <option value="Ashish Kumar">Ashish Kumar</option>
          <option value="Naynish Namdeo">Naynish Namdeo</option>
          <option value="Divyanshu Kumar">Divyanshu Kumar</option>
        </select>
        {
            pending && <button disabled>Adding Data...</button>
        }
        {
            !pending && <button>Add Data</button>
        }
      </form>
    </div>
  );
};

export default Create;
