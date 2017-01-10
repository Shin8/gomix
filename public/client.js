// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

// $(function() {
//   console.log('hello world :o');
  
//   $.get('/dreams', function(dreams) {
//     dreams.forEach(function(dream) {
//       $('<li></li>').text(dream).appendTo('ul#dreams');
//     });
//   });

//   $('form').submit(function(event) {
//     event.preventDefault();
//     dream = $('input').val();
//     $.post('/dreams?' + $.param({dream: dream}), function() {
//       $('<li></li>').text(dream).appendTo('ul#dreams');
//       $('input').val('');
//       $('input').focus();
//     });
//   });

// });

$(document).ready(function(){
  console.log('Sup');
  $('#valid-unix').on('click', function(e){
    $('input').val(Date.now());
  });
  
  $('#send').on('click', function(e){
    var date = $('input').val();
    $.ajax('/get',{
      dataType: 'json',
      method: 'post',
      data: {
        date: date
      },
      success: (data, status, jq) => {
        alert(JSON.stringify(data));
      }
    });
  });
});