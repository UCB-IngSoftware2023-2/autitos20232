class Auto {
  constructor(coordX, coordY, direccion) {
    this.coordX = coordX;
    this.coordY = coordY;
    this.direccion = direccion;
  }
  ejecutar(comando) {
    if (this.direccion === "O") {
      this.direccion = "S";
    } else if (this.direccion === "N") {
      this.direccion = "O";
    } else if (this.direccion === "S") {
      this.direccion = "E";
    }
  }
  posicionActual() {
    let posicion = this.coordX + "," + this.coordY + this.direccion;
    return posicion;
  }
}
export default Auto;
