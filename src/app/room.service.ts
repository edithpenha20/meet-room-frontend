import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'https://meet-room-api.herokuapp.com/api/v1/room';

  constructor(private http: HttpClient) { }

  getRoom(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/rooms/${id}`);
  }

  createRoom(room: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/rooms`, room);
  }

  updateRoom(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/rooms/${id}`, value);
  }

  deleteRoom(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/rooms/${id}`, { responseType: 'text' });
  }

  getRoomsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/rooms`);
  }

}
