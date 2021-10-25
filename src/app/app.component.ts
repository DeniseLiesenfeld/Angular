import { Component } from '@angular/core';
import { dados } from 'src/aluno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aluno';
  aluno = dados ;
}
