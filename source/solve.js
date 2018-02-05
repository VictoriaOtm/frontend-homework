'use strict';

const solve = (expression, x) => {
    const regExp = /[^(\d\s-\*\+\(\)x)*]/;

    if (!regExp.test(expression)) {
        try {
            return eval(expression);
        } catch (_) {}
    }
}