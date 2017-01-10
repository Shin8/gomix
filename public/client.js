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
