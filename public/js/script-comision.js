

function Carga(nombre,fechaInicial,fechaFinal){

    eliminarCajas();
	//tabla donde duardamos la lista de comisiones
	var tablaDatos = $("#tablaComisiones > tbody");
	
	var route = "/Sonesta2/public/comisiones";

	var vendedor=$("#vendedor").val();
	
	$("#tablaComisiones > tbody").empty();
	var monedas=[]

	$.get(route, function(res){
		$(res).each(function(key,value)
		{
			var fechaUsuario=value.created_at;
			var arregloFechaUsuario=fechaUsuario.split(" ");
			var fechaReferente=arregloFechaUsuario[0].trim();
			fechaReferente=fechaReferente.replace(/[/]/gi,"-");
			if(nombre==value.usuario && fechaInicial<=fechaReferente && fechaFinal>=fechaReferente)
			{	
				//monedas.push(value.moneda);
				array_push(monedas,value.moneda);
				tablaDatos.append("<tr><td>"+value.id+"</td><td>"+value.venta+"</td><td>"+value.moneda+"</td><td>"+value.comision+"</td><td><button value="+value.id+" OnClick='Mostrar(this);' class='btn btn-primary' data-toggle='modal' data-target='#myModal'>Editar</button><button class='btn btn-danger' value="+value.id+" OnClick='Eliminar(this);'>Eliminar</button></td></tr>");
			}
			
		});
		for (var i=0; i<monedas.length; i++)
		{
			console.log(monedas[i]);
		} 

		$(function () {
   

    $('#tablaComisiones').DataTable({
      "paging": true,
      "lengthChange": true,
      "searching": true,
      "ordering": true,
      "info": true,
      "autoWidth": true
    });
  		});

	});
}

function array_push(arreglo,texto)
{
	var existe=false;

	for (var i=0;i<arreglo.length;i++) {
		if (arreglo[i]==texto) 
		{
			existe=true
		}
	}
	if (existe==false)
	{
		arreglo.push(texto);
		agregar();
		//console.log("elemento agregado "+texto);
	}
	//console.log("elemento diferente no agregado");
}
function agregar() 
{ 
	//console.log("agregado");
    var o = document.createElement('input'); 
    o.type = "text"; 
    o.name = "lalala"; 
    o.value = "ddd";
    o.className="form-control";
    document.getElementById('cajasComisiones').appendChild(o); 
}
function eliminarCajas()
{
	$("#cajasComisiones").empty();
}