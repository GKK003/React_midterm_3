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
      <div className="w-24 h-240 bg-[#161D2F]  rounded-[20px] flex flex-col justify-start items-center pt-10 lg:hidden ">
        <img src={Movie} alt="" />
        <div className="flex flex-col justify-start items-center gap-10 mt-18">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `w-12 h-12 flex items-center justify-center rounded-full ${
                isActive
                  ? "bg-white"
                  : "hover:bg-red-500 transition-all duration-300"
              } `
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
              } `
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
              } `
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
              } `
            }
          >
            <img src={BMark} alt="bookmark" />
          </NavLink>
        </div>
        <img
          className="mt-110 rounded-full border-2 w-10 h-10 border-white"
          src={Profile}
          alt=""
        />
      </div>

      <div className="w-[90%] h-[72px] bg-[#161D2F]  rounded-[20px]  flex justify-between px-5 items-center  hidden lg:flex gg:w-full gg:rounded-[0px]">
        <img className="w-[25px] h-[20px]" src={Movie} alt="" />
        <div className="flex  justify-start items-center gap-10 sm:gap-8 gg:gap-2.5 ">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `w-9 h-9 flex items-center justify-center rounded-full ${
                isActive
                  ? "bg-white "
                  : "hover:bg-red-500 transition-all duration-300"
              }`
            }
          >
            <img className="sm:w-[16px] h-[16px]" src={Home} alt="home" />
          </NavLink>

          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `w-9 h-9 flex items-center justify-center rounded-full ${
                isActive
                  ? "bg-white"
                  : "hover:bg-red-500 transition-all duration-300"
              }`
            }
          >
            <img className="sm:w-[16px] h-[16px]" src={Movies} alt="movies" />
          </NavLink>

          <NavLink
            to="/tvseries"
            className={({ isActive }) =>
              `w-9 h-9 flex items-center justify-center rounded-full ${
                isActive
                  ? "bg-white"
                  : "hover:bg-red-500 transition-all duration-300"
              }`
            }
          >
            <img className="sm:w-[16px] h-[16px]" src={Tv} alt="tv" />
          </NavLink>

          <NavLink
            to="/bookmarked"
            className={({ isActive }) =>
              `w-9 h-9 flex items-center justify-center rounded-full ${
                isActive
                  ? "bg-white"
                  : "hover:bg-red-500 transition-all duration-300"
              } `
            }
          >
            <img className="sm:w-[16px] h-[16px]" src={BMark} alt="bookmark" />
          </NavLink>
        </div>
        <img
          className=" rounded-full border-2 w-10 h-10 border-white sm:w-[24px] sm:h-[24px]"
          src={Profile}
          alt=""
        />
      </div>
    </>
  );
}

export default MainDiv;
