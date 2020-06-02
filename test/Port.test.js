const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Port', () => {
    it('can be installed', () => {
        expect(new Port()).toBeInstanceOf(Object);
    })

    it('can be installed', () => {
        const port = new Port('Southampton');
        expect(port.name).toBe('Southampton');
    })

    it('can add a ship', () => {
        const port = new Port('Dover');
        const ship = {};

        port.addShip(ship);
        expect(port.activeShips).toContain(ship);
    })

    it('can remove a ship', () => {
        const port = new Port('Dover');
        const titanic = {};
        const queenMary = {}

        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);
        expect(port.activeShips).toContain(titanic);
    })

})

