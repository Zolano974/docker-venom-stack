//                 i  j  
const KanoMatrix = [][]; // i => functionnal question, j => dysfunctionnal question
//cf https://www.justinmind.com/blog/kano-model-for-product-managers-beginners-guide/

/*                          DYSFUNCTIONAL
FUNCTIONAL                 like (5)     | must be (4)   | neutral (3)   | live with (1)     | dislike (0)
    like        (5)         Q           |      E        |    E          |     E             | L
    must be     (4)         R           |      I        |    I          |     I             | M
    neutral     (3)         R           |      I        |    I          |     I             | M
    live with   (2)         R           |      I        |    I          |     I             | M
    dislike     (1)         R           |      R        |    R          |     R             | Q
*/




/**
 *  M => musqthave
 *  L => linear
 *  E => exciter
 *  Q => questionnable
 *  I => indifferent
 *  R => reverse (incoherent)
 */

//1st line in kano matrix
KanoMatrix[1][1] = 'Q';
KanoMatrix[1][2] = 'E';
KanoMatrix[1][3] = 'E';
KanoMatrix[1][4] = 'E';
KanoMatrix[1][5] = 'L';

//2nd line
KanoMatrix[2][1] = 'R';
KanoMatrix[2][2] = 'I';
KanoMatrix[2][3] = 'I';
KanoMatrix[2][4] = 'I';
KanoMatrix[2][5] = 'M';

KanoMatrix[3][1] = 'R';
KanoMatrix[3][2] = 'I';
KanoMatrix[3][3] = 'I';
KanoMatrix[3][4] = 'I';
KanoMatrix[3][5] = 'M';

KanoMatrix[4][1] = 'R';
KanoMatrix[4][2] = 'I';
KanoMatrix[4][3] = 'I';
KanoMatrix[4][4] = 'I';
KanoMatrix[4][5] = 'M';

KanoMatrix[5][1] = 'R';
KanoMatrix[5][2] = 'R';
KanoMatrix[5][3] = 'R';
KanoMatrix[5][4] = 'R';
KanoMatrix[5][5] = 'Q';


module.exports = KanoMatrix