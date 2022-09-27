// Preguntar Info de Usuario
    let nombreUser = prompt("What's your name?");

    console.log(`Nombre del usuario: ${nombreUser}`);

    document.getElementById('nameDiv').innerHTML += nombreUser;


// Convertidores de Tiempo
      
    // Get how many minutes in a day, where a day has 24 hours
        let minutesInADay = 24*60;
        
        console.log(minutesInADay); // 🤙 1440 minutes

    // Get the percentage what 2 minutes in a day represents
        let twoMinutesInADay = ((2*100)/1440).toFixed(2) + '%';
        
        console.log(twoMinutesInADay); // 🤙 2 minutes represents 0.14% of time in a day

        document.getElementById('dayPercentage').innerHTML += twoMinutesInADay;

    // Get Current Date
        // Return today's date and time
        let currentTime = new Date();

        // returns the month (from 0 to 11)
        let month = currentTime.getMonth() + 1;

        // returns the day of the month (from 1 to 31)
        let day = currentTime.getDate();

        // returns the year (four digits)
        let year = currentTime.getFullYear();

        // convert month day number to name
        function toMonthName(monthNumber) {
            const date = new Date();
            date.setMonth(monthNumber - 1);

            return date.toLocaleString('en-US', {
                month: 'long',
            });
        }
        let monthName = (toMonthName(month));

        // write output MM/dd/yyyy
        let currentDate = (`${monthName} ${day} of ${year}`);
        
        document.getElementById('getCurrentDate').innerHTML += currentDate;

    // Get How many days between 2 Dates
        let finalDay = new Date('12/31/2022');
        let currentDay = new Date();

        const days = (finalDay, currentDay) =>{
            let difference = finalDay.getTime() - currentDay.getTime();
            let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
            return TotalDays;
        }
        
        console.log(days(finalDay, currentDay) +" days to end of the year");
        
        document.getElementById('daysLeft').innerHTML += days(finalDay, currentDay);

    // Get how many days in a year
        function daysInAYear(year) {
            return ((year % 4 === 0 && year % 100 > 0) || year %400 == 0) ? 366 : 365;
        }
        let daysIn2022 = daysInAYear(2022);
       
        console.log(daysIn2022); // 🤙 365 Days in 2022


