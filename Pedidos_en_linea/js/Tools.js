
/** Metodo que ejecuta por medio de AJAX un Web Method de
    de C#.
    aspxPage  string  - es la Pagina ASPX que contiene el metodo a ejecutar
    methodName string - es el nombre del metodo a ejecutar
    dataToSend JSON   - contiene los parametros a enviar

    Metodos a ejecutar del Ajax:
    successCallBackMethod es el metodo a ejecutar si la llamada fue efectiva

    NOTA: a todos los metodos se manda un string como unico parametro conteniendo la info
    de resultado de la llamada.
*/
function executeNetWebMethod(aspxPage,methodName,dataToSend,successCallBackMethod)
{
    var urlASPX  = aspxPage + "/" + methodName;

    $.ajax({
        type: "POST",
        url: urlASPX,
        data: JSON.stringify(dataToSend),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data)
        {//Si la llamada fue efectiva, ejecuta la funcion callBack correspondiente
            //La informacion regresada por el WebMethod esta en el atributo "d"
            successCallBackMethod(data.d);
        }
    });

}



function confirmFIMEFlow(msg_, callbackFunction_OK, callbackFunction_NO) {
    bootbox.dialog({
        message: '<div align="center">' + msg_ + '</div>',
        title: '<div align="center">FIME-FlowSystem te quiere decir algo!</div>',
        buttons: {
            main: {
                label: "OK",
                className: "btn-primary",
                callback: callbackFunction_OK
            },
            NO: {
                label: "Cancelar",
                className: "btn btn-default",
                callback: callbackFunction_NO
            }
        }
    });
}

function mainAlertFIMEFLOW(msg_, callbackFunction) {
    var msg = '<h3 align="center">FIME-FlowSystem te quiere decir algo!</h3>';
    msg += '<hr>';
    msg += '<div align="center">' + msg_ + '</div>';
    bootbox.alert(msg, callbackFunction);
}

function mainWarningFIMEFLOW(msg_, callbackFunction) {
    var msg = '<h3 class="text-warning" align="center">Oooh! - FIME-FlowSystem dice que necesitas leer esto</h3>';
    msg += '<hr>';
    msg += '<div class="alert alert-warning">';
    msg += '<span id="spanErrorWarning">' + msg_ + '</span><br><br>';
    msg += '</div>';
    bootbox.alert(msg, callbackFunction);
}

function errorAlertFIMEFLOW(msg_, callbackFunction) {
    var msg = '<h3 class="text-danger" align="center">Ups! - Creo que rompiste FIME-FlowSystem</h3>';
    msg += '<hr>';
    msg += '<div class="alert alert-danger">';
    msg += '<span id="spanErrorAlert">' + msg_ + '</span><br><br>';
    msg += '</div>';
    bootbox.alert(msg, callbackFunction);
}

//Funcion para validación de numeros
function validarNumero(evt, buttonid) {
    var carCode;
    if (window.event)
        carCode = window.event.keyCode; //IE
    else
        carCode = e.which; //firefox
    var bt = document.getElementById(buttonid);
    if (bt) {
        if (carCode < 48 || carCode > 57) {
            if (carCode.keyCode == 13)
                bt.click();
            return false;
        }
    }
}

//Función para validar letras mayusculas 
function validarLetrasMayusculas(evt, buttonid) {
    //Variable para el evento keypress
    var letras;
    if (window.event)
        letras = window.event.keyCode; 
    else
        letras = e.which; 
    var bt = document.getElementById(buttonid);
    if (bt) {
            //De la tabla ANSI solo leera las letras mayusculas
        if ((letras >= 0 && letras <= 31) || (letras >= 33 && letras <= 64) ||(letras >= 91 && letras <= 164) || (letras >= 166))
        {
            if (letras.keyCode == 13) 
                bt.click();
                return false;   
        } 
    }
}

//Funcion para validar el campo de contraseña sin espacio
function numerosLetras(evt, buttonid) {
    var letras;
    if (window.event)
        letras = window.event.keyCode; 
    else
        letras = e.which; 
    var bt = document.getElementById(buttonid);
    if (bt) {
        //De la tabla ANSI solo leera las letras mayusculas, minusculas y numeros
        if ((letras >= 0 && letras <= 47) || (letras >= 58 && letras <= 64) || (letras >= 91 && letras <= 96) || (letras >= 123)) {
            if (letras.keyCode == 13)
                bt.click();
            return false;
        }
    }
}

//Funcion para validar el campo de contraseña sin espacio
function validarLetrasMinMay(evt, buttonid) {
    var letras;
    if (window.event)
        letras = window.event.keyCode;
    else
        letras = e.which;
    var bt = document.getElementById(buttonid);
    if (bt) {
        //De la tabla ANSI solo leera las letras mayusculas y minusculas
        if ((letras >= 0 && letras <= 64) || (letras >= 91 && letras <= 96) || (letras >= 123)) {
            if (letras.keyCode == 13)
                bt.click();
            return false;
        }
    }
}
