
 var convert = function(s, numRows) {
    if(numRows <= 1){
        return s;
    }
    const numpositions= (numRows-1)*2;
    let topEnd = 0;
    let row = 0;
    let numMid = 0;
    let out = '';
    let pos = 0;
    while(s[topEnd]){
        out += s[topEnd];
        topEnd += numpositions;
    }
    row++;
    topEnd = 0;
    while(row < numRows - 1 ){
        pos = row;
        numMid= numpositions - row *2;
        while(s[pos]){
            if(s[pos]){
            out += s[pos]
            }
            pos += numMid;
            if(s[pos]){
                out += s[pos];
                pos += (numpositions - numMid);
            }
        }
        row++;
    }
    while(s[row + topEnd]){
        out += s[row + topEnd];
        topEnd += numpositions;
    }
return out;
};
console.log(convert("A", 1))