var player_data = {
    coins:0
}

function navigate(url){
    window.location.href = url
}

function get_data(){
    return player_data
}

function save_data(data){
    player_data=data
}
