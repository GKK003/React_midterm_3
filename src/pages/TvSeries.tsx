import { useState } from "react";
import MainDiv from "../components/__organisms/MainDiv";
import Search from "../assets/search.png";
import data from "../Data.json";
import Bookmarked from "../assets/smallbookmarked.png";
import Bookmark from "../assets/smallbookmark.png";

function TvSeries() {
  const [search, setSearch] = useState("");

  const tvSeries = data.filter((el) => el.category === "TV Series");

  const displayed = search.trim()
    ? tvSeries.filter((el) =>
        el.title.toLowerCase().includes(search.toLowerCase()),
      )
    : tvSeries;

  let title = "TV Series";

  if (search.trim()) {
    if (displayed.length === 1) {
      title = `Found 1 result for '${search}'`;
    } else {
      title = `Found ${displayed.length} results for '${search}'`;
    }
  }

  return (
    <div className="flex justify-start items-start gap-11 pl-8 py-5 lg:flex-col gg:pl-0 gg:py-0">
      <MainDiv />

      <div className="w-[80%] mt-15 flex flex-col items-center justify-center">
        <div className="w-[80%] mt-3 border-b-2 border-transparent focus-within:border-[#5A698F] relative">
          <img src={Search} alt="" className="absolute w-6 h-6 top-1.25" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-9 w-full bg-transparent pl-10 text-white placeholder:text-white placeholder:opacity-50 placeholder:text-[15px] outline-none "
            placeholder="Search for TV series"
          />
        </div>

        <div className="flex justify-center items-center flex-col">
          <h1 className="text-white text-[32px] mb-6">{title}</h1>

          <div className="flex flex-wrap justify-start gap-6 mb-12 sm:justify-center">
            {displayed.map((el) => (
              <div
                key={el.title}
                className="flex flex-col gap-2 w-[220px] group"
              >
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={el.thumbnail.regular.large}
                    alt={el.title}
                    className="rounded-lg w-full object-cover"
                  />

                  <button
                    onClick={() => el.title}
                    className="absolute top-3 right-3 w-8 h-8 bg-black opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-white transition-all duration-200"
                  >
                    <img
                      src={Bookmark.includes(el.title) ? Bookmarked : Bookmark}
                      alt="bookmark"
                      className="w-3 h-4"
                    />
                  </button>
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

          {displayed.length === 0 && (
            <p className="text-[#5A698F] mt-10">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TvSeries;
