// Las clases son plantillas para crear objetos.
// Se definen usando la palabra Class.
//  Contienen un constructor que se ejecuta cuando se crea una nueva instancia de la clase.
// Los métodos se definen dentro de la clase.

class Car {
  model: string;
  year: number;

  constructor(model: string, year: number) {
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log(`The car ${this.model} is starting.`);
  }

  stop(): void {
    console.log(`The car ${this.model} is stopping.`);
  }

  accelerate(speed: number): void {
    console.log(`The car ${this.model} is accelerating to ${speed} km/h.`);
  }
}

// El objeto es la instancia de dicha clase. Una vez instanciada podemos usar la clase a trvés del objeto.

const fiatCronos = new Car("Fiat Cronos", 2022);
fiatCronos.start();
fiatCronos.accelerate(100);
fiatCronos.stop();

// Herencia
// Las clases pueden heredar de otras clases usando la palabra extends.
// De la escencia del padre el hijo se viste, hereado sus dondes de forma persiste.

class HybridCar extends Car {
  batteryCapacity: number;

  constructor(model: string, year: number, batteryCapacity: number) {
    super(model, year);
    this.batteryCapacity = batteryCapacity;
  }

  chargeBattery(): void {
    console.log(`Charging the battery of ${this.model}.`);
  }
}

const prius = new HybridCar("Toyota Prius", 2020, 8.8);
prius.start();
prius.chargeBattery();

const nowCronosIsHybrid = new HybridCar(fiatCronos.model, fiatCronos.year, 9.9);
nowCronosIsHybrid.start();
nowCronosIsHybrid.chargeBattery();

// Encapsulamiento
// Nos permite encapsular ciertos métodos y propiedades para uso interno de la clase y evitar que sean accedidas desde fuera de esta.

class CuentaDeBanco {
  private _saldo: number;
  //   El guion bajo es una convención para indicar que la propiedad es privada.
  constructor(saldoInicial: number) {
    this._saldo = saldoInicial;
  }

  depositar(cantidad: number): void {
    this._saldo += cantidad;
    console.log(`Depósito de ${cantidad}. Nuevo saldo: ${this._saldo}`);
  }

  // Getters y Setters
  // Las propiedades de acceso se construyen con metodos get y set. Solo podemos acceder desde el objeto a propiedades privadas utilizando un getter o setter.

  get saldo(): number {
    return this._saldo;
  }

  set saldo(cantidad: number) {
    if (cantidad < 0) {
      console.log("No se puede establecer un saldo negativo.");
      return;
    }
    this._saldo = cantidad;
  }
}

const miCuenta = new CuentaDeBanco(1000);
miCuenta.depositar(500);
console.log(`Saldo actual: ${miCuenta.saldo}`);

miCuenta.saldo = 2000;
console.log(`Saldo actualizado: ${miCuenta.saldo}`);

// POLIMORFISMO
// Permite que objetos de diferentes clases respondan al mismo mensaje de distintas maneras. Basado en la sobreescritura de métodos.
// La clase hija puede definri un método con el mismo nombre que uno heredaro de la clase padre, pero con un comportamiento diferente.

class PersonaQueSaluda {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(): void {
    console.log(`¡Hola! Soy ${this.nombre} y tengo ${this.edad} años.`);
  }

  decirChau(): void {
    console.log(`¡Chau!`);
  }
}

class PersonaGrande extends PersonaQueSaluda {
  saludar(): void {
    console.log(
      `¡Hola! Soy ${this.nombre}, tengo ${this.edad} años y soy una persona grande.`
    );
  }
}

const nino = new PersonaQueSaluda("Juanito", 10);
nino.saludar();

const adulto = new PersonaGrande("Carlos", 45);
adulto.saludar();

// En el polimorfismo no solo podemos odificar los métodos, sino también extender su funcionalidad a partir del método del padre

class Empleado extends PersonaQueSaluda {
  puesto: string;

  constructor(nombre: string, edad: number, puesto: string) {
    super(nombre, edad);
    this.puesto = puesto;
  }

  saludar(): void {
    super.saludar();
    console.log(`Soy un empleado y mi puesto es ${this.puesto}.`);
  }
}

const juanCruz = new Empleado("Juan Cruz", 30, "Desarrollador");

juanCruz.saludar();
juanCruz.decirChau();

// Clase Abstracta
// No se pueden instanciar directamente. Sirven como base para otras clases que deben implementar los métodos y propiedades definidos en la clase abstracta.

abstract class Animal {
  nombre: string;
  muerde: boolean;
  velocidad: number;

  constructor(nombre: string, muerde: boolean, velocidad: number) {
    this.nombre = nombre;
    this.muerde = muerde;
    this.velocidad = velocidad;
  }

  hacerSonido(): void {
    console.log("El animal hace un sonido.");
  }
}

class Perro extends Animal {
  hacerSonido(): void {
    console.log("El perro ladra.");
  }
}
