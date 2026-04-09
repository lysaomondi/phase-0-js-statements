const temperature = 90;
if(temperature > 80){
    console.log("watering on");
}
else{
    console.log("watering off");
}
const timeDay = "morning";
if(timeDay === "evening"){
    console.log("Night", "Lights on");
}
else{
    console.log("Lights off");
}
let soilMoisture = 0;

while (soilMoisture <= 40) {
    console.log(soilMoisture);
    soilMoisture += 5;
}