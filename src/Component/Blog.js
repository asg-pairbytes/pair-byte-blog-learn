import styles from "../Stylesheet/home.module.css"
import {Link} from 'react-router-dom'

const Blog = (props) =>{
    return(
        <div className={styles["blogs"]}>
        {
            props.blog.map((item)=>{
                return(
                        <Link to={`/blog/${item.id}`} key={item.id} className={styles["blog-link"]}>
                    <div className={styles["blog-list"]}>
                        <h2>{item.title}</h2>
                        <p>{item.author}</p>
                    </div>
                        </Link>
                )
            })
        }
    </div>
    )
}

export default Blog;