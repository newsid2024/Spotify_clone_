import React from 'react'
import { PlayCircleFilled } from '@material-ui/icons'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import { useDataLayerValue } from '../DataLayer'
import { Header } from './Header'
import {SongRow } from './SongRow'
import "./styles/Body.css"

export const Body = ({spotify}) => {
    const [{discover_weekly} , dispatch] = useDataLayerValue()
    //console.log(discover_weekly)
    const playPlaylist = (id) => {
        dispatch({
            type: "SET_PLAYING",
            playing: true,
          })
          dispatch({
            type: "SET_PLAY_URI",
            play_uri: "spotify:playlist:37i9dQZEVXcJZyENOWUFo7",
          })
          spotify.getMyCurrentPlayingTrack().then((r) => {
            dispatch({
              type: "SET_ITEM",
              item: r.item,
            })
          })
        }
      
    return (
        <div className="body">
            <Header spotify/>
            <div className="body_info">
                <img src={"https://imgs.search.brave.com/ot3GZ-kUzDUlNOSjtoL1qTg_SZQyibC-px1k6KkCr1o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2EwL1RoZV9XZWVr/bmRfUG9ydHJhaXRf/YnlfQnJpYW5fWmlm/Zi5qcGc"} alt="banner"></img>
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            
            </div>
            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilled 
                        className="body_shuffle"
                        onClick={playPlaylist}
                    />

                    <FavoriteBorderIcon fontSize="large" />
                    <MoreHorizIcon/>
                </div>
                {discover_weekly?.tracks.items.map(item=> <SongRow key={item.track.name}  track={item.track}/>)}
            </div>
        </div>
    )
}