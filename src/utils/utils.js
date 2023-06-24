export default function fixDuration (time) {
    //if duration < 1, then change to minutes.
    //if duration > 24, then change to days.
    let days = 0;
    if (time >= 24) {
        days = Math.floor(time/24);
        time = time%24;
    } 
    let hours = Math.floor(time);
    let mins = Math.ceil((time%1) * 60);
    return `${days > 0 ? days+" days" : ""} ${hours > 0 ? hours+" hours" : ""} ${mins > 0 ? mins+" mins" : ""}`
}