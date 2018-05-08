function hider_text()
{
 document.getElementById('text').style.display='none';
}

function hide_me()
{
  hider.style.display='none';
}
//==================================================================
function countRabbits()
 {
    for(var i=1; i<=3; i++)
    {
      alert("Кролик номер " + i);
    }
  }
//=================================================================== 
  function handler1() {
    alert('Спасибо!');
  };

  function handler2() {
    alert('Спасибо ещё раз!');
  }
  elem.onclick = function() { alert("Привет"); };
  elem.addEventListener("click", handler1); // Спасибо!
  elem.addEventListener("click", handler2); // Спасибо ещё раз!
//====================================================================
  var menuElem = document.getElementById('sweeties');
  var titleElem = menuElem.querySelector('.title');

  titleElem.onclick = function() {
    menuElem.classList.toggle('open');
  };
  //==================================================================
  var buttons = document.querySelectorAll('#messages-container .remove-button');

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];

    button.onclick = function() {
      var el = this.parentNode;
      el.parentNode.removeChild(el);
    };
  }
  //===================================================================
  
  var lis = document.getElementsByTagName('li');
  for (var i = 0; i < lis.length; i++)
   {
    lis[i].style.position = 'relative';
    var span = document.createElement('span');
    span.style.cssText = 'position:absolute;left:0;top:0';
    span.innerHTML = i + 1;
    lis[i].appendChild(span);
  }
  var width = 130; // ширина изображения
  var count = 3; // количество изображений

  var carousel = document.getElementById('carousel');
  var list = carousel.querySelector('ul');
  var listElems = carousel.querySelectorAll('li');

  var position = 0; // текущий сдвиг влево

  carousel.querySelector('.prev').onclick = function() {
    // сдвиг влево
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position + width * count, 0)
    list.style.marginLeft = position + 'px';
  };

  carousel.querySelector('.next').onclick = function() {
    // сдвиг вправо
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
  };
  //===================================================================
  var field = document.getElementById('field');
  var ball = document.getElementById('ball');
 
 
  field.onclick = function(event) 
  {

    // координаты поля относительно окна
    var fieldCoords = this.getBoundingClientRect();

    // координаты левого-верхнего внутреннего угла поля
    var fieldInnerCoords = 
    {
      top: fieldCoords.top + field.clientTop,
      left: fieldCoords.left + field.clientLeft
    };

    // разместить по клику,
    // но сдвинув относительно поля (т.к. position:relative)
    // и сдвинув на половину ширины/высоты
    // (!) используются координаты относительно окна clientX/Y, как и в fieldCoords
    var ballCoords =
    {
      top: event.clientY - fieldInnerCoords.top - ball.clientHeight / 2,
      left: event.clientX - fieldInnerCoords.left - ball.clientWidth / 2
    };

    // вылезает за верхнюю границу - разместить по ней
    if (ballCoords.top < 0) ballCoords.top = 0;

    // вылезает за левую границу - разместить по ней
    if (ballCoords.left < 0) ballCoords.left = 0;


    // вылезает за правую границу - разместить по ней
    if (ballCoords.left + ball.clientWidth > field.clientWidth) 
    {
      ballCoords.left = field.clientWidth - ball.clientWidth;
    }

    // вылезает за нижнюю границу - разместить по ней
    if (ballCoords.top + ball.clientHeight > field.clientHeight) 
    {
      ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
  }


