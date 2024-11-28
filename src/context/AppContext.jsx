import { createContext, useState } from "react";

// step1 create context
export const AppContext = createContext();
export function AppContextProvider({children}){

    const baseUrl = process.env.REACT_APP_API_URL;    

    const [loading , setLoading] = useState(false);
    const [posts , setPosts] = useState([]);
    const [page , setPage] = useState(1);
    const [totalPages , setTotalPages] = useState(null);
    const [mode , setMode] = useState(true)
    

    //data filling
    async function fetchBlogPosts(page = 1) {
        
        setLoading(true);

        const url = `${baseUrl}?page=${page}`

        try {
            
            const post = await fetch(url);
            const data = await post.json();
            // console.log(data);
            setTotalPages(data.totalPages);
            setPosts(data.posts);
            setPage(data.page);

        } catch (error) {
            console.log("Error in API calling");
            setPage(1);
            setTotalPages(null)
            setPosts([]);
        }
        setLoading(false);
    }


    function handlePageChange(page){
       
        setPage(page);
        fetchBlogPosts(page);
        
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        mode , 
        setMode,
        fetchBlogPosts,
        handlePageChange
    }
    
// step2 provide context    

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}