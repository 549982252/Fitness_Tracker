function caloriesCal(totalTime, totalDistance){
    return totalTime + totalDistance;
}

exports.caloriesCal = caloriesCal;

//function caloriesCal(totalTime, averageHR, weight, age){
//    return ((age * 0.2017) - (weight * 0.09036) + (averageHR * 0.6309) - 55.0969) * totalTime / 4.184;
//}
//document.write("Total calories burned today: " + caloriesCal(totalTime, averageHR, weight, age));