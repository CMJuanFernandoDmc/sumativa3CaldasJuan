import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  noticias=[
    {
      titulo:"Delincuentes desmantelan el mismo automóvil por segunda vez en Cuenca",
      descripcion:"Delincuentes desmantelaron un vehículo que estaba estacionado entre las calles Borrero y Rafael María Arízaga, en la ciudad de Cuenca.",
      imagen:"../../assets/img/noticia1.jpeg"
    },
    {
      titulo:"Dos guías penitenciarios son liberados de la cárcel de Turi",
      descripcion:"Con ellos suman cuatro las personas que han salido, luego que reclusos tomaran el control de este centro carcelario",
      imagen:"../../assets/img/noticia2.jpeg"
    },
    {
      titulo:"Familias de Baños, en Cuenca, preparan alimentos para regalar a policías y militares",
      descripcion:"Cuando los policías y militares empezaron a salir a las calles tras los hechos de violencia ocurridos en Ecuador, la familia Durán se preguntó cómo podían colaborar.",
      imagen:"../../assets/img/noticia3.jpg"
    },
    {
      titulo:"Municipio y Prefectura entregan equipos de seguridad a la Policía de Azuay",
      descripcion:"El Municipio de Cuenca y la Prefectura del Azuay entregaron 30 motocicletas, cascos, guantes, balizas y sirenas a la Policía Nacional y la Guardia Ciudadana a través de un comodato cuya duración será de dos años",
      imagen:"../../assets/img/noticia4.jpeg"
    }
  ]
  

  constructor() {}

}
