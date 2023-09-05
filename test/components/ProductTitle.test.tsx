import React from "react"
import renderer from "react-test-renderer"
import  {ProductTitle, ProductCard} from '../../src/components'
import { productUno } from "../data/product"


describe('ProductTitle', ()=>{

    test('Debe de mostrar el componente con el titulo personalizado', ()=>{

        const wrapper = renderer.create(
            <ProductTitle title="custom"  className="custom-class" />
        )
        
        expect(wrapper.toJSON()).toMatchSnapshot()
    })


    test('debe de mostrar el nombre del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={productUno} >
                {
                    ()=>(
                        <ProductTitle  />

                    )
                }
            </ProductCard>
        )
        
        expect(wrapper.toJSON()).toMatchSnapshot()
    })
    
})