import Express from 'express';

const app = Express();

const PORT = parseInt(process.env.PORT || '5000');

app.listen(PORT, () => {
	console.info(`[SERVER] Server started on http://localhost:${PORT}`);
});
