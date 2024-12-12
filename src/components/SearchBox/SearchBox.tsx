import React, {useState} from 'react';

interface SearchProps {
    onSearch: (query: string) => void;
}

const SearchBox: React.FC<searchProps> = ({onSearch}) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    }

    return (
        <div className="mb-6">
            <input
                type="text"
                placeholder="Search todos..."
                className="w-full px-4 py-2 border rounded"
                value={query}
                onChange={handleInputChange}
            />
        </div>
    )
};
export default SearchBox;

