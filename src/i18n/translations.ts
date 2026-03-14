export type Language = "en" | "ka" | "ru" | "zh";

export const languageNames: Record<Language, string> = {
  en: "English",
  ka: "ქართული",
  ru: "Русский",
  zh: "中文",
};

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.services": "Services",
    "nav.fleet": "Fleet",
    "nav.reviews": "Reviews",
    "nav.bookNow": "Book Now",

    // Hero
    "hero.tagline": "Premium Transportation in Georgia",
    "hero.title1": "Experience Georgia in",
    "hero.title2": "Premium Comfort",
    "hero.subtitle": "Private tours and VIP transfers with professional drivers.",
    "hero.cta": "Plan Your Journey",

    // Services
    "services.tagline": "What We Offer",
    "services.title": "Our Premium Services",
    "services.tour.title": "Private Tailored Tours",
    "services.tour.desc": "Explore Kazbegi, Kakheti, and beyond at your own pace with a dedicated driver.",
    "services.airport.title": "VIP Airport Transfers",
    "services.airport.desc": "Punctual, stress-free pickups and drop-offs from Tbilisi, Kutaisi, or Batumi airports.",
    "services.executive.title": "Executive Transport",
    "services.executive.desc": "Spotless, high-end minivans for business meetings, delegations, or maximum privacy.",

    // Fleet
    "fleet.tagline": "Our Fleet",
    "fleet.title1": "7-Seater Premium",
    "fleet.title2": "Black Minivan",
    "fleet.desc": "Travel in style with our meticulously maintained premium minivan, designed for comfort on Georgia's most scenic routes.",
    "fleet.f1": "Spacious legroom",
    "fleet.f2": "Climate control",
    "fleet.f3": "Spotless interior",
    "fleet.f4": "Complimentary Wi-Fi and water",

    // Reviews
    "reviews.tagline": "Testimonials",
    "reviews.title": "Client Reviews",

    // Footer
    "footer.desc": "Premium private tours and VIP transportation across Georgia.",
    "footer.contact": "Contact",
    "footer.follow": "Follow Us",
    "footer.rights": "All rights reserved.",
  },
  ka: {
    "nav.services": "სერვისები",
    "nav.fleet": "ავტოპარკი",
    "nav.reviews": "შეფასებები",
    "nav.bookNow": "დაჯავშნე",

    "hero.tagline": "პრემიუმ ტრანსპორტი საქართველოში",
    "hero.title1": "იმოგზაურეთ საქართველოში",
    "hero.title2": "პრემიუმ კომფორტით",
    "hero.subtitle": "კერძო ტურები და VIP ტრანსფერები პროფესიონალ მძღოლებთან ერთად.",
    "hero.cta": "დაგეგმეთ მოგზაურობა",

    "services.tagline": "რას გთავაზობთ",
    "services.title": "ჩვენი პრემიუმ სერვისები",
    "services.tour.title": "კერძო ტურები",
    "services.tour.desc": "გამოიკვლიეთ ყაზბეგი, კახეთი და სხვა თქვენი ტემპით, გამოყოფილ მძღოლთან ერთად.",
    "services.airport.title": "VIP აეროპორტის ტრანსფერი",
    "services.airport.desc": "პუნქტუალური, სტრესსგარეშე შეხვედრა თბილისის, ქუთაისის ან ბათუმის აეროპორტებიდან.",
    "services.executive.title": "ბიზნეს ტრანსპორტი",
    "services.executive.desc": "უმაღლესი კლასის მინივენები საქმიანი შეხვედრებისა და დელეგაციებისთვის.",

    "fleet.tagline": "ჩვენი ავტოპარკი",
    "fleet.title1": "7-ადგილიანი პრემიუმ",
    "fleet.title2": "შავი მინივენი",
    "fleet.desc": "იმოგზაურეთ სტილურად ჩვენი ზედმიწევნით მოვლილი პრემიუმ მინივენით, შექმნილი კომფორტისთვის საქართველოს ულამაზეს მარშრუტებზე.",
    "fleet.f1": "ფართო ფეხის სივრცე",
    "fleet.f2": "კლიმატ-კონტროლი",
    "fleet.f3": "უმწიკვლო ინტერიერი",
    "fleet.f4": "უფასო Wi-Fi და წყალი",

    "reviews.tagline": "შეფასებები",
    "reviews.title": "კლიენტების შეფასებები",

    "footer.desc": "პრემიუმ კერძო ტურები და VIP ტრანსპორტირება საქართველოში.",
    "footer.contact": "კონტაქტი",
    "footer.follow": "გამოგვყევით",
    "footer.rights": "ყველა უფლება დაცულია.",
  },
  ru: {
    "nav.services": "Услуги",
    "nav.fleet": "Автопарк",
    "nav.reviews": "Отзывы",
    "nav.bookNow": "Забронировать",

    "hero.tagline": "Премиум транспорт в Грузии",
    "hero.title1": "Откройте Грузию в",
    "hero.title2": "Премиум Комфорте",
    "hero.subtitle": "Частные туры и VIP трансферы с профессиональными водителями.",
    "hero.cta": "Спланировать поездку",

    "services.tagline": "Что мы предлагаем",
    "services.title": "Наши Премиум Услуги",
    "services.tour.title": "Индивидуальные туры",
    "services.tour.desc": "Исследуйте Казбеги, Кахетию и другие места в своём темпе с персональным водителем.",
    "services.airport.title": "VIP Трансфер из аэропорта",
    "services.airport.desc": "Пунктуальные встречи и проводы из аэропортов Тбилиси, Кутаиси и Батуми.",
    "services.executive.title": "Бизнес Транспорт",
    "services.executive.desc": "Безупречные минивэны премиум-класса для деловых встреч и делегаций.",

    "fleet.tagline": "Наш Автопарк",
    "fleet.title1": "7-местный Премиум",
    "fleet.title2": "Чёрный Минивэн",
    "fleet.desc": "Путешествуйте стильно в нашем безупречно обслуживаемом премиум минивэне, созданном для комфорта на самых живописных маршрутах Грузии.",
    "fleet.f1": "Просторное место для ног",
    "fleet.f2": "Климат-контроль",
    "fleet.f3": "Безупречный интерьер",
    "fleet.f4": "Бесплатный Wi-Fi и вода",

    "reviews.tagline": "Отзывы",
    "reviews.title": "Отзывы Клиентов",

    "footer.desc": "Премиум частные туры и VIP транспорт по всей Грузии.",
    "footer.contact": "Контакты",
    "footer.follow": "Мы в соцсетях",
    "footer.rights": "Все права защищены.",
  },
  zh: {
    "nav.services": "服务",
    "nav.fleet": "车队",
    "nav.reviews": "评价",
    "nav.bookNow": "立即预订",

    "hero.tagline": "格鲁吉亚高端交通服务",
    "hero.title1": "在格鲁吉亚体验",
    "hero.title2": "高端舒适之旅",
    "hero.subtitle": "专业司机提供私人旅游和VIP接送服务。",
    "hero.cta": "规划您的旅程",

    "services.tagline": "我们的服务",
    "services.title": "高端服务项目",
    "services.tour.title": "私人定制旅游",
    "services.tour.desc": "以您自己的节奏，配备专属司机，探索卡兹别吉、卡赫季等地。",
    "services.airport.title": "VIP机场接送",
    "services.airport.desc": "准时、无忧的第比利斯、库塔伊西或巴统机场接送服务。",
    "services.executive.title": "商务用车",
    "services.executive.desc": "为商务会议和代表团提供一尘不染的高端商务车。",

    "fleet.tagline": "我们的车队",
    "fleet.title1": "7座高端",
    "fleet.title2": "黑色商务车",
    "fleet.desc": "乘坐我们精心维护的高端商务车，在格鲁吉亚最美丽的路线上享受舒适旅行。",
    "fleet.f1": "宽敞腿部空间",
    "fleet.f2": "气候控制",
    "fleet.f3": "一尘不染的内饰",
    "fleet.f4": "免费Wi-Fi和饮用水",

    "reviews.tagline": "客户评价",
    "reviews.title": "客户反馈",

    "footer.desc": "格鲁吉亚全境高端私人旅游和VIP交通服务。",
    "footer.contact": "联系我们",
    "footer.follow": "关注我们",
    "footer.rights": "版权所有。",
  },
};
