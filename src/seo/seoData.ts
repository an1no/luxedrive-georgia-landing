import { Language } from "@/i18n/translations";

export interface LanguageSEOData {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
  locale: string;
}

export const seoData: Record<Language, LanguageSEOData> = {
  en: {
    title: "Midi Travel Georgia — Premium Private Tours & VIP Transfers",
    description:
      "Experience Georgia in premium comfort with Midi Travel. Private tailored tours to Kazbegi, Kakheti & Tbilisi, VIP airport transfers, and executive transport with professional English-speaking drivers.",
    keywords: [
      "Georgia private tours",
      "VIP transfers Georgia",
      "Tbilisi airport transfer",
      "Kazbegi tour",
      "Kakheti wine tour",
      "luxury minivan Georgia",
      "private driver Georgia",
      "executive transport Tbilisi",
      "Georgia travel",
      "premium transportation Georgia",
      "airport pickup Tbilisi",
      "Black Sea tour Georgia",
      "Batumi transfer",
      "Kutaisi airport transfer",
    ],
    ogTitle: "Midi Travel Georgia — Premium Private Tours & VIP Transfers",
    ogDescription:
      "Private tailored tours to Kazbegi, Kakheti & beyond. VIP airport transfers and executive transport with professional drivers across Georgia.",
    twitterTitle: "Midi Travel Georgia — Premium Tours & VIP Transfers",
    twitterDescription:
      "Explore Georgia in luxury. Private tours, VIP airport transfers, and executive transport with professional drivers.",
    locale: "en_US",
  },
  ka: {
    title: "Midi Travel Georgia — პრემიუმ კერძო ტურები და VIP ტრანსფერები",
    description:
      "იმოგზაურეთ საქართველოში პრემიუმ კომფორტით Midi Travel-თან ერთად. კერძო ტურები ყაზბეგში, კახეთში, თბილისში; VIP აეროპორტის ტრანსფერები და ბიზნეს ტრანსპორტი პროფესიონალ მძღოლებთან ერთად.",
    keywords: [
      "საქართველოს კერძო ტურები",
      "VIP ტრანსფერი საქართველო",
      "თბილისის აეროპორტის ტრანსფერი",
      "ყაზბეგის ტური",
      "კახეთის ღვინის ტური",
      "ლუქს მინივენი საქართველო",
      "კერძო მძღოლი საქართველო",
      "ბიზნეს ტრანსპორტი თბილისი",
      "საქართველოს მოგზაურობა",
      "პრემიუმ ტრანსპორტი საქართველო",
      "ბათუმის ტრანსფერი",
      "ქუთაისის აეროპორტი ტრანსფერი",
    ],
    ogTitle: "Midi Travel Georgia — პრემიუმ კერძო ტურები და VIP ტრანსფერები",
    ogDescription:
      "კერძო ტურები ყაზბეგში, კახეთსა და სხვაგან. VIP ტრანსფერები და ბიზნეს ტრანსპორტი პროფესიონალ მძღოლებთან ერთად.",
    twitterTitle: "Midi Travel Georgia — პრემიუმ ტურები და VIP ტრანსფერები",
    twitterDescription:
      "ჩამოაყალიბეთ თქვენი მოგზაურობა საქართველოში. კერძო ტურები, VIP ტრანსფერები, ბიზნეს ტრანსპორტი.",
    locale: "ka_GE",
  },
  ru: {
    title: "Midi Travel Georgia — Премиум Частные Туры и VIP Трансферы",
    description:
      "Откройте Грузию с комфортом от Midi Travel. Индивидуальные туры в Казбеги, Кахетию, Тбилиси, VIP трансферы из аэропортов и бизнес-транспорт с профессиональными водителями.",
    keywords: [
      "частные туры Грузия",
      "VIP трансфер Грузия",
      "трансфер аэропорт Тбилиси",
      "тур Казбеги",
      "тур в Кахетию",
      "люкс минивэн Грузия",
      "частный водитель Грузия",
      "бизнес транспорт Тбилиси",
      "туры по Грузии",
      "премиум транспорт Грузия",
      "встреча аэропорт Тбилиси",
      "трансфер Батуми",
      "аэропорт Кутаиси трансфер",
      "экскурсии Грузия",
    ],
    ogTitle: "Midi Travel Georgia — Премиум Частные Туры и VIP Трансферы",
    ogDescription:
      "Индивидуальные туры в Казбеги, Кахетию и другие места. VIP трансферы из аэропортов и бизнес-транспорт с профессиональными водителями по всей Грузии.",
    twitterTitle: "Midi Travel Georgia — Туры и VIP Трансферы",
    twitterDescription:
      "Откройте Грузию в роскоши. Частные туры, VIP трансферы и бизнес-транспорт с профессиональными водителями.",
    locale: "ru_RU",
  },
  zh: {
    title: "Midi Travel Georgia — 格鲁吉亚高端私人旅游与VIP接送服务",
    description:
      "与Midi Travel一起在格鲁吉亚享受高端舒适旅行。提供前往卡兹别吉、卡赫季、第比利斯的私人定制旅游，VIP机场接送以及专业司机的商务用车服务。",
    keywords: [
      "格鲁吉亚私人旅游",
      "格鲁吉亚VIP接送",
      "第比利斯机场接送",
      "卡兹别吉旅游",
      "卡赫季葡萄酒之旅",
      "格鲁吉亚豪华商务车",
      "格鲁吉亚私人司机",
      "第比利斯商务用车",
      "格鲁吉亚旅行",
      "格鲁吉亚高端交通",
      "巴统接送",
      "库塔伊西机场接送",
      "格鲁吉亚观光",
    ],
    ogTitle: "Midi Travel Georgia — 格鲁吉亚高端私人旅游与VIP接送",
    ogDescription:
      "前往卡兹别吉、卡赫季等地的私人定制旅游。专业司机提供VIP机场接送和商务用车服务，覆盖全格鲁吉亚。",
    twitterTitle: "Midi Travel Georgia — 高端旅游与VIP接送",
    twitterDescription: "在格鲁吉亚享受奢华旅行。私人旅游、VIP接送和商务用车服务。",
    locale: "zh_CN",
  },
  es: {
    title:
      "Midi Travel Georgia — Tours Privados Premium y Traslados VIP en Georgia",
    description:
      "Descubre Georgia con el máximo confort con Midi Travel. Tours privados a medida a Kazbegi, Kakheti y Tbilisi, traslados VIP desde aeropuertos y transporte ejecutivo con conductores profesionales.",
    keywords: [
      "tours privados Georgia",
      "traslados VIP Georgia",
      "traslado aeropuerto Tbilisi",
      "tour Kazbegi",
      "tour vinos Kakheti",
      "minivan lujo Georgia",
      "conductor privado Georgia",
      "transporte ejecutivo Tbilisi",
      "viaje Georgia",
      "transporte premium Georgia",
      "recogida aeropuerto Tbilisi",
      "traslado Batumi",
      "aeropuerto Kutaisi traslado",
      "excursiones Georgia",
    ],
    ogTitle:
      "Midi Travel Georgia — Tours Privados Premium y Traslados VIP",
    ogDescription:
      "Tours privados a medida a Kazbegi, Kakheti y más allá. Traslados VIP y transporte ejecutivo con conductores profesionales en toda Georgia.",
    twitterTitle: "Midi Travel Georgia — Tours Premium y Traslados VIP",
    twitterDescription:
      "Explora Georgia con estilo. Tours privados, traslados VIP y transporte ejecutivo con conductores profesionales.",
    locale: "es_ES",
  },
  it: {
    title:
      "Midi Travel Georgia — Tour Privati Premium e Trasferimenti VIP in Georgia",
    description:
      "Scopri la Georgia nel massimo comfort con Midi Travel. Tour privati su misura a Kazbegi, Kakheti e Tbilisi, trasferimenti VIP dagli aeroporti e trasporto esecutivo con autisti professionisti.",
    keywords: [
      "tour privati Georgia",
      "trasferimenti VIP Georgia",
      "trasferimento aeroporto Tbilisi",
      "tour Kazbegi",
      "tour vino Kakheti",
      "minivan lusso Georgia",
      "autista privato Georgia",
      "trasporto esecutivo Tbilisi",
      "viaggio Georgia",
      "trasporto premium Georgia",
      "prelievo aeroporto Tbilisi",
      "trasferimento Batumi",
      "aeroporto Kutaisi trasferimento",
      "escursioni Georgia",
    ],
    ogTitle:
      "Midi Travel Georgia — Tour Privati Premium e Trasferimenti VIP",
    ogDescription:
      "Tour privati su misura a Kazbegi, Kakheti e oltre. Trasferimenti VIP e trasporto esecutivo con autisti professionisti in tutta la Georgia.",
    twitterTitle: "Midi Travel Georgia — Tour Premium e Trasferimenti VIP",
    twitterDescription:
      "Esplora la Georgia in lusso. Tour privati, trasferimenti VIP e trasporto esecutivo con autisti professionisti.",
    locale: "it_IT",
  },
};

