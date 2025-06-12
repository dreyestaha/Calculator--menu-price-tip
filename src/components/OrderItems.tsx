import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types"

type OrderItemProps = {
    order:OrderItem[]
    removeItem: (id: OrderItem["id"]) => void
}

export default function OrderItems( {order, removeItem}:OrderItemProps) {
  return (
    <>
        <h2 className="text-3xl mb-4 font-black text-center">Consumo</h2>
        <div className=" text-center border-2 border-amber-600 border-dashed ml-5 min-h-64 rounded-lg">
            { order.length === 0 ? 
                <p>Orden Vacía...</p>
            :
                ( order.map((item)=>                     
                <div
                    key={item.id} 
                    className="m-4 pb-1 flex justify-between border-b border-gray-400 items-center "
                >
                    <div className="">
                        <p className="text-md">Producto: {item.name} - {formatCurrency(item.price)}</p>    
                        <p className="font-bold text-left">Cantidad: {item.quantity} - {formatCurrency(item.quantity * item.price)}</p>    
                    </div>
                    <button
                        className="bg-red-600 rounded-full text-white w-8 h-8 hover:bg-red-800 cursor-pointer"
                        onClick={()=>removeItem(item.id)}
                        >X
                    </button>
                    
                </div>
                ))
            }
        
        </div>
    </>
  )
}
