const Ship = require('../src/Ship.js');

describe('Ship', () => {
    it('can be installed', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    })

    it('has a starting point', () => {
        const ship = new Ship('Dover')
        expect(ship.startingPort).toBe('Dover');
    })
})