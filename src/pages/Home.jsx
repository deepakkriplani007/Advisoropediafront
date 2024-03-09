import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import Navbar from "../component/Navbar";
import Loader from "../component/Loader";

const Home = ({ setToken }) => {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(false);
  const fetchMorePosts = async () => {
    if (loading) return; // Avoid duplicate fetch requests
    setLoading(true);
    try {
      const res = await fetch(`https://dummyjson.com/recipes?limit=10`);
      const data = await res.json();
      setPosts((prevPosts) => [...prevPosts, ...data.recipes]);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/recipes?limit=10`);
        const data = await response.json();
        setPosts(data.recipes);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.scrollHeight
      ) {
        console.log("pikachu");
        fetchMorePosts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [posts]);
  const handlelength = () => {
    console.log(window.innerHeight + document.documentElement.scrollTop);
    console.log(document.documentElement.scrollHeight);
    console.log(posts.length);
  };
  return (
    <div className="bg-black h-auto">
      <Navbar setToken={setToken} />
      <div className="pl-10 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 pb-10">
        {posts ? (
          posts.map((post, index) => <Card post={post} key={index} />)
        ) : (
          <></>
        )}{" "}
        {loading && (
          <div className="h-[200px] w-[300px]">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
