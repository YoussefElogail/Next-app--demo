import Link from "next/link"
import Todo from "../components/Todo"

export default async () => {
    const response= await fetch('https://jsonplaceholder.typicode.com/posts',{
      next:{
        revalidate : 120,
        
      }
    })
    const posts = await response.json()
      
    const postsJSX = posts.map((post)=>(
      <Link style={{width:"70%"}}  href={`posts/${post.id}`}>
        <div key={post.id} style={{width:"100%",backgroundColor:"white", padding:"10px",borderRadius:"10px", color:"black",marginTop: "20px"}}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </Link>
    ))

  return (
    <>
      <h1>Posts Page</h1>
      
      {/* <h2>{posts.title}</h2> */}
      
      {/* <div>
        <Todo />
      </div> */}
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",  alignItems:"center"}}>
    {postsJSX}
    </div>
    </>
  )
}

