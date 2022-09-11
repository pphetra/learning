import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function SingleChoiceUseForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      choice: "1",
      info: "",
    },
  });
  const choice = watch("choice");

  useEffect(() => {
    if (choice != "3") {
      setValue("info", "");
    }
  }, [choice, setValue]);

  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-gray-50 h-screen flex">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="m-8 p-8 bg-white rounded w-full">
          <h2>Singlechoices</h2>
          <div className="p-8">
            <h3>Age group</h3>
            <div>
              <div className="flex gap-2 items-center p-2">
                <input
                  type="radio"
                  id="choice1"
                  value="1"
                  {...register("choice")}
                />
                <label htmlFor="choice1">Choice 1</label>
              </div>
              <div className="flex gap-2 items-center p-2">
                <input
                  type="radio"
                  id="choice2"
                  value="2"
                  {...register("choice")}
                />
                <label htmlFor="choice2">Choice 2</label>
              </div>
              <div className="flex gap-2 items-center p-2">
                <input
                  type="radio"
                  id="choice3"
                  value="3"
                  {...register("choice")}
                />
                <label htmlFor="choice3">Choice 3</label>
              </div>
              {choice === "3" && (
                <div>
                  <label htmlFor="info">More info</label>
                  <input
                    id="info"
                    type="text"
                    name="info"
                    className="border"
                    {...register("info")}
                  />
                </div>
              )}
            </div>
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
