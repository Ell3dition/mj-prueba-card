import { useEffect, useRef, useState } from "react";
import { Product, OnChangeArg, InitialValues } from "../interfaces/interfaces";

interface UseProductArgs{
  product: Product
  onChange?: (args:OnChangeArg)=>void
  value?:number
  initialValues?: InitialValues
}

export const useProduct = ({onChange, product, value = 0, initialValues}: UseProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);


  const isMounted = useRef(false)

  
  const increaseBy = (value: number) => {

    const newValue =  Math.max(counter + value, 0)
    if (initialValues?.maxCount && initialValues?.maxCount < newValue)  return
    setCounter(newValue);
    onChange && onChange({count: newValue, product})
  };

  const reset = ()=>{
    setCounter(initialValues?.count || value)
  }

  useEffect(()=>{
    if(!isMounted.current) return 
    setCounter(value)
  },[value])

  useEffect(()=>{
    isMounted.current = true
  },[])

  return { 
      counter, 
      increaseBy, 
      reset,
      isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter, 
      maxCount: initialValues?.maxCount 
  };
};
