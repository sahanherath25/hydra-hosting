import {Geist, Geist_Mono} from "next/font/google";
import Navbar from "@/components/Navbar";

import "./globals.css";
import "../styles/globals.scss";



import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Hydra Hosting",
    description: "Built By Sahan Herath",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
        >

        <Navbar/>
        {children}

        </body>
        </html>
    );
}


