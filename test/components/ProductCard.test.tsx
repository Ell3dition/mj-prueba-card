import React from "react"
import renderer from "react-test-renderer"
import { ProductCard } from '../../src/components'
import { productUno } from "../data/product"


describe('ProductCard', ()=>{

    test('Debe de mostrar el componente correctamente', ()=>{

        const wrapper = renderer.create(
            <ProductCard product={productUno}  className="custom-class" >
        {        ()=>(
            <h1>Hello</h1>
        )
                }

            </ProductCard>
        )
        
        expect(wrapper.toJSON()).toMatchSnapshot()
    })


    test('debe de incrementar el contador ', () => {
        const wrapper = renderer.create(
            <ProductCard product={productUno}  className="custom-class" >
        {        ({count, increaseBy})=>(

                    <>
                        <h1>ProductCard</h1>
                        <span>{count}</span>
                        <button onClick={()=>increaseBy(1)}></button>
                    </>
        )
                }

            </ProductCard>
        )
        
       let tree = wrapper.toJSON()
       expect(tree).toMatchSnapshot();
    })
    

 
})