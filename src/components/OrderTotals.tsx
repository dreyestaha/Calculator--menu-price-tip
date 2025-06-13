import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types"
import { useMemo } from "react"

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
    saveOrder: ()=>void
}

export default function OrderTotals({order, tip, saveOrder}: OrderTotalsProps) {
    
    const subtotalAmount = useMemo(() =>order.reduce((total, item) => total + (item.quantity * item.price),0), [order])
    const tipAmount = useMemo(()=>subtotalAmount * tip,[tip,order])
    const totalAmount = useMemo(()=> subtotalAmount + tipAmount,[order, tip])

  return (
    <>
        <section>
            <h2 className="text-3xl my-4 font-black text-center">Totales y propina</h2>
            <div className="mx-5">
                <p className="text-lg">Subtotal: {""}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>
                <p className="text-lg">Propina: {""}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>
                <p className="text-lg">Total a pagar: {""}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>
            <button 
                className="bg-amber-600 text-white uppercase font-bold w-full rounded-sm p-3 mx-5 mt-5      cursor-pointer disabled:opacity-10 disabled:cursor-default"
                disabled={totalAmount===0}
                onClick={saveOrder}
                >Guardar orden
            </button>
        </section>
    </>
    )
}
