// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (_req: any, res: any) => {
	res.statusCode = 200;
	res.json({ name: 'John Doe' });
};
//any component in api can be access through route such as /hello to access hello component in api folder
