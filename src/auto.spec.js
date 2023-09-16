//import sumar from "./sumador.js";
import Auto from "./Auto";
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
  it("Gira a la izquierda desde el Sud", () => {
    let auto = new Auto(0, 0, "S");
    auto.ejecutar("I");
    expect(auto.posicionActual()).toEqual("0,0E");
  });
  it("Gira a la izquierda desde el Este", () => {
    let auto = new Auto(0, 0, "E");
    auto.ejecutar("I");
    expect(auto.posicionActual()).toEqual("0,0N");
  });
});
