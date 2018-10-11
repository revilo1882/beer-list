export function sortAbv(beers) {
    beers.sort(function (a, b) {
      return a.abv - b.abv;
    });
  }

export function sortFirstBrewed(beers) {
    beers.sort(function (a, b) {
      a = a.first_brewed.split('/');
      b = b.first_brewed.split('/');
      return a[1] - b[1] || a[0] - b[0];
    });
  }

export function sortName(beers) {
    return beers.sort(function (a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
  }

export function sortVolume(beers) {
    beers.sort(function (a, b) {
      return a.volume.value - b.volume.value;
    });
  }
