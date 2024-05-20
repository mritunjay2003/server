const cloudinary = require("cloudinary").v2;

const cloudinaryConnect = () => {
    try {
        cloudinary.config({
            cloud_name: "dh00teccg",
            api_key: "983822697269643",
            api_secret: "YR7fttgQ9o6DyYN2jwHdNihz6Gw",
        });
    } catch (error) {
        console.log(error)
    }
};


module.exports = cloudinaryConnect;