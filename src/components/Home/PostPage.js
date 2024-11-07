import React, { useState } from 'react';
import CommentBox from '../Blog/CommentBox';
import CommentThread from 'components/Blog/CommentThread';
import SearchInput from 'components/navigation/Search';
import SortDropdown from 'components/navigation/SortDropdown';
import {get_comments} from '../../redux/actions/Coments/coment.js'
import { useEffect } from "react"
import { connect } from "react-redux"

function PostPage({get_comments, comments}){

    // Estado para controlar la visibilidad del CommentBox
    const [isCommentBoxVisible, setIsCommentBoxVisible] = useState(false);

    // Función para alternar la visibilidad del CommentBox
    const toggleCommentBox = () => {
        setIsCommentBoxVisible(!isCommentBoxVisible);
    };

    
    useEffect(()=>{
        get_comments()
    },[get_comments,comments    ])
    
    const firstPost = comments&&comments.find(comment => comment.parent_comment === null);
    const childrenPost = firstPost&&firstPost.replies
    return (
        <div className="flex flex-row space-x-3 bg-white w-full h-auto m-1 rounded-[10px] p-4">
            <div>
                {/* Upvote/Downvote counter on the top right */}
                <div className="flex flex-col items-center space-y-2">
                    <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19V6m-7 7l7-7 7 7" />
                        </svg>
                    </button>
                    <span className="text-gray-700">102</span> {/* Example vote count */}
                    <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v13m7-7l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>
            <div>
                {/* Post Header */}
                <div className="flex flex-row items-center space-x-3 mb-4">
                    <img
                        src={firstPost&&firstPost.avatar ? firstPost.avatar : "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_2.png"}
                        alt="author avatar"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="flex flex-row space-x-4">
                    <p className="font-bold text-gray-900">u/{firstPost&&firstPost.user ? firstPost.user : "genericUser"}</p>

                    <p className="text-sm text-gray-500">Posted 2 hours ago</p>
                    </div>
                </div>

                {/* Post Content */}
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{firstPost&&firstPost.text ? firstPost.text : "Generic Text"}</h2>
                    {/* <p className="text-gray-700">
                        This is where the body content of the post would go. It can include text, images, links, and other media.
                    </p> */}
                </div>

                {/* Post Footer (Vote and Comments) */}
                <div className="flex items-center justify-between  text-gray-500">  
                    <div className="flex items-center space-x-4">
                        {/* Comment Button */}
                        <button onClick={toggleCommentBox} className="flex items-center space-x-1 hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6l6 6-6 6M12 6l6 6-6 6" />
                            </svg>
                            <span>Comments</span>
                        </button>

                        {/* Share Button */}
                        <button className="flex items-center space-x-1 hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v18l15-9-15-9z" />
                            </svg>
                            <span>Share</span>
                        </button>

                        {/* Save Button */}
                        <button className="flex items-center space-x-1 hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21H5V7l7-4 7 4v14z" />
                            </svg>
                            <span>Save</span>
                        </button>

                        {/* Options Button (three dots) */}
                        <button className="flex items-center space-x-1 hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12h12M6 6h12M6 18h12" />
                            </svg>
                    </button>
                    </div>
                    <div>
                        {/* 11 People Here & User Icons */}
                        <div className="flex items-center space-x-2 text-gray-500 ml-auto">
                            <p className="text-sm">11 people here</p>
                            <div className="flex flex-col space-y-1">
                                <img src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_2.png" alt="user icon" className="w-6 h-6 rounded-full" />
                                <img src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_2.png" alt="user icon" className="w-6 h-6 rounded-full" />
                            </div>
                        </div>
                    </div>      
                </div>
                
                {/* Render CommentBox if visible */}
                <CommentBox 
                user="danielps" 
                avatar="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_2.png" 
                parentComment={firstPost&&firstPost.id} 
                />


                <div className='flex flex-row mt-4'>   
                        <SortDropdown/>
                        <SearchInput/>
                </div>

                {/* Separator */}
                <div className="border-t border-gray-300 my-4"></div>
                <div className="flex justify-end text-orange-reddit font-bold my-4">
                    View discussions in 1 other community
                </div>

                <CommentThread comments={childrenPost}/>

            </div>
            

            
        </div>
    );
}


const mapStateToProps=(state)=>({
    comments: state.coments.comments.comments,
})

export default connect(mapStateToProps,{
    get_comments
})(PostPage)