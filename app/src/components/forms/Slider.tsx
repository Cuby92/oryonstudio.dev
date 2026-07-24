'use client';

import s from './forms.module.scss';
import { InputProps } from './types';
import { useState } from 'react';

interface Props extends InputProps {
    min?:   number;
    max?:   number;
    step?:  number;
}

function Slider({ className = '', ref, name, required = false, id, min = 0, max = 100, step = 10 }: Props) {
    const [value, setValue] = useState((min + max) / 2);

    return (
        <>
            <input 
                className={`${className} ${s.Slider}`} 
                ref={ref} 
                name={name} 
                type='range' 
                id={id} 
                required={required} 
                min={min} 
                max={max} 
                value={value}
                step={step}
                onChange={e => setValue(Number(e.target.value))}
            />
        </>
    );
}

export default Slider;