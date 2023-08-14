class Square {
  constructor(coordinates) {
    this.coordinates = coordinates;
    this.hasKnight = false;
  }

  toggleKnight() {
    this.hasKnight = !this.hasKnight;
  }
}

export default Square;
