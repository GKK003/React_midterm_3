import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Movie from "../../assets/Movie.png";

type Form = {
  email: string;
  password: string;
  repeatPassword: string;
};

function SignUpBox() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Form>({
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  const passwordValue = watch("password");

  const submit = (data: Form) => {
    const userData = {
      email: data.email,
      password: data.password,
    };

    localStorage.setItem("registerData", JSON.stringify(userData));
    reset();

    alert("Registration successful");
    navigate("/");
  };

  return (
    <div className="w-full flex flex-col gap-20 justify-center items-center min-h-screen bg-[#10141E] px-4">
      <img className="w-[32px] h-[25.6px]" src={Movie} alt="" />

      <div className="max-w-[400px] w-full flex flex-col text-white pl-8 pt-10 pb-8 justify-start bg-[#161D2F] min-h-[418px] rounded-[20px]">
        <h1 className="text-[32px] mb-8">Sign Up</h1>

        <form
          onSubmit={handleSubmit(submit)}
          className="flex flex-col gap-6 w-full"
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

          <div className="w-full">
            <div
              className={`w-[90%] border-b-2 flex items-center justify-between pb-3 transition-all duration-200 hover:border-white ${
                errors.repeatPassword ? "border-[#FC4747]" : "border-[#5A698F]"
              }`}
            >
              <input
                type="password"
                placeholder="Repeat password"
                className="w-full bg-transparent outline-none text-white placeholder:text-[#5A698F]"
                {...register("repeatPassword", {
                  required: "Can’t be empty",
                  validate: (value) =>
                    value === passwordValue || "Passwords do not match",
                })}
              />
              {errors.repeatPassword && (
                <span className="text-[#FC4747] text-[13px] whitespace-nowrap ml-3">
                  {errors.repeatPassword.message}
                </span>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-[90%] h-[48px] bg-[#FC4747] rounded-[6px] text-white transition-all duration-200 hover:bg-white hover:text-[#161D2F] cursor-pointer"
          >
            Create an account
          </button>
        </form>

        <div className="w-[90%] flex justify-center gap-2 mt-6 text-[15px]">
          <p>Already have an account?</p>
          <Link
            to="/"
            className="text-[#FC4747] transition duration-200 hover:text-white"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpBox;
