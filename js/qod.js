(function($) {


    $('body').append('hello world');

  //your code goes here


  //1:get request to grab random post and append to the DOM

  $.ajax({
method:"Get",
url://god_vars.rest_url + /wp/v2/posts
  }).done(function(data){
console.log(data);

//append the quote to the DOM
}).fail(function(error){
console.log('this doestn work');

})



  //2: post a new quote using the post method

})(jQuery)

// IIFE Immediatley Invoked Function Expression
// Invoke also means calling a function or just running a function
