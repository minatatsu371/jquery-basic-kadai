document.querySelector('.btn');
document.querySelector('.text-box');


(function () {
    $('#btn').on('click',function() {
        $('.text-box').text('クリックされました').show();
    });
  });
  