(function () {
    class Itinerary{
        constructor(listOfPorts){
            this.fullItinerary = listOfPorts
        }
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Itinerary;
    } else {
        window.Itinerary = Itinerary;
    }
}());