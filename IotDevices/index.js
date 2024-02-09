const getRandomData = (min, max) => {
    return Math.random() * (max - min) + min;
}
// fake call
const sendDataToServer = () => {
    
    fetch("http://api:4000/api/iot", {
        method: "POST",
        body: JSON.stringify({
            "deviceId": "Device-1",
            "data": ""+getRandomData(0,120)
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data=> {
        console.log(JSON.stringify(data));
    })
    .catch(err => {
        console.log(err);
    });
}   

setInterval(()=> {
    sendDataToServer()
}, 2000)