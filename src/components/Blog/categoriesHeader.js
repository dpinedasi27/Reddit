
import SearchInput from "components/navigation/Search"
import { Link, useLocation } from "react-router-dom"
function CategoriesHeader ({categories}){
    const location = useLocation()
    return (
        <div className="w-full bg-gray-100 py-3">
            <div className="grid grid-cols-12">
                <div className="col-span-10">
                     <div className="flex space-x-8 px-5 overflow-x-auto">
                        <Link to={'/blog'} className={`${location.pathname === '/blog' ? "text-orange-reddit" : "text-gray-700"} whitespace-nowrap  py-2 px-4 bg-white rounded-full text-md font-medium`}>
                            All
                        </Link>
                        {
                            categories&&categories.map(category=>(
                                <Link to={`/blog/categories/${category.slug}`} className={`${location.pathname === `/blog/categories/${category.slug}` ? "text-orange-reddit" : "text-gray-700"} whitespace-nowrap  py-2 px-4 bg-white rounded-full text-md font-medium hover:text-orange-reddit`}>
                                    {category.name}
                                </Link>
                            ))
                        }                     
                    </div>
                </div>
                <div className="col-span-2">
                        <SearchInput></SearchInput>
                </div>
            </div>
        </div>
    )
}

export default CategoriesHeader