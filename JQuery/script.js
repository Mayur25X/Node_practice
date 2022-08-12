
$("h1").addClass("big-title");  //adding class using JQ


//adding Multiple class in element

$("h1").addClass("margin addpadding");

////change the text of the element

$("h1").text("Bye");
$("button").text("Don't click here");

//add tag or html in element
$("button").click(function(){
     
    $("h1").html("<em>Don't click here</em>");
    
})


//class Att ribute
console.log($("img").attr("src"));

//it show all the class                   
console.log($("h1").attr("class"));


//add event in the button
// console.log(document.querySelectorAll("button").length);

//Normal JavaScript

// for (let i = 0; i < document.querySelectorAll("button").length; i++) {
//     const element = document.querySelectorAll("button")[i];
//     element.addEventListener("click",()=>document.querySelector("h1").style.color="purple");
// }


//Using JQurey
$("button").click(function()
{
    $("h1").css("color","purple");
})


//In input text box

$("input").keypress((event)=>{
    console.log(event.key);
    $("h1").text(event.key);
})




//on event

$("h1").on("mouseenter",()=>{
    $("h1").css("color","purple");
})

$("h1").on("mouseleave",()=>{
    $("h1").css("color","yellow");
})


$("img").on("click",()=>{
    $("h1").text("color red");
})


/// Adding element in the HTML code ::
$("h1").after("<em>Don't click here</em>");
$("h1").before("<em>Don't click here</em>");
$("h1").prepend("<em>ji </em>");
$("h1").append("<em> hello</em>");



// Animation in JQ

// $("button").on("click",()=>
// {
//     $("h1").hide();
// })


// $("button").on("click",()=>
// {
//     $("h1").toggle();
// })



// $("button").on("click",()=>
// {
    //     $("h1").fadeIn();
// })

// $("button").on("click",()=>
// {
    //     $("h1").fadeOut();
    // })


    
    // $("button").on("click",()=>
    // {
    //     $("h1").fadeToggle();
    // })

    // $("button").on("click",()=>
    // {
    //     $("h1").slideUp();
    // })

    // $("button").on("click",()=>
    // {
    //     $("h1").slideDown();
    // })


    // $("button").on("click",()=>
    // {
    //     $("h1").slideToggle();
    // })

    // $("button").on("click",()=>
    // {
    //     $("h1").animate({
    //         opacity:0.5
    //     });
    // })


     $("button").on("click",()=>
    {
        $("h1").slideUp().slideDown().animate({opacity:0.7});
    })