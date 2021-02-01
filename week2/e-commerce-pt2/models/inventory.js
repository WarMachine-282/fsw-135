const mongoose = require("mongoose")
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["apparel","tool"],
        required: true
    },
    value: {
        type: Number,
        required: true,
        min: 1
    }
})

module.exports = mongoose.model("Inventory", inventorySchema)