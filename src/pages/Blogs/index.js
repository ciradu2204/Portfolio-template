import BlogHome from "../../components/Blog/BlogHomeComponents"
import {BlogsHeader, BlogsIntro } from "./BlogsElements";


const Blogs = () => {
     return (

          <>
 
                    <BlogsHeader>BLOGS</BlogsHeader>
                    <BlogsIntro>The following blogs share knowledge and experience that I have acquired through the different programs, courses, and books I have read.  </BlogsIntro>
                    <BlogHome />
 
          </>
     )
}

export default Blogs