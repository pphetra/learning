import { useEffect } from "react";
import { useForm } from "react-hook-form";

function Question(props) {
  const {
    label,
    name,
    options,
    register,
    watch,
    infoName,
    setValue,
    infoChoice,
  } = props;
  const value = watch(name);
  useEffect(() => {
    if (value != infoChoice) {
      setValue(infoName, "");
    }
  }, [infoChoice, setValue, value, infoName]);

  return (
    <div className="p-8">
      <h3>
        {label} ({name})
      </h3>
      <div>
        {options.map((option) => (
          <div key={option.label} className="flex gap-2 items-center p-2">
            <input
              type="radio"
              value={option.value}
              id={`${name}-${option.label}`}
              {...register(name)}
            />
            <label htmlFor={`${name}-${option.label}`}>
              {option.label} ({name})
            </label>
          </div>
        ))}
        {value === infoChoice && (
          <div>
            <label htmlFor="info">More info</label>
            <input
              id="info"
              type="text"
              name="info"
              className="border"
              {...register(infoName)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

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
      test: "1",
      infoTest: "",
      another: "2",
      infoAnother: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  const options = [
    { label: "Choice 1", value: "1" },
    { label: "Choice 3", value: "3" },
    { label: "Choice 2", value: "2" },
  ];

  return (
    <div className="bg-gray-50 h-screen flex">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="m-8 p-8 bg-white rounded w-full">
          <h2>Singlechoices</h2>
          <Question
            label="Age Group"
            name="choice"
            infoName="info"
            infoChoice="3"
            options={options}
            register={register}
            setValue={setValue}
            watch={watch}
          />

          <Question
            label="test"
            name="test"
            infoName="infoTest"
            infoChoice="3"
            options={options}
            register={register}
            setValue={setValue}
            watch={watch}
          />

          <Question
            label="another"
            name="another"
            infoName="infoAnother"
            infoChoice="3"
            options={options}
            register={register}
            setValue={setValue}
            watch={watch}
          />

          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
