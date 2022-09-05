import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Select from "react-select";
import provinceData from "../components/province.json";

const formSchema = Yup.object().shape({
  emai: Yup.string().email(),
  password: Yup.string()
    .required("Password is mendatory")
    .min(3, "Password must be at 3 char long"),
  confirmPassword: Yup.string()
    .required("Password is mendatory")
    .oneOf([Yup.ref("password")], "Passwords does not match"),
  provinceId: Yup.string().required("กรุณาระบุจังหวัด"),
});

function Register4() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

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

              {errors.password && (
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label>confirm password</label>
              <input
                type="password"
                name="confirmPassword"
                className="border  px-3 py-2"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">
                  {errors.confirmPassword?.message}
                </div>
              )}
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
              <label>Gender</label>
              <Controller
                name="provinceId"
                control={control}
                render={({ field }) => (
                  <Select
                    inputRef={field.ref}
                    classNamePrefix="province-select"
                    options={provinceData}
                    value={provinceData.find((p) => p.id === field.value)}
                    getOptionLabel={(o) => o.name}
                    getOptionValue={(o) => o.id}
                    onChange={(val) => field.onChange(val.id)}
                  />
                )}
              />
              {errors.provinceId && (
                <div className="invalid-feedback">
                  {errors.provinceId?.message}
                </div>
              )}
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

export default Register4;
