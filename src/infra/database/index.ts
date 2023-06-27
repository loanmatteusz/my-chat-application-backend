import { env } from '../../main/config/env';

import mongoose from 'mongoose';

mongoose.connect(env.databaseUrl);
mongoose.connection.on('error', (error: Error) => console.log(error));
