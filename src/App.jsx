"use client"

import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

function App() {
  const [language, setLanguage] = useState("vi")

  return (
    <div className="app">
      <Header language={language} setLanguage={setLanguage} />
      <Navbar />
      <div className="container">
        <Banner />
        <MainContent />
      </div>
      <Footer />
    </div>
  )
}

export default App
