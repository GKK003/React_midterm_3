import MainDiv from "../components/__organisms/MainDiv";
import Search from "../assets/search.png";
import Bookmarked from "../assets/smallbookmarked.png";
import Bookmark from "../assets/smallbookmark.png";

function BookMarkedPage() {
  return (
    <div className="flex justify-start gap-11 pl-8 py-5">
      <MainDiv />
      <div className="w-[80%] mt-15 ">
        <div className="w-[80%] mt-3 border-b-2 border-transparent focus-within:border-[#5A698F] relative">
          <img src={Search} alt="" className="absolute w-6 h-6 top-1.25" />
          <input
            type="text"
            className="h-9 w-full bg-transparent pl-10 text-white placeholder:text-white/50 outline-none"
            placeholder="Search for movies or TV series"
          />
        </div>
      </div>
    </div>
  );
}

export default BookMarkedPage;
