import BlogEditor from "../components/BlogEditor";
import "./pages style/Blog.css";

function Blog() {

  return (
    <>
      <div className="blog">
          <div className="blog-box">
            <h4>Write a new blog:</h4>
            <BlogEditor/>
          </div>
      </div>
    </>
  );
}

export default Blog;
