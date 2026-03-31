import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Movie from "../../assets/Movie.png";

type Form = {
  email: string;
  password: string;
};

type User = {
  email: string;
  password: string;
};

function SigninBox() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<Form>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submit = (data: Form) => {
    const savedData = localStorage.getItem("registerData");
    const parsedData: User | null = savedData ? JSON.parse(savedData) : null;

    if (!parsedData) {
      alert("User not found");

      setError("email", {
        type: "manual",
        message: "No registered user found",
      });
      reset();
      return;
    }

    const isMatch =
      data.email === parsedData.email && data.password === parsedData.password;

    if (isMatch) {
      localStorage.setItem("Logged", "true");
      reset();
      alert("Login successful");
      navigate("/home");
    } else {
      setError("password", {
        type: "manual",
        message: "Email or password is incorrect",
      });
      alert("Wrong user or password");

      reset();
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#10141E] flex flex-col items-center justify-center gap-20 px-4">
      <img className="w-[32px] h-[25.6px]" src={Movie} alt="movie" />

      <div className="max-w-[400px] w-full min-h-[373px] bg-[#161D2F] rounded-[20px] pl-8 pt-8 text-white flex flex-col">
        <h1 className="text-[32px] font-light mb-8">Login</h1>

        <form
          onSubmit={handleSubmit(submit)}
          className="w-full flex flex-col gap-6"
        >
          <div className="w-full">
            <div
              className={`w-[90%] border-b-2 flex items-center justify-between pb-3 transition-all duration-200 hover:border-white ${
                errors.email ? "border-[#FC4747]" : "border-[#5A698F]"
              }`}
            >
              <input
                type="text"
                placeholder="Email address"
                className="w-full bg-transparent outline-none text-white placeholder:text-[#5A698F]"
                {...register("email", {
                  required: "Can’t be empty",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email",
                  },
                })}
              />

              {errors.email && (
                <span className="text-[#FC4747] text-[13px] whitespace-nowrap ml-3">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          <div className="w-full">
            <div
              className={`w-[90%] border-b-2 flex items-center justify-between pb-3 transition-all duration-200 hover:border-white ${
                errors.password ? "border-[#FC4747]" : "border-[#5A698F]"
              }`}
            >
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent outline-none text-white placeholder:text-[#5A698F]"
                {...register("password", {
                  required: "Can’t be empty",
                  minLength: {
                    value: 6,
                    message: "Min 6 characters",
                  },
                })}
              />

              {errors.password && (
                <span className="text-[#FC4747] text-[13px] whitespace-nowrap ml-3">
                  {errors.password.message}
                </span>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-[90%] h-[48px] mt-2 bg-white rounded-[6px] text-[#161D2F] transition-all duration-200 hover:bg-[#FC4747] hover:text-white cursor-pointer"
          >
            Login to your account
          </button>
        </form>

        <div className="w-[90%] flex justify-center gap-2 mt-6 text-[15px]">
          <p>Don’t have an account?</p>
          <Link
            to="/register"
            className="text-[#FC4747] transition duration-200 hover:text-white"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SigninBox;
