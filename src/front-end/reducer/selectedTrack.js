const setTrack = (state = "nothing as of yet", action) => {
    switch (action.type) {
        case 'SET':
            return state + action.payload
        default:
            return state;
    }
}