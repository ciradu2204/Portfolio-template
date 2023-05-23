import BlogHome from "../../components/Blog/BlogHomeComponents"
import {BlogsHeader, BlogsIntro } from "./BlogsElements";


const Blogs = () => {
     return (

          <>
 
                    <BlogsHeader>BLOGS</BlogsHeader>
                    <BlogsIntro>The following blogs share knowledge gained and experience that I have acquired through participating in different programs.  </BlogsIntro>
                    <BlogHome />
 
          </>
     )
}

export default Blogs