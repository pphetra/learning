import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Register2() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(true);

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    setTimeout(() => {
      reset({
        email: "pphetra@gmail.com",
        gender: "f",
      });
      setLoading(false);
    }, 2000);
  }, [reset]);

  return (
    <div className="bg-gray-100 max-w-sm p-8 m-4 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label>email</label>
              <input
                type="email"
                name="email"
                className="border px-3 py-2"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col">
              <label>password</label>
              <input
                type="password"
                name="password"
                className="border  px-3 py-2"
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
            </div>
            <div className="flex flex-col">
              <label>confirm password</label>
              <input
                type="password"
                name="confirmPassword"
                className="border  px-3 py-2"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && <span>This field is required</span>}
            </div>
            <div className="flex flex-col">
              <label>Gender</label>
              <select
                className="h-10"
                name="gender"
                {...register("gender", { required: true })}
              >
                <option value="m">Male</option>
                <option value="f">Female</option>
              </select>
              {errors.gender && <span>This field is required</span>}
            </div>
            <div className="flex flex-col">
              <button
                type="submit"
                className="border bg-blue-500 text-white rounded  py-2"
              >
                Register
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default Register2;
