// import { Suspense } from "react";

export const DocumentMetadata = () => {
  const post = {
    title: "Document Metadata",
    keywords: "metadata, document, head",
  };
  return (
    <>
      <title>{post.title}</title>
      {/* <link rel="author" href="https://twitter.com/joshcstory/" />
      <meta name="author" content="Josh" />
      <meta name="keywords" content={post.keywords} /> */}

      {/*//! CSS with precedence property !//*/}
      {/* <link rel="stylesheet" href="styles.css" precedence="default" />
      <link rel="stylesheet" href="styles2.css" precedence="default" />
      <link
        rel="stylesheet"
        href="importantStyleGoFirst.css"
        precedence="high"
      /> */}

      {/*//! Suspense block supported !//*/}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <link rel="stylesheet" href="styles.css" precedence="default" />
        <link rel="stylesheet" href="styles2.css" precedence="default" />
        <link
          rel="stylesheet"
          href="importantStyleGoFirst.css"
          precedence="high"
        />
      </Suspense> */}
      <div>
        <h2>Document Metadata</h2>
      </div>
    </>
  );
};
