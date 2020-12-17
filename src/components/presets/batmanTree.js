export function createBatmanTree(grid) {
    grid[0][20] = grid[0][24] = grid[1][20] = grid[1][24] = grid[2][20] = grid[2][24] = grid[2][21] = 'gray';
    grid[2][22] = grid[2][23] = grid[1][13] = grid[1][12] = grid[1][11] = grid[1][10] = grid[1][31] = 'gray';
    grid[1][32] = grid[1][33] = grid[1][34] = grid[2][13] = grid[2][31] = grid[3][14] = grid[4][15] = 'gray';
    grid[4][16] = grid[5][17] = grid[5][18] = grid[5][19] = grid[5][20] = grid[4][20]  = 'gray';
    grid[4][24] = grid[5][24] = grid[5][25] = grid[5][26] = grid[5][27] = grid[4][28] = 'gray';
    grid[4][29] = grid[3][30] = grid[2][31] = grid[2][9] = grid[2][8] = grid[2][7] = grid[3][6] = grid[4][5] = 'gray';
    grid[5][4] = grid[6][3] = grid[7][2] = grid[8][1] = grid[8][2] = grid[8][3] = grid[8][4] = grid[8][5] = 'gray';
    grid[9][6] = grid[9][7] = grid[10][8] = grid[10][9] = grid[11][10] = grid[12][11] = grid[12][12] = 'gray';
    grid[13][12] = grid[13][13] = grid[12][14] = grid[12][15] = grid[12][16] = grid[13][17] = grid[13][18] = 'gray';
    grid[14][19] = grid[15][19] = grid[16][20] = grid[17][21] = grid[18][21] = grid[19][22] = grid[12][13] = 'gray';
    grid[18][23] = grid[18][22] = grid[17][23] = grid[16][24] = grid[15][25] = grid[13][26] = grid[13][27] = 'gray';
    grid[14][25] = grid[11][34] = grid[10][35] = grid[10][36] = grid[9][37] = grid[9][38] = grid[8][39] = 'gray';
    grid[8][40] = grid[8][41] = grid[8][42] = grid[8][43] = grid[7][42] = grid[6][41] = grid[5][40] = grid[4][39] = 'gray';
    grid[3][38] = grid[2][37] = grid[2][36] = grid[2][35] = 'gray';
    grid[12][28] = grid[12][29] = grid[12][30] = grid[12][31] = grid[12][32] = grid[12][33] = grid[13][32] = 'gray';
    grid[13][31] = grid[3][11] = grid[3][33] = 'gray';
    for(let j = 8; j < 13; j++) grid[4][j] = 'gray';
    for(let j = 32; j < 37; j++) grid[4][j] = 'gray';
    for(let j = 31; j < 38; j++) grid[5][j] = 'gray';
    for(let j = 7; j < 14; j++) grid[5][j] = 'gray';
    for(let j = 29; j < 39; j++) grid[6][j] = 'gray';
    for(let j = 6; j < 16; j++) grid[6][j] = 'gray';
    for(let j = 7; j < 38; j++) grid[7][j] = 'gray';
    for(let j = 9; j < 36; j++) grid[8][j] = 'gray';
    for(let j = 11; j < 34; j++) grid[9][j] = 'gray';
    for(let j = 12; j < 33; j++) grid[10][j] = 'gray';
    for(let j = 18; j < 27; j++) grid[11][j] = 'gray';
    for(let j = 20; j < 25; j++) grid[12][j] = 'gray';
    for(let j = 21; j < 24; j++) grid[13][j] = 'gray';
    for(let j = 21; j < 24; j++) grid[14][j] = 'gray';
    grid[15][22] = grid[7][3] = grid[7][4] = grid[6][4] = grid[7][41] = grid[7][40] = grid[6][40] = 'gray';
    grid[3][22] = grid[4][22] = grid[5][22] = grid[6][22] = grid[17][22] = 'gray';
    
    grid[0][19] = 'green'; 
    grid[0][25] = 'red';
    
    return grid;
}