$(function(){var r=$("#width"),t=$("#length"),e=$("#btn"),l=$("#perimeter"),i=$("#area");e.click(function(){var e=r.val(),a=t.val(),n=new Rectangle(e,a);l.val(n.perimeter()),i.val(n.area())})});