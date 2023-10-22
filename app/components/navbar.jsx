import Link from "next/link"
import { homedir } from "os"


export default function Navbar() {
    return (
        <div>
            <nav className='sticky top-0 w-full z-10 bg-slate-700'>
            <div className='p-2 flex justify-between items-center w-full'>
                <Link href="/home" className='font-bold text-pink-50 text-4xl lg:tracking-extra-widest sm:tracking-normal md:tracking-normal'>MATT CASTLEY</Link>
                <div className='flex-wrap items-center text-pink-100 outline-pink-100 space-x-4 space-y-2'>
                <Link href="/lighting" className='py-1 px-3 min-w-24 rounded-full outline-double'>LIGHTING</Link>
                <Link href="/build" className='py-1 px-3 min-w-24 rounded-full outline-double'>BUILD</Link>
                <Link href="/comp" className='py-1 px-3 min-w-24 rounded-full outline-double'>GEN</Link>
                </div>
            </div>
            </nav>
        </div>
    )}