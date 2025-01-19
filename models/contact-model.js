const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
    message: { type: String, required: true },
});

const ContactModel = new model("Contact", contactSchema);
module.exports = ContactModel;
