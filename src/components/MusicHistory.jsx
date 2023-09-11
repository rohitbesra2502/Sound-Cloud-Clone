import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext';

const MusicHistory = () => {
    const{songList,setSongList} = useContext(MyContext);
    // console.log(songList);

    const handleHistoryBtn = (data) => {
        console.log(data);
        setSongList([ ...songList,data]);
    }
    return (
        <div>
            {songList.map((data)=>(
                <div key={data.id} className='selectedDataDiv' style={{
                    display:"flex",
                    justifyContent:"start",
                    justifyItems:"center",
                    textAlign:"center",
                    padding:"4px 6px",
                    width:"100%",
                    // border:"1px solid red",
                    cursor:"pointer",
                }}
                onClick={() => handleHistoryBtn(data)}
                >
                <img src={data.thumbnail} style={{width:"50px"}}/>
                <div style={{
                    // paddingLeft:"10px",
                    // border:"1px solid red",
                    display:"flex",
                    // flexDirection:"column",
                    justifyContent:"space-between",
                    alignItems:"center",
                    gap:"10px",
                    width:"100%",
                }}>
                    <h4 style={{paddingLeft:"10px" , fontSize:"12px"}}>{data.title}</h4>
                    <h5 style={{ fontSize:"12px"}}>({data.artist[0].name})</h5>
                </div>
            </div>  
            ))}
        </div>
    )
}

export default MusicHistory;