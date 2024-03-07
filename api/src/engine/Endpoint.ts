import { Request, Response, Router } from 'express';
import { ErrorStatus } from './Status';

type EndpointFn<T> = (req: Request) => Promise<T>
type EndpointVariant = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

class Endpoint<T> {
	private variant: EndpointVariant;
	private path: string;
	private fn: EndpointFn<T> | undefined;

	constructor(variant: EndpointVariant, path: string) {
		this.variant = variant;
		this.path = path;
	}

	public executor(fn: EndpointFn<T>): Endpoint<T> {
		this.fn = fn;
		return this;
	}

	public build(router: Router): void {
		if (!this.fn) {
			throw new TypeError('Endpoint function is undefined');
		}

		const fn = this.fn;
		const asyncFn = async (req: Request, res: Response) => {
			try {
				const output = await fn(req);
				res.json(output);
			} catch (e) {
				if (e instanceof ErrorStatus) {
					res.status(e.code).send(e.message);
				} else {
					res.status(500).send();
					console.error(e);
				}
			}
		};

		switch (this.variant) {
		
		case 'GET': router.get(this.path, asyncFn); break;
		case 'POST': router.post(this.path, asyncFn); break;
		case 'PUT': router.put(this.path, asyncFn); break;
		case 'DELETE': router.delete(this.path, asyncFn); break;
		case 'PATCH': router.patch(this.path, asyncFn); break;
		
		}
	}
}

export { Endpoint };
