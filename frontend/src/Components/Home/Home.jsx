import React from 'react'

function Home() {
  return (
    <div className="platform-container" style={{ textAlign: 'center', color: 'darkblue' }}>
    <h1 style={{ fontSize: '24px', fontWeight: 'normal' }}>Welcome to our Online Coding Challenge Platform</h1>
    <p style={{ fontSize: '16px', fontWeight: 'normal' }}>Sharpen your coding skills, solve real-world problems, and get ready for technical interviews.</p>
    <div className="features" style={{ color: 'green' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 'normal' }}>Key Features:</h2>
      <ul>
        <li>Access a vast library of coding challenges with varying difficulty levels.</li>
        <li>Submit your code solutions in a variety of programming languages.</li>
        <li>Receive instant feedback and detailed test case results.</li>
        <li>Compete with other developers on leaderboard challenges.</li>
      </ul>
    </div>
    <div className="community" style={{ color: 'orange' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 'normal' }}>Join Our Coding Community:</h2>
      <p style={{ fontSize: '16px', fontWeight: 'normal' }}>Connect with fellow programmers, discuss solutions, and learn from each other's experiences.</p>
    </div>
    {/* <div className="get-started">
      <button className="btn-primary" style={{ backgroundColor: 'darkblue', color: 'white', fontSize: '18px' }}>Get Started</button>
    </div> */}
  </div>
  )
}

export default Home