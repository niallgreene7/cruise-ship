(function () {
    class Port{
        constructor(portName){
            this.name = portName;
            this.activeShips = []
        }

        addShip(ship){
            //add the current ship to the active ships in the port array
            this.activeShips.push(ship)
        }

        removeShip(ship){
            //remove the current ship to the active ships in the port array
            this.activeShips.pop(ship)
        }

    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Port;
    } else {
        window.Port = Port;
    }
}());