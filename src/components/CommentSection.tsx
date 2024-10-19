import { useState } from 'react';

const CommentSection = () => {
    const [comments, setComments] = useState([
        {
            id: 1,
            name: 'Usman Mirza',
            time: '12 hours ago',
            text: 'In vestibulum sed aliquet id turpis. Sagittis sed sed adipiscing velit habitant quam.',
            image: 'https://pagedone.io/asset/uploads/1710226776.png',
        },
        {
            id: 2,
            name: 'Areeba',
            time: '2 days ago',
            text: 'Rutrum enim commodo est tristique vitae ut porta euismod cras.',
            image: 'https://pagedone.io/asset/uploads/1710238051.png',
        },
    ]);

    const [newComment, setNewComment] = useState('');

    const handleSubmit = () => {
        if (newComment.trim() !== '') {
            const newEntry = {
                id: comments.length + 1,
                name: 'Hamza',
                time: 'Just now',
                text: newComment,
                image: '/hamza-pic-2.png',
            };
            setComments([...comments, newEntry]);
            setNewComment('');
        }
    };

    return (
        <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full flex-col justify-start items-start lg:gap-14 gap-7 inline-flex">
                    <h2 className="w-full text-gray-900 text-4xl font-bold leading-normal">Comments</h2>

                    {/* Comment Input */}
                    <div className="w-full flex-col justify-start items-start gap-5 flex">
                        <div className="w-full rounded-full justify-start items-start gap-3.5 inline-flex">
                            <img
                                className="w-10 h-10 rounded-full"
                                src="/hamza-pic-2.png"
                                alt="User profile"
                            />
                            <textarea
                                rows={5}
                                className="w-full px-5 py-3 rounded-2xl border border-gray-300 shadow resize-none focus:outline-none placeholder-gray-400 text-gray-900 text-lg"
                                placeholder="Write your thoughts here..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                            />
                        </div>
                        <button
                            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 rounded-xl shadow justify-center items-center"
                            onClick={handleSubmit}
                        >
                            <span className="px-2 py-px text-white text-base font-semibold ">Post your comment</span>
                        </button>
                    </div>

                    {/* Comments List */}
                    <div className="w-full flex-col justify-start items-start gap-8 flex">
                        {comments.map((comment) => (
                            <div key={comment.id} className="w-full pb-6 border-b border-gray-300 flex gap-2.5">
                                <img
                                    className="w-10 h-10 rounded-full object-cover"
                                    src={comment.image}
                                    alt={`${comment.name}'s profile`}
                                />
                                <div className="w-full flex-col justify-start items-start gap-3.5">
                                    <div className="flex justify-between items-start gap-1 w-full">
                                        <h5 className="text-gray-900 text-sm font-semibold">{comment.name}</h5>
                                        <span className="text-right text-gray-500 text-xs font-normal">{comment.time}</span>
                                    </div>
                                    <p className="text-gray-800 text-sm font-normal">{comment.text}</p>
                                    <div className="flex gap-5">
                                        {/* Optional like, reply icons here */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommentSection;
