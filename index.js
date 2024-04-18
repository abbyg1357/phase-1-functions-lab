const hq = 42;
function distanceFromHqInBlocks(block) {
    if (block > hq) {
        return block - hq;
    }
    else {
        return hq - block;
    }
}

function distanceFromHqInFeet(block) {
    distanceFromHqInBlocks(block)
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, end) {
    const lengthInFeet = 264;
    if(start > end) {
        return (start - end) * lengthInFeet;
    } 
    else {
        return (end - start) * lengthInFeet;
    }
};

function calculatesFarePrice(start, end) {
    const distance = distanceTravelledInFeet(start, end)
    if (distance < 400) {
        return 0;
    }
    else if ((distance > 400) && (distance <= 2000)) {
        return ((distance - 400) * 0.02);
    }
    else if ((distance > 2000) && (distance <= 2500)) {
        return 25;
    }

    else {
        return 'cannot travel that far'
    }
}