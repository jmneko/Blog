import { Component } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  arrNoticias: Noticia[] = [];
  nuevaNoticia: Noticia = {titulo: "", imagen: "", noticia: "", fecha: ""}



  constructor() {
    this.arrNoticias = [
      { titulo: 'Super Mario Bros. Wonder', 
        imagen: 'https://media.vandal.net/i/1200x630/6-2023/202362212183647_1.jpg', 
        noticia: "Como adelantaron los rumores, Nintendo ha anunciado un nuevo juego de Mario en perspectiva lateral. La saga vuelve a su formato clásico, pero con un giro estético y muchas novedades jugables. Esta nueva entrega se llamará 'Super Mario Bros. Wonder' y se pondrá a la venta el 20 de octubre en Switch a un precio de 59,99 €", 
        fecha: "12/03/2022" },

      { titulo: 'METAL GEAR SOLID: MASTER COLLECTION Vol.1', 
        imagen: 'https://i.blogs.es/8e9607/metal-gear-solid-delta/1366_521.jpeg', 
        noticia: 'Vuelve el clásico juego de acción sigilosa. METAL GEAR SOLID: MASTER COLLECTION Vol. 1 aúna el comienzo de la experiencia de juego de METAL GEAR en un solo paquete. Infíltrate en fortalezas enemigas de todo el mundo, completa misiones con tus capacidades de sigilo y disfruta de la apasionante trama cinematográfica de la saga METAL GEAR.', 
        fecha: "14/07/2023" }

    ]
  }


  cargarDatos() : string {
    let lista = "";
    this.arrNoticias.forEach(noticia => {
      lista += `<li class="lista">
        <h2 class="noticia_titulo">${noticia.titulo}</h2>

        <div class="noticia_imagen_texto">
          <p class="noticia_texto"> ${noticia.noticia}</p>
          <img src= ${noticia.imagen} class="noticia_imagen">
        </div>

        <p class="noticia_fecha"> ${noticia.fecha}</p>

      </li>`
    })
    return lista;
  }


  publicar(): void {
    console.log(this.nuevaNoticia);
    if (this.nuevaNoticia.titulo === "" || this.nuevaNoticia.imagen === "" || this.nuevaNoticia.noticia === "" || this.nuevaNoticia.fecha === "" ) {
      alert('Todos los campos deben ser rellenados.')
    } else {
      this.arrNoticias.push(this.nuevaNoticia);
    this.nuevaNoticia = {titulo: "", imagen: "", noticia: "", fecha: "" };
    }
  }
}

