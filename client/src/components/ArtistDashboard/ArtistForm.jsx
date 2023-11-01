import { useForm } from "react-hook-form";

const ArtistForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div className="w-full relative mt-4 shadow-2xl rounded my-2 overflow-hidden">
      <div className="top h-full w-full bg-blue-600 overflow-hidden relative rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt=""
          className="bg w-full h-full object-cover object-center absolute z-0"
        />
        <div className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            className="h-64 w-64 object-cover rounded-full"
          />
          <h1 className="text-2xl font-semibold">Antonia Howell</h1>
          <h4 className="text-sm font-semibold">Dj Tonia</h4>
        </div>
      </div>
      <div className="grid grid-cols-12 bg-white items-center object-center-absolute">
        <div className="col-span-8 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-6 items-center">
          <div className="px-4 pt-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-3 "
              action="#"
            >
              <div>
                <h3 className="text-2xl font-semibold">Basic Information</h3>
                <hr />
              </div>

              <div className="form-item">
                <label className="text-lg ">Name</label>
                <input
                  type="text"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                  {...register("name", { required: true, maxLength: 15 })}
                />
              </div>
              <div className="form-item">
                <label className="text-lg ">Lastname</label>
                <input
                  type="text"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                  {...register("Lastname", { required: true, maxLength: 15 })}
                />
              </div>
              <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                <div className="form-item w-full">
                  <label className="text-lg ">Username</label>
                  <input
                    type="text"
                    className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 "
                    {...register("username", { required: true, maxLength: 25 })}
                  />
                </div>

                <div className="form-item w-full">
                  <label className="text-lg ">Email</label>
                  <input
                    type="text"
                    placeholder="email"
                    className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                    {...register("email", {
                      required: true,
                      min: 8,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                </div>
                <div className="form-item w-full">
                  <label className="text-lg ">Password</label>
                  <input
                    type="text"
                    placeholder="more than 8 characters"
                    className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                    {...register("Password", {
                      required: true,
                      min: 8,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold ">More About Me</h3>
                <hr />
              </div>

              <div className="form-item w-full">
                <label className="text-lg ">Biography</label>
                <textarea
                  cols="20"
                  rows="10"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                  placeholder="Bio"
                  {...register("Bio", { maxLength: 350 })}
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">My Social Media</h3>
                <hr />
              </div>
              <div className="form-item">
                <label className="text-xl ">Instagram</label>
                <input
                  type="text"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 "
                  {...register("instagram", {})}
                />
              </div>
              <div className="form-item">
                <label className="text-xl ">Facebook</label>
                <input
                  type="text"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                  {...register("facebook", {})}
                />
              </div>
              <div className="form-item">
                <label className="text-xl ">Twitter</label>
                <input
                  type="text"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  "
                  {...register("twitter", {})}
                />
              </div>
              <div className="form-item">
                <label className="text-xl ">Soundcloud</label>
                <input
                  type="text"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  "
                  {...register("soundcloud", {})}
                />
              </div>

              <button className="flex flex-auto items-center max-w-md justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <input type="submit" placeholder="send" />{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistForm;
