import Movie from "../../assets/Movie.png";
import Tv from "../../assets/tv.png";
import BMark from "../../assets/Bookmark.png";
import Movies from "../../assets/both.svg";
import Home from "../../assets/Home.png";
import Profile from "../../assets/profile.png";
import { NavLink } from "react-router-dom";

function MainDiv() {
  return (
    <>
      <div className="w-[96px] h-[960px] bg-[#161D2F]  rounded-[20px] flex flex-col justify-start items-center pt-10">
        <img src={Movie} alt="" />
        <div className="flex flex-col justify-start items-center gap-10 mt-18">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `w-12 h-12 flex items-center justify-center rounded-full ${
                isActive
                  ? "bg-white "
                  : "hover:bg-red-500 transition-all duration-300"
              }`
            }
          >
            <img src={Home} alt="home" />
          </NavLink>

          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `w-12 h-12 flex items-center justify-center rounded-full ${
                isActive
                  ? "bg-white"
                  : "hover:bg-red-500 transition-all duration-300"
              }`
            }
          >
            <img src={Movies} alt="movies" />
          </NavLink>

          <NavLink
            to="/tvseries"
            className={({ isActive }) =>
              `w-12 h-12 flex items-center justify-center rounded-full ${
                isActive
                  ? "bg-white"
                  : "hover:bg-red-500 transition-all duration-300"
              }`
            }
          >
            <img src={Tv} alt="tv" />
          </NavLink>

          <NavLink
            to="/bookmarked"
            className={({ isActive }) =>
              `w-12 h-12 flex items-center justify-center rounded-full ${
                isActive
                  ? "bg-white"
                  : "hover:bg-red-500 transition-all duration-300"
              }`
            }
          >
            <img src={BMark} alt="bookmark" />
          </NavLink>
        </div>
        <img
          className="mt-110 rounded-full border-2 w-[40px] h-[40px] border-white"
          src={Profile}
          alt=""
        />
      </div>
    </>
  );
}

export default MainDiv;
