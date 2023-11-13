'use client'

import { useRouter } from 'next/navigation';

export default function DropDownPort() {
    const router = useRouter();

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue && selectedValue !== "default") {
            router.push(selectedValue);
        }
    }

    return (
        <div>
            <select className='hover:bg-pink-50 hover:text-pink-600 hover:border-2 hover:border-pink-200 py-2 md:pe-24 sm:pe-10 ps-2 bg-pink-10 outline-white border-2 border-pink-300 rounded-lg font-semibold' onChange={handleChange}>
                <option className='font-semibold' value="/home">HOME</option>
                <option className='font-semibold' value="/lighting">LIGHTER</option>
                <option className='font-semibold' value="/build">BUILDER</option>
                <option className='font-semibold' value="/comp">GENERALIST</option>
            </select>
        </div>
    )
}