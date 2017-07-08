import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, active: boolean = true): string {
      
      // let result:string = "";
      // if(active){
      //   for (let index = 1; index < value.length; index++) {
      //     result += "*";        
      //   }
      // }else{
      //   result = value;
      // }
      if(active) {
        //value = "*".repeat(value.length);
        value = value.replace(/./g, "*");
      }
      return value;

  }

}
