import Link from "next/link";
import { HomeContent } from "./components/content/Home";
import { ProjectsContent } from "./components/content/Projects";
import { AboutContent } from "./components/content/About";
import { WorkContent } from "./components/content/Work";
import { Component } from "react";


export default function Home() {
  return (
    <div className="backdrop-blur p-8 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6">This is Home</h1>
      <nav className="flex gap-6 mb-8">
        <Link href='/work' className="text-blue-500 underline hover:text-blue-700 transition">work</Link>
        <Link href='/projects' className="text-blue-500 underline hover:text-blue-700 transition">projects</Link>
        <Link href='/aboutme' className="text-blue-500 underline hover:text-blue-700 transition">aboutme</Link>
      </nav>
      <div className="flex flex-wrap justify-center items-start gap-8 p-8">
        <HomeContent/>
        <ProjectsContent/>
        <AboutContent/>
        <WorkContent/>
        {[HomeContent, ProjectsContent, AboutContent, WorkContent]
        .map((Component, index) => (
          <div key={index} className="bg-black hover:only:object-center border-amber-600">
            <Component/>
          </div>
        ))}
        
      </div>
    </div>
  );
}
