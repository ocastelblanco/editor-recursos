import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '@modulos/pipes/pipes.module';
import { PrimengModule } from '@modulos/primeng/primeng.module';
import { DataService, Modulo, Recurso } from '@servicios/data.service';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';

interface DialogoEditar {
  abre: boolean;
  titulo: string;
  recurso: Recurso;
}

@Component({
  selector: 'erap-inicio',
  standalone: true,
  imports: [
    PrimengModule,
    FormsModule,
    PipesModule,
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  modulos: Modulo.Core[] = [
    {
      titulo: 'Interferencia',
      ruta: 'interferencia',
      botones: [
        { titulo: 'Editar existente', accion: 'editar', icono: 'pi pi-pencil' },
      ]
    },
    {
      titulo: 'Desafío',
      ruta: 'desafio',
      botones: [
        { titulo: 'Editar existente', accion: 'editar', icono: 'pi pi-pencil' },
      ]
    },
  ];
  dialogoEditar: DialogoEditar = {
    abre: false,
    titulo: '',
    recurso: { titulo: '', id: '' },
  };
  listaRecursos: Recurso[] = [];
  sugerencias: Recurso[] = [];
  constructor(private dataServicio: DataService) { }
  abre(modulo: Modulo.Core, boton: Modulo.Boton): void {
    if (boton.accion == 'editar') {
      this.dialogoEditar.titulo = modulo.titulo + ' - ' + boton.titulo;
      this.dialogoEditar.abre = true;
      this.dataServicio.apiGet('listado', modulo.ruta).subscribe((recursos: Recurso[]) => {
        this.listaRecursos = recursos;
        this.sugerencias = this.listaRecursos;
      });
    }
  }
  filtraSugerencias(event: AutoCompleteCompleteEvent) {
    const filtered: Recurso[] = [];
    const query: string = event.query;
    for (let i: number = 0; i < this.listaRecursos.length; i++) {
      const recurso: Recurso = this.listaRecursos[i];
      if (recurso.titulo.toLowerCase().indexOf(query.toLowerCase()) == 0) filtered.push(recurso);
    }
    this.sugerencias = filtered;
  }
  editar(): void {
    this.dialogoEditar.abre = false;
  }
}
