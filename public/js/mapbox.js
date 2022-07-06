export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZHVjbXlwaGFtMjYxMCIsImEiOiJjbDU2bHNwZjYxa240M2pyeWF3cGZzbHhmIn0.rFRE2MbSqpf2VPOveXXj7w';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ducmypham2610/cl56m63tx002c15pj6e98pfc1',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((location) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(location.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(location.coordinates)
      .setHTML(`<p>Day ${location.day}: ${location.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(location.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};