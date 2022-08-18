import $ from './lib/lib';

// $('button').click(function(){
//   $('div').eq(2).toggleClass('active');
// });
// $('div').click(function(){
//   console.log($(this).index());
// });
// console.log($('div').eq(2).find('.more'));
// console.log($('.some').closest('.findme'));
// $('button').fadeIn(5000,);

$('#first').click(()=>{
  $('div').eq(1).fadeOut(500);
});
$('[data-count="second"]').click(()=>{
  $('div').eq(2).fadeOut(500);
});
$('button').eq(2).on('click', ()=> {
  $('.w-500').fadeOut(800);
});