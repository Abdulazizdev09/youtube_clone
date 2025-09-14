// src/components/VideoGrid.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const VideoCards = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:4000/videos')
            .then((res) => setVideos(res.data))
            .finally(() => setLoading(false))
            .catch((err) => console.error('Failed to fetch videos:', err));
    }, []);
    return (
        <div className="grid mt-[64px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4 bg-black">
            {loading
                ? <CircularProgress />
                : videos.map((video) => (
                    <div key={video.id} onClick={() => navigate(`/video/${video.id}`)} className="text-white hover:cursor-pointer hover:bg-gray-900 ">
                        <img src={video.thumbnail} alt={video.title} style={{ maxHeight: "180px", height: "180px" }} className="rounded-xl " />
                        <div className="mt-2">
                            <h3 className="text-sm font-semibold line-clamp-2">{video.title}</h3>
                            <p className="text-xs text-gray-400">{video.channel}</p>
                            <p className="text-xs text-gray-400">{video.views} • {video.time}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default VideoCards;
