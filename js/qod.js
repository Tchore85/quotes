(function($) {
  // $('body').append('hello world');

  //your code goes here

  //1:get request to grab random post and append to the DOM

  //add a click event for the "Show Me Another" btn and the run the AJAX code below
  $('#new-quote-button').on('click', function(event) {
    event.preventDefault();

    $.ajax({
      method: 'GET',
      url:
        qod_vars.rest_url +
        '/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
    })

      .done(function(data) {
        console.log(data[0]);
        // console.log(data[0].title);

        let results = data[0].content.rendered;
        let author = data[0].title.rendered;

        $('.entry-content').html(results);
        $('.entry-title').html(author);
        //append the quote to the DOM
      })
      .fail(function(error) {
        console.log('an error occured', error);
      });
  });
  $('#quote-submission-form').on('submit', function(event) {
    event.preventDefault();

    const $author = $('#quote-author');
    const $content = $('#quote-content');
    const $bookName = $('#quote-source');
    const $url = $('#quote-source-url');

    // console.log(
    //   'Form values: ',
    //   $author.val(),
    //   $title.val(),
    //   $bookName.val(),
    //   $url.val()
    // );

    $.ajax({
      method: 'POST',
      url: qod_vars.rest_url + 'wp/v2/posts/',
      data: {
        title: $author.val(),
        content: $content.val(),
        _qod_quote_source: $bookName.val(),
        _qod_quote_source_url: $url.val()
        // comment_status: 'closed'
      },
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', qod_vars.nonce);
      }
    })
      .done(function(response) {
        console.log($author + $content + $bookName + $url);
        console.log(response);
      })
      .fail(function(error) {
        console.log('something went wrong');
        console.log(error);
      });
  });

  //2: post a new quote using the post method
  //Using a form to submit a quote so  a .submit event
})(jQuery);

// IIFE Immediatley Invoked Function Expression
// Invoke also means calling a function or just running a function
