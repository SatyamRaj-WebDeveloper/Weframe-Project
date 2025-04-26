"use client"
import Dashboard from "./components/Dashboard";
import Main from "./components/Main";
import React ,{useState} from 'react'


export default function Home() {
  
  return (
    <div className=" flex w-screen   ">
      <Dashboard />
      <Main />
    </div>
  );
}
