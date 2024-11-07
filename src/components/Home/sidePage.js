import Info from "./info"
import Profile from "./profile"
import Rules from "./rules"
function sidePage(){
    return(
        <div className=" bg-gray-100 w-full h-auto m-1" >
            <Profile/>
            <Rules/>
            <Info/>
        </div>
    )
}
export default sidePage