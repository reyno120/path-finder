export function createAvatarTree(grid) {

    for(let j = 18; j < 23; j++) grid[0][j] = 'gray';
    for(let j = 18; j < 23; j++) grid[1][j] = 'gray';
    for(let j = 18; j < 23; j++) grid[2][j] = 'gray';
    for(let j = 18; j < 23; j++) grid[3][j] = 'gray';
    for(let j = 18; j < 23; j++) grid[4][j] = 'gray';
    for(let j = 18; j < 23; j++) grid[5][j] = 'gray';
    for(let j = 14; j < 27; j++) grid[6][j] = 'gray';
    for(let j = 15; j < 26; j++) grid[7][j] = 'gray';
    for(let j = 16; j < 25; j++) grid[8][j] = 'gray';
    for(let j = 17; j < 24; j++) grid[9][j] = 'gray';
    for(let j = 18; j < 23; j++) grid[10][j] = 'gray';
    for(let j = 19; j < 22; j++) grid[11][j] = 'gray';
    grid[12][20] = 'gray';

    for(let j = 4; j < 14; j++) grid[20][j] = 'gray';
    for(let j = 27; j < 37; j++) grid[20][j] = 'gray';
    for(let j = 5; j < 13; j++) grid[19][j] = 'gray';
    for(let j = 28; j < 36; j++) grid[19][j] = 'gray';
    for(let j = 5; j < 13; j++) grid[18][j] = 'gray';
    for(let j = 28; j < 36; j++) grid[18][j] = 'gray';
    for(let j = 6; j < 12; j++) grid[17][j] = 'gray';
    for(let j = 29; j < 35; j++) grid[17][j] = 'gray';

    for(let j = 6; j < 14; j++) grid[15][j] = 'gray';
    for(let j = 27; j < 35; j++) grid[15][j] = 'gray';
    for(let j = 5; j < 12; j++) grid[14][j] = 'gray';
    for(let j = 29; j < 36; j++) grid[14][j] = 'gray';
    grid[16][12] = grid[16][13] = grid[16][14] = grid[17][13] = grid[17][14] = 'gray';
    grid[16][26] = grid[16][27] = grid[16][28] = grid[17][26] = grid[17][27] = 'gray';

    for(let i = 1; i < 10; i++) grid[i][19] = 'white';
    grid[9][20] = 'white';
    for(let i = 1; i < 10; i++) grid[i][21] = 'white';

    grid[12][0] = grid[11][1] = grid[10][1] = grid[9][1] = grid[8][1] = grid[7][2] = grid[6][2] = grid[5][2] = grid[4][2] = 'gray';
    grid[3][3] = grid[2][4] = grid[1][5] = grid[0][6] = 'gray';
    grid[0][36] = grid[1][37] = grid[2][37] = grid[3][37] = grid[4][38] = grid[5][39] = grid[6][39] = grid[7][39] = 'gray';
    grid[8][39] = grid[9][40] = grid[10][40] = grid[11][41] = grid[12][41] = 'gray';
    for(let i = 13; i < 20; i++) grid[i][42] = 'gray';
    grid[20][41] = 'gray';

    grid[0][19] = 'green';
    grid[0][21] = 'red';

    return grid;
}