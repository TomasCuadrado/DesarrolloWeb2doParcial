$(document).ready(function () {
    $("#sec-resultados").hide();

    $("#btn-brutos").click(function () {

        let nombre;
        let brutos;
        const jubilatorios = 11;
        const obraSocial = 3;
        const pami = 3;
        let sueldoNeto;
        let calcJubilacion;
        let calcObraSocial;
        let calcPami;

        //capturo los valores ingresados
        brutos = $("#brutos").val();
        brutos = parseFloat(brutos).toFixed(2);
        nombre = $("#nombre").val();
        //nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);

        //calculo de los porcentajes
        calcJubilacion = brutos * jubilatorios / 100;
        calcObraSocial = brutos * obraSocial / 100;
        calcPami = brutos * pami / 100;

        sueldoNeto = brutos - calcJubilacion - calcObraSocial - calcPami;

        //redondeo los valores
        sueldoNeto = sueldoNeto.toFixed(2);
        calcJubilacion = calcJubilacion.toFixed(2);
        calcObraSocial = calcObraSocial.toFixed(2);
        calcPami = calcPami.toFixed(2);




        //imprimo por pantalla los resultados
        $("#result-titulo").show();
        $("#sec-resultados").show();
        $("#result-nombre").empty();
        //$("#result-nombre").append(`${nombre + ', '}`);

        if(nombre==''){
            $("#result-nombre").append(`Estos son tus ingresos...`);
        }else{
            $("#result-nombre").append(`<span class="nombre fst-italic">${nombre}</span>, estos son tus ingresos...`);
        }

        $("#result-brutos").empty();
        $("#result-brutos").append(`Ingresos brutos: <span class="color-plata valor">${'$' + brutos}</span>`);
        $("#result-jubil").empty();
        $("#result-jubil").append(`Aportes jubilatorios: <span class="color-plata valor">${'$' + calcJubilacion}</span>`);

        $("#result-social").empty();
        $("#result-social").append(`<span class="texto">Aportes obra social: </span><span class="color-plata valor">${'$' + calcObraSocial}</span>`);

        $("#result-pami").empty();
        $("#result-pami").append(`<span class="texto">Aportes PAMI: </span><span class="color-plata valor">${'$' + calcPami}</span>`);

        $("#result-neto").empty();
        $("#result-neto").append(`<span class="texto">Sueldo neto: </span><span class="color-plata fw-bold valor">${'$' + sueldoNeto}</span>`);



    });
});
