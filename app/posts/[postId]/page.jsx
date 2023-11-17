import PostDeitales from "@/app/components/PostDitales";
import { Suspense } from "react";

export default async ({ params }) => {
  const lodadingJSX = (<>
  <h2>loading.......</h2>
  </>)
  return (
    <>
      <h1> post details</h1>
      <Suspense fallback={lodadingJSX}>
      <PostDeitales params={params} />
      </Suspense>
    </>
  );
};
