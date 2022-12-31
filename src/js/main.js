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
$('.btn-warning').click(()=>{
  $('.w-500').fadeToggle(500);
});

$('.wrap').html(`<div class="dropdown ">
<button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
<div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
  <a href="#" class="dropdown-item">action 1</a>
  <a href="#" class="dropdown-item">action 2</a>
  <a href="#" class="dropdown-item">action 3</a>
</div>
</div>`);
$('.dropdown-toggle').dropdown(); 

$('#trigger').click(()=>$('#trigger').createModal({
  text: {
    title: 'ПиПиПи',
    body: '           Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus doloremque nesciunt enim rem quam corporis? Dolorem pariatur magnam distinctio perferendis. Ratione dolorem voluptates iusto facilis odit   veritatis, suscipit voluptatibus!'
  },
  btns: {
    count:3,
    settings: [
      [
        'Close',
        ['btn-danger','mr-10'],
        true,
      ],
      [
        'Save changes',
        ['btn-success'],
        false,
        ()=> {
          alert('данные сохранены');
        }
      ],
      [
        'some button',
        ['btn-warning', 'ml-10'],
        false,
        ()=> {
          prompt('данные сохранены', ',kz');
        }
      ]
    ]
  }
}));