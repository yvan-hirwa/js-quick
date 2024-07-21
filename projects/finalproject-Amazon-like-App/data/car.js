class Car{
    brand;
    model;
    speed;
    topSpeed= 200;
    isTrunkOpen
    constructor(brand, model, speed){
        this.brand = brand;
        this.model = model;
        this.speed = speed;
        
    }

    displayInfo(){
        console.log(`${this.brand} ${this.model},
        Speed: ${this.speed} Km/h,
        Trunk: ${this.isTrunkOpen? 'Is Open': 'Is Closed'}
             `);
    }

    go(){
        if (this.isTrunkOpen === false && this.speed<this.topSpeed) {
            this.speed +=5;
        }
        
    }
    brake(){
        if (this.speed>=5) {
            this.speed -=5; //managing the lowest possible speed
        }
        else if(this.speed>0){
            this.speed -=1
        }
        
    }
    openTrunk(){
        return this.isTrunkOpen= true;
    }
    closeTrunk(){
        return this.isTrunkOpen= false;
    }
}

/*const car1 = new Car('Toyota', 'Corolla', 180);
const car2 = new Car('Tesla', 'Model 3', 120);

console.log("Before applying go and brake methods")
car1.displayInfo();
car2.displayInfo();

car1.go();
car2.brake()

console.log("After applying go and brake methods ... testing trunk")

car1.openTrunk()
car1.go();

car1.displayInfo();
car2.displayInfo();  tests of the class car*/

class RaceCar extends Car{
    acceleration;
    topSpeed=300;
    constructor(brand, model, speed, acceleration){
        super(brand, model, speed);
        this.acceleration = acceleration;
    }
    accelerationSpeedLimit= this.acceleration+this.speed;
    
    go(){
        if (this.accelerationSpeedLimit<=this.topSpeed) {
            this.speed +=this.acceleration;
        }
        
    }
    displayInfo(){
        console.log(`${this.brand} ${this.model},
        Speed: ${this.speed} Km/h,
             `);
    }
}

const car1 = new RaceCar('McLaren', 'F1', 300, 20);
car1.go();
car1.displayInfo()





