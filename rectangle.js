$(function(){
  var $width=$('#width'),
      $height=$('#length'),
      $btn=$('#btn'),
      $per=$('#per'),
      $area=$('#area');

$btn.click(function(){
  var w=Number($width.val()),
      h=Number($height.val());

  var p=2*(w+h),
      a=w*h;
  console.log(h);
  $per.val(p);
  $area.val(a);
})
});
