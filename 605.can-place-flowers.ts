function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (n === 0) {
    return true;
  }

  // edge cases
  if (
    flowerbed.length === 0
  ) {
    return false;
  } else if (
    flowerbed.length === 1
    && flowerbed[0] === 0
    && n === 1
  ) {
    return true;
  } else if (
    flowerbed.length === 2
    && (
      flowerbed[0] === 1
      || flowerbed[1] === 1
    )
  ) {
    return false;
  }

  let i = 0, j = 1, k = 2;

  let planted = 0;

  for (; k < flowerbed.length; i++, j++, k++) {
    if (
      i === 0
      && flowerbed[i] === 0
      && flowerbed[j] === 0
    ) {
      flowerbed[i] = 1;
      planted++;
    }
    if (
      flowerbed[i] === 0
      && flowerbed[j] === 0
      && flowerbed[k] === 0
    ) {
      flowerbed[j] = 1;
      planted++;
    }
    if (
      flowerbed[i] === 1
      && flowerbed[j] === 0
      && flowerbed[k] === 0
      && k === flowerbed.length - 1
    ) {
      flowerbed[k] = 1;
      planted++;
    }

    if (planted >= n) {
      return true;
    }
  }

  return false;
};

console.log(canPlaceFlowers([1,0,0,0,1], 1)) // true
console.log(canPlaceFlowers([1,0,0,0,1], 2)) // false
console.log(canPlaceFlowers([1,0,0,0,0,1], 2)) // false
console.log(canPlaceFlowers([1,0,0,0,0,1], 1)) // true
console.log(canPlaceFlowers([1,0,0,0,0,1], 0)) // true
console.log(canPlaceFlowers([0,0,0,0,0,1], 0)) // true
console.log(canPlaceFlowers([0,0,0,0,0,1], 1)) // true
console.log(canPlaceFlowers([0,0,0,0,0,1], 2)) // false

//failing cases
console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2))
console.log(canPlaceFlowers([1,0,0,0,0,1], 2))
console.log(canPlaceFlowers([0,0,0], 2))
console.log(canPlaceFlowers([0,0,0], 1))