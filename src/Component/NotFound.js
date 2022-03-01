import { Link } from "react-router-dom";
import styles from "../Stylesheet/notfound.module.css";
import notfound from "../Assets/404.png"

const NotFound = () =>{
    return(
        <div className={styles["not-found"]}>
        <img src={notfound} />
        <h1>Sorry!</h1>
        <p>Page not found...</p>
        <p>Go to <Link to="/">Homepage</Link>...</p>
        </div>
    )
}
export default NotFound;