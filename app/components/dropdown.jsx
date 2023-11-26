import Link from "next/link"

const DropDownPortfolio = () => {
    return (
    <div className='flex flex-col dropDownMenu items-center text-pink-100 outline-pink-100'>
        <Link href="/lighting" className='py-1 px-3 min-w-24 rounded-full outline-double'>LIGHTING</Link>
        <Link href="/build" className='py-1 px-3 min-w-24 rounded-full outline-double'>BUILD</Link>
        <Link href="/comp" className='py-1 px-3 min-w-24 rounded-full outline-double'>GEN</Link>
    </div>
    )
}

