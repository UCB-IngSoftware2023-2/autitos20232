class Auto {
  constructor(coordX, coordY, direccion) {
    this.coordX = coordX;
    this.coordY = coordY;
    this.direccion = direccion;
  }
  ejecutar(comando) {
    switch (this.direccion) {
      case "O":
        this.direccion = "S";
        break;
      case "N":
        this.direccion = "O";
        break;
      case "S":
        this.direccion = "E";
        break;
      case "E":
        this.direccion = "N";
        break;
    }
  }
  posicionActual() {
    let posicion = this.coordX + "," + this.coordY + this.direccion;
    return posicion;
  }
}
export default Auto;
