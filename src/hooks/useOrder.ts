import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export function useOrder(){
    const [order, setOrder] = useState<OrderItem[]>([])
        
    const addItem = (item:MenuItem) =>{
        const itemExist = order.find(i => i.id === item.id)

        if(itemExist){
            const updatedOrder = order.map(i=>i.id === item.id ? {...i, quantity : i.quantity + 1} : i)
            setOrder(updatedOrder)
        }else{
            const newItem : OrderItem = {...item, quantity:1} 
            setOrder([...order, newItem])
        }
    }
    
    const removeItem = (id: MenuItem["id"])=>{
        setOrder(order.filter((item)=> item.id !== id))
    }

    return {
        order,
        addItem,
        removeItem
    }
}