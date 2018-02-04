'use strict';

QUnit.module('Тестируем функцию solve', function () {
	QUnit.test('solve работает правильно ', function (assert) {
		assert.strictEqual(solve('x + 1', 1), 2);
		assert.strictEqual(solve('2 + x - 1', 5), 6);
		assert.strictEqual(solve('2 * x - 1', 5), 9);
		assert.strictEqual(solve('2 * ( x - 1 )', 5), 8);
		assert.strictEqual(solve('(5 - x) * (x + 5)', 3), 16);
		assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);
	});

	QUnit.test('Проверка solve на длинном выражении ', function (assert) {
        	assert.strictEqual(solve('10 * x * x + 12 - x + (x + x * 100) - 20 * (x + 13)', 8), 1032);
        	assert.strictEqual(solve('x * x * x * x + x * x * x + x * x + x - 123', 2), -93);
        	assert.strictEqual(solve('10233 + x + 12 * x + (x + (x + 1234 * x) * 2) - 2 * x + x * (89 + x)', 3), 17955);
    })
});
