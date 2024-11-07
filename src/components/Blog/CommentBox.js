import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { create_comment } from "../../redux/actions/Coments/coment"; // Asegúrate de que la ruta sea correcta

function CommentBox({user, avatar, parentComment = null }) {
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();

    const handleCommentSubmit = () => {
        if (!comment.trim()) return;

        const timestamp = new Date().toISOString();  // Obtener el timestamp actual

        // Despachar la acción para crear el comentario
        dispatch(create_comment(user, avatar, comment, timestamp, parentComment));

        setComment('');
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4 space-y-4 border border-gray-300 ">
            {/* Header */}
            <div className="text-orange-500 font-bold">
                Comment as - {user} -
            </div>

            {/* Text Area */}
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full h-32 p-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="What are your thoughts?"
            ></textarea>

            {/* Toolbar */}
            <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-b-lg border-t border-gray-300">
                {/* Formatting Options */}
                <div className="flex space-x-4 text-gray-500">
                    <button className="flex items-center space-x-1 hover:text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                        <span>Bold</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                        <span>Italic</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586m0 0L15.172 20M4 7h16" />
                        </svg>
                        <span>Attach</span>
                    </button>
                </div>

                {/* Markdown Mode & Comment Button */}
                <div className="flex items-center space-x-4">
                    <span className="text-gray-500">Markdown Mode</span>
                    <button
                        onClick={handleCommentSubmit}
                        className="bg-gray-700 text-gray-300 px-4 py-1 rounded-lg hover:bg-gray-800"
                    >
                        Comment
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CommentBox;
