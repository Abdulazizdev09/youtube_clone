import { ThumbUpAlt, ThumbUpOffAlt } from '@mui/icons-material'
import { Box } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function VideoPage() {
    const { id } = useParams()
    const [video, setVideo] = useState(null)
    const [liked, setLiked] = useState(false)
    const [channel, setChannel] = useState(null)
    const [subscribed, setSubscribed] = useState(false)
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:4000/videos/${id}`)
            .then((res) => {
                setVideo(res.data)
                setLiked(res.data.liked)
                setComments(res.data.comments || [])
                return axios.get(`http://localhost:4000/channels/${res.data.channelId}`)
            })
            .then((res) => {
                setChannel(res.data)
                setSubscribed(res.data.subscribed)
            })
    }, [id])

    const handleSubscribe = () => {
        if (!channel) return
        const updatedChannel = { ...channel, subscribed: !subscribed }
        axios.put(`http://localhost:4000/channels/${channel.id}`, updatedChannel)
        setChannel(updatedChannel)
        setSubscribed(!subscribed)
    }

    const handleLike = () => {
        if (!video) return;
        const updateVideo = { ...video, liked: !liked };
        axios.put(`http://localhost:4000/videos/${id}`, updateVideo)
            .then(() => setVideo(updateVideo));
        setLiked(!liked);
    };



    const handleComment = () => {
        if (!newComment.trim()) return;

        const updatedVideo = {
            ...video,
            comments: [...(video.comments || []), { id: Date.now(), text: newComment }]
        };

        axios.patch(`http://localhost:4000/videos/${id}`, updatedVideo)
            .then((res) => {
                setVideo(res.data);
                setComments(res.data.comments);
                setNewComment("");
            });
    };

    if (!video || !channel) return <p className="text-white">Loading...</p>

    return (
        <Box sx={{ width: "100%", paddingTop: "63px", color: "white" }}>
            <div className='w-[900px]  '>
                <img className='w-[900px] rounded-lg' src={video.thumbnail} alt="" />
                <h1 className='pt-2 pb-2 text-[25px]'>{video.title}</h1>

                <div className='flex items-center gap-6'>
                    <div className='flex gap-4 justify-center items-center'>
                        <Box className="w-[50px] h-[50px] bg-white text-black rounded-full flex items-center justify-center font-bold text-[30px]">
                            {channel.name?.charAt(0)}
                        </Box>
                        <div>
                            <h1>{channel.name}</h1>
                            <h1 className='text-[#aaa]'>{channel.subscribers}</h1>
                        </div>
                        <button
                            onClick={handleSubscribe}
                            className={`h-[40px] cursor-pointer ${subscribed ? "bg-gray-600" : "bg-green-500"} text-white px-4 py-2 rounded-[10px]`}
                        >
                            {subscribed ? "Subscribed" : "Subscribe"}
                        </button>
                    </div>

                    <div>
                        {liked ? (
                            <ThumbUpAlt
                                onClick={handleLike}
                                sx={{ cursor: "pointer", fontSize: "40px" }}
                                className="text-blue-500 transform scale-125 transition duration-300 animate-bounce"
                            />
                        ) : (
                            <ThumbUpOffAlt
                                onClick={handleLike}
                                sx={{ cursor: "pointer", fontSize: "40px" }}
                                className="text-gray-400 hover:scale-110 transition duration-300"
                            />
                        )}
                    </div>
                </div>
                <div className="mt-10 p-5 bg-[#111] rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold mb-5 border-b border-gray-700 pb-2">
                        Comments
                    </h2>
                    <div className="flex gap-2 mb-6">
                        <input
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Write a comment..."
                            className="flex-1 px-4 py-2 rounded-lg bg-[#222] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button onClick={handleComment} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
                            Add
                        </button>
                    </div>
                    <div className="space-y-4">
                        {comments?.map((c) => (
                            <div key={c.id} className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800">
                                <p className="text-gray-200">{c.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default VideoPage
