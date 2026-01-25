
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {FACEBOOK_URL, GMAIL_URL, INSTAGRAM_URL, LINKEDIN_URL, GIT_URL, YOUTUBE_URL} from "~/constants/socialLinks";

const Social_Intro : React.FC = () => {
    return (
        <div className="social-container">
            <h2>LET'S CONNECT</h2>
            <span className="links-wrapper">
                <a href={FACEBOOK_URL} target="_blank" title="FACEBOOK">
                    <FaFacebook className="text-blue-500" />
                </a>
                <a href={INSTAGRAM_URL} target="_blank" title="INSTAGRAM">
                    <FaInstagram className="text-pink-500" />
                </a>
                <a href={GMAIL_URL} target="_blank" title="GMAIL">
                    <SiGmail className="text-orange-500" />
                </a>
                <a href={GIT_URL} target="_blank" title="GITHUB">
                    <FaGithub className="text-slate-800" />
                </a>
                <a href={YOUTUBE_URL} target="_blank" title="YOUTUBE">
                    <FaYoutube className="text-rose-500" />
                </a>
                <a href={LINKEDIN_URL} target="_blank" title="LINKEDIN">
                    <FaLinkedinIn className="text-blue-500" />
                </a>
            </span>
        </div>
    )
}

export default Social_Intro;