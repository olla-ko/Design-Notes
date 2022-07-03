// <ul>
//     <li><a href="index.html">Вступление</a></li>
//     <li><a href="new-designer.html">Начинающему проектировщику</a></li>
//     <li><a href="talk.html">Общайся</a></li>
//     <li><a href="present.html">Презентуй свои решения</a></li>
//     <li><a href="redesign.html">Хочу все переделать</a></li>
//     <li><a href="too-hard.html">Мне достался сложный проект</a></li>
//     <li><a href="be-confident.html">Борем неуверенность</a></li>
//     <li><a href="beauty-vs-usability.html">Красота vs удобство</a></li>
//     <li><a href="they-will-learn.html">Заблуждение: они обучатся</a></li>
//     <li><a href="we-will-test.html">Заблуждение: мы потестим</a></li>
//     <li><a href="they-will-adjust.html">Заблуждение: они настроят</a></li>
// </ul>

// $(".navigation").append("");

$('.navigation').append('<ul> <li><a href="index.html">Вступление</a></li> <li><a href="new-designer.html">Начинающему проектировщику</a></li> <li><a href="talk.html">Общайся</a></li> <li><a href="present.html">Презентуй свои решения</a></li> <li><a href="redesign.html">Хочу все переделать</a></li> <li><a href="too-hard.html">Мне достался сложный проект</a></li> <li><a href="be-confident.html">Борем неуверенность</a></li> <li><a href="beauty-vs-usability.html">Красота vs&nbsp;удобство</a></li> <li><a href="they-will-learn.html">Заблуждение: они обучатся</a></li> <li><a href="we-will-test.html">Заблуждение: мы&nbsp;потестим</a></li> <li><a href="they-will-adjust.html">Заблуждение: они настроят</a></li></ul>');

var header = $('h1').text();
$('a:contains('+ header +')').parent('li').addClass('active');

var next_article = $('li.active').next('li').find('a').attr('href');
$('div.next-article-wrap').find('a').attr('href', next_article);

$(document).ready(function(){
    $(".burger").click(function(){
        $(".navigation").toggle();
    });
});