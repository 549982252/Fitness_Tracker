<template>
  <div class="tracker">
    <h1>Tracker</h1>
  </div>
</template>

<script>
    const totalTime = prompt("Please enter your total time(minutes) traveled today:");
    document.write("Total time traveled today: " + totalTime + " minutes" + "<br />");

    const totalDistance = prompt("Please enter your total distance(miles) traveled today:");
    document.write("Total distance traveled today: " + totalDistance + " miles" + "<br />");

    const averageHR = prompt("Please enter your average heart rate(bmp):");
    document.write("Average heart rate: " + totalDistance + " bmp" + "<br />");

    const age = prompt("Please enter your age:");
    document.write("Age: " + age + "<br />");

    const weight = prompt("Please enter your weight(lb):");
    document.write("Weight: " + weight + " lb" + "<br />");

    function caloriesCal(totalTime, averageHR, weight, age){
    return ((age * 0.2017) - (weight * 0.09036) + (averageHR * 0.6309) - 55.0969) * totalTime / 4.184;
    }
    document.write("Total calories burned today: " + caloriesCal(totalTime, averageHR, weight, age));
</script>