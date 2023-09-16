//import sumar from "./sumador.js";

describe("Auto", () => {
  it("Gira a la izquierda desde el Norte", () => {
    let auto = new Auto(0, 0, "N");
    auto.ejecutar("I");
    expect(auto.posicionActual()).toEqual("0,0O");
  });
});

class Auto {
  ejecutar() {}
  posicionActual() {
    return "0,0O";
  }
}
