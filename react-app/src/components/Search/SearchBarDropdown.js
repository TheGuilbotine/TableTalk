import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { search } from '../../store/search';
import './SearchBar.css';

export default function SearchBarDropdown({ setShowModal }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState('');
    const [results, setResults] = useState([]);

    const handleLink = async (e, id) => {
        e.preventDefault();
        await history.push(`/restaurant/${id}`)
        await setShowModal(false)
    };

    useEffect(() => {
        async function searchOnChange() {
            const searchResults = await dispatch(search(searchString));
            if ("results" in searchResults) {
                setResults(searchResults.results.slice(0, 10));
            } else {
                setResults([]);
            }
        }

        if (searchString.length !== 0) {
            searchOnChange();
        } else {
            setResults([]);
        }
    }, [dispatch, searchString])

    return (
        <>
        <div className="search-dropdown__container">
            <input
                className="navbar-search__input"
                value={searchString}
                type='text'
                placeholder='Search Restaurants'
                name='search'
                id='search'
                onChange={(e) => setSearchString(e.target.value)}
                autoComplete='off'
                autoFocus
            />
            <i className={"fas fa-search"}></i>
        </div>
        <div className="search-results__container">
            <ul>
                { results.length > 0 && results.map(result => (
                    <li
                        key={result.id}
                        className="search__link"
                    >
                        <a className="question-link" onClick={(e)=>handleLink(e, result?.id)}>{result.question}</a>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
};
