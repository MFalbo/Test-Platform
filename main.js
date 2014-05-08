$(document).on('ready', function() {
	var pos = 1;
  $('.rotate').click(function(){
  	if(pos<4){
  		pos+=1
  	}
  	else{
  		pos=1
  	}
  	$(this).closest('.container').find('.cart').removeClass(/*something*/).addClass('pos' + pos.toString());
  });
});