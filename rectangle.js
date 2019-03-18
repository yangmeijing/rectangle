/* global Rectangle: true */
$(function(){
  var $width=$('#width'),
      $height=$('#length'),
      $btn=$('#btn'),
      $per=$('#perimeter'),
      $area=$('#area');

  $btn.click(function(){
    var w = $width.val(),
        h = $height.val();        

    var r = new Rectangle(w, h);
            

    $per.val(r.perimeter());
    $area.val(r.area());
                          
  });  
});
