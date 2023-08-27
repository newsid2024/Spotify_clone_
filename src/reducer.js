export const initialState = {
    user:null,
    playlists:[],
    discover_weekly: null,
    top_artists: null,
    playing:false,
    item: null,
    token:null,
    play_uri:"spotify:playlist:37i9dQZEVXcIdICMRECAXa",
    //enter your own discover weekly uri before production
}

export const reducer = (state , action) => {
    //console.log(action)
    //Action -> type, [payload]
    switch(action.type) {
        case 'SET_USER':
        //whenever there's a set_user reducer a new state where the user in the initial is set to user
            return {
           
                ...state, 
                user:action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token,
            }
        case 'SET_PLAYLISTS':
          return{
            ...state,
            playlists:action.playlists,
           
          }
          case 'SET_DISCOVER_WEEKLY':
            return{
              ...state,
              discover_weekly:action.discover_weekly,
            }
          case 'SET_TOP_ARTISTS':
            return{
              ...state,
              top_artists:action.top_artists,
            }
            case "SET_PLAYING":
              return {
                ...state,
                playing: action.playing,
              }
        
            case "SET_ITEM":
              return {
                ...state,
                item: action.item,
              }
            case "SET_PLAY_URI":
              return{
                ...state,
                play_uri:action.play_uri,
              }
        default:
            return state; //if nothing happens just returns state as it is
    }
   
}


