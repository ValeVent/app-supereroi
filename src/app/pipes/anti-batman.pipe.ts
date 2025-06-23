import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'antiBatman'
})
export class AntiBatmanPipe implements PipeTransform {

  transform(poder: string, nome: string): string {

    if (nome && typeof nome === 'string' && nome.toLowerCase() === 'batman') {
      return 'Batman non è un supereroe!';  
    }
    return poder; 
  }
}
