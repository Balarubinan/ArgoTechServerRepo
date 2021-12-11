var Current_object=null
var navigate=null
function set_cur_obj(val){
    if(typeof val==typeof ""){
        Current_object=val
    }
    else{
        throw new Error("Non string value given for cur_obj")
    }
}
function get_cur_obj(){
    return Current_object
}
function set_navig(navig){
    navigate=navig
}
function get_navig(){
    return navigate
}
module.exports={
    set_obj:set_cur_obj,
    get_obj:get_cur_obj,
    set_nav:set_navig,
    get_nav:get_navig
}