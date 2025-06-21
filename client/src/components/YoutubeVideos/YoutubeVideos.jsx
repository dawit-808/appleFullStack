import { useEffect, useState } from "react";
import "./YoutubeVideos.css";

function YoutubeVideos() {
  const [videos, setVideos] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;
  const channelId = "UCE_M8A5yxnLfW0KghEeajjw";

  useEffect(() => {
    const dataFetcher = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=9&order=date&key=${apiKey}`;

    fetch(dataFetcher)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-4 text-center fw-bold">Latest Videos</h2>
        <div className="row">
          {videos?.map((video) => (
            <div className="col-md-4 mb-4" key={video.id.videoId}>
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="card h-100">
                  <img
                    src={video.snippet.thumbnails.high.url}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{video.snippet.title}</h5>
                    <p className="card-text">{video.snippet.description}</p>
                    <small className="text-muted">
                      Published:{" "}
                      {new Date(video.snippet.publishedAt).toLocaleDateString()}
                    </small>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default YoutubeVideos;
