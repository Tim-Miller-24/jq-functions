$('div')
.html('Проверка метода HTML')
.css({fontSize: '50px',
color: 'brown',
background: 'green'})

// функцию снизу в комментарии, а примеры ниже раскомментить по одному
$('div').on('click', function() {
    $(this).toggleClass('active');
})


// Дз
// $('div').addClass('active')

// $('div').removeClass('active')

// $('div').changeWidth('500px').changeHeight(200)

// $('div').changeHeight().changeWidth()

$('.testing').changeHeight()

$('div').hover()