import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem: (item : MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button 
      className="border-2 rounded-sm border-amber-500 hover:bg-amber-400 flex w-full p-3 my-2 justify-between"
      onClick={() => addItem(item)}
      >
       <p>{item.name}</p>
       <p className="font-bold">${item.price}</p>
       
    </button>
  )
}
