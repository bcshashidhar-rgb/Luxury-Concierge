import express from 'express';
import { aiRouter } from '@/server/routes/ai.routes';
import { journeyRouter } from '@/server/routes/journey.routes';
import { userRouter } from '@/server/routes/user.routes';

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 4100;

app.use(express.json());
app.use('/user', userRouter);
app.use('/journey', journeyRouter);
app.use('/ai', aiRouter);

app.listen(port, () => {
  process.stdout.write(`Private Circle API listening on ${port}\n`);
});
