import Express from 'express';

import studentsRouter from '$routes/Students';
import studentRouter from '$routes/Student';

const app = Express();

app.use('/students', studentsRouter);
app.use('/student', studentRouter);

const PORT = parseInt(process.env.PORT || '5000');

app.listen(PORT, () => {
	console.info(`[SERVER] Server started on http://localhost:${PORT}`);
});
