// ==UserScript==
// @name        WantPage
// @description Adds live example button, with styling.
// @include     https://www.magiccardmarket.eu/?mainPage=showWants*
// @grant       GM_addStyle
// ==/UserScript==
 
/*--- Create a button in a container div.  It will be styled and
    positioned with CSS.
*/
var zNode       = document.createElement ('div');
zNode.innerHTML = '<button id="myButton" type="button">'
+ 'For Pete\'s sake, don\'t click me!</button>'
;
zNode.setAttribute ('id', 'myContainer');
document.body.appendChild (zNode);
 
//--- Activate the newly added button.
document.getElementById ("myButton").addEventListener (
    "click", ButtonClickAction, false
);
 
/*function addEventListenerByClass(className, event, fn) {
    var list = document.getElementsByClassName(className);
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn, false);
    }
}*/
 
//addEventListenerByClass('checkbox', 'click', handleDragStart);
 
function checkit(name)
{
  check_all_in_document(window.document, name);
  for (var j = 0; j < window.frames.length; j++)
  {
    check_all_in_document(window.frames[j].document, name);
  }
}
 
function check_all_in_document(doc, name)
{
  var c = new Array();
  c = document.getElementsByTagName('input');
  for (var i = 0; i < c.length; i++)
  {
    if (c[i].type == 'checkbox')
    {
        //console.log(name);
        if(c[i].name == name){
                c[i].checked = true;
        }
    }
  }  
}
 
 
function ButtonClickAction (zEvent) {
    c = document.getElementsByTagName('sw_WantsListID');
    for ( method in c ){
     console.log(method);
    }
    console.log(c.item);
    console.log(c.length);
    var array = [];
    //var links = document.getElementsByTagName("a");
    
    for ( method in table ){
     	console.log(method);
    }
    var cusid_ele = document.getElementsByClassName('MKMTable wantsTable MKMSortable');
    /*for (var i = 0; i < cusid_ele.length; ++i) {
        var item = cusid_ele[i];  
        //item.innerHTML = 'this is value';
        console.log(item.innerHTML);
    }*/    
    var table = cusid_ele[0].getElementsByTagName("a");
    //window.open(table[0], '_blank');
    
    window.open(table[5], '_blank');
    /*for(var i=0; i<table.length-4; i=i+5){
        window.open(table[i], '_blank');
        sleep(400);
    }*/
    for ( method in table[0]){
     console.log(method);
    }
    //table[0].click();    
    for(var i=0; i<table.length; i++) {
        //array.push(links[i].href);
        console.log(table[i]);
    }
    /*for(var i=0; i<links.length; i++) {
        console.log(table[i].innerHTML);
    }*/    
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
 
function setCheckedValue(toBeChecked){
    document.getElementById(toBeChecked).checked=true;
    alert((document.getElementById(toBeChecked).checked))
    alert($('#'+toBeChecked).prop('checked'))
}
 
//--- Style our newly added elements using CSS.
GM_addStyle ( multilineStr ( function () {/*!
    #myContainer {
        position:               absolute;
        top:                    0;
        left:                   0;
        font-size:              20px;
        background:             orange;
        border:                 3px outset black;
        margin:                 5px;
        opacity:                0.9;
        z-index:                222;
        padding:                5px 20px;
    }
    #myButton {
        cursor:                 pointer;
    }
    #myContainer p {
        color:                  red;
        background:             white;
    }
*/} ) );
 
function multilineStr (dummyFunc) {
    var str = dummyFunc.toString ();
    str     = str.replace (/^[^\/]+\/\*!?/, '') // Strip function () { /*!
    .replace (/\s*\*\/\s*\}\s*$/, '')   // Strip */ }
    .replace (/\/\/.+$/gm, '') // Double-slash comments wreck CSS. Strip them.
    ;
    return str;
}
