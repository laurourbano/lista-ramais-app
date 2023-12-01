import { Component } from '@angular/core';
import { RamaisService } from '../ramais.service';

@Component({
  selector: 'app-lista-ramais',
  templateUrl: './lista-ramais.component.html',
  styleUrls: ['./lista-ramais.component.scss'],
})
export class ListaRamaisComponent {
  ramais: any[] = [];

  constructor(private ramaisService: RamaisService) {}

  ngOnInit(): void {
    this.ramaisService.getRamais().subscribe((data) => {
      this.ramais = data;
    });
  }
}
