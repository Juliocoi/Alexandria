const app = require('./app');
import 'dotenv/config';

app.listen(process.env.API_PORT, () => console.log('Servidor rodando'));
