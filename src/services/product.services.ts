import { Injectable } from '@nestjs/common';
import { IProduct } from '../interfaces/IProduct';
import * as db from '../db/mockData.json';
@Injectable()
export class ProductServices {
  private readonly products: IProduct[] = db;

  create(product: IProduct) {
    this.products.push(product);
    return this.products
  }

  findAll(): IProduct[] {
    return this.products;
  }

  findById(id:number){
      
      return this.products.find((product)=>product.id==id);
  }

  findByIdAndUpdate(id:number,data:Partial<IProduct>){
      const idx = this.products.findIndex((product)=>
            product.id == id
      );
      console.log(data,id)
      this.products[idx] = {
          id:data.id,
          product: data.product || this.products[idx].product,
          stock:data.stock || this.products[idx].stock,
          thumbnail: data.thumbnail || this.products[idx].thumbnail
      }
      return this.products[idx];

  }

  findByIdAndDelete(id:number){
    const idx = this.products.findIndex((product)=>
        product.id == id
  );
    this.products.splice(idx,1);
  }
}