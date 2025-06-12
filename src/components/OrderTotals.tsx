import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types"
import { useMemo } from "react"

type OrderTotalsProps = {
    order: OrderItem[]
}

export default function OrderTotals({order}: OrderTotalsProps) {
    
    const subtotalAmount = useMemo(() =>order.reduce((total, item) => total + (item.quantity * item.price),0), [order])
  
  return (
    <>
        <section>
            <h2 className="text-3xl my-4 font-black text-center">Totales y propina</h2>
            <div className="mx-5">
                <p className="text-lg">Subtotal: {""}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>
                <p className="text-lg">Propina: {""}
                    <span className="font-bold">$0</span>
                </p>
                <p className="text-lg">Total a pagar: {""}
                    <span className="font-bold">$0</span>
                </p>
            </div>
        </section>
    </>
    )
}
