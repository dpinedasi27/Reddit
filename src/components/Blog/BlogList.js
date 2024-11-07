import BlogCard from "./BlogCard"; // Importa BlogCard si está en otro archivo

function BlogList({ posts }) {
    return (
        <div className="space-y-4"> {/* Espaciado vertical entre las cards */}
            {posts&&posts.map((post) => (
                <BlogCard key={post.id} post={post} /> // Pasa el post a BlogCard
            ))}
        </div>
    );
}

export default BlogList;
