// We often might find ourselves wanting to execute the above methods in a particular order.
// Doing so multiple times across our codebase would violate the Don’t Repeat Yourself (DRY) principle.
// To avoid the above, we can create a Facade class. It can keep track of the dependencies and execute our methods in a particular order.


class Bed {
    makeTheBed() {
        console.log('The bed is ready');
    }
}

class AirFreshener {
    spray() {
        console.log('A nice smell spreads through the air')
    }
}

class TrashCan {
    takeOutTrash() {
        console.log('The trash is taken out')
    }
}

class Dishwasher {
    fill() {
        console.log('The dishwasher is filled');
    }
    wash() {
        console.log('The dishwasher is working');
        // return new Promise((resolve) => {
        //     resolve();
        // });
    }
    empty() {
        console.log('The dishwasher is empty');
    }
}

class HouseCleaningFacade {

    // short hand for constructor
    constructor(
        private bed: Bed,
        private trashCan: TrashCan,
        private airFreshener: AirFreshener,
        private dishwasher: Dishwasher
    ) {
    }

    cleanTheHouse() {
        this.bed.makeTheBed();
        this.trashCan.takeOutTrash();
        this.airFreshener.spray();

        this.dishwasher.fill();
        // this.dishwasher.wash()
        //     .then(this.dishwasher.empty)
    }
}

// It is limiting in comparison to executing every method separately, but it provides consistency across our application.
// If at some point we decide to change the logic in our Facade, it affects every part of the application in which we’ve used it.
// some sort of dependency inversion?

const houseCleaning = new HouseCleaningFacade(
    new Bed(),
    new TrashCan(),
    new AirFreshener(),
    new Dishwasher()
);

houseCleaning.cleanTheHouse();

