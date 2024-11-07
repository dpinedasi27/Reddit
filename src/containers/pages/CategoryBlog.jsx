import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { get_categories } from "../../redux/actions/Categories/categories";
import { connect } from "react-redux"
import { get_blog_list_category } from "../../redux/actions/Blog/blog";
import CategoriesHeader from "components/Blog/categoriesHeader";
import { useParams } from "react-router-dom";



function CateogoryBlog({
    get_categories,
    get_blog_list_category,
    categories,
    posts_category
}){
    const params = useParams()
    const slug = params.slug
    useEffect(()=>{
        get_categories()
        get_blog_list_category(slug)
    },[get_categories, get_blog_list_category,slug])
    return(
        <Layout>
            <Navbar/>
            <div className="pt-20">
                <CategoriesHeader categories={categories&&categories}/>
                <Footer/>
            </div>            
        </Layout>
    )
}

const mapStateToProps=state=>({
    categories: state.categories.categories,
    posts_category: state.blog.blog_list_category,
})

export default connect(mapStateToProps,{
    get_categories,
    get_blog_list_category,
})(CateogoryBlog)
