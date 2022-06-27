import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config/config";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <div className="py-10">
      <div className="w-full h-[600px] relative mb-10 ">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>

      <div className="w-full h-[300px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10 ">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          className="w-full h-full object-cover rounded-xl"
          alt=""
        />
      </div>

      <h1 className="text-center text-3xl font-bold text-white mb-10">
        {title}
      </h1>

      {genres.length > 0 && (
        <div className="flex items-center gap-x-5 mb-10 justify-center">
          {genres.map((item) => (
            <span
              className="py-2 px-4 border-primary text-white border rounded-lg "
              key={item.id}
            >
              {" "}
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className=" text-center mx-auto leading-relaxed max-w-[600px]">
        {overview}
      </p>
    </div>
  );
};

function MovieCredit(){
  return (dv)
}
export default MovieDetailPage;
