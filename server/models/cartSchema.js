const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const cartSchema = new mongoose.Schema({
    products: [
        {
            product: {
                type: ObjectId,
                ref: "Product"
            },
            count: Number,
            color: String,
            price: Number
        }
    ],
    cartTotal: Number,
    cartTotalAfterDiscount: Number,
    orderBy: {
        type: ObjectId,
        ref: "User"
    }
}, { timestamps: true })


module.exports = mongoose.model("Cart", cartSchema)