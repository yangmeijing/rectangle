/* global Rectangle,valid: true */
$(function(){
  var $width=$('#width'),
      $height=$('#length'),
      $btn=$('#btn'),
      $per=$('#perimeter'),
      $area=$('#area'),
      $widthValidation=$('#width-validation'),
      $heightValidation=$('#length-validation');

  $width.keypress(function(e){
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>\\]/.test(e.key)){
      e.preventDefault();
    }
    if(e.key === '.'){
      if(e.target.value === '') e.preventDefault();
      if(e.target.value.indexOf('.') !== -1){
        e.preventDefault();
      }else{
        if(e.target.selectionStart === 0 ) e.preventDefault();
      }
    }  
  });
  $width.focusout(function(){
    var result = valid($width.val());
   
    if(!result.isOK){
      $widthValidation.html('宽度'+result.reason);
    }else{
      $widthValidation.html('');
    }
  });
  $height.focusout(function(){
   
    var result = valid($height.val());
    if(!result.isOK){
      $heightValidation.html('长度'+result.reason);
    }else{
      $heightValidation.html('');
    }
  });
 
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
