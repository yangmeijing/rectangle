/* global Rectangle: true */
$(function(){
  var $width=$('#width'),
      $height=$('#length'),
      $form=$('form'),
      $per=$('#perimeter'),
      $area=$('#area');
 
  $form.submit(function(e){
    e.preventDefault();//阻止表单提交时刷新
    var w = $width.val(),
        h = $height.val();        
   
    var r = new Rectangle(w, h);
            

    $per.val(r.perimeter());
    $area.val(r.area());
                          
  });  
});
