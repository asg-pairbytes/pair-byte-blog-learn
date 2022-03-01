import { useState,useEffect } from 'react'
import styles from "../Stylesheet/home.module.css"
import Blog from './Blog'
import useFetch from './useFetch'

const Home = () =>{
    const {blogs,pending} = useFetch("http://localhost:8000/blogs");
    return(
        <div className={styles["home-section"]}>
            {
                pending?
                <div>Loading</div>
                :
                null
            }
            {
                blogs?
                <Blog blog={blogs}/>
                :
                null
            }
        </div>
    )
}

export default Home;