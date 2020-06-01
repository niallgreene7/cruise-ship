const Port = require('../src/Port.js');

describe('Port', () => {
    it('can be installed', () => {
        expect(new Port()).toBeInstanceOf(Object);
    })

    it('can be installed', () => {
        const port = new Port('Southampton')
        expect(port.name).toBe('Southampton');
    })
})