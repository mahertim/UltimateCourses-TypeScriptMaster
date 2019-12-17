enum Sizes {
  Small, // 0
  Medium, // 1
  Large, // 2
}

enum Sizes {
  ExtraLarge = 3, // cannot infer number
}

const selectedSize = 2;

console.log(Sizes.Large, Sizes[2], Sizes['Large'], Sizes[selectedSize]);
