'use client';

import React from 'react';
import { usePathname } from 'next/navigation'; // Use usePathname for getting the current path
import { featuredPosts, recentPosts } from '@/data/postsData'; // Import the posts data
import CommentSection from '@/components/CommentSection';

const PostPage: React.FC = () => {
    const pathname = usePathname(); // Get the current pathname
    const slug = pathname.split('/').pop() as string;; // Extract the slug from the pathname

    // Function to find a post by slug in both featured and recent posts
    const findPostBySlug = (slug: string) => {
        return [...featuredPosts, ...recentPosts].find(post => post.slug === slug);
    };

    // Find the post
    const post = findPostBySlug(slug);

    // If post is not found, display a message
    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="container mx-auto p-5 mt-10">
            <h1 className="text-4xl font-bold text-center capitalize tracking-widest font-serif">{post.title}</h1> {/* Display post title */}
            <div className='text-center mt-3 text-base'>Published on {post.date}</div>
            <div className="mt-3 text-center text-sm mb-8">
                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg className="w-4 h-4 mr-2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    {post.views} {/* Display number of views */}
                </span>

                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    {post.comments} {/* Display number of comments */}
                </span>
            </div>
            <img className="w-full max-w-5xl mx-auto h-[600px] object-cover mb-10 rounded-lg" src={post.imgSrc} alt={post.title} /> {/* Display post image */}
            <p className="my-4">{post.description}</p> {/* Display post description */}

            {/* Comments Section */}
            <CommentSection />
        </div>
    );
};

export default PostPage;
