'use client'

import React from 'react'
import { Three } from '@/helpers/components/Three'
import * as THREE from 'three'

export default function Sample() {
  return (
  <>
    <pointLight position={[10, 10, 10]} />
    <mesh>
      <sphereGeometry />
      <meshStandardMaterial color="skyblue" />
    </mesh>
  </>
  )
}
