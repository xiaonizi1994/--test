/**
 * Created by Administrator on 2016/6/2.
// */
window.onload=function(){
    var container=document.getElementsByClassName("container")[0];
    var list=document.getElementsByClassName("list")[0];
    var btn=document.getElementsByClassName("btn")[0].getElementsByTagName("span");
    var prev=document.getElementsByClassName("prev")[0];
    var next=document.getElementsByClassName("next")[0];
    var timer;
    var index=1;
	var animated=false;
    list.style.left="-600px";
    function showbtn(){
		for(var i=0;i<5;i++){
			if(btn[i].className=="on"){
				btn[i].className="";}
			//break;
			}
        btn[index-1].className="on";
    }
    function animate(offset){
        var newleft=parseInt(list.style.left)+offset;
        var time=600;
        var interval=60;
        var speed=offset/(time/interval);
        animated=true;
        function go() {
            if (speed < 0 &&parseInt(list.style.left)> newleft || speed > 0 &&parseInt(list.style.left) < newleft) {
                list.style.left = parseInt(list.style.left) + speed+"px";
                setTimeout(go,interval);
            }
            else {
                list.style.left = newleft+"px";
                if (newleft > -600)
                {
                    list.style.left = "-3000px";
                }
                if (newleft<-3000)
                {
                    list.style.left = "-600px";
                }
				animated=false;
            }
        }
        go();
    }

    prev.onclick=function(){
		if(animated){
			return;}
        if(index==1){
            index=5;
        }
        else{
            index-=1;
        }
        showbtn();
        animate(600);
    }
    next.onclick=function(){
		if(animated){
			return;}
		if(index==5){
			index=1;}
		else{
			index+=1;}
        showbtn();
        animate(-600);
    }
    function play(){
        timer=setInterval(function(){next.onclick();},2000);
    }
    function stop(){
        clearInterval(timer);
    }
	for(var i=0;i<btn.length;i++){

		btn[i].onclick=function(){
            if(animated){
                return;
            }
            if(this.className=="on"){
                return;
            }
            var myIndex=parseInt(this.getAttribute("index"));
            var offset=(myIndex-index)*(-600);
            animate(offset);
            index=myIndex;
            showbtn();
        }
    }
    container.onmouseover=play;
    container.onmouseout=stop;
    play();
}

//window.onload=function(){
//    var container=document.getElementsByClassName("container")[0];
//    var list=document.getElementsByClassName('list')[0];
//    var btn=document.getElementsByClassName("btn")[0].getElementsByClassName("span");
//    var prev=document.getElementsByClassName("prev")[0];
//    var next=document.getElementsByClassName("next")[0];
//    list.style.left="0px";
//    function animate(offset){
//        list.style.left=parseInt(list.style.left)+offset+"px";
//
//    }
//    prev.onclick=function(){
//        animate(600);
//    }
//    next.onclick=function(){
//        animate(-600);
//    }
//}
