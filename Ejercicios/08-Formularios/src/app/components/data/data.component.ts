import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class DataComponent {

  forma: FormGroup;

  usuario: Object = {
    nombreCompleto: {
      nombre: "Matias",
      apellido: "Garcia"
    },
    correo: "matiasagt@gmail.com",
    pasatiempos: [""]
  }

  constructor() {
    //Cuando se validan objetos simples
    // this.forma = new FormGroup({
    //   'nombre': new FormControl('', [
    //                                   Validators.required,
    //                                   Validators.minLength(3)
    //                                 ]),
    //   'apellido': new FormControl('', Validators.required ),
    //   'correo': new FormControl('', [
    //                                   Validators.required,
    //                                   Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
    //                                 ])
    // });

    //Para validar objetos compuestos
    this.forma = new FormGroup({
      'nombreCompleto': new FormGroup({
        'nombre': new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        'apellido': new FormControl('', [
          Validators.required,
          this.noHerrera
        ])
      }),
      'correo': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),
      'pasatiempos': new FormArray([
        new FormControl('', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.existeUsuario ),
      'password1': new FormControl('', Validators.required ),
      'password2': new FormControl('')
    });

    //Para cargar los datos en el formulario
  //  this.forma.setValue(this.usuario);

    this.forma.get('password2').setValidators([
      Validators.required,
      this.noIguales.bind( this.forma )
    ])

    //Para escuchar los cambios de los inputs del formulario
    // this.forma.valueChanges.subscribe( data => {
    //   console.log(data)
    // })

    //Para escuchar los cambios de un input en particular
    this.forma.get('username').valueChanges.subscribe( data => {
      console.log(data)
    })

    //Para escuchar los cambios de estado de un input
    this.forma.get('username').statusChanges.subscribe( data => {
      console.log(data)
    })

  }


  guardarCambios() {
    console.log(this.forma.value);

    //Reiniciar el formulario, inputs, validaciones, etc.
    // this.forma.reset({
    //   nombreCompleto: {
    //     nombre: "",
    //     apellido: ""
    //   },
    //   correo: ""
    // });

    //Reinicia pero deja los campos en null
    //this.forma.reset();
  }

  noHerrera(control: FormControl): { [s: string]: boolean } {
    if( control.value === "herrera"){
      return{
        noherrera: true
      }
    }

    return null;
  }

  noIguales(control: FormControl): { [s: string]: boolean } {
    let forma:any = this;
    if( control.value !== forma.get('password1').value){
      return{
        noiguales: true
      }
    }

    return null;
  }

existeUsuario(control: FormControl): Promise<any> | Observable < any > {
  let promesa = new Promise(
    (resolve, reject) => {

      setTimeout(() => {
        if (control.value == "strider") {
          resolve({ existe: true })
        } else {
          resolve(null)
        }
      }, 3000)
    }
  )

  return promesa;
}


  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }

}
