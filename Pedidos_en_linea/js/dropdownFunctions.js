
//Asigna valores a un JSON y manda a llamar un WebMethod
function webMethodcall(txtTipo, txtLoc, functionURL) {
    //Asigna los textos a un JSON
    var dataJSON = { tipo: txtTipo, loc: txtLoc };
    var dataJSONStr = JSON.stringify(dataJSON);

    //Con ajax manda a llamar un WebMethod
    $.ajax({
        type: "POST",
        url: functionURL,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: dataJSONStr,

        success:
            function (data) {//En un WebMethod se regresa la info en el attb. "d" del json
                var response = data.d;
                if (response == "ERROR") {
                    var msg = "Error";
                    displayMsg(msg);
                }
                else if (response != "") {//OK, show the user data
                    // displayMsg(response);
                }

                else {//No data, error       
                    var msg = "Error desconocido";
                    displayMsg(msg);
                }
            },

        error:
        function () {
            var msg = "Error en pasar datos";
            displayMsg(msg);
        }

    })

}


//Muestra alert con Bootbox
function displayMsg(msg) {
        bootbox.alert(msg);
    }
