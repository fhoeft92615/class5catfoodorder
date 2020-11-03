$(document).ready(function () {

    $("#wetFood").change(wetFoodHeardChange);
    $("#dryFood").change(dryFoodHeardChange);

    function wetFoodHeardChange(event) {
        var quantity = $("#wetFood").val();

        var total = quantity * 8;

        $("#totalWetFood").text("$" + total);
        calculateGrandTotal();
    }

    function dryFoodHeardChange(event) {
        var quantity = $("#dryFood").val();

        var total = quantity * 25.99;

        $("#totalDryFood").text("$" + total);
        calculateGrandTotal();
    }

    function calculateGrandTotal() {
        var quantity = $("#dryFood").val();

        var totalDryFood = quantity * 25.99;


        var quantity = $("#wetFood").val();

        var totalWetFood = quantity * 8;

        var superDuperGrandTotal = totalWetFood + totalDryFood;

        $("#totalCost").text("$" + superDuperGrandTotal);
    }
});