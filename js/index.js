var mySwiper;
$('#tab li').tap(function(){
	$("#tab li").eq(0).find("img").attr("src","http://p3.lefile.cn/product/adminweb/2017/02/10/4138274b-a53f-4dba-8678-f2dbcc3c8c95_1.png")
	$("#tab li").eq(1).find("img").attr("src","http://p1.lefile.cn/product/adminweb/2017/02/10/af071dc3-c6ca-46ad-adbf-151c3c6fa35e_1.png")
	$("#tab li").eq(2).find("img").attr("src","http://p1.lefile.cn/product/adminweb/2017/02/10/5524010f-786a-495b-8e41-dc8b10703ff6_1.png")
	$("#tab li").eq(3).find("img").attr("src","http://p4.lefile.cn/product/adminweb/2017/02/10/5d4218be-6e1d-47b4-9bb6-20165848bdd9_1.png")
	$("#tab li a").css({"color":"#9e9e9e"})
	$('#main>div').hide();
	$('#main>div').eq($(this).index()).show();
	$(this).find("a").css({
			"color":"#fb35b6"
		})
	if($(this).index()==0){
		$(this).find("img").attr("src","http://p3.lefile.cn/product/adminweb/2017/02/10/4ffa4804-fa0d-4784-8d02-4be4a7f0f210_1.png")
	}
	if($(this).index()==1){
		$(this).find("img").attr("src","http://p2.lefile.cn/product/adminweb/2017/02/10/e4e4a7a7-830f-4979-9bd5-633152afa0f1_1.png")
	}
	if($(this).index()==2){
		$(this).find("img").attr("src","http://p2.lefile.cn/product/adminweb/2017/02/10/893ff46b-93b0-4baa-ad7d-84856fb57aca_1.png")
	}
	if($(this).index()==3){
		$(this).find("img").attr("src","http://p3.lefile.cn/product/adminweb/2017/02/10/4ffa4804-fa0d-4784-8d02-4be4a7f0f210_1.png")
	}
	mySwiper.startAutoplay();
})
mySwiper = new Swiper ('.swiper-container', {
	 loop: true,
	 autoplay:500,
	 autoplayDisableOnInteraction:false,
	 // 如果需要分页器
	 pagination: '.swiper-pagination',
 }) 
 var i=true;
 $("#fl_h_a").tap(function(){
 	if(i){
 		$("#head_two").show(1000);
 	}else{
 		$("#head_two").hide(1000);
 	}
 	i=!i;
 	
 })
var j=true;
 $("#gwc_h_a").tap(function(){
 	if(j){
 		$("#head3_two").show(1000);
 	}else{
 		$("#head3_two").hide(1000);
 	}
 	j=!j;
 	
 })
 var k=true;
 $("#my_h_a").tap(function(){
 	if(k){
 		$("#head4_two").show(1000);
 	}else{
 		$("#head_two").hide(1000);
 	}
 	k=!k;
 	
 })
 $("#dl_tab>li").tap(function(){
   	$("#dl_tab>li").css("border-bottom","none")
   	$("#div>div").hide();
   	$("#div>div").eq($(this).index()).show();
   	$(this).css("border-bottom","2px solid red")
 })
