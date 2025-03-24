import { useState } from "react";

export default function ApiControlPage() {
  const [logs, setLogs] = useState([]);
  const [ip, setIp] = useState("");
  const [dn, setDn] = useState("");
  const [agentId, setAgentId] = useState("");

  const handleButtonClick = (action) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prevLogs) => [`${timestamp} - ${action} button clicked`, ...prevLogs]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      <div className="flex-grow flex flex-col items-center justify-between p-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">ICAPI Control</h1>

          {/* Server Control */}
          <div className="flex justify-center gap-4 mb-6">
            <button onClick={() => handleButtonClick("OpenServer")} className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all">OpenServer</button>
            <button onClick={() => handleButtonClick("CloseServer")} className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all">CloseServer</button>
          </div>
          <div className="mb-6">
            <input 
              type="text" 
              value={ip} 
              onChange={(e) => setIp(e.target.value)} 
              className="px-4 py-2 border rounded-lg w-full max-w-md text-center" 
              placeholder="IP address" 
            />
          </div>

          {/* Registration Control */}
          <div className="flex justify-center gap-4 mb-6">
            <button onClick={() => handleButtonClick("Regi")} className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all">Regi</button>
            <button onClick={() => handleButtonClick("Unregi")} className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all">Unregi</button>
          </div>
          <div className="mb-6">
            <input 
              type="text" 
              value={dn} 
              onChange={(e) => setDn(e.target.value)} 
              className="px-4 py-2 border rounded-lg w-full max-w-md text-center" 
              placeholder="DN" 
            />
          </div>

          {/* Login Control */}
          <div className="flex justify-center gap-4 mb-6">
            <button onClick={() => handleButtonClick("Login")} className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all">Login</button>
            <button onClick={() => handleButtonClick("Logout")} className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all">Logout</button>
          </div>
          <div className="mb-6">
            <input 
              type="text" 
              value={agentId} 
              onChange={(e) => setAgentId(e.target.value)} 
              className="px-4 py-2 border rounded-lg w-full max-w-md text-center" 
              placeholder="AgentID" 
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mb-6">
            <button onClick={() => handleButtonClick("MakeCall")} className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all">MakeCall</button>
            <button onClick={() => handleButtonClick("AnswerCall")} className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all">AnswerCall</button>
            <button onClick={() => handleButtonClick("Disconnect")} className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all">Disconnect</button>
          </div>

          {/* Logs */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-inner h-48 overflow-auto border border-gray-300">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Logs</h2>
            {logs.length > 0 ? logs.map((log, index) => (
              <p key={index} className="text-sm text-gray-700">{log}</p>
            )) : <p className="text-sm text-gray-500">No logs yet...</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
