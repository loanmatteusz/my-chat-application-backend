import { container } from 'tsyringe';

// Interfaces
import { ChatServiceInterface } from '../../domain/services/chat-service.interface';
import { MessageServiceInterface } from '../../domain/services/message-service.interface';
import { UserServiceInterface } from '../../domain/services/user-service.interface';

// Services
import { ChatService } from '../services/chat.service';
import { MessageService } from '../services/message.service';
import { UserService } from '../services/user.service';

container.registerSingleton<ChatServiceInterface>('ChatService', ChatService);
container.registerSingleton<MessageServiceInterface>('MessageService', MessageService);
container.registerSingleton<UserServiceInterface>('UserService', UserService);
