// Core interface translations are bundled locally so language switching never
// depends on Gemini, network availability, or API quota.
(() => {
  const keys = [
    "themeDark", "themeLight", "tagline", "analyzeTab", "libraryTab",
    "samplesLabel", "sampleBank", "samplePolice", "samplePrize",
    "messagePlaceholder", "analyzeButton", "libraryTitle", "searchPlaceholder",
    "clear", "all", "bank", "police", "prize", "delivery", "historyTitle",
    "clearHistory", "noHistory", "riskLevel", "safe", "suspicious",
    "dangerous", "originalMessage", "detective", "recommendedActions",
    "psychologist", "rescue", "linkCheck"
  ];

  const packs = {
    "zh-CN": [
      "🌙 深色", "☀️ 浅色", "🕵️‍♂️ 技术侦探与 🧠 心理顾问守护您的家人", "🔍 分析", "📚 诈骗资料库",
      "试用示例消息：", "🏦 假冒银行", "👮 假冒警方", "🎁 虚假中奖", "在此粘贴或输入可疑消息...",
      "🔍 立即检查", "📚 诈骗资料库", "搜索：银行、警方、快递、OTP...", "清除", "全部", "🏦 银行",
      "👮 警方", "🎁 中奖", "📦 快递", "⏳ 检查历史", "🗑️ 清除", "暂无检查记录。",
      "风险等级", "安全", "可疑", "危险", "原始消息：", "侦探", "🛠️ 建议措施：", "心理顾问", "🚨 应急助手", "🔗 链接检查"
    ],
    "zh-TW": [
      "🌙 深色", "☀️ 淺色", "🕵️‍♂️ 技術偵探與 🧠 心理顧問守護您的家人", "🔍 分析", "📚 詐騙資料庫",
      "試用範例訊息：", "🏦 假冒銀行", "👮 假冒警方", "🎁 虛假中獎", "在此貼上或輸入可疑訊息...",
      "🔍 立即檢查", "📚 詐騙資料庫", "搜尋：銀行、警方、快遞、OTP...", "清除", "全部", "🏦 銀行",
      "👮 警方", "🎁 中獎", "📦 快遞", "⏳ 檢查紀錄", "🗑️ 清除", "尚無檢查紀錄。",
      "風險等級", "安全", "可疑", "危險", "原始訊息：", "偵探", "🛠️ 建議措施：", "心理顧問", "🚨 緊急助手", "🔗 連結檢查"
    ],
    es: [
      "🌙 Oscuro", "☀️ Claro", "🕵️‍♂️ Detective técnico y 🧠 guía psicológica protegiendo a tu familia", "🔍 Analizar", "📚 Biblioteca de estafas",
      "Prueba un mensaje de ejemplo:", "🏦 Banco falso", "👮 Policía falsa", "🎁 Premio falso", "Pega o escribe aquí un mensaje sospechoso...",
      "🔍 Comprobar ahora", "📚 Biblioteca de estafas", "Buscar: banco, policía, entrega, OTP...", "Borrar", "Todos", "🏦 Banco",
      "👮 Policía", "🎁 Premio", "📦 Entrega", "⏳ Historial", "🗑️ Borrar", "Aún no hay comprobaciones.",
      "Nivel de riesgo", "Seguro", "Sospechoso", "Peligroso", "Mensaje original:", "Detective", "🛠️ Acciones recomendadas:", "Guía psicológica", "🚨 Ayuda de emergencia", "🔗 Inspección del enlace"
    ],
    fr: [
      "🌙 Sombre", "☀️ Clair", "🕵️‍♂️ Détective technique et 🧠 guide psychologique pour protéger votre famille", "🔍 Analyser", "📚 Bibliothèque des arnaques",
      "Essayez un message exemple :", "🏦 Fausse banque", "👮 Fausse police", "🎁 Faux gain", "Collez ou saisissez ici un message suspect...",
      "🔍 Vérifier maintenant", "📚 Bibliothèque des arnaques", "Rechercher : banque, police, livraison, OTP...", "Effacer", "Tous", "🏦 Banque",
      "👮 Police", "🎁 Gain", "📦 Livraison", "⏳ Historique", "🗑️ Effacer", "Aucune vérification pour le moment.",
      "Niveau de risque", "Sûr", "Suspect", "Dangereux", "Message original :", "Détective", "🛠️ Actions recommandées :", "Guide psychologique", "🚨 Aide d'urgence", "🔗 Inspection du lien"
    ],
    de: [
      "🌙 Dunkel", "☀️ Hell", "🕵️‍♂️ Technischer Detektiv und 🧠 psychologische Beratung schützen Ihre Familie", "🔍 Analysieren", "📚 Betrugsbibliothek",
      "Testen Sie eine Beispielnachricht:", "🏦 Falsche Bank", "👮 Falsche Polizei", "🎁 Falscher Gewinn", "Verdächtige Nachricht hier einfügen oder eingeben...",
      "🔍 Jetzt prüfen", "📚 Betrugsbibliothek", "Suchen: Bank, Polizei, Lieferung, OTP...", "Löschen", "Alle", "🏦 Bank",
      "👮 Polizei", "🎁 Gewinn", "📦 Lieferung", "⏳ Prüfverlauf", "🗑️ Löschen", "Noch keine Prüfungen.",
      "Risikostufe", "Sicher", "Verdächtig", "Gefährlich", "Originalnachricht:", "Detektiv", "🛠️ Empfohlene Maßnahmen:", "Psychologische Beratung", "🚨 Notfallhilfe", "🔗 Linkprüfung"
    ],
    ja: [
      "🌙 ダーク", "☀️ ライト", "🕵️‍♂️ 技術探偵と 🧠 心理ガイドがご家族を守ります", "🔍 分析", "📚 詐欺ライブラリ",
      "サンプルメッセージを試す：", "🏦 偽の銀行", "👮 偽の警察", "🎁 偽の当選", "不審なメッセージをここに貼り付けるか入力してください...",
      "🔍 今すぐ確認", "📚 詐欺ライブラリ", "検索：銀行、警察、配送、OTP...", "消去", "すべて", "🏦 銀行",
      "👮 警察", "🎁 当選", "📦 配送", "⏳ 確認履歴", "🗑️ 消去", "確認履歴はまだありません。",
      "リスクレベル", "安全", "疑わしい", "危険", "元のメッセージ：", "探偵", "🛠️ 推奨される対応：", "心理ガイド", "🚨 緊急ヘルパー", "🔗 リンク検査"
    ],
    ko: [
      "🌙 어둡게", "☀️ 밝게", "🕵️‍♂️ 기술 탐정과 🧠 심리 안내자가 가족을 보호합니다", "🔍 분석", "📚 사기 자료실",
      "예시 메시지 사용:", "🏦 가짜 은행", "👮 가짜 경찰", "🎁 가짜 당첨", "의심스러운 메시지를 여기에 붙여넣거나 입력하세요...",
      "🔍 지금 확인", "📚 사기 자료실", "검색: 은행, 경찰, 배송, OTP...", "지우기", "전체", "🏦 은행",
      "👮 경찰", "🎁 당첨", "📦 배송", "⏳ 확인 기록", "🗑️ 지우기", "아직 확인 기록이 없습니다.",
      "위험 수준", "안전", "의심", "위험", "원본 메시지:", "탐정", "🛠️ 권장 조치:", "심리 안내자", "🚨 긴급 도우미", "🔗 링크 검사"
    ],
    th: [
      "🌙 มืด", "☀️ สว่าง", "🕵️‍♂️ นักสืบด้านเทคนิคและ 🧠 ที่ปรึกษาด้านจิตวิทยาปกป้องครอบครัวของคุณ", "🔍 วิเคราะห์", "📚 คลังกลโกง",
      "ลองข้อความตัวอย่าง:", "🏦 ธนาคารปลอม", "👮 ตำรวจปลอม", "🎁 รางวัลปลอม", "วางหรือพิมพ์ข้อความน่าสงสัยที่นี่...",
      "🔍 ตรวจสอบตอนนี้", "📚 คลังกลโกง", "ค้นหา: ธนาคาร ตำรวจ การจัดส่ง OTP...", "ล้าง", "ทั้งหมด", "🏦 ธนาคาร",
      "👮 ตำรวจ", "🎁 รางวัล", "📦 การจัดส่ง", "⏳ ประวัติการตรวจสอบ", "🗑️ ล้าง", "ยังไม่มีประวัติการตรวจสอบ",
      "ระดับความเสี่ยง", "ปลอดภัย", "น่าสงสัย", "อันตราย", "ข้อความต้นฉบับ:", "นักสืบ", "🛠️ การดำเนินการที่แนะนำ:", "ที่ปรึกษาด้านจิตวิทยา", "🚨 ผู้ช่วยฉุกเฉิน", "🔗 ตรวจสอบลิงก์"
    ],
    id: [
      "🌙 Gelap", "☀️ Terang", "🕵️‍♂️ Detektif teknis dan 🧠 panduan psikologi melindungi keluarga Anda", "🔍 Analisis", "📚 Pustaka Penipuan",
      "Coba pesan contoh:", "🏦 Bank palsu", "👮 Polisi palsu", "🎁 Hadiah palsu", "Tempel atau ketik pesan mencurigakan di sini...",
      "🔍 Periksa sekarang", "📚 Pustaka Penipuan", "Cari: bank, polisi, pengiriman, OTP...", "Hapus", "Semua", "🏦 Bank",
      "👮 Polisi", "🎁 Hadiah", "📦 Pengiriman", "⏳ Riwayat pemeriksaan", "🗑️ Hapus", "Belum ada pemeriksaan.",
      "Tingkat risiko", "Aman", "Mencurigakan", "Berbahaya", "Pesan asli:", "Detektif", "🛠️ Tindakan yang disarankan:", "Panduan psikologi", "🚨 Bantuan darurat", "🔗 Pemeriksaan tautan"
    ],
    ms: [
      "🌙 Gelap", "☀️ Cerah", "🕵️‍♂️ Detektif teknikal dan 🧠 panduan psikologi melindungi keluarga anda", "🔍 Analisis", "📚 Pustaka Penipuan",
      "Cuba mesej contoh:", "🏦 Bank palsu", "👮 Polis palsu", "🎁 Hadiah palsu", "Tampal atau taip mesej mencurigakan di sini...",
      "🔍 Semak sekarang", "📚 Pustaka Penipuan", "Cari: bank, polis, penghantaran, OTP...", "Kosongkan", "Semua", "🏦 Bank",
      "👮 Polis", "🎁 Hadiah", "📦 Penghantaran", "⏳ Sejarah semakan", "🗑️ Kosongkan", "Belum ada semakan.",
      "Tahap risiko", "Selamat", "Mencurigakan", "Berbahaya", "Mesej asal:", "Detektif", "🛠️ Tindakan disyorkan:", "Panduan psikologi", "🚨 Bantuan kecemasan", "🔗 Pemeriksaan pautan"
    ],
    fil: [
      "🌙 Madilim", "☀️ Maliwanag", "🕵️‍♂️ Teknikal na detektib at 🧠 gabay sa sikolohiya para protektahan ang iyong pamilya", "🔍 Suriin", "📚 Aklatan ng Scam",
      "Subukan ang halimbawang mensahe:", "🏦 Pekeng bangko", "👮 Pekeng pulis", "🎁 Pekeng premyo", "I-paste o i-type dito ang kahina-hinalang mensahe...",
      "🔍 Suriin ngayon", "📚 Aklatan ng Scam", "Maghanap: bangko, pulis, delivery, OTP...", "Burahin", "Lahat", "🏦 Bangko",
      "👮 Pulis", "🎁 Premyo", "📦 Delivery", "⏳ Kasaysayan ng pagsusuri", "🗑️ Burahin", "Wala pang pagsusuri.",
      "Antas ng panganib", "Ligtas", "Kahina-hinala", "Mapanganib", "Orihinal na mensahe:", "Detektib", "🛠️ Inirerekomendang hakbang:", "Gabay sa sikolohiya", "🚨 Tulong pang-emergency", "🔗 Pagsusuri ng link"
    ],
    hi: [
      "🌙 गहरा", "☀️ हल्का", "🕵️‍♂️ तकनीकी जासूस और 🧠 मनोवैज्ञानिक मार्गदर्शक आपके परिवार की रक्षा करते हैं", "🔍 विश्लेषण", "📚 धोखाधड़ी पुस्तकालय",
      "एक नमूना संदेश आज़माएँ:", "🏦 नकली बैंक", "👮 नकली पुलिस", "🎁 नकली इनाम", "संदिग्ध संदेश यहाँ चिपकाएँ या लिखें...",
      "🔍 अभी जाँचें", "📚 धोखाधड़ी पुस्तकालय", "खोजें: बैंक, पुलिस, डिलीवरी, OTP...", "साफ़ करें", "सभी", "🏦 बैंक",
      "👮 पुलिस", "🎁 इनाम", "📦 डिलीवरी", "⏳ जाँच इतिहास", "🗑️ साफ़ करें", "अभी कोई जाँच नहीं हुई।",
      "जोखिम स्तर", "सुरक्षित", "संदिग्ध", "खतरनाक", "मूल संदेश:", "जासूस", "🛠️ सुझाए गए कदम:", "मनोवैज्ञानिक मार्गदर्शक", "🚨 आपातकालीन सहायक", "🔗 लिंक जाँच"
    ],
    ar: [
      "🌙 داكن", "☀️ فاتح", "🕵️‍♂️ المحقق التقني و 🧠 المرشد النفسي لحماية عائلتك", "🔍 تحليل", "📚 مكتبة الاحتيال",
      "جرّب رسالة نموذجية:", "🏦 بنك مزيف", "👮 شرطة مزيفة", "🎁 جائزة مزيفة", "الصق أو اكتب رسالة مشبوهة هنا...",
      "🔍 افحص الآن", "📚 مكتبة الاحتيال", "بحث: بنك، شرطة، توصيل، OTP...", "مسح", "الكل", "🏦 بنك",
      "👮 شرطة", "🎁 جائزة", "📦 توصيل", "⏳ سجل الفحص", "🗑️ مسح", "لا توجد فحوصات بعد.",
      "مستوى الخطر", "آمن", "مشبوه", "خطير", "الرسالة الأصلية:", "المحقق", "🛠️ الإجراءات الموصى بها:", "المرشد النفسي", "🚨 مساعد الطوارئ", "🔗 فحص الرابط"
    ],
    ru: [
      "🌙 Тёмная", "☀️ Светлая", "🕵️‍♂️ Технический детектив и 🧠 психологический консультант защищают вашу семью", "🔍 Анализ", "📚 Библиотека мошенничества",
      "Попробуйте пример сообщения:", "🏦 Поддельный банк", "👮 Поддельная полиция", "🎁 Ложный приз", "Вставьте или введите подозрительное сообщение...",
      "🔍 Проверить сейчас", "📚 Библиотека мошенничества", "Поиск: банк, полиция, доставка, OTP...", "Очистить", "Все", "🏦 Банк",
      "👮 Полиция", "🎁 Приз", "📦 Доставка", "⏳ История проверок", "🗑️ Очистить", "Проверок пока нет.",
      "Уровень риска", "Безопасно", "Подозрительно", "Опасно", "Исходное сообщение:", "Детектив", "🛠️ Рекомендуемые действия:", "Психолог", "🚨 Экстренная помощь", "🔗 Проверка ссылки"
    ],
    pt: [
      "🌙 Escuro", "☀️ Claro", "🕵️‍♂️ Detetive técnico e 🧠 guia psicológico protegendo sua família", "🔍 Analisar", "📚 Biblioteca de golpes",
      "Experimente uma mensagem de exemplo:", "🏦 Banco falso", "👮 Polícia falsa", "🎁 Prémio falso", "Cole ou escreva uma mensagem suspeita aqui...",
      "🔍 Verificar agora", "📚 Biblioteca de golpes", "Pesquisar: banco, polícia, entrega, OTP...", "Limpar", "Todos", "🏦 Banco",
      "👮 Polícia", "🎁 Prémio", "📦 Entrega", "⏳ Histórico", "🗑️ Limpar", "Ainda não há verificações.",
      "Nível de risco", "Seguro", "Suspeito", "Perigoso", "Mensagem original:", "Detetive", "🛠️ Ações recomendadas:", "Guia psicológico", "🚨 Ajuda de emergência", "🔗 Inspeção do link"
    ],
    it: [
      "🌙 Scuro", "☀️ Chiaro", "🕵️‍♂️ Detective tecnico e 🧠 guida psicologica per proteggere la tua famiglia", "🔍 Analizza", "📚 Libreria delle truffe",
      "Prova un messaggio di esempio:", "🏦 Banca falsa", "👮 Polizia falsa", "🎁 Premio falso", "Incolla o digita qui un messaggio sospetto...",
      "🔍 Controlla ora", "📚 Libreria delle truffe", "Cerca: banca, polizia, consegna, OTP...", "Cancella", "Tutti", "🏦 Banca",
      "👮 Polizia", "🎁 Premio", "📦 Consegna", "⏳ Cronologia", "🗑️ Cancella", "Nessun controllo effettuato.",
      "Livello di rischio", "Sicuro", "Sospetto", "Pericoloso", "Messaggio originale:", "Detective", "🛠️ Azioni consigliate:", "Guida psicologica", "🚨 Aiuto di emergenza", "🔗 Controllo del link"
    ],
    nl: [
      "🌙 Donker", "☀️ Licht", "🕵️‍♂️ Technische detective en 🧠 psychologische gids beschermen uw gezin", "🔍 Analyseren", "📚 Scam-bibliotheek",
      "Probeer een voorbeeldbericht:", "🏦 Nepbank", "👮 Neppolitie", "🎁 Nepprijs", "Plak of typ hier een verdacht bericht...",
      "🔍 Nu controleren", "📚 Scam-bibliotheek", "Zoeken: bank, politie, bezorging, OTP...", "Wissen", "Alles", "🏦 Bank",
      "👮 Politie", "🎁 Prijs", "📦 Bezorging", "⏳ Controlegeschiedenis", "🗑️ Wissen", "Nog geen controles.",
      "Risiconiveau", "Veilig", "Verdacht", "Gevaarlijk", "Oorspronkelijk bericht:", "Detective", "🛠️ Aanbevolen acties:", "Psychologische gids", "🚨 Noodhulp", "🔗 Linkcontrole"
    ],
    pl: [
      "🌙 Ciemny", "☀️ Jasny", "🕵️‍♂️ Detektyw techniczny i 🧠 doradca psychologiczny chronią Twoją rodzinę", "🔍 Analizuj", "📚 Biblioteka oszustw",
      "Wypróbuj przykładową wiadomość:", "🏦 Fałszywy bank", "👮 Fałszywa policja", "🎁 Fałszywa nagroda", "Wklej lub wpisz podejrzaną wiadomość...",
      "🔍 Sprawdź teraz", "📚 Biblioteka oszustw", "Szukaj: bank, policja, dostawa, OTP...", "Wyczyść", "Wszystkie", "🏦 Bank",
      "👮 Policja", "🎁 Nagroda", "📦 Dostawa", "⏳ Historia sprawdzeń", "🗑️ Wyczyść", "Brak wcześniejszych sprawdzeń.",
      "Poziom ryzyka", "Bezpieczne", "Podejrzane", "Niebezpieczne", "Oryginalna wiadomość:", "Detektyw", "🛠️ Zalecane działania:", "Doradca psychologiczny", "🚨 Pomoc awaryjna", "🔗 Kontrola linku"
    ],
    tr: [
      "🌙 Koyu", "☀️ Açık", "🕵️‍♂️ Teknik dedektif ve 🧠 psikoloji rehberi ailenizi koruyor", "🔍 Analiz et", "📚 Dolandırıcılık Kütüphanesi",
      "Örnek bir mesaj deneyin:", "🏦 Sahte banka", "👮 Sahte polis", "🎁 Sahte ödül", "Şüpheli mesajı buraya yapıştırın veya yazın...",
      "🔍 Şimdi kontrol et", "📚 Dolandırıcılık Kütüphanesi", "Ara: banka, polis, teslimat, OTP...", "Temizle", "Tümü", "🏦 Banka",
      "👮 Polis", "🎁 Ödül", "📦 Teslimat", "⏳ Kontrol geçmişi", "🗑️ Temizle", "Henüz kontrol yok.",
      "Risk seviyesi", "Güvenli", "Şüpheli", "Tehlikeli", "Orijinal mesaj:", "Dedektif", "🛠️ Önerilen adımlar:", "Psikoloji rehberi", "🚨 Acil yardım", "🔗 Bağlantı kontrolü"
    ],
    sv: [
      "🌙 Mörkt", "☀️ Ljust", "🕵️‍♂️ Teknisk detektiv och 🧠 psykologisk vägledning skyddar din familj", "🔍 Analysera", "📚 Bedrägeribibliotek",
      "Prova ett exempelmeddelande:", "🏦 Falsk bank", "👮 Falsk polis", "🎁 Falskt pris", "Klistra in eller skriv ett misstänkt meddelande här...",
      "🔍 Kontrollera nu", "📚 Bedrägeribibliotek", "Sök: bank, polis, leverans, OTP...", "Rensa", "Alla", "🏦 Bank",
      "👮 Polis", "🎁 Pris", "📦 Leverans", "⏳ Kontrollhistorik", "🗑️ Rensa", "Inga kontroller ännu.",
      "Risknivå", "Säker", "Misstänkt", "Farlig", "Ursprungligt meddelande:", "Detektiv", "🛠️ Rekommenderade åtgärder:", "Psykologisk vägledning", "🚨 Akuthjälp", "🔗 Länkkontroll"
    ],
    no: [
      "🌙 Mørk", "☀️ Lys", "🕵️‍♂️ Teknisk detektiv og 🧠 psykologisk veileder beskytter familien din", "🔍 Analyser", "📚 Svindelbibliotek",
      "Prøv en eksempelmelding:", "🏦 Falsk bank", "👮 Falskt politi", "🎁 Falsk premie", "Lim inn eller skriv en mistenkelig melding her...",
      "🔍 Sjekk nå", "📚 Svindelbibliotek", "Søk: bank, politi, levering, OTP...", "Tøm", "Alle", "🏦 Bank",
      "👮 Politi", "🎁 Premie", "📦 Levering", "⏳ Sjekkhistorikk", "🗑️ Tøm", "Ingen sjekker ennå.",
      "Risikonivå", "Trygg", "Mistenkelig", "Farlig", "Opprinnelig melding:", "Detektiv", "🛠️ Anbefalte tiltak:", "Psykologisk veileder", "🚨 Nødhjelp", "🔗 Lenkekontroll"
    ],
    da: [
      "🌙 Mørk", "☀️ Lys", "🕵️‍♂️ Teknisk detektiv og 🧠 psykologisk vejleder beskytter din familie", "🔍 Analysér", "📚 Svindelbibliotek",
      "Prøv en eksempelbesked:", "🏦 Falsk bank", "👮 Falsk politi", "🎁 Falsk præmie", "Indsæt eller skriv en mistænkelig besked her...",
      "🔍 Tjek nu", "📚 Svindelbibliotek", "Søg: bank, politi, levering, OTP...", "Ryd", "Alle", "🏦 Bank",
      "👮 Politi", "🎁 Præmie", "📦 Levering", "⏳ Tjekhistorik", "🗑️ Ryd", "Ingen tjek endnu.",
      "Risikoniveau", "Sikker", "Mistænkelig", "Farlig", "Oprindelig besked:", "Detektiv", "🛠️ Anbefalede handlinger:", "Psykologisk vejleder", "🚨 Nødhjælp", "🔗 Linkkontrol"
    ],
    fi: [
      "🌙 Tumma", "☀️ Vaalea", "🕵️‍♂️ Tekninen etsivä ja 🧠 psykologinen opas suojelevat perhettäsi", "🔍 Analysoi", "📚 Huijauskirjasto",
      "Kokeile esimerkkiviestiä:", "🏦 Valepankki", "👮 Valepoliisi", "🎁 Valepalkinto", "Liitä tai kirjoita epäilyttävä viesti tähän...",
      "🔍 Tarkista nyt", "📚 Huijauskirjasto", "Hae: pankki, poliisi, toimitus, OTP...", "Tyhjennä", "Kaikki", "🏦 Pankki",
      "👮 Poliisi", "🎁 Palkinto", "📦 Toimitus", "⏳ Tarkistushistoria", "🗑️ Tyhjennä", "Ei tarkistuksia vielä.",
      "Riskitaso", "Turvallinen", "Epäilyttävä", "Vaarallinen", "Alkuperäinen viesti:", "Etsivä", "🛠️ Suositellut toimet:", "Psykologinen opas", "🚨 Hätäapu", "🔗 Linkin tarkistus"
    ],
    cs: [
      "🌙 Tmavý", "☀️ Světlý", "🕵️‍♂️ Technický detektiv a 🧠 psychologický průvodce chrání vaši rodinu", "🔍 Analyzovat", "📚 Knihovna podvodů",
      "Vyzkoušejte ukázkovou zprávu:", "🏦 Falešná banka", "👮 Falešná policie", "🎁 Falešná výhra", "Vložte nebo napište podezřelou zprávu...",
      "🔍 Zkontrolovat", "📚 Knihovna podvodů", "Hledat: banka, policie, doručení, OTP...", "Vymazat", "Vše", "🏦 Banka",
      "👮 Policie", "🎁 Výhra", "📦 Doručení", "⏳ Historie kontrol", "🗑️ Vymazat", "Zatím žádné kontroly.",
      "Úroveň rizika", "Bezpečné", "Podezřelé", "Nebezpečné", "Původní zpráva:", "Detektiv", "🛠️ Doporučené kroky:", "Psychologický průvodce", "🚨 Nouzová pomoc", "🔗 Kontrola odkazu"
    ],
    uk: [
      "🌙 Темна", "☀️ Світла", "🕵️‍♂️ Технічний детектив і 🧠 психологічний консультант захищають вашу родину", "🔍 Аналізувати", "📚 Бібліотека шахрайства",
      "Спробуйте приклад повідомлення:", "🏦 Підроблений банк", "👮 Підроблена поліція", "🎁 Фальшивий приз", "Вставте або введіть підозріле повідомлення...",
      "🔍 Перевірити зараз", "📚 Бібліотека шахрайства", "Пошук: банк, поліція, доставка, OTP...", "Очистити", "Усі", "🏦 Банк",
      "👮 Поліція", "🎁 Приз", "📦 Доставка", "⏳ Історія перевірок", "🗑️ Очистити", "Перевірок ще немає.",
      "Рівень ризику", "Безпечно", "Підозріло", "Небезпечно", "Оригінальне повідомлення:", "Детектив", "🛠️ Рекомендовані дії:", "Психолог", "🚨 Екстрена допомога", "🔗 Перевірка посилання"
    ],
    ro: [
      "🌙 Întunecat", "☀️ Luminos", "🕵️‍♂️ Detectivul tehnic și 🧠 ghidul psihologic vă protejează familia", "🔍 Analizează", "📚 Biblioteca de fraude",
      "Încercați un mesaj exemplu:", "🏦 Bancă falsă", "👮 Poliție falsă", "🎁 Premiu fals", "Lipiți sau scrieți aici un mesaj suspect...",
      "🔍 Verifică acum", "📚 Biblioteca de fraude", "Caută: bancă, poliție, livrare, OTP...", "Șterge", "Toate", "🏦 Bancă",
      "👮 Poliție", "🎁 Premiu", "📦 Livrare", "⏳ Istoricul verificărilor", "🗑️ Șterge", "Nu există verificări încă.",
      "Nivel de risc", "Sigur", "Suspect", "Periculos", "Mesaj original:", "Detectiv", "🛠️ Acțiuni recomandate:", "Ghid psihologic", "🚨 Ajutor de urgență", "🔗 Verificarea linkului"
    ],
    el: [
      "🌙 Σκούρο", "☀️ Φωτεινό", "🕵️‍♂️ Τεχνικός ντετέκτιβ και 🧠 ψυχολογικός οδηγός προστατεύουν την οικογένειά σας", "🔍 Ανάλυση", "📚 Βιβλιοθήκη απάτης",
      "Δοκιμάστε ένα δείγμα μηνύματος:", "🏦 Ψεύτικη τράπεζα", "👮 Ψεύτικη αστυνομία", "🎁 Ψεύτικο βραβείο", "Επικολλήστε ή γράψτε ένα ύποπτο μήνυμα εδώ...",
      "🔍 Έλεγχος τώρα", "📚 Βιβλιοθήκη απάτης", "Αναζήτηση: τράπεζα, αστυνομία, παράδοση, OTP...", "Καθαρισμός", "Όλα", "🏦 Τράπεζα",
      "👮 Αστυνομία", "🎁 Βραβείο", "📦 Παράδοση", "⏳ Ιστορικό ελέγχων", "🗑️ Καθαρισμός", "Δεν υπάρχουν ακόμη έλεγχοι.",
      "Επίπεδο κινδύνου", "Ασφαλές", "Ύποπτο", "Επικίνδυνο", "Αρχικό μήνυμα:", "Ντετέκτιβ", "🛠️ Προτεινόμενες ενέργειες:", "Ψυχολογικός οδηγός", "🚨 Βοήθεια έκτακτης ανάγκης", "🔗 Έλεγχος συνδέσμου"
    ],
    he: [
      "🌙 כהה", "☀️ בהיר", "🕵️‍♂️ בלש טכני ו־🧠 מדריך פסיכולוגי מגנים על המשפחה שלך", "🔍 ניתוח", "📚 ספריית הונאות",
      "נסו הודעה לדוגמה:", "🏦 בנק מזויף", "👮 משטרה מזויפת", "🎁 פרס מזויף", "הדביקו או הקלידו כאן הודעה חשודה...",
      "🔍 בדיקה עכשיו", "📚 ספריית הונאות", "חיפוש: בנק, משטרה, משלוח, OTP...", "ניקוי", "הכול", "🏦 בנק",
      "👮 משטרה", "🎁 פרס", "📦 משלוח", "⏳ היסטוריית בדיקות", "🗑️ ניקוי", "אין עדיין בדיקות.",
      "רמת סיכון", "בטוח", "חשוד", "מסוכן", "ההודעה המקורית:", "בלש", "🛠️ פעולות מומלצות:", "מדריך פסיכולוגי", "🚨 עזרה דחופה", "🔗 בדיקת קישור"
    ]
  };

  const extraKeys = [
    "detectedSigns", "noSigns", "manipulation", "rescueIntro", "none",
    "clicked", "transferred", "otp", "immediateSteps", "contactNumbers"
  ];

  const extras = {
    "zh-CN": ["🔎 发现的技术警示：", "未发现明显的技术危险迹象。", "🎯 心理操纵手法：", "如果您已经与此消息互动，请选择最接近的情况。", "✅ 我什么都没做", "🔗 我打开了链接", "💸 我已经转账", "🔐 我分享了 OTP/验证码", "📌 立即执行", "☎️ 联系对象"],
    "zh-TW": ["🔎 發現的技術警示：", "未發現明顯的技術危險跡象。", "🎯 心理操縱手法：", "如果您已與此訊息互動，請選擇最接近的情況。", "✅ 我什麼都沒做", "🔗 我開啟了連結", "💸 我已經轉帳", "🔐 我分享了 OTP/驗證碼", "📌 立即執行", "☎️ 聯絡對象"],
    es: ["🔎 Señales técnicas detectadas:", "No se encontraron señales técnicas claras de peligro.", "🎯 Manipulación psicológica:", "Si ya interactuaste con el mensaje, elige la situación más cercana.", "✅ No hice nada", "🔗 Abrí el enlace", "💸 Transferí dinero", "🔐 Compartí un OTP/código", "📌 Haz esto ahora", "☎️ A quién contactar"],
    fr: ["🔎 Signes techniques détectés :", "Aucun signe technique clair de danger n'a été trouvé.", "🎯 Manipulation psychologique :", "Si vous avez déjà interagi avec le message, choisissez la situation la plus proche.", "✅ Je n'ai rien fait", "🔗 J'ai ouvert le lien", "💸 J'ai transféré de l'argent", "🔐 J'ai partagé un OTP/code", "📌 À faire maintenant", "☎️ Qui contacter"],
    de: ["🔎 Erkannte technische Warnzeichen:", "Keine eindeutigen technischen Gefahrenzeichen gefunden.", "🎯 Psychologische Manipulation:", "Wenn Sie bereits reagiert haben, wählen Sie die passendste Situation.", "✅ Ich habe nichts getan", "🔗 Ich habe den Link geöffnet", "💸 Ich habe Geld überwiesen", "🔐 Ich habe einen OTP/Code geteilt", "📌 Jetzt erledigen", "☎️ Kontaktstellen"],
    ja: ["🔎 検出された技術的な警告：", "明確な技術的危険は見つかりませんでした。", "🎯 心理的な操作：", "すでに反応した場合は、最も近い状況を選んでください。", "✅ 何もしていない", "🔗 リンクを開いた", "💸 送金した", "🔐 OTP/コードを共有した", "📌 今すぐ行うこと", "☎️ 連絡先"],
    ko: ["🔎 발견된 기술적 경고:", "명확한 기술적 위험 징후가 없습니다.", "🎯 심리적 조작:", "이미 메시지에 반응했다면 가장 가까운 상황을 선택하세요.", "✅ 아무것도 하지 않음", "🔗 링크를 열었음", "💸 송금했음", "🔐 OTP/코드를 공유했음", "📌 지금 해야 할 일", "☎️ 연락할 곳"],
    th: ["🔎 สัญญาณเตือนทางเทคนิคที่พบ:", "ไม่พบสัญญาณอันตรายทางเทคนิคที่ชัดเจน", "🎯 การชักจูงทางจิตวิทยา:", "หากคุณโต้ตอบกับข้อความแล้ว ให้เลือกสถานการณ์ที่ใกล้เคียงที่สุด", "✅ ยังไม่ได้ทำอะไร", "🔗 เปิดลิงก์แล้ว", "💸 โอนเงินแล้ว", "🔐 ให้ OTP/รหัสแล้ว", "📌 ทำทันที", "☎️ ผู้ที่ควรติดต่อ"],
    id: ["🔎 Tanda teknis yang ditemukan:", "Tidak ada tanda bahaya teknis yang jelas.", "🎯 Manipulasi psikologis:", "Jika sudah berinteraksi, pilih situasi yang paling sesuai.", "✅ Saya belum melakukan apa pun", "🔗 Saya membuka tautan", "💸 Saya mentransfer uang", "🔐 Saya membagikan OTP/kode", "📌 Lakukan sekarang", "☎️ Siapa yang dihubungi"],
    ms: ["🔎 Tanda teknikal yang dikesan:", "Tiada tanda bahaya teknikal yang jelas.", "🎯 Manipulasi psikologi:", "Jika anda sudah berinteraksi, pilih situasi yang paling hampir.", "✅ Saya belum berbuat apa-apa", "🔗 Saya membuka pautan", "💸 Saya memindahkan wang", "🔐 Saya berkongsi OTP/kod", "📌 Lakukan sekarang", "☎️ Siapa untuk dihubungi"],
    fil: ["🔎 Natukoy na teknikal na babala:", "Walang malinaw na teknikal na panganib.", "🎯 Sikolohikal na manipulasyon:", "Kung nakipag-ugnayan ka na, piliin ang pinakamalapit na sitwasyon.", "✅ Wala akong ginawa", "🔗 Binuksan ko ang link", "💸 Naglipat ako ng pera", "🔐 Ibinahagi ko ang OTP/code", "📌 Gawin ngayon", "☎️ Sino ang kokontakin"],
    hi: ["🔎 मिले तकनीकी चेतावनी संकेत:", "कोई स्पष्ट तकनीकी खतरा नहीं मिला।", "🎯 मनोवैज्ञानिक हेरफेर:", "यदि आपने संदेश पर कार्रवाई की है, तो निकटतम स्थिति चुनें।", "✅ मैंने कुछ नहीं किया", "🔗 मैंने लिंक खोला", "💸 मैंने पैसे भेजे", "🔐 मैंने OTP/कोड साझा किया", "📌 अभी यह करें", "☎️ किससे संपर्क करें"],
    ar: ["🔎 إشارات التحذير التقنية:", "لم تُكتشف إشارات خطر تقنية واضحة.", "🎯 التلاعب النفسي:", "إذا تفاعلت مع الرسالة، فاختر الحالة الأقرب.", "✅ لم أفعل شيئًا", "🔗 فتحت الرابط", "💸 حوّلت المال", "🔐 شاركت رمز OTP", "📌 افعل هذا الآن", "☎️ بمن تتصل"],
    ru: ["🔎 Обнаруженные технические признаки:", "Явных технических признаков опасности не найдено.", "🎯 Психологическая манипуляция:", "Если вы уже отреагировали, выберите ближайшую ситуацию.", "✅ Я ничего не делал", "🔗 Я открыл ссылку", "💸 Я перевёл деньги", "🔐 Я сообщил OTP/код", "📌 Сделайте это сейчас", "☎️ С кем связаться"],
    pt: ["🔎 Sinais técnicos encontrados:", "Não foram encontrados sinais técnicos claros de perigo.", "🎯 Manipulação psicológica:", "Se já interagiu, escolha a situação mais próxima.", "✅ Não fiz nada", "🔗 Abri o link", "💸 Transferi dinheiro", "🔐 Partilhei um OTP/código", "📌 Faça isto agora", "☎️ Quem contactar"],
    it: ["🔎 Segnali tecnici rilevati:", "Nessun chiaro segnale tecnico di pericolo.", "🎯 Manipolazione psicologica:", "Se hai già interagito, scegli la situazione più vicina.", "✅ Non ho fatto nulla", "🔗 Ho aperto il link", "💸 Ho trasferito denaro", "🔐 Ho condiviso un OTP/codice", "📌 Fallo subito", "☎️ Chi contattare"],
    nl: ["🔎 Gevonden technische waarschuwingen:", "Geen duidelijke technische gevaren gevonden.", "🎯 Psychologische manipulatie:", "Kies de meest passende situatie als u al hebt gereageerd.", "✅ Ik heb niets gedaan", "🔗 Ik heb de link geopend", "💸 Ik heb geld overgemaakt", "🔐 Ik heb een OTP/code gedeeld", "📌 Doe dit nu", "☎️ Wie te contacteren"],
    pl: ["🔎 Wykryte sygnały techniczne:", "Nie znaleziono wyraźnych technicznych oznak zagrożenia.", "🎯 Manipulacja psychologiczna:", "Jeśli już zareagowano, wybierz najbliższą sytuację.", "✅ Nic nie zrobiłem", "🔗 Otworzyłem link", "💸 Przelałem pieniądze", "🔐 Udostępniłem OTP/kod", "📌 Zrób to teraz", "☎️ Z kim się skontaktować"],
    tr: ["🔎 Tespit edilen teknik işaretler:", "Belirgin bir teknik tehlike işareti bulunamadı.", "🎯 Psikolojik manipülasyon:", "Etkileşim kurduysanız en yakın durumu seçin.", "✅ Hiçbir şey yapmadım", "🔗 Bağlantıyı açtım", "💸 Para gönderdim", "🔐 OTP/kod paylaştım", "📌 Şimdi bunu yapın", "☎️ Kiminle iletişime geçilmeli"],
    sv: ["🔎 Tekniska varningssignaler:", "Inga tydliga tekniska faror hittades.", "🎯 Psykologisk manipulation:", "Om du redan har agerat, välj den närmaste situationen.", "✅ Jag gjorde ingenting", "🔗 Jag öppnade länken", "💸 Jag överförde pengar", "🔐 Jag delade OTP/kod", "📌 Gör detta nu", "☎️ Vem du ska kontakta"],
    no: ["🔎 Tekniske varselsignaler:", "Ingen tydelige tekniske farer funnet.", "🎯 Psykologisk manipulasjon:", "Hvis du allerede har reagert, velg nærmeste situasjon.", "✅ Jeg gjorde ingenting", "🔗 Jeg åpnet lenken", "💸 Jeg overførte penger", "🔐 Jeg delte OTP/kode", "📌 Gjør dette nå", "☎️ Hvem du bør kontakte"],
    da: ["🔎 Tekniske advarselstegn:", "Ingen tydelige tekniske farer fundet.", "🎯 Psykologisk manipulation:", "Hvis du allerede har reageret, vælg den nærmeste situation.", "✅ Jeg gjorde ingenting", "🔗 Jeg åbnede linket", "💸 Jeg overførte penge", "🔐 Jeg delte OTP/kode", "📌 Gør dette nu", "☎️ Hvem du skal kontakte"],
    fi: ["🔎 Havaitut tekniset varoitukset:", "Selviä teknisiä vaaroja ei löytynyt.", "🎯 Psykologinen manipulointi:", "Jos olet jo reagoinut, valitse lähin tilanne.", "✅ En tehnyt mitään", "🔗 Avasin linkin", "💸 Siirsin rahaa", "🔐 Jaoin OTP:n/koodin", "📌 Tee tämä nyt", "☎️ Keneen ottaa yhteyttä"],
    cs: ["🔎 Zjištěné technické varovné znaky:", "Nebyly nalezeny jasné technické hrozby.", "🎯 Psychologická manipulace:", "Pokud jste již reagovali, vyberte nejbližší situaci.", "✅ Nic jsem neudělal", "🔗 Otevřel jsem odkaz", "💸 Převedl jsem peníze", "🔐 Sdílel jsem OTP/kód", "📌 Udělejte to nyní", "☎️ Koho kontaktovat"],
    uk: ["🔎 Виявлені технічні ознаки:", "Явних технічних загроз не знайдено.", "🎯 Психологічна маніпуляція:", "Якщо ви вже відреагували, виберіть найближчу ситуацію.", "✅ Я нічого не робив", "🔗 Я відкрив посилання", "💸 Я переказав гроші", "🔐 Я повідомив OTP/код", "📌 Зробіть це зараз", "☎️ З ким зв'язатися"],
    ro: ["🔎 Semne tehnice detectate:", "Nu au fost găsite pericole tehnice clare.", "🎯 Manipulare psihologică:", "Dacă ați interacționat deja, alegeți situația cea mai apropiată.", "✅ Nu am făcut nimic", "🔗 Am deschis linkul", "💸 Am transferat bani", "🔐 Am distribuit un OTP/cod", "📌 Faceți asta acum", "☎️ Pe cine să contactați"],
    el: ["🔎 Τεχνικές προειδοποιήσεις:", "Δεν βρέθηκαν σαφείς τεχνικοί κίνδυνοι.", "🎯 Ψυχολογική χειραγώγηση:", "Αν έχετε ήδη αλληλεπιδράσει, επιλέξτε την πλησιέστερη κατάσταση.", "✅ Δεν έκανα τίποτα", "🔗 Άνοιξα τον σύνδεσμο", "💸 Μετέφερα χρήματα", "🔐 Μοιράστηκα OTP/κωδικό", "📌 Κάντε το τώρα", "☎️ Με ποιον να επικοινωνήσετε"],
    he: ["🔎 סימני אזהרה טכניים:", "לא נמצאו סימני סכנה טכניים ברורים.", "🎯 מניפולציה פסיכולוגית:", "אם כבר הגבתם, בחרו את המצב המתאים ביותר.", "✅ לא עשיתי דבר", "🔗 פתחתי את הקישור", "💸 העברתי כסף", "🔐 שיתפתי OTP/קוד", "📌 עשו זאת עכשיו", "☎️ עם מי ליצור קשר"]
  };

  window.SC_UI_TRANSLATIONS = Object.fromEntries(
    Object.entries(packs).map(([language, values]) => {
      if (values.length !== keys.length) {
        throw new Error(`Invalid translation pack ${language}: expected ${keys.length}, received ${values.length}`);
      }
      const extraValues = extras[language];
      if (!extraValues || extraValues.length !== extraKeys.length) {
        throw new Error(`Invalid extra translation pack ${language}`);
      }
      return [language, {
        ...Object.fromEntries(keys.map((key, index) => [key, values[index]])),
        ...Object.fromEntries(extraKeys.map((key, index) => [key, extraValues[index]]))
      }];
    })
  );
})();
