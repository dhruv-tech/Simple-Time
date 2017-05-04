// Orignally Written by Dhruv (github.com/dhruv-tech) | Mozilla Public License 2.0 | Last Modifed: 1 May 2017 [ALPHA VERSION]

var Time = {
    exeDelay: function(callback, delay, unit){
        if (unit.toLowerCase() == "mins" || unit.toLowerCase() == "min") {
            delay = delay * 60000;
        }
        else if (unit.toLowerCase() == "hrs" || unit.toLowerCase() == "hr") {
            delay = delay * 3600000;
        }
        else if (unit.toLowerCase() == "secs" || unit.toLowerCase() == "sec") {
            delay = delay * 1000;
        }
        setInterval(callback, delay);
    }, 
    exeAt: function(time, timezone){}, //coming soon...
    getServerTime: function(){
        var req = new XMLHttpRequest();
        req.open('GET', 'https://ajax.aspnetcdn.com/ajax/', false);
        req.send(null);
        var date = req.getResponseHeader('date');
        var hours = date[date.length -12] + date[date.length -11];
        var mins = date[date.length -9] + date[date.length -8];
        var time = hours + ":" + mins;
        return time;
    },
    getClientTime: function(offset){
        var localDate = new Date();
        var UTC = (localDate.getTime() + (localDate.getTimezoneOffset() * 60000));
        var convertedDate = new Date(UTC + (3600000*offset));
        return convertedDate.toLocaleString();
    },
    formatTime: function(date){
        var hours;
    }
};