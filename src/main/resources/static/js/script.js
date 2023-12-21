function toggleMenu() {
    const menu =  document.querySelector(".menu-links");
    const icon =  document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
    var map = new jsVectorMap({
    map: 'world',
    selector: '#map',
    selectedRegions: ['DE', 'KR'],
    markers: [
{ name: 'Incheon, South Korea', coords: [37.456257, 126.705208],style:{ image: ''} },
{ name: 'Dusseldorf, Germany', coords: [51.233334, 6.783333] }
    ],
    lines: [{
    from: 'Incheon, South Korea',
    to: 'Dusseldorf, Germany',
    style: {
    stroke: 'red',
}
}],
    markerLabelStyle: {
    initial: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 13,
    fontWeight: 500,
    fill: '#35373e',
},
    // You can control the hover and selected state for labels as well.
    hover: {
    fill: 'red'
},
    selected: {
    fill: 'blue'
}
},
    regionStyle: {
    selected: { fill: '#4169e1' },
    selectedHover: { fill: 'purple' }
},
    onRegionClick: function (event, code){
    if(map.getSelectedRegions().includes(code)){
    document.querySelector(".world-map").setAttribute("selected","");
    map.updateSize();
    map.setFocus({
    regions: [code],
    animate: true,
});
}else{
    document.querySelector(".world-map").removeAttribute("selected");
    map.setFocus({
    regions: [code],
    animate: true,
});
    map.updateSize();
}

},

});
