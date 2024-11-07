import React, { useState } from 'react';
import CommentBox from './CommentBox';

const CommentThread = ({ comments }) => {
    return (
        <div className="space-y-4">
            {comments && comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    );
};

const Comment = ({ comment }) => {
    // Estado para controlar la visibilidad del CommentBox
    const [isCommentBoxVisible, setIsCommentBoxVisible] = useState(false);

    // Función para alternar la visibilidad del CommentBox
    const toggleCommentBox = () => {
        setIsCommentBoxVisible(!isCommentBoxVisible);
    };

    return (
        <div className="flex space-x-3">
            {/* Vertical line */}
            <div className="flex flex-col items-center">
                <div className="w-8">
                    {/* Avatar del usuario */}
                    <img
                        src={comment.avatar} // URL de la imagen desde los datos
                        alt="User avatar"
                        className="w-8 h-8 rounded-full"
                    />
                </div>
                <div className="flex-1 w-px bg-gray-300 mt-2"></div> {/* Línea vertical */}
            </div>

            {/* Contenido del comentario */}
            <div className="flex-1">
                {/* Cabecera con usuario y hora */}
                <div className="flex items-center space-x-2">
                    <span className="font-bold text-gray-800">{comment.user}</span>
                    <span className="text-sm text-gray-500">{comment.timestamp}</span>
                </div>

                {/* Texto del comentario */}
                <p className="text-gray-700 mt-1">{comment.text}</p>

                {/* Pie de acciones */}
                <div className="flex items-center space-x-4 mt-2 text-gray-500">
                    <button className="hover:text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19V6m-7 7l7-7 7 7" />
                        </svg>
                    </button>
                    <span>{comment.upvotes}</span>
                    <button className="hover:text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v13m7-7l-7 7-7-7" />
                        </svg>
                    </button>
                    <button className="hover:text-blue-500" onClick={toggleCommentBox}>Reply</button>
                    <button className="hover:text-blue-500">Share</button>
                    <button className="hover:text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h12M6 6h12M6 18h12" />
                        </svg>
                    </button>
                </div>

                {/* Mostrar CommentBox solo si isCommentBoxVisible es true */}
                {isCommentBoxVisible && (
                    <CommentBox 
                        user="danielps" 
                        avatar="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_2.png" 
                        parentComment={comment && comment.id} 
                    />
                )}

                {/* Renderizado de respuestas */}
                {comment.replies && comment.replies.length > 0 && (
                    <div className="ml-10 mt-4 space-y-4">
                        {comment.replies.map((reply) => (
                            <Comment key={reply.id} comment={reply} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CommentThread;
