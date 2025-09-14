import React, { useEffect, useState } from "react"
import axios from "axios"

function SubscribedChannels() {
    const [channels, setChannels] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/channels?subscribed=true")
            .then((res) => setChannels(res.data))
    }, [])

    return (
        <div className="h-[100vh] pt-[50px] p-6 text-white">
            <h2 className="text-2xl font-bold mb-4">Subscribed Channels</h2>
            {channels.length === 0 ? (
                <p className="text-gray-400">No subscribed channels yet</p>
            ) : (
                <div className="space-y-3">
                    {channels.map((ch) => (
                        <div key={ch.id} className="flex items-center gap-4 p-3 bg-[#111] rounded-lg shadow">
                            <div className="w-[40px] h-[40px] rounded-full bg-white text-black flex items-center justify-center font-bold">
                                {ch.name.charAt(0)}
                            </div>
                            <div>
                                <h3 className="font-semibold">{ch.name}</h3>
                                <p className="text-gray-400 text-sm">{ch.subscribers} subscribers</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SubscribedChannels
