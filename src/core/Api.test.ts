import sinon, { SinonFakeXMLHttpRequestStatic, SinonFakeXMLHttpRequest } from 'sinon';
import { expect } from 'chai';
import { default as Fetch } from './Api';

describe('HTTPTransport test', () => {
	let xhr: SinonFakeXMLHttpRequestStatic;
	let instance = Fetch;
	const requests: SinonFakeXMLHttpRequest[] = [];
	beforeEach(() => {
		xhr = sinon.useFakeXMLHttpRequest();

		//@ts-expect-error
		global.XMLHttpRequest = xhr;

		xhr.onCreate = (req) => {
			requests.push(req);
		}

		instance = Fetch;
	});

	afterEach(() => {
		requests.length = 0;
		xhr.restore();
	});

	it('Method get() should be called with GET method', () => {
		instance.get('/');

		const [request] = requests;

		expect(request.method).to.equal('GET');
	});

	it('Method put() should be called with PUT method', () => {
		instance.put('/');

		const [request] = requests;

		expect(request.method).to.equal('PUT');
	});

	it('Method post() should be called with POST method', () => {
		instance.post('/');

		const [request] = requests;

		expect(request.method).to.equal('POST');
	});

	it('Method delete() should be called with DELETE method', () => {
		instance.delete('/');

		const [request] = requests;

		expect(request.method).to.equal('DELETE');
	});
});
