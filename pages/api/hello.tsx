// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (_req: any, res: any) => {
	res.statusCode = 200;
	res.json({ name: 'John Doe' });
};
