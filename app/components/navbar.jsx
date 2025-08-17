import Link from "next/link"
import { homedir } from "os"
import Dropdown from "./DropDownPort"
import DropDownPort from "./DropDownPort"


export default function Navbar() {
    return (
        <div className="outline-white">
            <nav className='sticky top-0 w-full z-10 bg-gradient-to-r from-pink-300 to-pink-100'>
            <div className='p-2 flex justify-between items-center w-full'>
                <Link href="/" className='font-extrabold text-pink-50 outline-pink-200 text-5xl lg:tracking-extra-widest sm:tracking-normal md:tracking-normal'>MATT CASTLEY</Link>
            <div className='flex-wrap items-center text-pink-300 outline-pink-100 space-x-4 space-y-2'>
            </div>
            </div>
            </nav>
        </div>
    )}
