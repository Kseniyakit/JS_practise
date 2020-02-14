/* const x = -5;
const y = 6; */

function getNumQuarter(x, y) {
    if ((x === null) || (x === NaN) || (x === undefined) || (y === null) || (y === NaN) || (y === undefined)) {
        return null;
    }
    if ((x > 0) && (y > 0)) {
        return "I четверть";
    };
    if ((x > 0) && (y < 0)) {
        return "II четверть";
    };
    if ((x < 0) && (y < 0)) {
        return "III четверть";
    };
    if ((x < 0) && (y > 0)) {
        return "IV четверть";
    };
}