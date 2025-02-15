import { Environment, Lightformer, SpotLight } from '@react-three/drei'
import React from 'react'

const Lights = () => {
  return (
    <group name='lights'>
        <Environment resolution={256}>
            <group>
                <Lightformer
                form={'rect'}
                intensity={10}
                position={[-1,0,-10]}
                scale={10}
                color={'#495057'}
                />
                <Lightformer
                form={'rect'}
                intensity={10}
                position={[-10,2,1]}
                scale={10}
                color={Math.PI/2}
                />
                 <Lightformer
                form={'rect'}
                intensity={10}
                position={[10,0,1]}
                scale={10}
                color={Math.PI/2}
                />
            </group>

        </Environment>
        <SpotLight
        position={[-2, 10, 5]}
        angle={0.15}
        penumbra={1} // the penumbra is the soft edge of a shadow cast by a point light
        decay={0} // the amount the light dims as it moves away from the source
        intensity={Math.PI * 0.2} // the light intensity
        color={"#f8f9fa"}
      />
      <spotLight
        position={[0, -25, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI * 0.2}
        color={"#f8f9fa"}
      />
      <spotLight
        position={[0, 15, 5]}
        angle={0.15}
        penumbra={1}
        decay={0.1}
        intensity={Math.PI * 3}
      />


    </group>
  )
}

export default Lights
