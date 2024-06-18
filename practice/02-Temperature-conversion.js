/*
temperature is passed as an argument to a function (the degree[70] and unit[F])
. It is then converted to the other unit.
*/



 function convertToFahrenheit(celcius) {
            let fahrenheit=(celcius*9/5)+32;
            return fahrenheit;
        }
        
        function convertToCelcius(fahrenheit){
            let celcius=(fahrenheit-32)*5/9;
            return celcius;
        }
        
        function convertTemp(degrees,unit){
            let temp=0;

            if (unit==='f') {
               temp= convertToCelcius(degrees);
               console.log(`${temp}C`);
            } else {
                temp= convertToFahrenheit(degrees);
                console.log(`${temp}F`);
            }
            
        }
        convertTemp(86,'f');/*Test */