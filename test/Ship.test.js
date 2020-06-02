const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Ship', () => {
    it('can be installed', () => {
        const dover = new Port('Dover');
        const calais = new Port('calais');
        const itinerary = new Itinerary([dover, calais])
        expect(new Ship(itinerary)).toBeInstanceOf(Object);
    })

    it('dock at a new port', () => {
        const dover = new Port('Dover');
        const itinerary = new Itinerary([dover])
        const ship = new Ship(itinerary);
        expect(dover.activeShips).toContain(ship)
    })

})

describe('Ship DRY', () => {
    let ship;
    let dover;
    let calais;
    let itinerary;
    
    beforeEach(() => {
        dover = new Port('Dover');
        calais = new Port('Calais');
        itinerary = new Itinerary([dover, calais]);
        ship = new Ship(itinerary);
    })
    
    it('has a starting point', () => {
        expect(ship.startingPort).toBe(dover);
    })

    it('set sail', () => {
        ship.setSail();
        expect(ship.startingPort).toBefFalsy;
        expect(dover.activeShips).not.toContain(ship);
    })

    it('dock at a new port', () => {
        ship.setSail();
        ship.dock()
        expect(calais.activeShips).toContain(ship)
        //expect(ship.setSail()).toThrowError('End of itinerary reached')
    })
})
