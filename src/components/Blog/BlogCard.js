import React from "react";

function BlogCard({ post }) {
    return (
        <div className="max-w-4xl mx-auto my-4 p-4 border border-gray-200 rounded-lg shadow-md flex items-center space-x-6">
            {/* Imagen del post */}
            <img
                src={post.thumnail} 
                alt={post.title}
                className="w-32 h-32 object-cover rounded-lg"
            />
            <div className="flex-1">
                {/* Título del post */}
                <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
                {/* Categoría */}
                <p className="text-sm text-gray-500">
                    <span className="font-semibold">Category: </span>
                    {post.category.name}
                </p>
                {/* Tiempo de lectura */}
                <p className="text-sm text-gray-500">
                    <span className="font-semibold">Time to Read: </span>
                    {post.time_read} min
                </p>
                {/* Fecha de publicación */}
                <p className="text-sm text-gray-500">
                    <span className="font-semibold">Published on: </span>
                    {new Date(post.published).toLocaleDateString()}
                </p>
                {/* Vistas */}
                <p className="text-sm text-gray-500">
                    <span className="font-semibold">Views: </span>
                    {post.views}
                </p>
            </div>
        </div>
    );
}

export default BlogCard;
