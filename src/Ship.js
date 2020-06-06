(function () {
        class Ship{

            //addShip is a function in Port file
            //removeShip is a function in Port file

            constructor(itinerary){
                this.itinerary = itinerary  //define this itinerary as the full ititerary passed in
                this.startingPort = this.itinerary.fullItinerary[0] //set starting point as the 1st place of the intinerary
                this.currentPort = this.startingPort;
                this.previousPort = null;       //to be used when you leave ports
                this.startingPort.addShip(this) //add the new ship to the 1st port in the itinerary
            }

            setSail(){

                //before setting sale check if the current port is the last one in itinerary
                const itinerary = this.itinerary        
                const currPortIdex = itinerary.fullItinerary.indexOf(this.currentPort)
                if (currPortIdex === itinerary.fullItinerary.length - 1){
                    throw new Error('End of itinerary reached');
                }

                this.previousPort = this.currentPort;   
                this.currentPort = null;            //while sailing current port is blank
                this.previousPort.removeShip(this)  //remove this ship from the previous port list
            }   

            dock(){
                //pull the name of the next port to dock at by finding the previous port in the 
                //itinerary and then getting the next one
                const itinerary = this.itinerary
                const previousPortIndex = itinerary.fullItinerary.indexOf(this.previousPort);
                this.currentPort = itinerary.fullItinerary[previousPortIndex +1];
                this.currentPort.addShip(this)      //add the ship to the port just docked at 
            }
        }
        if (typeof module !== 'undefined' && module.exports) {
            module.exports = Ship;
        } else {
            window.Ship = Ship;
        }
}());
