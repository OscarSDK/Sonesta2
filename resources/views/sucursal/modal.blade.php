	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Actualizar Genero</h4>
      </div>
      <div class="modal-body">
      
      	
        <input type="hidden" name="_token" value="{{ csrf_token() }}" id="token">
      	
        <input type="hidden" id="id">
        
          
    <div class="form-group">
        {!! Form::label('codigo:')!!}
        {!! Form::text('CodSucursal',null,['id'=>'CodSucursal','class'=>'form-control','required','disabled'])!!}
    </div>
    <div class="form-group">
        {!! Form::label('nombre sucursal:')!!}
        {!! Form::text('NombreSucursal',null,['id'=>'NombreSucursal','class'=>'form-control' , 'required'])!!}
    </div>
    <div class="form-group">
        {!! Form::label('direccion:')!!}
        {!! Form::text('Direccion',null,['id'=>'Direccion','class'=>'form-control','required'])!!}
    </div>



      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      {!!link_to('#', $title='Actualizar', $attributes = ['id'=>'actualizar', 'class'=>'btn btn-primary'], $secure = null)!!}
      </div>
    </div>
  </div>
</div>

