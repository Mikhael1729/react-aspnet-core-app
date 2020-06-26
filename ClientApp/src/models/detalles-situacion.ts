export class DetalleSituacion {
  pais: string; 
  usuario: string; 
  fecha: Date; 
  nuevosConfirmados: number; 
  nuevosFallecidos: number; 
  nuevosRecuperados: number; 
  nuevosDescartados: number; 

  constructor (detalleSituacion: DetalleSituacion) {
    this.pais = detalleSituacion.pais; 
    this.usuario = detalleSituacion.usuario; 
    this.fecha = detalleSituacion.fecha; 
    this.nuevosConfirmados = detalleSituacion.nuevosConfirmados; 
    this.nuevosFallecidos = detalleSituacion.nuevosFallecidos; 
    this.nuevosRecuperados = detalleSituacion.nuevosRecuperados; 
    this.nuevosDescartados = detalleSituacion.nuevosDescartados; 
  }
}