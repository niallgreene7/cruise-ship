const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Ship', () => {
    it('can be installed', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port.name])
        expect(new Ship(itinerary)).toBeInstanceOf(Object);
    })

    it('has a starting point', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover.name, calais.name])
        const ship = new Ship(itinerary);
        expect(ship.startingPort).toBe('Dover');
    })

    it('set sail', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover.name, calais.name])
        const ship = new Ship(itinerary);
        ship.setSail();
        expect(ship.startingPort).toBefFalsy;
    })

    it('dock at a new port', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover.name, calais.name])
        const ship = new Ship(itinerary);
        
        ship.setSail();
        ship.dock()
        expect(ship.setSail()).toThrowError('End of itinerary reached')
        
    })

})