import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"


function App() {
 
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
              />
            )
          })}
        </section>

        {/* Consumo, propina y portal del pago */}
        <section>
          <h2 className="text-3xl mb-4 font-black text-center">Consumo</h2>
        </section>
      </main>
    
    </>
  )
}

export default App
