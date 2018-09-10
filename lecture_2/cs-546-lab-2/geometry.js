
function checkIsProperNumber(val, variableName){
    if (val === undefined || typeof val !== "number") {
        throw `${variableName || "provided variable"} is not a number`;
    };

    if (isNaN(val)) {
        throw `${variableName || "provided variable"} is NaN`;
    };

    if (val <= 0){
        throw `${variableName || "provided variable"} is less or equal to 0`;
    }
}


module.exports = {
    volumeOfRectangularPrism: (length, width, height) => {
        checkIsProperNumber(length, "length");
        checkIsProperNumber(width, "width");
        checkIsProperNumber(height, "height");
        
        return length * width * height;
    },
    surfaceAreaOfRectangularPrism: (length, width, height)=> {
        checkIsProperNumber(length, "length");
        checkIsProperNumber(width, "width");
        checkIsProperNumber(height, "height");
        
        return 2 * (length * width + width * height + height * length);
    },
    volumeOfSphere: (radius) => {
        checkIsProperNumber(radius,"radius");

        return 4 * Math.PI * Math.pow(radius, 3) / 3;
    },
    surfaceAreaOfSphere: (radius) => {
        checkIsProperNumber(radius,"radius");

        return 4 * Math.PI * Math.pow(radius, 2);
    }
}

