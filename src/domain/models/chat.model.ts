import mongoose from 'mongoose';
import { ChatInterface } from '../interfaces/chat';

const schema = new mongoose.Schema<ChatInterface>({
    members: {
        type: Array(String),
    },
}, {
    timestamps: true,
});

const ChatModel = mongoose.model('Chat', schema);

export { ChatModel }
