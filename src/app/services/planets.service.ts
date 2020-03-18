import { Planet } from 'src/app/class/planets';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  planets: Planet[];
  apiURL = 'http://localhost:3000/planets';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.apiURL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getPlanetById(id: number): Observable<Planet> {
    return this.http.get<Planet>(this.apiURL + '/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  addPlanet(planet: Planet): Observable<Planet> {
    return this.http.post<Planet>(this.apiURL, planet, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  deletePlanet(planet: Planet): Observable<Planet> {
    return this.http.delete<Planet>(this.apiURL + '/' + planet.id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  editPlanet(planet: Planet): Observable<Planet> {
    return this.http.put<Planet>(this.apiURL + '/' + planet.id, planet, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
