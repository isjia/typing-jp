// auto generate jp words
export interface Word {
    label: string;
    text: string;
    trans: string;
}
const defaultWords: Word[] = [
    {
        label: 'おはようございます',
        text: 'おはようございます',
        trans: '早上好,早',
    },
    {
        label: 'こんにちは',
        text: 'こんにちは',
        trans: '你好、下午好',
    },
    {
        label: 'こんばんは',
        text: 'こんばんは',
        trans: '晚上好',
    },
    {
        label: 'おやすみなさい',
        text: 'おやすみなさい',
        trans: '晚安',
    },
    {
        label: 'ありがとうございます',
        text: 'ありがとうございます',
        trans: '谢谢',
    },
    {
        label: 'すみません',
        text: 'すみません',
        trans: '对不起、对不起',
    },
    {
        label: 'ごめんなさい',
        text: 'ごめんなさい',
        trans: '不好意思',
    },
    {
        label: 'はい',
        text: 'はい',
        trans: '是的',
    },
    {
        label: 'いいえ',
        text: 'いいえ',
        trans: '不',
    },
    {
        label: 'わたし',
        text: 'わたし',
        trans: '我、我',
    },
    {
        label: 'あなた',
        text: 'あなた',
        trans: '你',
    },
    {
        label: 'お母さん',
        text: 'おかあさん',
        trans: '妈妈',
    },
    {
        label: 'お父さん',
        text: 'おとうさん',
        trans: '爸爸',
    },
    {
        label: 'お爺さん',
        text: 'おじいさん',
        trans: '爷爷',
    },
    {
        label: 'お婆さん',
        text: 'おばあさん',
        trans: '奶奶',
    },
    {
        label: 'おじさん',
        text: 'おじさん',
        trans: '叔叔',
    },
    {
        label: 'おばさん',
        text: 'おばさん',
        trans: '阿姨',
    },
    {
        label: 'お兄さん',
        text: 'おにいさん',
        trans: '哥哥',
    },
    {
        label: 'お姉さん',
        text: 'おねえさん',
        trans: '姐姐',
    },
    {
        label: '弟',
        text: 'おとうと',
        trans: '弟弟',
    },
    {
        label: '妹',
        text: 'いもうと',
        trans: '妹妹',
    },
    {
        label: '一',
        text: 'いち',
        trans: '一',
    },
    {
        label: '二',
        text: 'に',
        trans: '二',
    },
    {
        label: '三',
        text: 'さん',
        trans: '三',
    },
    {
        label: '四',
        text: 'よん',
        trans: '四',
    },
    {
        label: '五',
        text: 'ご',
        trans: '五',
    },
    {
        label: '六',
        text: 'ろく',
        trans: '六',
    },
    {
        label: '七',
        text: 'なな',
        trans: '七',
    },
    {
        label: '八',
        text: 'はち',
        trans: '八',
    },
    {
        label: '九',
        text: 'きゅう',
        trans: '九',
    },
    {
        label: '十',
        text: 'じゅう',
        trans: '十',
    },
    {
        label: '一月',
        text: 'いちがつ',
        trans: '一月',
    },
    {
        label: '二月',
        text: 'にがつ',
        trans: '二月',
    },
    {
        label: '三月',
        text: 'さんがつ',
        trans: '三月',
    },
    {
        label: '四月',
        text: 'しがつ',
        trans: '四月',
    },
    {
        label: '五月',
        text: 'ごがつ',
        trans: '五月',
    },
    {
        label: '六月',
        text: 'ろくがつ',
        trans: '六月',
    },
    {
        label: '七月',
        text: 'しちがつ',
        trans: '七月',
    },
    {
        label: '八月',
        text: 'はちがつ',
        trans: '八月',
    },
    {
        label: '九月',
        text: 'くがつ',
        trans: '九月',
    },
    {
        label: '十月',
        text: 'じゅうがつ',
        trans: '十月',
    },
    {
        label: '十一月',
        text: 'じゅういちがつ',
        trans: '十一月',
    },
    {
        label: '十二月',
        text: 'じゅうにがつ',
        trans: '十二月',
    },
    {
        label: '月曜日',
        text: 'げつようび',
        trans: '星期一',
    },
    {
        label: '火曜日',
        text: 'かようび',
        trans: '星期二',
    },
    {
        label: '水曜日',
        text: 'すいようび',
        trans: '星期三',
    },
    {
        label: '木曜日',
        text: 'もくようび',
        trans: '星期四',
    },
    {
        label: '金曜日',
        text: 'きにょうび',
        trans: '星期五',
    },
    {
        label: '土曜日',
        text: 'どようび',
        trans: '星期六',
    },
    {
        label: '日曜日',
        text: 'にちようび',
        trans: '星期日',
    },
    {
        label: '昨日',
        text: 'きのう',
        trans: '昨天',
    },
    {
        label: '今日',
        text: 'きょう',
        trans: '今天',
    },
    {
        label: '明日',
        text: 'あした',
        trans: '明天',
    },
    {
        label: '朝',
        text: 'あさ',
        trans: '上午',
    },
    {
        label: '昼',
        text: 'ひる',
        trans: '中午',
    },
    {
        label: '夕方',
        text: 'ゆうがた',
        trans: '傍晚',
    },
    {
        label: '夜',
        text: 'よる',
        trans: '晚上',
    },
    {
        label: '楽しい',
        text: 'たのしい',
        trans: '快乐',
    },
    {
        label: '悲しい',
        text: 'かなしい',
        trans: '伤心',
    },
    {
        label: '高い',
        text: 'たかい',
        trans: '高、贵',
    },
    {
        label: '低い',
        text: 'ひくい',
        trans: '低',
    },
    {
        label: '安い',
        text: 'やすい',
        trans: '便宜',
    },
    {
        label: '早い',
        text: 'はやい',
        trans: '快速、早期',
    },
    {
        label: '遅い',
        text: 'おそい',
        trans: '慢',
    },
    {
        label: '忙しい',
        text: 'いそがしい',
        trans: '忙',
    },
    {
        label: '美味しい',
        text: 'おいしい',
        trans: '美味',
    },
    {
        label: '不味い',
        text: 'まずい',
        trans: '可怕',
    },
    {
        label: '甘い',
        text: 'あまい',
        trans: '甜',
    },
    {
        label: '塩っぱい',
        text: 'しょっぱい',
        trans: '咸',
    },
    {
        label: '酸っぱい',
        text: 'すっぱい',
        trans: '酸',
    },
    {
        label: '苦い',
        text: 'にがい',
        trans: '苦',
    },
    {
        label: '辛い',
        text: 'つらい',
        trans: '辣、辣',
    },
    {
        label: '熱い',
        text: 'あつい',
        trans: '热',
    },
    {
        label: '暖かい',
        text: 'あたたかい',
        trans: '温暖',
    },
    {
        label: '冷たい',
        text: 'つめたい',
        trans: '冷',
    },
    {
        label: '明るい',
        text: 'あかるい',
        trans: '明亮',
    },
    {
        label: '暗い',
        text: 'くらい',
        trans: '黑暗',
    },
    {
        label: 'する',
        text: 'する',
        trans: '去做',
    },
    {
        label: '見る',
        text: 'みる',
        trans: '看',
    },
    {
        label: '聞く',
        text: 'きく',
        trans: '听',
    },
    {
        label: '話す',
        text: 'はなす',
        trans: '说话、说话',
    },
    {
        label: '言う',
        text: 'いう',
        trans: '要说',
    },
    {
        label: '書く',
        text: 'かく',
        trans: '写',
    },
    {
        label: '食べる',
        text: 'たべる',
        trans: '吃',
    },
    {
        label: '飲む',
        text: 'のむ',
        trans: '喝',
    },
    {
        label: '歩く',
        text: 'あるく',
        trans: '走路',
    },
    {
        label: '走る',
        text: 'はしる',
        trans: '运行',
    },
    {
        label: '座る',
        text: 'すわる',
        trans: '坐下',
    },
    {
        label: '立つ',
        text: 'たつ',
        trans: '站立',
    },
    {
        label: '食',
        text: 'たべもの',
        trans: '食物',
    },
    {
        label: '飲',
        text: 'のみもの',
        trans: '饮料',
    },
    {
        label: 'ご飯',
        text: 'ごはん',
        trans: '米饭、餐',
    },
    {
        label: '水',
        text: 'みず',
        trans: '水、冷水',
    },
    {
        label: 'お湯',
        text: 'おゆ',
        trans: '热水',
    },
    {
        label: '肉',
        text: 'にく',
        trans: '肉',
    },
    {
        label: '野菜',
        text: 'やさい',
        trans: '蔬菜',
    },
    {
        label: '魚',
        text: 'さかな',
        trans: '鱼',
    },
    {
        label: 'ラーメン',
        text: 'ラアメン',
        trans: '拉面',
    },
    {
        label: '寿司',
        text: 'すし',
        trans: '寿司',
    },
    {
        label: 'おにぎり',
        text: 'おにぎり',
        trans: '饭团',
    },
];

export default defaultWords;
