import { useForm } from "react-hook-form";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const double = true;

  return (
    <form
      className={`${
        double ? "max-w-5xl" : "max-w-md"
      } p-5 border border-red-800 mx-auto`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={`border ${double?"md:grid-cols-2":""} border-blue-800 grid grid-cols-1 gap-4 justify-items-center`}>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            className="cInput"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="email">
            email
          </label>
          <input
            className="cInput"
            type="text"
            id="email"
            {...register("email")}
          />
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            className="cInput"
            type="text"
            id="password"
            {...register("password")}
          />
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default NormalForm;
