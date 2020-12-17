export function createChristmasTree(grid) {

    grid[0][4] = grid[1][3] = grid[1][4] = grid[1][5] = grid[2][4] = grid[3][1] = grid[4][0] = grid[4][1] = grid[5][1] = grid[4][2] = 'gray';
    grid[4][3] = grid[4][4] = grid[4][5] = grid[4][6] = grid[4][7] = grid[4][8] = grid[5][4] = grid[6][4] = grid[7][4] = grid[8][4] = 'gray';
    grid[7][3] = grid[7][5] = grid[3][7] = grid[5][7] = 'gray';

    grid[17][5] = grid[17][6] = grid[17][7] = grid[18][4] = grid[18][5] = grid[18][6] = grid[18][7] = grid[18][8] = grid[19][4] = 'gray';
    grid[19][5] = grid[19][6] = grid[19][7] = grid[19][8] = grid[20][4] = grid[20][5] = grid[20][6] = grid[20][7] = grid[20][8] = 'gray';

    grid[0][23] = grid[1][22] = grid[1][24] = grid[2][21] = grid[3][20] = grid[3][26] = grid[4][19] = grid[4][20] = grid[4][21] = 'gray';
    grid[4][25] = grid[4][26] = grid[4][27] = grid[5][21] = grid[5][25] = grid[6][21] = grid[6][25] = grid[7][20] = grid[7][26] = 'gray';
    grid[9][18] = grid[9][26] = grid[9][27] = grid[8][19] = grid[9][19] = grid[9][20] = grid[9][21] = grid[9][25] = grid[8][27] = 'gray';
    grid[9][28] = grid[3][23] = grid[4][23] = grid[5][23] = grid[6][23] = grid[7][23] = grid[8][23] = grid[9][23] = grid[10][23] = 'gray';
    grid[1][23] = grid[2][25] = grid[8][20] = grid[8][21] = grid[7][21] = grid[8][25] = grid[8][26] = grid[7][25] = grid[3][21] = 'gray';
    grid[3][25] = 'gray';
    grid[11][23] = grid[12][23] = grid[13][23] = grid[14][23] = grid[15][23] = grid[16][23] = grid[17][23] = grid[18][23] = 'gray';
    grid[19][23] = grid[20][23] = grid[13][22] = grid[13][24] = grid[14][22] = grid[14][21] = grid[14][24] = grid[14][25] = 'gray';
    grid[10][21] = grid[10][25] = grid[11][21] = grid[11][25] = grid[12][20] = grid[13][19] = grid[14][18] = grid[15][17] = 'gray';
    grid[16][16] = grid[12][26] = grid[13][27] = grid[14][28] = grid[15][29] = grid[16][30] = grid[16][17] = grid[16][19] = 'gray';
    grid[16][18] = grid[15][18] = grid[15][19] = grid[14][19] = grid[15][28] = grid[15][27] = grid[14][27] = 'gray';
    grid[16][20] = grid[16][21] = grid[16][25] = grid[16][26] = grid[16][27] = grid[16][28] = grid[16][29] = grid[17][16] = 'gray';
    grid[17][30] = grid[17][21] = grid[17][25] = grid[18][15] = grid[18][16] = grid[18][17] = grid[18][21] = grid[18][25] = 'gray';
    grid[18][29] = grid[18][30] = grid[18][31] = grid[19][15] = grid[19][16] = grid[19][17] = grid[19][21] = grid[19][25] = 'gray';
    grid[19][29] = grid[19][30] = grid[19][31] = 'gray';

    grid[0][39] = grid[1][39] = grid[2][39] = grid[3][39] = grid[4][39] = grid[5][39] = grid[6][39] = grid[7][39] = grid[8][39] = 'gray';
    grid[1][38] = grid[1][40] = grid[4][40] = grid[4][41] = grid[4][42] = grid[4][43] = grid[3][42] = grid[5][42] = 'gray';
    grid[4][38] = grid[4][37] = grid[4][36] = grid[4][35] = grid[3][36] = grid[5][36] = grid[7][40] = grid[7][38] = 'gray';

    grid[17][39] = grid[17][38] = grid[17][37] = grid[18][40] = grid[18][39] = grid[18][38] = grid[18][37] = grid[18][36] = 'gray';
    grid[19][40] = grid[19][39] = grid[19][38] = grid[19][37] = grid[19][36] = 'gray';
    grid[20][40] = grid[20][39] = grid[20][38] = grid[20][37] = grid[20][36] = grid[3][4] = 'gray';

    grid[19][16] = 'green';
    grid[19][30] = 'red';
    
    return grid;
}