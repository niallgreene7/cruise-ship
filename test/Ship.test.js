const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Ship', () => {
    it('can be installed', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port])
        expect(new Ship(itinerary)).toBeInstanceOf(Object);
    })

    it('has a starting point', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais])
        const ship = new Ship(itinerary);
        expect(ship.startingPort).toBe(dover);
    })

    it('set sail', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais])
        const ship = new Ship(itinerary);
        ship.setSail();
        expect(ship.startingPort).toBefFalsy;
        expect(dover.activeShips).not.toContain(ship);
    })

    it('dock at a new port', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais])
        const ship = new Ship(itinerary);
        
        ship.setSail();
        ship.dock()

        expect(calais.activeShips).toContain(ship)
        //expect(ship.setSail()).toThrowError('End of itinerary reached')
    })

    it('dock at a new port', () => {
        const dover = new Port('Dover');
        const itinerary = new Itinerary([dover])
        const ship = new Ship(itinerary);
        
        expect(dover.activeShips).toContain(ship)
    })

})