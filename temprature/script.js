let maxtemprature = 40;
todaytemp = 36;

if (maxtemprature < todaytemp)
{
    console.log("Closed")
}
else if (todaytemp > 35 && todaytemp < maxtemprature){
	
	console.log("NOT SURE")
}

else 
{
    console.log("OPEN")
}