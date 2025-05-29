// Paul Ramirez

//1) Crear el script .js con la creación de la base de datos y las colecciones.
use libreria;
db.librosEspeciales.drop();
db.librosEspeciales.insertMany([
  {
    titulo: "La isla del tesoro",
    genero: "aventura",
    autores: ["Robert Louis Stevenson"],
    numeroPaginas: 310,
    nivelLectura: "juvenil",
    precios: [
      { tipo: "físico", precio: 3500 },
      { tipo: "digital", precio: 2500 }
    ],
    disponibleEnStock: true,
    editorial: {
      nombre: "Editorial Aventura",
      pais: "Reino Unido",
      anioFundacion: 1890
    }
  },
    {
    titulo: "Odisea del espacio",
    genero: "ciencia ficcion",
    autores: ["Athur C."],
    numeroPaginas: 350,
    nivelLectura: "juvenil",
    precios: [
      { tipo: "físico", precio: 4000 },
      { tipo: "digital", precio: 2800 }
    ],
    disponibleEnStock: true,
    editorial: {
      nombre: "Ciencia y letras",
      pais: "Estados unidos",
      anioFundacion: 1955
    }
  },
    {
    titulo: "Orgullo y perjuicio",
    genero: "romance",
    autores: ["Jane Austen"],
    numeroPaginas: 280,
    nivelLectura: "juvenil",
    precios: [
      { tipo: "físico", precio: 3000 },
      { tipo: "digital", precio: 2500 }
    ],
    disponibleEnStock: false,
    editorial: {
      nombre: "Clasica del Amor",
      pais: "Reino Unido",
      anioFundacion: 1920
    }
  },
    {
    titulo: "It",
    genero: "terror",
    autores: ["Stephen King"],
    numeroPaginas: 1000,
    nivelLectura: "juvenil",
    precios: [
      { tipo: "físico", precio: 5500 },
      { tipo: "digital", precio: 3700 }
    ],
    disponibleEnStock: true,
    editorial: {
      nombre: "Misterio y Horror",
      pais: "Estados Unidos",
      anioFundacion: 1982
    }
  },
    {
    titulo: "El principito",
    genero: "aventura",
    autores: ["Antonie de Saint-Exupery"],
    numeroPaginas: 96,
    nivelLectura: "infantil",
    precios: [
      { tipo: "físico", precio: 2500 },
      { tipo: "digital", precio: 1500 }
    ],
    disponibleEnStock: true,
    editorial: {
      nombre: "Pequeño Lectores",
      pais: "Francia",
      anioFundacion: 1890
    }
  },  {
    titulo: "Monstruos del abismo",
    genero: "terror",
    autores: ["Carlos Gómez"],
    numeroPaginas: 198,
    nivelLectura: "adulto",
    precios: [
      { tipo: "físico", precio: 4000 },
      { tipo: "digital", precio: 2500 }
    ],
    disponibleEnStock: true,
    editorial: {
      nombre: "Horror House",
      pais: "México",
      anioFundacion: 1998
    }
  },
  {
    titulo: "El amor imposible",
    genero: "romance",
    autores: ["Lucía Herrera"],
    numeroPaginas: 270,
    nivelLectura: "adulto",
    precios: [
      { tipo: "físico", precio: 3600 },
      { tipo: "digital", precio: 2500 }
    ],
    disponibleEnStock: false,
    editorial: {
      nombre: "Romance Editorial",
      pais: "Chile",
      anioFundacion: 2001
    }
  },  
  {
    titulo: "Sueños digitales",
    genero: "ciencia ficcion",
    autores: ["Florencia Méndez"],
    numeroPaginas: 230,
    nivelLectura: "juvenil",
    precios: [
      { tipo: "físico", precio: 3400 },
      { tipo: "digital", precio: 2500 }
    ],
    disponibleEnStock: true,
    editorial: {
      nombre: "Futuro Ediciones",
      pais: "Chile",
      anioFundacion: 2020
    }
  },
    {
    titulo: "Pequeñas aventuras",
    genero: "aventura",
    autores: ["Anita López"],
    numeroPaginas: 180,
    nivelLectura: "infantil",
    precios: [
      { tipo: "físico", precio: 2800 },
      { tipo: "digital", precio: 2500 }
    ],
    disponibleEnStock: false,
    editorial: {
      nombre: "Kids World",
      pais: "España",
      anioFundacion: 2005
    }
  }
]);


//2) Buscar cuántos libros tienen a "Carlos Gómez" entre sus autores
 
    db.librosEspeciales.find({autores:"Carlos Gómez"}).count();

//3) Buscar cuántos libros son de género "romance" y tienen "Lucía Herrera" entre los autores.

    db.librosEspeciales.find({genero:"romance",autores:"Lucía Herrera"}).count();

//4) Listar el título y número de páginas de los libros con nivel de lectura "juvenil".

    db.librosEspeciales.find({nivelLectura:"juvenil"},{titulo:1, numeroPaginas:1, _id:0});

//5) Obtener título, número de páginas y nivel de lectura de los libros que tengan entre 200 y 400 páginas (inclusive).

    db.librosEspeciales.find({ numeroPaginas: {$gte: 200, $lte: 400} }, {titulo: 1, numeroPaginas: 1, nivelLectura: 1, _id: 0});

// 6) Mostrar los libros cuya editorial esté en países que contengan "chi" (ej.: "Chile", "Chiapas", etc.), ordenados por número de páginas de manera descendente

    db.librosEspeciales.find({"editorial.pais":{$regex: /chi/i }}).sort({ numeroPaginas: -1});

// 7) Sumarle 20 páginas a todos los libros que están disponibles en stock.
    
    db.librosEspeciales.updateMany({disponibleEnStock:true},{$inc:{numerosPaginas:20}});

// 8) Agregar el autor "Anónimo" a todos los libros con nivel de lectura "infantil"

    db.librosEspeciales.updateMany({nivelLectura: "infantil"}, {$addToSet:{autores: "Anónimo"}});

// 9) Sumarle 10 páginas a los libros cuyo número de páginas esté entre 200 y 260 inclusive
    
    db.librosEspeciales.updateMany({numeroPaginas: {$gte:200,$lte:260}}, {$inc:{numeroPaginas:10}});

// 10) Eliminar los libros cuyo número de páginas sea menor o igual a 210.

    db.librosEspeciales.deleteMany({numerosPaginas:{$lte:210}});