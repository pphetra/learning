function Register2() {
  return (
    <div className="bg-gray-100 max-w-sm p-8 m-4 mx-auto">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label>email</label>
          <input type="text" name="email" className="border px-3 py-2" />
        </div>
        <div className="flex flex-col">
          <label>password</label>
          <input
            type="password"
            name="password"
            className="border  px-3 py-2"
          />
        </div>
        <div className="flex flex-col">
          <label>confirm password</label>
          <input
            type="password"
            name="confirmPassword"
            className="border  px-3 py-2"
          />
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
    </div>
  );
}

export default Register2;
