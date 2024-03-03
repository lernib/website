import Express from 'express';
import cors from 'cors';

import studentsInject from '$routes/Students';
import contactInject from '$routes/Contact';
import eventsInject from '$routes/Events';

const app = Express();
app.use(Express.json());
app.use(cors({
	origin: [
		'http://localhost:5173',
		'https://lernib.com'
	]
}));

studentsInject(app);
contactInject(app);
eventsInject(app);

const PORT = parseInt(process.env.PORT || '3001');

app.listen(PORT, () => {
	console.info(`[SERVER] Server started on http://localhost:${PORT}`);
});
