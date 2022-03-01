import { useEffect, useState } from "react";

const useFetch = (url) =>{
    const [blogs,setBlogs] = useState(null)
    const [pending,setPending] = useState(true)
    useEffect(()=>{
        const abourtFunc = new AbortController();
        fetch(url,{signal: abourtFunc.signal}).then((res)=>{
            return res.json()
        }).then((data)=>{
            setBlogs(data)
            setPending(false)
        }).catch((err)=>{
            if(err.message==="AbortError")
            {
                console.log("Task aborted")
            }
        })
        return(()=>{abourtFunc.abort()})
    },[])
    return {blogs,pending}
}

export default useFetch;