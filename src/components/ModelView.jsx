import { Html, OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import Lights from './Lights'
import Iphone from './Iphone'
import * as three from 'three'
const ModelView = ({index,groupRef,gsapType,controlRef,setRotationState,item,size}) => {
  return (
    <View
    index={index}
    id={gsapType}
    className={` w-full h-full absolute ${index==2 ? 'right-[-100%]': ''}`}
    >
  <ambientLight intensity={5} />
  <PerspectiveCamera makeDefault position={[0,0,4]} />
  <Lights/>
  <OrbitControls
  makeDefault
  ref={controlRef}
  enableZoom={false}
  enablePan={false}
  rotateSpeed={0.4}
  target={new three.Vector3(0,0,0)}
  onEnd={()=> setRotationState(controlRef.current.getAzimuthalAngle())}
   />
  <group ref={groupRef} name={index==1 ? 'small' : 'large'} position={[0,0,1]} >
  <Suspense  fallback={<Html><div>Loading...</div></Html>}>
  <Iphone
  scale={index===1 ? [15,15,15] : [17,17,17]}
  item={item}
  size={size}
  />

  </Suspense>
  </group>
  
    </View>
  )
}

export default ModelView
