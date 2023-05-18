import React, { useState, useEffect } from "react";
import ImageList from "./components/ImageList";
import Loading from "./components/Loading";
import useScroll from "./hooks/useScroll";

function App() {
  const [imageList, setImageList] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const isBottom = useScroll();

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    if (isBottom === true) {
      setPage((prevPage) => {
        return prevPage + 1;
      });
    }
  }, [isBottom]);

  async function fetchImages() {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=5`
      );
      if (!response.ok) {
        throw new Error("네트워크에 문제가 있습니다.");
      }
      const data = await response.json();
      setImageList((prevImgs) => {
        return [...prevImgs, ...data];
      });
      setIsLoading(false);
    } catch (error) {
      console.error("데이터를 가져오는데 문제가 생겼습니다.", error);
      setIsLoading(false);
    }
  }

  return (
    <div>
      hello world
      <ImageList imageList={imageList} />
      {isLoading && <Loading />}
    </div>
  );
}
export default App;
