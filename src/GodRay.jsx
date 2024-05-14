import { EffectComposer, GodRays } from '@react-three/postprocessing'
import { useControls } from 'leva'
import { Mesh, MeshBasicMaterial, SphereGeometry } from 'three'

let mesh = new Mesh(
    new SphereGeometry(),
    new MeshBasicMaterial({
        color: '#ffffff',
        transparent: true,
        opacity: 0.01
    })
)
mesh.position.z = 8

export default function GodRay()
{

    const godRaysDebug = useControls('GodRays',
        {
		samples: { value: 100, min: 10, max: 200, step: 10 },
		density: { value: 0.96, min: 0, max: 1, step: 0.01 },
		decay: { value: 0.98, min: 0, max: 1, step: 0.01 },
		weight: { value: 0.3, min: 0, max: 1, step: 0.01 },
		exposure: { value: 1, min: 0, max: 1, step: 0.01 },
		clampMax: { value: 1, min: 0, max: 1, step: 0.01 },
		blur: { value: 0, min: 0, max: 1, step: 1 },
		kernelSize: {
			options: {
				VERY_SMALL: 0,
				SMALL: 1,
				MEDIUM: 2,
				LARGE: 3,
				VERY_LARGE: 4,
				HUGE: 5
			},
			value: 1
		},
		blendFunction: {
			options: {
				SKIP: 0,
				ADD: 1,
				ALPHA: 2,
				AVERAGE: 3,
				COLOR_BURN: 4,
				COLOR_DODGE: 5,
				DARKEN: 6,
				DIFFERENCE: 7,
				EXCLUSION: 8,
				LIGHTEN: 9,
				MULTIPLY: 10,
				DIVIDE: 11,
				NEGATION: 12,
				NORMAL: 13,
				OVERLAY: 14,
				REFLECT: 15,
				SCREEN: 16,
				SOFT_LIGHT: 17,
				SUBTRACT: 18
			},
			value: 16
        }
        })

    return <>
        <primitive object={mesh} />
        
        <EffectComposer>
            <GodRays 
                sun={ mesh }
                {...godRaysDebug}
            />
        </EffectComposer>
    </>
}