import React from "react";
import Section1 from "../components/Section1/Section1";
import Section2 from "../components/Section2/Section2";
import Section3 from "../components/Section3/Section3";
import Cards from "../components/Cards/Cards";
import YoutubeVideos from "../components/YoutubeVideos/YoutubeVideos";

function Home() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Cards />
      <YoutubeVideos />
    </>
  );
}

export default Home;
