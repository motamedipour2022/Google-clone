import User from "./User"

export default function Header() {
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700">
        <div className="inline">
            <p>About</p>
            <p>Store</p>
        </div>
        <div className="">
            <p>Pmail</p>
            <p>Images</p>
            <User/>
        </div>
    </header>
  )
}
