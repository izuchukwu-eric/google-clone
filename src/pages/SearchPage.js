import React from 'react';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import './SearchPage.css';
import Response from '../Response';
import { Link } from 'react-router-dom';
import Google from "../img/googlelogo.png";
import Search from '../components/Search';
import SearchIcon from "@material-ui/icons/Search";
import YouTubeIcon from '@material-ui/icons/YouTube';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();

    //LIVE API KEY
    const { data } = useGoogleSearch(term);

    //MOCK API CALL
   // const data = Response;

    console.log(data);

    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <Link to="/">
                    <img className="searchPage_logo" src={Google} alt="" />
                </Link>

                <div className="searchPage_headerBody">
                    <Search hideButtons />

                    <div className="searchPage_options">
                        <div className="searchPage_optionsLeft">
                            <div className="searchPage_option">
                                <SearchIcon />
                                <Link to="/">All</Link>
                            </div>
                            <div className="searchPage_option">
                                <YouTubeIcon />
                                <Link to="/">Video</Link>
                            </div>
                             <div className="searchPage_option">
                                <ImageOutlinedIcon />
                                <Link to="/">Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <ListAltOutlinedIcon />
                                <Link to="/">News</Link>
                            </div>
                            <div className="searchPage_option">
                                <BookOutlinedIcon />
                                <Link to="/">Book</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVertOutlinedIcon />
                                <Link to="/">more</Link>
                            </div>
                        </div>
                        <div className="searchPage_optionsRight">
                            <div className="searchPage_option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage_option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  

            {term && (
                <div className="searchPage_results">

                    <p className="searchPage_resultCount">
                        About {data?.searchInformation.formattedTotalResults} results 
                        ({data?.searchInformation.formattedSearchTime} seconds) for {term} 
                    </p>

                    {data?.items.map(item => (
                        <div className="searchPage_result">
                            <a className="searchPage_link" href={item.link}>

                                {item.pagemap?.cse_image?.
                                length > 0 &&
                                item.pagemap?.cse_image[0]?.src && (
                                    <img
                                        className="searchPage_resultImage"
                                        src={
                                            item.pagemap?.
                                            cse_image[0]?.src
                                        }
                                        alt=""
                                    />
                                )}

                                {item.displayLink} <ArrowDropDownIcon />
                            </a>
                            <a className="searchPage_resultTitle" href={item.link}>
                                <span>{item.title}</span>
                            </a>
                            <p className="searchPage_resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchPage;
