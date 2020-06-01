const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');

describe('Itinerary', () => {
    it('can be installed', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    })

    it('can be installed', () => {
        const dover = new Port('Dover')
        const portsmouth = new Port('Portsmouth')
        const itinerary = new Itinerary([dover,portsmouth])
        expect(itinerary.fullItinerary).toEqual([dover,portsmouth]);
    })
})