import { Injectable } from '@angular/core';
import { Caixa } from '../classes/caixa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const url = environment.apiUrl + 'caixas';

@Injectable({
  providedIn: 'root'
})

export class CaixaService {
  constructor(private http: HttpClient) { }

  /**
   * Lista Livro Caixa
   */
  public listarCaixas(): Observable<any> {
    return this.http.get(url);
  }

  /**
   * Post de Livro caixa
   * @param caixa 
   */
  public adicionarCaixa(caixa: Caixa): Observable<Caixa> {
    return this.http.post<Caixa>(url, caixa, httpOptions);
  }

  /**
   * Remove livro caixa
   * @param id 
   */
  public removerCaixa(id): Observable<any> {
    return this.http.delete(url + '/' + id, httpOptions);
  }

  /**
   * Atualizar livro caixa
   * @param id 
   * @param caixa 
   */
  public atualizarCaixa(id, caixa: Caixa): Observable<any> {
    return this.http.put(url + '/' + id, caixa, httpOptions);
  }

  
}
//export class Module {}
//module.exports = CaixaService

 //export class listarCaixas {};
// export class removerCaixa {};
// export class adicionarCaixa {};
// export class atualizarCaixa {};
