import React, { Component } from "react"
import Header from "./Components/Header"
import Container from "./Components/Container"
import data from "./Components/Data"
export default function App() {
  const renderContainer = data.map(d => <Container key={d.id} travel={d}/>)
  return (
    <main className="main-content">
      <p className="react-badge">Learning-React-7 </p>
      <Header />
      {renderContainer}
    </main>
  )
}

