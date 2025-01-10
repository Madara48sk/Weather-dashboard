import { useState } from 'react';

    function SearchBar({ onSearch }) {
        const [cityInput, setCityInput] = useState('');

        const handleSubmit = (event) => {
            event.preventDefault();
            onSearch(cityInput);
            setCityInput('');
        };

        return (
            <header>
             <form onSubmit={handleSubmit}>
                <input
                   type="text"
                    autoComplete="off"
                    className="search-box"
                    placeholder="Search for a city..."
                    value={cityInput}
                    onChange={(e) => setCityInput(e.target.value)}
                   required
                />
             </form>
            </header>
        );
    }

    export default SearchBar;