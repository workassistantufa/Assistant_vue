const fs = require('fs');

/**
 * route module.
 * @module routes
 */
module.exports.get_main = async (ctx) => {
    //Читаем информацию из файла
    const html = await fs.promises.readFile("./html/index.html");
    //console.log(html.toString());
    ctx.body = html.toString();
};

module.exports.get_docJournal = async (ctx) => {
    //Читаем информацию из файла
    const html = await fs.promises.readFile("./html/doc.html");
    //console.log(html.toString());
    ctx.body = html.toString();
};

module.exports.get_dicJournal = async (ctx) => {
    //Читаем информацию из файла
    const html = await fs.promises.readFile("./html/dicJournal.html");
    //console.log(html.toString());
    ctx.body = html.toString();
};

module.exports.get_dic = async (ctx) => {
    console.log('ctx.params=', ctx.params);
    //Принимаем название документа/таблицы в виде переменной docID
    const tableID = ctx.params.tableID;
    //Принимаем id документа/таблицы в виде переменной id
    const id = ctx.params.id;

    //Читаем информацию из файла
    const html = await fs.promises.readFile("./html/dic.html");
    //console.log(html.toString());
    ctx.body = html.toString();
};

module.exports.get_dicConstuctor = async (ctx) => {
    //Читаем информацию из файла
    const html = await fs.promises.readFile("./html/dicConstuctorJournal.html");
    //console.log(html.toString());
    ctx.body = html.toString();
};

module.exports.get_dicConstuctor_id = async (ctx) => {
    //Считываем id выбранной
    const id = ctx.params.id;
    const html = await fs.promises.readFile("./html/dicConstuctor.html");
    //console.log(html.toString());
    ctx.body = html.toString();
};