import User from "./User"

export default function Header() {
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700">
        <div className="flex space-x-5 items-center">
            <p className="">About</p>
            <p className="">Store</p>
        </div>
        <div className="flex space-x-5 items-center">
            <p className="">Pmail</p>
            <p className="">Images</p>
            <User/>
        </div>
    </header>
  )
}
