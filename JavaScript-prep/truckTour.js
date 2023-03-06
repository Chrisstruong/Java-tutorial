function truckTour(petrolpumps) {
    // Write your code here
    // N : petrol pumps, 0->N-1
    // Will have amount of gas can give
    // Distance to next petrol station
    // Summary of the challenge: Determine the position for the truck to start so that it can finish a circle.
    let curPetrol = 0
    let index = 0
    for (let i = 0; i< petrolpumps.length; i++) {
        curPetrol = curPetrol + petrolpumps[i][0]
        curPetrol = curPetrol - petrolpumps[i][1]
        if (curPetrol < 0){
            curPetrol = 0
            index = i+1
            
        }
    }
    return index
}