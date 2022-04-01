import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Contents from "../Contents/Contents";
import Intro from "../intro/intro";
import Menu from "../Menu/Menu";
import MovieDetail from "../MovieDetail/MovieDetail";

function Home() {
  const { MoviesDetail } = useSelector((state) => state.infoMovies);
  const [isShowMovieDetail, setIsShoMovieDetail] = useState(false);
  useEffect(() => {
    setIsShoMovieDetail(MoviesDetail ? true : false);
  }, [MoviesDetail]);
  return (
    <div>
      <Intro />
      <Contents />
      <Menu />
      <MovieDetail
        movie={MoviesDetail}
        showModal={isShowMovieDetail ? true : false}
      />
    </div>
  );
}

export default Home;
