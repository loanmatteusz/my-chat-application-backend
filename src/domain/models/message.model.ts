import mongoose from 'mongoose';
import { MessageInterface } from '../interfaces/message';

const schema = new mongoose.Schema<MessageInterface>({
    chatId: {
        type: String,
    },
    senderId: {
        type: String,
    },
    text: {
        type: String,
    },
}, {
    timestamps: true,
});

const MessageModel = mongoose.model('Message', schema);

export { MessageModel }
