import styles from "../Stylesheet/navbar.module.css"
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <div className={styles["navbar-section"]}>
            <div className={styles["branding"]}>
            <h1>Pair Bytes</h1>
            </div>
            <div className={styles["links"]}>
                <Link to="/">Home</Link>
                <Link to="/create" className={styles["create"]}>Create</Link>
            </div>
        </div>
    )
}
export default Navbar;