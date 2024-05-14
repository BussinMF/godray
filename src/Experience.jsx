import { Center, OrbitControls } from '@react-three/drei'
import Text from './Text.jsx'
import GodRay from './GodRay.jsx'

export default function Experience()
{
    return <>

        <color args={ [ 'black' ] }  attach="background" />

        <OrbitControls makeDefault />

        <GodRay />

        <Center>
            <Text />
        </Center>

    </>
}