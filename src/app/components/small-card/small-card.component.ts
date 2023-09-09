import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover:string = "https://m.media-amazon.com/images/I/51uKR6J3cBL._SX345_BO1,204,203,200_.jpg"

  @Input()
  cardTitle:string = ""

  @Input()
  description:string="À medida que você continua a sua jornada através do livro, verá como cada conceito se encaixa em um contexto mais amplo, e como essas habilidades podem ser aplicadas em projetos reais. Aprenderá a otimizar seus códigos, tornando-os mais eficientes e escaláveis."

  @Input()
  Id:string="0"

  styleClick:string = '250px'
  constructor() { }

  ngOnInit(): void {
  }

  clickContainer(){
    if(this.styleClick == '500px'){
      this.styleClick = '250px'
    } else {
      this.styleClick = '500px'
    }
  }

}
