let start_game = window.onload = (function add_id() {

    var get_div_id = document.getElementById("add_data").querySelectorAll("input");
    for (let i = 0; i < get_div_id.length; i++) {
        get_div_id[i].setAttribute("id", i);

    }
});
// console.log(all_id)

let add_class_plyer1;
let add_class_plyer2;
function player_1(play) {
    // y=x;
    if (play == true) {
        let turn_player1 = add_class_plyer1.setAttribute("class", "X_class");

        return turn_player1;
    }
}
// --------------------------------------------------------------------
function player_2(play2) {
    if (play2 == true) {
        let turn_player2 = add_class_plyer2.setAttribute("class", "O_class");

        return turn_player2;
    }
}
let numbers_cheak = 0;
var num_id
var inp_val_global;
// ------------------------------------------------------------
var o;
var x;

function get_val(inp_val) {
    numbers_cheak += 1;
    inp_val_global = inp_val;
    num_id = inp_val.id;
    add_class_plyer1 = document.getElementById(num_id);
    add_class_plyer2 = document.getElementById(num_id);
    let get_class = add_class_plyer1.className
    var val_of_odd = isOdd(numbers_cheak);
    var get_div_id_c = document.getElementById("add_data").querySelectorAll("input");
for(var e=0; e<get_div_id_c.length;e++){
    
    o = get_div_id_c[e].classList.contains("winner_o");
    
    x = get_div_id_c[e].classList.contains("winner_x");
        if(x == true||o == true){
    break;
}
}
//   let t =  get_div_id_c[0].setAttribute("class", "winner_x");

    if (get_class == "" && x == false && o == false ){

        if (val_of_odd == 1) {

            player_1(true);


        }
        if (val_of_odd == 0) {
            player_2(true);
        }

    }

    win(num_id);
}

function isOdd(num) {
    return num % 2;


}

function win(id_number_f_check_winner) {
    var All_id = document.getElementById("add_data").querySelectorAll("input");
    var arr_push_val_x = [];
    var arr_push_val_o = [];
    var arr_cheak_class_x;
    var arr_cheak_class_o;
    for (x = 0; x < All_id.length; x++) {


        arr_cheak_class_x = All_id[x].classList.contains("X_class");
        arr_cheak_class_o = All_id[x].classList.contains("O_class");
        arr_push_val_x.push(arr_cheak_class_x);
        arr_push_val_o.push(arr_cheak_class_o);
    }
if (arr_push_val_x[0] && arr_push_val_x[1] && arr_push_val_x[2] == true ) {
        
            All_id[0].setAttribute("class", "winner_x");
            All_id[1].setAttribute("class", "winner_x");
            All_id[2].setAttribute("class", "winner_x");
            let x_P=    document.getElementById('player_stats1').style.display='block';
            winner_count_player_1(1);

        }
    if (arr_push_val_x[3] && arr_push_val_x[4] && arr_push_val_x[5] == true ) {
        
            All_id[3].setAttribute("class", "winner_x");
            All_id[4].setAttribute("class", "winner_x");
            All_id[5].setAttribute("class", "winner_x");
            let x_P=    document.getElementById('player_stats1').style.display='block';
            winner_count_player_1(1)


        }
    if (arr_push_val_x[6] && arr_push_val_x[7] && arr_push_val_x[8] == true ) {
        
            All_id[6].setAttribute("class", "winner_x");
            All_id[7].setAttribute("class", "winner_x");
            All_id[8].setAttribute("class", "winner_x");
            let x_P=    document.getElementById('player_stats1').style.display='block';
            winner_count_player_1(1)


        }

    if (arr_push_val_x[0] && arr_push_val_x[3] && arr_push_val_x[6] == true ) {
        
            All_id[0].setAttribute("class", "winner_x");
            All_id[3].setAttribute("class", "winner_x");
            All_id[6].setAttribute("class", "winner_x");
            let x_P=    document.getElementById('player_stats1').style.display='block';

            winner_count_player_1(1)

        }
    if (arr_push_val_x[1] && arr_push_val_x[4] && arr_push_val_x[7] == true ) {
        
            All_id[1].setAttribute("class", "winner_x");
            All_id[4].setAttribute("class", "winner_x");
            All_id[7].setAttribute("class", "winner_x");
            let x_P=    document.getElementById('player_stats1').style.display='block';

            winner_count_player_1(1)

        }
    if (arr_push_val_x[2] && arr_push_val_x[5] && arr_push_val_x[8] == true ) {
        
            All_id[2].setAttribute("class", "winner_x");
            All_id[5].setAttribute("class", "winner_x");
            All_id[8].setAttribute("class", "winner_x");
            let x_P=    document.getElementById('player_stats1').style.display='block';

            winner_count_player_1(1)

        }
 // 0 1 2
 // 3 4 5
 // 6 7 8
 if (arr_push_val_x[2] && arr_push_val_x[4] && arr_push_val_x[6] == true ) {
        
    All_id[2].setAttribute("class", "winner_x");
    All_id[4].setAttribute("class", "winner_x");
    All_id[6].setAttribute("class", "winner_x");
    let x_P=    document.getElementById('player_stats1').style.display='block';
    winner_count_player_1(1)


}
if (arr_push_val_x[0] && arr_push_val_x[4] && arr_push_val_x[8] == true ) {
        
    All_id[0].setAttribute("class", "winner_x");
    All_id[4].setAttribute("class", "winner_x");
    All_id[8].setAttribute("class", "winner_x");
    let x_P=    document.getElementById('player_stats1').style.display='block';
    winner_count_player_1(1);

}
if (arr_push_val_o[0] && arr_push_val_o[1] && arr_push_val_o[2] == true ) {
        
            All_id[0].setAttribute("class", "winner_o");
            All_id[1].setAttribute("class", "winner_o");
            All_id[2].setAttribute("class", "winner_o");
    let o_p=    document.getElementById('player_stats2').style.display='block';
    winner_count_player_2(1);


        }
    if (arr_push_val_o[3] && arr_push_val_o[4] && arr_push_val_o[5] == true ) {
        
            All_id[3].setAttribute("class", "winner_o");
            All_id[4].setAttribute("class", "winner_o");
            All_id[5].setAttribute("class", "winner_o");
    let o_p=    document.getElementById('player_stats2').style.display='block';
    winner_count_player_2(1);


        }
    if (arr_push_val_o[6] && arr_push_val_o[7] && arr_push_val_o[8] == true ) {
        
            All_id[6].setAttribute("class", "winner_o");
            All_id[7].setAttribute("class", "winner_o");
            All_id[8].setAttribute("class", "winner_o");
            let o_p=    document.getElementById('player_stats2').style.display='block';
            winner_count_player_2(1);

        }

    if (arr_push_val_o[0] && arr_push_val_o[3] && arr_push_val_o[6] == true ) {
        
            All_id[0].setAttribute("class", "winner_o");
            All_id[3].setAttribute("class", "winner_o");
            All_id[6].setAttribute("class", "winner_o");
    let o_p=    document.getElementById('player_stats2').style.display='block';
    winner_count_player_2(1);


        }
    if (arr_push_val_o[1] && arr_push_val_o[4] && arr_push_val_o[7] == true ) {
        
            All_id[1].setAttribute("class", "winner_o");
            All_id[4].setAttribute("class", "winner_o");
            All_id[7].setAttribute("class", "winner_o");
            let o_p=    document.getElementById('player_stats2').style.display='block';
            winner_count_player_2(1);

        }
    if (arr_push_val_o[2] && arr_push_val_o[5] && arr_push_val_o[8] == true ) {
        
            All_id[2].setAttribute("class", "winner_o");
            All_id[5].setAttribute("class", "winner_o");
            All_id[8].setAttribute("class", "winner_o");
    let o_p=    document.getElementById('player_stats2').style.display='block';
    winner_count_player_2(1);


        }
 // 0 1 2
 // 3 4 5
 // 6 7 8
 if (arr_push_val_o[2] && arr_push_val_o[4] && arr_push_val_o[6] == true ) {
        
    All_id[2].setAttribute("class", "winner_o");
    All_id[4].setAttribute("class", "winner_o");
    All_id[6].setAttribute("class", "winner_o");
    let o_p=    document.getElementById('player_stats2').style.display='block';
    winner_count_player_2(1);


}
if (arr_push_val_o[0] && arr_push_val_o[4] && arr_push_val_o[8] == true ) {
        
    All_id[0].setAttribute("class", "winner_o");
    All_id[4].setAttribute("class", "winner_o");
    All_id[8].setAttribute("class", "winner_o");
    let o_p=    document.getElementById('player_stats2').style.display='block';

    winner_count_player_2(1);

}

    }


var    player_1_count=0;
  var  player_2_count=0;     //   <<<<<<<<<<<<<<
function winner_count_player_1(point){

  player_1_count=   player_1_count + point
document.getElementById('player_1_point').value=player_1_count;

}
function winner_count_player_2(point){
    player_2_count=   player_2_count + point

document.getElementById('player_2_point').value= player_2_count;
    


}

function newGame(){
    var get_div_id = document.getElementById("add_data").querySelectorAll("input");
    for (let i = 0; i < get_div_id.length; i++) {
        get_div_id[i].removeAttribute("class");

    }
    document.getElementById('player_stats1').style.display='none';
    document.getElementById('player_stats2').style.display='none';

}

