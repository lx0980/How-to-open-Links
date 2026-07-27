<script>
function playVideo(id){
    document.getElementById("player").style.display="block";
    document.getElementById("frame").src=
    "https://www.youtube.com/embed/"+id+"?autoplay=1";
}

function closePlayer(){
    document.getElementById("player").style.display="none";
    document.getElementById("frame").src="";
}
</script>
