import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum-1...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum-2...", author: "yoshi", id: 1 },
    { title: "Web dev top tips", body: "lorem ipsum-3...", author: "mario", id: 3 },
    { title: "Web dev top tips", body: "lorem ipsum-4...", author: "mario", id: 4 },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
