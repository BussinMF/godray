import { Text3D} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Text() 
{
    const group = useRef()

    useFrame((state, delta) =>
    {
        group.current.rotation.y += 1 * delta
    })

    return <>
        <group ref={ group }>
            <Text3D 
                font="./Chomsky_Regular.json"
                position={ [ - 1, 0, 0 ] } 
            >
                yuh
                <shaderMaterial />
            </Text3D>
        </group>
    </>
}