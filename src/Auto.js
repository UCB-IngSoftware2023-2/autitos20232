import {
  COMANDO_IZQUIERDA,
  COMANDO_DERECHA,
  COMANDO_AVANZAR,
  NORTE,
  ESTE,
  OESTE,
  SUR,
} from "./constantes.js";

class Auto {
  constructor(posicionX, posicionY, ubicacion) {
    this.posicionX = posicionX;
    this.posicionY = posicionY;
    this.ubicacion = ubicacion;
    this.girosIzquierda = this.inicializarGirosIzquierda();
    this.girosDerecha = this.inicializarGirosDerecha();
  }
  ejecutar(comando) {
    if (comando === COMANDO_IZQUIERDA) {
      this.ejecutarComandoIzquierda();
    }
    if (comando === COMANDO_DERECHA) {
      this.ejecutarComandoDerecha();
    }
    if (comando === COMANDO_AVANZAR) {
      this.ejecutarComandoAvanzar();
    }
  }
  posicionActual() {
    return this.posicionX + "," + this.posicionY + this.ubicacion;
  }

  ejecutarComandoDerecha() {
    this.ubicacion = this.ubicacionGirandoADerechaDesde(this.ubicacion);
  }

  ejecutarComandoIzquierda() {
    this.ubicacion = this.ubicacionGirandoAIzquierdaDesde(this.ubicacion);
  }

  ejecutarComandoAvanzar() {
    if (this.ubicacion === OESTE) {
      this.posicionX--;
    } else {
      this.posicionY++;
    }
  }

  ubicacionGirandoAIzquierdaDesde(ubicacion) {
    return this.girosIzquierda.get(ubicacion);
  }

  ubicacionGirandoADerechaDesde(ubicacion) {
    return this.girosDerecha.get(ubicacion);
  }

  inicializarGirosIzquierda() {
    const ubicacionesIzquierda = new Map();
    ubicacionesIzquierda.set(OESTE, SUR);
    ubicacionesIzquierda.set(NORTE, OESTE);
    ubicacionesIzquierda.set(SUR, ESTE);
    ubicacionesIzquierda.set(ESTE, NORTE);
    return ubicacionesIzquierda;
  }

  inicializarGirosDerecha() {
    const ubicacionesDerecha = new Map();
    ubicacionesDerecha.set(NORTE, ESTE);
    ubicacionesDerecha.set(OESTE, NORTE);
    ubicacionesDerecha.set(ESTE, SUR);
    ubicacionesDerecha.set(SUR, OESTE);
    return ubicacionesDerecha;
  }
}
export default Auto;
