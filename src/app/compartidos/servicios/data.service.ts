import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export namespace Modulo {
  export type Ruta = 'interferencia' | 'desafio';
  export type Accion = 'nuevo' | 'editar';
  export interface Boton {
    titulo: string;
    icono: 'pi pi-plus' | 'pi pi-pencil'
    accion: Accion;
  };
  export interface Core {
    titulo: string;
    ruta: Ruta;
    botones: Boton[];
  }
}
export interface Recurso {
  titulo: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  private servidor: string = 'http://localhost/aulaplaneta/editor-recursos/api/api.php';
  apiGet(accion: string, tipoRecurso: Modulo.Ruta): Observable<Recurso[]> {
    const params: any = {
      tipoRecurso: tipoRecurso,
      accion: accion,
    };
    return this.http.get<Recurso[]>(this.servidor, { params: params });
  }
}
