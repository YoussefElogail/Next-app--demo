export default async function  PostDeitales({params}) {
  await new Promise((resolve)=>{
    setTimeout(() => {
      resolve()
    }, 2000);
  })
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`,{
    next:{
      revalidate: 120
    }
  }) 
  const post = await res.json()
  return(
    <>
      <div style={{width:"100%",backgroundColor:"white", padding:"10px",borderRadius:"10px", color:"black",marginTop: "20px"}}>
        <h1>{post.title}</h1>
        <hr />
        <p>{post.body}</p>
      </div>
    </>
  )
}