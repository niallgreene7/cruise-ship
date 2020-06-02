class Ship{
    constructor(itinerary){
        this.itinerary = itinerary 
        this.startingPort = this.itinerary.fullItinerary[0]
        this.currentPort = this.startingPort;
        this.previousPort = null;
        this.startingPort.addShip(this)
    }

    setSail(){

        const itinerary = this.itinerary
        const currPortIdex = itinerary.fullItinerary.indexOf(this.currentPort)
        if (currPortIdex === itinerary.fullItinerary.length - 1){
            throw new Error('End of itinerary reached');
        }

        this.previousPort = this.currentPort;
        this.currentPort = null;
        this.previousPort.removeShip(this)

    }   

    dock(){
        const itinerary = this.itinerary
        const previousPortIndex = itinerary.fullItinerary.indexOf(this.previousPort);
        this.currentPort = itinerary.fullItinerary[previousPortIndex +1];
        this.currentPort.addShip(this)
    }

}

module.exports = Ship