import { useParams,useHistory } from "react-router-dom";
import styles from "../Stylesheet/blogs.module.css";
import useFetch from "./useFetch";


const BlogDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const { blogs, pending } = useFetch("http://localhost:8000/blogs/" + id);
  const handleDelete = () =>{
      fetch('http://localhost:8000/blogs/'+id,{
          method: 'DELETE'
      }).then(()=>{
        history.push("/")
      })
  }
  return (
    <div className={styles["blog-section"]}>
      {blogs ? (
        <div>
          <h1 className={styles["title-name"]}>{blogs.title}</h1>
          <p className={styles["author-name"]}>{blogs.author}</p>
          <p className={styles["blog-data"]}>{blogs.data}</p>
          <button onClick={handleDelete} className={styles["delete-button"]}>Delete</button>
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
