const tablePixelsArray = [];
const pixelHeight = 8;
const pixelWidth = 8; 


start = () => { 
    createStructure();
    
    renderTable();
}

createStructure = () => {
    const numberOfPixels = pixelHeight * pixelWidth;

    for (let i = 0; i < numberOfPixels; i++){
        tablePixelsArray[i] = 0;
    }
}

renderTable = () => {
    let html = '<table cellpadding=0 cellspaceing=0>';


    for (let row = 0; row < pixelHeight; row++){
        html += '<tr>';

        for (let column = 0; column < pixelWidth; column++){
            const tableIndex = column + (pixelWidth * row);
            
            html += '<td>';
            if (row % 2 === 0) {
                if (column % 2 === 0) {
                    html += `<div class="casaPreta" id="casa">`;
                }
                else {
                    html += `<div class="casaBranca id="casa">`
                }
            }
            else if (row % 2 !== 0){
                if (column % 2 !== 0) {
                    html += `<div class="casaPreta id="casa">`;
                }
                else {
                    html += `<div class="casaBranca id="casa">`
                }
            }
            html += createPieces(row);
            html += '</td>';
        }

        html += '</tr>';
    }

    html += '</table>';

    document.querySelector('#table').innerHTML = html;
}

createPieces = (row) => {
    let pieces;

    if (row + 1 === 2) {
        pieces = '<div class="peao" id="peaoPreto"> ♟ </div>'
        return pieces;
    } else if (row + 1 === 7) {
        pieces = '<div class="peao" id="peaoBranco"> ♟ </div>'
        return pieces;
    }else {
        return '<div></div>';
    }

}



start()