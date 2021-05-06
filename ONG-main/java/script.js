$(document).ready(function() {




    $("#error").hide();

    $("formulario").submit(function() {

        var mensaje = "";

        if ($("#uname").val().trim().lenght == 0) {

            mensaje = "el nombre esta en blanco"
        }
        if ($("#pwd").val().trim().lenght == 0) {
            mensaje = "el  email esta en blanco"
        }


        if ($("#comentarios").val().trim().lenght >= 50) {

            mensaje = " no  alcanza para comentario"

        }

        if (mensaje != "") {

            $("#error").html(mensaje);
            $("#error").show();
            Event.preventDefault();
        }



    });

});


$(document).ready(function() {
    $("formulario").validate({
        rules: {
            comentarios: {
                required: true,
                min: 50
            }
        }
    });
});