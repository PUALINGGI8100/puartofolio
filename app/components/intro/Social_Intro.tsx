
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {FACEBOOK_URL, GMAIL_URL, INSTAGRAM_URL, LINKEDIN_URL, TELE_URL, X_URL, YOUTUBE_URL} from "~/constants/socialLinks";

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
                <a href={TELE_URL} target="_blank" title="TELEGRAM">
                    <FaTelegram className="text-blue-400" />
                </a>
                <a href={X_URL} target="_blank" title="X">
                    <FaTwitter className="text-sky-500" />
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