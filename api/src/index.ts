import Express from 'express';
import cors from 'cors';

import studentsRouter from '$routes/Students';
import contactRouter from '$routes/Contact';

const app = Express();
app.use(Express.json());
app.use(cors({
	origin: [
		'http://localhost:5173',
		'https://lernib.com'
	]
}));

app.use('/students', studentsRouter);
app.use('/contact', contactRouter);

const PORT = parseInt(process.env.PORT || '3001');

app.listen(PORT, () => {
	console.info(`[SERVER] Server started on http://localhost:${PORT}`);
});
