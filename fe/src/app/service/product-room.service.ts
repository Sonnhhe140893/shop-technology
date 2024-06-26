import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HelperSeriveService } from './common/helper-serive.service';

@Injectable({
  providedIn: 'root',
})
export class ProductRoomService {
    // headers: any;
  constructor(private http: HttpClient, private helperService: HelperSeriveService) {
    // this.headers = {
    //     x_authorization: helperService.getItems('accessToken')
    // }
  }

  apiRoom     = 'http://localhost:3053/api/v1/room';
  apiCategory = 'http://localhost:3053/api/v1/category';

  getAll( filters: any ) {
    let params = new HttpParams()
    if(filters?.category_id) params = params.append('category_id', filters.category_id);
    if(filters?.page) params = params.append('page', filters.page);
    if(filters?.page_size) params = params.append('page_size', filters.page_size);
    if(filters?.name) params = params.append('name', filters.name);
    return this.http.get(this.apiRoom , { params: params} );
    // return this.http.get(this.apiRoom , {headers: this.headers, params: params} );
  }


  getProductDetail(id: any) {
    return this.http.get(this.apiRoom + '/' + id);
    // return this.http.get(this.apiRoom + '/' + id, {headers: this.headers});
  }

  getCategories(params: any){
//api getlist nên truyền parmas
    return this.http.get(this.apiCategory, {params: params});
  }



}
// nếu getlist dùng filters cho 1 cái thôi
// getdetail , post, put thì riêng 1 phương thức api
