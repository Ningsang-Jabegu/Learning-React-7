import React from "react";
export default function Header() {
    function toggleMode() {
        const mode = document.querySelector(".mode-toggle")
        const body = document.querySelector("body")
        if(mode.classList.contains("to-light")) {
          body.classList.add("dark-mode")
          body.style.background = "#0B2434";
          mode.classList.remove("to-light")
          mode.classList.add("to-dark")
          mode.style.background = "#0b243487"
        } else {
          body.classList.remove("dark-mode")
          body.style.background = "#DCE9E1";
          mode.classList.remove("to-dark")
          mode.classList.add("to-light")
          mode.style.background = "#b1b4b387"      
        }
        
      }
    return(
        <header className="header-container">
            <i class="fa-solid fa-earth-asia"></i>
           <span className="header-title">my travel journal.</span>
           <div className="light-dark-container">
          <i className="fa-solid fa-sun"></i>
              <div className="mode-toggle to-light" onClick={toggleMode}>
                <div className="mode-dark-toggle"></div>
              </div>
          <i className="fa-solid fa-moon"></i>
        </div> 
        </header>
    )
}