    import mongoose from 'mongoose';

    const shortUrlSchema = new mongoose.Schema({
        short_url: {
            type: String,
            required: true,
            index: true,
            unique: true
        },
        full_url: {
            type: String,
            required: true
        },
        clicks:{
            type: Number,
            required: true,
            default: 0
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        
        },
        visitHistory: [{ timestamp: { type: Date } }]
    }, {
        timestamps: true
    })

    const short_url= mongoose.model('short_url', shortUrlSchema);
    export default short_url;