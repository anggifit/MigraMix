
const UrlValidation = (url) => {
    if (!url) return true;
    const urlRegex = /^(http|https):\/\/[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,6}$/;
    if (!urlRegex.test(url)) {
        return "Please enter a valid website URL. The URL must start with http:// or https:// and have at least 3 characters.";
    }
    return true;
};

export default UrlValidation