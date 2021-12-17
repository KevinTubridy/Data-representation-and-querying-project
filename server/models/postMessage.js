import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    matches: String,
    goals: String,
    assits: String,
    likeCount: {
        typre: Number,
        defualt: 0
    },
    createdAt: {
        type: Date,
        defualt: new Date()
    }, 
});

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;