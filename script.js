const date = document.getElementById("date");
        const day = document.getElementById("day");
        const month = document.getElementById("month");
        const year = document.getElementById("year");

        const today = new Date();

        const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
        const allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];

        date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
        day.innerHTML = weekDays[today.getDay()];
        month.innerHTML = allMonths[today.getMonth()];
        year.innerHTML = today.getFullYear();

        function updateTime() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const hourson = `${hours}`;
            const minuteson = `${minutes}`;
          const secondson = `${seconds}`;
            document.getElementById("hour").textContent = hourson;
            document.getElementById("minutes").textContent = minuteson;
            document.getElementById("seconds").textContent = secondson;
        }

        setInterval(updateTime, 1000);
        updateTime(); // Initial call to display time immediately