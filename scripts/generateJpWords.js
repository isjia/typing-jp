const FS = require('fs');
const Mustache = require('mustache');
const wanakana = require('wanakana');

// 从指定词库取词, 路径 'public/dicts/Japanesebasicword_zh.json'
const importWords = require(`${__dirname}/../public/dicts/Japanesebasicword_zh.json`);

console.log('length: ', importWords.length);
const convertedWords = importWords.map((word) => {
    let label = word.notation.replace(/\(.*\)/, '');
    let text = word.name;
    if (wanakana.isHiragana(label)) {
        text = wanakana.toHiragana(text);
    } else if (wanakana.isKatakana(label)) {
        text = wanakana.toKatakana(text);
    } else {
        console.log('oops::: ', label);
        text = wanakana.toHiragana(text);
    }

    // let trans = '"' + word.trans.join('","') + '"';
    // trans.replaceAll('/', ';');
    const trans = word.trans.map((tran) => {
        return tran.replaceAll('/', '、');
    });
    const convertedWord = {
        text,
        trans,
        label,
    };
    // console.log(convertedWord);
    return convertedWord;
});
console.log('....converted....\n', convertedWords);

const wordsTemplate = `${__dirname}/../template/words-jp.mustache`;
const wordsFile = `${__dirname}/../src/words.ts`;

const readTempAndWriteFile = (template, filePath, tempObj = {}) => {
    const tpl = FS.readFileSync(template, { encoding: 'utf8' });
    const fileContent = Mustache.render(tpl, tempObj);

    const jsonFile = FS.createWriteStream(filePath, {
        flags: 'w',
        defaultEncoding: 'utf8',
    });
    jsonFile.write(fileContent);
    jsonFile.end();
};

readTempAndWriteFile(wordsTemplate, wordsFile, { convertedWords });

console.log(`words: ${convertedWords.length}`);
console.log('done.');
