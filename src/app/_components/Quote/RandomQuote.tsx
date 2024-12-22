"use client"
import React, { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';

export default function RandomQuote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the quote (can be used inside handleQuote too)
  const fetchData = async () => {
    try {
      const res = await fetch('https://dummyjson.com/quotes/random');
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error(error); // Log the error for debugging
    
    } finally {
      setLoading(false);
    }
  };

  // Call fetchData when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Handle quote fetch on button click
  const handleQuote = () => {
    setLoading(true);
    setQuote(''); // Clear the current quote while loading
    setAuthor('');
    fetchData(); // Fetch a new quote when the button is clicked
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="absolute left-2 bg-[#0d1117] -top-3 z-20 px-3 flex gap-2 items-center">
        <Quote onClick={handleQuote} />
        <h1 className='text-xl'>Random Quote of Day</h1>
      </div>
      <div className="mt-4 font-semibold italic">
        <h1>"{quote}"</h1>
        <p>- {author}</p>
      </div>
    </div>
  );
}
