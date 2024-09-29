// script.js

// Clase Animal, que será la clase padre
class Animal {
    constructor(nombre, peso, edad) {
      this.nombre = nombre;
      this.peso = peso;
      this.edad = edad;
    }
  
    // Método información que devuelve los atributos básicos de Animal
    informacion() {
      return `Nombre: ${this.nombre}, Peso: ${this.peso} kg, Edad: ${this.edad} años`;
    }
  }
  
  // Subclase Perro que hereda de Animal y agrega la propiedad raza
  class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
      super(nombre, peso, edad); // Llamada al constructor de la clase padre
      this.raza = raza;
    }
  
    // Sobrescribir el método información para incluir la raza
    informacion() {
      return `${super.informacion()}, Raza: ${this.raza}`;
    }
  }
  
  // Subclase Gato que hereda de Animal y agrega la propiedad sexo
  class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
      super(nombre, peso, edad); // Llamada al constructor de la clase padre
      this.sexo = sexo;
    }
  
    // Sobrescribir el método información para incluir el sexo
    informacion() {
      return `${super.informacion()}, Sexo: ${this.sexo}`;
    }
  }
  
  // Subclase Conejo que hereda de Animal y agrega la propiedad color
  class Conejo extends Animal {
    constructor(nombre, peso, edad, color) {
      super(nombre, peso, edad); // Llamada al constructor de la clase padre
      this.color = color;
    }
  
    // Sobrescribir el método información para incluir el color
    informacion() {
      return `${super.informacion()}, Color: ${this.color}`;
    }
  }
  
  // Creación de instancias de Perro, Gato y Conejo
  const perro = new Perro('Rex', 30, 5, 'Pastor Alemán');
  const gato = new Gato('Luna', 4, 2, 'Hembra');
  const conejo = new Conejo('Nieve', 1.5, 1, 'Blanco');
  
  // Función para mostrar la información de las mascotas en pantalla
  function mostrarInformacionMascotas() {
    const infoMascotasDiv = document.getElementById('infoMascotas');
    
    // Mostrar la información utilizando el método información de cada instancia
    infoMascotasDiv.innerHTML = `
      <p>${perro.informacion()}</p>
      <p>${gato.informacion()}</p>
      <p>${conejo.informacion()}</p>
    `;
  }
  
  // Agregar un evento al botón para que al hacer clic, se muestre la información de las mascotas
  document.getElementById('mostrarMascotas').addEventListener('click', mostrarInformacionMascotas);
  