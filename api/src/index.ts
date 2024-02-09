import Express, { Router } from 'express';

import studentsRouter from '$routes/Students';
import studentRouter from '$routes/Student';

const app = Express();
const devRouter = Router();

devRouter.use('/students', studentsRouter);
devRouter.use('/student', studentRouter);

app.use('/dev', devRouter);

const PORT = parseInt(process.env.PORT || '3001');

app.listen(PORT, () => {
	console.info(`[SERVER] Server started on http://localhost:${PORT}`);
});
