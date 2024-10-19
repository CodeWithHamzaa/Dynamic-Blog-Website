import React from 'react';
import Link from 'next/link'; 
import { featuredPosts, recentPosts} from '../data/postsData'; // Import the posts data

const HomePage: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className='font-bold text-4xl text-black mb-2 tracking-wide'>Featured Posts</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded mb-10"></div>
        <div className="flex flex-wrap -m-4 mb-12">
          {featuredPosts.map((post) => (
            <div key={post.slug} className="p-4 md:w-1/3"> {/* Unique key using slug */}
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={post.imgSrc} alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{post.date}</h2> {/* Display date */}
                  <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">{post.title}</h1> {/* Display post title */}
                  <p className="leading-relaxed mb-3 line-clamp-2">{post.description}</p> {/* Display post description */}
                  <div className="flex items-center flex-wrap ">
                    <Link href={`/posts/${post.slug}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"> {/* Link to post page */}
                      Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      {post.views} {/* Display number of views */}
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      {post.comments} {/* Display number of comments */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h1 className='font-bold text-4xl text-black mt-20 mb-2 tracking-wide'>Recent Posts</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded mb-10"></div>
        <div className="flex flex-wrap -m-4">
          {recentPosts.map((post) => (
            <div key={post.slug} className="p-4 md:w-1/3"> {/* Unique key using slug */}
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={post.imgSrc} alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{post.date}</h2> {/* Display date */}
                  <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">{post.title}</h1> {/* Display post title */}
                  <p className="leading-relaxed mb-3 line-clamp-2">{post.description}</p> {/* Display post description */}
                  <div className="flex items-center flex-wrap ">
                    <Link href={`/posts/${post.slug}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"> {/* Link to post page */}
                      Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      {post.views} {/* Display number of views */}
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      {post.comments} {/* Display number of comments */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href="/" className="text-indigo-500 block text-center items-center mt-16">
          View All Posts
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
