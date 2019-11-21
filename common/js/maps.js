// var map
// var idInfoBoxAberto
// var infoBox = []
// var markers = []
// var markerClusterer = null
// function initialize(inputId) {
//   var latlng = new google.maps.LatLng(10.771971, 106.697845)

//   var options = {
//     zoom: 12,
//     center: latlng,
//     mapTypeId: 'hybrid',
//     disableDefaultUI: true,
//     zoomControl: true
//   }

//   map = new google.maps.Map(document.getElementById(inputId), options)
// }

// function clearClusters(e) {
//   e.preventDefault()
//   e.stopPropagation()
//   // if (markerClusterer) {
//   //   infoBox = []
//   //   markers = []
//   //   markerClusterer.clearMarkers()
//   // }
// }

// function carregarPontos(pontos, allPontos, getLocalizedSlug) {
//   var latlngbounds = new google.maps.LatLngBounds()
//   markers=[];
//   infoBox=[];
//   $.each(pontos, function(index, item) {
//     var marker = new google.maps.Marker({
//       position: new google.maps.LatLng(item.Lat, item.Lng),
//       animation: google.maps.Animation.DROP,
//       title: item.Name,
//       icon: require("@/assets/map-marker-related.png")
//     })
//     var listingType = ""
//     switch (item.ListingType) {
//       case "Apartment":
//         listingType = '<span class="colorTagTitle-info">Apartment</span>'
//         break
//       case "Office":
//         listingType = '<span class="colorTagTitle-success">Office</span>'
//         break
//       case "Room":
//         listingType = '<span class="colorTagTitle-danger">Room</span>'
//         break
//     }

//     var myOptions = {
//       content:
//         '<div class="apart-box  listing-box listingBoxInMap">' +
//         '<a href="' +
//         getLocalizedSlug(item.DetailsUrl) +
//         '">' +
//         '<div class="img-background img-16-9 relative pointer" style="background-image: url(' +
//         item.AvatarUrl +
//         ')">' +
//         "</div>" +
//         "</a>" +
//         '<div class="text mapDistance">' +
//         '<div class="d-flex pricehome mt-2">' +
//         "<p>" +
//         '<span class="price">' +
//         item.BasicPriceFormat +
//         "</span>" +
//         "</p>" +
//         "<p>" +
//         '<span class="price">&nbsp| ' +
//         item.Acreage +
//         "&nbspm" +
//         "<sup>&nbsp" +
//         2 +
//         "</sup>" +
//         "</span>" +
//         "</p>" +
//         "</div>" +
//         '<div class="d-flex justify-content-between">' +
//         '<p class="infoApartment">' +
//         '<span title="Bedrooms">' +
//         '<i class="fa fa-bed font-weight-normal mr-1" aria-hidden="true"></i>' +
//         item.Bedrooms +
//         '<span class="mx-2">' +
//         "</span>" +
//         "</span>" +
//         '<span title="Areas">' +
//         '<i class="fa fa-shower mr-1" aria-hidden="true"></i>' +
//         item.Bathrooms +
//         '<span class="mx-2">' +
//         "</span>" +
//         "</span>" +
//         '<span title="Areas">' +
//         ' <i class="fa fa-clock-o mr-1" aria-hidden="true"></i>' +
//         item.CreatedDateFormat +
//         "</span>" +
//         "</p>" +
//         "</div>" +
//         "</div>" +
//         "</div>"
//     }
//     infoBox[item.Id] = new InfoBox(myOptions)
//     infoBox[item.Id].marker = marker

//     infoBox[item.Id].listener = google.maps.event.addListener(
//       marker,
//       "click",
//       function(e) {
//         abrirInfoBox(item.Id, marker)
//       }
//     )
//     infoBox.push(infoBox[item.Id])
//     markers.push(marker)

//     latlngbounds.extend(marker.position)
//   })

//   markerClusterer = new MarkerClusterer(map, markers)
//   if (pontos.length <= 0) {
//     map.setCenter(new google.maps.LatLng(10.771971, 106.697845))
//   } else {
//     // map.fitBounds(latlngbounds)
//   }
// }
// function registerHoveEffect() {
//   $(".listing-box").hover(
//     function() {
//       var lat = $(this).attr("data-lat")
//       var lng = $(this).attr("data-lng")
//       var id = $(this).attr("data-id")
//       var name = $(this).attr("data-name")

//       var marker = new google.maps.Marker({
//         position: new google.maps.LatLng(lat, lng),
//         title: name,
//         icon: require("@/assets/map-marker-related.png")
//       })
//       abrirInfoBox(id, marker)
//     },
//     function() {
//       var id = $(this).attr("data-id")
//       infoBox[id].close()
//     }
//   )
// }
// function abrirInfoBox(id, marker) {
//   if (
//     typeof idInfoBoxAberto == "number" &&
//     typeof infoBox[idInfoBoxAberto] == "object"
//   ) {
//     infoBox[idInfoBoxAberto].close()
//   }
//   infoBox[id].open(map, marker)
//   idInfoBoxAberto = id
// }
// export default { initialize, registerHoveEffect, carregarPontos, abrirInfoBox }
