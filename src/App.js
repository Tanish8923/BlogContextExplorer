import { useContext, useEffect } from "react";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";

function App() {

  const {fetchBlogPosts , mode} = useContext(AppContext);

  useEffect(()=>{
    fetchBlogPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className={`App w-full h-full flex flex-col items-center ${mode ? 'bg-white' : 'bg-black opacity-90 '}`}>

      <Header/>
      <Blogs/>
      <Pagination/>

    </div>
  );
}

export default App;
