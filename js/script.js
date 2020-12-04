$('div')
.html('Проверка метода HTML')
.css({fontSize: '50px',
color: 'brown',
background: 'green'})

// функцию снизу в комментарии, а примеры ниже раскомментить по одному
/* $('div').on('click', function() {
    $(this).toggleClass('active');
})
 */

// Дз
// $('div').addClass('active')

// $('div').removeClass('active')

// $('div').changeWidth('500px').changeHeight(200)

// $('div').changeHeight().changeWidth()

$('.testing').changeHeight()

// $('div').hover(function() {
//     $(this).css('height', '50vh')
// }, function() {
//     $(this).css('height', '100px')
//     console.dir(this);
// })

// $('div').dblclick(function () {
//     $(this).css({
//         background: 'darkblue',
//         width: Math.floor(Math.random() * (window.innerWidth - 50 + 1) + 50) + 'px'
//     }).removeAttr('title')
// }).attr({
//     title: 'Проверка на добавление атрибута',
//     class: 'active'
// }).checkClass('active')


$('h1').on('click', function () {
    $(this).nextElem().toggleClass('collapse');
})


$('div').on('click', function () {
    $(this).prevElem().toggleClass('active')
})

