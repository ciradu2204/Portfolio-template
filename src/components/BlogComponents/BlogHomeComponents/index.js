import { useEffect, useState } from "react";
import axios from 'axios';
import Loader from "../../SharedComponents/Loader";
import { BlogsWrapper, BlogWrapper, BlogImage, BlogTitle, ReadMore } from './BlogHomeElements'
import { nanoid } from "nanoid";
import Footer from "../../SharedComponents/Footer";

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

  



    useEffect(() => {
        const getBlogs =async () => {
            setLoading(true);
            await axios.get('http://localhost:8000/wp-json/wp/v2/Blogs?_embed&filter[orderby]=date&order=desc')
                .then((response) => {
                    setLoading(false);
                    let elementsWidth = [];
                    let id = 0;
                    for (let data of response.data) {
                        let width = calculateImageWidth(id, elementsWidth)
                        elementsWidth.push(width);
                        let blog = {
                            "title": data.title.rendered,
                            "image": data._embedded['wp:featuredmedia'][0].source_url,
                            "description": data.content.rendered,
                            "width": width
                        }
                        setBlogs(blogs => [...blogs, blog]);
                        id = id +1;
                    }
                }).catch((error) => {
                    setLoading(false);
                    console.log(error)
                })
    
        }
        getBlogs();
        return () => {
            setBlogs([]);
        };
    }, [])

    return (
        <>
            {loading ? <Loader /> :
                <>
                    <BlogsWrapper>
                        {blogs.map((blog, index) => (
                            <BlogWrapper key={nanoid()} id={index + 1}>
                                <BlogImage src={blog.image} width={blog.width} />
                                <BlogTitle id={index + 1}>{blog.title.toUpperCase()}</BlogTitle>
                                <ReadMore to={{ pathname: `/blog/${index}`, state: { blog: blogs } }} id={index + 1}>Read More</ReadMore>
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