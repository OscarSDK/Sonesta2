$(document).ready(function(){
    Carga();  
});


function Carga(){

	//tabla donde duardamos la lista de sucursales
	var tablaDatos = $('#tablaVentasUsuario > tbody');
	var route = "/Sonesta2/public/ventausuario";

	$('#tablaVentasUsuario> tbody').empty();

	$.get(route, function(res){
		$(res).each(function(key,value)
		{
			tablaDatos.append("<tr><td>"+value.id+"</td><td>"+value.CodVenta+"</td><td>"+value.fecha+"</td><td>"+value.vendedor+"</td><td>"+value.preciototal+"</td><td>"+value.preciopagado+"</td><td>"+value.descuento+"</td><td>"+value.tipocambio+"</td><td><button value="+value.id+" OnClick='Mostrar(this);' class='btn btn-primary' data-toggle='modal' data-target='#myModal'>Editar</button><button class='btn btn-danger' value="+value.id+" OnClick='Eliminar(this);'>Eliminar</button></td></tr>");
		});

	$(function () {
   

    $('#tablaVentasUsuario').DataTable({
      
      dom: 'Bfrtip',
        buttons: [

        	 'copy', 'csv', 'excel', 'pdf', 'print'
            //{
            //    extend: 'pdfHtml5',
            //    orientation: 'landscape',
            //    pageSize: 'LEGAL'
            //}
         ],
      "paging": true,
      "lengthChange": true,
      "searching": true,
      "ordering": true,
      "info": true,
      "autoWidth": false
    	})
  		});
	});

}
