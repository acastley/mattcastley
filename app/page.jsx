'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Link from 'next/link'
// import { Common } from '@/components/canvas/View';
import { Layout } from '@/components/dom/Layout';
import Sample from 'src/components/canvas/Sample';


const Dog = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Dog), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })
// const My3DContent = dynamic(() => import('src/components/canvas/Sample'), { ssr: false }) 





function Page() {
  return (
    <Layout>
        <h1 className='font-bold'>3D web content in development</h1>
        <View orbit className='flex h-full w-full justify-center'>
          <Suspense fallback={null}>
            <Dog scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} />
            <Common color={'lightpink'} />
          </Suspense>
        </View>
        Other Details
    </Layout>
);
  
}

export default Page;