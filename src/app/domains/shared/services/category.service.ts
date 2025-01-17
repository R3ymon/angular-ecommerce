import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '@shared/models/category.model';
import { Product } from '@shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);
  constructor() {}
  getAll() {
    /// metodo para obtener los datos de la api
    return this.http.get<Category[]>(
      `https://api.escuelajs.co/api/v1/categories`
    );
  }
}
