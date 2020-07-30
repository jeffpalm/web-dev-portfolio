// import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import * as THREE from 'three'
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { extend, Canvas, useFrame, useThree } from 'react-three-fiber'
extend({ AsciiEffect, OrbitControls })

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)

const effect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: true })

effect.setSize(window.innerWidth, window.innerHeight)
effect.domElement.style.color = 'white'
effect.domElement.style.backgroundColor = 'black'

document.body.appendChild(effect.domElement)

const Box = props => {
	const mesh = useRef()

	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

	return (
		<mesh {...props} ref={mesh} scale={[1, 1, 1]}>
			<boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
			<meshStandardMaterial attach='material' color='orange' />
		</mesh>
	)
}

React.createElement('div', )

const AnimationTest = () => {
	const { gl, raycaster } = useThree()
	const wS = useWindowSize()

  

	return (

      <Canvas>
      			<ambientLight />
      			<pointLight position={[10, 10, 10]} />
            <lightShadow />
      			<Box />
      		</Canvas>

	)
}

export default AnimationTest
