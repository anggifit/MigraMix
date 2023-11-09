


const ArtistPersonalInfo = () => {
  return (
    <div>
      <h3 className="text-1xl ">Basic Information</h3>

      <div className="form-item">
        <label className="text-lg "></label>
        <input
          type="text"
          placeholder="Name"
          className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
        //   {...register("name", { required: true, maxLength: 15 })}
        />
      </div>

      <div className="form-item">
        <label className="text-lg "></label>
        <input
          type="text"
          placeholder="Lastname"
          className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
          //{...register("Lastname", { required: true, maxLength: 15 })}
        />
      </div>

      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2">
        <div className="form-item w-full">
          <label className="text-lg "></label>
          <input
            type="text"
            placeholder="Username"
            className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 "
            //{...register("username", { required: true, maxLength: 25 })}
          />
        </div>

        <div className="form-item w-full">
          <label className="text-lg "></label>
          <input
            type="text"
            placeholder="Email"
            className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
            // {...register("email", {
            //   required: true,
            //   min: 8,
            //   pattern: /^\S+@\S+$/i,
            // })}
          />
        </div>
        <div className="form-item w-full">
          <label className="text-lg "></label>
          <input
            type="text"
            placeholder="Password: more than 8 characters"
            className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
            // {...register("Password", {
            //   required: true,
            //   min: 8,
            //   pattern: /^\S+@\S+$/i,
            // })}
          />
        </div>
      </div>
    </div>
  );
}

export default ArtistPersonalInfo

              
          
              