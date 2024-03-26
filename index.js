// Code your solution here
const drivers = {
    name:`Bobby`,
    name:`Sammy`,
    name:`Sally`,
    name:`Annette`,
    name:`Sarah`,
    name:`Bobby`
}

function  findMatching(drivers , name){
    const nametoLowercase = name.toLowerCase()
    const matchingDrivers = drivers.filter(driver => driver.toLowerCase().includes(nametoLowercase))
    return matchingDrivers;
}

function fuzzyMatch(drivers,name){
    const nametoLowercase = name.toLowerCase()
    const matchDrivers = drivers.filter(driver => driver.toLowerCase().startsWith(nametoLowercase))
    return matchDrivers;
}
 function matchName(drivers ,name){
    const matchName = drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase())
    return matchName;
 }