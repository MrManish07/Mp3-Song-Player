let progress = document.getElementById( "progress" )
let song = document.getElementById( "song" )
let ctrlIcon = document.querySelector( ".play" )
song.onloadedmetadata = function ()
{
    progress.max = song.duration;
    progress.value = song.currentTime;
}
document.querySelector( ".skip1" ).addEventListener( "click", () =>
{
    song.currentTime -= 10
} )
document.querySelector( ".skip2" ).addEventListener( "click", () =>
{
    song.currentTime += 10
} )
ctrlIcon.addEventListener( "click", playPause )
function playPause ()
{
    if ( ctrlIcon.classList.contains( "play" ) )
    {
        song.play()
        ctrlIcon.innerHTML = "="
        ctrlIcon.classList.remove( "play" )
        ctrlIcon.classList.add( "pause" )
    } else if ( ctrlIcon.classList.contains( "pause" ) )
    {
        song.pause()
        ctrlIcon.innerHTML = "^"
        ctrlIcon.classList.remove("pause")
        ctrlIcon.classList.add("play")
    }
}
if ( song.play )
{
    setInterval( () =>
    {
        progress.value = song.currentTime;
    }, 500 );
}

progress.onchange = function ()
{
    song.play()
    song.currentTime = progress.value;
    ctrlIcon.innerHTML = "="
    ctrlIcon.classList.remove("play")
    ctrlIcon.classList.add("pause")

}
