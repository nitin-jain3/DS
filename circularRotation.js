const matrix = [[4,1,6,8], [3,9,2,7], [8,2,5,6], [7,3,9,1]];
let m = 4;

// function circularRotate(matrix, m) {
//     let a = 0, b=0;
//     while (a < m  && b < m) {
//         for (let i =0; i<m; i++) {
//             console.log(matrix[a][i]);
//         }
//         a++;
//         for (let i =a; i<=m-1; i++) {
//             console.log(matrix[i][m-1]);
//         }
//         for (let i = m-2; i >= 0; i--) {
//             console.log(matrix[m-1][i]);
//         }
//         m--;
//         for (let i = m -1; i >=1; i--) {
//             console.log(matrix[i][b]);
//         }
//         a++;
//         for (let i = 1; i<m; i++ ) {
//             console.log(matrix[a][i]);
//         }
//         a++;
//         for (let i = a; i>=1; i-- ) {
//             console.log(matrix[a][i]);
//         }
//    }
// }

function traverseRight(matrix, i, j, m) {
    for (j; j < m; j++) {
        console.log(matrix[i][j])
    }
}

function traverseBottom(matrix, i, j, m) {
    for (let b = 1; b < m; b++) {
        console.log(matrix[b][j])
    }
}

function traverseBottom(matrix, i, j, m) {
    for (let b = 1; b < m; b++) {
        console.log(matrix[b][m-1])
    }
}

function traverseLeft(matrix, i, j, m) {
    for (let c = m-2; c>=0; c--) {
        console.log(matrix[m-1][c])
    }
}

function traverseUp(matrix, i,j,m) {
    for(let d = m-1; d>0; d--) {
        console.log(matrix[d][i])
    }
}

function circularRotate(matrix, m) {
    let i = 0, j = 0;
    while (i < m && j < m) {
        traverseRight(matrix, i, j, m);
        j++;
        traverseBottom(matrix, i, j, m);
        traverseLeft(matrix, i, j, m);
        m--;
        traverseUp(matrix, i,j,m);
        i++;
    }
}

circularRotate(matrix, m);