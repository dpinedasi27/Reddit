import PostPage from "components/Home/PostPage"
import SidePage from "components/Home/sidePage"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
function Reddit(){
    return(
        <Layout>
            <Navbar/>
            <div className="flex justify-center">
                <div className="w-3/4 pt-16">
                    <div className="grid grid-cols-12 bg-blue-950 w-full h-auto">
                        <div className="col-span-8 flex justify-center">
                            <PostPage/>
                        </div>
                        <div className="col-span-4 flex justify-center">
                            <SidePage/>
                        </div>
                    </div>
                </div>
            </div>
              
        </Layout>
    )
}

export default Reddit
