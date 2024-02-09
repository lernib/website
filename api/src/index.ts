import Express from 'express';

import studentsRouter from '$routes/Students';

const app = Express();

app.use('/students', studentsRouter);

const PORT = parseInt(process.env.PORT || '3001');

app.listen(PORT, () => {
	console.info(`[SERVER] Server started on http://localhost:${PORT}`);
});
