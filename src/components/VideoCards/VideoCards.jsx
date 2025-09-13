// src/components/VideoGrid.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

const VideoCards = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get('http://localhost:4000/videos')
            .then((res) => setVideos(res.data))
            .finally(() => setLoading(false))
            .catch((err) => console.error('Failed to fetch videos:', err));
    }, []);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4 bg-black">
            {loading
                ? <CircularProgress />
                : videos.map((video) => (
                    <div key={video.id} className="text-white">
                        <img src={video.thumbnail} alt={video.title} style={{ maxHeight:"200px",height:"200px"}} className="rounded-xl" />
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
