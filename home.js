var copyDate = new Date();
year = copyDate.getFullYear();


const copys = document.getElementById('copyrights');
const copysss = document.createElement('p')
const copyss = document.createTextNode('Copyright ' + year);
copysss.appendChild(copyss);
copys.appendChild(copysss);