class Auto {
  constructor(coordX, coordY, direccion) {
    this.coordX = coordX;
    this.coordY = coordY;
    this.direccion = direccion;

    this.girosIzquierda = new Map();
    this.girosIzquierda.set("O", "S");
    this.girosIzquierda.set("N", "O");
    this.girosIzquierda.set("S", "E");
    this.girosIzquierda.set("E", "N");
    this.girosDerecha = new Map();
    this.girosDerecha.set("N", "E");
    this.girosDerecha.set("O", "N");
    this.girosDerecha.set("E", "S");
    this.girosDerecha.set("S", "O");
  }
  ejecutar(comando) {
    if (comando == "I") {
      this.direccion = this.girosIzquierda.get(this.direccion);
    } else if (comando == "D") {
      this.direccion = this.girosDerecha.get(this.direccion);
    } else if (comando == "A") {
      if (this.direccion === "O") {
        this.coordX--;
      } else {
        this.coordY++;
      }
    }
  }
  posicionActual() {
    let posicion = this.coordX + "," + this.coordY + this.direccion;
    return posicion;
  }
}
export default Auto;
