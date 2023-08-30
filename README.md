# Pruebas de despliegue

Este es un paquete de pruebas de despliegue


### Marcos Jara Herrera

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'mj-pruebas-card'
```

```
      <ProductCard
            product={product}
            initialValues={{
              count:4,
              maxCount:10
            }}
          >
            {
              ({reset, increaseBy, count, isMaxCountReached})=>(
                <>
                  <ProductImage />
                  <ProductTitle />
                  <ProductButtons/>
                </>
              )
            }

          
      </ProductCard>

```