//models/chat/adminSellerMessage.js
const {Schema, model} = require("mongoose");

const adminSellerMsgSchema = new Schema({
    senderName: {
        type: String,
        required : true
    },
    senderId: {
        type: String,
        default : ''
    },
    receverId: {
        type: String,
        default : ''
    },
    message: {
        type: String,
        required : true
    },
    status: {
        type: String,
        default : 'unseen'
    } 
     
}, {timestamps: true})

module.exports = model('seller_admin_messages',adminSellerMsgSchema)