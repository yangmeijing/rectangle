/* global Rectangle,valid: true */
$(function(){
  var $width=$('#width'),
      $height=$('#length'),
      $btn=$('#btn'),
      $per=$('#perimeter'),
      $area=$('#area'),
      $widthValidation=$('#width-validation'),
      $heightValidation=$('#length-validation');
   
  $btn.click(function(){
    var w = $width.val(),
        h = $height.val();        
    var result = valid($width.val());
    var validWidth = valid(w);
    var validHeight = valid(h);


    if(!validWidth.isOK){
      $widthValidation.html('长度'+result.reason);
      return;
    }
    if(!validHeight.isOK){
      $heightValidation.html('宽度'+result.reason);
      return;
    }

    var r = new Rectangle(w, h);
            

    $per.val(r.perimeter());
    $area.val(r.area());
                          
  });  
});
