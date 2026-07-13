'use client';

import { Shader, Aurora, ChromaFlow } from 'shaders/react';

function LiquidAurora() {
    return (
        <Shader 
            style={{
                position: 'absolute',
                width: '110vw',
                height: '110vh',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: -1
            }}
        >
            <Aurora
                colorA='#00f'
                colorB='#44f'
                height={190}
            />
            <ChromaFlow
                baseColor='#00f'
                upColor='#44f'
                downColor='#05f'
                leftColor='#10f'
                rightColor='#14f'
                intensity={0.3}
            />
        </Shader>
    );
}

export default LiquidAurora;