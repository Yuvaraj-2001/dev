import { useEffect, useState } from "react";
import { useFetchCollectionsQuery, useFetchBlogQuery } from "../store/apis/blog";
import { useSearchParams } from "react-router-dom";

export default function Blogs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const learnID = searchParams.get("id");
  const urlBlogID = searchParams.get("blog"); // Blog ID from URL

  const [blogID, setBlogID] = useState(urlBlogID || null); // Local state for blogID

  // Fetch Collections
  const { data: collections, error, isLoading } = useFetchCollectionsQuery(learnID, { skip: !learnID });

  // Fetch Blog only when blogID is available
  const { data: blogData, error: blogError, isLoading: blogLoading } = useFetchBlogQuery(blogID, { skip: !blogID });

  // Effect to fetch blog after collections load
  useEffect(() => {
    if (collections && collections.length > 0 && !urlBlogID) {
      const firstBlogID = btoa(collections[0].topics_id); // Encode topics_id
      setBlogID(firstBlogID);
      setSearchParams({ id: learnID, blog: firstBlogID });
    }
  }, [collections, urlBlogID, learnID]);

  // Collection Content
  let collectionContent;
  if (isLoading) {
    collectionContent = <div>Loading collections...</div>;
  } else if (error) {
    collectionContent = <div>Error loading collections</div>;
  } else if (collections) {
    collectionContent = collections.map((n) => (
      <li key={n.id}>
        <span className="hover:text-gray-300">{n.title}</span>
      </li>
    ));
  }

  // Blog Content
  let blogContent;
  if (blogLoading) {
    blogContent = <div>Loading blog...</div>;
  } else if (blogError) {
    blogContent = <div>Error loading blog</div>;
  } else if (blogData) {
    const firstBlog = blogData[0];
    const jsonContent = JSON.parse(firstBlog.content);
    blogContent = (
      <div>
        <h1>{firstBlog.heading}</h1>
        {jsonContent.map((x, index) => (
          <div key={index}>{x}</div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="flex">
        <div className="w-1/5">{collectionContent}</div>
        <div className="w-3/5">{blogContent}</div>
      </div>
    </div>
  );
}
