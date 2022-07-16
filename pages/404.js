import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from 'next/router';

const NotFound = () => {

    const route=useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            route.push('/')
        },3000)
    },[]);

    return ( 
        <div className="not-found">
            <h1>Sorry..</h1>
            <h2>Page not found!</h2>
            <Link href="/"><a>Go to home page</a></Link>
        </div>
     );
}
 
export default NotFound