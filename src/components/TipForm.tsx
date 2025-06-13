
type TipFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>
    tip: number
}

export default function TipForm({setTip, tip}: TipFormProps) {

    const tipOptions = [
        {
            id: 'tip-5',
            value: .05,
            label: '5%'
        },
        {
            id: 'tip-10',
            value: .10,
            label: '10%'
        },
        {
            id: 'tip-20',
            value: .20,
            label: '20%'
        },
        {
            id: "tip-0",
            value: 0,
            label: "Sin propina"
        }
    
    ]

  return (
    <div className="mx-5 mt-2">
        <h2 className="text-2xl font-bold">Propina</h2>
        <form>
            {tipOptions.map(tipOption=>(
                <div className="flex gap-2" key={tipOption.id}>
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input 
                        type="radio" 
                        id={tipOption.id}
                        name="tip"    
                        value={tipOption.value}
                        onChange={e => setTip(+e.target.value)}
                        checked={tipOption.value ===tip}
                    />
                </div>
            ))}  
        </form>
    </div>
  )
}
