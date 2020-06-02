class Port{
    constructor(portName){
        this.name = portName;
        this.activeShips = []
    }

    addShip(ship){
        this.activeShips.push(ship)
    }

    removeShip(ship){
        this.activeShips.pop(ship)
    }

}

module.exports = Port