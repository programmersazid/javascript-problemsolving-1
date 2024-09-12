function checkDigitsInName(name) {
    if( typeof name !== "string"){
        return "Invalid Input";
    }
    else{
        for (i= 1; i < name.length; i++){
            if( isNaN(name[i])){
                return true;
            }
            else{
                return false;
            }
        }
    }
}

