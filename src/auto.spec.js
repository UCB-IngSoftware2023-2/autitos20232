//import sumar from "./sumador.js";
import Auto from "./Auto";
describe("Auto gira a la Izquierda", () => {
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

describe("Auto gira a la derecha", () => {
  it("Gira a la derecha desde el Norte", () => {
    let auto = new Auto(0, 0, "N");
    auto.ejecutar("D");
    expect(auto.posicionActual()).toEqual("0,0E");
  });

  it("Gira a la derecha desde el Oeste", () => {
    let auto = new Auto(0, 0, "O");
    auto.ejecutar("D");
    expect(auto.posicionActual()).toEqual("0,0N");
  });

  it("Gira a la derecha desde el Este", () => {
    let auto = new Auto(0, 0, "E");
    auto.ejecutar("D");
    expect(auto.posicionActual()).toEqual("0,0S");
  });

  it("Gira a la derecha desde el Sud", () => {
    let auto = new Auto(0, 0, "S");
    auto.ejecutar("D");
    expect(auto.posicionActual()).toEqual("0,0O");
  });
});
describe("Auto Avanza", () => {
  it("Avanza desde el Norte", () => {
    let auto = new Auto(0, 0, "N");
    auto.ejecutar("A");
    expect(auto.posicionActual()).toEqual("0,1N");
  });
});
