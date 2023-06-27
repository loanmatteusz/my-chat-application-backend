import crypto from 'crypto';
import { env } from '../../main/config/env';

export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/'))
        .update(env.secret)
        .digest('hex');
}
