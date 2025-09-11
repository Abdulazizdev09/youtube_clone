import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaYoutube, FaMicrophone, FaBell } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import { CgProfile } from 'react-icons/cg';

const Header = () => {
    return (
        <div className="flex justify-between items-center px-4 py-2 bg-[#0f0f0f] text-white sticky top-0 z-50">
            <div className="flex items-center gap-4">
                <div className="flex items-center text-2xl font-bold gap-1 cursor-pointer">
                    <FaYoutube className="text-red-600" />
                    <span>YouTube</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center w-[500px] h-10 border border-gray-600 rounded-full overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full px-4 py-1 outline-none bg-transparent text-sm text-white"
                    />
                    <button className="w-14 h-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700">
                        <CiSearch className="text-xl" />
                    </button>
                </div>
                <div className="p-2 rounded-full hover:bg-zinc-700 cursor-pointer">
                    <FaMicrophone className="text-xl" />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 cursor-pointer hover:bg-zinc-700 px-2 py-1 rounded-full">
                    <FaPlus />
                    <p className="text-sm">Create</p>
                </div>
                <FaBell className="text-xl cursor-pointer" />
                <CgProfile className="text-2xl cursor-pointer" />
            </div>
        </div>
    );
};

export default Header;
