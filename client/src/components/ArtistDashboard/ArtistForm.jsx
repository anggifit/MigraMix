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
    <div className="w-full relative  shadow-2xl rounded overflow-hidden">
      <div className="top h-full w-full bg-blue-600 overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt=""
          className="bg w-full h-full object-cover object-center absolute z-0"
        />
        <div className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            className="h-64 w-64 object-cover rounded-full my-1 py-1"
          />
          <h1 className="text-2xl font-semibold">
            Antonia Howell{" "}
            <p className="text-lg font-semibold text-center">Dj Tonia</p>
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-12 bg-white items-top object-center-absolute">
        <div className="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">
          <a
            href="#"
            className="text-sm p-2 bg-indigo-900 text-white text-center rounded font-bold"
          >
            Edit Profile 🖼
          </a>
          <a
            href="#"
            className="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200"
          >
            Another Information
          </a>
          <a
            href="#"
            className="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200"
          >
            Log-out 🔒
          </a>
        </div>
        <div className="col-span-8 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-6 items-center">
          <div className="px-4 pt-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-2 "
              action="#"
            >
              <div>
                {/* <h3 className="text-1xl ">Basic Information</h3> */}
                <hr />
              </div>

              <div className="form-item">
                <label className="text-lg "></label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                  {...register("name", { required: true, maxLength: 15 })}
                />
              </div>
              <div className="form-item">
                <label className="text-lg "></label>
                <input
                  type="text"
                  placeholder="Lastname"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                  {...register("Lastname", { required: true, maxLength: 15 })}
                />
              </div>
              <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2">
                <div className="form-item w-full">
                  <label className="text-lg "></label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 "
                    {...register("username", { required: true, maxLength: 25 })}
                  />
                </div>

                <div className="form-item w-full">
                  <label className="text-lg "></label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                    {...register("email", {
                      required: true,
                      min: 8,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                </div>
                <div className="form-item w-full">
                  <label className="text-lg "></label>
                  <input
                    type="text"
                    placeholder="Password: more than 8 characters"
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
                {/* <h3 className="text-2xl ">More About Me</h3> */}
                <hr />
              </div>

              <div className="form-item w-full">
                <label className="text-sm "></label>
                <textarea
                  cols="10"
                  rows="5"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                  placeholder="Bio"
                  {...register("Bio", { maxLength: 350 })}
                />
              </div>
              <div>
                {/* <h3 className="text-2xl">My Social Media</h3> */}
                <hr />
                <hr />
              </div>
              <div className="form-item">
                <label className="text-xl "></label>
                <input
                  type="text"
                  placeholder="Instagram"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 "
                  {...register("instagram", {})}
                />
              </div>
              <div className="form-item">
                <label className="text-xl "></label>
                <input
                  type="text"
                  placeholder="Facebook"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                  {...register("facebook", {})}
                />
              </div>
              <div className="form-item">
                <label className="text-xl "></label>
                <input
                  type="text"
                  placeholder="Twitter"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  "
                  {...register("twitter", {})}
                />
              </div>
              <div className="form-item">
                <label className="text-xl "></label>
                <input
                  type="text"
                  placeholder="Soundcloud"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  "
                  {...register("soundcloud", {})}
                />
              </div>
              <button className="flex flex-auto items-left max-w-2xl justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-sm group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600">
                <input type="submit" placeholder="send" />{} 📤
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistForm;
