// auto generate
export interface Word {
    label: string;
    text: string;
    trans?: string[];
}

const defaultWords: Word[] = [
    {
        text: 'donata',
        trans: ['who'],
        label: 'どなた',
    },
    {
        text: 'otokonoko',
        trans: ['Boy'],
        label: '男(おとこ)の子(こ)',
    },
    {
        text: 'nana',
        trans: ['Seven'],
        label: '七(なな)',
    },
    {
        text: 'bangou',
        trans: ['number'],
        label: '番号(ばんごう)',
    },
    {
        text: 'docchi',
        trans: ['which'],
        label: 'どっち',
    },
    {
        text: 'shio',
        trans: ['Salt'],
        label: '塩(しお)',
    },
    {
        text: 'nado',
        trans: ['et cetera'],
        label: 'など',
    },
    {
        text: 'furui',
        trans: ['old (not used for people)'],
        label: '古(ふる)い',
    },
    {
        text: 'resutoran',
        trans: ['restaurant'],
        label: 'レストラン',
    },
    {
        text: 'sukunai',
        trans: ['a few'],
        label: '少(すく)ない',
    },
    {
        text: 'tsuyoi',
        trans: ['powerful'],
        label: '強(つよ)い',
    },
    {
        text: 'yobu',
        trans: ['to call out,to invite'],
        label: '呼(よ)ぶ',
    },
    {
        text: 'kakekakaru',
        trans: ['to take time or money'],
        label: '掛(かけ)かかる',
    },
    {
        text: 'kouban',
        trans: ['police box'],
        label: '交番(こうばん)',
    },
    {
        text: 'atama',
        trans: ['head'],
        label: '頭(あたま)',
    },
    {
        text: 'doko',
        trans: ['where'],
        label: 'どこ',
    },
    {
        text: 'jisho',
        trans: ['Dictionary'],
        label: '辞書(じしょ)',
    },
    {
        text: 'ookina',
        trans: ['big'],
        label: '大(おお)きな',
    },
    {
        text: 'maitsuki',
        trans: ['every month'],
        label: '毎月(まいつき)',
    },
    {
        text: 'taisei',
        trans: ['great number of people'],
        label: '大勢(たいせい)',
    },
    {
        text: 'marui/marui',
        trans: ['round,circular'],
        label: '丸(まる)い/円(まる)い',
    },
    {
        text: 'kaku',
        trans: ['a corner'],
        label: '角(かく)',
    },
    {
        text: 'daisuki',
        trans: ['to be very likeable'],
        label: '大好(だいす)き',
    },
    {
        text: 'takusan',
        trans: ['many'],
        label: 'たくさん',
    },
    {
        text: 'watashi',
        trans: ['(humble) I,myself'],
        label: '私(わたし)',
    },
    {
        text: 'mono',
        trans: ['thing'],
        label: '物(もの)',
    },
    {
        text: 'yama',
        trans: ['mountain'],
        label: '山(やま)',
    },
    {
        text: 'tori',
        trans: ['bird'],
        label: '鳥(とり)',
    },
    {
        text: 'ageru',
        trans: ['to give'],
        label: '上(あ)げる',
    },
    {
        text: 'taihen',
        trans: ['difficult situation'],
        label: '大変(たいへん)',
    },
    {
        text: 'oishii',
        trans: ['delicious'],
        label: 'おいしい',
    },
    {
        text: 'gaikoku',
        trans: ['foreign country'],
        label: '外国(がいこく)',
    },
    {
        text: 'kaze',
        trans: ['a cold'],
        label: '風邪(かぜ)',
    },
    {
        text: 'onnanoko',
        trans: ['Girl'],
        label: '女(おんな)の子(こ)',
    },
    {
        text: 'oriru',
        trans: ['to get off, to descend'],
        label: '降(お)りる',
    },
    {
        text: 'ushiro',
        trans: ['behind'],
        label: '後(うし)ろ',
    },
    {
        text: 'tanomu',
        trans: ['to ask'],
        label: '頼(たの)む',
    },
    {
        text: 'atsui',
        trans: ['hot to the touch'],
        label: '熱(あつ)い',
    },
    {
        text: 'okiru',
        trans: ['to get up'],
        label: '起(お)きる',
    },
    {
        text: 'depaato',
        trans: ['department store'],
        label: 'デパート',
    },
    {
        text: 'nananichi',
        trans: ['seven days,the seventh day'],
        label: '七(なな)日(にち)',
    },
    {
        text: 'kiru',
        trans: ['to cut'],
        label: '切(き)る',
    },
    {
        text: 'minami',
        trans: ['south'],
        label: '南(みなみ)',
    },
    {
        text: 'hashi',
        trans: ['chopsticks'],
        label: '箸(はし)',
    },
    {
        text: 'takushii',
        trans: ['taxi'],
        label: 'タクシー',
    },
    {
        text: 'yuubinkyoku',
        trans: ['post office'],
        label: '郵便(ゆうびん)局(きょく)',
    },
    {
        text: 'kami',
        trans: ['paper'],
        label: '紙(かみ)',
    },
    {
        text: 'tsutomeru',
        trans: ['to work for someone'],
        label: '勤(つと)める',
    },
    {
        text: 'hashiru',
        trans: ['to run'],
        label: '走(はし)る',
    },
    {
        text: 'teepu',
        trans: ['tape'],
        label: 'テープ',
    },
    {
        text: 'uwagi',
        trans: ['jacket'],
        label: '上着(うわぎ)',
    },
    {
        text: 'miseru',
        trans: ['to show'],
        label: '見(み)せる',
    },
    {
        text: 'watasu',
        trans: ['to hand over'],
        label: '渡(わた)す',
    },
    {
        text: 'zenbu',
        trans: ['All'],
        label: '全部(ぜんぶ)',
    },
    {
        text: 'ototoi',
        trans: ['day before yesterday'],
        label: '一昨日(おととい)',
    },
    {
        text: 'osara',
        trans: ['plate, dish'],
        label: 'お皿(さら)',
    },
    {
        text: 'maiasa',
        trans: ['every morning'],
        label: '毎朝(まいあさ)',
    },
    {
        text: 'asatte',
        trans: ['day after tomorrow'],
        label: 'あさって',
    },
    {
        text: 'kagi',
        trans: ['Key'],
        label: '鍵(かぎ)',
    },
    {
        text: 'ojunmawarisan',
        trans: ['friendly term for policeman'],
        label: 'お巡(じゅん)まわりさん',
    },
    {
        text: 'jitensha',
        trans: ['Bicycle'],
        label: '自転車(じてんしゃ)',
    },
    {
        text: 'kumori',
        trans: ['cloudy weather'],
        label: '曇(くも)り',
    },
    {
        text: 'kawaii',
        trans: ['Cute'],
        label: '可愛(かわい)い',
    },
    {
        text: 'sore',
        trans: ['that'],
        label: 'それ',
    },
    {
        text: 'kyoushitsu',
        trans: ['Classroom'],
        label: '教室(きょうしつ)',
    },
    {
        text: 'puuru',
        trans: ['swimming pool'],
        label: 'プール',
    },
    {
        text: 'mimi',
        trans: ['ear'],
        label: '耳(みみ)',
    },
    {
        text: 'dasu',
        trans: ['to put out'],
        label: '出(だ)す',
    },
    {
        text: 'konna',
        trans: ['Such'],
        label: 'こんな',
    },
    {
        text: 'hanbun',
        trans: ['half minute'],
        label: '半分(はんぶん)',
    },
    {
        text: 'futoi',
        trans: ['fat'],
        label: '太(ふと)い',
    },
    {
        text: 'mokuyoubi',
        trans: ['Thursday'],
        label: '木曜日(もくようび)',
    },
    {
        text: 'kaku',
        trans: ['to write'],
        label: '書(か)く',
    },
    {
        text: 'ryuugakusei',
        trans: ['overseas student'],
        label: '留学生(りゅうがくせい)',
    },
    {
        text: 'suiyoubi',
        trans: ['Wednesday'],
        label: '水曜日(すいようび)',
    },
    {
        text: 'tsukuru',
        trans: ['to make'],
        label: '作(つく)る',
    },
    {
        text: 'bataa',
        trans: ['butter'],
        label: 'バター',
    },
    {
        text: 'hagaki',
        trans: ['postcard'],
        label: '葉書(はがき)',
    },
    {
        text: 'ichinichi',
        trans: ['first of the month'],
        label: '一(いち)日(にち)',
    },
    {
        text: 'fouku',
        trans: ['fork'],
        label: 'フォーク',
    },
    {
        text: 'toru',
        trans: ['to take something'],
        label: '取(と)る',
    },
    {
        text: 'saa',
        trans: ['well…'],
        label: 'さあ',
    },
    {
        text: 'niku',
        trans: ['meat'],
        label: '肉(にく)',
    },
    {
        text: 'toshokan',
        trans: ['library'],
        label: '図書館(としょかん)',
    },
    {
        text: 'nichiyoubi',
        trans: ['Sunday'],
        label: '日曜日(にちようび)',
    },
    {
        text: 'shita',
        trans: ['Below'],
        label: '下(した)',
    },
    {
        text: 'heta',
        trans: ['unskillful'],
        label: '下手(へた)',
    },
    {
        text: 'usui',
        trans: ['thin,weak'],
        label: '薄(うす)い',
    },
    {
        text: 'kocchi',
        trans: ['this person or way'],
        label: 'こっち',
    },
    {
        text: 'sasu',
        trans: ['to stretch out hands, to raise an umbrella'],
        label: '差(さ)す',
    },
    {
        text: 'tamago',
        trans: ['egg'],
        label: '卵(たまご)',
    },
    {
        text: 'choudo',
        trans: ['exactly'],
        label: 'ちょうど',
    },
    {
        text: 'yuuhan',
        trans: ['dinner'],
        label: '夕飯(ゆうはん)',
    },
    {
        text: 'shitsumon',
        trans: ['Question'],
        label: '質問(しつもん)',
    },
    {
        text: 'achira',
        trans: ['there'],
        label: 'あちら',
    },
    {
        text: 'ue',
        trans: ['on top of'],
        label: '上(うえ)',
    },
    {
        text: 'dekakeru',
        trans: ['to go out'],
        label: '出(で)かける',
    },
    {
        text: 'rainen',
        trans: ['next year'],
        label: '来年(らいねん)',
    },
    {
        text: 'naku',
        trans: ['animal noise. to chirp, roar or croak etc.'],
        label: '鳴(な)く',
    },
    {
        text: 'naifu',
        trans: ['knife'],
        label: 'ナイフ',
    },
    {
        text: 'yaru',
        trans: ['to do'],
        label: 'やる',
    },
    {
        text: 'sekken',
        trans: ['Economy'],
        label: 'せっけん',
    },
    {
        text: 'iro',
        trans: ['colour'],
        label: '色(いろ)',
    },
    {
        text: 'nyuusu',
        trans: ['news'],
        label: 'ニュース',
    },
    {
        text: 'iya',
        trans: ['unpleasant'],
        label: '嫌(いや)',
    },
    {
        text: 'benkyou',
        trans: ['to study'],
        label: '勉強(べんきょう)',
    },
    {
        text: 'doubutsu',
        trans: ['animal'],
        label: '動物(どうぶつ)',
    },
    {
        text: 'wasureru',
        trans: ['to forget'],
        label: '忘(わす)れる',
    },
    {
        text: 'chigau',
        trans: ['to differ'],
        label: '違(ちが)う',
    },
    {
        text: 'koe',
        trans: ['Voice'],
        label: '声(こえ)',
    },
    {
        text: 'higashi',
        trans: ['east'],
        label: '東(ひがし)',
    },
    {
        text: 'chizu',
        trans: ['map'],
        label: '地図(ちず)',
    },
    {
        text: 'hako',
        trans: ['box'],
        label: '箱(はこ)',
    },
    {
        text: 'mouichido',
        trans: ['again'],
        label: 'もう一度(いちど)',
    },
    {
        text: 'kiru',
        trans: ['to put on from the shoulders down'],
        label: '着(き)る',
    },
    {
        text: 'ashita',
        trans: ['tomorrow'],
        label: '明日(あした)',
    },
    {
        text: 'ikaga',
        trans: ['how'],
        label: 'いかが',
    },
    {
        text: 'maitoshi',
        trans: ['every year'],
        label: '毎年(まいとし)',
    },
    {
        text: 'tabako',
        trans: ['tobacco,cigarettes'],
        label: '煙草(たばこ)',
    },
    {
        text: 'kabin',
        trans: ['a vase'],
        label: '花瓶(かびん)',
    },
    {
        text: 'hana',
        trans: ['nose'],
        label: '鼻(はな)',
    },
    {
        text: 'tsugi',
        trans: ['next'],
        label: '次(つぎ)',
    },
    {
        text: 'daijoubu',
        trans: ['all right'],
        label: '大丈夫(だいじょうぶ)',
    },
    {
        text: 'ban',
        trans: ['evening'],
        label: '晩(ばん)',
    },
    {
        text: 'eigo',
        trans: ['English language'],
        label: '英語(えいご)',
    },
    {
        text: 'oru',
        trans: ['to be, to have (used for people and animals)'],
        label: '居(お)る',
    },
    {
        text: 'ki',
        trans: ['tree, wood'],
        label: '木(き)',
    },
    {
        text: 'kiro/kiroguramu',
        trans: ['Kilogram'],
        label: 'キロ/キログラム',
    },
    {
        text: 'motsu',
        trans: ['to hold'],
        label: '持(も)つ',
    },
    {
        text: 'nukui',
        trans: ['luke warm'],
        label: '温(ぬく)い',
    },
    {
        text: 'miru/miru',
        trans: ['to see, to watch'],
        label: '見(み)る/観(み)る',
    },
    {
        text: 'kiiroi',
        trans: ['yellow'],
        label: '黄色(きいろ)い',
    },
    {
        text: 'denki',
        trans: ['electricity,electric light'],
        label: '電気(でんき)',
    },
    {
        text: 'acchi',
        trans: ['over there'],
        label: 'あっち',
    },
    {
        text: 'kesa',
        trans: ['this morning'],
        label: '今朝(けさ)',
    },
    {
        text: 'haru',
        trans: ['spring'],
        label: '春(はる)',
    },
    {
        text: 'natsu',
        trans: ['summer'],
        label: '夏(なつ)',
    },
    {
        text: 'hontou',
        trans: ['truth'],
        label: '本当(ほんとう)',
    },
    {
        text: 'ichi',
        trans: ['one'],
        label: '一(いち)',
    },
    {
        text: 'denwa',
        trans: ['telephone'],
        label: '電話(でんわ)',
    },
    {
        text: 'amai',
        trans: ['sweet'],
        label: '甘(あま)い',
    },
    {
        text: 'mado',
        trans: ['window'],
        label: '窓(まど)',
    },
    {
        text: 'abunai',
        trans: ['dangerous'],
        label: '危(あぶ)ない',
    },
    {
        text: 'ja/jaa',
        trans: ['well then…'],
        label: 'じゃ/じゃあ',
    },
    {
        text: 'fuku',
        trans: ['to blow'],
        label: '吹(ふ)く',
    },
    {
        text: 'reizouko',
        trans: ['refrigerator'],
        label: '冷蔵庫(れいぞうこ)',
    },
    {
        text: 'jikan',
        trans: ['Time'],
        label: '時間(じかん)',
    },
    {
        text: 'byouin',
        trans: ['hospital'],
        label: '病院(びょういん)',
    },
    {
        text: 'fuyu',
        trans: ['winter'],
        label: '冬(ふゆ)',
    },
    {
        text: 'kopiisuru',
        trans: ['to copy'],
        label: 'コピーする',
    },
    {
        text: 'rajio',
        trans: ['radio'],
        label: 'ラジオ',
    },
    {
        text: 'akai',
        trans: ['bright'],
        label: '明(あか)い',
    },
    {
        text: 'atsui',
        trans: ['hot'],
        label: '暑(あつ)い',
    },
    {
        text: 'mise',
        trans: ['shop'],
        label: '店(みせ)',
    },
    {
        text: 'gaikokujin',
        trans: ['Foreigner'],
        label: '外国(がいこく)人(じん)',
    },
    {
        text: 'hidari',
        trans: ['left hand side'],
        label: '左(ひだり)',
    },
    {
        text: 'hankachi',
        trans: ['handkerchief'],
        label: 'ハンカチ',
    },
    {
        text: 'karendaa',
        trans: ['calendar'],
        label: 'カレンダー',
    },
    {
        text: 'mukou',
        trans: ['over there'],
        label: '向(む)こう',
    },
    {
        text: 'yuki',
        trans: ['snow'],
        label: '雪(ゆき)',
    },
    {
        text: 'shigoto',
        trans: ['Job'],
        label: '仕事(しごと)',
    },
    {
        text: 'okane',
        trans: ['money'],
        label: 'お金(かね)',
    },
    {
        text: 'waishatsu',
        trans: ['business shirt'],
        label: 'ワイシャツ',
    },
    {
        text: 'chiisai',
        trans: ['little'],
        label: '小(ちい)さい',
    },
    {
        text: 'toriniku',
        trans: ['chicken meat'],
        label: 'とり肉(にく)',
    },
    {
        text: 'gogo',
        trans: ['afternoon'],
        label: '午後(ごご)',
    },
    {
        text: 'hare',
        trans: ['clear weather'],
        label: '晴(は)れ',
    },
    {
        text: 'ikura',
        trans: ['how much?'],
        label: 'いくら',
    },
    {
        text: 'paatii',
        trans: ['party'],
        label: 'パーティー',
    },
    {
        text: 'tanoshii',
        trans: ['enjoyable'],
        label: '楽(たの)しい',
    },
    {
        text: 'nouto',
        trans: ['notebook,exercise book'],
        label: 'ノート',
    },
    {
        text: 'aka',
        trans: ['red'],
        label: '赤(あか)',
    },
    {
        text: 'hajimaru',
        trans: ['to begin'],
        label: '始(はじ)まる',
    },
    {
        text: 'yasumi',
        trans: ['rest,holiday'],
        label: '休(やす)み',
    },
    {
        text: 'dochira',
        trans: ['which of two'],
        label: 'どちら',
    },
    {
        text: 'hiraku',
        trans: ['to open, to become open'],
        label: '開(ひら)く',
    },
    {
        text: 'ie',
        trans: ['house'],
        label: '家(いえ)',
    },
    {
        text: 'neko',
        trans: ['cat'],
        label: '猫(ねこ)',
    },
    {
        text: 'hayai',
        trans: ['early'],
        label: '早(はや)い',
    },
    {
        text: 'mina',
        trans: ['everyone'],
        label: '皆(みな)',
    },
    {
        text: 'migaku',
        trans: ['to brush teeth, to polish'],
        label: '磨(みが)く',
    },
    {
        text: 'oniisan',
        trans: ['(honorable) older brother'],
        label: 'お兄(にい)さん',
    },
    {
        text: 'suguni',
        trans: ['Instantly'],
        label: 'すぐに',
    },
    {
        text: 'atsui',
        trans: ['kind, deep, thick'],
        label: '厚(あつ)い',
    },
    {
        text: 'bangohan',
        trans: ['evening meal'],
        label: '晩(ばん)御飯(ごはん)',
    },
    {
        text: 'asagohan',
        trans: ['breakfast'],
        label: '朝(あさ)御飯(ごはん)',
    },
    {
        text: 'tesuto',
        trans: ['test'],
        label: 'テスト',
    },
    {
        text: 'nani',
        trans: ['what'],
        label: '何(なに)',
    },
    {
        text: 'totemo',
        trans: ['very'],
        label: 'とても',
    },
    {
        text: 'ao',
        trans: ['blue'],
        label: '青(あお)',
    },
    {
        text: 'oyogu',
        trans: ['to swim'],
        label: '泳(およ)ぐ',
    },
    {
        text: 'issho',
        trans: ['together'],
        label: '一緒(いっしょ)',
    },
    {
        text: 'naraberu',
        trans: ['to line up,to set up'],
        label: '並(なら)べる',
    },
    {
        text: 'sebiro',
        trans: ['business suit'],
        label: '背広(せびろ)',
    },
    {
        text: 'hai',
        trans: ['yes'],
        label: 'はい',
    },
    {
        text: 'koucha',
        trans: ['black tea'],
        label: '紅茶(こうちゃ)',
    },
    {
        text: 'ane',
        trans: ['(humble) older sister'],
        label: '姉(あね)',
    },
    {
        text: 'satou',
        trans: ['Sugar'],
        label: '砂糖(さとう)',
    },
    {
        text: 'shiro',
        trans: ['White'],
        label: '白(しろ)',
    },
    {
        text: 'soushite/soshite',
        trans: ['And'],
        label: 'そうして/そして',
    },
    {
        text: 'wakaru',
        trans: ['to be understood'],
        label: '分(わ)かる',
    },
    {
        text: 'haku',
        trans: ['to wear,to put on trousers'],
        label: 'はく',
    },
    {
        text: 'ryoushin',
        trans: ['both parents'],
        label: '両親(りょうしん)',
    },
    {
        text: 'asa',
        trans: ['morning'],
        label: '朝(あさ)',
    },
    {
        text: 'doa',
        trans: ['Western style door'],
        label: 'ドア',
    },
    {
        text: 'sensei',
        trans: ['teacher, doctor'],
        label: '先生(せんせい)',
    },
    {
        text: 'ookii',
        trans: ['big'],
        label: '大(おお)きい',
    },
    {
        text: 'gitaa',
        trans: ['Guitar'],
        label: 'ギター',
    },
    {
        text: 'shouyu',
        trans: ['soy sauce'],
        label: '醤油(しょうゆ)',
    },
    {
        text: 'koppu',
        trans: ['cop, police officer'],
        label: 'コップ',
    },
    {
        text: 'keikan',
        trans: ['policeman'],
        label: '警官(けいかん)',
    },
    {
        text: 'kyuu',
        trans: ['Nine'],
        label: '九(きゅう)',
    },
    {
        text: 'kau',
        trans: ['to buy'],
        label: '買(か)う',
    },
    {
        text: 'macchi',
        trans: ['match'],
        label: 'マッチ',
    },
    {
        text: 'deru',
        trans: ['to appear,to leave'],
        label: '出(で)る',
    },
    {
        text: 'narabu',
        trans: ['to line up,to stand in a line'],
        label: '並(なら)ぶ',
    },
    {
        text: 'souji',
        trans: ['to clean, to sweep'],
        label: '掃除(そうじ)',
    },
    {
        text: 'ongaku',
        trans: ['Music'],
        label: '音楽(おんがく)',
    },
    {
        text: 'rajikase / rajiokasetto',
        trans: ['radio cassette player'],
        label: 'ラジカセ / ラジオカセット',
    },
    {
        text: 'nomimono',
        trans: ['a drink'],
        label: '飲(の)み物(もの)',
    },
    {
        text: 'itsumo',
        trans: ['always'],
        label: 'いつも',
    },
    {
        text: 'ike',
        trans: ['pond'],
        label: '池(いけ)',
    },
    {
        text: 'kaimono',
        trans: ['Shopping'],
        label: '買(か)い物(もの)',
    },
    {
        text: 'youfuku',
        trans: ['western-style clothes'],
        label: '洋服(ようふく)',
    },
    {
        text: 'soko',
        trans: ['that place'],
        label: 'そこ',
    },
    {
        text: 'sutoubu',
        trans: ['Heater'],
        label: 'ストーブ',
    },
    {
        text: 'sakuya',
        trans: ['last night'],
        label: '昨夜(さくや)',
    },
    {
        text: 'raigetsu',
        trans: ['next month'],
        label: '来月(らいげつ)',
    },
    {
        text: 'umi',
        trans: ['sea'],
        label: '海(うみ)',
    },
    {
        text: 'kippu',
        trans: ['Ticket'],
        label: '切符(きっぷ)',
    },
    {
        text: 'yonnichi',
        trans: ['four days, fouth day of the month'],
        label: '四(よん)日(にち)',
    },
    {
        text: 'tooi',
        trans: ['far'],
        label: '遠(とお)い',
    },
    {
        text: 'sono',
        trans: ['That'],
        label: 'その',
    },
    {
        text: 'getsuyoubi',
        trans: ['Monday'],
        label: '月曜日(げつようび)',
    },
    {
        text: 'sanpo',
        trans: ['to stroll'],
        label: '散歩(さんぽ)',
    },
    {
        text: 'chikatetsu',
        trans: ['underground train'],
        label: '地下鉄(ちかてつ)',
    },
    {
        text: 'oji/oji',
        trans: ['uncle, middle aged gentleman'],
        label: '伯父(おじ)/叔父(おじ)',
    },
    {
        text: 'itai',
        trans: ['painful'],
        label: '痛(いた)い',
    },
    {
        text: 'isu',
        trans: ['chair'],
        label: 'いす',
    },
    {
        text: 'tobu',
        trans: ['to fly,to hop'],
        label: '飛(と)ぶ',
    },
    {
        text: 'hachinichi',
        trans: ['eight days, eighth day of the month'],
        label: '八(はち)日(にち)',
    },
    {
        text: 'jibun',
        trans: ['Oneself'],
        label: '自分(じぶん)',
    },
    {
        text: 'narau',
        trans: ['to learn'],
        label: '習(なら)う',
    },
    {
        text: 'sen',
        trans: ['Thousand'],
        label: '千(せん)',
    },
    {
        text: 'samui',
        trans: ['Cold'],
        label: '寒(さむ)い',
    },
    {
        text: 'ii/yoi',
        trans: ['good'],
        label: 'いい/よい',
    },
    {
        text: 'tokei',
        trans: ['watch,clock'],
        label: '時計(とけい)',
    },
    {
        text: 'kouto',
        trans: ['coat, tennis court'],
        label: 'コート',
    },
    {
        text: 'ryokou',
        trans: ['travel'],
        label: '旅行(りょこう)',
    },
    {
        text: 'konban',
        trans: ['this evening'],
        label: '今晩(こんばん)',
    },
    {
        text: 'hareru',
        trans: ['to be sunny'],
        label: '晴(は)れる',
    },
    {
        text: 'petto',
        trans: ['pet'],
        label: 'ペット',
    },
    {
        text: 'renshuu',
        trans: ['to practice'],
        label: '練習(れんしゅう)',
    },
    {
        text: 'sorekara',
        trans: ['after that'],
        label: 'それから',
    },
    {
        text: 'oshieru',
        trans: ['to teach, to tell'],
        label: '教(おし)える',
    },
    {
        text: 'tokidoki',
        trans: ['sometimes'],
        label: '時々(ときどき)',
    },
    {
        text: 'poketto',
        trans: ['pocket'],
        label: 'ポケット',
    },
    {
        text: 'watashi',
        trans: ['I,myself'],
        label: '私(わたし)',
    },
    {
        text: 'koko',
        trans: ['Here'],
        label: 'ここ',
    },
    {
        text: 'kiro/kiromeetoru',
        trans: ['Kilometer'],
        label: 'キロ/キロメートル',
    },
    {
        text: 'kongetsu',
        trans: ['this month'],
        label: '今月(こんげつ)',
    },
    {
        text: 'hiku',
        trans: ['to play an instrument with strings, including piano'],
        label: '弾(ひ)く',
    },
    {
        text: 'hon',
        trans: ['book'],
        label: '本(ほん)',
    },
    {
        text: 'me',
        trans: ['eye'],
        label: '目(め)',
    },
    {
        text: 'ikutsu',
        trans: ['how many?,how old?'],
        label: 'いくつ',
    },
    {
        text: 'yukkurito',
        trans: ['slowly'],
        label: 'ゆっくりと',
    },
    {
        text: 'ichigatsu',
        trans: ['one month'],
        label: '一月(いちがつ)',
    },
    {
        text: 'kyonen',
        trans: ['last year'],
        label: '去年(きょねん)',
    },
    {
        text: 'tate',
        trans: ['length,height'],
        label: 'たて',
    },
    {
        text: 'kappu',
        trans: ['Cup'],
        label: 'カップ',
    },
    {
        text: 'kochira',
        trans: ['this person or way'],
        label: 'こちら',
    },
    {
        text: 'natsuyasumi',
        trans: ['summer holiday'],
        label: '夏休(なつやす)み',
    },
    {
        text: 'iroiro',
        trans: ['various'],
        label: 'いろいろ',
    },
    {
        text: 'kuru',
        trans: ['to come'],
        label: '来(く)る',
    },
    {
        text: 'sannichi',
        trans: ['three days, third day of the month'],
        label: '三(さん)日(にち)',
    },
    {
        text: 'osoi',
        trans: ['late, slow'],
        label: '遅(おそ)い',
    },
    {
        text: 'owaru',
        trans: ['to finish'],
        label: '終(おわ)る',
    },
    {
        text: 'shawaa',
        trans: ['Shower'],
        label: 'シャワー',
    },
    {
        text: 'ooi',
        trans: ['many'],
        label: '多(おお)い',
    },
    {
        text: 'otousan',
        trans: ['(honorable) father'],
        label: 'お父(とう)さん',
    },
    {
        text: 'seito',
        trans: ['Pupil'],
        label: '生徒(せいと)',
    },
    {
        text: 'kariru',
        trans: ['to borrow'],
        label: '借(か)りる',
    },
    {
        text: 'daigaku',
        trans: ['university'],
        label: '大学(だいがく)',
    },
    {
        text: 'doyoubi',
        trans: ['Saturday'],
        label: '土曜日(どようび)',
    },
    {
        text: 'nishi',
        trans: ['west'],
        label: '西(にし)',
    },
    {
        text: 'kayoubi',
        trans: ['Tuesday'],
        label: '火曜日(かようび)',
    },
    {
        text: 'joubu',
        trans: ['strong, durable'],
        label: '丈夫(じょうぶ)',
    },
    {
        text: 'doumo',
        trans: ['thanks'],
        label: 'どうも',
    },
    {
        text: 'yasai',
        trans: ['vegetable'],
        label: '野菜(やさい)',
    },
    {
        text: 'otearai',
        trans: ['bathroom'],
        label: 'お手洗(てあら)い',
    },
    {
        text: 'kanji',
        trans: ['Chinese character'],
        label: '漢字(かんじ)',
    },
    {
        text: 'nigiyaka',
        trans: ['bustling,busy'],
        label: '賑(にぎ)やか',
    },
    {
        text: 'hana',
        trans: ['flower'],
        label: '花(はな)',
    },
    {
        text: 'otoko',
        trans: ['Man'],
        label: '男(おとこ)',
    },
    {
        text: 'ryouri',
        trans: ['cuisine'],
        label: '料理(りょうり)',
    },
    {
        text: 'shimaru',
        trans: ['to close, to be closed'],
        label: '閉(し)まる',
    },
    {
        text: 'muttsu',
        trans: ['six'],
        label: '六(むっ)つ',
    },
    {
        text: 'furo',
        trans: ['bath'],
        label: 'ふろ',
    },
    {
        text: 'rippa',
        trans: ['splendid'],
        label: '立派(りっぱ)',
    },
    {
        text: 'karui',
        trans: ['Light'],
        label: '軽(かる)い',
    },
    {
        text: 'toire',
        trans: ['toilet'],
        label: 'トイレ',
    },
    {
        text: 'hyaku',
        trans: ['hundred'],
        label: '百(ひゃく)',
    },
    {
        text: 'hou',
        trans: ['person, way of doing'],
        label: '方(ほう)',
    },
    {
        text: 'kutsu',
        trans: ['Shoes'],
        label: '靴(くつ)',
    },
    {
        text: 'shizuka',
        trans: ['Quiet'],
        label: '静(しず)か',
    },
    {
        text: 'shatsu',
        trans: ['Shirt'],
        label: 'シャツ',
    },
    {
        text: 'kusuri',
        trans: ['medicine'],
        label: '薬(くすり)',
    },
    {
        text: 'omoshiroi',
        trans: ['Interesting'],
        label: '面(おも)白(しろ)い',
    },
    {
        text: 'itsu',
        trans: ['when'],
        label: 'いつ',
    },
    {
        text: 'komaru',
        trans: ['to be worried'],
        label: '困(こま)る',
    },
    {
        text: 'osake',
        trans: ['alcohol, rice wine'],
        label: 'お酒(さけ)',
    },
    {
        text: 'okashi',
        trans: ['sweets, candy'],
        label: 'お菓子(かし)',
    },
    {
        text: 'kurai',
        trans: ['Gloomy'],
        label: '暗(くら)い',
    },
    {
        text: 'tenki',
        trans: ['weather'],
        label: '天気(てんき)',
    },
    {
        text: 'tsukue',
        trans: ['desk'],
        label: '机(つくえ)',
    },
    {
        text: 'surippa',
        trans: ['Slippers'],
        label: 'スリッパ',
    },
    {
        text: 'utau',
        trans: ['to sing'],
        label: '歌(うた)う',
    },
    {
        text: 'hanasu',
        trans: ['to speak'],
        label: '話(はな)す',
    },
    {
        text: 'e',
        trans: ['picture'],
        label: '絵(え)',
    },
    {
        text: 'ee',
        trans: ['yes'],
        label: 'ええ',
    },
    {
        text: 'yattsu',
        trans: ['eight'],
        label: '八(やっ)つ',
    },
    {
        text: 'mazui',
        trans: ['unpleasant'],
        label: '不味(まず)い',
    },
    {
        text: 'boushi',
        trans: ['hat'],
        label: '帽子(ぼうし)',
    },
    {
        text: 'noboru',
        trans: ['to climb'],
        label: '登(のぼ)る',
    },
    {
        text: 'roku',
        trans: ['six'],
        label: '六(ろく)',
    },
    {
        text: 'ni',
        trans: ['two'],
        label: '二(に)',
    },
    {
        text: 'chikaku',
        trans: ['near'],
        label: '近(ちか)く',
    },
    {
        text: 'kuni',
        trans: ['Country'],
        label: '国(くに)',
    },
    {
        text: 'kirei',
        trans: ['pretty, clean'],
        label: '綺麗(きれい)',
    },
    {
        text: 'teepurekoudaa',
        trans: ['tape recorder'],
        label: 'テープレコーダー',
    },
    {
        text: 'hoteru',
        trans: ['hotel'],
        label: 'ホテル',
    },
    {
        text: 'atatakai',
        trans: ['warm'],
        label: '暖(あたた)かい',
    },
    {
        text: 'soredeha',
        trans: ['in that situation'],
        label: 'それでは',
    },
    {
        text: 'osu',
        trans: ['to push, to stamp something'],
        label: '押(お)す',
    },
    {
        text: 'shokudou',
        trans: ['dining hall'],
        label: '食堂(しょくどう)',
    },
    {
        text: 'kiiro',
        trans: ['yellow'],
        label: '黄色(きいろ)',
    },
    {
        text: 'kiku',
        trans: ['to hear, to listen to, to ask'],
        label: '聞(き)く',
    },
    {
        text: 'suki',
        trans: ['Likeable'],
        label: '好(す)き',
    },
    {
        text: 'oji/oji',
        trans: ['grandfather, male senior citizen'],
        label: '伯父(おじ)/叔父(おじ)',
    },
    {
        text: 'gonichi',
        trans: ['five days, fifth day'],
        label: '五(ご)日(にち)',
    },
    {
        text: 'saku',
        trans: ['to bloom'],
        label: '咲(さ)く',
    },
    {
        text: 'kesu',
        trans: ['to erase, to turn off power'],
        label: '消(け)す',
    },
    {
        text: 'nimotsu',
        trans: ['luggage'],
        label: '荷物(にもつ)',
    },
    {
        text: 'mainichi',
        trans: ['every day'],
        label: '毎日(まいにち)',
    },
    {
        text: 'isha',
        trans: ['medical doctor'],
        label: '医者(いしゃ)',
    },
    {
        text: 'nagai',
        trans: ['long'],
        label: '長(なが)い',
    },
    {
        text: 'gyuunyuu',
        trans: ['Milk'],
        label: '牛乳(ぎゅうにゅう)',
    },
    {
        text: 'ocha',
        trans: ['green tea'],
        label: 'お茶(ちゃ)',
    },
    {
        text: 'takai',
        trans: ['tall, expensive'],
        label: '高(たか)い',
    },
    {
        text: 'issakunen',
        trans: ['year before last'],
        label: '一昨年(いっさくねん)',
    },
    {
        text: 'shukudai',
        trans: ['homework'],
        label: '宿題(しゅくだい)',
    },
    {
        text: 'aru',
        trans: ['to be,to have (used for inanimate objects)'],
        label: 'ある',
    },
    {
        text: 'ideguchi',
        trans: ['exit'],
        label: '出口(いでぐち)',
    },
    {
        text: 'saki',
        trans: ['the future, previous'],
        label: '先(さき)',
    },
    {
        text: 'ame',
        trans: ['rain'],
        label: '雨(あめ)',
    },
    {
        text: 'noru',
        trans: ['to get on,to ride'],
        label: '乗(の)る',
    },
    {
        text: 'byouki',
        trans: ['illness'],
        label: '病気(びょうき)',
    },
    {
        text: 'tokoro',
        trans: ['place'],
        label: '所(ところ)',
    },
    {
        text: 'aruku',
        trans: ['to walk'],
        label: '歩(ある)く',
    },
    {
        text: 'tsumetai',
        trans: ['cold to the touch'],
        label: '冷(つめ)たい',
    },
    {
        text: 'kitanai',
        trans: ['Dirty'],
        label: '汚(きたな)い',
    },
    {
        text: 'hayai',
        trans: ['quick'],
        label: '速(はや)い',
    },
    {
        text: 'kouen',
        trans: ['Park'],
        label: '公園(こうえん)',
    },
    {
        text: 'kumoru',
        trans: ['to become cloudy, to become dim'],
        label: '曇(くも)る',
    },
    {
        text: 'shiru',
        trans: ['to know'],
        label: '知(し)る',
    },
    {
        text: 'ha',
        trans: ['tooth'],
        label: '歯(は)',
    },
    {
        text: 'onna',
        trans: ['Woman'],
        label: '女(おんな)',
    },
    {
        text: 'taishikan',
        trans: ['embassy'],
        label: '大使館(たいしかん)',
    },
    {
        text: 'supuun',
        trans: ['Spoon'],
        label: 'スプーン',
    },
    {
        text: 'hondana',
        trans: ['bookshelves'],
        label: '本棚(ほんだな)',
    },
    {
        text: 'zero',
        trans: ['Zero'],
        label: 'ゼロ',
    },
    {
        text: 'terebi',
        trans: ['television'],
        label: 'テレビ',
    },
    {
        text: 'warui',
        trans: ['bad'],
        label: '悪(わる)い',
    },
    {
        text: 'tsukeru',
        trans: ['to turn on'],
        label: 'つける',
    },
    {
        text: 'isogashii',
        trans: ['busy, irritated'],
        label: '忙(いそが)しい',
    },
    {
        text: 'anata',
        trans: ['you'],
        label: 'あなた',
    },
    {
        text: 'to',
        trans: ['Japanese style door'],
        label: '戸(と)',
    },
    {
        text: 'doushite',
        trans: ['for what reason'],
        label: 'どうして',
    },
    {
        text: 'okaasan',
        trans: ['(honorable) mother'],
        label: 'お母(かあ)さん',
    },
    {
        text: 'kamera',
        trans: ['camera'],
        label: 'カメラ',
    },
    {
        text: 'kodomo',
        trans: ['Child'],
        label: '子供(こども)',
    },
    {
        text: 'sora',
        trans: ['Sky'],
        label: '空(そら)',
    },
    {
        text: 'tegami',
        trans: ['letter'],
        label: '手紙(てがみ)',
    },
    {
        text: 'uta',
        trans: ['song'],
        label: '歌(うた)',
    },
    {
        text: 'kekkon',
        trans: ['Marriage'],
        label: '結婚(けっこん)',
    },
    {
        text: 'kirai',
        trans: ['Hate'],
        label: '嫌(きら)い',
    },
    {
        text: 'mou',
        trans: ['already'],
        label: 'もう',
    },
    {
        text: 'rekoudo',
        trans: ['record'],
        label: 'レコード',
    },
    {
        text: 'taberu',
        trans: ['to eat'],
        label: '食(た)べる',
    },
    {
        text: 'dare',
        trans: ['somebody'],
        label: '誰(だれ)',
    },
    {
        text: 'kaeru',
        trans: ['to go back'],
        label: '帰(かえ)る',
    },
    {
        text: 'kaisha',
        trans: ['Company'],
        label: '会社(かいしゃ)',
    },
    {
        text: 'chotto',
        trans: ['somewhat'],
        label: 'ちょっと',
    },
    {
        text: 'yuugata',
        trans: ['evening'],
        label: '夕方(ゆうがた)',
    },
    {
        text: 'are',
        trans: ['that'],
        label: 'あれ',
    },
    {
        text: 'nugu',
        trans: ['to take off clothes'],
        label: '脱(ぬ)ぐ',
    },
    {
        text: 'hikouki',
        trans: ['aeroplane'],
        label: '飛行機(ひこうき)',
    },
    {
        text: 'wakai',
        trans: ['young'],
        label: '若(わか)い',
    },
    {
        text: 'hosoi',
        trans: ['thin'],
        label: '細(ほそ)い',
    },
    {
        text: 'sukaato',
        trans: ['Skirt'],
        label: 'スカート',
    },
    {
        text: 'yottsu',
        trans: ['four'],
        label: '四(よっ)つ',
    },
    {
        text: 'hataraku',
        trans: ['to work'],
        label: '働(はたら)く',
    },
    {
        text: 'kawa/kawa',
        trans: ['River'],
        label: '川(かわ)/河(かわ)',
    },
    {
        text: 'guramu',
        trans: ['Gram'],
        label: 'グラム',
    },
    {
        text: 'hikui',
        trans: ['short,low'],
        label: '低(ひく)い',
    },
    {
        text: 'kaidan',
        trans: ['Stairs'],
        label: '階段(かいだん)',
    },
    {
        text: 'atari',
        trans: ['area'],
        label: '辺(あたり)',
    },
    {
        text: 'mon',
        trans: ['gate'],
        label: '門(もん)',
    },
    {
        text: 'kinyoubi',
        trans: ['Friday'],
        label: '金曜日(きんようび)',
    },
    {
        text: 'basu',
        trans: ['bus'],
        label: 'バス',
    },
    {
        text: 'jibiki',
        trans: ['Dictionary'],
        label: '字引(じびき)',
    },
    {
        text: 'hachi',
        trans: ['eight'],
        label: '八(はち)',
    },
    {
        text: 'ban',
        trans: ['ten thousand'],
        label: '万(ばん)',
    },
    {
        text: 'tatemono',
        trans: ['building'],
        label: '建物(たてもの)',
    },
    {
        text: 'obasan/obasan',
        trans: ['Aunt'],
        label: '伯母(おば)さん/叔母(おば)さん',
    },
    {
        text: 'jugyou',
        trans: ['lesson, class work'],
        label: '授業(じゅぎょう)',
    },
    {
        text: 'oku',
        trans: ['to put'],
        label: '置(お)く',
    },
    {
        text: 'eki',
        trans: ['station'],
        label: '駅(えき)',
    },
    {
        text: 'ginkou',
        trans: ['Bank'],
        label: '銀行(ぎんこう)',
    },
    {
        text: 'kyuunichi',
        trans: ['nine days, ninth day'],
        label: '九(きゅう)日(にち)',
    },
    {
        text: 'magaru',
        trans: ['to turn,to bend'],
        label: '曲(まが)る',
    },
    {
        text: 'yoko',
        trans: ['beside,side,width'],
        label: '横(よこ)',
    },
    {
        text: 'bunshou',
        trans: ['sentence,text'],
        label: '文章(ぶんしょう)',
    },
    {
        text: 'beddo',
        trans: ['bed'],
        label: 'ベッド',
    },
    {
        text: 'kita',
        trans: ['North'],
        label: '北(きた)',
    },
    {
        text: 'kakeru',
        trans: ['to call by phone'],
        label: 'かける',
    },
    {
        text: 'suwaru',
        trans: ['to sit'],
        label: '座(すわ)る',
    },
    {
        text: 'ninichi',
        trans: ['two days, second day of the month'],
        label: '二(に)日(にち)',
    },
    {
        text: 'gohan',
        trans: ['cooked rice, meal'],
        label: '御飯(ごはん)',
    },
    {
        text: 'obentou',
        trans: ['boxed lunch'],
        label: 'お弁当(べんとう)',
    },
    {
        text: 'kuruma',
        trans: ['car, vehicle'],
        label: '車(くるま)',
    },
    {
        text: 'yori,hou',
        trans: ['Used for comparison.'],
        label: 'より、ほう',
    },
    {
        text: 'maiban',
        trans: ['every night'],
        label: '毎晩(まいばん)',
    },
    {
        text: 'tsuku',
        trans: ['to arrive at'],
        label: '着(つ)く',
    },
    {
        text: 'wataru',
        trans: ['to go across'],
        label: '渡(わた)る',
    },
    {
        text: 'sakubun',
        trans: ['composition, writing'],
        label: '作文(さくぶん)',
    },
    {
        text: 'chikai',
        trans: ['near'],
        label: '近(ちか)い',
    },
    {
        text: 'michi',
        trans: ['street'],
        label: '道(みち)',
    },
    {
        text: 'itsutsu',
        trans: ['five'],
        label: '五(いつ)つ',
    },
    {
        text: 'dore',
        trans: ['which (of three or more)'],
        label: 'どれ',
    },
    {
        text: 'genkan',
        trans: ['entry hall'],
        label: '玄関(げんかん)',
    },
    {
        text: 'kieru',
        trans: ['to disappear'],
        label: '消(き)える',
    },
    {
        text: 'daidokoro',
        trans: ['kitchen'],
        label: '台所(だいどころ)',
    },
    {
        text: 'massugu',
        trans: ['straight ahead,direct'],
        label: '真(ま)っ直(す)ぐ',
    },
    {
        text: 'jidousha',
        trans: ['Automobile'],
        label: '自動車(じどうしゃ)',
    },
    {
        text: 'peeji',
        trans: ['page'],
        label: 'ページ',
    },
    {
        text: 'raishuu',
        trans: ['next week'],
        label: '来週(らいしゅう)',
    },
    {
        text: 'te',
        trans: ['hand'],
        label: '手(て)',
    },
    {
        text: 'hirugohan',
        trans: ['midday meal'],
        label: '昼(ひる)御飯(ごはん)',
    },
    {
        text: 'fuku',
        trans: ['clothes'],
        label: '服(ふく)',
    },
    {
        text: 'suru',
        trans: ['to do'],
        label: 'する',
    },
    {
        text: 'rouka',
        trans: ['corridor'],
        label: '廊下(ろうか)',
    },
    {
        text: 'kuro',
        trans: ['Black'],
        label: '黒(くろ)',
    },
    {
        text: 'ima',
        trans: ['now'],
        label: '今(いま)',
    },
    {
        text: 'sochira',
        trans: ['over there'],
        label: 'そちら',
    },
    {
        text: 'mata',
        trans: ['again,and'],
        label: 'また',
    },
    {
        text: 'taihen',
        trans: ['very'],
        label: 'たいへん',
    },
    {
        text: 'dou',
        trans: ['how,in what way'],
        label: 'どう',
    },
    {
        text: 'botan',
        trans: ['button'],
        label: 'ボタン',
    },
    {
        text: 'gakusei',
        trans: ['Student'],
        label: '学生(がくせい)',
    },
    {
        text: 'kurasu',
        trans: ['Class'],
        label: 'クラス',
    },
    {
        text: 'shikashi',
        trans: ['However'],
        label: 'しかし',
    },
    {
        text: 'dare',
        trans: ['who'],
        label: '誰(だれ)',
    },
    {
        text: 'yoku',
        trans: ['often, well'],
        label: 'よく',
    },
    {
        text: 'ofuro',
        trans: ['Bath'],
        label: 'お風呂(ふろ)',
    },
    {
        text: 'nakusu',
        trans: ['to lose something'],
        label: '無(な)くす',
    },
    {
        text: 'asobu',
        trans: ['to play, to make a visit'],
        label: '遊(あそ)ぶ',
    },
    {
        text: 'yuumei',
        trans: ['famous'],
        label: '有名(ゆうめい)',
    },
    {
        text: 'hito',
        trans: ['person'],
        label: '人(ひと)',
    },
    {
        text: 'kutsushita',
        trans: ['Socks'],
        label: '靴下(くつした)',
    },
    {
        text: 'iie',
        trans: ['no'],
        label: 'いいえ',
    },
    {
        text: 'genki',
        trans: ['health, vitality'],
        label: '元気(げんき)',
    },
    {
        text: 'hitotsu',
        trans: ['one'],
        label: '一(ひと)つ',
    },
    {
        text: 'katei',
        trans: ['Household'],
        label: '家庭(かてい)',
    },
    {
        text: 'mittsu',
        trans: ['three'],
        label: '三(みっ)つ',
    },
    {
        text: 'yasumu',
        trans: ['to rest'],
        label: '休(やす)む',
    },
    {
        text: 'kuchi',
        trans: ['mouth, opening'],
        label: '口(くち)',
    },
    {
        text: 'benri',
        trans: ['useful, convenient'],
        label: '便利(べんり)',
    },
    {
        text: 'kotoba',
        trans: ['word, language'],
        label: '言葉(ことば)',
    },
    {
        text: 'chawan',
        trans: ['rice bowl'],
        label: '茶碗(ちゃわん)',
    },
    {
        text: 'toshi',
        trans: ['year'],
        label: '年(とし)',
    },
    {
        text: 'hairu',
        trans: ['to enter,to contain'],
        label: '入(はい)る',
    },
    {
        text: 'kasu',
        trans: ['to lend'],
        label: '貸(か)す',
    },
    {
        text: 'juunichi',
        trans: ['ten days,the tenth day'],
        label: '十(じゅう)日(にち)',
    },
    {
        text: 'shimeru',
        trans: ['to close something'],
        label: '閉(し)める',
    },
    {
        text: 'hajimete',
        trans: ['for the first time'],
        label: '初(はじ)めて',
    },
    {
        text: 'shimeru',
        trans: ['to tie'],
        label: '締(し)める',
    },
    {
        text: 'futatsu',
        trans: ['two'],
        label: '二(ふた)つ',
    },
    {
        text: 'okusan',
        trans: ['(honorable) wife'],
        label: '奥(おく)さん',
    },
    {
        text: 'rokunichi',
        trans: ['six days, sixth day of the month'],
        label: '六(ろく)日(にち)',
    },
    {
        text: 'kousaten',
        trans: ['intersection'],
        label: '交差点(こうさてん)',
    },
    {
        text: 'inu',
        trans: ['dog'],
        label: '犬(いぬ)',
    },
    {
        text: 'kinou',
        trans: ['Yesterday'],
        label: '昨日(きのう)',
    },
    {
        text: 'yaoya',
        trans: ['greengrocer'],
        label: '八百屋(やおや)',
    },
    {
        text: 'dandan',
        trans: ['gradually'],
        label: 'だんだん',
    },
    {
        text: 'hiru',
        trans: ['noon, daytime'],
        label: '昼(ひる)',
    },
    {
        text: 'amari',
        trans: ['not very'],
        label: 'あまり',
    },
    {
        text: 'omoi',
        trans: ['Heavy'],
        label: '重(おも)い',
    },
    {
        text: 'haru',
        trans: ['to stick'],
        label: '貼(は)る',
    },
    {
        text: 'taisetsu',
        trans: ['important'],
        label: '大切(たいせつ)',
    },
    {
        text: 'naka',
        trans: ['middle'],
        label: '中(なか)',
    },
    {
        text: 'iku',
        trans: ['to go'],
        label: '行(い)く',
    },
    {
        text: 'migi',
        trans: ['right side'],
        label: '右(みぎ)',
    },
    {
        text: 'pan',
        trans: ['bread'],
        label: 'パン',
    },
    {
        text: 'hashi',
        trans: ['bridge'],
        label: '橋(はし)',
    },
    {
        text: 'ani',
        trans: ['(humble) older brother'],
        label: '兄(あに)',
    },
    {
        text: 'asoko',
        trans: ['over there'],
        label: 'あそこ',
    },
    {
        text: 'suu',
        trans: ['to smoke, to suck'],
        label: '吸(す)う',
    },
    {
        text: 'mijikai',
        trans: ['short'],
        label: '短(みじか)い',
    },
    {
        text: 'nomu',
        trans: ['to drink'],
        label: '飲(の)む',
    },
    {
        text: 'imouto',
        trans: ['(humble) younger sister'],
        label: '妹(いもうと)',
    },
    {
        text: 'hiroi',
        trans: ['spacious,wide'],
        label: '広(ひろ)い',
    },
    {
        text: 'yowai',
        trans: ['weak'],
        label: '弱(よわ)い',
    },
    {
        text: 'hoshii',
        trans: ['want'],
        label: '欲(ほ)しい',
    },
    {
        text: 'tonari',
        trans: ['next door to'],
        label: '隣(となり)',
    },
    {
        text: 'naru',
        trans: ['to become'],
        label: 'なる',
    },
    {
        text: 'arau',
        trans: ['to wash'],
        label: '洗(あら)う',
    },
    {
        text: 'rei',
        trans: ['zero'],
        label: '零(れい)',
    },
    {
        text: 'kaban',
        trans: ['bag, basket'],
        label: '鞄(かばん)',
    },
    {
        text: 'erebeetaa',
        trans: ['elevator'],
        label: 'エレベーター',
    },
    {
        text: 'gozen',
        trans: ['morning'],
        label: '午前(ごぜん)',
    },
    {
        text: 'uru',
        trans: ['to sell'],
        label: '売(う)る',
    },
    {
        text: 'seetaa',
        trans: ['sweater, jumper'],
        label: 'セーター',
    },
    {
        text: 'hanashi',
        trans: ['talk,story'],
        label: '話(はなし)',
    },
    {
        text: 'aki',
        trans: ['autumn'],
        label: '秋(あき)',
    },
    {
        text: 'senshuu',
        trans: ['last week'],
        label: '先週(せんしゅう)',
    },
    {
        text: 'akeru',
        trans: ['to open'],
        label: '開(あ)ける',
    },
    {
        text: 'ano',
        trans: ['that over there'],
        label: 'あの',
    },
    {
        text: 'se',
        trans: ['height, stature'],
        label: '背(せ)',
    },
    {
        text: 'furu',
        trans: ['to fall, e.g. rain or snow'],
        label: '降(ふ)る',
    },
    {
        text: 'muzukashii',
        trans: ['difficult'],
        label: '難(むずか)しい',
    },
    {
        text: 'otona',
        trans: ['Adult'],
        label: '大人(おとな)',
    },
    {
        text: 'machi',
        trans: ['town,city'],
        label: '町(まち)',
    },
    {
        text: 'kuroi',
        trans: ['black'],
        label: '黒(くろ)い',
    },
    {
        text: 'minasan',
        trans: ['everyone'],
        label: '皆(みな)さん',
    },
    {
        text: 'san',
        trans: ['Three'],
        label: '三(さん)',
    },
    {
        text: 'kore',
        trans: ['This'],
        label: 'これ',
    },
    {
        text: 'kotaeru',
        trans: ['to answer'],
        label: '答(こた)える',
    },
    {
        text: 'kissaten',
        trans: ['coffee lounge'],
        label: '喫茶店(きっさてん)',
    },
    {
        text: 'sukoshi',
        trans: ['Few'],
        label: '少(すこ)し',
    },
    {
        text: 'soba',
        trans: ['near, beside'],
        label: 'そば',
    },
    {
        text: 'mannenhitsu',
        trans: ['fountain pen'],
        label: '万年筆(まんねんひつ)',
    },
    {
        text: 'onaka',
        trans: ['stomach'],
        label: 'おなか',
    },
    {
        text: 'eigakan',
        trans: ['cinema'],
        label: '映画(えいが)館(かん)',
    },
    {
        text: 'kyoudai',
        trans: ['(humble) siblings'],
        label: '兄弟(きょうだい)',
    },
    {
        text: 'ireru',
        trans: ['to put in'],
        label: '入(い)れる',
    },
    {
        text: 'mada',
        trans: ['yet,still'],
        label: 'まだ',
    },
    {
        text: 'densha',
        trans: ['electric train'],
        label: '電車(でんしゃ)',
    },
    {
        text: 'tatsu',
        trans: ['to stand'],
        label: '立(た)つ',
    },
    {
        text: 'posuto',
        trans: ['post'],
        label: 'ポスト',
    },
    {
        text: 'naze',
        trans: ['why'],
        label: 'なぜ',
    },
    {
        text: 'dekiru',
        trans: ['to be able to'],
        label: 'できる',
    },
    {
        text: 'zubon',
        trans: ['Trousers'],
        label: 'ズボン',
    },
    {
        text: 'nekutai',
        trans: ['tie,necktie'],
        label: 'ネクタイ',
    },
    {
        text: 'sakana',
        trans: ['Fish'],
        label: '魚(さかな)',
    },
    {
        text: 'teeburu',
        trans: ['table'],
        label: 'テーブル',
    },
    {
        text: 'kokonotsu',
        trans: ['Nine'],
        label: '九(ここの)つ',
    },
    {
        text: 'kasa',
        trans: ['Umbrella'],
        label: '傘(かさ)',
    },
    {
        text: 'maishuu',
        trans: ['every week'],
        label: '毎週(まいしゅう)',
    },
    {
        text: 'yasui',
        trans: ['cheap'],
        label: '安(やす)い',
    },
    {
        text: 'megane',
        trans: ['glasses'],
        label: '眼鏡(めがね)',
    },
    {
        text: 'shiroi',
        trans: ['White'],
        label: '白(しろ)い',
    },
    {
        text: 'enpitsu',
        trans: ['pencil'],
        label: '鉛筆(えんぴつ)',
    },
    {
        text: 'kaesu',
        trans: ['to return something'],
        label: '返(かえ)す',
    },
    {
        text: 'soto',
        trans: ['Outside'],
        label: '外(そと)',
    },
    {
        text: 'hajime/hajime',
        trans: ['beginning'],
        label: '初(はじ)め/始(はじ)め',
    },
    {
        text: 'tabemono',
        trans: ['food'],
        label: '食(た)べ物(もの)',
    },
    {
        text: 'douzo',
        trans: ['please'],
        label: 'どうぞ',
    },
    {
        text: 'aoi',
        trans: ['blue'],
        label: '青(あお)い',
    },
    {
        text: 'kono',
        trans: ['This'],
        label: 'この',
    },
    {
        text: 'nijuunichi',
        trans: ['twenty days,twentieth'],
        label: '二(に)十(じゅう)日(にち)',
    },
    {
        text: 'saifu',
        trans: ['Wallet'],
        label: '財布(さいふ)',
    },
    {
        text: 'gakkou',
        trans: ['School'],
        label: '学校(がっこう)',
    },
    {
        text: 'tsukareru',
        trans: ['to get tired'],
        label: '疲(つか)れる',
    },
    {
        text: 'sengetsu',
        trans: ['last month'],
        label: '先月(せんげつ)',
    },
    {
        text: 'ichinichi',
        trans: ['first of month'],
        label: '一(いち)日(にち)',
    },
    {
        text: 'bourupen',
        trans: ['ball-point pen'],
        label: 'ボールペン',
    },
    {
        text: 'oneesan',
        trans: ['(honorable) older sister'],
        label: 'お姉(ねえ)さん',
    },
    {
        text: 'suzushii',
        trans: ['Refreshing'],
        label: '涼(すず)しい',
    },
    {
        text: 'atarashii',
        trans: ['new'],
        label: '新(あたら)しい',
    },
    {
        text: 'toru',
        trans: ['to take a photo or record a film'],
        label: '撮(と)る',
    },
    {
        text: 'meetoru',
        trans: ['metre'],
        label: 'メートル',
    },
    {
        text: 'kouhii',
        trans: ['Coffee'],
        label: 'コーヒー',
    },
    {
        text: 'yon',
        trans: ['Four'],
        label: '四(よん)',
    },
    {
        text: 'hima',
        trans: ['free time'],
        label: '暇(ひま)',
    },
    {
        text: 'demo',
        trans: ['but'],
        label: 'でも',
    },
    {
        text: 'ichinin',
        trans: ['one person'],
        label: '一(いち)人(にん)',
    },
    {
        text: 'yomu',
        trans: ['to read'],
        label: '読(よ)む',
    },
    {
        text: 'apaato',
        trans: ['apartment'],
        label: 'アパート',
    },
    {
        text: 'iu',
        trans: ['to say'],
        label: '言(い)う',
    },
    {
        text: 'mae',
        trans: ['before'],
        label: '前(まえ)',
    },
    {
        text: 'butaniku',
        trans: ['pork'],
        label: '豚肉(ぶたにく)',
    },
    {
        text: 'kudasai',
        trans: ['Please'],
        label: 'ください',
    },
    {
        text: 'sentaku',
        trans: ['Washing'],
        label: '洗濯(せんたく)',
    },
    {
        text: 'niwa',
        trans: ['garden'],
        label: '庭(にわ)',
    },
    {
        text: 'sumu',
        trans: ['to live in'],
        label: '住(す)む',
    },
    {
        text: 'imi',
        trans: ['meaning'],
        label: '意味(いみ)',
    },
    {
        text: 'hoka',
        trans: ['other, the rest'],
        label: 'ほか',
    },
    {
        text: 'semai',
        trans: ['Narrow'],
        label: '狭(せま)い',
    },
    {
        text: 'kyou',
        trans: ['Today'],
        label: '今日(きょう)',
    },
    {
        text: 'matsu',
        trans: ['to wait'],
        label: '待(ま)つ',
    },
    {
        text: 'namae',
        trans: ['name'],
        label: '名前(なまえ)',
    },
    {
        text: 'ano',
        trans: ['um...'],
        label: 'あの',
    },
    {
        text: 'go',
        trans: ['Five'],
        label: '五(ご)',
    },
    {
        text: 'deha',
        trans: ['with that...'],
        label: 'では',
    },
    {
        text: 'konshuu',
        trans: ['this week'],
        label: '今週(こんしゅう)',
    },
    {
        text: 'tabun',
        trans: ['probably'],
        label: '多分(たぶん)',
    },
    {
        text: 'iku',
        trans: ['to go'],
        label: '行(い)く',
    },
    {
        text: 'tomaru',
        trans: ['to come to a halt'],
        label: '止(と)まる',
    },
    {
        text: 'sarainen',
        trans: ['year after next'],
        label: 'さ来年(らいねん)',
    },
    {
        text: 'supoutsu',
        trans: ['Sport'],
        label: 'スポーツ',
    },
    {
        text: 'mizu',
        trans: ['water'],
        label: '水(みず)',
    },
    {
        text: 'kaze',
        trans: ['Wind'],
        label: '風(かぜ)',
    },
    {
        text: 'han',
        trans: ['half'],
        label: '半(はん)',
    },
    {
        text: 'tanjoubi',
        trans: ['birthday'],
        label: '誕生(たんじょう)日(び)',
    },
    {
        text: 'karee',
        trans: ['Curry'],
        label: 'カレー',
    },
    {
        text: 'firumu',
        trans: ['roll of film'],
        label: 'フィルム',
    },
    {
        text: 'tsukau',
        trans: ['to use'],
        label: '使(つか)う',
    },
    {
        text: 'pen',
        trans: ['pen'],
        label: 'ペン',
    },
    {
        text: 'heya',
        trans: ['room'],
        label: '部屋(へや)',
    },
    {
        text: 'juu',
        trans: ['Ten'],
        label: '十(じゅう)',
    },
    {
        text: 'otouto',
        trans: ['younger brother'],
        label: '弟(おとうと)',
    },
    {
        text: 'iriguchi',
        trans: ['entrance'],
        label: '入口(いりぐち)',
    },
    {
        text: 'socchi',
        trans: ['over there'],
        label: 'そっち',
    },
    {
        text: 'gyuuniku',
        trans: ['Beef'],
        label: '牛肉(ぎゅうにく)',
    },
    {
        text: 'jouzu',
        trans: ['Skillful'],
        label: '上手(じょうず)',
    },
    {
        text: 'kekkou',
        trans: ['splendid, enough'],
        label: '結構(けっこう)',
    },
    {
        text: 'oboeru',
        trans: ['to remember'],
        label: '覚(おぼ)える',
    },
    {
        text: 'chiisana',
        trans: ['little'],
        label: '小(ちい)さな',
    },
    {
        text: 'umareru',
        trans: ['to be born'],
        label: '生(う)まれる',
    },
    {
        text: 'karada',
        trans: ['Body'],
        label: '体(からだ)',
    },
    {
        text: 'dono',
        trans: ['which'],
        label: 'どの',
    },
    {
        text: 'akai',
        trans: ['red'],
        label: '赤(あか)い',
    },
    {
        text: 'mondai',
        trans: ['problem'],
        label: '問題(もんだい)',
    },
    {
        text: 'ninin',
        trans: ['two people'],
        label: '二(に)人(にん)',
    },
    {
        text: 'tomodachi',
        trans: ['friend'],
        label: '友達(ともだち)',
    },
    {
        text: 'kazoku',
        trans: ['Family'],
        label: '家族(かぞく)',
    },
    {
        text: 'yoru',
        trans: ['evening,night'],
        label: '夜(よる)',
    },
    {
        text: 'ashi',
        trans: ['foot, leg'],
        label: '足(あし)',
    },
    {
        text: 'kudamono',
        trans: ['Fruit'],
        label: '果物(くだもの)',
    },
    {
        text: 'kitte',
        trans: ['postage stamp'],
        label: '切手(きって)',
    },
    {
        text: 'fuutou',
        trans: ['envelope'],
        label: '封筒(ふうとう)',
    },
    {
        text: 'ichiban',
        trans: ['best, first'],
        label: 'いちばん',
    },
    {
        text: 'najiranai',
        trans: ['boring'],
        label: '詰(なじ)らない',
    },
    {
        text: 'hiku',
        trans: ['to pull'],
        label: '引(ひ)く',
    },
    {
        text: 'shinu',
        trans: ['to die'],
        label: '死(し)ぬ',
    },
    {
        text: 'nochi',
        trans: ['afterwards'],
        label: '後(のち)',
    },
    {
        text: 'chairo',
        trans: ['brown'],
        label: '茶色(ちゃいろ)',
    },
    {
        text: 'nanatsu',
        trans: ['seven'],
        label: '七(なな)つ',
    },
    {
        text: 'shinbun',
        trans: ['newspaper'],
        label: '新聞(しんぶん)',
    },
    {
        text: 'yasashii',
        trans: ['easy, simple'],
        label: '易(やさ)しい',
    },
    {
        text: 'eiga',
        trans: ['movie'],
        label: '映画(えいが)',
    },
    {
        text: 'urusai',
        trans: ['noisy, annoying'],
        label: '煩(うるさ)い',
    },
    {
        text: 'mura',
        trans: ['village'],
        label: '村(むら)',
    },
    {
        text: 'abiru',
        trans: ['to bathe, to shower'],
        label: 'あびる',
    },
    {
        text: 'ame',
        trans: ['candy'],
        label: '飴(あめ)',
    },
    {
        text: 'tsurai',
        trans: ['Spicy'],
        label: '辛(つら)い',
    },
    {
        text: 'obaasan',
        trans: ['grandmother, female senior-citizen'],
        label: 'おばあさん',
    },
    {
        text: 'onaji',
        trans: ['same'],
        label: '同(おな)じ',
    },
    {
        text: 'neru',
        trans: ['to go to bed,to sleep'],
        label: '寝(ね)る',
    },
    {
        text: 'motto',
        trans: ['more'],
        label: 'もっと',
    },
    {
        text: 'zasshi',
        trans: ['Magazine'],
        label: '雑誌(ざっし)',
    },
    {
        text: 'au',
        trans: ['to meet'],
        label: '会(あ)う',
    },
    {
        text: 'iru',
        trans: ['to need'],
        label: '要(い)る',
    },
    {
        text: 'midori',
        trans: ['green'],
        label: '緑(みどり)',
    },
    {
        text: 'shashin',
        trans: ['photograph'],
        label: '写真(しゃしん)',
    },
    {
        text: 'kotoshi',
        trans: ['this year'],
        label: '今年(ことし)',
    },
    {
        text: 'haizara',
        trans: ['ashtray'],
        label: '灰皿(はいざら)',
    },
    {
        text: 'nijuusai',
        trans: ['20 years old,20th year'],
        label: '二(に)十(じゅう)歳(さい)',
    },
];

export default defaultWords;

// const defaultWords: Word[] = [
//     {
//         label: '邮件',
//         text: 'youjian',
//     },
//     {
//         label: '离开',
//         text: 'likai',
//     },
//     {
//         label: '准备',
//         text: 'zhunbei',
//     },
//     {
//         label: '庆祝',
//         text: 'qingzhu',
//     },
//     {
//         label: '宿舍',
//         text: 'sushe',
//     },
//     {
//         label: '注意',
//         text: 'zhuyi',
//     },
//     {
//         label: '非常',
//         text: 'feichang',
//     },
//     {
//         label: '家庭',
//         text: 'jiating',
//     },
//     {
//         label: '去年',
//         text: 'qunian',
//     },
//     {
//         label: '点心',
//         text: 'dianxin',
//     },
//     {
//         label: '上课',
//         text: 'shangke',
//     },
//     {
//         label: '美丽',
//         text: 'meili',
//     },
//     {
//         label: '德国',
//         text: 'deguo',
//     },
//     {
//         label: '一定',
//         text: 'yiding',
//     },
//     {
//         label: '着急',
//         text: 'zhaoji',
//     },
//     {
//         label: '铅笔',
//         text: 'qianbi',
//     },
//     {
//         label: '痛苦',
//         text: 'tongku',
//     },
//     {
//         label: '必须',
//         text: 'bixu',
//     },
//     {
//         label: '病人',
//         text: 'bingren',
//     },
//     {
//         label: '现在',
//         text: 'xianzai',
//     },
//     {
//         label: '牛奶',
//         text: 'niunai',
//     },
//     {
//         label: '月亮',
//         text: 'yueliang',
//     },
//     {
//         label: '早上',
//         text: 'zaoshang',
//     },
//     {
//         label: '简单',
//         text: 'jiandan',
//     },
//     {
//         label: '瓶子',
//         text: 'pingzi',
//     },
//     {
//         label: '哥哥',
//         text: 'gege',
//     },
//     {
//         label: '音乐',
//         text: 'yinyue',
//     },
//     {
//         label: '筷子',
//         text: 'kuaizi',
//     },
//     {
//         label: '还是',
//         text: 'haishi',
//     },
//     {
//         label: '桌子',
//         text: 'zhuozi',
//     },
//     {
//         label: '看见',
//         text: 'kanjian',
//     },
//     {
//         label: '一边',
//         text: 'yibian',
//     },
//     {
//         label: '大声',
//         text: 'dasheng',
//     },
//     {
//         label: '风景',
//         text: 'fengjing',
//     },
//     {
//         label: '餐厅',
//         text: 'canting',
//     },
//     {
//         label: '木头',
//         text: 'mutou',
//     },
//     {
//         label: '新年',
//         text: 'xinnian',
//     },
//     {
//         label: '嘴巴',
//         text: 'zuiba',
//     },
//     {
//         label: '应该',
//         text: 'yinggai',
//     },
//     {
//         label: '过来',
//         text: 'guolai',
//     },
//     {
//         label: '今天',
//         text: 'jintian',
//     },
//     {
//         label: '真好',
//         text: 'zhenhao',
//     },
//     {
//         label: '奥利奥',
//         text: 'aoliao',
//     },
//     {
//         label: '键盘',
//         text: 'jianpan',
//     },
//     {
//         label: '真实',
//         text: 'zhenshi',
//     },
//     {
//         label: '优联',
//         text: 'youlian',
//     },
//     {
//         label: '蓝牙',
//         text: 'lanya',
//     },
//     {
//         label: '无线',
//         text: 'wuxian',
//     },
//     {
//         label: '三明治',
//         text: 'sanmingzhi',
//     },
//     {
//         label: '胶条',
//         text: 'jiaotiao',
//     },
//     {
//         label: '星夜',
//         text: 'xingye',
//     },
//     {
//         label: '奶油',
//         text: 'naiyou',
//     },
//     {
//         label: '熊猫',
//         text: 'xiongmao',
//     },
//     {
//         label: '可乐',
//         text: 'kele',
//     },
//     {
//         label: '海外',
//         text: 'haiwai',
//     },
//     {
//         label: '矩阵',
//         text: 'juzhen',
//     },
//     {
//         label: '塑料',
//         text: 'suliao',
//     },
//     {
//         label: '大骨',
//         text: 'dagu',
//     },
//     {
//         label: '营地',
//         text: 'yingdi',
//     },
//     {
//         label: '无限',
//         text: 'wuxian',
//     },
//     {
//         label: '虚拟',
//         text: 'xuni',
//     },
//     {
//         label: '电玩',
//         text: 'dianwan',
//     },
//     {
//         label: '徽章',
//         text: 'huizhang',
//     },
//     {
//         label: '北极圈',
//         text: 'beijiquan',
//     },
//     {
//         label: '仁王',
//         text: 'renwang',
//     },
//     {
//         label: '怪物',
//         text: 'guaiwu',
//     },
//     {
//         label: '猎人',
//         text: 'lieren',
//     },
//     {
//         label: '大佬',
//         text: 'dalao',
//     },
//     {
//         label: '开车',
//         text: 'kaiche',
//     },
//     {
//         label: '代组',
//         text: 'daizu',
//     },
//     {
//         label: '亚克力',
//         text: 'yakeli',
//     },
//     {
//         label: '黄铜',
//         text: 'huangtong',
//     },
//     {
//         label: '不锈钢',
//         text: 'buxiugang',
//     },
//     {
//         label: '铝锭',
//         text: 'lvding',
//     },
//     {
//         label: '注塑',
//         text: 'zhusu',
//     },
//     {
//         label: '菠萝',
//         text: 'boluo',
//     },
//     {
//         label: '霓虹',
//         text: 'nihong',
//     },
//     {
//         label: '螺丝',
//         text: 'luosi',
//     },
//     {
//         label: '卫星轴',
//         text: 'weixingzhou',
//     },
//     {
//         label: '红白机',
//         text: 'hongbaiji',
//     },
//     {
//         label: '幻影',
//         text: 'huanying',
//     },
//     {
//         label: '日文',
//         text: 'riwen',
//     },
//     {
//         label: '俄文',
//         text: 'ewen',
//     },
//     {
//         label: '键帽',
//         text: 'jianmao',
//     },
//     {
//         label: '套件',
//         text: 'taojian',
//     },
//     {
//         label: '碳纤维',
//         text: 'tanxianwei',
//     },
//     {
//         label: '玻纤',
//         text: 'boxian',
//     },
//     {
//         label: '热升华',
//         text: 'reshenghua',
//     },
//     {
//         label: '头发',
//         text: 'toufa',
//     },
//     {
//         label: '客厅',
//         text: 'keting',
//     },
//     {
//         label: '游泳池',
//         text: 'youyongchi',
//     },
//     {
//         label: '周末',
//         text: 'zhoumo',
//     },
//     {
//         label: '弟弟',
//         text: 'didi',
//     },
//     {
//         label: '可爱',
//         text: 'keai',
//     },
//     {
//         label: '鹦鹉',
//         text: 'yingwu',
//     },
//     {
//         label: '漂白',
//         text: 'piaobai',
//     },
//     {
//         label: '电泳',
//         text: 'dianyong',
//     },
//     {
//         label: '武士道',
//         text: 'wushidao',
//     },
//     {
//         label: '码农',
//         text: 'manong',
//     },
//     {
//         label: '脉冲',
//         text: 'maichong',
//     },
//     {
//         label: '蒸汽波',
//         text: 'zhengqibo',
//     },
//     {
//         label: '青柠',
//         text: 'qingning',
//     },
//     {
//         label: '声波',
//         text: 'shengbo',
//     },
//     {
//         label: '橄榄',
//         text: 'ganlan',
//     },
//     {
//         label: '前锋',
//         text: 'qianfeng',
//     },
//     {
//         label: '深空',
//         text: 'shenkong',
//     },
//     {
//         label: '原点',
//         text: 'yuandian',
//     },
//     {
//         label: '樱花',
//         text: 'yinghua',
//     },
//     {
//         label: '原厂',
//         text: 'yuanchang',
//     },
//     {
//         label: '静电容',
//         text: 'jingdianrong',
//     },
//     {
//         label: '抛光',
//         text: 'paoguang',
//     },
//     {
//         label: '佳达隆',
//         text: 'jiadalong',
//     },
//     {
//         label: '宁芝',
//         text: 'ningzhi',
//     },
//     {
//         label: '北极星',
//         text: 'beijixing',
//     },
//     {
//         label: '退烧',
//         text: 'tuishao',
//     },
//     {
//         label: '吃瓜',
//         text: 'chigua',
//     },
//     {
//         label: '解毒',
//         text: 'jiedu',
//     },
//     {
//         label: '摸鱼',
//         text: 'moyu',
//     },
//     {
//         label: '樱桃',
//         text: 'yingtao',
//     },
//     {
//         label: '树懒',
//         text: 'shulan',
//     },
//     {
//         label: '模拟',
//         text: 'moni',
//     },
//     {
//         label: '激光',
//         text: 'jiguang',
//     },
//     {
//         label: '阳极',
//         text: 'yangji',
//     },
//     {
//         label: '喷涂',
//         text: 'pentu',
//     },
//     {
//         label: '便当',
//         text: 'biandang',
//     },
//     {
//         label: '夜行者',
//         text: 'yexingzhe',
//     },
//     {
//         label: '锤头鲨',
//         text: 'chuitousha',
//     },
//     {
//         label: '核子',
//         text: 'hezi',
//     },
//     {
//         label: '涂改',
//         text: 'tugai',
//     },
//     {
//         label: '神佑',
//         text: 'shenyou',
//     },
//     {
//         label: '注音',
//         text: 'zhuyin',
//     },
//     {
//         label: '桃花',
//         text: 'taohua',
//     },
//     {
//         label: '暗黑',
//         text: 'anhei',
//     },
//     {
//         label: '海岸',
//         text: 'haian',
//     },
//     {
//         label: '巧克力',
//         text: 'qiaokeli',
//     },
//     {
//         label: '斯巴达',
//         text: 'sibada',
//     },
//     {
//         label: '鬼魂',
//         text: 'guihun',
//     },
//     {
//         label: '爆裂',
//         text: 'baolie',
//     },
//     {
//         label: '绿洲',
//         text: 'lvzhou',
//     },
//     {
//         label: '标本',
//         text: 'biaoben',
//     },
//     {
//         label: '巫妖',
//         text: 'wuyao',
//     },
//     {
//         label: '永恒',
//         text: 'yongheng',
//     },
//     {
//         label: '奶昔',
//         text: 'naixi',
//     },
//     {
//         label: '河马',
//         text: 'hema',
//     },
//     {
//         label: '使命',
//         text: 'shiming',
//     },
//     {
//         label: '召唤',
//         text: 'zhaohuan',
//     },
//     {
//         label: '黑色',
//         text: 'heise',
//     },
//     {
//         label: '行动',
//         text: 'xingdong',
//     },
//     {
//         label: '白色',
//         text: 'baise',
//     },
//     {
//         label: '牛头',
//         text: 'niutou',
//     },
//     {
//         label: '个性',
//         text: 'gexing',
//     },
//     {
//         label: '战神',
//         text: 'zhanshen',
//     },
//     {
//         label: '现代',
//         text: 'xiandai',
//     },
//     {
//         label: '战争',
//         text: 'zhanzheng',
//     },
//     {
//         label: '凯华',
//         text: 'kaihua',
//     },
//     {
//         label: '精微科',
//         text: 'jingweike',
//     },
//     {
//         label: '空间',
//         text: 'kongjian',
//     },
//     {
//         label: '东方',
//         text: 'dongfang',
//     },
//     {
//         label: '山水',
//         text: 'shanshui',
//     },
//     {
//         label: '微光',
//         text: 'weiguang',
//     },
//     {
//         label: '西装',
//         text: 'xizhuang',
//     },
//     {
//         label: '血缘',
//         text: 'xueyuan',
//     },
//     {
//         label: '诅咒',
//         text: 'zuzhou',
//     },
//     {
//         label: '钢板',
//         text: 'gangban',
//     },
//     {
//         label: '打卡',
//         text: 'daka',
//     },
//     {
//         label: '签到',
//         text: 'qiandao',
//     },
//     {
//         label: '上班',
//         text: 'shangban',
//     },
//     {
//         label: '双模',
//         text: 'shuangmo',
//     },
//     {
//         label: '单模',
//         text: 'danmo',
//     },
//     {
//         label: '划水',
//         text: 'huashui',
//     },
//     {
//         label: '外卖',
//         text: 'waimai',
//     },
//     {
//         label: '赞助',
//         text: 'zanzhu',
//     },
//     {
//         label: '打赏',
//         text: 'dashang',
//     },
//     {
//         label: '机械',
//         text: 'jixie',
//     },
//     {
//         label: '开关',
//         text: 'kaiguan',
//     },
//     {
//         label: '游戏',
//         text: 'youxi',
//     },
//     {
//         label: '无敌',
//         text: 'wudi',
//     },
//     {
//         label: '瞎眼',
//         text: 'xiayan',
//     },
//     {
//         label: '心态',
//         text: 'xintai',
//     },
//     {
//         label: '照片',
//         text: 'zhaopian',
//     },
//     {
//         label: '润滑',
//         text: 'runhua',
//     },
//     {
//         label: '联机',
//         text: 'lianji',
//     },
//     {
//         label: '配重',
//         text: 'peizhong',
//     },
//     {
//         label: '设计',
//         text: 'sheji',
//     },
//     {
//         label: '装饰',
//         text: 'zhuangshi',
//     },
//     {
//         label: '铭牌',
//         text: 'mingpai',
//     },
//     {
//         label: '定制',
//         text: 'dingzhi',
//     },
//     {
//         label: '独木舟',
//         text: 'dumuzhou',
//     },
//     {
//         label: '边牧',
//         text: 'bianmu',
//     },
//     {
//         label: '产品',
//         text: 'chanpin',
//     },
//     {
//         label: '鼠标',
//         text: 'shubiao',
//     },
//     {
//         label: '外设',
//         text: 'waishe',
//     },
//     {
//         label: '交流',
//         text: 'jiaoliu',
//     },
//     {
//         label: '磨砂',
//         text: 'mosha',
//     },
//     {
//         label: '透光',
//         text: 'touguang',
//     },
//     {
//         label: '打字',
//         text: 'dazi',
//     },
//     {
//         label: '玩具',
//         text: 'wanju',
//     },
//     {
//         label: '品牌',
//         text: 'pinpai',
//     },
//     {
//         label: '工作室',
//         text: 'gongzuoshi',
//     },
// ];
