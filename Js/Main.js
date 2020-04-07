function openSegment(evt, linkName) {
  var i = 0;
  var webTab;
  var link;
  webTab = document.getElementsByClassName("webTab");
  for (i = 0; i < webTab.length; i++) {
    webTab[i].style.display = "none";
  }
  link = document.getElementsByClassName("link");
  for (i = 0; i < link.length; i++) {
    link[i].className = link[i].className.replace(" active", "");
  }
  document.getElementById(linkName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

// Mapa ubicacion y tema oscuro de Google Maps
// Mi Clave API de Google Maps
// AIzaSyCqVnhWqriNSssKmDdwAVgEotQOmXg5NeQ

function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.674, lng: -73.945},
    zoom: 12,
    styles: [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }
    ]
  });
}

// Popups

// Seleccionar boton
var btn_open_popup_booking = document.getElementById('booking');
var btn_open_popup_share = document.getElementById('share_sm');
var btn_open_popup_send = document.getElementById('send');

// Boton de cierre del popup
var btn_close_popup1 = document.getElementById('btn_close_booking');
var btn_close_popup2 = document.getElementById('btn_close_share');
var btn_close_popup3 = document.getElementById('btn_close_send');

// El overlay segun su ID
var overlay1 = document.getElementById('popup_booking');
var overlay2 = document.getElementById('popup_share_sm');
var overlay3 = document.getElementById('popup_send_check');

// El popup segun su ID
var popup1 = document.getElementById('popup_book');
var popup2 = document.getElementById('popup_share');
var popup3 = document.getElementById('popup_send');

    // Reservas
    btn_open_popup_booking.addEventListener('click', function () {
      overlay1.classList.add('active');
      popup1.classList.add('active');
    });

    btn_close_popup1.addEventListener('click', function () {
      overlay1.classList.remove('active');
      popup1.classList.remove('active');
    });

    // Compartir en redes sociales
    btn_open_popup_share.addEventListener('click', function () {
      overlay2.classList.add('active');
      popup2.classList.add('active');
    });

    btn_close_popup2.addEventListener('click', function () {
      overlay2.classList.remove('active');
      popup2.classList.remove('active');
    });

    //Mensaje de contacto enviado
    btn_open_popup_send.addEventListener('click', function() {
      overlay3.classList.add('active');
      popup3.classList.add('active');
    });

    btn_close_popup3.addEventListener('click', function () {
      overlay3.classList.remove('active');
      popup3.classList.remove('active');
    })


// Bloqueos de desarrollador
// 1 - Click Derecho
// 2 - Comando 'ctrl + u'
// 3 - Tecla 'f12'

/*document.oncontextmenu = function() {
  Swal.fire({
    type: 'error',
    title: 'Alerta',
    text: 'Por razones de seguridad, no se permite usar este comando'
  // // btn_close_popup();
  })
  return false
  // Para todos los navegadores exceptuando Google Chorme e Internet Explorer
}
function right(e) {
  if (navigator.appName == 'Netscape' && e.which == 3) {
    Swal.fire({
      type: 'error',
      title: 'Alerta',
      text: 'Por razones de seguridad, no se permite usar este comando'
    })
     return false;
  }
  else if (navigator.appName == 'Microsoft Internet Explorer' && event.button==2) {
    Swal.fire({
      type: 'error',
      title: 'Alerta',
      text: 'Por razones de seguridad, no se permite usar este comando'
    })
  return false;
  }
return true;
}

document.onkeydown = function(e) {
  if (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 117) || e.keyCode === 123 || e.keyCode === 67) {
      Swal.fire({
        type: 'error',
        title: 'Alerta',
        text: 'Por razones de seguridad, no se permite usar este comando'
      })
      
      return false;
  } else {
    return true;
  }
};*/

// Compartir con Facebook

document.getElementById('share_fb').onclick = function() {
  FB.ui({
    method: 'share',
    mobile_iframe: true,
    href: 'https://developers.facebook.com/docs/',
  }, function(response){});
}

// Simular el ' Me gusta '  en las imagenes, añadiendole una clase con color rojo ña fuente

$(document).ready(function(){
  $('#heart').on('click', function(){
    $(this).toggleClass('like_image');
  });
  $('#heart2').on('click', function(){
    $(this).toggleClass('like_image');
  });
  $('#heart3').on('click', function(){
    $(this).toggleClass('like_image');
  });
  $('#heart4').on('click', function(){
    $(this).toggleClass('like_image');
  });
});