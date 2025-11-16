import { Locale } from '@/i18n';
import { StaticImageData } from 'next/image';

type Localized<T = string> = {
  [K in Locale]: T;
};

type Movie = {
  title: Localized;
  author: Localized;
  duration: Localized;
  synopsis: Localized<string[]>;
  type: 'israeli' | 'international';
};

type MoviesObject = {
  [K in string]: Movie;
};

const moviesObject = {
  'A Paper Coffee Cup Story': {
    title: {
      en: 'A Paper Coffee Cup Story',
      ru: 'История бумажного кофейного стаканчика',
      he: 'סיפור כוס הקפה מנייר',
    },
    author: {
      en: 'Igor Gusev',
      ru: 'Игорь Гусев',
      he: 'איגור גוסב',
    },
    duration: {
      en: '3 min 47 sec',
      ru: '3 минуты 47 секунд',
      he: '3 דקות ו־47 שניות',
    },
    synopsis: {
      en: [
        'This is a story about creative and sensitive people who find each other and become soul mates.',
      ],
      ru: [
        'Это история о творческих и чувствительных людях, которые находят друг друга и становятся родственными душами.',
      ],
      he: ['זהו סיפור על אנשים יצירתיים ורגישים שמוצאים זה את זה והופכים לנשמות תאומות'],
    },
    type: 'international',
  },
  'All About': {
    title: {
      en: 'All About',
      ru: 'Обо всём',
      he: 'הכול על',
    },
    author: {
      en: 'Antonina Shelaeva',
      ru: 'Антонина Шелаева',
      he: 'אנטונינה שלייבה',
    },
    duration: {
      en: '2 min.',
      ru: '2 минуты',
      he: '2 דקות',
    },
    synopsis: {
      en: [
        'A memory of breaks. It was created as part of the Energy Injection intensive in 12 days.',
      ],
      ru: [
        'Воспоминание о разрывах. Фильм был создан в рамках интенсива Energy Injection за 12 дней.',
      ],
      he: ['זיכרון של שברים. הסרט נוצר במסגרת הסדנה האינטנסיבית Energy Injection במשך 12 ימים.'],
    },
    type: 'international',
  },
  Alyoshenka: {
    title: {
      en: 'Alyoshenka',
      ru: 'Алёшенька',
      he: 'אליושנקה',
    },
    author: {
      en: 'Dmitry Geller',
      ru: 'Дмитрий Геллер',
      he: 'דמיטרי גלר',
    },
    duration: {
      en: '24 min',
      ru: '24 минуты',
      he: '24 דקות',
    },
    synopsis: {
      en: [
        'A series of unexpected events lead the alien Alyoshenka to Earth. His appearance on the planet spurs supernatural forces into action. And still the cold space and his lost native planet call to him.',
      ],
      ru: [
        'Цепочка неожиданных событий приводит инопланетянина Алёшеньку на Землю. Его появление на планете пробуждает к действию сверхъестественные силы. Но холодный космос и его потерянная родная планета продолжают звать его обратно.',
      ],
      he: [
        'סדרת אירועים בלתי צפויים מביאה את היצור החוצני אליושנקה אל כדור הארץ. הופעתו בכוכב מפעילה כוחות על־טבעיים, אך החלל הקר והכוכב האבוד שממנו הגיע ממשיכים לקרוא לו לשוב.',
      ],
    },
    type: 'international',
  },
  Cosmicat: {
    title: {
      en: 'Cosmicat',
      ru: 'Космикот',
      he: 'קוסמיקט',
    },
    author: {
      en: 'Hyeonji Oh',
      ru: 'Хёнджи О',
      he: 'היונג’י או',
    },
    duration: {
      en: '5 min.',
      ru: '5 минут',
      he: '5 דקות',
    },
    synopsis: {
      en: [
        'The thesis film Cosmicat reveals a shocking truth: cats are alien invaders! Sent by Commander Nyaro after their icy planet began to die, they aim to conquer Earth for survival—starting with ancient Egypt. Will humanity surrender to these clever creatures?',
      ],
      ru: [
        'Дипломный фильм Cosmicat раскрывает тайну: кошки — инопланетяне! Когда их родная планета замёрзла, командир Няро прибыл на Землю, чтобы завоевать её ради выживания своего вида, начиная с древнего Египта. Сдадутся ли люди этим хитрым существам?',
      ],
      he: [
        'סרט הגמר Cosmicat חושף אמת מפתיעה: חתולים הם בעצם חייזרים! כשכוכב הבית שלהם קפא, המפקדת ניארו נשלחה לכדור הארץ כדי לכבוש אותו ולהציל את עמה. היא פונה לפרעה במצרים בדרישה נועזת – האם החתולים יצליחו להשתלט על העולם?',
      ],
    },
    type: 'international',
  },
  Hertz: {
    title: {
      en: 'Hertz',
      ru: 'Герц',
      he: 'הרץ',
    },
    author: {
      en: 'Zixi Zhang, Xiayang Li',
      ru: 'Цзи Си Чжан, Ся Ян Ли',
      he: 'זישי ג׳אנג, שיאיאנג לי',
    },
    duration: {
      en: '10 min.',
      ru: '10 минут',
      he: '10 דקות',
    },
    synopsis: {
      en: [
        'Hertz, an astronaut and son of a musician lost to time, meets Coco, a ghost who once dreamed of opera. A tragic encounter pulls him into her drifting cosmic theatre, where together they revive the silent stage and confront the intertwined echoes of their pasts.',
      ],
      ru: [
        'Герц, астронавт и сын музыканта, исчезнувшего во времени, встречает Коко — призрака, мечтавшего стать оперной певицей. Трагическая встреча втягивает его в её плывущий в космосе театр, где они оживляют молчалую сцену и сталкиваются с переплетёнными эхо прошлого.',
      ],
      he: [
        'הרץ, אסטרונאוט ובנו של מוזיקאי שאבד בזמן, פוגש את קוקו — רוח שחלמה להיות זמרת אופרה. מפגש טרגי מושך אותו לתיאטרה הצף בחלל, ושניהם מחיים את הבמה הדוממת ומתמודדים עם הדים שזורים מעברם.',
      ],
    },
    type: 'international',
  },
  'My Closet': {
    title: {
      en: 'My Closet',
      ru: 'Мой шкаф',
      he: 'הארון שלי',
    },
    author: {
      en: 'Iuliia Kotsiuba',
      ru: 'Юлия Коцюба',
      he: 'יוליה קוציובה',
    },
    duration: {
      en: '4 min.',
      ru: '4 минуты',
      he: '4 דקות',
    },
    synopsis: {
      en: [
        'A young woman, separated from her husband by tragic circumstances, clings to daily routines and her lover’s messages as she battles fear and despair. What happens if the connection disappears?',
      ],
      ru: [
        'Молодая женщина, разлучённая с мужем трагическими обстоятельствами, держится за повседневные дела и связь с возлюбленным, пытаясь преодолеть страх и отчаяние. Что будет, если связь оборвётся?',
      ],
      he: [
        'אישה צעירה שנאלצה להיפרד מבעלה עקב נסיבות טרגיות נאחזת בשגרה ובקשר עם אהובה כדי להתמודד עם פחד וייאוש. מה יקרה אם הקשר ייקטע?',
      ],
    },
    type: 'international',
  },
  Remarks: {
    title: {
      en: 'Remarks',
      ru: 'Ремарки',
      he: 'הערות',
    },
    author: {
      en: 'Maria Yakushina',
      ru: 'Мария Якушина',
      he: 'מריה יאקושינה',
    },
    duration: {
      en: '8 min.',
      ru: '8 минут',
      he: '8 דקות',
    },
    synopsis: {
      en: [
        'An animated attempt to portray an unknown person and his story, built entirely around a single small, seemingly insignificant fact known about him.',
      ],
      ru: [
        'Попытка с помощью анимации показать незнакомого человека и его историю, выстроенную вокруг единственного, незначительного факта, известного о нём.',
      ],
      he: [
        'ניסיון באמצעות אנימציה להציג אדם זר ואת סיפורו, המבוסס כולו על עובדה אחת קטנה ולא משמעותית הידועה עליו.',
      ],
    },
    type: 'international',
  },
  'Straight and in a Circle': {
    title: {
      en: 'Straight and in a Circle',
      ru: 'Прямо и по кругу',
      he: 'ישר ובמעגל',
    },
    author: {
      en: 'Palina Ramashka',
      ru: 'Палина Рамашка',
      he: 'פאלינה רמשקה',
    },
    duration: {
      en: '5 min',
      ru: '5 минут',
      he: '5 דקות',
    },
    synopsis: {
      en: [
        'An animation depicting the journey of forced migrants, highlighting the transformative power of empathy and integration. It captures the universal struggle of individuals seeking refuge and belonging in a new community.',
      ],
      ru: [
        'Анимационный фильм, изображающий путь вынужденных мигрантов и подчёркивающий преобразующую силу эмпатии и интеграции. Он передаёт универсальную борьбу людей, ищущих убежище и чувство принадлежности в новом сообществе.',
      ],
      he: [
        'אנימציה המתארת את מסעם של מהגרים בכפייה, ומדגישה את כוחה המרפא והמשנה של אמפתיה ושילוב. היא מבטאת את המאבק האוניברסלי של אנשים המבקשים מקלט ותחושת שייכות בקהילה חדשה.',
      ],
    },
    type: 'international',
  },
  'Stupid Dog': {
    title: {
      en: 'Stupid Dog',
      ru: 'Глупая собака',
      he: 'כלב טיפש',
    },
    author: {
      en: 'Daria Ishcheykina',
      ru: 'Дарья Ищейкина',
      he: "דריה אישצ'ייקינה",
    },
    duration: {
      en: '3 min.',
      ru: '3 минуты',
      he: '3 דקות',
    },
    synopsis: {
      en: [
        'The silly antics of the dog have long been getting on the owner’s nerves. But is there a hidden meaning behind them?',
      ],
      ru: [
        'Глупые выходки собаки уже давно раздражают хозяйку. Но скрывается ли за ними какой-то тайный смысл?',
      ],
      he: [
        'השובבות המטופשת של הכלב כבר מזמן מעצבנת את הבעלים. אבל האם מסתתר מאחוריה משמעות נסתרת?',
      ],
    },
    type: 'international',
  },
  'The Pangs of Mu': {
    title: {
      en: 'The Pangs of Mu',
      ru: 'Муки Му',
      he: 'ייסורי מו',
    },
    author: {
      en: 'Elena Kuznetsova',
      ru: 'Елена Кузнецова',
      he: 'אלנה קוזנצובה',
    },
    duration: {
      en: '2 min.',
      ru: '2 минуты',
      he: '2 דקות',
    },
    synopsis: {
      en: [
        'A young musician, plagued by the Pang of Music, wills to climbs the mountain of fame but becomes a victim of an unexpected side effect of his work. A frantic bird settles in his head—and it didn’t come alone!',
      ],
      ru: [
        'Молодой музыкант, измученный муками Музыки, мечтает взобраться на гору слова, но становится жертвой неожиданного побочного эффекта своей работы. В его голове поселяется безумная птица — и прилетела она не одна.',
      ],
      he: [
        'מוזיקאי צעיר, הסובל מ"ייסורי המוזיקה", חולם לטפס על הר ההצלחה. אך בדרכו אל הפסגה הוא נופל קורבן לתופעת לוואי בלתי צפויה של עבודתו. כתוצאה מכך, ציפור משוגעת ובלתי שקטה במיוחד משתכנת לפתע בראשו — אך מתברר בהמשך שהיא לא באה לבדה!',
      ],
    },
    type: 'international',
  },
  'The Race': {
    title: {
      en: 'The Race',
      ru: 'Гонка',
      he: 'המרוץ',
    },
    author: {
      en: 'Sofia Gutman and Jacques Collin',
      ru: 'София Гутман и Жак Коллен',
      he: "סופיה גוטמן וז'אק קולן",
    },
    duration: {
      en: '7 min.',
      ru: '7 мин.',
      he: '7 דקות',
    },
    synopsis: {
      en: [
        'What if our thoughts had taken the form of a wild horse race? Our fears represented by animals? At night, the race begins. This is the story of Tara and her subconscious...',
      ],
      ru: [
        'Что, если бы наши мысли приняли форму дикой скачки лошадей? Наши страхи воплотились бы в животных? Ночью начинается гонка. Это история Тары и её подсознания...',
      ],
      he: [
        'מה אם המחשבות שלנו היו מקבלות את הצורה של מרוץ סוסים פראי? והפחדים שלנו היו מתגלמים בחיות? בלילה המרוץ מתחיל. זהו סיפורה של טארה ותת-המודע שלה...',
      ],
    },
    type: 'international',
  },
  Ugly: {
    title: {
      en: 'Ugly',
      ru: 'Уродина',
      he: 'Ugly',
    },
    author: {
      en: 'Maria Odintsova',
      ru: 'Мария Одинцова',
      he: 'מריה אודינצובה',
    },
    duration: {
      en: '7 min.',
      ru: '7 мин.',
      he: '7 דקות',
    },
    synopsis: {
      en: [
        'A lonely scientist, left alone on an alien planet, lights up with the idea of creating a friend for himself, but the experiment does not go according to plan.',
      ],
      ru: [
        'Одинокий учёный, оставшийся в одиночестве на инопланетной планете, загорается идеей создать себе друга, но эксперимент идёт не по плану.',
      ],
      he: [
        'מדענית בודדה, שנשארה לבדה על כוכב לכת זר, נדלקת על הרעיון ליצור לעצמה חברה — אך הניסוי יוצא משליטה.',
      ],
    },
    type: 'international',
  },
  'ima wa ima': {
    title: {
      en: 'ima wa ima (now is now)',
      ru: 'ima wa ima (Сейчас — это сейчас)',
      he: 'ima wa ima (עכשיו זה עכשיו)',
    },
    author: {
      en: 'Chun Yam Keung',
      ru: 'Chun Yam Keung',
      he: "צ'ון יאם קיונג",
    },
    duration: {
      en: '5 min.',
      ru: '5 мин.',
      he: '5 דקות',
    },
    synopsis: {
      en: [
        'When an office worker discovers a caterpillar at work, a forgotten childhood memory resurfaces — one that loops through time, blending the mundane and the magical.',
      ],
      ru: [
        'Когда офисный работник обнаруживает на работе гусеницу, в его памяти всплывает забытое детское воспоминание — то, что циклично проходит сквозь время, переплетая обыденное и волшебное.',
      ],
      he: [
        'כשעובד משרד מגלה זחל במקום העבודה, צף בזיכרונו זיכרון ילדות שנשכח — כזה שחוזר בלולאה בזמן ומשלב בין היומיומי למופלא.',
      ],
    },
    type: 'international',
  },
  Apart: {
    title: {
      en: 'Apart',
      ru: 'На части',
      he: 'בנפרד',
    },
    author: {
      en: 'Oved Poran',
      ru: 'Овед Поран',
      he: 'עובד פורן',
    },
    duration: {
      en: '12 min.',
      ru: '12 минут',
      he: '12 דקות',
    },
    synopsis: {
      en: [
        'A shipyard worker mourning his father suffers an accident that distorts reality, merging a rusted ship’s body with his father and the illness that killed him, forcing confrontation with buried fears.',
      ],
      ru: [
        'Рабочий на верфи, переживающий смерть отца, сталкивается с аварией, искажающей реальность: ржавый корабль сливается с образом отца и болезнью, что заставляет его столкнуться со страхами.',
      ],
      he: [
        'פועל במספנת פירוק ספינות המתאבל על מות אביו עובר תאונה המעוותת את המציאות, וממזגת בין גוף הספינה החלודה, דמות האב והמחלה, ומכריחה אותו להתמודד עם פחדים קבורים.',
      ],
    },
    type: 'israeli',
  },
  'Bat Yam': {
    title: {
      en: 'Bat Yam',
      ru: 'Бат-Ям',
      he: 'בת ים',
    },
    author: {
      en: 'Yoeli Ben Shoshan',
      ru: 'Йоэли Бен Шошан',
      he: 'יואלי בן שושן',
    },
    duration: {
      en: '2 min.',
      ru: '2 минуты',
      he: '2 דקות',
    },
    synopsis: {
      en: [
        'A true story about Bat Yam, frozen in time. It follows two grandmothers who recently died during a war. Animation using real images from Bat Yam and Tel Aviv reconstructs deep memory.',
      ],
      ru: [
        'Реальная история о Бат-Яме, будто застывшем во времени. Рассказ о двух бабушках, недавно умерших во время войны. Анимация с реальными кадрами из Бат-Яма и Тель-Авива восстанавливает глубокую память.',
      ],
      he: [
        'סיפור אמיתי על בת ים התקועה בזמן. תיעוד שתי סבתות שנפטרו לאחרונה במהלך מלחמה. האנימציה, המשתמשת בדימויים אמיתיים מבת ים ומתל אביב, משחזרת זיכרון עמוק.',
      ],
    },
    type: 'israeli',
  },
  'Butterfly Kiss': {
    title: {
      en: 'Butterfly Kiss',
      ru: 'Поцелуй бабочки',
      he: 'נשיקת פרפר',
    },
    author: {
      en: 'Zohar Dvir',
      ru: 'Зоар Двир',
      he: 'זהר דביר',
    },
    duration: {
      en: '10 min.',
      ru: '10 мин.',
      he: '10 דקות',
    },
    synopsis: {
      en: [
        'Carol argues with her girlfriend Ray after an unexpected proposal. Waking in an apocalyptic reality, Carol discovers that Ray has become a butterfly. Chaos and rising tension threaten their relationship. Carol fears losing Ray… but devotion may come at a price.',
      ],
      ru: [
        'Карол ссорится с девушкой Рэй после внезапного предложения. Проснувшись в апокалиптической реальности, Карол обнаруживает, что Рэй стала бабочкой. Хаос вокруг и растущее напряжение угрожают отношениям. Карол боится потерять Рэй... ...но преданность своей девушке может иметь цену.',
      ],
      he: [
        'קרול מתווכחת עם זוגתה ריי אחרי הצעה מפתיעה. כשהיא מתעוררת במציאות אפוקליפטית, קרול מגלה שריי הפכה לפרפר. הכאוס והמתח הגובר מאיימים על מערכת היחסים. קרול חוששת לאבד את ריי… אך המסירות עלולה לבוא עם מחיר.',
      ],
    },
    type: 'israeli',
  },
  Carp: {
    title: {
      en: 'Carp',
      ru: 'Карп',
      he: 'קרפיון',
    },
    author: {
      en: 'Noam Michael Senderovitz',
      ru: 'Ноам Михаэль Сендровиц',
      he: 'נועם מיכאל סנדרוביץ',
    },
    duration: {
      en: '5 min.',
      ru: '5 минут',
      he: '5 דקות',
    },
    synopsis: {
      en: [
        "On the eve of the holiday, Noam receives a terrible task: to prepare gefilte fish, exactly according to Grandma's recipe.",
      ],
      ru: [
        'В канун праздника Ноам получает ужасное задание — приготовить гефилте фиш строго по бабушкиному рецепту.',
      ],
      he: ['בערב החג, נועם מקבל משימה נוראית – להכין גפילטע פיש בדיוק לפי המתכון של סבתא.'],
    },
    type: 'israeli',
  },
  'Coffee Break': {
    title: {
      en: 'Coffee Break',
      ru: 'Перерыв на кофе',
      he: 'הפסקת קפה',
    },
    author: {
      en: 'Dor Kaplan and Shai Kramer',
      ru: 'Дор Каплан и Шай Кремер',
      he: 'דור קפלן ושי קרמר',
    },
    duration: {
      en: '9 min.',
      ru: '9 минут',
      he: '9 דקות',
    },
    synopsis: {
      en: [
        'Imani, a plantation worker, escapes after witnessing a brutal event. Chased by Mr. George through surreal advertisements, she confronts the dark side of consumer culture.',
      ],
      ru: [
        'Имани, работница кофейной плантации, сбегает после жестокого события. Мистер Джордж преследует её через сюрреалистичный мир рекламы, обнажая тёмную сторону потребительской культуры.',
      ],
      he: [
        'אימאני, עובדת במטע קפה, בורחת לאחר אירוע אלים. מר ג׳ורג׳ רודף אחריה דרך עולם פרסומות סוריאליסטי, וחושף את הצד האפל של תרבות הצריכה.',
      ],
    },
    type: 'israeli',
  },
  Deadline: {
    title: {
      en: 'Deadline',
      ru: 'Дедлайн',
      he: 'דדליין',
    },
    author: {
      en: 'Idan Gilboa',
      ru: 'Идан Гильбоа',
      he: 'עידן גלבוע',
    },
    duration: {
      en: '10 min.',
      ru: '10 минут',
      he: '10 דקות',
    },
    synopsis: {
      en: [
        'A black comedy stop-motion film exploring the balance between bureaucracy, death, and elderly devotion to cats, centered on brave friendship and solidarity between two senior women.',
      ],
      ru: [
        'Чёрная комедия в технике стоп-моушен о балансе между бюрократией, смертью и преданностью пожилых людей кошкам, сосредоточенная на смелой дружбе и солидарности двух женщин.',
      ],
      he: [
        'קומדיה שחורה בסטופ-מושן החוקרת את המתח בין בירוקרטיה, מוות ואהבת חתולים של קשישים, ומתרכזת בחברות אמיצה וסולידריות בין שתי נשים מבוגרות.',
      ],
    },
    type: 'israeli',
  },
  'Deep Dive': {
    title: {
      en: 'Deep Dive',
      ru: 'Глубокое погружение',
      he: 'צלילה עמוקה',
    },
    author: {
      en: 'Noga Erlich-Kochavi',
      ru: 'Нога Эрлих-Кохави',
      he: 'נגה ארליך כוכבי',
    },
    duration: {
      en: '3 min',
      ru: '3 минуты',
      he: '3 דקות',
    },
    synopsis: {
      en: [
        'A swimmer freezes on a diving board in a black void, terrified to jump. After many attempts and tearful struggle, an unexpected miracle inspires her to rise. Deep Dive is a touching short film combining stop-motion and 3D animation.',
      ],
      ru: [
        'Пловчиха боится прыгнуть с трамплина и застывает в чёрном пространстве, перед пустотой. После множества попыток и трогательных слёз неожиданное чудо возвращает ей силы подняться. Deep Dive — трогательный короткометражный фильм, совмещающий стоп-моушн и 3D-анимацию.',
      ],
      he: [
        'שחיינית נאבקת בפחד לקפוץ מקרש קפיצה ונשארת תקועה בחלל שחור, מול הריק. אחרי ניסיונות רבים ובכי כואב, נס בלתי צפוי מעניק לה אומץ לעלות. Deep Dive הוא סרט אנימציה קצר, מרגש, המשלב סטופ־מושן ותלת־ממד.',
      ],
    },
    type: 'israeli',
  },
  "Ma'avak": {
    title: {
      en: "Ma'avak",
      ru: 'Маавак',
      he: 'מאבק',
    },
    author: {
      en: 'Yoav Shimron Amir, Vika Rehlis',
      ru: 'Йоав Шимрон Амир, Вика Рехлис',
      he: 'יואב שמרון אמיר, ויקה רהליס',
    },
    duration: {
      en: '8 min.',
      ru: '8 мин.',
      he: '8 דקות',
    },
    synopsis: {
      en: [
        'Boaz, an elderly man who lived alone for decades, lost his family in a war. Since then, he has been suffering from trauma. One fateful night he decides to end his life. Luckily for him, an angel comes and reveals in him the inner strength to come to terms with his loss.',
      ],
      ru: [
        'Боаз, пожилой мужчина, который жил один десятилетиями, потерял свою семью на войне. С тех пор он страдает от травмы. В одну роковую ночь он решает покончить с собой. К счастью для него, ангел приходит и открывает в нём внутренние силы, чтобы смириться со своей утратой.',
      ],
      he: [
        'בועז, איש זקן שחי לבד במשך עשרות שנים, איבד את משפחתו במלחמה. מאז הוא סובל מטראומה. בלילה גורלי אחד הוא מחליט לשים קץ לחייו. למזלו, מלאך מופיע ומגלה בו את הכוח הפנימי להתמודד עם האובדן',
      ],
    },
    type: 'israeli',
  },
  'My Shadow and Me': {
    title: {
      en: 'My Shadow and Me',
      ru: 'Моя тень и я',
      he: 'הצל שלי ואני',
    },
    author: {
      en: 'Yali Herbet',
      ru: 'Яли Хербет',
      he: 'יהלי הרבט',
    },
    duration: {
      en: '4 min.',
      ru: '4 минуты',
      he: '4 דקות',
    },
    synopsis: {
      en: [
        'During a family trip to the beach, 5-year-old Ido, feeling overlooked and restless, discovers an enchanting friend when his shadow unexpectedly springs to life.',
      ],
      ru: [
        'Во время семейной поездки на пляж пятилетний Идо, чувствуя себя незамеченным и беспокойным, находит волшебного друга, когда его тень неожиданно оживает.',
      ],
      he: [
        'במהלך טיול משפחתי לחוף הים, עידו בן ה־5, שמרגיש בלתי נראה וחסר מנוחה, מגלה חבר קסום כאשר הצל שלו לפתע מתעורר לחיים',
      ],
    },
    type: 'israeli',
  },
  'Taste of Heaven': {
    title: {
      en: 'Taste of Heaven',
      ru: 'Вкус рая',
      he: 'טעם גן עדן',
    },
    author: {
      en: 'Isaac Sverdlov',
      ru: 'Ицхак Свердлов',
      he: 'יצחק סברדלוב',
    },
    duration: {
      en: '9 min',
      ru: '9 минут',
      he: '9 דקות',
    },
    synopsis: {
      en: [
        'Baruch, a dreamy Yeshiva student, believes life on earth is just a corridor to Heaven. To secure his place there, he decides to suffer on earth and starts working for Nehama, a tough fish-seller who makes his life miserable — just as planned.',
      ],
      ru: [
        'Барух, мечтательный студент йешивы, верит, что жизнь на земле — лишь коридор на пути в рай. Чтобы заслужить место там, он решает страдать на земле и начинает работать у Нехамы, суровой торговки рыбой, которая делает его жизнь невыносимой — как он и хотел.',
      ],
      he: [
        'ברוך, תלמיד ישיבה חולמני, מאמין שהחיים על פני האדמה הם רק מסדרון בדרך לגן עדן. כדי להבטיח את מקומו שם, הוא מחליט לסבול בעולם הזה ומתחיל לעבוד אצל נחמה, מוכרת דגים קשוחה שהופכת את חייו לסיוט — בדיוק כפי שתכנן.',
      ],
    },
    type: 'israeli',
  },
  'Until We Meet': {
    title: {
      en: 'Until We Meet',
      ru: 'Пока мы не встретимся',
      he: 'עד שניפגש',
    },
    author: {
      en: 'Yael Kastel',
      ru: 'Яэль Кастель',
      he: 'יעל קסטל',
    },
    duration: {
      en: '2 min',
      ru: '2 минуты',
      he: '2 דקות',
    },
    synopsis: {
      en: [
        'The spacecraft Beresheet crashed on the Moon in April 2019. According to an unverified source, it carried a tardigrade—a tiny and remarkably resilient creature that survived the crash.',
      ],
      ru: [
        'Космический аппарат «Берешит» потерпел крушение на Луне в апреле 2019 года. По неподтверждённым данным, на борту находился тихоходка — микроскопическое и чрезвычайно выносливое существо, которое пережило крушение.',
      ],
      he: [
        'החללית "בראשית" התרסקה על הירח באפריל 2019. לפי מקור בלתי מאומת, היא נשאה עליה דובון מים: יצור זעיר ועמיד במיוחד, ששרד את ההתרסקות.',
      ],
    },
    type: 'israeli',
  },
  'Sock Horror': {
    title: {
      en: 'Sock Horror',
      ru: 'Носочный Хоррор',
      he: 'אימת הגרביים',
    },
    author: {
      en: 'Sun Ezer and Itai Garzon',
      ru: 'Сун Эзер и Итай Гарзон',
      he: 'סאן עזר ואיתי גרזון',
    },
    duration: {
      en: '5 min.',
      ru: '5 минут',
      he: '5 דקות',
    },
    synopsis: {
      en: [
        'A shady man crawls into a washing machine to find his lost sock and is pulled into a dark world of forgotten socks. There, his old sock confronts him with an unforgettable surprise that forces him to grasp what being a sock truly means.',
      ],
      ru: [
        'Подозрительный мужчина лезет в стиральную машину в поисках потерянного носка и оказывается в тёмном мире забытых носков. Там старый носок преподносит ему незабываемый сюрприз, заставляя понять, что на самом деле означает быть носком.',
      ],
      he: [
        'גבר מעט מפוקפק זוחל למכונת הכביסה כדי למצוא את הגרב האבודה ונקלע לעולם קודר של גרביים שנשכחו. שם הגרב הישנה מפתיעה אותו בהפתעה בלתי-נשכחת, שמאלצת אותו להבין מה באמת פירושו להיות גרב.',
      ],
    },
    type: 'israeli',
  },
  'Savta and I': {
    title: {
      en: 'Savta and I',
      ru: 'Бабуля и я',
      he: 'סבתא ואני',
    },
    author: {
      en: 'Tomer Shaham',
      ru: 'Томэр Шахам',
      he: 'תומר שחם',
    },
    duration: {
      en: '8 min.',
      ru: '8 минут',
      he: '8 דקות',
    },
    synopsis: {
      en: [
        "One morning, while eating his breakfast, Tomer notices that his grandmother's nose fell in the pan. While he tries to fix her, she asks him to kill her.",
      ],
      ru: [
        'Однажды утром, во время завтрака, Томэр замечает, что нос его бабушки упал в сковороду. Пока он пытается её починить, она просит его убить её.',
      ],
      he: [
        'בוקר אחד, בזמן ארוחת הבוקר, תומר שם לב שהאף של סבתא שלו נפל לתוך המחבת. בזמן שהוא מנסה לתקן אותה, היא מבקשת ממנו להרוג אותה.',
      ],
    },
    type: 'israeli',
  },
  'No Witches in the Valley': {
    title: {
      en: 'No Witches in the Valley',
      ru: 'Нет ведьм в долине',
      he: 'אין מכשפות בעמק',
    },
    author: {
      en: 'Ayla Shrot, Yael Ozsini',
      ru: 'Айла Шрот, Яэль Озсини',
      he: 'אילה שרוט, יעל עוזסיני',
    },
    duration: {
      en: '13 min.',
      ru: '13 минут',
      he: '13 דקות',
    },
    synopsis: {
      en: [
        '“No Witches in the Valley” is a story about intergenerational trauma and the ability to overcome it. It is a love letter to my grandmother, whose voice was erased from the pages of history.',
      ],
      ru: [
        '«Нет ведьм в долине» — это история о межпоколенческой травме и способности преодолеть её. Это письмо-посвящение моей бабушке, чей голос был стёрт со страниц истории.',
      ],
      he: [
        '"אין מכשפות בעמק" הוא סיפור על טראומה בין-דורית והיכולת לריפוי, הסרט הוא מכתב אהבה לסבתי שקולה נמחק מההיסטוריה.',
      ],
    },
    type: 'israeli',
  },
  'Milk Flowing Land': {
    title: {
      en: 'Milk Flowing Land',
      ru: 'Земля, где течет молоко',
      he: 'ארץ זבת חלב',
    },
    author: {
      en: 'Stav Friedman, Esther Pakowitz, Roni Zelinger, Stav Alfasi',
      ru: 'Став Фридман, Эстер Паковиц, Рони Зелингер, Амит',
      he: 'סתיו פרידמן, אסתר פאקוויץ, רוני זלינגר, עמית',
    },
    duration: {
      en: '2 min.',
      ru: '2 минуты',
      he: '2 דקות',
    },
    synopsis: {
      en: [
        'In an absurd reality of a supermarket, routine is mixed with war. We are supposed to continue going to work, shopping, and returning home as usual, even though nothing is normal anymore.',
      ],
      ru: [
        'Ночью, в абсурдной реальности, рутина смешивается с войной. Мы должны продолжать ходить на работу, делать покупки и возвращаться домой, как будто всё в порядке, хотя на самом деле ничего уже не нормально.',
      ],
      he: [
        'לילה אחד בסופרמרקט במציאות אבסורדית, שבה השגרה מתערבבת עם המלחמה. אנחנו אמורים להמשיך ללכת לעבודה, לקנות ולחזור הביתה כרגיל, למרות ששום דבר כבר לא נורמלי.',
      ],
    },
    type: 'israeli',
  },
  "Salamander's land": {
    title: {
      en: "Salamander's land",
      ru: 'Земля саламандр',
      he: 'ארץ הסלמנדרות',
    },
    author: {
      en: 'Ekaterina Ulyanova',
      ru: 'Екатерина Ульянова',
      he: 'יקטרינה אוליאנובה',
    },
    duration: {
      en: '9 min.',
      ru: '9 мин.',
      he: '9 דקות',
    },
    synopsis: {
      en: [
        'A soldier on the battlefield falls unconscious, and when he opens his eyes, finds himself in the Salamander’s Land. A story inspired by R. Akutagawa\'s "In the Land of the Watermen" and K. Chapek\'s "The War with Salamanders".',
      ],
      ru: [
        'Солдат на поле боя теряет сознание, а очнувшись, обнаруживает себя в Земле саламандр. История вдохновлена произведениями Рюноскэ Акутагавы «В стране водяных людей» и Карела Чапека «Война с саламандрами».',
      ],
      he: [
        'חייל בשדה הקרב מאבד את ההכרה, וכשהוא מתעורר – הוא מוצא את עצמו בארץ הסלמנדרות. סיפור בהשראת ריונוסקה אקוטגאווה "בארץ אנשי המים" וקארל צ\'אפק "המלחמה עם הסלמנדרות".',
      ],
    },
    type: 'international',
  },
  Playboy: {
    title: {
      en: 'Playboy',
      ru: 'Плейбой',
      he: 'פלייבוי',
    },
    author: {
      en: 'Nadia Samarina',
      ru: 'Надя Самарина',
      he: 'נדיה סמרינה',
    },
    duration: {
      en: '2 min.',
      ru: '2 минуты',
      he: '2 דקות',
    },
    synopsis: {
      en: [
        'Moscow, 1980. An elderly cleaner prepares the art-filled museum halls before visitors arrive. She knows and loves her work. Guests often forget trivial items, but this time an unexpected object left among the artworks startles her and disrupts her routine.',
      ],
      ru: [
        'Москва, 1980 год. Пожилая уборщица готовит заполненные произведениями искусства музейные залы к приходу посетителей. Она хорошо знает и любит свою работу. Гости нередко забывают пустяки, но на этот раз забытый предмет среди экспонатов ошеломляет её и нарушает привычный порядок.',
      ],
      he: [
        'מוסקבה, 1980. מנקה מבוגרת מכינה את אולמות המוזיאון המלאים ביצירות אמנות לפני הגעת המבקרים. היא מכירה ואוהבת את עבודתה. לרוב נשכחים חפצים פשוטים, אך הפעם פריט בלתי צפוי שנותר בין היצירות מפתיע אותה ומשבש את שגרתה.',
      ],
    },
    type: 'international',
  },
  'Long-Term Extramarital Affair': {
    title: {
      en: 'Long-Term Extramarital Affair',
      ru: 'Долгосрочная внебрачная связь',
      he: 'רומן מחוץ לנישואים לטווח ארוך',
    },
    author: {
      en: 'Neely Goniodsky',
      ru: 'Нили Гониодски',
      he: 'נילי גוניודסקי',
    },
    duration: {
      en: '4 min.',
      ru: '4 минуты',
      he: '4 דקות',
    },
    synopsis: {
      en: [
        'The film that explores the absurd reality of being trapped in two unfulfilling relationships at once. A husband and his long-time mistress decide to attend couples’ therapy. By the end all characters emerge with more self-awareness, and a touch of acceptance.',
      ],
      ru: [
        'Анимационный фильм, исследующий абсурдную реальность жизни в ловушке двух неудовлетворяющих отношений одновременно. Муж и его давняя любовница решают пойти на терапию для пар. К концу истории все персонажи обретают больше самопонимания и немного принятия.',
      ],
      he: [
        'הסרט אנימציה קצר שבוחן את האבסורד שבלהיות תקועים בשני קשרים לא מספקים בו־זמנית. בעל והמאהבת הוותיקה שלו מחליטים ללכת לטיפול זוגי. בסוף, כל הדמויות יוצאות מהחוויה עם מודעות עצמית גדולה יותר ונגיעה של קבלה.',
      ],
    },
    type: 'international',
  },
} satisfies MoviesObject;

type MovieKey = keyof typeof moviesObject;

type FilterKeys<
  Type extends 'israeli' | 'international',
  K extends MovieKey = MovieKey
> = K extends unknown ? ((typeof moviesObject)[K]['type'] extends Type ? K : never) : never;

const moviesOrder: {
  israeli: FilterKeys<'israeli'>[];
  international: FilterKeys<'international'>[];
  common: MovieKey[];
} = {
  common: [
    'Alyoshenka',
    'Hertz',
    'Butterfly Kiss',
    'Cosmicat',
    'Apart',
    "Salamander's land",
    'Coffee Break',
    'Deadline',
    'Remarks',
    'Straight and in a Circle',
    'Deep Dive',
    'The Race',
    'Milk Flowing Land',
    'The Pangs of Mu',
    'My Closet',
    'Ugly',
    'Playboy',
    'ima wa ima',
    'Long-Term Extramarital Affair',
    'No Witches in the Valley',
    'Taste of Heaven',
    'Savta and I',
    'Sock Horror',
    'Bat Yam',
    "Ma'avak",
    'Carp',
    'Stupid Dog',
    'Until We Meet',
    'A Paper Coffee Cup Story',
    'My Shadow and Me',
    'All About',
  ],

  international: [
    'Alyoshenka',
    'Hertz',
    'Cosmicat',
    "Salamander's land",
    'Remarks',
    'Straight and in a Circle',
    'The Race',
    'Ugly',
    'ima wa ima',
    'Long-Term Extramarital Affair',
    'Playboy',
    'Stupid Dog',
    'The Pangs of Mu',
    'My Closet',
    'A Paper Coffee Cup Story',
    'All About',
  ],

  israeli: [
    'Apart',
    'Butterfly Kiss',
    'Coffee Break',
    'Deadline',
    'Deep Dive',
    'No Witches in the Valley',
    'Milk Flowing Land',
    'Taste of Heaven',
    'Bat Yam',
    "Ma'avak",
    'Savta and I',
    'Sock Horror',
    'Carp',
    'Until We Meet',
    'My Shadow and Me',
  ],
};


const posters = Object.fromEntries(
  await Promise.all(
    Object.entries(moviesObject).map(async ([key]) => {
      return [
        key,
        (await import(`./posters/${key}/500xAAA.webp`)).default as StaticImageData,
      ] as const;
    })
  )
) as { [K in MovieKey]: StaticImageData };

export const movies = Object.fromEntries(
  Object.entries(moviesOrder).map(([k, v]) => {
    if (new Set(v).size !== v.length) {
      throw Error('moviesOrder must not repeat!');
    }
    return [k, v.map((e) => ({ ...moviesObject[e], poster: posters[e] }))];
  })
) as { [K in keyof typeof moviesOrder]: (Movie & { poster: StaticImageData })[] };
