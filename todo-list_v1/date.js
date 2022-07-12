exports.getDate = function () {
    var today = new Date();
    // var currentDay = today.getDay();
    var option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

   return day = today.toLocaleDateString("en-US", option);

     
}


exports.getDay=function() {
    const today = new Date();
    // var currentDay = today.getDay();
    const option = {
 
        weekday: "long"

    }

    return day = today.toLocaleDateString("en-US", option);

}
