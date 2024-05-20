const cloudinary = require('cloudinary').v2


exports.imageUploadToCloudinary = async (file, folder, height, quality) => {

    const option = {folder}

    if (height) {
        option.height = height
    }

    if (quality) {
        option.quality = quality
    }

    option.resource_type = "auto"

    return await cloudinary.uploader.upload(file.tempFilePath, option);


}

exports.deleteImage= async (publicId) =>{
    try {
        const result = await cloudinary.uploader.destroy(publicId);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}