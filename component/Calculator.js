    import React, { useState } from 'react'

    const Calculator = () => {
        const [value, setvalue] = useState('')
    return (
<div className='calculator'> 
    <div className='container'><input type='text' className='num' value={value}></input></div>
    <div className='buttons'>
        <input type='button' value="AC" className='sp' style={{ color: 'green' }} onClick={e => setvalue('')}/>
        <input type='button' value="DE" className='sp' style={{ color: 'green' }} onClick={e => setvalue(value.slice(0, -1))}/>
        <input type='button' value="." className='sp' style={{ color: 'green' }} onClick={e => setvalue( value + e.target.value)}/>
        <input type='button' value="/" className='sp' style={{ color: 'green' }} onClick={e => setvalue( value + e.target.value)}/>
            
        <input type='button' value="9" className='sp'  onClick={e => setvalue( value + e.target.value)}/>
        <input type='button' value="8" className='sp'  onClick={e => setvalue( value + e.target.value)}/>
        <input type='button' value="7" className='sp'  onClick={e => setvalue( value + e.target.value)}/>
        <input type='button' value="*" className='sp' style={{ color: 'green' }} onClick={e => setvalue( value + e.target.value)}/>
        
        <input type='button' value="6" className='sp'  onClick={e => setvalue( value + e.target.value)}/>
        <input type='button' value="5" className='sp'  onClick={e => setvalue( value + e.target.value)}/>
        <input type='button' value="4" className='sp'  onClick={e => setvalue( value + e.target.value)}/>
        <input type='button' value="+" className='sp' style={{ color: 'green' }} onClick={e => setvalue( value + e.target.value)}/>
        
        <input type='button' value="3" className='sp'  onClick={e => setvalue( value + e.target.value)}/>
        <input type='button' value="2" className='sp'  onClick={e => setvalue( value + e.target.value)}/>
        <input type='button' value="1" className='sp'  onClick={e => setvalue( value + e.target.value)}/>
        <input type='button' value="-" className='sp' style={{ color: 'green' }} onClick={e => setvalue( value + e.target.value)}/>
        <input type='button' value="=" className='sp' style={{ backgroundColor: 'orange' }} onClick={e => setvalue( eval(value))}></input>
        
            </div>
            
        </div>
    )
    }

    export default Calculator