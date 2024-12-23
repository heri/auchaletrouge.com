
///
// for all query parameter K with value V (index.html?K=V),
//    reads template named "template-K", and applies it by replacing all occurences of string "{{K}}"" with V
//    puts the result in element with id "template-{{K}}-container"
///

var pageQuery = window.location.search;
var pageParameters = new URLSearchParams(pageQuery);

for (let k of pageParameters.keys()) {
    // var template = document.getElementById(`template-${k}`);
    // var templateHtml = template.innerHTML;
    // var content = templateHtml.replace(`{{${k}}}`, pageParameters.get(k))
    // document.getElementById(`template-${k}-container`).innerHTML = content;
    document.getElementById(`template-${k}`).innerHTML = pageParameters.get(k);
}

