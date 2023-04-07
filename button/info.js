import database_telegram from '../module/database_telegram.js';


export default async (client, Markup) => {

    client.action("info", async (ctx) => {

        let but_1 = [Markup.button.url('قروب أذكار المسلم 🌿', 'https://t.me/VVINL')];
        let but_2 = [Markup.button.callback('الرجوع للقائمة الرئيسية 🏠', 'start')];
        let button = Markup.inlineKeyboard([but_1, but_2]);
        let message = '- <b>#حول_البوت 🤖</b> \n\n\n'
        message += '- بوت إسلامي يقدم العديد من الخدمات التي يحتاجها المسلم في يومه \n\n'
        
        message += `- يمكن المساهمه في تطوير البوت عبر مساعدتنافي قيمة الاستضافة للتواصل معي <b><a href="https://t.me/GJQKP">حسابي</a></b> \n\n`
        message += `- يمكن التبليغ عن المشاكل او طلب مميزات عبر مراسلتي في المجموعة <b><a href="https://t.me/VVINL">الدعم</a></b>`

        await database_telegram({
            id: ctx?.chat?.id,
            username: ctx?.chat?.username,
            name: ctx?.chat?.first_name ? ctx?.chat?.first_name : ctx?.chat?.last_name ? ctx?.chat?.last_name : ctx?.chat?.title,
            type: ctx?.chat?.type,
            message_id: ctx?.message?.message_id
        });

        await ctx.reply(message, {
            parse_mode: 'HTML',
            reply_markup: button.reply_markup,
            disable_web_page_preview: true
        });
    });
}