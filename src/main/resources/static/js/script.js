const selecterDE = document.querySelector("#lang-select-de");
const selecterUS = document.querySelector("#lang-select-us");
selecterDE.addEventListener("click", (event) => {
    window.location.replace('/?lang=de');
});
selecterUS.addEventListener("click", (event) => {
    window.location.replace('/?lang=us');
});
function playVidoe() {

}

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
var map = new jsVectorMap({
    map: 'world',
    selector: '#map',
    selectedRegions: ['DE', 'KR'],
    markers: [
        { name: 'Incheon, South Korea', coords: [37.456257, 126.705208], style: { image: '' } },
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
    onRegionClick: function (event, code) {
        if (map.getSelectedRegions().includes(code)) {
            document.querySelector(".world-map").setAttribute("selected", "");
            map.updateSize();
            map.setFocus({
                regions: [code],
                animate: true,
            });
        } else {
            document.querySelector(".world-map").removeAttribute("selected");
            map.setFocus({
                regions: [code],
                animate: true,
            });
            map.updateSize();
        }

    },

});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
} 

window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
      lightbox_close();
    }
  }
  
  function lightbox_open() {
    var lightBoxVideo = document.getElementById("video");
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
  }
  
  function lightbox_close() {
    var lightBoxVideo = document.getElementById("video");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
  }