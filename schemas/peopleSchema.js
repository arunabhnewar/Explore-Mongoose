// Dependencies
const { Schema } = require('mongoose');

const peopleSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20,
        trim: true,
        // validate: {
        //     validator: function (value) {
        //         return /^[a-zA-Z]+$/.test(value);
        //     } //end of validator
        // }  //end of validate
    },
    age: Number,
    birthdate: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        enum: ["female", "male"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: function (v) {
                return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
            }
        }
    },
    phone: {
        type: String,
        required: true,
        minlength: 11,
        unique: true,
        trim: true,
    },
    company: {
        title: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            validate: {
                validator: function (v) {
                    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
                }
            }
        },
        phone: String,
        location: {
            country: {
                type: String,
                required: true,
                trim: true,
            },
            address: String,
        },
    },
    tags: [String],
    isMarried: {
        type: Boolean,
        default: false,
    },
    role: String,
}, { timestamps: true })



// Module Export
module.exports = peopleSchema;