import { useCallback, useEffect, useState } from "react";
import axios from 'axios';
import Loader from "../../Shared/Loader";
import { BlogsWrapper, BlogWrapper, BlogImage, BlogTitle, ReadMore } from './BlogHomeElements'
import { nanoid } from "nanoid";
import Footer from "../../Shared/Footer";

const BlogHome = () => {
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);

    const calculateImageWidth = (id, array) => {

        if (id === 0) {
            return "100vw"
        } else if (id === 1) {
            return "55vw"
        } else if (id === 2) {
            return "40vw"
        } else if (id === 3) {
            return "40vw";
        } else {
            if (array[id - 1] === array[id - 2]) {
                return array[id - 3]
            } else {
                return array[id - 1]
            }
        }
    }
    const getBlogs =  useCallback(async() => {
        setLoading(true);
        try {
            const blogs =  await axios.get(`https://dev.to/api/articles?username=ciradu2204`)
            let elementsWidth = [];
            let id = 0;
            for (let data of blogs.data) {
             let width = calculateImageWidth(id, elementsWidth)
             elementsWidth.push(width);
             try {
              const blogPerId = await axios.get(`https://dev.to/api/articles/${data.id}?username=ciradu2204`)
              const blog = {
                    "image": data.social_image,
                    "title": blogPerId.data.title,
                    "description":blogPerId.data.body_html ,
                    "width": width
              }
              setBlogs(blogs => [...blogs, blog]);
              id = id +1;
              setLoading(false)
             } catch (error) {
                setLoading(false)
                console.log(error)
             }
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }, [])


    useEffect(() => {
        getBlogs();
        return () => {
            setBlogs([]);
        };
    }, [getBlogs])

    return (
        <>
            {loading ? <Loader /> :
                <>
                    <BlogsWrapper>
                        {blogs.map((blog, index) => (
                            <BlogWrapper key={nanoid()} id={index + 1}>
                                <BlogImage src={blog.image} width={blog.width} />
                                <BlogTitle id={index + 1}>{blog.title.toUpperCase()}</BlogTitle>
                                <ReadMore to={{ pathname: `/blogs/${index}`, state:{blogs}}} id={index + 1}>Read More</ReadMore>
                            </BlogWrapper>
                        ))
                        }
                    </BlogsWrapper>
                    <Footer />
                </>
            }
        </>
    )
}

export default BlogHome;