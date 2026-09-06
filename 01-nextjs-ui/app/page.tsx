'use client';

import React, { useState } from 'react';

export default function EventDashboard() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateEvent = () => {
    if (!eventName || !eventDate) return;
    setIsCreating(true);
    
    setTimeout(() => {
      setGeneratedLink(`https://your-community-hub.app/register/${Math.random().toString(36).substring(7)}`);
      setIsCreating(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-10 text-center">
          <h1 className="text-4xl font-extrabold mb-3">Community Event Hub 🎟️</h1>
          <p className="text-orange-100 text-lg">Create events, manage registrations, and automate certificates.</p>
        </div>

        <div className="p-10 space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Event Name</label>
            <input 
              type="text" 
              className="w-full border border-slate-300 p-4 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              placeholder="e.g., Annual Tech Meetup 2026"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Event Date</label>
            <input 
              type="date" 
              className="w-full border border-slate-300 p-4 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition-all"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </div>

          <button 
            onClick={handleCreateEvent}
            disabled={isCreating || !eventName || !eventDate}
            className={`w-full py-4 text-white font-bold rounded-lg transition-all ${isCreating ? 'bg-slate-400' : 'bg-orange-600 hover:bg-orange-700 shadow-lg'}`}
          >
            {isCreating ? 'Setting up Event...' : 'Create Event & Generate Links 🚀'}
          </button>

          {generatedLink && (
            <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-2">✅ Event Created Successfully!</h3>
              <p className="text-sm text-slate-600 mb-4">Share this link with your community to allow them to register and receive their entry QR code.</p>
              <div className="bg-white p-3 rounded border border-slate-300 text-slate-800 font-mono text-sm break-all">
                {generatedLink}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
