import Link from "next/link"



export default () => {
  return (
    <>
      <h1>Articles</h1>

      <Link href="/posts">
        <button>
          Take me to posts page
        </button>
      </Link>
    </>
  )
}

