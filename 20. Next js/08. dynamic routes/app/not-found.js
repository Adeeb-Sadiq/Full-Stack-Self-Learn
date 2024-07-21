import Link from "next/link"

export default function NotFound () {
    return(
        <div className="flex flex-col items-center p-2 gap-5">
            <h2 className="text-2xl text-red-600">PAGE NOT FOUND</h2>
            <Link href={"/"} className="text-blue-600">Return to home</Link>
        </div>
    )
}
