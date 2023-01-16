const mongoose = require('mongoose');

const categoriesData = new mongoose.Schema({
    categories_name: {
        type: String
    },
    categories_img_url: {
        type:String
    }
},{
    timestamps: true
})

module.exports = mongoose.model("categories", categoriesData)