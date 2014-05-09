$(document).on('ready', function() {
	var pos = -90;
  $('.rotate').click(function(){
    var innerPos = -pos;
  	$('.cube').css('-webkit-transform','rotateX(' + pos + 'deg)');
    $('.cube2').css('-webkit-Transform', 'rotateX(' + innerPos + 'deg) translate3d(0,0,-100px)');

    pos -= 90;

  });
});