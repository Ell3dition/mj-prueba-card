import React from "react"

import renderer from "react-test-renderer"
import ProductCard, { ProductImage } from "../../src/components"
import { productDos } from "../data/product"

describe('Product Image', () => {



    test('debe mostrar componente renderizado ', () => {

        const wrapper = renderer.create(
            <ProductImage img="./coffe-mug.png" className="custom-class" />
        )
        
        expect(wrapper.toJSON()).toMatchSnapshot()
      
    })
    
    test('debe de mostrar la imagen del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={productDos} >
                {
                    ()=>(
                        <ProductImage />

                    )
                }
            </ProductCard>
        )
        
        expect(wrapper.toJSON()).toMatchSnapshot()
    })
  
})
