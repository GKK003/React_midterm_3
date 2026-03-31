import { useState } from "react";
import MainDiv from "../components/__organisms/MainDiv";
import Search from "../assets/search.png";
import data from "../Data.json";
import Bookmarked from "../assets/smallbookmarked.png";
import Bookmark from "../assets/smallbookmark.png";

function TvSeries() {
  const [search, setSearch] = useState("");
  const [bookmarks, setBookmarks] = useState<string[]>(
    data.filter((i) => i.isBookmarked).map((i) => i.title),
  );

  const toggleBookmark = (title: string) => {
    setBookmarks((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );
  };

  const tvSeries = data.filter((item) => item.category === "TV Series");

  const displayed = search.trim()
    ? tvSeries.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      )
    : tvSeries;

  return (
    <div className="flex justify-start gap-11 pl-8 py-5">
      <MainDiv />

      <div className="w-[80%] mt-15">
        <div className="w-[80%] mt-3 border-b-2 border-transparent focus-within:border-[#5A698F] relative">
          <img src={Search} alt="" className="absolute w-6 h-6 top-1.25" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-9 w-full bg-transparent pl-10 text-white placeholder:text-white/50 outline-none"
            placeholder="Search for movies or TV series"
          />
        </div>

        <div className="flex-1 p-8">
          <h1 className="text-white text-2xl mb-6">
            {search.trim()
              ? `Found ${displayed.length} result${displayed.length !== 1 ? "s" : ""} for '${search}'`
              : "TV Series"}
          </h1>

          <div className="flex flex-wrap gap-6">
            {displayed.map((show) => (
              <div
                key={show.title}
                className="flex flex-col gap-2 w-[220px] group"
              >
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={show.thumbnail.regular.large}
                    alt={show.title}
                    className="rounded-lg w-full object-cover"
                  />

                  <button
                    onClick={() => toggleBookmark(show.title)}
                    className="absolute top-3 right-3 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-white transition-all duration-200"
                  >
                    <img
                      src={
                        bookmarks.includes(show.title) ? Bookmarked : Bookmark
                      }
                      alt="bookmark"
                      className="w-3 h-4"
                    />
                  </button>
                </div>

                <div className="text-[#FFFFFF99] text-xs flex gap-2 items-center">
                  <span>{show.year}</span>
                  <span>•</span>
                  <span>{show.category}</span>
                  <span>•</span>
                  <span>{show.rating}</span>
                </div>

                <p className="text-white text-sm font-medium">{show.title}</p>
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
