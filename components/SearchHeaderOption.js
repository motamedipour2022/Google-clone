import { useRouter } from "next/router";
import SearchOption from "./SearchOption";
import { SearchIcon, PhotographIcon } from '@heroicons/react/outline';

export default function SearchHeaderOption(title, Icon, selected) {
    const router = useRouter();
  return (
    <div className={`flex space-x-8 select-none w-full justify-center text-sm text-gray-700 lg:pl-52 lg:justify-start lg:text-xl  border-b-2  ${selected && "text-blue-500 border-blue-500 "}`}>
        <SearchOption title="All" Icon={SearchIcon} selected={router.query.searchType === "" || !router.query.searchType } />
        <SearchOption title= "images" Icon={PhotographIcon} selected={router.query.searchType === "image"} />
    </div>
  )
}
