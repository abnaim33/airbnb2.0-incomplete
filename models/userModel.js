import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    root: {
        type: Boolean,
        default: false
    },
    image: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,

    },
    favoriteIds: {
        type: Array
    },
    accounts: [{ type: mongoose.Types.ObjectId, ref: 'account' }],
    listings: [{ type: mongoose.Types.ObjectId, ref: 'listing' }],
    reservations: [{ type: mongoose.Types.ObjectId, ref: 'reservation' }]
}, {
    timestamps: true
})

let Dataset = mongoose.models.user || mongoose.model('user', userSchema)
export default Dataset