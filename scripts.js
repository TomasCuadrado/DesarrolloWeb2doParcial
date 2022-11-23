$(document).ready(function(){
    console.log("hola");
    let nombre;
    let brutos;
    const jubilatorios = 11;
    const obraSocial = 3;
    const pami = 3;
    let sueldoNeto;
    let calcJubilacion;
    let calcObraSocial;
    let calcPami;

    $("#result-titulo").hide();

    $("#btn-brutos").click(function(){
        //capturo los valores ingresados
        brutos = $("#brutos").val();
        nombre = $("#nombre").val();
        
        console.log(`Los ingresos brutos ingresados de ${nombre} son $${brutos}`);

        //calculo de los porcentajes
        calcJubilacion = brutos*jubilatorios/100;
        calcObraSocial = brutos*obraSocial/100;
        calcPami = brutos*pami/100;

        sueldoNeto = brutos - calcJubilacion - calcObraSocial - calcPami;

        //redondeo los valores
        sueldoNeto = sueldoNeto.toFixed(2);
        calcJubilacion = calcJubilacion.toFixed(2);
        calcObraSocial = calcObraSocial.toFixed(2);
        calcPami = calcPami.toFixed(2);

        console.log(`Sueldo neto: ${sueldoNeto}`);
        console.log(`Aporte jubilacion: ${calcJubilacion}`);
        console.log(`Aporte Obra Social: ${calcObraSocial}`);
        console.log(`Aporte PAMI: ${calcPami}`);

        //imprimo por pantalla los resultados
        $("#result-titulo").show();

        $("#result-nombre").empty();
        $("#result-nombre").append(`${nombre}, acá están tus ingresos...`);

        $("#result-brutos").empty();
        $("#result-brutos").append(`Ingresos brutos ingresados: $${brutos}`);

        $("#result-neto").empty();
        $("#result-neto").append(`Sueldo neto es: $${sueldoNeto}`);

        $("#result-jubil").empty();
        $("#result-jubil").append(`Aportes jubilatorios: $${calcJubilacion}`);

        $("#result-social").empty();
        $("#result-social").append(`Aportes obra social: $${calcObraSocial}`);

        $("#result-pami").empty();
        $("#result-pami").append(`Aportes PAMI: $${calcPami}`);


    });



});