'use strict';

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

john.calcBMI();
mark.calcBMI();


console.log(`${john.bmi > mark.bmi ? john.fullName : mark.fullName}'s BMI (${john.bmi > mark.bmi ? john.bmi : mark.bmi}) is higher than ${john.bmi < mark.bmi ? john.fullName : mark.fullName}'s (${john.bmi < mark.bmi ? john.bmi : mark.bmi})!`);