import User from "./User"

export default function Header() {
  return (
    <header className="flex justify-between p-5 text-sm text-gray">
        <div className="">
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
