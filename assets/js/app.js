// $('li').click(function(){
//     $(this).toggleClass('first');
// })

//  "on" mei selector andar hota hai isliye
$('ul').on('click','li',function(){
    $(this).toggleClass('first'); // this refer to li
})

$('ul').on('click', 'span' , function (){

    $(this).parent().fadeOut(1000,function(){  //time of fading out 
        
        $(this).remove(); //this is span

    })
    // $(this).parent().remove(); //this is span

})

$('input[type="text"]').keypress(function (e){
    if(e.which === 13){
        const todoText = $(this).val();
        const lis = `<li><span></span> ${todoText}</li>`
        $('ul').append(lis);
        $(this).val("");
    }
})
$('#plus').click(function(){
    $('input[type="text"]').fadeToggle(500);
})

