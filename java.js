$(document).ready(() => {
    var beegee = document.getElementById("beegee");
    var catata = document.getElementById("catata");

    $('.text2').on('mouseenter', () => {
        beegee.play()
     
    })
    $('.text2').on('mouseleave', () => {
        beegee.pause()
    });
    $('.text3').on('mouseenter', () => {
        catata.play()
    })
    $('.text3').on('mouseleave', () => {
        catata.pause()

    });
    // $("#imgAnimate").hover(
    //     function()
    //     {
    //         $(this).attr("src", "GIF URL HERE");
    //     },
    //     function()
    //     {
    //         $(this).attr("src", "STATIC IMAGE URL HERE");
    //     });
});