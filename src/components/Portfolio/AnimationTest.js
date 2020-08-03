// import ReactDOM from 'react-dom'
import React, { useRef, useMemo, Suspense } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useLoader, useUpdate } from 'react-three-fiber'
import { MeshNormalMaterial } from 'three'

const Box = props => {
	const mesh = useRef()

	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

	return (
		<mesh {...props} ref={mesh} scale={[3, 3, 3]}>
			<textBufferGeometry attach='geometry'>Jeff Palmer</textBufferGeometry>
			<boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
			<meshStandardMaterial attach='material' color='orange' />
		</mesh>
	)
}

const Text = ({
	children,
	vAlign = 'center',
	hAlign = 'center',
	size = 1,
	color = '#fff',
	...props
}) => {
	const font = useLoader(THREE.FontLoader, './Poppins_Thin_Regular.json')
	const config = useMemo(
		() => ({
			font,
			size: 40,
			height: 1,
			curveSegments: 26,
			bevelEnabled: false
		}),
		[font]
	)

	const mesh = useUpdate(
		self => {
			const size = new THREE.Vector3()
			self.geometry.computeBoundingBox()
			self.geometry.boundingBox.getSize(size)

			self.position.x =
				hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
			self.position.y =
				vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
		},
		[children]
	)

	return (
		<group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
			<mesh ref={mesh}>
				<textGeometry attach='geometry' args={[children, config]} />
				<meshNormalMaterial attach='material' />
			</mesh>
		</group>
	)
}

const JeffPalmer = () => {
	const ref = useRef()
	useFrame(
		({ clock }) =>
			(ref.current.rotation.x = 
				Math.sin(clock.getElapsedTime()) * 0.3)
	)
	return (
		<group ref={ref}>
			<Text position={[0, 0, 0]} children='Jeff Palmer' size={.5} />
		</group>
	)
}

const AnimationTest = () => {
	return (
		<Canvas>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<lightShadow />
			<Suspense fallback={null}>
				<JeffPalmer />
			</Suspense>
			{/* <Box position={[0, 0, 0]} /> */}
		</Canvas>
	)
}

export default AnimationTest
