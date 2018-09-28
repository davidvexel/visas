$(document).on("ready",ini);
var asd="";
function ini(){
    var strHTML="";
    $.ajax({
       global:false,
       crossDomain: true,
       url: "http://eldesarrollodemiweb.com/phpApp/consulta_enlaces.php",
       dataType:"json",
       success: function(data){
            if(data.datos=="si"){
                if(data.consulta[2]=="enlace"){
                    var url = data.consulta[1].replace("watch?v=", "embed/");
                    $("#video_inm").html("<iframe src='"+url+"' frameborder='0' allowfullscreen></iframe>");
                }else{
                    $("#video_inm").html("<iframe src='http://eldesarrollodemiweb.com/visas/audios/"+data.consulta[1]+"' frameborder='0' allowfullscreen></iframe>");
                }
                
                if(data.consulta1[2]=="enlace"){
                    var url2 = data.consulta1[1].replace("watch?v=", "embed/");
                    $("#video_especial").html("<iframe src='"+url2+"' frameborder='0' allowfullscreen></iframe>");
                }else{
                    $("#video_especial").html("<iframe src='http://eldesarrollodemiweb.com/visas/audios/"+data.consulta1[1]+"' frameborder='0' allowfullscreen></iframe>");
                }
                
                if(data.consulta2[2]=="enlace"){
                    var url3 = data.consulta2[1].replace("watch?v=", "embed/");
                    $("#video_legal").html("<iframe src='"+url3+"' frameborder='0' allowfullscreen></iframe>");
                }else{
                    $("#video_legal").html("<iframe src='http://eldesarrollodemiweb.com/visas/audios/"+data.consulta2[1]+"' frameborder='0' allowfullscreen></iframe>");
                }
                
                if(data.consulta3[2]=="enlace"){
                    var url4 = data.consulta3[1].replace("watch?v=", "embed/");
                    $("#video_pais").html("<iframe src='"+url4+"' frameborder='0' allowfullscreen></iframe>");
                }else{
                    $("#video_pais").html("<iframe src='http://eldesarrollodemiweb.com/visas/audios/"+data.consulta3[1]+"' frameborder='0' allowfullscreen></iframe>");
                }
                
                if(data.consulta4[2]=="enlace"){
                    var url5 = data.consulta4[1].replace("watch?v=", "embed/");
                    $("#video_requisitos").html("<iframe src='"+url5+"' frameborder='0' allowfullscreen></iframe>");
                }else{
                    $("#video_requisitos").html("<iframe src='http://eldesarrollodemiweb.com/visas/audios/"+data.consulta4[1]+"' frameborder='0' allowfullscreen></iframe>");
                }
                
                if(data.consulta5[2]=="enlace"){
                    var url6 = data.consulta5[1].replace("watch?v=", "embed/");
                    $("#video_ajustes").html("<iframe src='"+url6+"' frameborder='0' allowfullscreen></iframe>");
                }else{
                    $("#video_ajustes").html("<iframe src='http://eldesarrollodemiweb.com/visas/audios/"+data.consulta5[1]+"' frameborder='0' allowfullscreen></iframe>");
                }
                
                if(data.consulta6[2]=="enlace"){
                    var url7 = data.consulta6[1].replace("watch?v=", "embed/");
                    $("#video_pasaporte").html("<iframe src='"+url7+"' frameborder='0' allowfullscreen></iframe>");
                }else{
                    $("#video_pasaporte").html("<iframe src='http://eldesarrollodemiweb.com/visas/audios/"+data.consulta6[1]+"' frameborder='0' allowfullscreen></iframe>");
                }
           }
            var lista="";
            $.each(data.consultaOficinas, function(key, value){
                //alert(phones);
                lista+='<li>';
                lista+='<div class="ui-grid-a">';
                lista+='<div class="ui-block-a">';
                lista+='<h2>'+value.nombre+'</h2>';
                lista+='<h4>'+value.direccion+'</h4>';
                lista+='<h5>Oficina: '+value.telefono1+'</h5>';
                lista+='<h5>Whatsapp: '+value.telefono2+'</h5>';
                lista+='<p>'+value.correo+'</p>';
                lista+='</div>';
                lista+='<div class="ui-block-b">';
                lista+='<a href="tel:'+value.telefono1+'" class="ui-btn-right ui-btn ui-btn-inline ui-mini ui-corner-all ui-btn-icon-right deback" data-rel=""><i class="fa fa-phone fa-2x"></i></a>';
                lista+='<br/><br/>';
                lista+='<a href="whatsapp://'+value.telefono2+'" class="ui-btn-right ui-btn ui-btn-inline ui-mini ui-corner-all ui-btn-icon-right deback" data-rel=""><i class="fa fa-whatsapp fa-2x"></i></a>';
                lista+='</div>';
                lista+='</div>';
                lista+='</li>';
            });
                $("#lista_oficinas").html(lista);     
            
            var opciones="";
            opciones+="<option disabled selected>--Seleccione un servicio--</option>";
            $.each(data.consultaSer, function(key,value){
                opciones+='<option value="'+value.servicio+'">'+value.servicio+'</option>';
            });
            $("#selserv").html(opciones);
       }
    });
    $("#loginBTN").on("click", iniciar_sesion);
    $("#btnDom").on("click", enviar_domicilio);
    $("#btnOfi").on("click", enviar_domicilio2);
    
}

function iniciar_sesion(){
    var usuario=$('#nombredeusuario').val();
    var pass=$('#clave').val();
    if( $('#terminos').prop('checked') ) {
        $.ajax({
            url: "http://eldesarrollodemiweb.com/phpApp/iniciar_sesion.php",
            method:"POST",
            dataType:"json",
            data:{
                usuario:usuario,
                pass:pass
            },
            success :function(res){
                if(res.respuesta=="si"){
                    $.mobile.changePage("#menu");
                    asd=res.id;
                }else{
                    $('#popREF2').trigger('click');  
                }
            }
        });
    }else{
         $('#popREF').trigger('click');
    }
}

function enviar_domicilio(){
    var domicilio=$("#domicilio").val();
    var telefonoC=$("#telefonoC").val();
    var telefonoT=$("#telefonoT").val();
    var celular=$("#celular").val();
    var mail=$("#mail").val();  
    var cual="domicilio";
    var id=asd;
    var service=$("#selserv").val();
    $.ajax({
        crossDomain: true,
        url: "http://eldesarrollodemiweb.com/phpApp/enviar_datos.php",
        method: "POST",
        dataType: "json",
        data: { domicilio:domicilio,
        telefonoC:telefonoC,
        telefonoT:telefonoT,
        celular:celular,
        mail:mail,
        id:id,
        servicio:service,
        cual:cual }
    });
}

function enviar_domicilio2(){
    var domicilio=$("#domicilio").val();
    var telefonoC=$("#telefonoC").val();
    var telefonoT=$("#telefonoT").val();
    var celular=$("#celular").val();
    var mail=$("#mail").val();  
    var cual="oficina";
    var id=asd;
    var service=$("#selserv").val();
    $.ajax({
        crossDomain: true,
        url: "http://eldesarrollodemiweb.com/phpApp/enviar_datos.php",
        method: "POST",
        dataType: "json",
        data: { domicilio:domicilio,
        telefonoC:telefonoC,
        telefonoT:telefonoT,
        celular:celular,
        mail:mail,
        id:id,
        servicio:service,
        cual:cual }
    });
}
