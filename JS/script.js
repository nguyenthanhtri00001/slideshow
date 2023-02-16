
var listImage=['untitle1.jpg','untitle2.jpg','untitle5.jpg','untitle6.jpg', 'untitle7']
var index=0;
document.getElementById("slider").src="image/"+listImage[index];
function slider(){
         index++;
         if(index<=4){
            document.getElementById("slider").src="image/"+listImage[index];
         }else{
            index=0;
            document.getElementById("slider").src="image/"+listImage[index];
         }
         
}
setInterval(slider, 1000);