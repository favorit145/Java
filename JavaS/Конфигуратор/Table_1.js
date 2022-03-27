window.onload=init;
function init() {
    var images=document.getElementsByTagName("td")
        for (var i=0;i<images.length;i++) {
        images[i].onclick=showtab;
    alert(images[i]);}
}
function showtab(eventObj) {
    var zamena=eventObj.target;
    var result=false;
    alert(zamena);
    str= prompt("Введите новые данные ");
    zamena.innerHTML=str;
    result=confirm("Если данные  правильные - нажмите ОК, для корректировки - нажмите Отмена");
    if (result)  { return str;
    } else {showtub11();}
}
