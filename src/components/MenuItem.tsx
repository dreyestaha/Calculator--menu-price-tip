import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
}

export default function MenuItem({item} : MenuItemProps) {
  return (
    <button className="border-2 rounded-sm border-amber-500 hover:bg-amber-400 flex w-full p-3 my-2 justify-between">
       <p>{item.name}</p>
       <p className="font-bold">${item.price}</p>
    </button>
  )
}
