class Geocode {

  constructor(ymaps) {
    this.ymaps = ymaps;
  }
  
  getCoords(place) {
    return this.ymaps.geocode(place, {result: 1})
              .then(res => {
                const firstGeoObject = res.geoObjects.get(0);
                if (firstGeoObject === undefined) {
                  throw new Error('Такого города нет');
                }

                const coords = firstGeoObject.geometry.getCoordinates();
                return new Promise(resolve => {
                  resolve(coords);
                });
              });
  }


  getPlace(coords) {
    return this.ymaps.geocode(coords)
            .then(res => {
              const firstGeoObject = res.geoObjects.get(0);
              const address = firstGeoObject.getAddressLine();
              return new Promise(resolve => {
                resolve(address);
              })
            })
            .catch(err => {
              console.log(err);
            })
  }
  
}

export default Geocode;