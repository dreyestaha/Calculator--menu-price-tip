import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import {useOrder} from "./hooks/useOrder"
import OrderItems from "./components/OrderItems"

function App() {
 
  const {order, addItem, removeItem} = useOrder()

  return (
    <>
      <header className=" bg-amber-100 py-7">
        <h1 className="text-center text-4xl font-bold">Calculadora de Propinas y Consumo</h1>        
      </header> 

      <main className=" max-w-5xl mx-auto py-20 grid sm:grid-cols-2">
        {/* Menú lateral */}
        <section>
          <h2 className="text-3xl mb-4 font-black text-center">Menú</h2>
          {menuItems.map(item =>{

            return (
              <MenuItem 
                key={item.id}
                item={item}
                addItem={addItem}
              />
            )
          })}
        </section>

        {/* Consumo, propina y portal del pago */}
        <section>
          <OrderItems
            order={order}
            removeItem={removeItem}
          />
          
        </section>
      </main>
    
    </>
  )
}

export default App
