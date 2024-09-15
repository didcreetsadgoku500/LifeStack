import React, { useState, useEffect, useRef } from 'react';
import FadeTransition from '../components/FadeTransition';

const AutocompleteInput = ({ suggestions, onSelect, onInputChange}) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef(null);

  useEffect(() => {
    const filtered = suggestions.filter(suggestion =>
      suggestion.text.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredSuggestions(filtered);
    setShowSuggestions(filtered.length > 0 && inputValue !== '');
    setHighlightedIndex(-1);
  }, [inputValue, suggestions]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (onInputChange) {

      onInputChange(e.target.value);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setInputValue(suggestion.text);
    setShowSuggestions(false);
    onSelect(suggestion);
    
    if (onInputChange) {

      onInputChange(suggestion);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex(prev => (prev < filteredSuggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex(prev => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === 'Enter' && highlightedIndex !== -1) {
      handleSelectSuggestion(filteredSuggestions[highlightedIndex]);
    }
  };

  return (
      <div className="group relative max-w-7xl mx-auto">

      
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 transition duration-200 focus-within:duration-200 -z-10 focus-within:opacity-100"></div>

      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="px-4 py-4 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-start space-x-6 text-lg focus:outline-none focus:ring-0" 
        placeholder="Type to search..."
      />

      <FadeTransition fade_duration={50}>
        
      {showSuggestions && (
        <ul className="absolute w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto z-10  ">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={suggestion.text}
              onClick={() => handleSelectSuggestion(suggestion)}
              className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                index === highlightedIndex ? 'bg-blue-100' : ''
              }`}
            >
              {suggestion.text}
            </li>
          ))}
        </ul>
      )}


</FadeTransition>
    </div>
  );
};

export default AutocompleteInput;