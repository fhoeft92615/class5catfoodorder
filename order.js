$(document).ready(function () {

    $("#wetFood").change(wetFoodHeardChange);
    $("#dryFood").change(dryFoodHeardChange);

    function wetFoodHeardChange(event) {
        var quantity = $("#wetFood").val();

        var total = quantity * 8;

        $("#totalWetFood").text("$" + total);
    }

    function dryFoodHeardChange(event) {
        var quantity = $("#dryFood").val();

        var total = quantity * 25.99;

        $("#totalDryFood").text("$" + total);
    }
});