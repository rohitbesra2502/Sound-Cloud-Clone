import { createContext, useState, useRef, useEffect } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
    const[value,setValue] = useState(); //user
    const [allSongs, setAllSongs] = useState([]);  //all songs
    const [allAlbums, setAllAlbums] = useState([]);  //all albums
    const [releaseData , setReleaseData] = useState([]);  //realease data
    const [songList , setSongList] = useState([]);  //songlists
    const [clickedOneSong , setClickedOneSong] = useState({}); //one song by click
    const [likedSong , setLikedSong] = useState([]) // like song
    const [input,setInput] =  useState(""); // input value from search 
    const [songId , setSongId] = useState(null);  //songId
    
    // {music data}
    useEffect(() => {
        fetch('https://academics.newtonschool.co/api/v1/music/song', {
        headers: {
                'projectId': '8nbih316dv01'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setAllSongs(data.data);
            // Handle the data from the API response
            // console.log(data);
        })
        .catch(error => {
            // Handle errors
            console.error('There was a problem with the fetch operation:', error);
        });
    },[]);

    // {albums data} 
        useEffect(() => {
        fetch('https://academics.newtonschool.co/api/v1/music/album', {
            headers: {
                'projectId': '8nbih316dv01'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setAllAlbums(data.data);
            // Handle the data from the API response
            // console.log(data);
        })
        .catch(error => {
            // Handle errors
            console.error('There was a problem with the fetch operation:', error);
        });
    },[])
    
    // { realease data increasing}
    useEffect(() => {
        // fetch('https://academics.newtonschool.co/api/v1/music/song?page=16&limit=10', {
        fetch('https://academics.newtonschool.co/api/v1/music/song?sort={"release":1}', {
        headers: {
            'projectId': '8nbih316dv01'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setReleaseData(data.data);
            // Handle the data from the API response
            // console.log(data);
        })
        .catch(error => {
            // Handle errors
            console.error('There was a problem with the fetch operation:', error);
        });
    },[]);

    // console.log(allSongs);
    return (
        <MyContext.Provider
            value={{
                value,
                setValue,
                allSongs,
                allAlbums,
                releaseData,
                setSongList,
                songList,
                clickedOneSong,
                setClickedOneSong,
                likedSong,
                setLikedSong,
                songId,
                setSongId,
                input,
                setInput,
            }}
        >
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
