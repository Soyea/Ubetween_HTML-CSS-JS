var banner=document.getElementById("store-banner");
var imgs=banner.getElementsByTagName("img");
var lis=banner.getElementsByTagName("li");

var curIndex=0;
var timer=null;
function changeImg(nextIndex){
    imgs[curIndex].className="hide";
    imgs[nextIndex].className="show";
    lis[curIndex].className="";
    lis[nextIndex].className="active";
    curIndex=nextIndex;
}
function autoChange(){
    var nextIndex=curIndex+1>=imgs.length?0:curIndex+1;
    changeImg(nextIndex);
}

function spanPre(){
    var preIndex=curIndex-1<0?imgs.length-1:curIndex-1;
    changeImg(preIndex);
}
function spanNext(){
    var nextIndex=curIndex+1>=imgs.length?0:curIndex+1;
    changeImg(nextIndex);
}
timer=setInterval(autoChange,3000);

// banner.onmouseover=function(){
//     clearInterval(timer);
// }
// banner.onmouseout=function(){
//     timer=setInterval(autoChange,2500);
// }
for(var i=0;i<lis.length;i++){
    lis[i].index=i;
    lis[i].onmouseover=function(){
        changeImg(this.index);
    }
}