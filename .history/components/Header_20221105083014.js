import User from "./User"

export default function Header() {
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700">
        <div className="flex space-x-5 items-left">
            <p>About</p>
            <p>Store</p>
        </div>
        <div className="flex space-x-5 items-left">
            <p>Pmail</p>
            <p>Images</p>
            <User/>
        </div>
    </header>
  )
}
