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


  const supplemental = {
  "zh-CN": {
    "legalNotice": "法律提示：ScamCheck 是由学生团队开发的教育工具。其评估不能替代银行或有关部门发布的正式警告。",
    "fallbackNotice": "Gemini 当前不可用，因此正在使用本地备用分析器。",
    "imageAnalyzerTitle": "分析图片 / 二维码",
    "imageAnalyzerDescription": "上传消息截图或二维码，让 Gemini 读取并评估。",
    "chooseImage": "选择图片或将图片拖放到这里",
    "imageAnalyzeButton": "✨ 分析图片",
    "removeImage": "移除图片",
    "imageAnalysisFailed": "目前无法分析该图片，请稍后重试。"
  },
  "zh-TW": {
    "legalNotice": "法律提示：ScamCheck 是由學生團隊開發的教育工具。其評估不能取代銀行或相關機關發布的正式警告。",
    "fallbackNotice": "Gemini 目前無法使用，因此正在使用本機備用分析器。",
    "imageAnalyzerTitle": "分析圖片 / QR 碼",
    "imageAnalyzerDescription": "上傳訊息截圖或 QR 碼，讓 Gemini 讀取並評估。",
    "chooseImage": "選擇圖片或將圖片拖放到這裡",
    "imageAnalyzeButton": "✨ 分析圖片",
    "removeImage": "移除圖片",
    "imageAnalysisFailed": "目前無法分析此圖片，請稍後再試。"
  },
  "es": {
    "legalNotice": "Aviso legal: ScamCheck es una herramienta educativa desarrollada por un equipo de estudiantes. Sus evaluaciones no sustituyen las advertencias oficiales de bancos o autoridades.",
    "fallbackNotice": "Gemini no está disponible en este momento, así que se está usando el analizador de respaldo local.",
    "imageAnalyzerTitle": "Analizar imagen / código QR",
    "imageAnalyzerDescription": "Sube una captura de un mensaje o un código QR para que Gemini lo lea y lo evalúe.",
    "chooseImage": "Elige una imagen o arrástrala aquí",
    "imageAnalyzeButton": "✨ Analizar imagen",
    "removeImage": "Eliminar imagen",
    "imageAnalysisFailed": "La imagen no se pudo analizar en este momento. Inténtalo de nuevo."
  },
  "fr": {
    "legalNotice": "Avis juridique : ScamCheck est un outil éducatif développé par une équipe d’élèves. Ses évaluations ne remplacent pas les alertes officielles des banques ou des autorités.",
    "fallbackNotice": "Gemini est indisponible pour le moment ; l’analyseur local de secours est donc utilisé.",
    "imageAnalyzerTitle": "Analyser une image / un code QR",
    "imageAnalyzerDescription": "Importez une capture de message ou un code QR afin que Gemini puisse le lire et l’évaluer.",
    "chooseImage": "Choisissez une image ou déposez-la ici",
    "imageAnalyzeButton": "✨ Analyser l’image",
    "removeImage": "Supprimer l’image",
    "imageAnalysisFailed": "L’image ne peut pas être analysée pour le moment. Réessayez."
  },
  "de": {
    "legalNotice": "Rechtlicher Hinweis: ScamCheck ist ein von einem Schülerteam entwickeltes Bildungswerkzeug. Die Bewertungen ersetzen keine offiziellen Warnungen von Banken oder Behörden.",
    "fallbackNotice": "Gemini ist derzeit nicht verfügbar; deshalb wird der lokale Ersatz-Analysator verwendet.",
    "imageAnalyzerTitle": "Bild / QR-Code analysieren",
    "imageAnalyzerDescription": "Laden Sie einen Nachrichten-Screenshot oder QR-Code hoch, damit Gemini ihn lesen und bewerten kann.",
    "chooseImage": "Bild auswählen oder hier ablegen",
    "imageAnalyzeButton": "✨ Bild analysieren",
    "removeImage": "Bild entfernen",
    "imageAnalysisFailed": "Das Bild kann derzeit nicht analysiert werden. Bitte versuchen Sie es erneut."
  },
  "ja": {
    "legalNotice": "法的注意事項：ScamCheck は学生チームが開発した教育用ツールです。判定は、銀行や公的機関からの公式な警告に代わるものではありません。",
    "fallbackNotice": "現在 Gemini を利用できないため、ローカルの予備分析機能を使用しています。",
    "imageAnalyzerTitle": "画像 / QRコードを分析",
    "imageAnalyzerDescription": "メッセージのスクリーンショットまたはQRコードをアップロードすると、Geminiが読み取り評価します。",
    "chooseImage": "画像を選択するか、ここにドロップ",
    "imageAnalyzeButton": "✨ 画像を分析",
    "removeImage": "画像を削除",
    "imageAnalysisFailed": "現在この画像を分析できません。もう一度お試しください。"
  },
  "ko": {
    "legalNotice": "법적 안내: ScamCheck는 학생 팀이 개발한 교육용 도구입니다. 이 도구의 평가는 은행이나 관계 기관의 공식 경고를 대신하지 않습니다.",
    "fallbackNotice": "현재 Gemini를 사용할 수 없어 로컬 백업 분석기를 사용하고 있습니다.",
    "imageAnalyzerTitle": "이미지 / QR 코드 분석",
    "imageAnalyzerDescription": "메시지 스크린샷이나 QR 코드를 업로드하면 Gemini가 읽고 평가합니다.",
    "chooseImage": "이미지를 선택하거나 여기에 놓으세요",
    "imageAnalyzeButton": "✨ 이미지 분석",
    "removeImage": "이미지 삭제",
    "imageAnalysisFailed": "현재 이미지를 분석할 수 없습니다. 다시 시도해 주세요."
  },
  "th": {
    "legalNotice": "ข้อสังเกตทางกฎหมาย: ScamCheck เป็นเครื่องมือเพื่อการศึกษาที่พัฒนาโดยทีมนักเรียน การประเมินของระบบไม่ใช้แทนคำเตือนอย่างเป็นทางการจากธนาคารหรือหน่วยงานรัฐ",
    "fallbackNotice": "ขณะนี้ Gemini ไม่พร้อมใช้งาน จึงกำลังใช้ตัววิเคราะห์สำรองภายในเครื่อง",
    "imageAnalyzerTitle": "วิเคราะห์รูปภาพ / คิวอาร์โค้ด",
    "imageAnalyzerDescription": "อัปโหลดภาพหน้าจอข้อความหรือคิวอาร์โค้ดเพื่อให้ Gemini อ่านและประเมิน",
    "chooseImage": "เลือกรูปภาพหรือลากมาวางที่นี่",
    "imageAnalyzeButton": "✨ วิเคราะห์รูปภาพ",
    "removeImage": "ลบรูปภาพ",
    "imageAnalysisFailed": "ขณะนี้ไม่สามารถวิเคราะห์รูปภาพได้ โปรดลองอีกครั้ง"
  },
  "id": {
    "legalNotice": "Pemberitahuan hukum: ScamCheck adalah alat edukasi yang dikembangkan oleh tim pelajar. Penilaiannya tidak menggantikan peringatan resmi dari bank atau pihak berwenang.",
    "fallbackNotice": "Gemini sedang tidak tersedia, jadi penganalisis cadangan lokal sedang digunakan.",
    "imageAnalyzerTitle": "Analisis gambar / kode QR",
    "imageAnalyzerDescription": "Unggah tangkapan layar pesan atau kode QR agar Gemini dapat membaca dan menilainya.",
    "chooseImage": "Pilih gambar atau jatuhkan di sini",
    "imageAnalyzeButton": "✨ Analisis gambar",
    "removeImage": "Hapus gambar",
    "imageAnalysisFailed": "Gambar tidak dapat dianalisis saat ini. Silakan coba lagi."
  },
  "ms": {
    "legalNotice": "Notis undang-undang: ScamCheck ialah alat pendidikan yang dibangunkan oleh pasukan pelajar. Penilaiannya tidak menggantikan amaran rasmi daripada bank atau pihak berkuasa.",
    "fallbackNotice": "Gemini tidak tersedia buat masa ini, jadi penganalisis sandaran setempat sedang digunakan.",
    "imageAnalyzerTitle": "Analisis imej / kod QR",
    "imageAnalyzerDescription": "Muat naik tangkapan skrin mesej atau kod QR supaya Gemini boleh membaca dan menilainya.",
    "chooseImage": "Pilih imej atau lepaskan di sini",
    "imageAnalyzeButton": "✨ Analisis imej",
    "removeImage": "Buang imej",
    "imageAnalysisFailed": "Imej tidak dapat dianalisis buat masa ini. Sila cuba lagi."
  },
  "fil": {
    "legalNotice": "Legal na paalala: Ang ScamCheck ay isang kasangkapang pang-edukasyon na binuo ng pangkat ng mga mag-aaral. Hindi nito pinapalitan ang opisyal na babala mula sa mga bangko o awtoridad.",
    "fallbackNotice": "Hindi available ang Gemini sa ngayon, kaya ginagamit ang lokal na backup analyzer.",
    "imageAnalyzerTitle": "Suriin ang larawan / QR code",
    "imageAnalyzerDescription": "Mag-upload ng screenshot ng mensahe o QR code para mabasa at masuri ito ng Gemini.",
    "chooseImage": "Pumili ng larawan o i-drop ito rito",
    "imageAnalyzeButton": "✨ Suriin ang larawan",
    "removeImage": "Alisin ang larawan",
    "imageAnalysisFailed": "Hindi masuri ang larawan sa ngayon. Pakisubukang muli."
  },
  "hi": {
    "legalNotice": "कानूनी सूचना: ScamCheck छात्रों की टीम द्वारा विकसित एक शैक्षिक उपकरण है। इसका आकलन बैंकों या अधिकारियों की आधिकारिक चेतावनियों का स्थान नहीं लेता।",
    "fallbackNotice": "अभी Gemini उपलब्ध नहीं है, इसलिए स्थानीय बैकअप विश्लेषक का उपयोग किया जा रहा है।",
    "imageAnalyzerTitle": "चित्र / QR कोड का विश्लेषण",
    "imageAnalyzerDescription": "संदेश का स्क्रीनशॉट या QR कोड अपलोड करें ताकि Gemini उसे पढ़कर आकलन कर सके।",
    "chooseImage": "चित्र चुनें या यहाँ छोड़ें",
    "imageAnalyzeButton": "✨ चित्र का विश्लेषण करें",
    "removeImage": "चित्र हटाएँ",
    "imageAnalysisFailed": "अभी चित्र का विश्लेषण नहीं हो सका। कृपया फिर प्रयास करें।"
  },
  "ar": {
    "legalNotice": "تنبيه قانوني: ScamCheck أداة تعليمية طوّرها فريق من الطلاب. تقييماته لا تحل محل التحذيرات الرسمية الصادرة عن البنوك أو الجهات المختصة.",
    "fallbackNotice": "Gemini غير متاح حاليًا، لذلك يتم استخدام محلل احتياطي محلي.",
    "imageAnalyzerTitle": "تحليل صورة / رمز QR",
    "imageAnalyzerDescription": "ارفع لقطة شاشة لرسالة أو رمز QR ليقرأه Gemini ويقيّمه.",
    "chooseImage": "اختر صورة أو أفلتها هنا",
    "imageAnalyzeButton": "✨ تحليل الصورة",
    "removeImage": "إزالة الصورة",
    "imageAnalysisFailed": "تعذر تحليل الصورة حاليًا. حاول مرة أخرى."
  },
  "ru": {
    "legalNotice": "Юридическое уведомление: ScamCheck — образовательный инструмент, разработанный командой учащихся. Его оценки не заменяют официальные предупреждения банков или государственных органов.",
    "fallbackNotice": "Сейчас Gemini недоступен, поэтому используется локальный резервный анализатор.",
    "imageAnalyzerTitle": "Анализ изображения / QR-кода",
    "imageAnalyzerDescription": "Загрузите снимок сообщения или QR-код, чтобы Gemini прочитал и оценил его.",
    "chooseImage": "Выберите изображение или перетащите его сюда",
    "imageAnalyzeButton": "✨ Анализировать изображение",
    "removeImage": "Удалить изображение",
    "imageAnalysisFailed": "Сейчас изображение не удалось проанализировать. Попробуйте ещё раз."
  },
  "pt": {
    "legalNotice": "Aviso legal: o ScamCheck é uma ferramenta educativa desenvolvida por uma equipa de estudantes. As suas avaliações não substituem avisos oficiais de bancos ou autoridades.",
    "fallbackNotice": "O Gemini não está disponível neste momento, por isso está a ser usado o analisador local de reserva.",
    "imageAnalyzerTitle": "Analisar imagem / código QR",
    "imageAnalyzerDescription": "Carregue uma captura de uma mensagem ou um código QR para o Gemini ler e avaliar.",
    "chooseImage": "Escolha uma imagem ou largue-a aqui",
    "imageAnalyzeButton": "✨ Analisar imagem",
    "removeImage": "Remover imagem",
    "imageAnalysisFailed": "Não foi possível analisar a imagem neste momento. Tente novamente."
  },
  "it": {
    "legalNotice": "Avviso legale: ScamCheck è uno strumento educativo sviluppato da un team di studenti. Le sue valutazioni non sostituiscono gli avvisi ufficiali di banche o autorità.",
    "fallbackNotice": "Gemini non è disponibile al momento, quindi viene usato l’analizzatore locale di riserva.",
    "imageAnalyzerTitle": "Analizza immagine / codice QR",
    "imageAnalyzerDescription": "Carica lo screenshot di un messaggio o un codice QR affinché Gemini possa leggerlo e valutarlo.",
    "chooseImage": "Scegli un’immagine o trascinala qui",
    "imageAnalyzeButton": "✨ Analizza immagine",
    "removeImage": "Rimuovi immagine",
    "imageAnalysisFailed": "Al momento non è possibile analizzare l’immagine. Riprova."
  },
  "nl": {
    "legalNotice": "Juridische melding: ScamCheck is een educatief hulpmiddel dat door een team van leerlingen is ontwikkeld. De beoordelingen vervangen geen officiële waarschuwingen van banken of autoriteiten.",
    "fallbackNotice": "Gemini is momenteel niet beschikbaar; daarom wordt de lokale reserve-analyzer gebruikt.",
    "imageAnalyzerTitle": "Afbeelding / QR-code analyseren",
    "imageAnalyzerDescription": "Upload een schermafbeelding van een bericht of een QR-code zodat Gemini die kan lezen en beoordelen.",
    "chooseImage": "Kies een afbeelding of sleep die hierheen",
    "imageAnalyzeButton": "✨ Afbeelding analyseren",
    "removeImage": "Afbeelding verwijderen",
    "imageAnalysisFailed": "De afbeelding kan momenteel niet worden geanalyseerd. Probeer het opnieuw."
  },
  "pl": {
    "legalNotice": "Informacja prawna: ScamCheck to narzędzie edukacyjne opracowane przez zespół uczniów. Jego oceny nie zastępują oficjalnych ostrzeżeń banków ani władz.",
    "fallbackNotice": "Gemini jest obecnie niedostępny, dlatego używany jest lokalny analizator zapasowy.",
    "imageAnalyzerTitle": "Analiza obrazu / kodu QR",
    "imageAnalyzerDescription": "Prześlij zrzut ekranu wiadomości lub kod QR, aby Gemini mógł go odczytać i ocenić.",
    "chooseImage": "Wybierz obraz lub upuść go tutaj",
    "imageAnalyzeButton": "✨ Analizuj obraz",
    "removeImage": "Usuń obraz",
    "imageAnalysisFailed": "Obrazu nie można teraz przeanalizować. Spróbuj ponownie."
  },
  "tr": {
    "legalNotice": "Yasal uyarı: ScamCheck, öğrenci ekibi tarafından geliştirilmiş bir eğitim aracıdır. Değerlendirmeleri bankaların veya yetkili kurumların resmî uyarılarının yerine geçmez.",
    "fallbackNotice": "Gemini şu anda kullanılamıyor; bu nedenle yerel yedek analiz aracı kullanılıyor.",
    "imageAnalyzerTitle": "Görsel / QR kodunu analiz et",
    "imageAnalyzerDescription": "Gemini’nin okuyup değerlendirmesi için bir mesaj ekran görüntüsü veya QR kodu yükleyin.",
    "chooseImage": "Bir görsel seçin veya buraya bırakın",
    "imageAnalyzeButton": "✨ Görseli analiz et",
    "removeImage": "Görseli kaldır",
    "imageAnalysisFailed": "Görsel şu anda analiz edilemiyor. Lütfen tekrar deneyin."
  },
  "sv": {
    "legalNotice": "Juridisk information: ScamCheck är ett utbildningsverktyg som utvecklats av ett elevteam. Bedömningarna ersätter inte officiella varningar från banker eller myndigheter.",
    "fallbackNotice": "Gemini är inte tillgängligt just nu, så den lokala reservanalysatorn används.",
    "imageAnalyzerTitle": "Analysera bild / QR-kod",
    "imageAnalyzerDescription": "Ladda upp en skärmbild av ett meddelande eller en QR-kod så att Gemini kan läsa och bedöma den.",
    "chooseImage": "Välj en bild eller släpp den här",
    "imageAnalyzeButton": "✨ Analysera bild",
    "removeImage": "Ta bort bild",
    "imageAnalysisFailed": "Bilden kan inte analyseras just nu. Försök igen."
  },
  "no": {
    "legalNotice": "Juridisk merknad: ScamCheck er et opplæringsverktøy utviklet av et elevteam. Vurderingene erstatter ikke offisielle advarsler fra banker eller myndigheter.",
    "fallbackNotice": "Gemini er ikke tilgjengelig akkurat nå, så den lokale reserveanalysatoren brukes.",
    "imageAnalyzerTitle": "Analyser bilde / QR-kode",
    "imageAnalyzerDescription": "Last opp et skjermbilde av en melding eller en QR-kode slik at Gemini kan lese og vurdere den.",
    "chooseImage": "Velg et bilde eller slipp det her",
    "imageAnalyzeButton": "✨ Analyser bilde",
    "removeImage": "Fjern bilde",
    "imageAnalysisFailed": "Bildet kan ikke analyseres akkurat nå. Prøv igjen."
  },
  "da": {
    "legalNotice": "Juridisk meddelelse: ScamCheck er et undervisningsværktøj udviklet af et elevteam. Vurderingerne erstatter ikke officielle advarsler fra banker eller myndigheder.",
    "fallbackNotice": "Gemini er ikke tilgængelig lige nu, så den lokale reserveanalysator bruges.",
    "imageAnalyzerTitle": "Analyser billede / QR-kode",
    "imageAnalyzerDescription": "Upload et skærmbillede af en besked eller en QR-kode, så Gemini kan læse og vurdere den.",
    "chooseImage": "Vælg et billede eller slip det her",
    "imageAnalyzeButton": "✨ Analyser billede",
    "removeImage": "Fjern billede",
    "imageAnalysisFailed": "Billedet kan ikke analyseres lige nu. Prøv igen."
  },
  "fi": {
    "legalNotice": "Oikeudellinen huomautus: ScamCheck on opiskelijaryhmän kehittämä opetustyökalu. Sen arviot eivät korvaa pankkien tai viranomaisten virallisia varoituksia.",
    "fallbackNotice": "Gemini ei ole juuri nyt käytettävissä, joten käytössä on paikallinen varajärjestelmä.",
    "imageAnalyzerTitle": "Analysoi kuva / QR-koodi",
    "imageAnalyzerDescription": "Lataa viestin kuvakaappaus tai QR-koodi, jotta Gemini voi lukea ja arvioida sen.",
    "chooseImage": "Valitse kuva tai pudota se tähän",
    "imageAnalyzeButton": "✨ Analysoi kuva",
    "removeImage": "Poista kuva",
    "imageAnalysisFailed": "Kuvaa ei voida analysoida juuri nyt. Yritä uudelleen."
  },
  "cs": {
    "legalNotice": "Právní upozornění: ScamCheck je vzdělávací nástroj vyvinutý týmem studentů. Jeho hodnocení nenahrazuje oficiální varování bank ani úřadů.",
    "fallbackNotice": "Gemini nyní není k dispozici, proto se používá místní záložní analyzátor.",
    "imageAnalyzerTitle": "Analyzovat obrázek / QR kód",
    "imageAnalyzerDescription": "Nahrajte snímek zprávy nebo QR kód, aby jej Gemini mohl přečíst a vyhodnotit.",
    "chooseImage": "Vyberte obrázek nebo jej sem přetáhněte",
    "imageAnalyzeButton": "✨ Analyzovat obrázek",
    "removeImage": "Odstranit obrázek",
    "imageAnalysisFailed": "Obrázek nyní nelze analyzovat. Zkuste to znovu."
  },
  "uk": {
    "legalNotice": "Юридичне застереження: ScamCheck — освітній інструмент, розроблений командою учнів. Його оцінки не замінюють офіційних попереджень банків або органів влади.",
    "fallbackNotice": "Gemini зараз недоступний, тому використовується локальний резервний аналізатор.",
    "imageAnalyzerTitle": "Аналіз зображення / QR-коду",
    "imageAnalyzerDescription": "Завантажте знімок повідомлення або QR-код, щоб Gemini міг його прочитати й оцінити.",
    "chooseImage": "Виберіть зображення або перетягніть його сюди",
    "imageAnalyzeButton": "✨ Аналізувати зображення",
    "removeImage": "Видалити зображення",
    "imageAnalysisFailed": "Зображення зараз не вдалося проаналізувати. Спробуйте ще раз."
  },
  "ro": {
    "legalNotice": "Notificare legală: ScamCheck este un instrument educațional dezvoltat de o echipă de elevi. Evaluările sale nu înlocuiesc avertismentele oficiale ale băncilor sau autorităților.",
    "fallbackNotice": "Gemini nu este disponibil momentan, astfel că este folosit analizorul local de rezervă.",
    "imageAnalyzerTitle": "Analizează imaginea / codul QR",
    "imageAnalyzerDescription": "Încarcă o captură a unui mesaj sau un cod QR pentru ca Gemini să îl citească și să îl evalueze.",
    "chooseImage": "Alege o imagine sau plaseaz-o aici",
    "imageAnalyzeButton": "✨ Analizează imaginea",
    "removeImage": "Elimină imaginea",
    "imageAnalysisFailed": "Imaginea nu poate fi analizată momentan. Încearcă din nou."
  },
  "el": {
    "legalNotice": "Νομική σημείωση: Το ScamCheck είναι εκπαιδευτικό εργαλείο που αναπτύχθηκε από ομάδα μαθητών. Οι αξιολογήσεις του δεν αντικαθιστούν τις επίσημες προειδοποιήσεις τραπεζών ή αρχών.",
    "fallbackNotice": "Το Gemini δεν είναι διαθέσιμο αυτή τη στιγμή, επομένως χρησιμοποιείται ο τοπικός εφεδρικός αναλυτής.",
    "imageAnalyzerTitle": "Ανάλυση εικόνας / κωδικού QR",
    "imageAnalyzerDescription": "Ανεβάστε στιγμιότυπο μηνύματος ή κωδικό QR ώστε το Gemini να το διαβάσει και να το αξιολογήσει.",
    "chooseImage": "Επιλέξτε εικόνα ή αποθέστε την εδώ",
    "imageAnalyzeButton": "✨ Ανάλυση εικόνας",
    "removeImage": "Αφαίρεση εικόνας",
    "imageAnalysisFailed": "Η εικόνα δεν μπορεί να αναλυθεί αυτή τη στιγμή. Δοκιμάστε ξανά."
  },
  "he": {
    "legalNotice": "הודעה משפטית: ScamCheck הוא כלי חינוכי שפותח על ידי צוות תלמידים. ההערכות שלו אינן מחליפות אזהרות רשמיות מבנקים או מרשויות.",
    "fallbackNotice": "Gemini אינו זמין כרגע, ולכן נעשה שימוש במנתח גיבוי מקומי.",
    "imageAnalyzerTitle": "ניתוח תמונה / קוד QR",
    "imageAnalyzerDescription": "העלו צילום מסך של הודעה או קוד QR כדי ש-Gemini יקרא ויעריך אותו.",
    "chooseImage": "בחרו תמונה או גררו אותה לכאן",
    "imageAnalyzeButton": "✨ ניתוח תמונה",
    "removeImage": "הסרת תמונה",
    "imageAnalysisFailed": "לא ניתן לנתח את התמונה כרגע. נסו שוב."
  }
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
        ...Object.fromEntries(extraKeys.map((key, index) => [key, extraValues[index]])),
        ...(supplemental[language] || {})
      }];
    })
  );
})();


// v9: deeper offline scam-analysis language pack. This is deliberately bundled
// so backup analysis never falls back to English when Gemini is unavailable.
(() => {
  const deep = {
  "zh-CN": {
    "fallbackReason": "引文中的说法或要求无法仅凭这条消息验证，发件人也没有提供可信的身份或真实性证明，因此这些说法更像是在施压，而不是证据。",
    "fallbackPrizeReason": "这是未经请求的高价值中奖说法。消息先断言收件人已经中奖，却没有提供可核验的抽奖记录或主办方证明，这常被用作诱饵，让后续收费或转账看起来合理。",
    "fallbackPoliceReason": "发件人借用警方或其他权威机构制造恐惧和服从，但一条消息本身不能证明官方身份。骗子常用调查、逮捕或处罚的威胁迫使受害者在独立核实前行动。",
    "fallbackLinkReason": "消息试图把收件人引向由发件人控制的链接、登录、OTP 或验证步骤，这可能用于窃取账号、验证码或访问权限，而不只是提供信息。",
    "fallbackManipulation": "骗子试图让受害者只关注一种强烈情绪，如兴奋、恐惧或紧迫感，使承诺的好处或威胁的后果盖过对真实性的核查。",
    "fallbackAdvice": "其可能目的，是先让受害者完成第一次服从，例如付款、点击链接、登录或提供 OTP；一旦成功，骗子就能继续索要费用、资料或尝试接管账户。",
    "scammerIntent": "🎭 骗子可能的意图："
  },
  "zh-TW": {
    "fallbackReason": "引文中的說法或要求無法僅憑這則訊息驗證，寄件者也沒有提供可信的身分或真實性證明，因此這些說法更像是在施壓，而不是證據。",
    "fallbackPrizeReason": "這是未經要求的高價值中獎說法。訊息先斷言收件人已經中獎，卻沒有提供可核驗的抽獎紀錄或主辦方證明，常被用作誘餌，讓後續收費或轉帳看起來合理。",
    "fallbackPoliceReason": "寄件者借用警方或其他權威機構製造恐懼與服從，但一則訊息本身不能證明官方身分。詐騙者常以調查、逮捕或處罰威脅，迫使受害者在獨立核實前行動。",
    "fallbackLinkReason": "訊息試圖把收件人引向由寄件者控制的連結、登入、OTP 或驗證步驟，這可能用來竊取帳號、驗證碼或存取權限，而不只是提供資訊。",
    "fallbackManipulation": "詐騙者試圖讓受害者只專注於一種強烈情緒，例如興奮、恐懼或緊迫感，使承諾的利益或威脅的後果蓋過對真實性的核查。",
    "fallbackAdvice": "其可能目的，是先讓受害者完成第一次服從，例如付款、點擊連結、登入或提供 OTP；一旦成功，詐騙者便能繼續索取費用、資料或嘗試接管帳戶。",
    "scammerIntent": "🎭 詐騙者可能的意圖："
  },
  "es": {
    "fallbackReason": "El fragmento citado contiene una afirmación o petición que no puede verificarse con el propio mensaje. El remitente no aporta pruebas fiables de su identidad o legitimidad, por lo que la afirmación se usa como presión y no como evidencia.",
    "fallbackPrizeReason": "Es una afirmación no solicitada de un premio de gran valor. El mensaje da por hecho que el destinatario ya ganó sin aportar un registro verificable del sorteo o del organizador, un cebo habitual para hacer que una tasa o transferencia posterior parezca legítima.",
    "fallbackPoliceReason": "El remitente invoca a la policía u otra autoridad para crear miedo y obediencia, pero un mensaje no demuestra que quien escribe sea un funcionario real. Los estafadores usan amenazas de investigación, arresto o sanciones para forzar una respuesta antes de que la víctima verifique la historia por su cuenta.",
    "fallbackLinkReason": "El mensaje intenta llevar al destinatario a un enlace, inicio de sesión, OTP o paso de verificación controlado por el remitente. Eso crea una vía para robar credenciales, códigos o acceso a la cuenta, en lugar de limitarse a informar.",
    "fallbackManipulation": "El estafador intenta concentrar la atención de la víctima en una emoción fuerte, como entusiasmo, miedo o urgencia, para que la recompensa prometida o la amenaza pese más que comprobar si la historia es real.",
    "fallbackAdvice": "La intención probable es conseguir el primer acto de obediencia de la víctima, como un pago, un clic, un inicio de sesión o un OTP. Si funciona, el estafador puede escalar con más cargos, solicitudes o intentos de tomar la cuenta.",
    "scammerIntent": "🎭 Intención probable del estafador:"
  },
  "fr": {
    "fallbackReason": "Le passage cité contient une affirmation ou une demande qui ne peut pas être vérifiée à partir du message lui-même. L’expéditeur n’apporte aucune preuve fiable de son identité ou de sa légitimité ; l’affirmation sert donc de levier plutôt que de preuve.",
    "fallbackPrizeReason": "Il s’agit d’une annonce non sollicitée d’un gain de grande valeur. Le message affirme que le destinataire a déjà gagné sans fournir de tirage vérifiable ni de preuve de l’organisateur, un appât classique pour rendre crédible une demande ultérieure de frais ou de virement.",
    "fallbackPoliceReason": "L’expéditeur invoque la police ou une autre autorité pour provoquer peur et obéissance, mais un message ne prouve pas une identité officielle. Les escrocs utilisent la menace d’une enquête, d’une arrestation ou d’une sanction pour obtenir une réaction avant toute vérification indépendante.",
    "fallbackLinkReason": "Le message pousse le destinataire vers un lien, une connexion, un OTP ou une étape de vérification contrôlée par l’expéditeur. Cela peut servir à voler des identifiants, des codes ou l’accès au compte, et pas simplement à transmettre une information.",
    "fallbackManipulation": "L’escroc cherche à focaliser l’attention de la victime sur une émotion forte — excitation, peur ou urgence — afin que la récompense promise ou la menace paraisse plus importante que la vérification des faits.",
    "fallbackAdvice": "L’objectif probable est d’obtenir un premier acte de conformité, par exemple un paiement, un clic, une connexion ou un OTP. Une fois ce premier pas obtenu, l’escroc peut multiplier les frais, demandes ou tentatives de prise de contrôle du compte.",
    "scammerIntent": "🎭 Intention probable de l’escroc :"
  },
  "de": {
    "fallbackReason": "Die zitierte Aussage oder Forderung lässt sich aus der Nachricht selbst nicht verifizieren. Der Absender liefert keinen belastbaren Identitäts- oder Echtheitsnachweis; die Behauptung dient daher eher als Druckmittel als als Beleg.",
    "fallbackPrizeReason": "Es handelt sich um eine unaufgeforderte Behauptung über einen wertvollen Gewinn. Die Nachricht stellt den Gewinn als bereits feststehend dar, ohne einen überprüfbaren Ziehungsnachweis oder Veranstalternachweis zu liefern – ein typischer Köder, um spätere Gebühren oder Überweisungen plausibel wirken zu lassen.",
    "fallbackPoliceReason": "Der Absender beruft sich auf Polizei oder andere Behörden, um Angst und Gehorsam zu erzeugen, doch eine Nachricht beweist keine amtliche Identität. Betrüger drohen mit Ermittlungen, Festnahme oder Strafen, damit das Opfer handelt, bevor es die Behauptung unabhängig prüft.",
    "fallbackLinkReason": "Die Nachricht lenkt den Empfänger zu einem Link, Login, OTP oder Verifizierungsschritt, der vom Absender kontrolliert wird. So können Zugangsdaten, Codes oder Kontozugriffe gestohlen werden, statt nur Informationen bereitzustellen.",
    "fallbackManipulation": "Der Betrüger versucht, die Aufmerksamkeit des Opfers auf ein starkes Gefühl wie Freude, Angst oder Dringlichkeit zu verengen, damit Gewinn oder Drohung wichtiger wirken als die Prüfung der Geschichte.",
    "fallbackAdvice": "Das wahrscheinliche Ziel ist die erste gefügige Handlung des Opfers, etwa Zahlung, Klick, Login oder OTP. Gelingt das, kann der Betrüger weitere Gebühren, Daten oder eine Kontoübernahme verlangen bzw. versuchen.",
    "scammerIntent": "🎭 Wahrscheinliche Absicht des Betrügers:"
  },
  "ja": {
    "fallbackReason": "引用された主張や要求は、このメッセージだけでは確認できません。送信者は身元や正当性を裏付ける信頼できる証拠を示しておらず、その主張は証拠というより相手を動かすための圧力として使われています。",
    "fallbackPrizeReason": "依頼していない高額当選の主張です。検証可能な抽選記録や主催者の証明がないまま「すでに当選した」と断定しており、後の手数料や送金要求をもっともらしく見せる典型的な餌です。",
    "fallbackPoliceReason": "送信者は警察などの権威を持ち出して恐怖と服従を生み出そうとしていますが、メッセージだけでは公的な身元を証明できません。詐欺では、捜査・逮捕・罰則をちらつかせ、被害者が独自に確認する前に従わせます。",
    "fallbackLinkReason": "メッセージは、送信者側が管理するリンク、ログイン、OTP、認証手順へ誘導しています。これは単なる情報提供ではなく、認証情報やコード、アカウントへのアクセスを盗む経路になり得ます。",
    "fallbackManipulation": "詐欺師は、喜び・恐怖・緊急性など一つの強い感情に注意を集中させ、話の真偽を確認することより、約束された利益や脅威を大きく感じさせようとします。",
    "fallbackAdvice": "狙いは、支払い、リンクのクリック、ログイン、OTP 提供など、被害者から最初の従属行動を引き出すことだと考えられます。一度成功すると、追加料金や情報要求、アカウント乗っ取りへ発展させられます。",
    "scammerIntent": "🎭 詐欺師の考えられる狙い："
  },
  "ko": {
    "fallbackReason": "인용된 주장이나 요구는 이 메시지만으로 확인할 수 없습니다. 발신자는 신원이나 정당성을 입증할 믿을 만한 증거를 제시하지 않으므로, 이 주장은 증거라기보다 상대를 움직이기 위한 압박으로 사용되고 있습니다.",
    "fallbackPrizeReason": "요청하지 않은 고가 당첨 주장입니다. 확인 가능한 추첨 기록이나 주최 측 증거 없이 이미 당첨되었다고 단정하는데, 이는 이후 수수료나 송금을 정당해 보이게 만드는 흔한 미끼입니다.",
    "fallbackPoliceReason": "발신자는 경찰이나 다른 권위를 내세워 두려움과 복종을 유도하지만, 문자 메시지 하나로 공식 신원을 증명할 수는 없습니다. 사기범은 수사, 체포, 처벌을 언급해 피해자가 독립적으로 확인하기 전에 따르게 만듭니다.",
    "fallbackLinkReason": "메시지는 발신자가 통제하는 링크, 로그인, OTP 또는 인증 단계로 수신자를 이동시키려 합니다. 단순한 정보 제공이 아니라 자격 증명, 인증 코드 또는 계정 접근 권한을 훔치는 통로가 될 수 있습니다.",
    "fallbackManipulation": "사기범은 기대감, 공포, 긴급함 같은 강한 감정 하나에 피해자의 주의를 묶어 두어, 이야기의 진위를 확인하는 것보다 보상이나 위협을 더 크게 느끼게 하려 합니다.",
    "fallbackAdvice": "가능성이 큰 목적은 결제, 링크 클릭, 로그인, OTP 제공 같은 첫 번째 복종 행동을 얻는 것입니다. 그 단계가 성공하면 추가 비용, 정보 요구 또는 계정 탈취 시도로 확대할 수 있습니다.",
    "scammerIntent": "🎭 사기범의 가능한 의도:"
  },
  "th": {
    "fallbackReason": "ข้อความที่ยกมามีคำกล่าวอ้างหรือคำขอที่ตรวจสอบไม่ได้จากข้อความนั้นเอง ผู้ส่งไม่ได้ให้หลักฐานที่น่าเชื่อถือเกี่ยวกับตัวตนหรือความถูกต้อง ดังนั้นคำกล่าวอ้างจึงถูกใช้เป็นแรงกดดันมากกว่าเป็นหลักฐาน",
    "fallbackPrizeReason": "นี่คือการอ้างว่าได้รับรางวัลมูลค่าสูงโดยไม่ได้ร้องขอ ข้อความบอกว่าผู้รับชนะแล้วทั้งที่ไม่มีบันทึกการจับรางวัลหรือหลักฐานจากผู้จัดที่ตรวจสอบได้ ซึ่งเป็นเหยื่อล่อที่พบบ่อยเพื่อทำให้การเรียกเก็บค่าธรรมเนียมหรือการโอนเงินภายหลังดูน่าเชื่อถือ",
    "fallbackPoliceReason": "ผู้ส่งอ้างตำรวจหรือหน่วยงานรัฐเพื่อสร้างความกลัวและการเชื่อฟัง แต่ข้อความเพียงอย่างเดียวไม่สามารถพิสูจน์ตัวตนเจ้าหน้าที่ได้ มิจฉาชีพมักขู่เรื่องการสอบสวน จับกุม หรือบทลงโทษเพื่อให้เหยื่อทำตามก่อนตรวจสอบกับหน่วยงานจริง",
    "fallbackLinkReason": "ข้อความพยายามพาผู้รับไปยังลิงก์ การเข้าสู่ระบบ OTP หรือขั้นตอนยืนยันที่ผู้ส่งควบคุม ซึ่งอาจใช้ขโมยข้อมูลเข้าสู่ระบบ รหัสยืนยัน หรือสิทธิ์เข้าถึงบัญชี ไม่ใช่แค่ให้ข้อมูล",
    "fallbackManipulation": "มิจฉาชีพพยายามให้เหยื่อจดจ่อกับอารมณ์รุนแรงเพียงอย่างเดียว เช่น ความตื่นเต้น ความกลัว หรือความเร่งด่วน เพื่อให้รางวัลหรือภัยคุกคามสำคัญกว่าการตรวจสอบว่าเรื่องนั้นจริงหรือไม่",
    "fallbackAdvice": "เจตนาที่เป็นไปได้คือทำให้เหยื่อยอมทำตามครั้งแรก เช่น จ่ายเงิน กดลิงก์ เข้าสู่ระบบ หรือให้ OTP เมื่อสำเร็จแล้ว มิจฉาชีพสามารถเพิ่มค่าธรรมเนียม คำขอข้อมูล หรือพยายามยึดบัญชีต่อไป",
    "scammerIntent": "🎭 เจตนาที่เป็นไปได้ของมิจฉาชีพ:"
  },
  "id": {
    "fallbackReason": "Kutipan tersebut memuat klaim atau permintaan yang tidak dapat diverifikasi dari pesan itu sendiri. Pengirim tidak memberikan bukti identitas atau keabsahan yang tepercaya, sehingga klaim dipakai sebagai tekanan, bukan sebagai bukti.",
    "fallbackPrizeReason": "Ini adalah klaim hadiah bernilai tinggi yang tidak diminta. Pesan menyatakan penerima sudah menang tanpa catatan undian atau bukti penyelenggara yang dapat diverifikasi, sebuah umpan umum agar biaya atau transfer berikutnya terlihat sah.",
    "fallbackPoliceReason": "Pengirim membawa nama polisi atau otoritas lain untuk menciptakan rasa takut dan kepatuhan, tetapi sebuah pesan tidak membuktikan identitas resmi. Penipu menggunakan ancaman penyelidikan, penangkapan, atau hukuman agar korban bertindak sebelum memeriksa secara mandiri.",
    "fallbackLinkReason": "Pesan mencoba mengarahkan penerima ke tautan, login, OTP, atau langkah verifikasi yang dikendalikan pengirim. Ini dapat menjadi jalur untuk mencuri kredensial, kode verifikasi, atau akses akun, bukan sekadar memberikan informasi.",
    "fallbackManipulation": "Penipu mencoba memusatkan perhatian korban pada satu emosi kuat seperti kegembiraan, ketakutan, atau urgensi agar hadiah atau ancaman terasa lebih penting daripada memeriksa apakah ceritanya benar.",
    "fallbackAdvice": "Tujuan yang paling mungkin adalah mendapatkan tindakan kepatuhan pertama, misalnya pembayaran, klik tautan, login, atau OTP. Setelah berhasil, penipu dapat meningkatkan tuntutan dengan biaya tambahan, data pribadi, atau upaya mengambil alih akun.",
    "scammerIntent": "🎭 Kemungkinan niat penipu:"
  },
  "ms": {
    "fallbackReason": "Petikan itu mengandungi dakwaan atau permintaan yang tidak dapat disahkan melalui mesej itu sendiri. Pengirim tidak memberikan bukti identiti atau kesahihan yang boleh dipercayai, jadi dakwaan digunakan sebagai tekanan, bukan bukti.",
    "fallbackPrizeReason": "Ini ialah dakwaan hadiah bernilai tinggi yang tidak diminta. Mesej mengatakan penerima telah menang tanpa rekod cabutan atau bukti penganjur yang boleh disahkan, satu umpan biasa untuk menjadikan yuran atau pindahan wang selepas itu kelihatan sah.",
    "fallbackPoliceReason": "Pengirim menggunakan nama polis atau pihak berkuasa untuk menimbulkan ketakutan dan kepatuhan, tetapi satu mesej tidak membuktikan identiti rasmi. Penipu menggunakan ancaman siasatan, tangkapan atau hukuman supaya mangsa bertindak sebelum membuat semakan bebas.",
    "fallbackLinkReason": "Mesej cuba membawa penerima ke pautan, log masuk, OTP atau langkah pengesahan yang dikawal pengirim. Ini boleh menjadi jalan untuk mencuri kelayakan log masuk, kod pengesahan atau akses akaun, bukan sekadar memberi maklumat.",
    "fallbackManipulation": "Penipu cuba memusatkan perhatian mangsa pada satu emosi kuat seperti keterujaan, ketakutan atau rasa mendesak supaya ganjaran atau ancaman terasa lebih penting daripada menyemak sama ada cerita itu benar.",
    "fallbackAdvice": "Niat yang paling mungkin ialah mendapatkan tindakan patuh pertama seperti bayaran, klik pautan, log masuk atau OTP. Selepas itu berjaya, penipu boleh menambah yuran, permintaan maklumat atau cubaan mengambil alih akaun.",
    "scammerIntent": "🎭 Niat penipu yang berkemungkinan:"
  },
  "fil": {
    "fallbackReason": "Ang siping bahagi ay may pahayag o kahilingang hindi mapapatunayan mula sa mensahe mismo. Walang maaasahang patunay ng pagkakakilanlan o pagiging lehitimo ang nagpadala, kaya ginagamit ang pahayag bilang panggigipit sa halip na ebidensiya.",
    "fallbackPrizeReason": "Ito ay hindi hinihinging pahayag tungkol sa premyong mataas ang halaga. Sinasabi ng mensahe na nanalo na ang tatanggap nang walang beripikableng tala ng raffle o patunay mula sa organizer, isang karaniwang pain upang magmukhang lehitimo ang susunod na bayad o paglilipat ng pera.",
    "fallbackPoliceReason": "Ginagamit ng nagpadala ang pulis o ibang awtoridad upang lumikha ng takot at pagsunod, ngunit hindi napapatunayan ng isang mensahe ang opisyal na pagkakakilanlan. Gumagamit ang mga scammer ng banta ng imbestigasyon, pag-aresto o parusa para kumilos ang biktima bago makapag-verify nang hiwalay.",
    "fallbackLinkReason": "Sinusubukan ng mensahe na dalhin ang tatanggap sa link, login, OTP o verification step na kontrolado ng nagpadala. Maaari itong gamitin para magnakaw ng credentials, verification code o access sa account, hindi lamang para magbigay ng impormasyon.",
    "fallbackManipulation": "Sinusubukan ng scammer na ituon ang pansin ng biktima sa isang matinding emosyon gaya ng saya, takot o pagmamadali upang mas mahalaga ang gantimpala o banta kaysa sa pag-check kung totoo ang kuwento.",
    "fallbackAdvice": "Malamang na layunin nitong makuha ang unang pagsunod ng biktima, gaya ng pagbabayad, pag-click, pag-login o pagbibigay ng OTP. Kapag nagtagumpay, maaari itong sundan ng dagdag na bayarin, kahilingan sa datos o pag-agaw ng account.",
    "scammerIntent": "🎭 Malamang na layunin ng scammer:"
  },
  "hi": {
    "fallbackReason": "उद्धृत अंश में ऐसा दावा या अनुरोध है जिसे केवल इस संदेश से सत्यापित नहीं किया जा सकता। भेजने वाला पहचान या वैधता का भरोसेमंद प्रमाण नहीं देता, इसलिए दावा प्रमाण के बजाय दबाव के रूप में इस्तेमाल हो रहा है।",
    "fallbackPrizeReason": "यह बिना माँगे उच्च-मूल्य के इनाम का दावा है। संदेश सत्यापित ड्रॉ रिकॉर्ड या आयोजक के प्रमाण के बिना कहता है कि प्राप्तकर्ता पहले ही जीत चुका है; यह बाद की फीस या भुगतान को वैध दिखाने का सामान्य चारा है।",
    "fallbackPoliceReason": "भेजने वाला पुलिस या किसी अन्य प्राधिकरण का नाम लेकर डर और आज्ञाकारिता पैदा करता है, लेकिन एक संदेश आधिकारिक पहचान साबित नहीं करता। ठग जाँच, गिरफ्तारी या दंड की धमकी देकर पीड़ित से स्वतंत्र सत्यापन से पहले कार्रवाई करवाते हैं।",
    "fallbackLinkReason": "संदेश प्राप्तकर्ता को ऐसे लिंक, लॉगिन, OTP या सत्यापन चरण पर ले जाना चाहता है जिसे भेजने वाला नियंत्रित करता है। इसका उपयोग केवल जानकारी देने के बजाय पासवर्ड, कोड या खाते की पहुँच चुराने के लिए हो सकता है।",
    "fallbackManipulation": "ठग पीड़ित का ध्यान उत्साह, डर या जल्दी जैसी एक तीव्र भावना पर केंद्रित करना चाहता है ताकि वादा किया गया लाभ या धमकी कहानी की सच्चाई जाँचने से अधिक महत्वपूर्ण लगे।",
    "fallbackAdvice": "संभावित उद्देश्य पीड़ित से पहला अनुपालन कराना है, जैसे भुगतान, लिंक क्लिक, लॉगिन या OTP देना। पहला कदम सफल होने पर ठग अतिरिक्त शुल्क, जानकारी या खाते पर कब्ज़े की कोशिश बढ़ा सकता है।",
    "scammerIntent": "🎭 ठग का संभावित इरादा:"
  },
  "ar": {
    "fallbackReason": "يتضمن المقتطف ادعاءً أو طلبًا لا يمكن التحقق منه من الرسالة نفسها. ولا يقدم المرسل دليلًا موثوقًا على هويته أو شرعيته، لذلك يُستخدم الادعاء كوسيلة ضغط لا كدليل.",
    "fallbackPrizeReason": "هذا ادعاء غير مطلوب بالفوز بجائزة مرتفعة القيمة. يفترض النص أن المستلم فاز بالفعل من دون سجل سحب أو إثبات من الجهة المنظمة يمكن التحقق منه، وهو طُعم شائع لجعل الرسوم أو التحويل اللاحق يبدو مشروعًا.",
    "fallbackPoliceReason": "يستدعي المرسل اسم الشرطة أو جهة رسمية أخرى لخلق الخوف والطاعة، لكن الرسالة وحدها لا تثبت هوية رسمية. يستخدم المحتالون التهديد بالتحقيق أو الاعتقال أو العقوبة لدفع الضحية إلى التصرف قبل التحقق بشكل مستقل.",
    "fallbackLinkReason": "تحاول الرسالة نقل المستلم إلى رابط أو تسجيل دخول أو OTP أو خطوة تحقق يتحكم بها المرسل. وقد يكون ذلك مسارًا لسرقة بيانات الدخول أو رموز التحقق أو الوصول إلى الحساب، وليس مجرد تقديم معلومات.",
    "fallbackManipulation": "يحاول المحتال حصر انتباه الضحية في شعور قوي مثل الحماس أو الخوف أو الاستعجال، حتى تبدو المكافأة الموعودة أو التهديد أهم من التحقق من حقيقة القصة.",
    "fallbackAdvice": "الهدف المرجح هو الحصول على أول استجابة امتثال من الضحية، مثل الدفع أو النقر على رابط أو تسجيل الدخول أو إعطاء OTP. وبعد نجاح الخطوة الأولى يمكن للمحتال زيادة الرسوم أو الطلبات أو محاولات الاستيلاء على الحساب.",
    "scammerIntent": "🎭 النية المحتملة للمحتال:"
  },
  "ru": {
    "fallbackReason": "В цитате есть утверждение или требование, которое нельзя проверить по самому сообщению. Отправитель не даёт надёжных доказательств личности или законности, поэтому утверждение используется как рычаг давления, а не как доказательство.",
    "fallbackPrizeReason": "Это непрошенное сообщение о ценном выигрыше. Получателю объявляют, что он уже выиграл, не предоставляя проверяемых данных розыгрыша или организатора; такой приманкой часто делают последующую комиссию или перевод денег правдоподобными.",
    "fallbackPoliceReason": "Отправитель ссылается на полицию или другую власть, чтобы вызвать страх и подчинение, но сообщение само по себе не подтверждает официальный статус. Мошенники угрожают расследованием, арестом или наказанием, чтобы человек действовал до независимой проверки.",
    "fallbackLinkReason": "Сообщение пытается перевести получателя на ссылку, вход, OTP или этап проверки, контролируемый отправителем. Это может быть путь к краже учётных данных, кодов или доступа к аккаунту, а не просто передача информации.",
    "fallbackManipulation": "Мошенник старается сузить внимание жертвы до одной сильной эмоции — радости, страха или срочности, — чтобы обещанная выгода или угроза казалась важнее проверки правдивости истории.",
    "fallbackAdvice": "Вероятная цель — добиться первого действия подчинения: платежа, клика, входа или передачи OTP. После этого мошенник может наращивать требования, комиссии или попытки захвата аккаунта.",
    "scammerIntent": "🎭 Вероятное намерение мошенника:"
  },
  "pt": {
    "fallbackReason": "O trecho citado contém uma afirmação ou pedido que não pode ser verificado apenas pela própria mensagem. O remetente não apresenta prova fiável de identidade ou legitimidade, por isso a afirmação funciona como pressão e não como evidência.",
    "fallbackPrizeReason": "É uma alegação não solicitada de um prémio de elevado valor. A mensagem afirma que o destinatário já ganhou sem apresentar registo verificável do sorteio ou prova do organizador, um isco comum para tornar plausível uma taxa ou transferência posterior.",
    "fallbackPoliceReason": "O remetente invoca a polícia ou outra autoridade para criar medo e obediência, mas uma mensagem não prova uma identidade oficial. Os burlões usam ameaças de investigação, detenção ou penalização para obter uma ação antes de qualquer verificação independente.",
    "fallbackLinkReason": "A mensagem tenta levar o destinatário a uma ligação, início de sessão, OTP ou etapa de verificação controlada pelo remetente. Isso pode servir para roubar credenciais, códigos ou acesso à conta, e não apenas para fornecer informação.",
    "fallbackManipulation": "O burlão tenta concentrar a atenção da vítima numa emoção forte, como entusiasmo, medo ou urgência, para que a recompensa prometida ou a ameaça pareça mais importante do que verificar se a história é verdadeira.",
    "fallbackAdvice": "A intenção provável é obter o primeiro ato de obediência da vítima, como um pagamento, clique, início de sessão ou OTP. Depois disso, o burlão pode aumentar taxas, pedidos de dados ou tentativas de assumir a conta.",
    "scammerIntent": "🎭 Intenção provável do burlão:"
  },
  "it": {
    "fallbackReason": "Il passaggio citato contiene un’affermazione o una richiesta che non può essere verificata dal messaggio stesso. Il mittente non fornisce prove affidabili di identità o legittimità, quindi l’affermazione viene usata come leva, non come prova.",
    "fallbackPrizeReason": "È un annuncio non richiesto di un premio di grande valore. Il messaggio dà per certo che il destinatario abbia già vinto senza fornire un’estrazione verificabile o una prova dell’organizzatore, un’esca comune per rendere credibile una successiva richiesta di denaro.",
    "fallbackPoliceReason": "Il mittente richiama polizia o altre autorità per creare paura e obbedienza, ma un messaggio non dimostra un’identità ufficiale. I truffatori usano minacce di indagine, arresto o sanzioni per far agire la vittima prima di una verifica indipendente.",
    "fallbackLinkReason": "Il messaggio cerca di portare il destinatario a un link, login, OTP o passaggio di verifica controllato dal mittente. Questo può servire a rubare credenziali, codici o accesso all’account, non semplicemente a fornire informazioni.",
    "fallbackManipulation": "Il truffatore cerca di concentrare l’attenzione della vittima su un’emozione forte, come entusiasmo, paura o urgenza, affinché la ricompensa o la minaccia conti più della verifica dei fatti.",
    "fallbackAdvice": "L’intento probabile è ottenere il primo atto di conformità, ad esempio un pagamento, un clic, un login o un OTP. Dopo il primo successo, il truffatore può aumentare commissioni, richieste o tentativi di prendere il controllo dell’account.",
    "scammerIntent": "🎭 Probabile intenzione del truffatore:"
  },
  "nl": {
    "fallbackReason": "Het geciteerde deel bevat een bewering of verzoek dat niet uit het bericht zelf kan worden geverifieerd. De afzender geeft geen betrouwbaar bewijs van identiteit of legitimiteit, waardoor de bewering als drukmiddel wordt gebruikt in plaats van als bewijs.",
    "fallbackPrizeReason": "Dit is een ongevraagde claim over een waardevolle prijs. Het bericht stelt dat de ontvanger al heeft gewonnen zonder controleerbare trekking of bewijs van de organisator; dat is een veelgebruikte lokker om latere kosten of een overschrijving geloofwaardig te laten lijken.",
    "fallbackPoliceReason": "De afzender beroept zich op politie of een andere autoriteit om angst en gehoorzaamheid op te wekken, maar een bericht bewijst geen officiële identiteit. Oplichters dreigen met onderzoek, arrestatie of straf zodat het slachtoffer handelt vóór onafhankelijke controle.",
    "fallbackLinkReason": "Het bericht probeert de ontvanger naar een link, login, OTP of verificatiestap te leiden die door de afzender wordt beheerd. Dat kan worden gebruikt om inloggegevens, codes of accounttoegang te stelen in plaats van alleen informatie te geven.",
    "fallbackManipulation": "De oplichter probeert de aandacht van het slachtoffer te vernauwen tot één sterke emotie, zoals opwinding, angst of urgentie, zodat beloning of dreiging belangrijker voelt dan controleren of het verhaal klopt.",
    "fallbackAdvice": "Het waarschijnlijke doel is een eerste meegaande handeling te krijgen, zoals betalen, klikken, inloggen of een OTP delen. Daarna kan de oplichter verdere kosten, gegevens of pogingen tot accountovername eisen.",
    "scammerIntent": "🎭 Waarschijnlijke bedoeling van de oplichter:"
  },
  "pl": {
    "fallbackReason": "Cytowany fragment zawiera twierdzenie lub żądanie, którego nie da się zweryfikować na podstawie samej wiadomości. Nadawca nie podaje wiarygodnego dowodu tożsamości ani legalności, więc twierdzenie służy jako nacisk, a nie dowód.",
    "fallbackPrizeReason": "To niezamówiona informacja o cennej wygranej. Wiadomość zakłada, że odbiorca już wygrał, bez weryfikowalnego zapisu losowania lub potwierdzenia organizatora; to typowa przynęta, która ma uwiarygodnić późniejszą opłatę lub przelew.",
    "fallbackPoliceReason": "Nadawca powołuje się na policję lub inny urząd, aby wywołać strach i posłuszeństwo, ale sama wiadomość nie potwierdza oficjalnej tożsamości. Oszuści grożą śledztwem, aresztem lub karą, by skłonić ofiarę do działania przed niezależną weryfikacją.",
    "fallbackLinkReason": "Wiadomość próbuje skierować odbiorcę do linku, logowania, OTP lub etapu weryfikacji kontrolowanego przez nadawcę. Może to służyć kradzieży danych logowania, kodów lub dostępu do konta, a nie tylko przekazaniu informacji.",
    "fallbackManipulation": "Oszust próbuje skupić uwagę ofiary na jednej silnej emocji, takiej jak ekscytacja, strach lub pośpiech, aby obietnica lub groźba była ważniejsza niż sprawdzenie prawdziwości historii.",
    "fallbackAdvice": "Prawdopodobnym celem jest uzyskanie pierwszego aktu podporządkowania, np. płatności, kliknięcia, logowania lub OTP. Po tym oszust może zwiększać żądania, opłaty albo próbować przejąć konto.",
    "scammerIntent": "🎭 Prawdopodobny zamiar oszusta:"
  },
  "tr": {
    "fallbackReason": "Alıntılanan bölüm, mesajın kendisinden doğrulanamayan bir iddia veya talep içeriyor. Gönderen kimlik ya da meşruiyet için güvenilir kanıt sunmadığından, iddia kanıt yerine baskı aracı olarak kullanılıyor.",
    "fallbackPrizeReason": "Bu, istenmeden gelen yüksek değerli bir ödül iddiasıdır. Mesaj, doğrulanabilir çekiliş kaydı veya düzenleyici kanıtı olmadan alıcının kazandığını varsayar; bu, sonraki ücret veya para transferini meşru göstermeye yarayan yaygın bir yemdir.",
    "fallbackPoliceReason": "Gönderen korku ve itaat yaratmak için polis veya başka bir makamı öne sürüyor, ancak tek bir mesaj resmi kimliği kanıtlamaz. Dolandırıcılar soruşturma, tutuklama veya ceza tehdidiyle kurbanı bağımsız kontrol yapmadan harekete zorlar.",
    "fallbackLinkReason": "Mesaj, alıcıyı gönderenin kontrol ettiği bir bağlantı, giriş, OTP veya doğrulama adımına yönlendirmeye çalışıyor. Bu, yalnızca bilgi vermek yerine kimlik bilgileri, kodlar veya hesap erişimi çalmak için kullanılabilir.",
    "fallbackManipulation": "Dolandırıcı, kurbanın dikkatini heyecan, korku veya aciliyet gibi tek bir güçlü duyguya daraltarak vaat edilen ödülün ya da tehdidin hikâyeyi doğrulamaktan daha önemli görünmesini sağlamaya çalışır.",
    "fallbackAdvice": "Muhtemel amaç, ödeme, bağlantıya tıklama, giriş veya OTP verme gibi ilk uyum davranışını elde etmektir. İlk adım başarıya ulaşınca dolandırıcı ek ücret, bilgi veya hesap ele geçirme girişimlerini artırabilir.",
    "scammerIntent": "🎭 Dolandırıcının muhtemel amacı:"
  },
  "sv": {
    "fallbackReason": "Det citerade avsnittet innehåller ett påstående eller en begäran som inte kan verifieras från meddelandet självt. Avsändaren ger inget tillförlitligt bevis på identitet eller legitimitet, så påståendet används som påtryckning snarare än bevis.",
    "fallbackPrizeReason": "Detta är ett oombett påstående om en värdefull vinst. Meddelandet säger att mottagaren redan har vunnit utan verifierbar dragning eller bevis från arrangören, ett vanligt lockbete för att få en senare avgift eller överföring att verka legitim.",
    "fallbackPoliceReason": "Avsändaren hänvisar till polis eller annan myndighet för att skapa rädsla och lydnad, men ett meddelande bevisar ingen officiell identitet. Bedragare hotar med utredning, gripande eller straff för att få offret att agera innan oberoende kontroll.",
    "fallbackLinkReason": "Meddelandet försöker föra mottagaren till en länk, inloggning, OTP eller verifiering som avsändaren kontrollerar. Det kan användas för att stjäla inloggningsuppgifter, koder eller kontoåtkomst, inte bara för att ge information.",
    "fallbackManipulation": "Bedragaren försöker låsa offrets uppmärksamhet vid en stark känsla som glädje, rädsla eller brådska så att belöningen eller hotet känns viktigare än att kontrollera om berättelsen stämmer.",
    "fallbackAdvice": "Det troliga målet är att få den första eftergiften, till exempel betalning, klick, inloggning eller OTP. När det lyckas kan bedragaren öka kraven, avgifterna eller försöken att ta över kontot.",
    "scammerIntent": "🎭 Bedragarens troliga avsikt:"
  },
  "no": {
    "fallbackReason": "Det siterte avsnittet inneholder en påstand eller forespørsel som ikke kan bekreftes fra selve meldingen. Avsenderen gir ingen pålitelig dokumentasjon på identitet eller legitimitet, så påstanden brukes som pressmiddel snarere enn bevis.",
    "fallbackPrizeReason": "Dette er en uoppfordret påstand om en verdifull premie. Meldingen sier at mottakeren allerede har vunnet uten en verifiserbar trekning eller bevis fra arrangøren, et vanlig lokkemiddel for å få senere gebyr eller overføring til å virke legitim.",
    "fallbackPoliceReason": "Avsenderen viser til politi eller annen myndighet for å skape frykt og lydighet, men en melding beviser ingen offisiell identitet. Svindlere truer med etterforskning, arrest eller straff for å få offeret til å handle før uavhengig kontroll.",
    "fallbackLinkReason": "Meldingen prøver å føre mottakeren til en lenke, innlogging, OTP eller verifisering som avsenderen kontrollerer. Dette kan brukes til å stjele innloggingsdata, koder eller kontotilgang, ikke bare til å gi informasjon.",
    "fallbackManipulation": "Svindleren prøver å snevre inn offerets oppmerksomhet til en sterk følelse som glede, frykt eller hastverk, slik at belønningen eller trusselen føles viktigere enn å kontrollere om historien er sann.",
    "fallbackAdvice": "Det sannsynlige målet er å få den første ettergivelsen, som betaling, klikk, innlogging eller OTP. Når det lykkes, kan svindleren øke krav, gebyrer eller forsøk på å overta kontoen.",
    "scammerIntent": "🎭 Svindlerens sannsynlige hensikt:"
  },
  "da": {
    "fallbackReason": "Det citerede afsnit indeholder en påstand eller anmodning, som ikke kan verificeres ud fra selve beskeden. Afsenderen giver intet pålideligt bevis på identitet eller legitimitet, så påstanden bruges som pres frem for dokumentation.",
    "fallbackPrizeReason": "Dette er en uopfordret påstand om en værdifuld præmie. Beskeden siger, at modtageren allerede har vundet uden en verificerbar lodtrækning eller dokumentation fra arrangøren, et almindeligt lokkemiddel til at få et senere gebyr eller en overførsel til at virke legitim.",
    "fallbackPoliceReason": "Afsenderen henviser til politi eller anden myndighed for at skabe frygt og lydighed, men en besked beviser ingen officiel identitet. Svindlere truer med efterforskning, anholdelse eller straf for at få offeret til at handle før uafhængig kontrol.",
    "fallbackLinkReason": "Beskeden forsøger at føre modtageren til et link, login, OTP eller verifikation, som afsenderen kontrollerer. Det kan bruges til at stjæle loginoplysninger, koder eller kontoadgang, ikke blot til at give information.",
    "fallbackManipulation": "Svindleren forsøger at indsnævre offerets opmærksomhed til en stærk følelse som glæde, frygt eller hast, så belønningen eller truslen føles vigtigere end at kontrollere historien.",
    "fallbackAdvice": "Det sandsynlige mål er at få den første eftergivelse, f.eks. betaling, klik, login eller OTP. Når det lykkes, kan svindleren øge gebyrer, krav eller forsøg på at overtage kontoen.",
    "scammerIntent": "🎭 Svindlerens sandsynlige hensigt:"
  },
  "fi": {
    "fallbackReason": "Lainattu kohta sisältää väitteen tai pyynnön, jota ei voi varmistaa itse viestistä. Lähettäjä ei anna luotettavaa näyttöä henkilöllisyydestä tai aitoudesta, joten väitettä käytetään painostuksena eikä todisteena.",
    "fallbackPrizeReason": "Kyseessä on pyytämätön väite arvokkaasta voitosta. Viesti ilmoittaa vastaanottajan jo voittaneen ilman tarkistettavaa arvontatietoa tai järjestäjän näyttöä, mikä on tavallinen houkutin myöhemmän maksun tai siirron uskottavuuden lisäämiseksi.",
    "fallbackPoliceReason": "Lähettäjä vetoaa poliisiin tai muuhun viranomaiseen luodakseen pelkoa ja kuuliaisuutta, mutta viesti ei todista virallista henkilöllisyyttä. Huijarit uhkaavat tutkinnalla, pidätyksellä tai rangaistuksella saadakseen uhrin toimimaan ennen riippumatonta tarkistusta.",
    "fallbackLinkReason": "Viesti yrittää ohjata vastaanottajan lähettäjän hallitsemaan linkkiin, kirjautumiseen, OTP:hen tai varmennukseen. Sitä voidaan käyttää tunnusten, koodien tai tilipääsyn varastamiseen, ei vain tiedon antamiseen.",
    "fallbackManipulation": "Huijari yrittää rajata uhrin huomion yhteen voimakkaaseen tunteeseen, kuten innostukseen, pelkoon tai kiireeseen, jotta palkinto tai uhka tuntuu tärkeämmältä kuin tarinan tarkistaminen.",
    "fallbackAdvice": "Todennäköinen tavoite on saada ensimmäinen myöntyminen, kuten maksu, klikkaus, kirjautuminen tai OTP. Sen jälkeen huijari voi lisätä maksuja, pyyntöjä tai tilin kaappausyrityksiä.",
    "scammerIntent": "🎭 Huijarin todennäköinen tarkoitus:"
  },
  "cs": {
    "fallbackReason": "Citovaný úsek obsahuje tvrzení nebo požadavek, který nelze ověřit ze samotné zprávy. Odesílatel neposkytuje spolehlivý důkaz totožnosti ani oprávněnosti, takže tvrzení slouží jako nátlak, nikoli jako důkaz.",
    "fallbackPrizeReason": "Jde o nevyžádané tvrzení o hodnotné výhře. Zpráva tvrdí, že příjemce již vyhrál, bez ověřitelného záznamu slosování nebo důkazu pořadatele; to je běžná návnada, která má pozdější poplatek či převod udělat věrohodným.",
    "fallbackPoliceReason": "Odesílatel se odvolává na policii nebo jinou autoritu, aby vyvolal strach a poslušnost, ale samotná zpráva oficiální totožnost neprokazuje. Podvodníci hrozí vyšetřováním, zatčením nebo trestem, aby oběť jednala před nezávislým ověřením.",
    "fallbackLinkReason": "Zpráva se snaží odvést příjemce na odkaz, přihlášení, OTP nebo ověření kontrolované odesílatelem. To může sloužit ke krádeži přihlašovacích údajů, kódů nebo přístupu k účtu, nikoli pouze k předání informací.",
    "fallbackManipulation": "Podvodník se snaží zúžit pozornost oběti na jednu silnou emoci, například radost, strach nebo naléhavost, aby odměna či hrozba působila důležitěji než ověření příběhu.",
    "fallbackAdvice": "Pravděpodobným cílem je získat první ústupek, například platbu, kliknutí, přihlášení nebo OTP. Po úspěchu může podvodník navyšovat poplatky, požadavky nebo pokusy o převzetí účtu.",
    "scammerIntent": "🎭 Pravděpodobný záměr podvodníka:"
  },
  "uk": {
    "fallbackReason": "Цитований фрагмент містить твердження або вимогу, яку неможливо перевірити з самого повідомлення. Відправник не надає надійного підтвердження особи чи законності, тому твердження використовується як тиск, а не доказ.",
    "fallbackPrizeReason": "Це небажане повідомлення про цінний виграш. У ньому стверджується, що одержувач уже виграв, без перевірюваних даних розіграшу чи доказу від організатора; це типова приманка, щоб зробити подальшу комісію або переказ правдоподібними.",
    "fallbackPoliceReason": "Відправник посилається на поліцію чи інший орган, щоб викликати страх і покору, але саме повідомлення не доводить офіційну особу. Шахраї погрожують розслідуванням, арештом або покаранням, щоб змусити жертву діяти до незалежної перевірки.",
    "fallbackLinkReason": "Повідомлення намагається перевести одержувача на посилання, вхід, OTP або перевірку, контрольовану відправником. Це може бути шляхом до крадіжки облікових даних, кодів або доступу до акаунта, а не просто передачею інформації.",
    "fallbackManipulation": "Шахрай намагається звузити увагу жертви до однієї сильної емоції — радості, страху чи терміновості — щоб обіцянка або загроза здавалася важливішою за перевірку правдивості історії.",
    "fallbackAdvice": "Ймовірна мета — отримати першу дію покори: платіж, клік, вхід або OTP. Після цього шахрай може нарощувати комісії, вимоги або спроби захопити акаунт.",
    "scammerIntent": "🎭 Ймовірний намір шахрая:"
  },
  "ro": {
    "fallbackReason": "Fragmentul citat conține o afirmație sau o cerere care nu poate fi verificată din mesajul însuși. Expeditorul nu oferă dovezi fiabile privind identitatea sau legitimitatea, astfel că afirmația este folosită ca presiune, nu ca dovadă.",
    "fallbackPrizeReason": "Este o afirmație nesolicitată despre un premiu valoros. Mesajul spune că destinatarul a câștigat deja fără o tragere verificabilă sau dovada organizatorului, o momeală frecventă pentru a face credibilă o taxă sau un transfer ulterior.",
    "fallbackPoliceReason": "Expeditorul invocă poliția sau altă autoritate pentru a crea teamă și supunere, dar un mesaj nu dovedește o identitate oficială. Escrocii amenință cu anchetă, arest sau sancțiuni pentru a obține acțiune înainte de o verificare independentă.",
    "fallbackLinkReason": "Mesajul încearcă să ducă destinatarul la un link, login, OTP sau pas de verificare controlat de expeditor. Acesta poate fi folosit pentru furtul credențialelor, codurilor sau accesului la cont, nu doar pentru informare.",
    "fallbackManipulation": "Escrocul încearcă să concentreze atenția victimei pe o emoție puternică, precum entuziasm, teamă sau urgență, astfel încât recompensa sau amenințarea să pară mai importantă decât verificarea poveștii.",
    "fallbackAdvice": "Intenția probabilă este obținerea primului act de conformare, precum o plată, un clic, un login sau un OTP. După reușită, escrocul poate crește taxele, cererile sau încercările de preluare a contului.",
    "scammerIntent": "🎭 Intenția probabilă a escrocului:"
  },
  "el": {
    "fallbackReason": "Το απόσπασμα περιέχει έναν ισχυρισμό ή αίτημα που δεν μπορεί να επαληθευτεί από το ίδιο το μήνυμα. Ο αποστολέας δεν παρέχει αξιόπιστη απόδειξη ταυτότητας ή νομιμότητας, επομένως ο ισχυρισμός λειτουργεί ως πίεση και όχι ως απόδειξη.",
    "fallbackPrizeReason": "Πρόκειται για ανεπιθύμητο ισχυρισμό πολύτιμου βραβείου. Το μήνυμα θεωρεί δεδομένο ότι ο παραλήπτης κέρδισε χωρίς επαληθεύσιμη κλήρωση ή απόδειξη του διοργανωτή, ένα συνηθισμένο δόλωμα ώστε μια μεταγενέστερη χρέωση ή μεταφορά να φαίνεται νόμιμη.",
    "fallbackPoliceReason": "Ο αποστολέας επικαλείται την αστυνομία ή άλλη αρχή για να δημιουργήσει φόβο και υπακοή, αλλά ένα μήνυμα δεν αποδεικνύει επίσημη ταυτότητα. Οι απατεώνες απειλούν με έρευνα, σύλληψη ή ποινή ώστε το θύμα να ενεργήσει πριν από ανεξάρτητη επαλήθευση.",
    "fallbackLinkReason": "Το μήνυμα προσπαθεί να οδηγήσει τον παραλήπτη σε σύνδεσμο, είσοδο, OTP ή βήμα επαλήθευσης που ελέγχει ο αποστολέας. Αυτό μπορεί να χρησιμοποιηθεί για κλοπή διαπιστευτηρίων, κωδικών ή πρόσβασης σε λογαριασμό, όχι απλώς για ενημέρωση.",
    "fallbackManipulation": "Ο απατεώνας προσπαθεί να περιορίσει την προσοχή του θύματος σε ένα έντονο συναίσθημα, όπως ενθουσιασμό, φόβο ή επείγον, ώστε η ανταμοιβή ή η απειλή να φαίνεται σημαντικότερη από τον έλεγχο της ιστορίας.",
    "fallbackAdvice": "Ο πιθανός στόχος είναι να αποσπάσει την πρώτη πράξη συμμόρφωσης, όπως πληρωμή, κλικ, είσοδο ή OTP. Μετά την επιτυχία μπορεί να αυξήσει χρεώσεις, αιτήματα ή προσπάθειες κατάληψης λογαριασμού.",
    "scammerIntent": "🎭 Πιθανή πρόθεση του απατεώνα:"
  },
  "he": {
    "fallbackReason": "הקטע המצוטט כולל טענה או בקשה שאי אפשר לאמת מתוך ההודעה עצמה. השולח אינו מספק הוכחה אמינה לזהות או ללגיטימיות, ולכן הטענה משמשת כאמצעי לחץ ולא כהוכחה.",
    "fallbackPrizeReason": "זוהי טענה לא מבוקשת על פרס בעל ערך גבוה. ההודעה קובעת שהנמען כבר זכה בלי רשומת הגרלה ניתנת לאימות או הוכחה מהמארגן, פיתיון נפוץ שנועד לגרום לעמלה או להעברה בהמשך להיראות לגיטימיות.",
    "fallbackPoliceReason": "השולח מזכיר משטרה או רשות אחרת כדי ליצור פחד וצייתנות, אך הודעה אינה מוכיחה זהות רשמית. נוכלים משתמשים באיומים בחקירה, מעצר או עונש כדי לגרום לקורבן לפעול לפני בדיקה עצמאית.",
    "fallbackLinkReason": "ההודעה מנסה להעביר את הנמען לקישור, התחברות, OTP או שלב אימות הנשלט בידי השולח. כך ניתן לגנוב פרטי גישה, קודים או גישה לחשבון, ולא רק למסור מידע.",
    "fallbackManipulation": "הנוכל מנסה למקד את תשומת לב הקורבן ברגש חזק אחד, כמו התלהבות, פחד או דחיפות, כדי שהפרס או האיום ירגישו חשובים יותר מבדיקת אמיתות הסיפור.",
    "fallbackAdvice": "המטרה הסבירה היא להשיג את פעולת הציות הראשונה, כגון תשלום, לחיצה, התחברות או מסירת OTP. לאחר הצלחה ניתן להסלים לעמלות נוספות, בקשות מידע או ניסיונות השתלטות על החשבון.",
    "scammerIntent": "🎭 הכוונה הסבירה של הנוכל:"
  }
};
  if (!window.SC_UI_TRANSLATIONS) return;
  for (const [language, values] of Object.entries(deep)) {
    if (window.SC_UI_TRANSLATIONS[language]) {
      Object.assign(window.SC_UI_TRANSLATIONS[language], values);
    }
  }
})();


// v9: concrete offline action/fee/urgency text for every bundled locale.
(() => {
  const extra = {
  "zh-CN": {
    "fallbackFeeReason": "所谓奖励或利益被设置为必须先付款才能获得。这正是预付费诈骗的核心：发送者先拿到真实的钱，而承诺的大奖并没有独立证据证明存在。",
    "fallbackUrgencyReason": "措辞迫使收件人在独立核实之前迅速行动。时间压力会降低核对发送者、主办方和信息矛盾的机会。",
    "fallbackAction1": "不要支付消息要求的费用，也不要提供 OTP、密码或银行资料。",
    "fallbackAction2": "请自行通过官方网站或官方应用找到联系方式并核实，不要使用消息里提供的链接或号码。",
    "fallbackAction3": "保存消息、发送者资料、链接和收款信息作为证据；如果无法核实，请屏蔽并举报发送者。"
  },
  "zh-TW": {
    "fallbackFeeReason": "所謂獎勵或利益被設定為必須先付款才能取得。這正是預付費詐騙的核心：寄件者先拿到真實的錢，而承諾的高額回報並沒有獨立證據證明存在。",
    "fallbackUrgencyReason": "措辭迫使收件人在獨立核實前迅速行動。時間壓力會減少核對寄件者、主辦方及資訊矛盾的機會。",
    "fallbackAction1": "不要支付訊息要求的費用，也不要提供 OTP、密碼或銀行資料。",
    "fallbackAction2": "請自行透過官方網站或官方應用程式找到聯絡方式並核實，不要使用訊息中的連結或電話。",
    "fallbackAction3": "保存訊息、寄件者資料、連結與收款資訊作為證據；若無法核實，請封鎖並檢舉寄件者。"
  },
  "es": {
    "fallbackFeeReason": "La supuesta recompensa o ventaja queda condicionada a pagar dinero por adelantado. Ese es el mecanismo central de una estafa de pago anticipado: el remitente recibe dinero real ahora a cambio de una recompensa mayor cuya existencia no ha sido demostrada de forma independiente.",
    "fallbackUrgencyReason": "La redacción presiona al destinatario para actuar antes de verificar la afirmación por su cuenta. La urgencia reduce el tiempo para comprobar al remitente, al organizador o las contradicciones del relato.",
    "fallbackAction1": "No pagues las tasas solicitadas ni compartas OTP, contraseñas o datos bancarios.",
    "fallbackAction2": "Verifica la afirmación mediante la web o app oficial y datos de contacto que encuentres tú mismo; no uses enlaces o números del mensaje.",
    "fallbackAction3": "Guarda el mensaje, los datos del remitente, enlaces y datos de pago como prueba; si no puede verificarse, bloquea y denuncia al remitente."
  },
  "fr": {
    "fallbackFeeReason": "L’avantage promis est conditionné au paiement d’une somme à l’avance. C’est le mécanisme central d’une arnaque aux frais anticipés : l’expéditeur obtient un vrai paiement maintenant en échange d’une récompense plus importante dont l’existence n’a pas été prouvée indépendamment.",
    "fallbackUrgencyReason": "Le texte pousse le destinataire à agir avant de vérifier l’affirmation de façon indépendante. L’urgence réduit le temps disponible pour contrôler l’expéditeur, l’organisateur ou les contradictions du récit.",
    "fallbackAction1": "Ne payez pas les frais demandés et ne communiquez ni OTP, ni mot de passe, ni données bancaires.",
    "fallbackAction2": "Vérifiez l’affirmation via le site ou l’application officielle et des coordonnées trouvées indépendamment ; n’utilisez pas les liens ou numéros du message.",
    "fallbackAction3": "Conservez le message, les données de l’expéditeur, les liens et les informations de paiement comme preuves ; si l’affirmation est invérifiable, bloquez et signalez l’expéditeur."
  },
  "de": {
    "fallbackFeeReason": "Der versprochene Vorteil wird davon abhängig gemacht, dass zuerst Geld gezahlt wird. Das ist das Kernprinzip eines Vorschussbetrugs: Der Absender erhält jetzt echtes Geld für eine größere versprochene Leistung, deren Existenz nicht unabhängig belegt ist.",
    "fallbackUrgencyReason": "Die Formulierung drängt den Empfänger zum Handeln, bevor die Behauptung unabhängig geprüft wird. Zeitdruck verringert die Möglichkeit, Absender, Veranstalter oder Widersprüche zu kontrollieren.",
    "fallbackAction1": "Zahlen Sie die verlangten Gebühren nicht und geben Sie keine OTPs, Passwörter oder Bankdaten weiter.",
    "fallbackAction2": "Prüfen Sie die Behauptung über die offizielle Website oder App und selbst gefundene Kontaktdaten; verwenden Sie keine Links oder Nummern aus der Nachricht.",
    "fallbackAction3": "Sichern Sie Nachricht, Absenderdaten, Links und Zahlungsinformationen als Beweise; wenn sich die Behauptung nicht bestätigen lässt, blockieren und melden Sie den Absender."
  },
  "ja": {
    "fallbackFeeReason": "約束された利益を受け取る条件として先払いを求めています。これは前払い詐欺の中心的な仕組みで、送信者は今すぐ本物のお金を受け取る一方、より大きな見返りの存在は独立に証明されていません。",
    "fallbackUrgencyReason": "文面は、主張を独自に確認する前に急いで行動させようとしています。時間的圧力は、送信者や主催者、話の矛盾を確認する余地を減らします。",
    "fallbackAction1": "要求された料金を支払わず、OTP、パスワード、銀行情報を渡さないでください。",
    "fallbackAction2": "公式サイトや公式アプリから自分で見つけた連絡先で確認し、メッセージ内のリンクや番号は使わないでください。",
    "fallbackAction3": "メッセージ、送信者情報、リンク、振込先を証拠として保存し、確認できなければ送信者をブロックして報告してください。"
  },
  "ko": {
    "fallbackFeeReason": "약속된 혜택을 받기 위해 먼저 돈을 내야 한다는 조건이 붙어 있습니다. 이는 선입금 사기의 핵심 구조로, 발신자는 검증되지 않은 더 큰 보상을 약속하면서 실제 돈을 먼저 받습니다.",
    "fallbackUrgencyReason": "문구는 수신자가 독립적으로 확인하기 전에 빨리 행동하도록 압박합니다. 시간 압박은 발신자, 주최자 또는 이야기의 모순을 확인할 기회를 줄입니다.",
    "fallbackAction1": "요구된 수수료를 지불하지 말고 OTP, 비밀번호 또는 은행 정보를 제공하지 마세요.",
    "fallbackAction2": "공식 웹사이트나 앱에서 직접 찾은 연락처로 확인하고, 메시지에 있는 링크나 번호는 사용하지 마세요.",
    "fallbackAction3": "메시지, 발신자 정보, 링크와 송금 정보를 증거로 보관하고 확인되지 않으면 발신자를 차단하고 신고하세요."
  },
  "th": {
    "fallbackFeeReason": "มีการตั้งเงื่อนไขว่าต้องจ่ายเงินล่วงหน้าจึงจะได้รับผลประโยชน์ที่อ้างไว้ นี่คือกลไกหลักของการหลอกให้จ่ายค่าธรรมเนียมล่วงหน้า ผู้ส่งได้เงินจริงทันทีแลกกับรางวัลที่ยังไม่มีหลักฐานอิสระว่ามีอยู่จริง",
    "fallbackUrgencyReason": "ถ้อยคำกดดันให้ผู้รับรีบทำก่อนตรวจสอบข้อมูลด้วยตนเอง ความเร่งด่วนลดโอกาสในการตรวจสอบผู้ส่ง ผู้จัด หรือความขัดแย้งในเรื่องราว",
    "fallbackAction1": "อย่าจ่ายค่าธรรมเนียมที่ร้องขอ และอย่าให้ OTP รหัสผ่าน หรือข้อมูลธนาคาร",
    "fallbackAction2": "ตรวจสอบผ่านเว็บไซต์หรือแอปทางการและข้อมูลติดต่อที่คุณค้นหาเอง อย่าใช้ลิงก์หรือหมายเลขที่อยู่ในข้อความ",
    "fallbackAction3": "เก็บข้อความ ข้อมูลผู้ส่ง ลิงก์ และข้อมูลการชำระเงินไว้เป็นหลักฐาน หากตรวจสอบไม่ได้ให้บล็อกและรายงานผู้ส่ง"
  },
  "id": {
    "fallbackFeeReason": "Manfaat yang dijanjikan dibuat bergantung pada pembayaran uang terlebih dahulu. Ini adalah mekanisme inti penipuan biaya di muka: pengirim menerima uang nyata sekarang sebagai imbalan atas hadiah lebih besar yang belum terbukti ada secara independen.",
    "fallbackUrgencyReason": "Bahasa pesan menekan penerima agar bertindak sebelum memverifikasi klaim secara mandiri. Tekanan waktu mengurangi kesempatan untuk memeriksa pengirim, penyelenggara, atau kontradiksi dalam cerita.",
    "fallbackAction1": "Jangan membayar biaya yang diminta dan jangan membagikan OTP, kata sandi, atau data bank.",
    "fallbackAction2": "Verifikasi klaim melalui situs atau aplikasi resmi dan kontak yang Anda temukan sendiri; jangan gunakan tautan atau nomor dari pesan.",
    "fallbackAction3": "Simpan pesan, data pengirim, tautan, dan informasi pembayaran sebagai bukti; jika tidak dapat diverifikasi, blokir dan laporkan pengirim."
  },
  "ms": {
    "fallbackFeeReason": "Manfaat yang dijanjikan dijadikan bergantung pada bayaran terlebih dahulu. Ini ialah mekanisme utama penipuan bayaran pendahuluan: pengirim menerima wang sebenar sekarang sebagai pertukaran untuk ganjaran lebih besar yang belum terbukti wujud secara bebas.",
    "fallbackUrgencyReason": "Ayat mesej menekan penerima supaya bertindak sebelum menyemak dakwaan secara bebas. Tekanan masa mengurangkan peluang untuk memeriksa pengirim, penganjur atau percanggahan dalam cerita.",
    "fallbackAction1": "Jangan bayar yuran yang diminta dan jangan kongsi OTP, kata laluan atau maklumat bank.",
    "fallbackAction2": "Sahkan dakwaan melalui laman atau aplikasi rasmi dan maklumat hubungan yang anda cari sendiri; jangan gunakan pautan atau nombor dalam mesej.",
    "fallbackAction3": "Simpan mesej, butiran pengirim, pautan dan maklumat pembayaran sebagai bukti; jika tidak dapat disahkan, sekat dan laporkan pengirim."
  },
  "fil": {
    "fallbackFeeReason": "Ginagawang kondisyon ang paunang pagbabayad bago makuha ang ipinapangakong benepisyo. Ito ang pangunahing mekanismo ng advance-fee scam: nakakakuha ang nagpadala ng totoong pera ngayon kapalit ng mas malaking gantimpalang hindi pa napatunayang umiiral.",
    "fallbackUrgencyReason": "Pinipilit ng pananalita ang tatanggap na kumilos bago makapag-verify nang hiwalay. Binabawasan ng pagmamadali ang oras para suriin ang nagpadala, organizer o mga salungatan sa kuwento.",
    "fallbackAction1": "Huwag bayaran ang hinihinging fee at huwag ibigay ang OTP, password o detalye ng bangko.",
    "fallbackAction2": "I-verify sa opisyal na website o app at sa contact na ikaw mismo ang nakahanap; huwag gamitin ang link o numero sa mensahe.",
    "fallbackAction3": "Itabi ang mensahe, detalye ng nagpadala, link at impormasyon sa pagbabayad bilang ebidensiya; kung hindi ma-verify, i-block at i-report ang nagpadala."
  },
  "hi": {
    "fallbackFeeReason": "वादा किए गए लाभ को पहले पैसे देने की शर्त से जोड़ा गया है। यह अग्रिम-शुल्क ठगी का मुख्य तरीका है: भेजने वाला अभी वास्तविक पैसा लेता है और बदले में बड़ी ऐसी चीज़ का वादा करता है जिसका स्वतंत्र प्रमाण नहीं है।",
    "fallbackUrgencyReason": "भाषा प्राप्तकर्ता पर स्वतंत्र जाँच से पहले जल्दी कार्रवाई करने का दबाव डालती है। समय का दबाव भेजने वाले, आयोजक या कहानी की विसंगतियों को जाँचने का अवसर घटाता है।",
    "fallbackAction1": "माँगी गई फीस न दें और OTP, पासवर्ड या बैंक जानकारी साझा न करें।",
    "fallbackAction2": "आधिकारिक वेबसाइट या ऐप और स्वयं खोजे गए संपर्क से दावे की पुष्टि करें; संदेश में दिए लिंक या नंबर का उपयोग न करें।",
    "fallbackAction3": "संदेश, भेजने वाले का विवरण, लिंक और भुगतान जानकारी सबूत के रूप में रखें; पुष्टि न हो तो भेजने वाले को ब्लॉक और रिपोर्ट करें।"
  },
  "ar": {
    "fallbackFeeReason": "جُعل الحصول على المنفعة الموعودة مشروطًا بدفع المال مقدمًا. وهذا هو جوهر احتيال الرسوم المسبقة: يحصل المرسل على مال حقيقي الآن مقابل مكافأة أكبر لم يثبت وجودها بشكل مستقل.",
    "fallbackUrgencyReason": "تضغط صياغة الرسالة على المستلم ليتصرف قبل التحقق المستقل من الادعاء. يقلل ضغط الوقت فرصة فحص المرسل أو الجهة المنظمة أو التناقضات في القصة.",
    "fallbackAction1": "لا تدفع الرسوم المطلوبة ولا تشارك OTP أو كلمات المرور أو البيانات المصرفية.",
    "fallbackAction2": "تحقق عبر الموقع أو التطبيق الرسمي وبيانات اتصال تجدها بنفسك؛ لا تستخدم الروابط أو الأرقام الواردة في الرسالة.",
    "fallbackAction3": "احتفظ بالرسالة وبيانات المرسل والروابط ومعلومات الدفع كدليل؛ إذا تعذر التحقق فاحظر المرسل وبلّغ عنه."
  },
  "ru": {
    "fallbackFeeReason": "Получение обещанной выгоды ставится в зависимость от предварительной оплаты. Это основной механизм мошенничества с авансовым платежом: отправитель получает реальные деньги сейчас в обмен на более крупную выгоду, существование которой независимо не подтверждено.",
    "fallbackUrgencyReason": "Формулировка давит на получателя, чтобы он действовал до независимой проверки. Срочность уменьшает время на проверку отправителя, организатора и противоречий в истории.",
    "fallbackAction1": "Не платите требуемые сборы и не передавайте OTP, пароли или банковские данные.",
    "fallbackAction2": "Проверяйте утверждение через официальный сайт или приложение и контакты, найденные самостоятельно; не используйте ссылки и номера из сообщения.",
    "fallbackAction3": "Сохраните сообщение, данные отправителя, ссылки и платёжные реквизиты как доказательство; если подтвердить утверждение нельзя, заблокируйте и пожалуйтесь на отправителя."
  },
  "pt": {
    "fallbackFeeReason": "O benefício prometido é condicionado ao pagamento antecipado. Este é o mecanismo central de uma burla de pagamento antecipado: o remetente recebe dinheiro real agora em troca de uma recompensa maior cuja existência não foi comprovada de forma independente.",
    "fallbackUrgencyReason": "A redação pressiona o destinatário a agir antes de verificar a alegação de forma independente. A urgência reduz o tempo para confirmar o remetente, o organizador ou contradições na história.",
    "fallbackAction1": "Não pague as taxas pedidas nem partilhe OTP, palavras-passe ou dados bancários.",
    "fallbackAction2": "Verifique a alegação através do site ou aplicação oficial e de contactos encontrados por si; não use links ou números da mensagem.",
    "fallbackAction3": "Guarde a mensagem, os dados do remetente, links e informações de pagamento como prova; se não for possível verificar, bloqueie e denuncie o remetente."
  },
  "it": {
    "fallbackFeeReason": "Il beneficio promesso viene subordinato al pagamento anticipato. È il meccanismo centrale della truffa con pagamento anticipato: il mittente ottiene denaro reale subito in cambio di una ricompensa maggiore la cui esistenza non è stata provata indipendentemente.",
    "fallbackUrgencyReason": "La formulazione spinge il destinatario ad agire prima di verificare autonomamente l’affermazione. La pressione del tempo riduce la possibilità di controllare mittente, organizzatore o contraddizioni nel racconto.",
    "fallbackAction1": "Non pagare le commissioni richieste e non condividere OTP, password o dati bancari.",
    "fallbackAction2": "Verifica l’affermazione tramite sito o app ufficiale e contatti trovati autonomamente; non usare link o numeri presenti nel messaggio.",
    "fallbackAction3": "Conserva messaggio, dati del mittente, link e informazioni di pagamento come prova; se non è verificabile, blocca e segnala il mittente."
  },
  "nl": {
    "fallbackFeeReason": "Het beloofde voordeel wordt afhankelijk gemaakt van een voorafbetaling. Dat is het kernmechanisme van voorschotfraude: de afzender ontvangt nu echt geld in ruil voor een grotere beloning waarvan het bestaan niet onafhankelijk is bewezen.",
    "fallbackUrgencyReason": "De formulering zet de ontvanger onder druk om te handelen vóór onafhankelijke controle. Tijdsdruk verkleint de kans om afzender, organisator of tegenstrijdigheden in het verhaal te controleren.",
    "fallbackAction1": "Betaal de gevraagde kosten niet en deel geen OTP, wachtwoord of bankgegevens.",
    "fallbackAction2": "Controleer de bewering via de officiële website of app en contactgegevens die u zelf vindt; gebruik geen links of nummers uit het bericht.",
    "fallbackAction3": "Bewaar bericht, afzendergegevens, links en betaalinformatie als bewijs; als de claim niet te verifiëren is, blokkeer en meld de afzender."
  },
  "pl": {
    "fallbackFeeReason": "Obiecana korzyść jest uzależniona od wcześniejszej wpłaty. To podstawowy mechanizm oszustwa z opłatą z góry: nadawca otrzymuje prawdziwe pieniądze teraz w zamian za większą korzyść, której istnienie nie zostało niezależnie potwierdzone.",
    "fallbackUrgencyReason": "Sformułowanie naciska na odbiorcę, by działał przed niezależnym sprawdzeniem. Presja czasu ogranicza możliwość zweryfikowania nadawcy, organizatora i sprzeczności w historii.",
    "fallbackAction1": "Nie płać żądanych opłat i nie udostępniaj OTP, haseł ani danych bankowych.",
    "fallbackAction2": "Sprawdź twierdzenie przez oficjalną stronę lub aplikację i samodzielnie znalezione dane kontaktowe; nie używaj linków ani numerów z wiadomości.",
    "fallbackAction3": "Zachowaj wiadomość, dane nadawcy, linki i informacje o płatności jako dowód; jeśli nie da się potwierdzić twierdzenia, zablokuj i zgłoś nadawcę."
  },
  "tr": {
    "fallbackFeeReason": "Vaat edilen fayda, önce para ödeme şartına bağlanıyor. Bu, peşin ücret dolandırıcılığının temel mekanizmasıdır: gönderen şimdi gerçek parayı alır, karşılığında bağımsız olarak kanıtlanmamış daha büyük bir ödül vaat eder.",
    "fallbackUrgencyReason": "İfade, alıcıyı iddiayı bağımsız olarak doğrulamadan önce harekete geçmeye zorluyor. Zaman baskısı göndereni, düzenleyiciyi veya hikâyedeki çelişkileri kontrol etme fırsatını azaltır.",
    "fallbackAction1": "İstenen ücreti ödemeyin ve OTP, parola veya banka bilgisi paylaşmayın.",
    "fallbackAction2": "İddiayı resmi web sitesi veya uygulama ve kendiniz bulduğunuz iletişim bilgileriyle doğrulayın; mesajdaki bağlantı veya numaraları kullanmayın.",
    "fallbackAction3": "Mesajı, gönderen bilgilerini, bağlantıları ve ödeme bilgilerini kanıt olarak saklayın; doğrulanamıyorsa göndereni engelleyip bildirin."
  },
  "sv": {
    "fallbackFeeReason": "Den utlovade förmånen görs beroende av en förskottsbetalning. Det är kärnan i ett förskottsbedrägeri: avsändaren får riktiga pengar nu i utbyte mot en större belöning vars existens inte har bevisats oberoende.",
    "fallbackUrgencyReason": "Formuleringen pressar mottagaren att agera innan påståendet kan kontrolleras oberoende. Tidsbrist minskar chansen att granska avsändare, arrangör eller motsägelser i berättelsen.",
    "fallbackAction1": "Betala inte de begärda avgifterna och lämna inte ut OTP, lösenord eller bankuppgifter.",
    "fallbackAction2": "Kontrollera påståendet via officiell webbplats eller app och kontaktuppgifter som du själv hittar; använd inte länkar eller nummer i meddelandet.",
    "fallbackAction3": "Spara meddelandet, avsändaruppgifter, länkar och betalningsinformation som bevis; om påståendet inte kan verifieras, blockera och anmäl avsändaren."
  },
  "no": {
    "fallbackFeeReason": "Den lovede fordelen gjøres avhengig av betaling på forhånd. Dette er kjernen i forskuddsbedrageri: avsenderen får ekte penger nå i bytte mot en større belønning som ikke er uavhengig dokumentert.",
    "fallbackUrgencyReason": "Formuleringen presser mottakeren til å handle før påstanden kan kontrolleres uavhengig. Tidspress reduserer muligheten til å sjekke avsender, arrangør eller motsetninger i historien.",
    "fallbackAction1": "Ikke betal de krevde gebyrene og ikke del OTP, passord eller bankopplysninger.",
    "fallbackAction2": "Kontroller påstanden via offisiell nettside eller app og kontaktinformasjon du finner selv; ikke bruk lenker eller numre fra meldingen.",
    "fallbackAction3": "Lagre meldingen, avsenderdetaljer, lenker og betalingsinformasjon som bevis; hvis påstanden ikke kan bekreftes, blokker og rapporter avsenderen."
  },
  "da": {
    "fallbackFeeReason": "Den lovede fordel gøres afhængig af betaling på forhånd. Det er kernen i forskudsbedrageri: afsenderen får rigtige penge nu i bytte for en større belønning, hvis eksistens ikke er bevist uafhængigt.",
    "fallbackUrgencyReason": "Formuleringen presser modtageren til at handle før uafhængig kontrol. Tidspres reducerer muligheden for at kontrollere afsender, arrangør eller modsigelser i historien.",
    "fallbackAction1": "Betal ikke de krævede gebyrer og del ikke OTP, adgangskoder eller bankoplysninger.",
    "fallbackAction2": "Kontrollér påstanden via den officielle hjemmeside eller app og kontaktoplysninger, du selv finder; brug ikke links eller numre fra beskeden.",
    "fallbackAction3": "Gem beskeden, afsenderoplysninger, links og betalingsoplysninger som bevis; hvis påstanden ikke kan bekræftes, blokér og anmeld afsenderen."
  },
  "fi": {
    "fallbackFeeReason": "Luvattu hyöty sidotaan ennakkomaksuun. Tämä on ennakkomaksuhuijauksen ydin: lähettäjä saa oikeaa rahaa heti vastineeksi suuremmasta palkkiosta, jonka olemassaoloa ei ole riippumattomasti todistettu.",
    "fallbackUrgencyReason": "Sanamuoto painostaa vastaanottajaa toimimaan ennen riippumatonta tarkistusta. Aikapaine vähentää mahdollisuutta tarkistaa lähettäjä, järjestäjä tai tarinan ristiriidat.",
    "fallbackAction1": "Älä maksa pyydettyjä maksuja äläkä anna OTP:tä, salasanoja tai pankkitietoja.",
    "fallbackAction2": "Tarkista väite viralliselta sivustolta tai sovelluksesta ja itse löytämilläsi yhteystiedoilla; älä käytä viestin linkkejä tai numeroita.",
    "fallbackAction3": "Säilytä viesti, lähettäjän tiedot, linkit ja maksutiedot todisteena; jos väitettä ei voi vahvistaa, estä ja ilmoita lähettäjä."
  },
  "cs": {
    "fallbackFeeReason": "Slíbená výhoda je podmíněna platbou předem. To je základní mechanismus podvodu s poplatkem předem: odesílatel získá skutečné peníze nyní výměnou za větší odměnu, jejíž existence nebyla nezávisle prokázána.",
    "fallbackUrgencyReason": "Formulace tlačí příjemce k jednání před nezávislým ověřením. Časový tlak snižuje možnost zkontrolovat odesílatele, pořadatele nebo rozpory v příběhu.",
    "fallbackAction1": "Neplaťte požadované poplatky a nesdílejte OTP, hesla ani bankovní údaje.",
    "fallbackAction2": "Ověřte tvrzení přes oficiální web nebo aplikaci a kontakty, které najdete sami; nepoužívejte odkazy ani čísla ze zprávy.",
    "fallbackAction3": "Uložte zprávu, údaje odesílatele, odkazy a platební informace jako důkaz; pokud tvrzení nelze ověřit, odesílatele zablokujte a nahlaste."
  },
  "uk": {
    "fallbackFeeReason": "Обіцяну вигоду ставлять у залежність від попередньої оплати. Це основний механізм шахрайства з авансовим платежем: відправник отримує справжні гроші зараз в обмін на більшу винагороду, існування якої незалежно не підтверджено.",
    "fallbackUrgencyReason": "Формулювання тисне на одержувача, щоб він діяв до незалежної перевірки. Терміновість зменшує час на перевірку відправника, організатора чи суперечностей у розповіді.",
    "fallbackAction1": "Не сплачуйте вимагані збори й не передавайте OTP, паролі або банківські дані.",
    "fallbackAction2": "Перевіряйте твердження через офіційний сайт або застосунок і контакти, знайдені самостійно; не використовуйте посилання чи номери з повідомлення.",
    "fallbackAction3": "Збережіть повідомлення, дані відправника, посилання й платіжні реквізити як доказ; якщо твердження не підтверджується, заблокуйте й повідомте про відправника."
  },
  "ro": {
    "fallbackFeeReason": "Beneficiul promis este condiționat de o plată în avans. Acesta este mecanismul central al fraudei cu taxă anticipată: expeditorul primește bani reali acum în schimbul unei recompense mai mari a cărei existență nu a fost demonstrată independent.",
    "fallbackUrgencyReason": "Formularea presează destinatarul să acționeze înainte de o verificare independentă. Presiunea timpului reduce șansa de a verifica expeditorul, organizatorul sau contradicțiile din poveste.",
    "fallbackAction1": "Nu plătiți taxele cerute și nu transmiteți OTP, parole sau date bancare.",
    "fallbackAction2": "Verificați afirmația prin site-ul sau aplicația oficială și contacte găsite independent; nu folosiți linkurile sau numerele din mesaj.",
    "fallbackAction3": "Păstrați mesajul, datele expeditorului, linkurile și informațiile de plată ca dovezi; dacă afirmația nu poate fi verificată, blocați și raportați expeditorul."
  },
  "el": {
    "fallbackFeeReason": "Το υποσχόμενο όφελος εξαρτάται από προκαταβολή. Αυτός είναι ο βασικός μηχανισμός της απάτης προκαταβολής: ο αποστολέας παίρνει πραγματικά χρήματα τώρα με αντάλλαγμα μεγαλύτερη ανταμοιβή της οποίας η ύπαρξη δεν έχει αποδειχθεί ανεξάρτητα.",
    "fallbackUrgencyReason": "Η διατύπωση πιέζει τον παραλήπτη να ενεργήσει πριν από ανεξάρτητη επαλήθευση. Η πίεση χρόνου μειώνει την ευκαιρία ελέγχου του αποστολέα, του διοργανωτή ή των αντιφάσεων της ιστορίας.",
    "fallbackAction1": "Μην πληρώνετε τα ζητούμενα τέλη και μην κοινοποιείτε OTP, κωδικούς ή τραπεζικά στοιχεία.",
    "fallbackAction2": "Επαληθεύστε τον ισχυρισμό μέσω της επίσημης ιστοσελίδας ή εφαρμογής και στοιχείων επικοινωνίας που βρίσκετε μόνοι σας· μην χρησιμοποιείτε συνδέσμους ή αριθμούς από το μήνυμα.",
    "fallbackAction3": "Κρατήστε το μήνυμα, τα στοιχεία του αποστολέα, τους συνδέσμους και τα στοιχεία πληρωμής ως αποδεικτικά· αν δεν επαληθεύεται, αποκλείστε και αναφέρετε τον αποστολέα."
  },
  "he": {
    "fallbackFeeReason": "קבלת ההטבה המובטחת מותנית בתשלום מראש. זהו מנגנון הליבה של הונאת תשלום מקדים: השולח מקבל כסף אמיתי עכשיו בתמורה לתגמול גדול יותר שלא הוכח באופן עצמאי שקיים.",
    "fallbackUrgencyReason": "הניסוח לוחץ על הנמען לפעול לפני בדיקה עצמאית. לחץ הזמן מפחית את האפשרות לבדוק את השולח, המארגן או סתירות בסיפור.",
    "fallbackAction1": "אל תשלמו את העמלות המבוקשות ואל תמסרו OTP, סיסמאות או פרטי בנק.",
    "fallbackAction2": "אמתו את הטענה דרך האתר או האפליקציה הרשמיים ופרטי קשר שמצאתם בעצמכם; אל תשתמשו בקישורים או במספרים שבהודעה.",
    "fallbackAction3": "שמרו את ההודעה, פרטי השולח, הקישורים ופרטי התשלום כראיה; אם אי אפשר לאמת את הטענה, חסמו ודווחו על השולח."
  }
};
  if (!window.SC_UI_TRANSLATIONS) return;
  for (const [language, values] of Object.entries(extra)) {
    if (window.SC_UI_TRANSLATIONS[language]) Object.assign(window.SC_UI_TRANSLATIONS[language], values);
  }
})();
