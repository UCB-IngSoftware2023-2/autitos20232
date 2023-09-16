//import sumar from "./sumador.js";

describe("Auto", () => {
  it("Gira a la izquierda desde el Norte", () => {
    let auto = new Auto(0, 0, "N");
    auto.ejecutar("I");
    expect(auto.posicionActual()).toEqual("0,0O");
  });
  it("Gira a la izquierda desde el Oeste", () => {
    let auto = new Auto(0, 0, "O");
    auto.ejecutar("I");
    expect(auto.posicionActual()).toEqual("0,0S");
  });
});

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
    }
  }
  posicionActual() {
    let posicion = this.coordX + "," + this.coordY + this.direccion;
    return posicion;
  }
}
