export function fixDuration (time) {
    //if duration < 1, then change to minutes.
    //if duration > 24, then change to days.
    let days = 0;
    if (time >= 24) {
        days = Math.floor(time/24);
        time = time%24;
    } 
    let hours = Math.floor(time);
    let mins = Math.ceil((time%1) * 60);
    let daysText = days === 1 ? " day" : " days";
    let hoursText = hours === 1 ? " hour" : " hours";
    let minsText = mins === 1 ? " min" : " mins";
    return `${days > 0 ? days+daysText : ""} ${hours > 0 ? hours+hoursText : ""} ${mins > 0 ? mins+minsText : ""}`
}

//CREATE STOPS FOR HORSE and husky. maybe not needed
export function stops(distance, animalDistance) { 
    return (distance / 1609.34) > animalDistance ? Math.ceil((distance / 1609.34)/animalDistance) : 0;
}

export const animalSpeeds = [
    {
        name: "Horse",
        speedTxt: "28mph",
        speed: 28,
        distance: 80,
    },
    {
        name: "Husky",
        speedTxt: "20mph",
        speed: 20,
        distance: 80,
    },
    {
        name: "Garden Snail",
        speedTxt: "0.03mph",
        speed: 0.03,
    }
]
