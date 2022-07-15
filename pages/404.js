import Link from "next/link";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Sorry..</h1>
            <h2>Page not found!</h2>
            <Link href="/"><a>Go to home page</a></Link>
        </div>
     );
}
 
export default NotFound