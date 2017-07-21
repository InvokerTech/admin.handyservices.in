jQuery(document).ready(function(){
	

var servicename = [];
jQuery.ajax({
url:'https://handy-service-server.herokuapp.com/services',
type:'get',
beforeSend:function(){jQuery('#preloader').show()},
success:function(data){
console.log(data);
if(Object.keys(data).length>0){
jQuery.each(data,function(key,val){
servicename[val._id] = val.name;
});
//console.log(servicename);
}
jQuery.ajax({
url:'https://handy-service-server.herokuapp.com/serviceman/all',

success:function(data){
  jQuery.ajax({
url:'https://handy-service-server.herokuapp.com/all/vendor',

success:function(data){


}



});
	var servicemen_list = '';

if(Object.keys(data).length>0){

  console.log(data);
  
jQuery.each(data,function(key,val){
  service_name = '';
service = val.services;
jQuery.each(val.services,function(key1,val1){
  if(typeof servicename[val1]!=='undefined'){
  service_name += servicename[val1]+',';
}else{
  service_name += 'Not Available ,';
}
});
service = service.join();
//console.log(val._id);
	email = (typeof val.email!=="undefined")?val.email:"Not Available";
	name = (typeof val.name!=="undefined")?val.name:"Not Available";
    number = (typeof val.number!=="undefined")?val.number:"Not Available";
    //srr = "//cdn4.iconfinder.com/data/icons/small-n-flat/24/user-group-512.png";
 photos = (typeof val.photo!=="undefined")?val.photo:"//cdn4.iconfinder.com/data/icons/small-n-flat/24/user-group-512.png";
servicemen_list +='<tr><td>'+email+'</td>';
servicemen_list +='<td>'+name+'</td>';
 servicemen_list +='<td><img src="'+photos+'" class="img-circle" width="40" height="40"></td>';
servicemen_list +='<td>'+number+'</td>';
servicemen_list +='<td>'+service_name+'</td>';
servicemen_list +='<td><button data-id="'+val._id+'" data-toggle="modal" data-target="#edit_addordermodal" class="btn btn-primary btn-xs edit_serviceman"><i class="fa fa-eye"></i></button> <button data-id="'+val._id+'" class="btn btn-danger btn-xs del_serviceman"><i class="fa fa-trash-o "></i></button></td></tr>';
});

}
//console.log(servicemen_list)
jQuery('#preloader').hide();
jQuery('#all_servicemen tbody').html(servicemen_list);
}
});
}
});

	jQuery.ajax({
url:'https://handy-service-server.herokuapp.com/locations',
success:function(data){
var city = '<option></option>';
if(Object.keys(data).length>0){
jQuery.each(data,function(key,val){
  if(val.enabled){
city +='<option value="'+val._id+'">'+val.city_name+'</option>';

}
});
jQuery('[name=location]').html(city);
 $('[name=location]').selectpicker();
}
}
});




jQuery('#addordermodal #add_serviceman').click(function(event){

event.preventDefault();
var service=[];
jQuery('#addordermodal .op1:checked').each(function(){
service.push({'service_id':jQuery(this).val(),'role':jQuery('#'+jQuery(this).val()+' input').val()});


});
if(jQuery('#_pass').val()!='' && fullname!='' && jQuery('#addordermodal [name=_email]').val()!='' &&  jQuery('#addordermodal [name=number]').val()!='' &&  jQuery('#addordermodal [name=location]').val()!='' &&  jQuery('#addordermodal [name=gender]').val()!='' &&  jQuery('#addordermodal [name=photo]').val()!='' &&  jQuery('#addordermodal [name=dob]').val()!='' && service!=''){


fullname = jQuery('#addordermodal [name=first_name]').val()+' '+jQuery('#addordermodal [name=last_name]').val();
//zip_code:jQuery('#addordermodal [name=zip_code]').val(), 
jQuery.ajax({
url:'https://handy-service-server.herokuapp.com/add/serviceman',
data:{pass:jQuery('#_pass').val(),name:fullname,email:jQuery('#addordermodal [name=_email]').val(), number:jQuery('#addordermodal [name=number]').val(), location:jQuery('#addordermodal [name=location]').val(), gender:jQuery('#addordermodal [name=gender]').val(), photo:jQuery('#addordermodal [name=photo]').val(), dob:jQuery('#addordermodal [name=dob]').val(),services:service, created_by:''},
type:'POST',
success:function(data){
  if(data.message=='serviceman created'){
    swal('Success','Serviceman Created','success');
    setTimeout(function(){window.location.href="";},2000)
  } 

}
});
}else{
  swal('Error','All field required','error');
}
});

jQuery('#edit_addordermodal #edit_serviceman').click(function(event){

event.preventDefault();
var service=[];
/*jQuery('#edit_addordermodal [name=op]:checked').each(function(){
service.push(jQuery(this).val());

});*/
jQuery.ajax({
url:'https://handy-service-server.herokuapp.com/update/serviceman',
data:{id:jQuery('#serviceman_edit').val(),name:jQuery('#edit_addordermodal [name=first_name]').val()+' '+jQuery('#edit_addordermodal [name=last_name]').val(), email:jQuery('#edit_addordermodal [name=_email]').val(), number:jQuery('#edit_addordermodal [name=number]').val(), location:jQuery('#edit_addordermodal [name=location]').val(), gender:jQuery('#edit_addordermodal [name=gender]').val(), photo:jQuery('#edit_addordermodal [name=photo]').val(), dob:jQuery('#edit_addordermodal [name=dob]').val(), created_by:''},
type:'POST',
success:function(data){
      swal("Updated!", "Serviceman info Has Been Updated", "success");
                 setTimeout(function(){
               // window.location.href='';
            },1000);
//window.location.href="";
}
});
});





jQuery('#all_servicemen').on('click','.del_serviceman',function(){
service_id = jQuery(this).data('id');
swal({
  title: "Are you sure? ",
  text: "Serviceman Will Be Deleted For Ever",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#DD6B55",
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel plx!",
  closeOnConfirm: false,
  closeOnCancel: false
},
function(isConfirm){
  if (isConfirm) {
    jQuery.ajax({
        url:'https://handy-service-server.herokuapp.com/delete/serviceman',
        data:'id='+service_id,
        type:'POST',
        success:function(data){
            if(data.message=='Serviceman deleted.'){
                 swal("Deleted!", "Serviceman Has Been Deleted", "success");
                 setTimeout(function(){
                window.location.href='';
            },1000);
            }
        }
    })
  } else {
    swal("Cancelled", "Serviceman Has Not Been Deleted :)", "error");
  }
});

});




jQuery('#all_servicemen').on('click','.edit_serviceman',function(){
id = jQuery(this).data('id');
jQuery('#serviceman_edit').val(id);
jQuery.ajax({
url:'https://handy-service-server.herokuapp.com/serviceman',
data:'id='+id,
type:'get',
success:function(data){
	if(typeof data.message==='undefined'){
		
if(Object.keys(data[0]).length>0){
jQuery.each(data[0],function(key,val){
if(key=='services'){console.log(key);

jQuery.each(val,function(key1,val1){

//jQuery('#edit_addordermodal [value='+val1+']').prop('checked',true);
});
}else{console.log(key);
    if(key!='name'){
      jQuery('#edit_addordermodal [name='+key+']').val(val);
    if(key=='location'){
       jQuery('#edit_addordermodal [name=location]').selectpicker(val.split(' '));
    }}else{
  console.log(val);
  jQuery('#edit_addordermodal [name=first_name]').val(val.split(' ')[0]);
  jQuery('#edit_addordermodal [name=last_name]').val(val.split(' ')[1]);
}
	
}

});
}
}
}
});

});



});

