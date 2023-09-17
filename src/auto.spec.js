import Auto from "./auto";
import {
  COMANDO_IZQUIERDA,
  COMANDO_DERECHA,
  COMANDO_AVANZAR,
  NORTE,
  ESTE,
  OESTE,
  SUR,
} from "./constantes.js";

describe("Auto gira a la Izquierda", () => {
  it("cambia ubicacion desde el Norte", () => {
    let auto = new Auto(0, 0, NORTE);
    auto.ejecutar(COMANDO_IZQUIERDA);
    expect(auto.posicionActual()).toEqual("0,0O");
  });
  it("cambia ubicacion desde el Oeste", () => {
    let auto = new Auto(0, 0, OESTE);
    auto.ejecutar(COMANDO_IZQUIERDA);
    expect(auto.posicionActual()).toEqual("0,0S");
  });
  it("cambia ubicacion desde el Sud", () => {
    let auto = new Auto(0, 0, SUR);
    auto.ejecutar(COMANDO_IZQUIERDA);
    expect(auto.posicionActual()).toEqual("0,0E");
  });
  it("cambia ubicacion desde el Este", () => {
    let auto = new Auto(0, 0, ESTE);
    auto.ejecutar(COMANDO_IZQUIERDA);
    expect(auto.posicionActual()).toEqual("0,0N");
  });
});

describe("Auto gira a la derecha", () => {
  it("cambia ubicacion desde el Norte", () => {
    let auto = new Auto(0, 0, NORTE);
    auto.ejecutar(COMANDO_DERECHA);
    expect(auto.posicionActual()).toEqual("0,0E");
  });

  it("cambia ubicacion desde el Oeste", () => {
    let auto = new Auto(0, 0, OESTE);
    auto.ejecutar(COMANDO_DERECHA);
    expect(auto.posicionActual()).toEqual("0,0N");
  });

  it("cambia ubicacion desde el Este", () => {
    let auto = new Auto(0, 0, ESTE);
    auto.ejecutar(COMANDO_DERECHA);
    expect(auto.posicionActual()).toEqual("0,0S");
  });

  it("cambia ubicacion desde el Sud", () => {
    let auto = new Auto(0, 0, SUR);
    auto.ejecutar(COMANDO_DERECHA);
    expect(auto.posicionActual()).toEqual("0,0O");
  });
});

describe("Auto Avanza", () => {
  it("cambia posicion desde el  Norte", () => {
    let auto = new Auto(0, 0, NORTE);
    auto.ejecutar(COMANDO_AVANZAR);
    expect(auto.posicionActual()).toEqual("0,1N");
  });
  it("cambia posicion desde el Oeste", () => {
    let auto = new Auto(1, 1, OESTE);
    auto.ejecutar(COMANDO_AVANZAR);
    expect(auto.posicionActual()).toEqual("0,1O");
  });
});
