import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class BatmanInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          const body = event.body;

          // Controllo che la risposta sia un oggetto e contenga la proprietà 'batman'
          if (body?.nome?.toLowerCase() === 'batman') {
            alert('Batman non è un supereroe');
          }
        }
      })
    );
  }
}
