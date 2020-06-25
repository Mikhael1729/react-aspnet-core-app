export class SituacionActual {
  pais?: string;
  confirmados?: number;
  fallecidos?: number;
  recuperados?: number;
  descartados?: number;

  constructor(situacionActual: SituacionActual) {
    this.pais = situacionActual.pais;
    this.confirmados = situacionActual.confirmados;
    this.fallecidos = situacionActual.fallecidos;
    this.recuperados = situacionActual.recuperados;
    this.descartados = situacionActual.descartados;
  }
}