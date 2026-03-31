import MainDiv from "../components/__organisms/MainDiv";
import Search from "../assets/search.png";
import data from "../Data.json";
import { useState } from "react";
import Bookmarked from "../assets/smallbookmarked.png";

function BookmarkedPage() {
  const [search, setSearch] = useState("");

  const bookmarkedMovies = data.filter(
    (el) => el.isBookmarked && el.category === "Movie",
  );

  const bookmarkedTvSeries = data.filter(
    (el) => el.isBookmarked && el.category === "TV Series",
  );

  const filteredMovies = search.trim()
    ? bookmarkedMovies.filter((el) =>
        el.title.toLowerCase().includes(search.toLowerCase()),
      )
    : bookmarkedMovies;

  const filteredTvSeries = search.trim()
    ? bookmarkedTvSeries.filter((el) =>
        el.title.toLowerCase().includes(search.toLowerCase()),
      )
    : bookmarkedTvSeries;

  return (
    <div className="flex justify-start items-start gap-11 pl-8 py-5 lg:flex-col gg:pl-0 gg:py-0">
      <MainDiv />

      <div className="w-[80%] mt-15 flex flex-col items-center justify-center">
        <div className="w-[80%] mt-3 border-b-2 border-transparent focus-within:border-[#5A698F] relative">
          <img
            src={Search}
            alt="search"
            className="absolute w-6 h-6 top-1.25"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-9 w-full bg-transparent pl-10 text-white  placeholder:text-white placeholder:opacity-50 placeholder:text-[15px] outline-none"
            placeholder="Search for bookmarked shows"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white text-[32px] mb-10 gg:ml-10 ">
            Bookmarked Movies
          </h1>

          <div className="flex flex-wrap justify-start gap-6 mb-12 sm:justify-center">
            {filteredMovies.map((el) => (
              <div key={el.title} className="flex flex-col gap-2 w-[220px]">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={el.thumbnail.regular.large}
                    alt={el.title}
                    className="rounded-lg w-full object-cover"
                  />
                  <div className="absolute top-3 right-3 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
                    <img
                      src={Bookmarked}
                      alt="bookmarked"
                      className="w-3 h-4"
                    />
                  </div>
                </div>

                <div className="text-[#FFFFFF99] text-xs flex gap-2 items-center">
                  <span>{el.year}</span>
                  <span>•</span>
                  <span>{el.category}</span>
                  <span>•</span>
                  <span>{el.rating}</span>
                </div>

                <p className="text-white text-sm font-medium">{el.title}</p>
              </div>
            ))}
          </div>

          <h1 className="text-white text-[32px] mb-10">Bookmarked TV Series</h1>

          <div className="flex flex-wrap justify-start gap-6 mb-12 sm:justify-center">
            {filteredTvSeries.map((el) => (
              <div key={el.title} className="flex flex-col gap-2 w-[220px]">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={el.thumbnail.regular.large}
                    alt={el.title}
                    className="rounded-lg w-full object-cover"
                  />
                  <div className="absolute top-3 right-3 w-8 h-8 bg-black opacity-50 rounded-full flex items-center justify-center">
                    <img
                      src={Bookmarked}
                      alt="bookmarked"
                      className="w-3 h-4"
                    />
                  </div>
                </div>

                <div className="text-[#FFFFFF] text-[12px] flex gap-2 items-center">
                  <span className="text-white opacity-75">{el.year}</span>
                  <span className="text-white opacity-75">•</span>
                  <span className="text-white opacity-75">{el.category}</span>
                  <span className="text-white opacity-75">•</span>
                  <span className="text-white opacity-75 ">{el.rating}</span>
                </div>

                <p className="text-white text-[14px] font-medium">{el.title}</p>
              </div>
            ))}
          </div>

          {filteredMovies.length === 0 && filteredTvSeries.length === 0 && (
            <p className="text-[#5A698F] mt-10">No bookmarked results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookmarkedPage;
