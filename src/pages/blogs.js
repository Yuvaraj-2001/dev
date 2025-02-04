import { useEffect } from "react";
// import { getMediumBlogs } from "../services/medium";
import { useFetchCollectionsQuery } from "../store/apis/blog";
import { useSearchParams } from "react-router-dom";

export default function Blogs() {
  const [searchParams] = useSearchParams();
  const ID = searchParams.get("id")
  // if(!ID){
  //   return <h1>No Blog ID provided</h1>
  // }
  const {data, error, isLoading, refetch} =  useFetchCollectionsQuery(ID);


  useEffect(() => {
    refetch(ID);
    console.log("Route changed:", ID);
  }, [ID]); 

  let content;
    if(isLoading){
        content = <div className="flex justify-center items-center h-full">
            <div className="w-12 h-12 rounded-full bg-slate-300 animate-spin" /> loading...
        </div>
    }else if(data){
      content = data?.map((n)=> <li><span className="hover:text-gray-300">{n.title}</span></li>)  
    }else if(error){
      return <div>Something Went Wrong</div>
    }

  return <div>
      {content}
  </div>;
}
