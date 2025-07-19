const { add, multiply, subtract } = require('./math');

console.log('🚀 CI/CDテストアプリケーション開始!');

// 計算のテスト
const a = 10;
const b = 5;

console.log(`${a} + ${b} = ${add(a, b)}`);
console.log(`${a} - ${b} = ${subtract(a, b)}`);
console.log(`${a} * ${b} = ${multiply(a, b)}`);

// PRワークフローテストのためのコメント
console.log('📝 GitHub Actions PRワークフローをテスト中...');

console.log('✅ アプリケーション正常終了');

module.exports = { add, multiply, subtract }; 