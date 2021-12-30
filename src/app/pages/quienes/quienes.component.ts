import { Component } from '@angular/core';

@Component({
  selector: 'ar-quienes',
  templateUrl: './quienes.component.html',
  styleUrls: ['./quienes.component.css']
})
export class QuienesComponent {

  miembrosStaff = [

    {
      src: "assets/img/staff/roffe.jpg",
      nombre: "Lic. Marcelo Roffé",
      descripcion: "Licenciado en Psicología (1990, UBA), Master en Psicología del deporte y de la Act. Física (UNED-Universidad Complutense de Madrid), especializado en clínica en el Htal. Cosme Argerich, ex-Responsable desde el año 1995 al 2000 del área en las divisiones juveniles del Club Ferro Carril Oeste y desde el año 2000 hasta el 2006 del Área de Psicología del Deporte de las Selecciones Juveniles Argentinas de Fútbol, AFA (sub 15, sub 17 y sub 20), Asesor externo del Cuerpo Técnico de la Selección Mayor de Fútbol Alemania 2006. Fue el Responsable del área mental de la Selección Colombiana de Futbol entre 2012 y 2015, siendo el primer psicólogo deportivo argentino que fue parte de un cuerpo técnico en un Mundial de mayores. Profesor en las Universidades de Buenos Aires (UBA), Palermo y Tres de Febrero. Trabajó en clubes de Argentina, México y Colombia. Conferencista Nacional e Internacional (España, México, Brasil, Venezuela, Ecuador, Perú, Chile, Uruguay, Paraguay, Colombia, Costa Rica). Presidente de la Asociación de Psicología del Deporte Argentina desde el año 2003 hasta el 2013 (APDA). Actual Presidente de SOLCPAD (Sociedad Latinoamericana y del Caribe de Psicologia del deporte y la actividad física). Autor de 11 libros de la especialidad. Trabaja y asesora a deportistas y entrenadores de tiro, automovilismo, motocross, vóley, futbol playa, rugby, básquet, tenis, hockey, entre otros, a nivel individual y de equipo, a nivel clubes y de selección, a nivel nacional e internacional. Trabajó 15 años junto a Jose Pekerman y con jugadores como Messi, Tevez, Mascherano, Aguero,James Rodriguez, Falcao y Cuadrado entre otros."
    },

    {
      src: "assets/img/staff/fernandez.jpg",
      nombre: "Lic. Alberto C. Fernandez",
      descripcion: "Licenciado en Educación Física, orientación al Marketing y Administración deportiva | Universidad Abierta Interamericana. Profesor Nacional de Educación Física | Instituto Federico W. Dickens. Entrenador Internacional de Voleibol | Federación Internacional de Voleibol. Secretaría de Deportes de la Nación, Juegos Sudamericanos Interescolares, Coordinador General del Voleibol, Juegos Nacionales Evita. Coordinador de Voleibol Club Centro Galicia de Buenos Aires, Coordinador general del Voleibol Masculino, director técnico del equipo de primera división. Club Atletico Boca Juniors, entrenador asistente del equipo de Liga Nacional Masculina, responsable de estadísticas y control de rendimiento deportivo. Colegio Bertrand Russel, profesor de Educación Física nivel secundario 1ro a 5to año. Colegio para el Hombre Nuevo, profesor de Educación Física nivel primario 6to y 7mo grado. Colegio Aequalis, profesor de Educación Física nivel primario 1ro a 7mo grado, Club Ferrocarril Oeste, entrenador divisiones inferiores masculinas, coordinador de las escuelas deportivas, etrenador Asistente Equipo de Liga Nacional Masculina."
    },

    {
      src: "assets/img/staff/esteban.jpg",
      nombre: "Fabián Esteban",
      descripcion: "Lic. En Psicología, especializado en Psicología del deporte (APDA – UBA). Ayudante en la matería “Psicología del deporte” en Universidad 3 de Febrero y Universidad de Palermo. Trabaja en el Departamento de Psicología deportiva y trabajo social del futbol juvenil del club Lanús y con el fútbol profesional en el club Excursionistas."
    },

    {
      src: "assets/img/staff/riccardi.jpg",
      nombre: "Sebastián Riccardi",
      descripcion: "Periodista deportivo (2005, Deportea). Estudiante para Licenciado en Gestión del Deporte (Universidad Nacional de Tres de Febrero). Título en First Certificate in English (Cambridge ESOL, 2009). Trabajó en el Diario Deportivo Olé entre 2004 y 2006. Editor de videos del Club Deportivo Morón (2006). Asistió al Seminario Internacional de Psicología del Deporte 2012 sobre Desarrollo de Talento Deportivo, organizado por APDA, dictado por el Dr. Dan Gould. Encargado de prensa del libro “Test Gráfico de Situaciones Deportivas (TGSD), de Marcelo Roffé (2012). Editor del libro “El Partido< Mental”, de Marcelo Roffé y Claudia Rivas (2013). Co-autor del ultimo libro del Lic. Roffe “FORMANDO AL LIDER DE UN EQUIPO” (2016) CON PROLOGO DE MASCHERANO Y YEPES."
    }

  ];

}
