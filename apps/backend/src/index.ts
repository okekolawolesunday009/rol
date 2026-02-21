import Fastify from 'fastify';

const app = Fastify();

app.get('/health', async () => {
  return { status: 'ok' };
});

app.listen({ port: 4000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`Backend running at ${address}`);
});
