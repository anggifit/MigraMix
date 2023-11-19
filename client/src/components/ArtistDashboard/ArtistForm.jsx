import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import UploadProfilePhoto from "../EventPlannerDashboard/UploadProfilePhoto";
import SelectOptions from "../SelectOptions";
import { PropTypes } from "prop-types";


const ArtistForm = ({artistProfilePic}) => {  
   const {register, handleSubmit, formState: { isValid, errors },} = useForm({defaultValues: {artistbio: "",},
  });
  
  const token = localStorage.getItem("token");
  
  const [eventProfilePictureURL, setEventProfilePictureURL] = useState(null);
  const [selectedMusicGenre, setSelectedMusicGenre] = useState('');
  const [selectedPerformance, setSelectedPerformance] = useState('');
  const [selectedTypeOfPerformance, setSelectedTypeOfPerformance] = useState('');

  const socialMediaRegex =
    /^((https?|ftp|smtp):\/\/)?(www\.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;

  const onImageUpload = (url) => {
    setEventProfilePictureURL(url);    
  };

  const onSubmit = (data) => {
    console.log(data)

    if (isValid) {
      data.ArtistsProfilePicture = eventProfilePictureURL;
      data.MusicGenre = selectedMusicGenre;
      data.Performance = selectedPerformance;
      data.Type_of_performance = selectedTypeOfPerformance;
      axios
        .put(`/artists/artists`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }
  }
  
  const handleLogOut = async () => {
    try {
        localStorage.removeItem(`${token}`)
        window.location.href = '/'
    } catch (error) {
        console.error("Logout Failed")
    }
}

  return (
    <div className="w-full relative  shadow-2xl rounded overflow-hidden">
      <div className="top h-full w-full bg-blue-600 overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt=""
          className="bg w-full h-full object-cover object-center absolute z-0"
          />
        <div className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
          <img
            src={artistProfilePic}
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
            className="text-sm p-2 bg-indigo-900 shadow-xl text-white text-center rounded font-bold"
          >
            Edit Profile 🖼
          </a>
          <a
            href="#"
            className="text-sm p-2 bg-white text-center rounded shadow-xl font-semibold hover:bg-indigo-700 hover:text-gray-200 md:transition-all "
            onClick={handleLogOut}
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
              {/* Aqui van los campos comentados de name, username etc */}

              <div className="form-item w-full">
                {/* <label className="text-sm "></label> */}
                <textarea
                  cols="10"
                  rows="5"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow-xl py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                  placeholder="Bio"
                  maxLength={350}
                  minLength={50}
                  id="ArtistBio"
                  {...register("ArtistBio", { maxLength: 350, minLength: 50 })}
                />
                {errors.artistbio && (
                  <p className="text-red-500 text-sm">
                    {errors.artistbio.message}
                  </p>
                )}
              </div>
              <div className="md:grid md:grid-cols-3 md:gap-4 pb-3 shadow-xl">
                <div>
                  <SelectOptions
                    label="Music Genre"
                    idField="musicGenre"
                    value={selectedMusicGenre}
                    onChange={(e) => setSelectedMusicGenre(e.target.value)}
                    options={[
                      { value: "Pop", label: "Pop" },
                      { value: "Electonic", label: "Electonic" },
                      { value: "Rock", label: "Rock" },
                      { value: "Urban", label: "Urban" },
                      { value: "Other", label: "Other" },
                    ]}
                  />

                  {/* <label
                    htmlFor="HeadlineAct"
                    className="block text-sm-2 font-custom font-medium text-gray-400 shadow-xl"
                    {...register("genre", {
                      required: "Please select a genre",
                    })}
                  >
                    Genre
                  </label>
                  <select
                    name="HeadlineAct"
                    id="HeadlineAct"
                    className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-600 sm:text-sm"
                  >
                    <option value="">Please select</option>
                    <option value="JM">Pop</option>
                    <option value="SRV">Electonic</option>
                    <option value="JH">Rock</option>
                    <option value="BBK">Urban</option>
                    <option value="BBK">Other</option>
                  </select>
                  {errors.genre && (
                    <p className="text-red-500 text-sm">
                      {errors.genre.message}
                    </p>
                  )} */}
                </div>
                <div>
                  <SelectOptions
                    label="Performance"
                    idField="performance"
                    value={selectedPerformance}
                    onChange={(e) => setSelectedPerformance(e.target.value)}
                    options={[
                      { value: "Solo", label: "Solo" },
                      { value: "DeeJane/DeeJay", label: "DeeJane/DeeJay" },
                      { value: "Band", label: "Band" },
                    ]}
                  />

                  {/* <label
                    htmlFor="HeadlineAct"
                    className="block text-sm-2 font-custom font-medium text-gray-400 shadow-xl"
                  >
                    Performance
                  </label>
                  <select
                    name="HeadlineAct"
                    id="HeadlineAct"
                    className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-600 sm:text-sm "
                  >
                    <option value="">Please select</option>
                    <option value="JM">Solo</option>
                    <option value="SRV">DeeJane/DeeJay</option>
                    <option value="JH">Band</option>
                  </select> */}
                </div>
                <div>
                  <SelectOptions
                    label="Music Version"
                    idField="typeOfPerformance"
                    value={selectedTypeOfPerformance}
                    onChange={(e) =>
                      setSelectedTypeOfPerformance(e.target.value)
                    }
                    options={[
                      {
                        value: "Versions & own creations",
                        label: "Versions & own creations",
                      },
                      { value: "Only versions", label: "Only versions" },
                      {
                        value: "Only own creations",
                        label: "Only own creations",
                      },
                    ]}
                  />

                  {/* <label
                    htmlFor="HeadlineAct"
                    className="block text-sm-2 font-custom font-medium text-gray-400 shadow-xl"
                  >
                    Music Version
                  </label>
                  <select
                    name="HeadlineAct"
                    id="HeadlineAct"
                    className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-600 sm:text-sm"
                  >
                    <option value="">Please select</option>
                    <option value="JM">Versions & own creations/tracks</option>
                    <option value="SRV">Only versions</option>
                    <option value="JH">Own creations only</option>
                  </select> */}
                </div>
              </div>
              <div>{/* <h3 className="text-2xl">My Social Media</h3> */}</div>
              <div className="form-item">
                <label className="text-xl "></label>
                <input
                  type="text"
                  placeholder="Instagram"
                  id="ArtistMainLink"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow-xl py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                  {...register("ArtistMainLink", {
                    pattern: {
                      value: socialMediaRegex,
                      message: "Not a valid Link",
                    },
                  })}
                />
                {errors.ArtistMainLink && (
                  <p className="text-red-500 text-sm">
                    {errors.ArtistMainLink.message}
                  </p>
                )}
              </div>
              <div className="form-item">
                <input
                  type="text"
                  placeholder="Soundcloud"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow-xl py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                  {...register("soundcloud", {
                    pattern: {
                      value: socialMediaRegex,
                      message: "Not a valid Link",
                    },
                  })}
                />
                {errors.facebook && (
                  <p className="text-red-500 text-sm">
                    {errors.facebook.message}
                  </p>
                )}
              </div>
              <div className="form-item">
                <label className="text-xl "></label>
                <input
                  type="text"
                  placeholder="Other"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow-xl py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  "
                  {...register("other", {
                    pattern: {
                      value: socialMediaRegex,
                      message: "Not a valid Link",
                    },
                  })}
                />
                {errors.soundcloud && (
                  <p className="text-red-500 text-sm">
                    {errors.soundcloud.message}
                  </p>
                )}
              </div>
              <div className="form-item">
                <label className="text-xl"></label>
                <input
                  type="number"
                  placeholder="Contact Number"
                  id="ContactNumber"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow-xl py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                  {...register("ContactNumber", {
                    /* pattern: {
                      value:
                        /^(?:(?:\+|00)34[\s.]?)?(6\d{8}|[679]\d{1}[\s.-]?\d{2}[\s.-]?\d{2}[\s.-]?\d{2})$/,
                      message: "Not a valid Spain mobile number",
                    }, */
                  })}
                />
                {errors.ContactNumber && (
                  <p className="text-red-500 text-sm">
                    {errors.ContactNumbers.message}
                  </p>
                )}
              </div>

              <div>
                <UploadProfilePhoto onImageUpload={onImageUpload} />
              </div>
              <button className="flex flex-auto items-left max-w-1xl justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-sm group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600">
                <input type="submit" placeholder="send" />
                {} 📤
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

ArtistForm.propTypes = {
  artistProfilePic: PropTypes.string,
};


export default ArtistForm;
