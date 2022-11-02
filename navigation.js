// $(".navigation").append("");

$('.navigation').append('<ul> <li><a href="index.html">Вступление</a></li> <li><a href="new-designer.html">1. Начинающему проектировщику</a></li> <li><a href="talk.html">2. Общайся</a></li> <li><a href="present.html">3. Презентуй свои решения</a></li> <li><a href="redesign.html">4. Хочу все переделать</a></li> <li><a href="too-hard.html">5. Мне достался сложный проект</a></li> <li><a href="be-confident.html">6. Борем неуверенность</a></li> <li><a href="beauty-vs-usability.html">7. Красота vs&nbsp;удобство</a></li> <li><a href="they-will-learn.html">8. Заблуждение: они&nbsp;обучатся</a></li><li><a href="we-will-test.html">9. Заблуждение: мы&nbsp;потестим</a></li> <li><a href="they-will-adjust.html">10. Заблуждение: они&nbsp;настроят</a></li> <li><a href="research.html">11. Измеряй</a></li></ul><div class="gradient-divider"></div><div class="donation"><img class="icon" src="IMG/wallet.svg"<span><a href="https://qiwi.com/n/OLLAKO" target="_blank">Скинуться на продление домена&nbsp;до&nbsp;2024 года</a></span></div><div class="gradient-divider"></div>');

var header = $('h1').text();
$('a:contains('+ header +')').parent('li').addClass('active');

var next_article = $('li.active').next('li').find('a').attr('href');
$('div.next-article-wrap').find('a').attr('href', next_article);

$(document).ready(function(){
    $(".burger").click(function(){
        $(".navigation").toggle();
    });
});

window.addEventListener('resize', function(event) {
    if (window.innerWidth > 1300) {
        $(".navigation").show();
      }
}, true);