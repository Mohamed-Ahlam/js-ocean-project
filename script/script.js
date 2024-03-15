//Task 1: Implement a function that calculates total fish caught
function calculateFishCaught(totalFish){    //function that calulates total fish caught during a specific time 
    let total = 0;  // a variable that holds the total caught throughout a specific time
    totalFish.forEach(fishQuantity => {     // uses a method that takes in each day  and adds it to the total variable
        total += fishQuantity; 
        //0 += 50 <- 50 is the new total
        //50 += 75 <- 125 is the new total
        //125 += 25 <- 150 is the new total
    } )
    return total;   // returns total
};

// variable that holds in each days total fish caught 
let weekendFishCaught = [50, 75, 25];   
let weekdayFishCaught = [100, 60, 40, 100];
// variable that hodls in the result of calling the function calculateFishCaught and its parameter is the list of fish caught
let totalWeekendFishCaught = calculateFishCaught(weekendFishCaught);

// prints out the total fish caught to the console
console.log("Total weekend fish caught:", totalWeekendFishCaught);

//Task 2: Implement a function to filter out endangered species from a list of fish options

//creates a function that takes in an object of fish options

function filterEndangeredFish(fishOptions){

    //this function uses a method that takes in the object of fish options and filters out fish that are not endangered by checking the boolean of the property endangered to see if its false
    return fishOptions.filter(option => !option.endangered)
}

//fish object that holds the name and endangered of a fish
let fishOptions = [
    {name: "Salmon", endangered: false},
    {name: "Bluefin Tuna", endangered: true},
    {name: "Cod", endangered: false}
]

//Task 3: Define a class for Research Institutes


// a class once called makes a Research Institute instance (?) or object (?)
class ResearchInstitute{

    //constructor which will take in the parameters name, location, specialty, size and make a instance of the class ResearchInstitute

    constructor(name, location, specialty, size){
        this.name = name;
        this.location = location;
        this.specialty = specialty;
        this.size = size;
    }
}

//Task 4: Extend the ResearchInstitute class for Marine ReasearchInstitute

// a class that extends the ResearchInstitute and also adds its own parameters 

class MarineReachInstitute extends ResearchInstitute{

     //constructor which will take in the parameters of the parent class by calling super and makes its own variables waterLocationParam, climate, once called itll make a instance of the class MarineReachInstitute

    constructor(instituteName, location, specialty, size, waterLocationParam, climate){
        super(instituteName, location, specialty, size)
        this.waterLocation = waterLocationParam;
        this.climate = climate;
    }
}

//Task 5: Implement a class with default parameters for Oceanic Dive Gear
// class that has defult parameters deapth and type
class OceanicDiveGear{
    constructor(depth = "Deep Sea", type = "Scuba"){
        this.depth = depth;
        this.type = type;
    }
}
//this creates an instance of the class OceanicDiveGear
let diveGear = new OceanicDiveGear();
