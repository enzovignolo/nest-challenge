import { Controller,Delete,Get, Param, Put, Post, Body } from "@nestjs/common";
import { IProduct } from "src/interfaces/IProduct";
import { ProductServices } from "src/services/product.services";

@Controller('products')
export class ProductController{
    constructor(private productServices : ProductServices){}
    @Get()
    findAll():IProduct[] {
        const all = this.productServices.findAll();
        return all;
    }   
    @Get(':id')
    findOne(@Param() params):IProduct {
        const product = this.productServices.findById(params.id)
        console.log('producto',product)
        return product;
    }
    @Post()
    create(@Body() body) : IProduct[]{
        const newProduct = this.productServices.create(body)
        return newProduct
    }
    @Put(':id')
    updateOne(@Param() params, @Body() data) : IProduct{
        return this.productServices.findByIdAndUpdate(params.id,data)
    }
    @Delete(':id')
    deleteOne(@Param() params) : Object{
        this.productServices.findByIdAndDelete(params.id)
        return {status:'deleted'}
    }


}