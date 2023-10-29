const RedButton = ({info, size, widen}) => {
  const extraStyles = size === "large" ? " text-lg px-6 py-3" : "";
  const widenStyles = widen ? " w-48" : "";
  return (
    <button 
        type="button"
        className={`text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${widenStyles} ${extraStyles}`}
    >{info}
    </button>

  )
}

export default RedButton
