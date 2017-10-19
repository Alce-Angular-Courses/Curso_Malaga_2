# Navegación Lazzy #

Ejemplo de **enrutamiento perezoso** de diversos componentes alojados en **módulos independientes**:

- 'inicio', múdulo HomeModule -> component: HomeComponent
- 'catalogo', múdulo CatalogoModule -> component: CatalogoComponent
- 'autores', múdulo AutoresModule -> component: AutoresComponent
- 'enlaces', múdulo EnlacesModule -> component: EnlacesComponent
- 'about', múdulo AboutModule -> component:  AboutComponent

La carga de los módulos no se produce inicialmente, sino cuando son utilizados por primera vez

Existe además un  **modolo para elementos compartidos**, que incluye los componentes **cabecera**, **pie** y **menu**.

Se han añadido estilos css tanto generales, para la aplicación, como a nivel de todos los componentes.

Nota:
Creado como modificación de un proyecto generado inicialmente con [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1, empleando el comando ng new.
