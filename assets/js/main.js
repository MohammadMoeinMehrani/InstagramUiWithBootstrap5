// GitHub : @MohammadMoeinMehrani

var vid = document.getElementById("myVideo"); 
if(vid.paused){
    vid.style.filter = "blur(2px)";
}
function playVid() {
    if(vid.paused){
        vid.play();
        vid.style.filter = "blur(0px)";
    }else{
        vid.pause();
        vid.style.filter = "blur(2px)";
    }
} 
document.getElementById("footer").innerHTML = "© 2021 Copyright "+"<a href='https://github.com/MohammadMoeinMehrani'>GitHub.com/MohammadMoeinMehrani</a>";