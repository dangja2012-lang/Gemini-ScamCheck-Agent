// ScamCheck v20: one-server same-origin frontend + Gemini API architecture.
// 16-scenario multilingual scam library is bundled locally.
// 16 distinct scenarios = 4 examples for each of 4 categories.
// Titles are bundled locally so changing language never depends on Gemini.
(() => {
  const ids = [
    "b1","b2","b3","b4",
    "p1","p2","p3","p4",
    "g1","g2","g3","g4",
    "d1","d2","d3","d4"
  ];

  const titlePacks = {
    vi: [
      "Đăng nhập từ thiết bị lạ", "Nâng hạn mức thẻ tín dụng", "Khóa tài khoản vì thiếu sinh trắc học", "Hoàn tiền giả và yêu cầu OTP",
      "Cáo buộc rửa tiền", "Phạt nguội giả", "Cập nhật VNeID giả", "Giấy triệu tập và đe dọa bắt giữ",
      "Trúng xe máy và tiền mặt", "Quà miễn phí từ sàn thương mại", "Vòng quay may mắn", "Voucher du lịch trúng thưởng",
      "Tem bưu phẩm bị hỏng", "Phí hải quan giả", "Đơn COD giả", "Phí giao lại bưu kiện"
    ],
    en: [
      "Unknown-device login", "Credit-limit upgrade", "Biometric account lock", "Fake refund and OTP verification",
      "Money-laundering accusation", "Fake traffic fine", "Fake VNeID identity update", "Court summons and arrest threat",
      "Motorbike and cash prize", "Free marketplace gift", "Lucky spin", "Travel-voucher prize",
      "Damaged parcel label", "Fake customs fee", "Fake COD order", "Redelivery fee"
    ],
    "zh-CN": [
      "陌生设备登录", "信用额度升级", "生物识别未完成导致账户锁定", "虚假退款与 OTP 验证",
      "洗钱指控", "虚假交通罚款", "虚假 VNeID 身份更新", "法院传票与逮捕威胁",
      "摩托车和现金大奖", "电商平台免费礼物", "幸运大转盘", "旅游代金券中奖",
      "包裹标签损坏", "虚假海关费用", "虚假货到付款订单", "再次派送费用"
    ],
    "zh-TW": [
      "陌生裝置登入", "信用額度升級", "生物辨識未完成導致帳戶鎖定", "虛假退款與 OTP 驗證",
      "洗錢指控", "虛假交通罰款", "虛假 VNeID 身分更新", "法院傳票與逮捕威脅",
      "機車和現金大獎", "電商平台免費禮物", "幸運大轉盤", "旅遊代金券中獎",
      "包裹標籤損壞", "虛假海關費用", "虛假貨到付款訂單", "再次配送費用"
    ],
    es: [
      "Inicio de sesión desde un dispositivo desconocido", "Aumento del límite de crédito", "Bloqueo por verificación biométrica", "Reembolso falso y verificación OTP",
      "Acusación de blanqueo de dinero", "Multa de tráfico falsa", "Actualización falsa de identidad VNeID", "Citación judicial y amenaza de arresto",
      "Premio de moto y dinero", "Regalo gratis de una plataforma", "Ruleta de la suerte", "Premio de vale de viaje",
      "Etiqueta de paquete dañada", "Tasa aduanera falsa", "Pedido COD falso", "Tarifa de nueva entrega"
    ],
    fr: [
      "Connexion depuis un appareil inconnu", "Augmentation de plafond de crédit", "Blocage pour biométrie incomplète", "Faux remboursement et vérification OTP",
      "Accusation de blanchiment d’argent", "Fausse amende routière", "Fausse mise à jour d’identité VNeID", "Convocation judiciaire et menace d’arrestation",
      "Gain d’une moto et d’argent", "Cadeau gratuit d’une plateforme", "Roue de la chance", "Gain d’un bon de voyage",
      "Étiquette de colis endommagée", "Faux frais de douane", "Fausse commande contre remboursement", "Frais de nouvelle livraison"
    ],
    de: [
      "Anmeldung von unbekanntem Gerät", "Erhöhung des Kreditlimits", "Kontosperre wegen fehlender Biometrie", "Gefälschte Rückerstattung und OTP-Prüfung",
      "Geldwäschevorwurf", "Gefälschter Verkehrsbußgeldbescheid", "Gefälschtes VNeID-Identitätsupdate", "Gerichtsvorladung und Festnahmedrohung",
      "Motorrad- und Geldgewinn", "Kostenloses Marktplatz-Geschenk", "Glücksrad", "Reisegutschein-Gewinn",
      "Beschädigtes Paketetikett", "Gefälschte Zollgebühr", "Gefälschte Nachnahmebestellung", "Gebühr für erneute Zustellung"
    ],
    ja: [
      "不明な端末からのログイン", "クレジット利用限度額の引き上げ", "生体認証未完了による口座ロック", "偽の返金と OTP 確認",
      "マネーロンダリングの容疑", "偽の交通違反罰金", "偽の VNeID 本人情報更新", "裁判所の召喚状と逮捕の脅し",
      "バイクと現金の当選", "通販サイトの無料ギフト", "ラッキールーレット", "旅行券の当選",
      "荷物ラベルの破損", "偽の関税請求", "偽の代引き注文", "再配達料金"
    ],
    ko: [
      "알 수 없는 기기 로그인", "신용 한도 상향", "생체 인증 미완료 계정 잠금", "가짜 환불 및 OTP 인증",
      "자금세탁 혐의", "가짜 교통 범칙금", "가짜 VNeID 신원 업데이트", "법원 소환장과 체포 위협",
      "오토바이와 현금 당첨", "쇼핑 플랫폼 무료 선물", "행운의 룰렛", "여행 바우처 당첨",
      "택배 라벨 손상", "가짜 세관 수수료", "가짜 착불 주문", "재배송 수수료"
    ],
    th: [
      "เข้าสู่ระบบจากอุปกรณ์ที่ไม่รู้จัก", "เพิ่มวงเงินเครดิต", "ล็อกบัญชีเพราะยืนยันไบโอเมตริกไม่ครบ", "คืนเงินปลอมและขอ OTP",
      "กล่าวหาว่าฟอกเงิน", "ค่าปรับจราจรปลอม", "อัปเดตตัวตน VNeID ปลอม", "หมายศาลและขู่จับกุม",
      "ถูกรางวัลรถจักรยานยนต์และเงินสด", "ของขวัญฟรีจากแพลตฟอร์ม", "วงล้อเสี่ยงโชค", "รางวัลบัตรกำนัลท่องเที่ยว",
      "ฉลากพัสดุเสียหาย", "ค่าศุลกากรปลอม", "คำสั่งซื้อ COD ปลอม", "ค่าจัดส่งซ้ำ"
    ],
    id: [
      "Login dari perangkat tidak dikenal", "Peningkatan limit kredit", "Akun dikunci karena biometrik belum lengkap", "Refund palsu dan verifikasi OTP",
      "Tuduhan pencucian uang", "Denda lalu lintas palsu", "Pembaruan identitas VNeID palsu", "Panggilan pengadilan dan ancaman penangkapan",
      "Hadiah motor dan uang tunai", "Hadiah gratis dari marketplace", "Roda keberuntungan", "Hadiah voucher perjalanan",
      "Label paket rusak", "Biaya bea cukai palsu", "Pesanan COD palsu", "Biaya pengiriman ulang"
    ],
    ms: [
      "Log masuk daripada peranti tidak dikenali", "Peningkatan had kredit", "Akaun dikunci kerana biometrik belum lengkap", "Bayaran balik palsu dan pengesahan OTP",
      "Tuduhan pengubahan wang haram", "Saman trafik palsu", "Kemas kini identiti VNeID palsu", "Saman mahkamah dan ancaman tangkapan",
      "Hadiah motosikal dan wang tunai", "Hadiah percuma daripada platform", "Roda bertuah", "Hadiah baucar perjalanan",
      "Label bungkusan rosak", "Caj kastam palsu", "Pesanan COD palsu", "Caj penghantaran semula"
    ],
    fil: [
      "Pag-login mula sa hindi kilalang device", "Pagtaas ng credit limit", "Pag-lock ng account dahil kulang ang biometrics", "Pekeng refund at OTP verification",
      "Paratang ng money laundering", "Pekeng multa sa trapiko", "Pekeng VNeID identity update", "Summons ng korte at banta ng pag-aresto",
      "Premyong motorsiklo at cash", "Libreng regalo mula sa marketplace", "Lucky spin", "Premyong travel voucher",
      "Sirang label ng parcel", "Pekeng customs fee", "Pekeng COD order", "Bayad sa muling paghahatid"
    ],
    hi: [
      "अज्ञात डिवाइस से लॉगिन", "क्रेडिट सीमा बढ़ाने का दावा", "बायोमेट्रिक अधूरा होने पर खाता लॉक", "नकली रिफंड और OTP सत्यापन",
      "मनी लॉन्ड्रिंग का आरोप", "नकली ट्रैफिक जुर्माना", "नकली VNeID पहचान अपडेट", "अदालती समन और गिरफ्तारी की धमकी",
      "मोटरसाइकिल और नकद इनाम", "मार्केटप्लेस का मुफ्त उपहार", "लकी स्पिन", "यात्रा वाउचर इनाम",
      "पार्सल लेबल खराब", "नकली सीमा शुल्क", "नकली COD ऑर्डर", "दोबारा डिलीवरी शुल्क"
    ],
    ar: [
      "تسجيل دخول من جهاز غير معروف", "رفع الحد الائتماني", "قفل الحساب بسبب عدم اكتمال البصمة الحيوية", "استرداد مزيف والتحقق عبر OTP",
      "اتهام بغسل الأموال", "غرامة مرورية مزيفة", "تحديث هوية VNeID مزيف", "استدعاء قضائي وتهديد بالاعتقال",
      "جائزة دراجة نارية ونقد", "هدية مجانية من منصة تسوق", "عجلة الحظ", "جائزة قسيمة سفر",
      "تلف ملصق الطرد", "رسوم جمركية مزيفة", "طلب دفع عند الاستلام مزيف", "رسوم إعادة التسليم"
    ],
    ru: [
      "Вход с неизвестного устройства", "Повышение кредитного лимита", "Блокировка из-за незавершённой биометрии", "Ложный возврат и проверка OTP",
      "Обвинение в отмывании денег", "Поддельный дорожный штраф", "Поддельное обновление VNeID", "Судебная повестка и угроза ареста",
      "Выигрыш мотоцикла и денег", "Бесплатный подарок от маркетплейса", "Колесо удачи", "Выигрыш туристического ваучера",
      "Повреждённая этикетка посылки", "Поддельный таможенный сбор", "Поддельный заказ с оплатой при получении", "Плата за повторную доставку"
    ],
    pt: [
      "Login de dispositivo desconhecido", "Aumento do limite de crédito", "Bloqueio por biometria incompleta", "Reembolso falso e verificação OTP",
      "Acusação de lavagem de dinheiro", "Multa de trânsito falsa", "Atualização falsa de identidade VNeID", "Intimação judicial e ameaça de prisão",
      "Prémio de mota e dinheiro", "Presente grátis de marketplace", "Roda da sorte", "Prémio de voucher de viagem",
      "Etiqueta de encomenda danificada", "Taxa alfandegária falsa", "Pedido COD falso", "Taxa de nova entrega"
    ],
    it: [
      "Accesso da dispositivo sconosciuto", "Aumento del limite di credito", "Blocco per biometria incompleta", "Rimborso falso e verifica OTP",
      "Accusa di riciclaggio di denaro", "Multa stradale falsa", "Falso aggiornamento identità VNeID", "Citazione in tribunale e minaccia di arresto",
      "Premio moto e denaro", "Regalo gratuito da marketplace", "Ruota della fortuna", "Premio voucher di viaggio",
      "Etichetta del pacco danneggiata", "Falsa tassa doganale", "Falso ordine in contrassegno", "Costo di riconsegna"
    ],
    nl: [
      "Inloggen vanaf onbekend apparaat", "Verhoging van kredietlimiet", "Accountblokkering door onvolledige biometrie", "Valse terugbetaling en OTP-verificatie",
      "Beschuldiging van witwassen", "Valse verkeersboete", "Valse VNeID-identiteitsupdate", "Dagvaarding en dreiging met arrestatie",
      "Motor- en geldprijs", "Gratis cadeau van marktplaats", "Geluksrad", "Reisvoucherprijs",
      "Beschadigd pakketlabel", "Valse douanekosten", "Valse remboursbestelling", "Kosten voor herbezorging"
    ],
    pl: [
      "Logowanie z nieznanego urządzenia", "Podwyższenie limitu kredytowego", "Blokada konta z powodu niepełnej biometrii", "Fałszywy zwrot i weryfikacja OTP",
      "Oskarżenie o pranie pieniędzy", "Fałszywy mandat drogowy", "Fałszywa aktualizacja tożsamości VNeID", "Wezwanie do sądu i groźba aresztowania",
      "Nagroda: motocykl i gotówka", "Darmowy prezent z marketplace", "Koło fortuny", "Nagroda w postaci vouchera podróżnego",
      "Uszkodzona etykieta paczki", "Fałszywa opłata celna", "Fałszywe zamówienie za pobraniem", "Opłata za ponowną dostawę"
    ],
    tr: [
      "Bilinmeyen cihazdan giriş", "Kredi limiti yükseltme", "Eksik biyometri nedeniyle hesap kilidi", "Sahte iade ve OTP doğrulaması",
      "Kara para aklama suçlaması", "Sahte trafik cezası", "Sahte VNeID kimlik güncellemesi", "Mahkeme celbi ve tutuklama tehdidi",
      "Motosiklet ve nakit ödülü", "Pazaryerinden ücretsiz hediye", "Şans çarkı", "Seyahat kuponu ödülü",
      "Hasarlı kargo etiketi", "Sahte gümrük ücreti", "Sahte kapıda ödeme siparişi", "Yeniden teslimat ücreti"
    ],
    sv: [
      "Inloggning från okänd enhet", "Höjning av kreditgräns", "Kontolås på grund av ofullständig biometri", "Falsk återbetalning och OTP-verifiering",
      "Anklagelse om penningtvätt", "Falsk trafikbot", "Falsk VNeID-identitetsuppdatering", "Domstolskallelse och hot om gripande",
      "Motorcykel- och kontantpris", "Gratis gåva från marknadsplats", "Lyckohjul", "Resevoucher som pris",
      "Skadad paketetikett", "Falsk tullavgift", "Falsk postförskottsbeställning", "Avgift för ny leverans"
    ],
    no: [
      "Innlogging fra ukjent enhet", "Økning av kredittgrense", "Kontolås på grunn av ufullstendig biometri", "Falsk refusjon og OTP-verifisering",
      "Anklage om hvitvasking", "Falsk trafikkbot", "Falsk VNeID-identitetsoppdatering", "Rettsinnkalling og trussel om arrestasjon",
      "Motorsykkel- og pengepremie", "Gratis gave fra markedsplass", "Lykkehjul", "Reisevoucher som premie",
      "Skadet pakkeetikett", "Falsk tollavgift", "Falsk postoppkravsordre", "Gebyr for ny levering"
    ],
    da: [
      "Login fra ukendt enhed", "Forhøjelse af kreditgrænse", "Kontolås på grund af ufuldstændig biometri", "Falsk tilbagebetaling og OTP-verifikation",
      "Anklage om hvidvask", "Falsk trafikbøde", "Falsk VNeID-identitetsopdatering", "Retsindkaldelse og trussel om anholdelse",
      "Motorcykel- og pengepræmie", "Gratis gave fra markedsplads", "Lykkehjulet", "Rejsegavekort som præmie",
      "Beskadiget pakkelabel", "Falsk toldafgift", "Falsk efterkravsordre", "Gebyr for genlevering"
    ],
    fi: [
      "Kirjautuminen tuntemattomalta laitteelta", "Luottorajan korotus", "Tilin lukitus puutteellisen biometriikan vuoksi", "Väärä hyvitys ja OTP-vahvistus",
      "Rahanpesusyytös", "Väärä liikennesakko", "Väärä VNeID-henkilöllisyyspäivitys", "Oikeushaaste ja pidätysuhka",
      "Moottoripyörä- ja rahapalkinto", "Ilmainen lahja verkkokauppapaikalta", "Onnenpyörä", "Matkalahjakorttipalkinto",
      "Vaurioitunut pakettilappu", "Väärä tullimaksu", "Väärä postiennakko-tilaus", "Uudelleentoimitusmaksu"
    ],
    cs: [
      "Přihlášení z neznámého zařízení", "Zvýšení úvěrového limitu", "Blokace účtu kvůli neúplné biometrii", "Falešná refundace a ověření OTP",
      "Obvinění z praní peněz", "Falešná dopravní pokuta", "Falešná aktualizace identity VNeID", "Soudní předvolání a hrozba zatčením",
      "Výhra motocyklu a peněz", "Dárek zdarma z tržiště", "Kolo štěstí", "Výhra cestovního poukazu",
      "Poškozený štítek zásilky", "Falešný celní poplatek", "Falešná dobírková objednávka", "Poplatek za opětovné doručení"
    ],
    uk: [
      "Вхід з невідомого пристрою", "Підвищення кредитного ліміту", "Блокування через незавершену біометрію", "Фальшиве повернення коштів і перевірка OTP",
      "Звинувачення у відмиванні грошей", "Фальшивий дорожній штраф", "Фальшиве оновлення VNeID", "Судова повістка й погроза арештом",
      "Приз: мотоцикл і гроші", "Безкоштовний подарунок від маркетплейсу", "Колесо удачі", "Приз у вигляді туристичного ваучера",
      "Пошкоджена етикетка посилки", "Фальшивий митний збір", "Фальшиве замовлення з післяплатою", "Плата за повторну доставку"
    ],
    ro: [
      "Autentificare de pe dispozitiv necunoscut", "Majorarea limitei de credit", "Blocarea contului din cauza biometriei incomplete", "Rambursare falsă și verificare OTP",
      "Acuzație de spălare de bani", "Amendă rutieră falsă", "Actualizare falsă de identitate VNeID", "Citație judiciară și amenințare cu arestarea",
      "Premiu: motocicletă și bani", "Cadou gratuit de pe marketplace", "Roata norocului", "Premiu voucher de călătorie",
      "Etichetă de colet deteriorată", "Taxă vamală falsă", "Comandă COD falsă", "Taxă de relivrare"
    ],
    el: [
      "Σύνδεση από άγνωστη συσκευή", "Αύξηση πιστωτικού ορίου", "Κλείδωμα λογαριασμού λόγω ελλιπούς βιομετρικής επαλήθευσης", "Ψεύτικη επιστροφή χρημάτων και επαλήθευση OTP",
      "Κατηγορία για ξέπλυμα χρήματος", "Ψεύτικο πρόστιμο τροχαίας", "Ψεύτικη ενημέρωση ταυτότητας VNeID", "Δικαστική κλήση και απειλή σύλληψης",
      "Έπαθλο μοτοσικλέτας και μετρητών", "Δωρεάν δώρο από ηλεκτρονική αγορά", "Τροχός της τύχης", "Έπαθλο ταξιδιωτικού κουπονιού",
      "Κατεστραμμένη ετικέτα δέματος", "Ψεύτικη τελωνειακή χρέωση", "Ψεύτικη παραγγελία αντικαταβολής", "Χρέωση επαναπαράδοσης"
    ],
    he: [
      "כניסה ממכשיר לא מוכר", "הגדלת מסגרת אשראי", "נעילת חשבון בגלל אימות ביומטרי חסר", "החזר כספי מזויף ואימות OTP",
      "האשמה בהלבנת הון", "קנס תעבורה מזויף", "עדכון זהות VNeID מזויף", "זימון לבית משפט ואיום במעצר",
      "פרס אופנוע וכסף", "מתנה חינם מזירת מסחר", "גלגל המזל", "פרס שובר נסיעה",
      "תווית חבילה פגומה", "עמלת מכס מזויפת", "הזמנת תשלום במשלוח מזויפת", "דמי משלוח מחדש"
    ]
  };


  const leadPacks = {
    vi: { bank: "Hãy hoàn tất xác minh tài khoản ngay.", police: "Yêu cầu hợp tác ngay với hồ sơ này.", gift: "Hãy làm theo hướng dẫn để nhận thưởng ngay.", delivery: "Hãy cập nhật thông tin hoặc thanh toán để hoàn tất giao hàng." },
    en: { bank: "Complete the account verification immediately.", police: "You must cooperate with this case immediately.", gift: "Follow the instructions to claim the reward now.", delivery: "Update the details or pay now to complete delivery." },
    "zh-CN": { bank: "请立即完成账户验证。", police: "请立即配合处理此案件。", gift: "请按指示立即领取奖励。", delivery: "请更新资料或付款以完成配送。" },
    "zh-TW": { bank: "請立即完成帳戶驗證。", police: "請立即配合處理此案件。", gift: "請依照指示立即領取獎勵。", delivery: "請更新資料或付款以完成配送。" },
    es: { bank: "Complete inmediatamente la verificación de la cuenta.", police: "Debe colaborar inmediatamente con este caso.", gift: "Siga las instrucciones para reclamar el premio ahora.", delivery: "Actualice los datos o pague ahora para completar la entrega." },
    fr: { bank: "Effectuez immédiatement la vérification du compte.", police: "Vous devez coopérer immédiatement à ce dossier.", gift: "Suivez les instructions pour réclamer le gain maintenant.", delivery: "Mettez à jour les informations ou payez maintenant pour terminer la livraison." },
    de: { bank: "Schließen Sie die Kontobestätigung sofort ab.", police: "Sie müssen bei diesem Fall sofort kooperieren.", gift: "Folgen Sie den Anweisungen, um den Gewinn jetzt zu erhalten.", delivery: "Aktualisieren Sie die Angaben oder zahlen Sie jetzt, um die Zustellung abzuschließen." },
    ja: { bank: "今すぐ口座確認を完了してください。", police: "この案件に直ちに協力してください。", gift: "案内に従って今すぐ賞品を受け取ってください。", delivery: "情報を更新するか支払いを行い、配送を完了してください。" },
    ko: { bank: "지금 즉시 계정 인증을 완료하세요.", police: "이 사건에 즉시 협조해야 합니다.", gift: "안내에 따라 지금 보상을 수령하세요.", delivery: "정보를 수정하거나 결제하여 배송을 완료하세요." },
    th: { bank: "กรุณายืนยันบัญชีให้เสร็จทันที", police: "คุณต้องให้ความร่วมมือกับคดีนี้ทันที", gift: "ทำตามคำแนะนำเพื่อรับรางวัลทันที", delivery: "อัปเดตข้อมูลหรือชำระเงินเพื่อให้การจัดส่งเสร็จสมบูรณ์" },
    id: { bank: "Selesaikan verifikasi akun sekarang juga.", police: "Anda harus segera bekerja sama dalam kasus ini.", gift: "Ikuti petunjuk untuk mengambil hadiah sekarang.", delivery: "Perbarui data atau bayar sekarang untuk menyelesaikan pengiriman." },
    ms: { bank: "Lengkapkan pengesahan akaun dengan segera.", police: "Anda mesti bekerjasama dengan kes ini dengan segera.", gift: "Ikut arahan untuk menuntut hadiah sekarang.", delivery: "Kemas kini maklumat atau bayar sekarang untuk melengkapkan penghantaran." },
    fil: { bank: "Kumpletuhin agad ang pag-verify ng account.", police: "Kailangan mong makipagtulungan agad sa kasong ito.", gift: "Sundin ang tagubilin upang makuha agad ang premyo.", delivery: "I-update ang detalye o magbayad upang makumpleto ang delivery." },
    hi: { bank: "खाते का सत्यापन तुरंत पूरा करें।", police: "इस मामले में तुरंत सहयोग करना आवश्यक है।", gift: "इनाम लेने के लिए निर्देशों का तुरंत पालन करें।", delivery: "डिलीवरी पूरी करने के लिए जानकारी अपडेट करें या अभी भुगतान करें।" },
    ar: { bank: "أكمل التحقق من الحساب فورًا.", police: "يجب أن تتعاون فورًا في هذه القضية.", gift: "اتبع التعليمات للمطالبة بالجائزة الآن.", delivery: "حدّث البيانات أو ادفع الآن لإكمال التسليم." },
    ru: { bank: "Немедленно завершите проверку счёта.", police: "Вы должны немедленно сотрудничать по этому делу.", gift: "Следуйте инструкциям, чтобы получить приз сейчас.", delivery: "Обновите данные или оплатите сейчас, чтобы завершить доставку." },
    pt: { bank: "Conclua imediatamente a verificação da conta.", police: "Deve colaborar imediatamente com este caso.", gift: "Siga as instruções para receber o prémio agora.", delivery: "Atualize os dados ou pague agora para concluir a entrega." },
    it: { bank: "Completa immediatamente la verifica del conto.", police: "Devi collaborare immediatamente con questo caso.", gift: "Segui le istruzioni per riscuotere subito il premio.", delivery: "Aggiorna i dati o paga ora per completare la consegna." },
    nl: { bank: "Voltooi de accountverificatie onmiddellijk.", police: "U moet onmiddellijk aan deze zaak meewerken.", gift: "Volg de instructies om de prijs nu te claimen.", delivery: "Werk de gegevens bij of betaal nu om de bezorging af te ronden." },
    pl: { bank: "Natychmiast dokończ weryfikację konta.", police: "Musisz natychmiast współpracować w tej sprawie.", gift: "Postępuj zgodnie z instrukcją, aby odebrać nagrodę teraz.", delivery: "Zaktualizuj dane lub zapłać teraz, aby dokończyć dostawę." },
    tr: { bank: "Hesap doğrulamasını hemen tamamlayın.", police: "Bu dosyayla ilgili hemen iş birliği yapmalısınız.", gift: "Ödülü şimdi almak için talimatları izleyin.", delivery: "Teslimatı tamamlamak için bilgileri güncelleyin veya hemen ödeme yapın." },
    sv: { bank: "Slutför kontoverifieringen omedelbart.", police: "Du måste samarbeta omedelbart i detta ärende.", gift: "Följ instruktionerna för att hämta priset nu.", delivery: "Uppdatera uppgifterna eller betala nu för att slutföra leveransen." },
    no: { bank: "Fullfør kontoverifiseringen umiddelbart.", police: "Du må samarbeide om denne saken umiddelbart.", gift: "Følg instruksjonene for å hente premien nå.", delivery: "Oppdater opplysningene eller betal nå for å fullføre leveringen." },
    da: { bank: "Gennemfør kontobekræftelsen med det samme.", police: "Du skal samarbejde om denne sag med det samme.", gift: "Følg instruktionerne for at få præmien nu.", delivery: "Opdater oplysningerne eller betal nu for at gennemføre leveringen." },
    fi: { bank: "Viimeistele tilin vahvistus heti.", police: "Sinun on tehtävä yhteistyötä tässä asiassa heti.", gift: "Noudata ohjeita saadaksesi palkinnon nyt.", delivery: "Päivitä tiedot tai maksa nyt, jotta toimitus voidaan viimeistellä." },
    cs: { bank: "Okamžitě dokončete ověření účtu.", police: "V tomto případu musíte okamžitě spolupracovat.", gift: "Postupujte podle pokynů a vyzvedněte si výhru nyní.", delivery: "Aktualizujte údaje nebo zaplaťte nyní, aby bylo doručení dokončeno." },
    uk: { bank: "Негайно завершіть перевірку рахунку.", police: "Ви повинні негайно співпрацювати у цій справі.", gift: "Дотримуйтесь інструкцій, щоб отримати приз зараз.", delivery: "Оновіть дані або сплатіть зараз, щоб завершити доставку." },
    ro: { bank: "Finalizați imediat verificarea contului.", police: "Trebuie să cooperați imediat în acest caz.", gift: "Urmați instrucțiunile pentru a revendica premiul acum.", delivery: "Actualizați datele sau plătiți acum pentru a finaliza livrarea." },
    el: { bank: "Ολοκληρώστε αμέσως την επαλήθευση του λογαριασμού.", police: "Πρέπει να συνεργαστείτε αμέσως για αυτή την υπόθεση.", gift: "Ακολουθήστε τις οδηγίες για να λάβετε το έπαθλο τώρα.", delivery: "Ενημερώστε τα στοιχεία ή πληρώστε τώρα για να ολοκληρωθεί η παράδοση." },
    he: { bank: "השלימו מיד את אימות החשבון.", police: "עליכם לשתף פעולה מיד בתיק הזה.", gift: "פעלו לפי ההוראות כדי לקבל את הפרס עכשיו.", delivery: "עדכנו את הפרטים או שלמו עכשיו כדי להשלים את המסירה." }
  };

  const meta = [
    { id:"b1", category:"bank", detail:"KYC · OTP", url:"https://vietcornbank-login.cc" },
    { id:"b2", category:"bank", detail:"100,000,000 VND · KYC", url:"https://bidv-khuyenmai.top" },
    { id:"b3", category:"bank", detail:"", url:"https://agribank-xacthuc.info" },
    { id:"b4", category:"bank", detail:"+2,400,000 VND · OTP 583921 · PIN", url:"" },
    { id:"p1", category:"police", detail:"200,000,000 VND · OTP · 2h", url:"" },
    { id:"p2", category:"police", detail:"1,200,000 VND", url:"https://csgt-phatnguoi.gov-vn.club" },
    { id:"p3", category:"police", detail:"VNeID · APK", url:"https://vneid-phongso.net" },
    { id:"p4", category:"police", detail:"2h", url:"https://toaan-trieutap.info" },
    { id:"g1", category:"gift", detail:"SH 150i · 100,000,000 VND · 2,000,000 VND", url:"" },
    { id:"g2", category:"gift", detail:"Chanel · Zalo · 200,000 VND", url:"" },
    { id:"g3", category:"gift", detail:"50,000,000 VND · ATM · PIN", url:"https://thegioididong-vongquay.top" },
    { id:"g4", category:"gift", detail:"20,000,000 VND · 890,000 VND", url:"https://travel-voucher.win" },
    { id:"d1", category:"delivery", detail:"", url:"https://vnpost-buupham.info" },
    { id:"d2", category:"delivery", detail:"3,500,000 VND", url:"" },
    { id:"d3", category:"delivery", detail:"COD · 450,000 VND · 019238xxx", url:"" },
    { id:"d4", category:"delivery", detail:"25,000 VND", url:"https://giaolai-buukien.info" }
  ];

  function build(languageCode, ui) {
    const titles = titlePacks[languageCode] || titlePacks.en;
    const labelFor = {
      bank: ui?.bank || "Bank",
      police: ui?.police || "Police",
      gift: ui?.prize || "Prize",
      delivery: ui?.delivery || "Delivery"
    };

    return meta.map((entry, index) => {
      const title = titles[index] || titlePacks.en[index];
      const details = [entry.detail, entry.url].filter(Boolean).join(" · ");
      const categoryLabel = labelFor[entry.category];
      const lead = (leadPacks[languageCode] || leadPacks.en)[entry.category] || "";
      return {
        id: entry.id,
        category: entry.category,
        title,
        desc: `${title} · ${ui?.suspicious || "⚠️"}`,
        msg: `${categoryLabel}: ${title}. ${lead}${details ? ` ${details}` : ""}`.trim()
      };
    });
  }

  window.SC_LIBRARY = { ids, titlePacks, build };
})();

// ===== Main application code =====
// ==========================================
// 1. GLOBAL CONFIGURATION & DATA DICTIONARIES
// ==========================================

const SCAMCHECK_VERSION = "v21";

// SAME-ORIGIN GEMINI MODE
// Run `npm start`, then open http://127.0.0.1:3000.
// server.js serves this frontend and privately reads .env. No key exists in browser JS.
const CONFIGURED_BACKEND_URL = String(window.SC_CONFIG?.API_BASE_URL || "")
  .trim()
  .replace(/\/+$/, "");

const BACKEND_API_URL =
  CONFIGURED_BACKEND_URL || window.location.origin.replace(/\/$/, "");

async function backendFetch(path, options = {}) {
  if (window.location.protocol === "file:") {
    throw new Error("SCAMCHECK_SERVER_NOT_RUNNING: Run npm start and open http://127.0.0.1:3000 instead of opening index.html directly.");
  }

  return fetch(`${BACKEND_API_URL}${path}`, options);
}

console.info(
  `[ScamCheck ${SCAMCHECK_VERSION}] Backend mode: ${
    CONFIGURED_BACKEND_URL ? "configured" : "same-origin"
  } -> ${BACKEND_API_URL}`
);
console.info(`[ScamCheck ${SCAMCHECK_VERSION}] Flow: browser -> Render/Node backend -> Gemini`);

const UI_TEXT_VI = {
  languageLabel: "Ngôn ngữ", tagline: "🕵️‍♂️ Thám tử kỹ thuật & 🧠 Cô tâm lý đồng hành bảo vệ gia đình",
  themeDark: "🌙 Tối", themeLight: "☀️ Sáng",
  analyzeTab: "🔍 Phân Tích", libraryTab: "📚 Thư Viện Lừa Đảo", samplesLabel: "Thử nhanh bằng tin mẫu:",
  sampleBank: "🏦 Giả mạo Ngân hàng", samplePolice: "👮 Giả mạo Công an", samplePrize: "🎁 Trúng thưởng giả",
  messagePlaceholder: "Dán hoặc gõ nội dung tin nhắn nghi ngờ vào đây...", analyzeButton: "🔍 Kiểm tra ngay",
  libraryTitle: "📚 Thư Viện Lừa Đảo", libraryDescription: "Bộ dữ liệu gồm nhiều nhóm lừa đảo. Tìm kiếm theo tên, mô tả, nội dung tin nhắn hoặc nhóm phân loại.",
  searchPlaceholder: "Tìm: ngân hàng, công an, giao hàng, OTP...", clear: "Xóa", all: "Tất cả", bank: "🏦 Ngân hàng",
  police: "👮 Công an", prize: "🎁 Trúng thưởng", delivery: "📦 Giao hàng", historyTitle: "⏳ Lịch sử kiểm tra",
  clearHistory: "🗑️ Xóa", noHistory: "Chưa có dữ liệu kiểm tra.",
  legalNotice: "Lưu ý pháp lý: ScamCheck là công cụ giáo dục do nhóm học viên phát triển. Đánh giá của ứng dụng không thay thế cảnh báo chính thức từ ngân hàng hoặc cơ quan chức năng.",
  inputRequired: "⚠️ Vui lòng nhập hoặc dán nội dung tin nhắn cần kiểm tra.", tooLong: "⚠️ Tin nhắn quá dài, vui lòng rút gọn dưới 5000 ký tự.",
  resolving: "🔍 Đang mở và giải mã đường dẫn rút gọn...", analyzing: "Đang phân tích bằng Gemini...",
  fallbackNotice: "Gemini chưa trả kết quả hợp lệ nên hệ thống tạm dùng bộ phân tích dự phòng.", riskLevel: "Mức độ rủi ro",
  safe: "An toàn", suspicious: "Nghi ngờ", dangerous: "Nguy hiểm", originalMessage: "Nội dung tin nhắn gốc:",
  detective: "Thám tử", detectedSigns: "🔎 Dấu hiệu kỹ thuật phát hiện:", noSigns: "Không phát hiện dấu hiệu kỹ thuật nguy hiểm rõ ràng.",
  recommendedActions: "🛠️ Hành động ứng phó khuyên dùng:", psychologist: "Cô Tâm Lý", manipulation: "🎯 Đòn bẫy thao túng tâm lý:",
  rescue: "🚨 Người ứng cứu", rescueIntro: "Nếu đã lỡ tương tác với tin nhắn này, hãy chọn tình huống gần đúng nhất để xem bước xử lý nhanh.",
  none: "✅ Chưa làm gì", clicked: "🔗 Đã bấm vào đường dẫn", transferred: "💸 Đã chuyển khoản", otp: "🔐 Đã cung cấp mã xác thực / OTP",
  immediateSteps: "📌 Việc cần làm ngay", contactNumbers: "☎️ Số nên liên hệ", linkCheck: "🔗 Kiểm tra đường dẫn",
  resolvedLink: "Đã mở được đích đến", unresolvedLink: "Không thể mở đích đến", finalDomain: "Tên miền đích",
  loadingDetective: "🕵️‍♂️ Thám tử đang phân tích và kiểm tra liên kết...", loadingPsychologist: "🧠 Cô tâm lý sẽ xuất hiện nếu tin nhắn có rủi ro.",
  fallbackReason: "Đoạn được trích chứa một lời khẳng định hoặc yêu cầu mà bản thân tin nhắn không đưa ra bằng chứng đáng tin để xác minh. Người gửi đang dùng lời kể làm đòn bẩy thay vì cung cấp căn cứ có thể kiểm chứng.", fallbackAction1: "Không bấm vào đường link lạ.",
  fallbackAction2: "Không cung cấp OTP, mật khẩu hoặc thông tin tài khoản.", fallbackAction3: "Gọi tổng đài chính thức hoặc hỏi người thân trước khi làm theo.",
  fallbackManipulation: "Kẻ lừa đảo cố thu hẹp sự chú ý của nạn nhân vào một cảm xúc mạnh như vui mừng, sợ hãi hoặc cấp bách, để phần thưởng hay hậu quả được nhấn mạnh hơn việc kiểm chứng câu chuyện.", fallbackAdvice: "Mục tiêu có khả năng nhất là khiến nạn nhân thực hiện bước tuân theo đầu tiên như chuyển tiền, bấm liên kết, đăng nhập hoặc đưa mã OTP. Khi bước đầu thành công, kẻ lừa đảo có thể tiếp tục bịa thêm phí, yêu cầu hoặc tìm cách chiếm tài khoản.",
  fallbackLinkReason: "Tin nhắn cố đưa người nhận sang một liên kết, bước đăng nhập, OTP hoặc xác minh do người gửi kiểm soát. Đây là con đường có thể được dùng để lấy thông tin đăng nhập, mã xác thực hoặc quyền truy cập tài khoản, chứ không chỉ đơn thuần cung cấp thông tin.", fallbackPoliceReason: "Người gửi viện dẫn Công an hoặc một cơ quan có thẩm quyền để tạo sợ hãi và sự phục tùng, nhưng một tin nhắn không chứng minh được danh tính chính thức. Kẻ lừa đảo thường dùng nguy cơ điều tra, bắt giữ hoặc xử phạt để buộc nạn nhân làm theo trước khi tự xác minh.", fallbackPrizeReason: "Đây là lời báo trúng thưởng giá trị lớn không được người nhận chủ động tham gia hay yêu cầu. Tin nhắn khẳng định phần thưởng đã thuộc về nạn nhân nhưng không đưa ra hồ sơ quay thưởng hay bằng chứng về đơn vị tổ chức, một kiểu mồi thường dùng để khiến yêu cầu đóng phí sau đó có vẻ hợp lý.", fallbackFeeReason: "Việc nhận phần thưởng hoặc quyền lợi bị gắn với điều kiện phải trả tiền trước. Đây là mô hình lừa đảo phí trả trước: kẻ gửi nhận được một khoản tiền thật ngay lập tức để đổi lấy phần thưởng lớn hơn chưa hề được chứng minh là tồn tại.", fallbackUnexplainedAmountReason: "Tin nhắn đặt một khoản tiền cụ thể ngay cạnh lời hứa trúng thưởng và yêu cầu nhận thưởng gấp nhưng không giải thích minh bạch khoản tiền đó là gì. Trong ngữ cảnh trúng thưởng, một khoản tiền phụ không rõ căn cứ là dấu hiệu mạnh của bước thu phí trước hoặc yêu cầu chuyển tiền tiếp theo.", fallbackUrgencyReason: "Cách diễn đạt tạo áp lực phải hành động nhanh, làm giảm thời gian để người nhận kiểm tra danh tính người gửi, đối chiếu thông tin hoặc nhận ra mâu thuẫn trong câu chuyện.", scammerIntent: "🎭 Ý đồ có khả năng của kẻ lừa đảo:", backupSource: "Dự phòng",
  rescueNone1: "Không bấm thêm bất kỳ đường dẫn nào.", rescueNone2: "Chụp màn hình hoặc lưu tin nhắn làm bằng chứng.", rescueNone3: "Chặn người gửi và báo cho người thân.",
  rescueClicked1: "Đóng ngay trang web và không nhập thêm thông tin.", rescueClicked2: "Đổi mật khẩu trên ứng dụng hoặc trang chính thức nếu đã nhập mật khẩu.", rescueClicked3: "Liên hệ ngân hàng hoặc đơn vị bị mạo danh.",
  rescueTransferred1: "Gọi ngay ngân hàng để khóa hoặc tra soát giao dịch.", rescueTransferred2: "Lưu biên lai, số tài khoản nhận tiền, tin nhắn và đường dẫn.", rescueTransferred3: "Trình báo công an và cung cấp toàn bộ bằng chứng.",
  rescueOtp1: "Gọi ngân hàng để khóa tài khoản, thẻ hoặc ngân hàng số.", rescueOtp2: "Đổi mật khẩu tài khoản liên quan trên kênh chính thức.", rescueOtp3: "Kiểm tra giao dịch và không cung cấp thêm mã OTP.",
  libraryCount: "Hiển thị {shown}/{total} kịch bản.", noLibraryResults: "Chưa tìm thấy kịch bản phù hợp.", sampleSms: "Mẫu SMS", tryNow: "⚡ Thử kiểm tra ngay",
  imageAnalyzerTitle: "Kiểm tra ảnh / mã QR", imageAnalyzerDescription: "Tải ảnh chụp tin nhắn hoặc mã QR để Gemini đọc và đánh giá.",
  chooseImage: "Chọn hoặc thả ảnh vào đây", imageLimit: "PNG, JPG, WEBP hoặc GIF · tối đa 8 MB", imageAnalyzeButton: "✨ Phân tích ảnh", removeImage: "Xóa ảnh",
  imageReady: "Ảnh đã sẵn sàng.", qrFound: "Đã đọc mã QR", imageTooLarge: "Ảnh vượt quá 8 MB.", imageInvalid: "Vui lòng chọn một tệp ảnh hợp lệ.",
  imageAnalyzing: "Gemini đang đọc ảnh và kiểm tra mã QR...", imageAnalysisFailed: "Không thể phân tích ảnh lúc này. Vui lòng thử lại.",
  shareCardTitle: "Thẻ cảnh báo", downloadImage: "Tải ảnh", cardSubtitle: "THẺ CẢNH BÁO TIN NHẮN", cardMainSigns: "Dấu hiệu chính",
  cardCheckedContent: "Tin được kiểm tra", scanToOpen: "Quét mã để mở ScamCheck", cardReady: "Ảnh cảnh báo đã sẵn sàng.", cardDownloadFailed: "Không thể tạo ảnh tải xuống.",
  sourceImage: "Ảnh / mã QR được tải lên"
};

const UI_TEXT_EN = {
  ...UI_TEXT_VI,
  languageLabel: "Language", tagline: "🕵️‍♂️ Technical Detective & 🧠 Psychology Guide protecting your family",
  themeDark: "🌙 Dark", themeLight: "☀️ Light",
  analyzeTab: "🔍 Analyze", libraryTab: "📚 Scam Library", samplesLabel: "Try a sample message:",
  sampleBank: "🏦 Fake bank", samplePolice: "👮 Fake police", samplePrize: "🎁 Fake prize",
  messagePlaceholder: "Paste or type a suspicious message here...", analyzeButton: "🔍 Check now",
  libraryTitle: "📚 Scam Library", libraryDescription: "Browse common scam types and search by title, description, message, or category.",
  searchPlaceholder: "Search: bank, police, delivery, OTP...", clear: "Clear", all: "All", bank: "🏦 Bank",
  police: "👮 Police", prize: "🎁 Prize", delivery: "📦 Delivery", historyTitle: "⏳ Check history",
  clearHistory: "🗑️ Clear", noHistory: "No checks yet.",
  legalNotice: "Legal notice: ScamCheck is an educational tool developed by students. Its assessments do not replace official warnings from banks or authorities.",
  inputRequired: "⚠️ Please enter or paste a message to check.", tooLong: "⚠️ The message is too long. Please keep it under 5,000 characters.",
  resolving: "🔍 Opening and decoding shortened links...", analyzing: "Analyzing with Gemini...",
  fallbackNotice: "Gemini did not return a valid result, so the backup analyzer is being used.", riskLevel: "Risk level",
  safe: "Safe", suspicious: "Suspicious", dangerous: "Dangerous", originalMessage: "Original message:",
  detective: "Detective", detectedSigns: "🔎 Technical warning signs:", noSigns: "No clear technical danger signs were found.",
  recommendedActions: "🛠️ Recommended actions:", psychologist: "Psychology Guide", manipulation: "🎯 Psychological manipulation:",
  rescue: "🚨 Emergency Helper", rescueIntro: "If you already interacted with this message, choose the closest situation for immediate steps.",
  none: "✅ I did nothing", clicked: "🔗 I opened the link", transferred: "💸 I transferred money", otp: "🔐 I shared an OTP/code",
  immediateSteps: "📌 Do this now", contactNumbers: "☎️ Who to contact", linkCheck: "🔗 Link inspection",
  resolvedLink: "Destination opened", unresolvedLink: "Destination could not be opened", finalDomain: "Destination domain",
  loadingDetective: "🕵️‍♂️ The detective is analyzing the message and its links...", loadingPsychologist: "🧠 The psychology guide will appear if the message is risky.",
  fallbackReason: "The quoted wording contains a claim or request that cannot be verified from the message itself. The sender provides no trustworthy proof of identity or legitimacy, so the claim is being used as leverage rather than evidence.", fallbackAction1: "Do not open unfamiliar links.",
  fallbackAction2: "Do not share OTPs, passwords, or account information.", fallbackAction3: "Contact the official organization or ask someone you trust first.",
  fallbackManipulation: "The scammer is trying to narrow the victim’s attention around one strong emotion—excitement, fear, or urgency—so the promised reward or threatened consequence feels more important than checking whether the story is real.", fallbackAdvice: "The likely intention is to obtain the victim’s first act of compliance, such as a payment, link click, login, or OTP. Once that first step succeeds, the scammer can escalate with additional fees, requests, or account-takeover attempts.",
  fallbackLinkReason: "The message tries to move the recipient to a link, login, OTP, or verification step controlled by the sender. That creates a path to steal credentials, verification codes, or account access rather than simply provide information.", fallbackPoliceReason: "The sender invokes police or another authority to create fear and obedience, but a text message cannot prove the sender is an official. Scammers use threats of investigation, arrest, or penalties to make victims comply before independently checking the claim.", fallbackPrizeReason: "This is an unsolicited high-value prize claim. The message presents the reward as already won before giving any verifiable draw record or organizer proof, a common bait used to make a later fee or transfer request feel legitimate.", fallbackFeeReason: "Receiving the promised benefit is made conditional on paying money first. That is the core advance-fee pattern: the sender gets a real payment now in exchange for a much larger reward that has not been independently proven to exist.", fallbackUnexplainedAmountReason: "The message places a specific money amount next to an unsolicited prize claim and an instruction to claim it quickly, without transparently explaining why that amount is involved. In a prize context, an unexplained secondary amount is a strong sign of an advance-fee step or an upcoming transfer demand.", fallbackUrgencyReason: "The wording pressures the recipient to act before independently verifying the claim. Time pressure reduces the chance that the recipient checks the organizer, sender, or contradictions in the story.", scammerIntent: "🎭 Likely scammer intention:", backupSource: "Backup",
  rescueNone1: "Do not open any links in the message.", rescueNone2: "Save a screenshot or the original message as evidence.", rescueNone3: "Block the sender and warn someone you trust.",
  rescueClicked1: "Close the website immediately and enter no more information.", rescueClicked2: "If you entered a password, change it through the official app or website.", rescueClicked3: "Contact the bank or organization being impersonated.",
  rescueTransferred1: "Call your bank immediately to block or trace the transaction.", rescueTransferred2: "Save the receipt, recipient account, messages, and links.", rescueTransferred3: "Report the incident to the police and provide the evidence.",
  rescueOtp1: "Call the bank to lock your account, card, or online banking.", rescueOtp2: "Change related passwords through official channels.", rescueOtp3: "Review transactions and do not share any more OTPs.",
  libraryCount: "Showing {shown}/{total} scenarios.", noLibraryResults: "No matching scam scenario was found.", sampleSms: "SMS example", tryNow: "⚡ Check this example",
  imageAnalyzerTitle: "Analyze image / QR", imageAnalyzerDescription: "Upload a message screenshot or QR code for Gemini to read and assess.",
  chooseImage: "Choose or drop an image here", imageLimit: "PNG, JPG, WEBP, or GIF · up to 8 MB", imageAnalyzeButton: "✨ Analyze image", removeImage: "Remove image",
  imageReady: "Image ready.", qrFound: "QR code decoded", imageTooLarge: "The image is larger than 8 MB.", imageInvalid: "Please choose a valid image file.",
  imageAnalyzing: "Gemini is reading the image and checking its QR code...", imageAnalysisFailed: "The image could not be analyzed right now. Please try again.",
  shareCardTitle: "Warning card", downloadImage: "Download image", cardSubtitle: "MESSAGE WARNING CARD", cardMainSigns: "Main warning sign",
  cardCheckedContent: "Checked content", scanToOpen: "Scan to open ScamCheck", cardReady: "The warning image is ready.", cardDownloadFailed: "The downloadable image could not be created.",
  sourceImage: "Uploaded image / QR code"
};

let currentLanguage = localStorage.getItem("scamcheck_language") || "vi";
const STATIC_UI_TRANSLATIONS = window.SC_UI_TRANSLATIONS || {};
const TRANSLATION_CACHE_VERSION = 10;
let translationLoadId = 0;
let uiText = getBaseUiText(currentLanguage);

function getBaseUiText(languageCode) {
  if (languageCode === "vi") return { ...UI_TEXT_VI };
  if (languageCode === "en") return { ...UI_TEXT_EN };
  return { ...(STATIC_UI_TRANSLATIONS[languageCode] || {}) };
}

function compactLocaleFallback(key) {
  const s = uiText;
  const fallback = {
    languageLabel: s.all,
    libraryDescription: `${s.libraryTitle || "ScamCheck"} · ${s.searchPlaceholder || ""}`,
    legalNotice: `ScamCheck · ${s.linkCheck || s.libraryTitle || ""}`,
    inputRequired: `⚠️ ${s.messagePlaceholder || s.analyzeButton || ""}`,
    tooLong: `⚠️ 5000 · ${s.messagePlaceholder || s.analyzeButton || ""}`,
    resolving: s.linkCheck,
    analyzing: s.analyzeButton,
    fallbackNotice: `Gemini · ${s.suspicious || s.riskLevel || ""}`,
    resolvedLink: `${s.safe || "✓"} · ${s.linkCheck || "QR"}`,
    unresolvedLink: `${s.suspicious || "⚠️"} · ${s.linkCheck || "QR"}`,
    finalDomain: s.linkCheck,
    loadingDetective: `${s.detective || "🕵️"} · ${s.analyzeTab || ""}`,
    loadingPsychologist: `${s.psychologist || "🧠"} · ${s.analyzeTab || ""}`,
    fallbackReason: s.suspicious,
    fallbackAction1: s.linkCheck,
    fallbackAction2: "OTP · PIN",
    fallbackAction3: s.recommendedActions,
    fallbackManipulation: s.manipulation,
    fallbackAdvice: `${s.suspicious || "⚠️"} · ${s.recommendedActions || ""}`,
    fallbackLinkReason: s.linkCheck,
    fallbackPoliceReason: s.police,
    fallbackPrizeReason: s.prize,
    fallbackFeeReason: s.prize || s.suspicious,
    fallbackUnexplainedAmountReason: s.prize || s.suspicious,
    fallbackUrgencyReason: s.suspicious,
    scammerIntent: `🎭 ${s.psychologist || s.suspicious || ""}`,
    backupSource: s.suspicious,
    rescueNone1: s.linkCheck,
    rescueNone2: s.immediateSteps,
    rescueNone3: s.contactNumbers,
    rescueClicked1: s.linkCheck,
    rescueClicked2: "PIN · OTP",
    rescueClicked3: s.contactNumbers,
    rescueTransferred1: s.contactNumbers,
    rescueTransferred2: s.immediateSteps,
    rescueTransferred3: s.police,
    rescueOtp1: s.contactNumbers,
    rescueOtp2: "PIN · OTP",
    rescueOtp3: s.immediateSteps,
    libraryCount: "{shown}/{total}",
    noLibraryResults: `0 · ${s.noHistory || s.libraryTitle || ""}`,
    sampleSms: "SMS",
    tryNow: s.analyzeButton,
    imageAnalyzerTitle: `🖼️ ${s.linkCheck || s.analyzeTab || "QR"}`,
    imageAnalyzerDescription: `${s.analyzeTab || ""} · ${s.linkCheck || "QR"}`,
    chooseImage: `🖼️ ${s.analyzeTab || ""}`,
    imageLimit: "PNG · JPG · WEBP · GIF · 8 MB",
    imageAnalyzeButton: `✨ ${s.analyzeTab || ""}`,
    removeImage: s.clear,
    imageReady: s.safe,
    qrFound: `QR · ${s.linkCheck || ""}`,
    imageTooLarge: "⚠️ 8 MB",
    imageInvalid: `⚠️ PNG · JPG · WEBP · GIF`,
    imageAnalyzing: `${s.analyzeTab || ""} · QR`,
    imageAnalysisFailed: `${s.suspicious || "⚠️"} · ${s.analyzeTab || ""}`,
    shareCardTitle: `🪪 ${s.riskLevel || ""}`,
    downloadImage: "⬇️ PNG",
    cardSubtitle: s.riskLevel,
    cardMainSigns: s.detectedSigns,
    cardCheckedContent: s.originalMessage,
    scanToOpen: `QR · ScamCheck`,
    cardReady: s.safe,
    cardDownloadFailed: s.suspicious,
    sourceImage: `🖼️ QR`
  };
  return fallback[key] || s.suspicious || s.analyzeButton || key;
}

function t(key) {
  if (typeof uiText[key] === "string" && uiText[key].trim()) return uiText[key];
  if (currentLanguage === "vi") return UI_TEXT_VI[key] || key;
  if (currentLanguage === "en") return UI_TEXT_EN[key] || key;
  return compactLocaleFallback(key);
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  // Keep the application layout stable. Arabic and Hebrew glyphs still render
  // right-to-left naturally, but flex/grid positions no longer reverse.
  document.documentElement.dir = "ltr";
  document.title = `ScamCheck · ${t("analyzeTab")}`;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  const themeButton = document.getElementById("theme-toggle");
  if (themeButton) {
    themeButton.textContent = document.body.classList.contains("dark-mode") ? t("themeLight") : t("themeDark");
  }
  renderUserGuide();
}

function changeLanguage(languageCode) {
  const languageSelect = document.getElementById("language-select");
  const supported = languageSelect
    ? Array.from(languageSelect.options).some(option => option.value === languageCode)
    : (languageCode === "vi" || languageCode === "en" || Boolean(STATIC_UI_TRANSLATIONS[languageCode]));

  if (!supported) languageCode = "vi";

  const previousLanguage = currentLanguage;
  currentLanguage = languageCode;
  localStorage.setItem("scamcheck_language", languageCode);
  uiText = getBaseUiText(languageCode);

  // Static interface translations are the source of truth. Language switching
  // must never depend on Gemini, network access, API quota, or Render uptime.
  applyTranslations();
  refreshImageUploadLanguage();
  renderHistory();
  renderLibraryGrid(getFilteredLibraryItems());

  // If the textarea currently contains one of our demo messages, keep the demo
  // synchronized with the selected interface language. User-entered evidence is
  // deliberately preserved verbatim.
  const input = document.getElementById("message");
  if (input?.dataset?.sampleId) {
    input.value = getLocalizedSample(Number(input.dataset.sampleId));
  }

  if (previousLanguage !== languageCode) {
    const resultDiv = document.getElementById("result");
    if (resultDiv) {
      resultDiv.innerHTML = "";
      resultDiv.classList.add("hidden");
    }
    latestAnalyzedMessage = "";
    latestAnalysisData = null;
    latestWarningCardDataUrl = "";
    window.currentScamRescue = {};
  }
}

const SAMPLE_LIBRARY_IDS = { 1: "b1", 2: "p1", 3: "g1" };

function getLocalizedLibraryItems() {
  if (window.SC_LIBRARY?.build) {
    return window.SC_LIBRARY.build(currentLanguage, uiText);
  }
  // Defensive fallback if the bundled library failed to initialize.
  return [];
}

function getLocalizedSample(id) {
  const libraryId = SAMPLE_LIBRARY_IDS[id];
  return getLocalizedLibraryItems().find(item => item.id === libraryId)?.msg || "";
}

function getFilteredLibraryItems() {
  const input = document.getElementById("library-search");
  const searchKeyword = input ? input.value.toLocaleLowerCase(currentLanguage).trim() : "";
  const localized = getLocalizedLibraryItems();
  return localized.filter(item => {
    const matchCategory = currentCategory === "all" || item.category === currentCategory;
    const searchable = `${item.title} ${item.desc} ${item.msg}`.toLocaleLowerCase(currentLanguage);
    return matchCategory && (!searchKeyword || searchable.includes(searchKeyword));
  });
}

let currentCategory = "all";
const VERIFIED_HOTLINES = [
  {
    name: "Công an",
    number: "113",
    note: "Gọi khi đã chuyển tiền, bị đe dọa, bị tống tiền hoặc có nguy cơ mất tài sản.",
    tags: ["urgent", "police", "transferred", "otp"]
  },
  {
    name: "Cứu hỏa / cứu nạn",
    number: "114",
    note: "Gọi khi có cháy nổ hoặc tình huống nguy hiểm tính mạng.",
    tags: ["emergency"]
  },
  {
    name: "Cấp cứu y tế",
    number: "115",
    note: "Gọi khi có vấn đề sức khỏe khẩn cấp.",
    tags: ["emergency"]
  },
  {
    name: "Phản ánh cuộc gọi / tin nhắn lừa đảo",
    number: "156",
    note: "Gọi hoặc nhắn tin để phản ánh cuộc gọi rác, cuộc gọi có dấu hiệu lừa đảo.",
    tags: ["report", "scam", "clicked", "none"]
  },
  {
    name: "Phản ánh SMS/cuộc gọi rác",
    number: "5656",
    note: "Có thể dùng để gửi phản ánh tin nhắn rác, cuộc gọi rác.",
    tags: ["report", "scam", "clicked", "none"]
  },
  {
    name: "Vietcombank",
    number: "1900545413",
    note: "Gọi nếu tin nhắn liên quan Vietcombank, tài khoản, thẻ hoặc OTP.",
    tags: ["bank", "vietcombank", "transferred", "otp", "clicked"]
  },
  {
    name: "BIDV",
    number: "19009247",
    note: "Gọi nếu tin nhắn liên quan BIDV, tài khoản, thẻ hoặc giao dịch.",
    tags: ["bank", "bidv", "transferred", "otp", "clicked"]
  },
  {
    name: "Agribank",
    number: "1900558818",
    note: "Gọi nếu tin nhắn liên quan Agribank, tài khoản, thẻ hoặc giao dịch.",
    tags: ["bank", "agribank", "transferred", "otp", "clicked"]
  }
];

let latestAnalyzedMessage = "";
let latestAnalysisData = null;
let latestWarningCardDataUrl = "";
let uploadedImageState = null;

// ==========================================
// 2. INITIALIZATION & UI ROUTING
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.getElementById("language-select");
  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  if (languageSelect && requestedLanguage && Array.from(languageSelect.options).some(option => option.value === requestedLanguage)) {
    currentLanguage = requestedLanguage;
  }
  if (languageSelect) languageSelect.value = currentLanguage;

  const messageInput = document.getElementById("message");
  messageInput?.addEventListener("input", () => { delete messageInput.dataset.sampleId; });

  changeLanguage(currentLanguage);
  setupImageDropzone();
});

function fillSample(id) {
  const input = document.getElementById("message");
  input.dataset.sampleId = String(id);
  input.value = getLocalizedSample(id);
  input.focus();
}

function switchTab(tabName) {
  const analyzer = document.getElementById("tab-analyzer");
  const library = document.getElementById("tab-library");
  const btnAnalyzer = document.getElementById("tab-btn-analyzer");
  const btnLibrary = document.getElementById("tab-btn-library");

  const analyzerActive = tabName === "analyzer";

  analyzer.classList.toggle("hidden", !analyzerActive);
  library.classList.toggle("hidden", analyzerActive);

  btnAnalyzer.className = analyzerActive ? "tab-btn active-tab" : "tab-btn inactive-tab";
  btnLibrary.className = analyzerActive ? "tab-btn inactive-tab" : "tab-btn active-tab";

  if (!analyzerActive) renderLibraryGrid();
}

// ==========================================
// 3. URL DE-OBFUSCATION REFACTORING (THE PIPELINE)
// ==========================================

// Extracts all strings starting with http:// or https://
function extractAllUrls(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.match(urlRegex) || [];
}

// ==========================================
// 4. MAIN SCANNER RUNNER
// ==========================================

async function analyzeMessage() {
  const msg = document.getElementById("message").value.trim();
  const resultDiv = document.getElementById("result");
  const analyzeBtn = document.getElementById("analyze-btn");

  if (!msg) {
    showError(t("inputRequired"));
    return;
  }

  if (msg.length > 5000) {
    showError(t("tooLong"));
    return;
  }

  resultDiv.classList.remove("hidden");
  resultDiv.innerHTML = loadingHtml();

  analyzeBtn.disabled = true;

  try {
    const foundUrls = extractAllUrls(msg);
    analyzeBtn.innerText = foundUrls.length > 0 ? t("resolving") : t("analyzing");

    const aiData = await callGemini(msg);
    const parsedData = normalizeAiData(aiData, msg);

    saveToHistory(msg, parsedData);
    displayResult(msg, parsedData);
  } catch (err) {
    console.warn("Gemini unavailable; backup analyzer used:", {
      message: err.message,
      status: err.status || null,
      reason: err.reason || null,
      failures: err.failures || []
    });

    const fallback = localFallbackAnalysis(msg);
    fallback.notice = t("fallbackNotice");
    saveToHistory(msg, fallback);
    displayResult(msg, fallback);
  } finally {
    analyzeBtn.disabled = false;
    analyzeBtn.innerText = t("analyzeButton");
  }
}

// ==========================================
// 5. LLM INTEGRATION LAYER
// ==========================================

async function callGemini(message) {
  const res = await backendFetch("/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message, language: currentLanguage })
  });

  const text = await res.text();

  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("Backend returned non-JSON: " + text.slice(0, 120));
  }

  if (!res.ok) {
    const error = new Error(data.hint || data.error || `Backend error (${res.status})`);
    error.status = res.status;
    error.reason = data.reason || "BACKEND_ERROR";
    error.failures = Array.isArray(data.failures) ? data.failures : [];
    error.keysLoaded = data.keysLoaded;
    error.modelsTried = data.modelsTried;
    throw error;
  }

  return data;
}

// Direct browser-to-Gemini code was intentionally removed in v9.
// All AI analysis goes through the backend so API keys stay private and the
// selected language + evidence-analysis prompt have one source of truth.

// ==========================================
// 6. RESPONSE NORMALIZATION & FALLBACKS
// ==========================================

function normalizeAiData(data, originalMsg) {
  const allowedRisk = ["An toàn", "Nghi ngờ", "Nguy hiểm"];
  if (!allowedRisk.includes(data?.risk)) {
    throw new Error("Gemini trả về mức rủi ro không hợp lệ.");
  }
  const risk = data.risk;

  let indicators = Array.isArray(data?.indicators) ? data.indicators : [];

  indicators = indicators
    .slice(0, 4)
    .filter(item => item && typeof item === "object")
    .map(item => ({
      quote: typeof item.quote === "string" ? item.quote : "",
      reason: typeof item.reason === "string" ? item.reason.trim() : ""
    }));

  if (risk !== "An toàn" && (!indicators.length || indicators.some(item => !item.reason))) {
    throw new Error("Gemini không tạo đủ nội dung cho Thám tử.");
  }

  let actions = Array.isArray(data?.actions)
    ? data.actions.filter(action => typeof action === "string" && action.trim())
    : [];

  actions = actions.slice(0, 3).map(action => action.trim());
  if (actions.length !== 3) {
    throw new Error("Gemini không tạo đủ 3 hành động cho Thám tử.");
  }

  let psychology = null;

  if (risk !== "An toàn") {
    const manipulation = data?.psychology?.manipulation?.trim();
    const intent = data?.psychology?.intent?.trim() || data?.psychology?.advice?.trim();
    if (!manipulation || !intent) {
      throw new Error("Gemini không tạo đủ nội dung cho Cô tâm lý.");
    }
    psychology = {
      manipulation,
      intent,
      // Keep advice as an alias so older history entries/cards remain compatible.
      advice: intent
    };
  }

  const rescueKeys = ["none", "clicked", "transferred", "otp"];
  let rescue = null;
  if (risk !== "An toàn") {
    rescue = {};
    for (const key of rescueKeys) {
      const steps = Array.isArray(data?.rescue?.[key])
        ? data.rescue[key].filter(step => typeof step === "string" && step.trim()).slice(0, 3)
        : [];
      if (steps.length !== 3) throw new Error(`Gemini không tạo đủ nội dung ứng cứu: ${key}.`);
      rescue[key] = steps.map(step => step.trim());
    }
  }

  return {
    risk,
    indicators,
    actions,
    psychology,
    rescue,
    linkAnalysis: Array.isArray(data?.linkAnalysis) ? data.linkAnalysis : [],
    source: "Gemini AI"
  };
}

function localFallbackAnalysis(msg) {
  const clean = msg.toLowerCase();
  const normalized = clean.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const indicators = [];

  const sentenceParts = msg
    .split(/(?<=[.!?;\n])\s+|\n+/)
    .map(part => part.trim())
    .filter(Boolean);

  function findEvidence(regex, fallbackLength = 150) {
    const matches = sentenceParts.filter(part =>
      regex.test(part.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    );
    // Prefer the richest matching sentence rather than a tiny fragment such as
    // "Congratulations!" when the next sentence contains the actual claim.
    const sentence = matches.sort((a, b) => b.length - a.length)[0];
    if (sentence) return sentence.slice(0, 220);
    const match = msg.match(regex);
    return match?.[0] || msg.slice(0, fallbackLength);
  }

  function addIndicator(quote, reason) {
    if (!quote || !reason || indicators.length >= 4) return;
    const compactQuote = String(quote).trim().slice(0, 220);
    if (!compactQuote || indicators.some(item => item.quote === compactQuote)) return;
    indicators.push({ quote: compactQuote, reason });
  }

  const prizePattern = /(congrat|winner|won\b|prize|reward|lucky|trung thuong|trúng thưởng|giai thuong|giải thưởng|may man|tri an khach hang|xe may|motorbike|iphone|lottery)/i;
  const paymentPattern = /(pay|payment|fee|deposit|transfer|send money|bank account|processing|shipping fee|tax|n[oộ]p(?:\s+truoc)?|nộp(?:\s+trước)?|chuyen khoan|chuyển khoản|phi\b|phí\b|so tai khoan|số tài khoản|van chuyen|vận chuyển)/i;
  const authorityPattern = /(police|ministry|court|prosecutor|arrest|warrant|fine|investigation|cong an|công an|bo cong an|bộ công an|bat giam|bắt giam|ma tuy|ma túy|csgt|phat nguoi|phạt nguội|toa an|tòa án)/i;
  const credentialPattern = /(otp|one[- ]?time password|verification code|password|pin\b|login|sign in|m[aã] x[aá]c th[uự]c|m[aậ]t kh[aẩ]u|dang nhap|đăng nhập)/i;
  const linkPattern = /(https?:\/\/|www\.|bit\.ly|tinyurl|\.top\b|\.cc\b|\.info\b|\.club\b)/i;
  const urgencyPattern = /(urgent|immediately|within \d+|today only|act now|deadline|final warning|ngay\b|kh[aẩ]n|trong \d+|h[oô]m nay|h[eế]t h[aạ]n|cu[oố]i c[uù]ng)/i;

  const hasPrize = prizePattern.test(normalized);
  const hasPayment = paymentPattern.test(normalized);
  const hasAuthority = authorityPattern.test(normalized);
  const hasCredential = credentialPattern.test(normalized);
  const hasLink = linkPattern.test(clean);
  const hasUrgency = urgencyPattern.test(normalized);

  // v17: prize-library messages can contain the fee as a bare amount
  // (e.g. "100,000,000 VND · 2,000,000 VND") without literally saying
  // "pay fee". v13 missed that and incorrectly downgraded known prize scams
  // to Suspicious whenever Gemini was offline. Detect monetary amounts as
  // evidence, but only escalate them in combination with a prize claim.
  const moneyMatches = msg.match(/(?:\b\d{1,3}(?:[.,]\d{3})+(?:[.,]\d+)?|\b\d+(?:[.,]\d+)?)\s*(?:vnd|vnđ|đ|dong|đồng|usd|eur|gbp|million|tri[eệ]u)\b/gi) || [];
  const distinctMoneyAmounts = [...new Set(moneyMatches.map(value => value.toLowerCase().replace(/\s+/g, " ")))];
  const hasPrizeMoneySignal = hasPrize && distinctMoneyAmounts.length >= 1;
  const hasStrongPrizeFeeSignal = hasPrize && (hasPayment || distinctMoneyAmounts.length >= 2 || (hasUrgency && hasPrizeMoneySignal));

  let risk = "Nghi ngờ";

  if (hasPrize) {
    addIndicator(findEvidence(prizePattern), t("fallbackPrizeReason"));
    risk = hasStrongPrizeFeeSignal ? "Nguy hiểm" : "Nghi ngờ";

    if (!hasPayment && hasStrongPrizeFeeSignal && distinctMoneyAmounts.length) {
      addIndicator(findEvidence(/(?:\d[\d.,]*\s*(?:vnd|vnđ|đ|dong|đồng|usd|eur|gbp|million|tri[eệ]u))/i), t("fallbackUnexplainedAmountReason"));
    }
  }

  if (hasPayment && (hasPrize || hasAuthority || hasLink || hasCredential)) {
    addIndicator(findEvidence(paymentPattern), t("fallbackFeeReason"));
    risk = "Nguy hiểm";
  }

  if (hasAuthority) {
    addIndicator(findEvidence(authorityPattern), t("fallbackPoliceReason"));
    risk = "Nguy hiểm";
  }

  if (hasCredential || hasLink) {
    addIndicator(findEvidence(hasCredential ? credentialPattern : linkPattern), t("fallbackLinkReason"));
    risk = hasCredential ? "Nguy hiểm" : (risk === "Nguy hiểm" ? risk : "Nghi ngờ");
  }

  if (hasUrgency) {
    addIndicator(findEvidence(urgencyPattern), t("fallbackUrgencyReason"));
    if (risk === "An toàn") risk = "Nghi ngờ";
  }

  if (!indicators.length) {
    addIndicator(msg.slice(0, 180), t("fallbackReason"));
  }

  let manipulation = t("fallbackManipulation");
  let intent = t("fallbackAdvice");

  // English/Vietnamese receive category-specific local analysis; every other
  // locale still remains fully in the selected language via its bundled texts.
  if (currentLanguage === "en") {
    if (hasPrize) {
      manipulation = "The message begins with a pleasant picture: a prize already won, money almost within reach. That image is allowed to settle before the awkward details arrive, so a smaller amount can feel insignificant beside the promised reward. The emotional order matters—the recipient is invited to imagine owning the prize before being given a reason to question whether the prize ever existed.";
      intent = "Behind the promise there is often no prize waiting at all, only a path opened one small step at a time. The sender needs the first quiet concession—a payment, a click, a piece of information—to know the recipient has entered the story. From there, shipping, tax, insurance, or verification can arrive one after another, while the reward stays just far enough away to make one more step feel tempting.";
    } else if (hasAuthority) {
      manipulation = "The message borrows the weight of authority and lets fear do the rushing. Words about police, investigations, arrest, or penalties can make the recipient feel as though there is no safe room left for questions. In that narrowed moment, obedience can seem easier than stopping to verify who is actually speaking.";
      intent = "The sender wants that fear to become motion: a transfer, a disclosure of personal information, an app installation, or a move into a private channel where the story can be controlled without interruption. The gain comes from keeping the recipient inside the scammer’s rhythm rather than letting them independently contact the real authority.";
    } else if (hasCredential || hasLink) {
      manipulation = "The message creates a small crisis and places a convenient doorway beside it: a link, a login, an OTP, a 'verification' step. When the problem and the solution arrive from the same stranger, urgency can make that doorway feel official before the recipient has time to notice who built it.";
      intent = "The destination is usually access rather than reassurance. A password, OTP, card detail, or active session can let the sender cross into the real account and turn one hurried digital gesture into control over money or identity.";
    }
  } else if (currentLanguage === "vi") {
    if (hasPrize) {
      manipulation = "Tin nhắn đặt niềm vui lên bàn trước khi đặt bằng chứng: một lời chúc mừng, một chiếc xe, một khoản tiền lớn được kể như thể đã gần nằm trong tay. Khi trí óc vừa kịp vẽ ra phần thưởng, những chi tiết nhỏ hơn phía sau dễ được nhìn nhẹ đi. Đó là một nhịp dẫn rất khéo: cho người nhận cảm thấy mình đã có thứ gì đó để mất, rồi mới đưa ra điều kiện để giữ lấy nó.";
      intent = "Phía sau lời hứa thường không phải là một phần thưởng đang chờ, mà là một con đường được mở dần từng bước. Người gửi chỉ cần bước đồng ý đầu tiên: một lần làm theo, một khoản tiền nhỏ, một thông tin tưởng như vô hại. Khi người nhận đã bước vào câu chuyện, những lý do mới có thể xuất hiện rất tự nhiên—phí vận chuyển, thuế, bảo hiểm, xác minh—trong khi món quà luôn ở vừa đủ xa để người ta muốn đi thêm một bước nữa.";
    } else if (hasAuthority) {
      manipulation = "Tin nhắn mượn sức nặng của quyền lực rồi để nỗi sợ làm phần còn lại. Những chữ như Công an, điều tra, bắt giữ hay xử phạt dễ khiến người nhận có cảm giác mình không còn khoảng trống để hỏi lại. Khi tâm trí bị dồn vào một hành lang hẹp như vậy, làm theo ngay có thể bỗng thấy 'an toàn' hơn việc dừng lại kiểm chứng.";
      intent = "Điều kẻ lừa đảo muốn là biến nỗi sợ thành một hành động cụ thể: chuyển tiền, đưa dữ liệu, cài ứng dụng hoặc chuyển sang một kênh riêng nơi chỉ họ nắm nhịp cuộc trò chuyện. Càng giữ người nhận trong nhịp gấp ấy, họ càng ít có cơ hội tự liên hệ với cơ quan thật và làm câu chuyện sụp xuống.";
    } else if (hasCredential || hasLink) {
      manipulation = "Tin nhắn dựng lên một 'sự cố' rồi đặt ngay cạnh nó một cánh cửa rất tiện: một đường dẫn, một màn hình đăng nhập, một mã OTP hay bước 'xác minh'. Khi cả vấn đề lẫn lối thoát đều đến từ cùng một người lạ, cảm giác cấp bách có thể khiến cánh cửa ấy trông chính thống trước khi người nhận kịp nhìn xem ai là người dựng nó lên.";
      intent = "Đích đến thường là quyền truy cập chứ không phải sự yên tâm. Chỉ một mật khẩu, OTP, dữ liệu thẻ hoặc phiên đăng nhập cũng có thể trở thành chiếc chìa khóa để kẻ lừa đảo bước vào tài khoản thật và biến một thao tác vội vàng thành quyền kiểm soát tiền hoặc danh tính.";
    }
  }

  let actions = [
    t("fallbackAction1"),
    t("fallbackAction2"),
    t("fallbackAction3")
  ];

  if (currentLanguage === "en") {
    if (hasPrize) {
      actions = [
        "Do not pay the requested shipping, processing, tax, registration, or release fee.",
        "Verify the promotion through contact details you find independently on the real organizer's official website; do not use numbers or links supplied in the message.",
        "Keep the message, sender details, bank account, and payment request as evidence; if the real organizer denies the promotion, block and report the sender."
      ];
    } else if (hasAuthority) {
      actions = [
        "End the conversation and independently contact the named authority using an official public number or website.",
        "Do not transfer money, install remote-access software, or provide OTPs or banking credentials to resolve the alleged case.",
        "Save the message, caller/account details, links, and any documents as evidence before blocking or reporting the sender."
      ];
    } else if (hasCredential || hasLink) {
      actions = [
        "Do not use the link or login page in the message; open the real service manually from its official app or website.",
        "Do not enter a password, OTP, PIN, card number, or recovery code into a page reached from the message.",
        "If you already entered credentials, change them through the official service and review the account for unauthorized activity."
      ];
    }
  } else if (currentLanguage === "vi") {
    if (hasPrize) {
      actions = [
        "Không chuyển khoản phí vận chuyển, xử lý, thuế, đăng ký hoặc bất kỳ khoản 'phí nhận thưởng' nào được yêu cầu.",
        "Tự tìm thông tin liên hệ trên website chính thức của đơn vị được nhắc tới để kiểm tra chương trình; không dùng số điện thoại hay liên kết do tin nhắn cung cấp.",
        "Lưu lại tin nhắn, tài khoản người gửi, số tài khoản nhận tiền và yêu cầu thanh toán làm bằng chứng; nếu đơn vị thật phủ nhận chương trình, hãy chặn và báo cáo người gửi."
      ];
    } else if (hasAuthority) {
      actions = [
        "Dừng cuộc trò chuyện và tự liên hệ cơ quan được nhắc tới bằng số điện thoại hoặc website chính thức công khai.",
        "Không chuyển tiền, cài phần mềm điều khiển từ xa hoặc cung cấp OTP/thông tin ngân hàng để 'giải quyết vụ việc'.",
        "Lưu tin nhắn, số điện thoại hoặc tài khoản, liên kết và tài liệu liên quan làm bằng chứng trước khi chặn hoặc báo cáo."
      ];
    } else if (hasCredential || hasLink) {
      actions = [
        "Không dùng liên kết hoặc trang đăng nhập trong tin nhắn; hãy tự mở ứng dụng hoặc website chính thức của dịch vụ.",
        "Không nhập mật khẩu, OTP, PIN, số thẻ hoặc mã khôi phục vào trang được mở từ tin nhắn.",
        "Nếu đã nhập thông tin đăng nhập, hãy đổi thông tin đó qua dịch vụ chính thức và kiểm tra tài khoản để phát hiện hoạt động trái phép."
      ];
    }
  }

  return {
    risk,
    indicators,
    actions,
    psychology: { manipulation, intent, advice: intent },
    source: "fallback"
  };
}

// ==========================================
// 7. UI DYNAMIC RENDERING COMPONENT
// ==========================================

function displayResult(originalMsg, data) {
  const resultDiv = document.getElementById("result");
  resultDiv.classList.remove("hidden");

  const riskClass =
    data.risk === "An toàn"
      ? "bg-green-100 text-green-800 border-green-400"
      : data.risk === "Nguy hiểm"
      ? "bg-red-100 text-red-800 border-red-400"
      : "bg-yellow-100 text-yellow-800 border-yellow-400";

  const sourceLabel = ["fallback", "Dự phòng", "Backup"].includes(data.source)
    ? t("backupSource")
    : data.source;
  const isBackupSource = ["fallback", "Dự phòng", "Backup"].includes(data.source);
  const sourceBadge = sourceLabel
    ? `<span class="inline-block mt-2 text-xs font-bold px-2 py-1 rounded-full bg-white/70 border border-current">${escapeHtml(sourceLabel)}</span>`
    : "";
  const sourceStatusText = isBackupSource
    ? (currentLanguage === "vi" ? "🧩 Kết quả từ bộ phân tích cục bộ — Gemini không tạo ra nội dung này"
      : currentLanguage === "en" ? "🧩 Result from the local analyzer — this content was not generated by Gemini"
      : `🧩 ${t("backupSource")}`)
    : (currentLanguage === "vi" ? "🤖 Kết quả được Gemini AI phân tích"
      : currentLanguage === "en" ? "🤖 Result analyzed by Gemini AI"
      : "🤖 Gemini AI");
  const sourceStatusClass = isBackupSource
    ? "bg-slate-100 border-slate-300 text-slate-700"
    : "bg-emerald-50 border-emerald-300 text-emerald-900";
  const sourceStatusHtml = `<div class="border p-3 rounded-xl text-sm font-bold ${sourceStatusClass}">${escapeHtml(sourceStatusText)}</div>`;

  const highlightedMsg = highlightQuotes(originalMsg, data.indicators || []);
  const riskLabel = data.risk === "An toàn" ? t("safe") : data.risk === "Nguy hiểm" ? t("dangerous") : t("suspicious");
  const linksHtml = buildLinkAnalysisHtml(data.linkAnalysis || []);
  latestAnalyzedMessage = originalMsg;
  latestAnalysisData = data;
  latestWarningCardDataUrl = "";
  const rescueSection = data.risk === "An toàn" ? "" : buildRescueSection(originalMsg, data);
  const shareCardSection = buildShareCardSection();

  const indicatorsHtml =
    data.indicators && data.indicators.length
      ? data.indicators
          .map(
            item =>
              `<li><strong class="text-slate-800">"${escapeHtml(item.quote || t("detectedSigns"))}"</strong>: ${escapeHtml(item.reason)}</li>`
          )
          .join("")
      : `<li>${escapeHtml(t("noSigns"))}</li>`;

  const actionsHtml = (data.actions || [])
    .map(action => `<li>${escapeHtml(action)}</li>`)
    .join("");

  const psychologyHtml = data.psychology
    ? `
      <div class="bg-purple-50 p-5 rounded-xl border border-purple-200 shadow-sm space-y-3">
        <div class="flex items-center space-x-2 border-b border-purple-100 pb-2">
          <span class="text-2xl">🧠</span>
          <h3 class="text-xl font-bold text-purple-900">${escapeHtml(t("psychologist"))}</h3>
        </div>

        <div>
          <h4 class="text-base font-bold text-purple-950">${escapeHtml(t("manipulation"))}</h4>
          <p class="text-base text-purple-900 mt-1 leading-relaxed">${escapeHtml(data.psychology.manipulation)}</p>
        </div>

        <div class="bg-white p-4 rounded-xl border border-purple-100 text-purple-950 text-base md:text-lg leading-relaxed shadow-sm font-medium">
          <div class="font-bold not-italic mb-1">${escapeHtml(t("scammerIntent"))}</div>
          <span>${escapeHtml(data.psychology.intent || data.psychology.advice || "")}</span>
        </div>
      </div>
    `
    : "";

  const noticeHtml = data.notice
    ? `<div class="bg-amber-50 border border-amber-300 text-amber-900 p-3 rounded-xl text-sm font-medium">${escapeHtml(data.notice)}</div>`
    : "";

  resultDiv.innerHTML = `
    ${noticeHtml}
    ${sourceStatusHtml}

    <div class="border-2 p-4 rounded-xl text-center shadow-sm transition-all ${riskClass}">
      <span class="text-sm font-bold uppercase tracking-wider block opacity-75">${escapeHtml(t("riskLevel"))}</span>
      <span class="text-3xl font-black">${escapeHtml(riskLabel)}</span>
      ${sourceBadge}
    </div>

    <div class="bg-slate-100 p-4 rounded-xl border border-slate-200">
      <h4 class="text-sm font-bold text-slate-500 mb-2">${escapeHtml(t("originalMessage"))}</h4>
      <p class="text-lg whitespace-pre-wrap leading-relaxed text-slate-800">${highlightedMsg}</p>
    </div>

    ${linksHtml}

    <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
      <div class="flex items-center space-x-2 border-b border-slate-100 pb-2">
        <span class="text-2xl">🕵️‍♂️</span>
        <h3 class="text-xl font-bold text-slate-800">${escapeHtml(t("detective"))}</h3>
      </div>

      <div>
        <h4 class="text-base font-bold text-red-600 mb-1">${escapeHtml(t("detectedSigns"))}</h4>
        <ul class="list-disc pl-5 space-y-1 text-base text-slate-700">${indicatorsHtml}</ul>
      </div>

      <div class="bg-blue-50 p-3 rounded-lg border border-blue-100">
        <h4 class="text-base font-bold text-blue-900 mb-1">${escapeHtml(t("recommendedActions"))}</h4>
        <ul class="list-decimal pl-5 space-y-1 text-base text-blue-950 font-medium">${actionsHtml}</ul>
      </div>
    </div>

	   ${psychologyHtml}
	   ${rescueSection}
	   ${shareCardSection}
	  `;
  window.currentScamRescue =
  data.rescue || {};

  requestAnimationFrame(() => {
    renderWarningCard(originalMsg, data).catch(error => {
      console.warn("Warning card rendering failed:", error.message);
      const status = document.getElementById("warning-card-status");
      if (status) status.textContent = t("cardDownloadFailed");
    });
  });
}

function buildShareCardSection() {
  return `
    <section class="warning-card-section" aria-labelledby="warning-card-title">
      <div class="warning-card-header">
        <h3 id="warning-card-title">🪪 ${escapeHtml(t("shareCardTitle"))}</h3>
        <button type="button" onclick="downloadWarningCard()">⬇️ ${escapeHtml(t("downloadImage"))}</button>
      </div>
      <div class="warning-card-preview-frame">
        <img id="warning-card-preview" class="hidden" alt="${escapeHtml(t("shareCardTitle"))}" />
        <div id="warning-card-loading" class="warning-card-loading">${escapeHtml(t("analyzing"))}</div>
      </div>
      <p id="warning-card-status" class="warning-card-status" aria-live="polite"></p>
    </section>`;
}

function drawWrappedCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 99) {
  const raw = String(text || "").replace(/\s+/g, " ").trim();
  if (!raw) return y;
  const words = raw.split(" ");
  const lines = [];
  let line = "";

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (ctx.measureText(candidate).width <= maxWidth || !line) {
      line = candidate;
    } else {
      lines.push(line);
      line = word;
      if (lines.length === maxLines) break;
    }
  }
  if (line && lines.length < maxLines) lines.push(line);
  if (words.length && lines.length === maxLines) {
    let last = lines[maxLines - 1];
    while (last.length > 1 && ctx.measureText(`${last}…`).width > maxWidth) last = last.slice(0, -1);
    lines[maxLines - 1] = `${last}…`;
  }
  lines.forEach(value => {
    ctx.fillText(value, x, y);
    y += lineHeight;
  });
  return y;
}

async function createQrCanvas(text, size) {
  if (typeof window.QRCode !== "function") throw new Error("QR library unavailable");
  const holder = document.createElement("div");
  holder.style.position = "fixed";
  holder.style.left = "-10000px";
  holder.style.top = "0";
  document.body.appendChild(holder);

  try {
    new window.QRCode(holder, {
      text,
      width: size,
      height: size,
      colorDark: "#111827",
      colorLight: "#ffffff",
      correctLevel: window.QRCode.CorrectLevel?.M
    });
    const canvas = holder.querySelector("canvas");
    if (canvas) return canvas;
    const image = holder.querySelector("img");
    if (!image) throw new Error("QR canvas was not created");
    if (!image.complete) await new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = reject;
    });
    const copy = document.createElement("canvas");
    copy.width = size;
    copy.height = size;
    copy.getContext("2d").drawImage(image, 0, 0, size, size);
    return copy;
  } finally {
    holder.remove();
  }
}

async function renderWarningCard(originalMsg, data) {
  const preview = document.getElementById("warning-card-preview");
  const loading = document.getElementById("warning-card-loading");
  if (!preview) return;

  const canvas = document.createElement("canvas");
  canvas.width = 900;
  canvas.height = 1200;
  const ctx = canvas.getContext("2d");
  const riskLabel = data.risk === "An toàn" ? t("safe") : data.risk === "Nguy hiểm" ? t("dangerous") : t("suspicious");
  const theme = data.risk === "An toàn"
    ? { pale: "#dcfce7", ink: "#166534", line: "#86efac" }
    : data.risk === "Nguy hiểm"
      ? { pale: "#fee2e2", ink: "#991b1b", line: "#fca5a5" }
      : { pale: "#fef3c7", ink: "#92400e", line: "#fcd34d" };

  ctx.fillStyle = "#eef2f7";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#111827";
  ctx.fillRect(54, 42, 792, 1116);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(70, 58, 760, 1084);

  ctx.fillStyle = theme.pale;
  ctx.fillRect(102, 92, 696, 164);
  ctx.fillStyle = theme.ink;
  ctx.font = "900 42px Arial, sans-serif";
  ctx.fillText("ScamCheck", 132, 150);
  ctx.font = "800 23px Arial, sans-serif";
  ctx.fillText(String(t("cardSubtitle")).toLocaleUpperCase(currentLanguage), 132, 193);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(612, 122, 154, 64);
  ctx.fillStyle = theme.ink;
  ctx.font = "800 24px Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(riskLabel, 689, 163, 136);
  ctx.textAlign = "left";

  let y = 320;
  ctx.fillStyle = "#111827";
  ctx.font = "800 26px Arial, sans-serif";
  ctx.fillText(t("riskLevel"), 102, y);
  y += 54;
  ctx.fillStyle = theme.ink;
  ctx.font = "900 52px Arial, sans-serif";
  y = drawWrappedCanvasText(ctx, riskLabel, 102, y, 650, 58, 2) + 28;

  ctx.fillStyle = "#111827";
  ctx.font = "800 27px Arial, sans-serif";
  ctx.fillText(t("cardMainSigns"), 102, y);
  y += 42;
  ctx.fillStyle = "#374151";
  ctx.font = "400 24px Arial, sans-serif";
  const mainReason = data.indicators?.[0]?.reason || t("noSigns");
  y = drawWrappedCanvasText(ctx, mainReason, 102, y, 666, 34, 5) + 34;

  ctx.fillStyle = "#111827";
  ctx.font = "800 27px Arial, sans-serif";
  ctx.fillText(t("cardCheckedContent"), 102, y);
  y += 42;
  ctx.fillStyle = "#4b5563";
  ctx.font = "400 21px Arial, sans-serif";
  drawWrappedCanvasText(ctx, originalMsg, 102, y, 430, 29, 6);

  const targetUrl = new URL(window.location.href);
  targetUrl.hash = "";
  targetUrl.search = "";
  const qr = await createQrCanvas(targetUrl.href, 168);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(590, 744, 192, 192);
  ctx.drawImage(qr, 602, 756, 168, 168);
  ctx.fillStyle = "#4b5563";
  ctx.font = "400 16px Arial, sans-serif";
  ctx.textAlign = "center";
  drawWrappedCanvasText(ctx, t("scanToOpen"), 686, 962, 192, 22, 2);
  ctx.textAlign = "left";

  ctx.fillStyle = theme.pale;
  ctx.fillRect(102, 1018, 696, 82);
  ctx.fillStyle = theme.ink;
  ctx.font = "700 20px Arial, sans-serif";
  const action = data.actions?.[0] || t("fallbackAction1");
  drawWrappedCanvasText(ctx, action, 126, 1054, 648, 26, 2);

  latestWarningCardDataUrl = canvas.toDataURL("image/png");
  preview.src = latestWarningCardDataUrl;
  preview.classList.remove("hidden");
  if (loading) loading.classList.add("hidden");
  const status = document.getElementById("warning-card-status");
  if (status) status.textContent = t("cardReady");
}

async function downloadWarningCard() {
  if (!latestWarningCardDataUrl && latestAnalysisData) {
    await renderWarningCard(latestAnalyzedMessage, latestAnalysisData);
  }
  if (!latestWarningCardDataUrl) {
    const status = document.getElementById("warning-card-status");
    if (status) status.textContent = t("cardDownloadFailed");
    return;
  }
  const link = document.createElement("a");
  link.href = latestWarningCardDataUrl;
  link.download = `scamcheck-warning-${Date.now()}.png`;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function setupImageDropzone() {
  const dropzone = document.getElementById("image-dropzone");
  if (!dropzone) return;
  ["dragenter", "dragover"].forEach(eventName => {
    dropzone.addEventListener(eventName, event => {
      event.preventDefault();
      dropzone.classList.add("is-dragging");
    });
  });
  ["dragleave", "drop"].forEach(eventName => {
    dropzone.addEventListener(eventName, event => {
      event.preventDefault();
      dropzone.classList.remove("is-dragging");
    });
  });
  dropzone.addEventListener("drop", event => {
    const file = event.dataTransfer?.files?.[0];
    if (file) prepareUploadedImage(file);
  });
}

function handleImageUpload(event) {
  const file = event?.target?.files?.[0];
  if (file) prepareUploadedImage(file);
}

function setImageUploadStatus(message, type = "info") {
  const status = document.getElementById("image-upload-status");
  if (!status) return;
  status.textContent = message;
  status.className = `image-upload-status ${type}`;
}

function refreshImageUploadLanguage() {
  const qrDetected = document.getElementById("qr-detected");
  const status = document.getElementById("image-upload-status");
  if (!uploadedImageState) {
    if (status) status.className = "image-upload-status hidden";
    return;
  }
  if (qrDetected) {
    qrDetected.textContent = uploadedImageState.qrText ? `${t("qrFound")}: ${uploadedImageState.qrText}` : "";
    qrDetected.classList.toggle("hidden", !uploadedImageState.qrText);
  }
  setImageUploadStatus(uploadedImageState.qrText ? t("qrFound") : t("imageReady"), "success");
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error || new Error("File read failed"));
    reader.readAsDataURL(file);
  });
}

function loadBrowserImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Image decode failed"));
    image.src = src;
  });
}

function decodeQrFromCanvas(canvas) {
  if (typeof window.jsQR !== "function") return "";
  try {
    const context = canvas.getContext("2d", { willReadFrequently: true });
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height);
    return window.jsQR(pixels.data, pixels.width, pixels.height, { inversionAttempts: "attemptBoth" })?.data?.trim() || "";
  } catch {
    return "";
  }
}

function dataUrlByteLength(dataUrl) {
  const comma = String(dataUrl || "").indexOf(",");
  const base64 = comma >= 0 ? String(dataUrl).slice(comma + 1) : String(dataUrl || "");
  if (!base64) return 0;
  const padding = (base64.endsWith("==") ? 2 : base64.endsWith("=") ? 1 : 0);
  return Math.max(0, Math.floor(base64.length * 3 / 4) - padding);
}

function exportCanvas(canvas, mimeType, quality) {
  const dataUrl = canvas.toDataURL(mimeType, quality);
  const actualMime = (dataUrl.match(/^data:([^;,]+)/i)?.[1] || "image/png").toLowerCase();
  return { dataUrl, mimeType: actualMime, bytes: dataUrlByteLength(dataUrl) };
}

function resizeCanvas(sourceCanvas, scale) {
  const target = document.createElement("canvas");
  target.width = Math.max(1, Math.round(sourceCanvas.width * scale));
  target.height = Math.max(1, Math.round(sourceCanvas.height * scale));
  const ctx = target.getContext("2d", { willReadFrequently: true });
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, target.width, target.height);
  ctx.drawImage(sourceCanvas, 0, 0, target.width, target.height);
  return target;
}

function encodeCanvasForUpload(sourceCanvas, preferPng = false) {
  // Keep the request comfortably below Express/Render body limits. Base64 adds
  // roughly 33%, so a ~2.5 MB encoded image becomes a ~3.4 MB JSON request.
  const TARGET_BYTES = 2.5 * 1024 * 1024;
  let working = sourceCanvas;
  let best = null;

  if (preferPng) {
    const png = exportCanvas(working, "image/png");
    if (png.bytes <= TARGET_BYTES) return png;
    best = png;
  }

  const qualities = [0.92, 0.84, 0.76, 0.68];
  for (let resizePass = 0; resizePass < 5; resizePass++) {
    for (const mimeType of ["image/webp", "image/jpeg"]) {
      for (const quality of qualities) {
        const candidate = exportCanvas(working, mimeType, quality);
        // Some browsers silently fall back to PNG for unsupported formats.
        if (mimeType === "image/webp" && candidate.mimeType !== "image/webp") break;
        if (!best || candidate.bytes < best.bytes) best = candidate;
        if (candidate.bytes <= TARGET_BYTES) return candidate;
      }
    }
    working = resizeCanvas(working, 0.82);
  }

  return best || exportCanvas(working, "image/jpeg", 0.68);
}

async function prepareUploadedImage(file) {
  if (!file.type.startsWith("image/")) {
    setImageUploadStatus(t("imageInvalid"), "error");
    return;
  }
  if (file.size > 8 * 1024 * 1024) {
    setImageUploadStatus(t("imageTooLarge"), "error");
    return;
  }

  try {
    setImageUploadStatus(t("analyzing"), "loading");
    const source = await readFileAsDataUrl(file);
    const image = await loadBrowserImage(source);
    const maxSide = 1600;
    const scale = Math.min(1, maxSide / Math.max(image.naturalWidth, image.naturalHeight));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
    const context = canvas.getContext("2d", { willReadFrequently: true });
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    const qrText = decodeQrFromCanvas(canvas).slice(0, 2000);
    const encoded = encodeCanvasForUpload(canvas, file.type === "image/png");
    const dataUrl = encoded.dataUrl;
    const mimeType = encoded.mimeType;
    uploadedImageState = { dataUrl, mimeType, qrText, name: file.name, uploadBytes: encoded.bytes };

    const previewWrap = document.getElementById("image-preview-wrap");
    const preview = document.getElementById("image-preview");
    const qrDetected = document.getElementById("qr-detected");
    const analyzeButton = document.getElementById("image-analyze-btn");
    if (previewWrap) previewWrap.classList.remove("hidden");
    if (preview) {
      preview.src = dataUrl;
      preview.alt = file.name;
    }
    if (analyzeButton) analyzeButton.disabled = false;
    if (qrDetected) {
      qrDetected.textContent = qrText ? `${t("qrFound")}: ${qrText}` : "";
      qrDetected.classList.toggle("hidden", !qrText);
    }
    setImageUploadStatus(qrText ? t("qrFound") : t("imageReady"), "success");
  } catch (error) {
    console.warn("Image preparation failed:", error.message);
    setImageUploadStatus(t("imageInvalid"), "error");
  }
}

function clearImageUpload() {
  uploadedImageState = null;
  const input = document.getElementById("image-upload");
  const previewWrap = document.getElementById("image-preview-wrap");
  const preview = document.getElementById("image-preview");
  const analyzeButton = document.getElementById("image-analyze-btn");
  const qrDetected = document.getElementById("qr-detected");
  const status = document.getElementById("image-upload-status");
  if (input) input.value = "";
  if (preview) preview.removeAttribute("src");
  if (previewWrap) previewWrap.classList.add("hidden");
  if (analyzeButton) analyzeButton.disabled = true;
  if (qrDetected) qrDetected.classList.add("hidden");
  if (status) status.className = "image-upload-status hidden";
}

async function analyzeUploadedImage() {
  if (!uploadedImageState) return;
  const analyzeButton = document.getElementById("image-analyze-btn");
  if (analyzeButton) {
    analyzeButton.disabled = true;
    analyzeButton.textContent = t("imageAnalyzing");
  }
  setImageUploadStatus(t("imageAnalyzing"), "loading");

  try {
    const response = await backendFetch("/analyze-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        image: uploadedImageState.dataUrl,
        mimeType: uploadedImageState.mimeType,
        qrText: uploadedImageState.qrText,
        language: currentLanguage
      })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      if (response.status === 413) {
        const tooLarge = new Error("IMAGE_PAYLOAD_TOO_LARGE");
        tooLarge.code = "IMAGE_PAYLOAD_TOO_LARGE";
        throw tooLarge;
      }
      throw new Error(payload.hint || payload.error || `Image analysis failed (${response.status})`);
    }

    const originalContent = String(payload.extractedText || payload.qrContent || uploadedImageState.qrText || t("sourceImage")).trim();
    const parsedData = normalizeAiData(payload, originalContent);
    parsedData.source = "Gemini Vision";
    saveToHistory(originalContent, parsedData);
    switchTab("analyzer");
    displayResult(originalContent, parsedData);
    setImageUploadStatus(t("imageReady"), "success");
    document.getElementById("result")?.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    console.warn("Image analysis failed:", error.message);
    if (error.code === "IMAGE_PAYLOAD_TOO_LARGE" || error.message === "IMAGE_PAYLOAD_TOO_LARGE") {
      setImageUploadStatus(t("imageTooLarge"), "error");
    } else {
      setImageUploadStatus(t("imageAnalysisFailed"), "error");
    }
  } finally {
    if (analyzeButton) {
      analyzeButton.disabled = !uploadedImageState;
      analyzeButton.textContent = t("imageAnalyzeButton");
    }
  }
}

function buildLinkAnalysisHtml(links) {
  if (!Array.isArray(links) || links.length === 0) return "";

  return `
    <div class="bg-cyan-50 p-5 rounded-xl border border-cyan-200 shadow-sm">
      <h3 class="text-lg font-black text-cyan-950 mb-3">${escapeHtml(t("linkCheck"))}</h3>
      <div class="space-y-3">
        ${links.map(link => {
          let hostname = link.final || link.original || "";
          try { hostname = new URL(hostname).hostname; } catch {}
          const statusText = link.resolved ? t("resolvedLink") : t("unresolvedLink");
          const statusClass = link.resolved ? "text-green-800 bg-green-100" : "text-amber-900 bg-amber-100";
          return `
            <div class="bg-white border border-cyan-100 rounded-lg p-3 overflow-hidden">
              <span class="inline-block px-2 py-1 rounded-md text-xs font-bold ${statusClass}">${escapeHtml(statusText)}</span>
              <p class="mt-2 text-sm text-slate-600 break-all"><strong>${escapeHtml(link.original || "")}</strong></p>
              <p class="mt-1 text-sm text-cyan-900 break-all">→ ${escapeHtml(link.final || link.original || "")}</p>
              <p class="mt-1 text-xs text-slate-500">${escapeHtml(t("finalDomain"))}: ${escapeHtml(hostname)}</p>
            </div>`;
        }).join("")}
      </div>
    </div>`;
}

function highlightQuotes(text, indicators) {
  let safeText = escapeHtml(text);

  indicators.forEach(item => {
    const quote = item?.quote;
    if (!quote || quote.length < 3) return;

    const safeQuote = escapeHtml(quote);
    safeText = safeText.split(safeQuote).join(`<mark class="bg-yellow-300 font-semibold px-1 rounded">${safeQuote}</mark>`);
  });

  return safeText;
}

function loadingHtml() {
  return `
    <div class="flex flex-col items-center justify-center p-8 bg-slate-50 border border-slate-200 rounded-xl space-y-4 w-full">
      <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      <div class="text-center space-y-1">
        <p class="text-slate-800 font-bold text-lg animate-pulse">${escapeHtml(t("loadingDetective"))}</p>
        <p class="text-purple-700 font-medium text-base animate-pulse">${escapeHtml(t("loadingPsychologist"))}</p>
      </div>
    </div>
  `;
}

function showError(message) {
  const resultDiv = document.getElementById("result");
  resultDiv.classList.remove("hidden");
  resultDiv.innerHTML = `
    <div class="bg-red-50 border-2 border-red-400 text-red-900 p-4 rounded-xl font-medium w-full">
      ${escapeHtml(message)}
    </div>
  `;
}

// ==========================================
// 8. LOCAL STORAGE HISTORY COMPONENT
// ==========================================

function historyStorageKey() {
  return `scamcheck_history_v8_${currentLanguage}`;
}

function saveToHistory(msg, data) {
  const storageKey = historyStorageKey();
  let history = JSON.parse(localStorage.getItem(storageKey)) || [];
  history = history.filter(item => item.msg !== msg);

  history.unshift({
    msg,
    data,
    time: new Date().toLocaleTimeString(currentLanguage, {
      hour: "2-digit",
      minute: "2-digit"
    })
  });

  if (history.length > 10) history.pop();

  localStorage.setItem(storageKey, JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  const historyList = document.getElementById("history-list");
  if (!historyList) return;

  const history = JSON.parse(localStorage.getItem(historyStorageKey())) || [];

  if (history.length === 0) {
    historyList.innerHTML = `<p class="text-slate-400 italic text-base">${escapeHtml(t("noHistory"))}</p>`;
    return;
  }

  historyList.innerHTML = "";

  history.forEach(item => {
    if (!item || !item.data) return;

    let riskEmoji = "✅";
    if (item.data.risk === "Nghi ngờ") riskEmoji = "⚠️";
    if (item.data.risk === "Nguy hiểm") riskEmoji = "🚨";

    const itemBtn = document.createElement("button");
    itemBtn.className =
      "w-full text-left p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition text-base text-slate-700 font-medium flex justify-between items-center";

    const historyRisk = item.data.risk === "An toàn" ? t("safe") : item.data.risk === "Nguy hiểm" ? t("dangerous") : t("suspicious");
    itemBtn.innerHTML = `
      <span class="truncate mr-2">${riskEmoji} [${escapeHtml(historyRisk)}] ${escapeHtml(item.msg)}</span>
      <span class="text-xs text-slate-400 flex-shrink-0">${escapeHtml(item.time || "")}</span>
    `;

    itemBtn.onclick = () => {
      document.getElementById("message").value = item.msg;
      switchTab("analyzer");
      displayResult(item.msg, item.data);
    };

    historyList.appendChild(itemBtn);
  });
}

// ==========================================
// 9. KNOWLEDGE BASE & SEARCH COMPONENT
// ==========================================

function filterCategory(category, element) {
  currentCategory = category;
  document.querySelectorAll(".lib-filter-btn").forEach(btn => {
    btn.className = "lib-filter-btn";
  });
  element.className = "lib-filter-btn active-filter";
  handleFilterAndSearch();
}

function handleFilterAndSearch() {
  renderLibraryGrid(getFilteredLibraryItems());
}

function renderLibraryGrid(dataList = getLocalizedLibraryItems()) {
  const gridContainer = document.getElementById("library-grid");
  if (!gridContainer) return;
  const countEl = document.getElementById("library-count");
  if (countEl) {
    countEl.textContent = t("libraryCount")
      .replace("{shown}", dataList.length)
      .replace("{total}", getLocalizedLibraryItems().length);
  }

  if (!dataList.length) {
    gridContainer.innerHTML = `
      <div class="text-center p-8 bg-slate-50 border border-dashed border-slate-300 rounded-xl text-slate-400">
        ${escapeHtml(t("noLibraryResults"))}
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = "";

  dataList.forEach(item => {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2 hover:border-slate-300 transition duration-150";

    card.innerHTML = `
      <div class="flex justify-between items-start gap-2">
        <h4 class="text-base font-bold text-slate-800">${escapeHtml(item.title)}</h4>
        ${getBadge(item.category)}
      </div>

      <p class="text-sm text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
        ${escapeHtml(item.desc)}
      </p>

      <div class="library-sample line-clamp-2 select-all">
        <strong>${escapeHtml(t("sampleSms"))}:</strong> "${escapeHtml(item.msg)}"
      </div>

      <div class="pt-1 flex justify-end">
        <button onclick="triggerVerification('${escapeHtml(item.id)}')"
          class="px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-lg text-xs font-bold transition duration-150 border border-blue-200 shadow-sm">
          ${escapeHtml(t("tryNow"))}
        </button>
      </div>
    `;
    gridContainer.appendChild(card);
  });
}

function triggerVerification(scamId) {
  const targetScam = getLocalizedLibraryItems().find(item => item.id === scamId);
  if (!targetScam) return;

  document.getElementById("message").value = targetScam.msg;
  switchTab("analyzer");
  analyzeMessage();
}

function getBadge(category) {
  if (category === "bank") return `<span class="badge bg-blue-50 text-blue-700 border-blue-200">${escapeHtml(t("bank"))}</span>`;
  if (category === "police") return `<span class="badge bg-red-50 text-red-700 border-red-200">${escapeHtml(t("police"))}</span>`;
  if (category === "gift") return `<span class="badge bg-amber-50 text-amber-700 border-amber-200">${escapeHtml(t("prize"))}</span>`;
  if (category === "delivery") return `<span class="badge bg-purple-50 text-purple-700 border-purple-200">${escapeHtml(t("delivery"))}</span>`;
  return "";
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}
function buildRescueSection(originalMsg, data) {
  return `
    <div class="rescue-card">
      <div class="rescue-title">${escapeHtml(t("rescue"))}</div>
      <p class="text-slate-700 text-base leading-relaxed">
        ${escapeHtml(t("rescueIntro"))}
      </p>

      <div class="rescue-option-grid">
        <button class="rescue-btn" onclick="showRescuePlan('none')">
          ${escapeHtml(t("none"))}
        </button>

        <button class="rescue-btn" onclick="showRescuePlan('clicked')">
          ${escapeHtml(t("clicked"))}
        </button>

        <button class="rescue-btn" onclick="showRescuePlan('transferred')">
          ${escapeHtml(t("transferred"))}
        </button>

        <button class="rescue-btn" onclick="showRescuePlan('otp')">
          ${escapeHtml(t("otp"))}
        </button>
      </div>

      <div id="rescue-detail" class="rescue-detail hidden"></div>
    </div>
  `;
}

function showRescuePlan(choice) {
  const detail = document.getElementById("rescue-detail");
  if (!detail) return;

  const aiSteps = window.currentScamRescue?.[choice];
  const steps = Array.isArray(aiSteps) && aiSteps.length === 3
    ? aiSteps
    : getRescueSteps(choice);
  const hotlines = getRecommendedHotlines(choice, latestAnalyzedMessage);

  detail.classList.remove("hidden");

  detail.innerHTML = `
    <h4 class="font-black text-red-800 mb-2">${escapeHtml(t("immediateSteps"))}</h4>

    <ol class="list-decimal pl-5 space-y-2 text-slate-800 font-medium">
      ${steps.map(step => `<li>${escapeHtml(step)}</li>`).join("")}
    </ol>

    <h4 class="font-black text-blue-800 mt-4 mb-2">${escapeHtml(t("contactNumbers"))}</h4>

    ${hotlines.map(item => {
      const localized = localizeHotline(item);
      return `
      <div class="hotline-item">
        <div class="font-bold text-slate-800">${escapeHtml(localized.name)}</div>
        <a class="hotline-number" href="tel:${escapeHtml(item.number)}">${escapeHtml(item.number)}</a>
        ${localized.note ? `<div class="text-sm text-slate-600 mt-1">${escapeHtml(localized.note)}</div>` : ""}
      </div>
    `;}).join("")}
  `;
}

function localizeHotline(item) {
  if (currentLanguage === "vi") return item;

  const english = {
    "113": ["Police", "Call after losing money, receiving threats, or facing immediate risk of financial loss."],
    "114": ["Fire and rescue", "Call for fires, rescues, or life-threatening emergencies."],
    "115": ["Emergency medical services", "Call for urgent medical emergencies."],
    "156": ["Report scam calls or messages", "Call or text to report suspected scam calls and messages."],
    "5656": ["Report spam calls or messages", "Use this number to report spam calls and messages."],
    "1900545413": ["Vietcombank", "Contact the official bank about accounts, cards, transactions, or OTPs."],
    "19009247": ["BIDV", "Contact the official bank about accounts, cards, transactions, or OTPs."],
    "1900558818": ["Agribank", "Contact the official bank about accounts, cards, transactions, or OTPs."]
  };

  if (currentLanguage === "en" && english[item.number]) {
    return { ...item, name: english[item.number][0], note: english[item.number][1] };
  }

  const neutralNames = {
    "113": t("police"),
    "114": "114",
    "115": "115",
    "156": "156",
    "5656": "5656"
  };
  return {
    ...item,
    name: neutralNames[item.number] || item.name,
    note: ""
  };
}

function getRescueSteps(choice) {
  if (choice === "none") {
    return [
      t("rescueNone1"), t("rescueNone2"), t("rescueNone3")
    ];
  }

  if (choice === "clicked") {
    return [
      t("rescueClicked1"), t("rescueClicked2"), t("rescueClicked3")
    ];
  }

  if (choice === "transferred") {
    return [
      t("rescueTransferred1"), t("rescueTransferred2"), t("rescueTransferred3")
    ];
  }

  if (choice === "otp") {
    return [
      t("rescueOtp1"), t("rescueOtp2"), t("rescueOtp3")
    ];
  }

  return [
    t("fallbackAdvice"), t("rescueNone2"), t("fallbackAction3")
  ];
}

function getRecommendedHotlines(choice, message) {
  const clean = String(message || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const selected = [];

  if (choice === "transferred" || choice === "otp") {
    selected.push(
      ...VERIFIED_HOTLINES.filter(
        h =>
          h.tags.includes("police") ||
          h.tags.includes("report")
      )
    );
  }

  if (choice === "clicked" || choice === "none") {
    selected.push(
      ...VERIFIED_HOTLINES.filter(
        h => h.tags.includes("report")
      )
    );
  }

  if (
    clean.includes("vietcombank") ||
    clean.includes("vietcornbank") ||
    clean.includes("vcb")
  ) {
    selected.push(
      ...VERIFIED_HOTLINES.filter(
        h => h.tags.includes("vietcombank")
      )
    );
  }

  if (clean.includes("bidv")) {
    selected.push(
      ...VERIFIED_HOTLINES.filter(
        h => h.tags.includes("bidv")
      )
    );
  }

  if (clean.includes("agribank")) {
    selected.push(
      ...VERIFIED_HOTLINES.filter(
        h => h.tags.includes("agribank")
      )
    );
  }

  if (
    clean.includes("ngan hang") ||
    clean.includes("tai khoan") ||
    clean.includes("the") ||
    clean.includes("otp") ||
    clean.includes("chuyen khoan")
  ) {
    selected.push(
      ...VERIFIED_HOTLINES.filter(
        h => h.tags.includes("bank")
      )
    );
  }

  const unique = [];
  const seen = new Set();

  selected.forEach(item => {
    if (!seen.has(item.number)) {
      seen.add(item.number);
      unique.push(item);
    }
  });

  if (unique.length === 0) {
    unique.push(
      ...VERIFIED_HOTLINES.filter(
        h => h.number === "156" || h.number === "5656"
      )
    );
  }

  return unique.slice(0, 6);
}
function clearLibrarySearch() {
  const input = document.getElementById("library-search");
  if (input) input.value = "";

  currentCategory = "all";

  document.querySelectorAll(".lib-filter-btn").forEach(btn => {
    btn.className = "lib-filter-btn";
  });

  const firstBtn = document.querySelector(".lib-filter-btn");
  if (firstBtn) firstBtn.className = "lib-filter-btn active-filter";

  renderLibraryGrid(getLocalizedLibraryItems());
}
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("scamcheck_theme", isDark ? "dark" : "light");

  const btn = document.getElementById("theme-toggle");
  if (btn) btn.innerText = isDark ? t("themeLight") : t("themeDark");
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("scamcheck_theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.innerText = document.body.classList.contains("dark-mode")
      ? t("themeLight")
      : t("themeDark");
  }
});
function clearHistory() {
  localStorage.removeItem(historyStorageKey());
  renderHistory();
}

function getUserGuideCopy() {
  if (currentLanguage === "vi") {
    return {
      triggerTitle: "Người mới?",
      triggerSubtitle: "Hướng dẫn sử dụng",
      mini: "HƯỚNG DẪN SCAMCHECK",
      title: "👋 Chào mừng đến với ScamCheck",
      intro: "Hướng dẫn từ A–Z để kiểm tra tin nhắn, hình ảnh, mã QR và xử lý khi gặp lừa đảo.",
      quickTitle: "Bắt đầu trong 3 bước",
      quickIntro: "Chỉ mất vài giây để thực hiện một lần kiểm tra.",
      steps: [
        ["Đưa nội dung vào ScamCheck", "Dán tin nhắn vào ô phân tích hoặc tải lên ảnh / mã QR."],
        ["Nhấn “Kiểm tra ngay”", "ScamCheck gửi nội dung đến Gemini để phân tích dấu hiệu và mức độ rủi ro."],
        ["Đọc kết quả & xử lý", "Xem mức rủi ro, Thám tử, Cô tâm lý và hướng dẫn ứng cứu."]
      ],
      fullTitle: "Hướng dẫn đầy đủ",
      fullIntro: "Các chức năng chính của ScamCheck.",
      features: [
        ["💬", "1. Kiểm tra tin nhắn", "Dán hoặc nhập nội dung nghi ngờ rồi nhấn “Kiểm tra ngay”."],
        ["🚦", "2. Mức độ rủi ro", "Kết quả được phân loại thành An toàn, Nghi ngờ hoặc Nguy hiểm."],
        ["🕵️", "3. DETECTIVE", "Phân tích dấu hiệu kỹ thuật, cách viết bất thường, OTP, giả mạo, tên miền và liên kết đáng ngờ."],
        ["🧠", "4. PSYCHOLOGIST", "Giải thích cách người gửi dùng sợ hãi, khẩn cấp, lòng tin, quyền lực hoặc phần thưởng để gây áp lực."],
        ["🚨", "5. HELPER", "Đưa ra bước xử lý theo tình huống: chưa làm gì, đã bấm link, đã chuyển tiền hoặc đã cung cấp OTP."],
        ["🔗", "6. Kiểm tra liên kết", "Đánh giá URL và cố gắng mở đích đến của các liên kết rút gọn như Bit.ly khi có thể."],
        ["🖼️", "7. Kiểm tra hình ảnh", "Tải ảnh chụp màn hình hoặc hình chứa nội dung nghi ngờ để Gemini đọc và đánh giá."],
        ["▦", "8. Kiểm tra mã QR", "ScamCheck đọc nội dung QR khi có thể và đưa liên kết hoặc dữ liệu đó vào quá trình đánh giá."],
        ["📚", "9. Thư viện Lừa đảo", "Xem các kịch bản lừa đảo phổ biến và đưa mẫu trực tiếp vào bộ phân tích."],
        ["🕘", "10. Lịch sử kiểm tra", "Xem lại các lần kiểm tra gần đây hoặc xóa lịch sử bất cứ lúc nào."],
        ["📥", "11. Thẻ cảnh báo", "Tạo và tải ảnh cảnh báo có mức rủi ro, dấu hiệu chính và mã QR để chia sẻ."],
        ["🌐", "12. 30+ ngôn ngữ", "Đổi ngôn ngữ ở phía trên; giao diện và kết quả sẽ theo ngôn ngữ đã chọn."],
        ["🌗", "13. Sáng / Tối", "Chuyển nhanh giữa Light Mode và Dark Mode."],
        ["🔐", "14. Bảo mật API", "Khóa Gemini nằm ở backend/Render, không nằm trong JavaScript công khai của trình duyệt."]
      ],
      warningTitle: "Lưu ý quan trọng",
      warningText: "ScamCheck hỗ trợ nhận diện nguy cơ nhưng không thể đảm bảo chính xác 100%. Không gửi OTP, mật khẩu, PIN hoặc thông tin tài chính cho người lạ. Với trường hợp nghiêm trọng, hãy liên hệ ngân hàng hoặc cơ quan chức năng.",
      libraryButton: "📚 Xem Thư viện",
      startButton: "🔍 Bắt đầu kiểm tra",
      closeLabel: "Đóng hướng dẫn"
    };
  }

  if (currentLanguage === "en") {
    return {
      triggerTitle: "New here?",
      triggerSubtitle: "How to use ScamCheck",
      mini: "SCAMCHECK GUIDE",
      title: "👋 Welcome to ScamCheck",
      intro: "An A–Z guide to checking messages, images, QR codes, links, and what to do after a suspected scam.",
      quickTitle: "Start in 3 steps",
      quickIntro: "A normal check only takes a few seconds.",
      steps: [
        ["Add the suspicious content", "Paste a message or upload an image / QR code."],
        ["Press “Check now”", "ScamCheck sends the evidence to Gemini for risk and scam-sign analysis."],
        ["Read the result & respond", "Review the risk level, Detective, Psychology Guide, and Emergency Helper."]
      ],
      fullTitle: "Full guide",
      fullIntro: "The main ScamCheck features.",
      features: [
        ["💬", "1. Message analysis", "Paste or type suspicious content and press “Check now”."],
        ["🚦", "2. Risk level", "Results are classified as Safe, Suspicious, or Dangerous."],
        ["🕵️", "3. DETECTIVE", "Analyzes technical clues, unusual wording, OTP requests, impersonation, domains, and suspicious links."],
        ["🧠", "4. PSYCHOLOGIST", "Explains how fear, urgency, trust, authority, excitement, or reward pressure may be used to manipulate the recipient."],
        ["🚨", "5. HELPER", "Provides next steps for no action yet, clicked link, transferred money, or shared OTP/code."],
        ["🔗", "6. Link inspection", "Assesses URLs and attempts to resolve shortened links such as Bit.ly when possible."],
        ["🖼️", "7. Image analysis", "Upload a screenshot or suspicious image for Gemini to read and assess."],
        ["▦", "8. QR analysis", "ScamCheck decodes QR content when possible and includes the destination or text in the assessment."],
        ["📚", "9. Scam Library", "Browse common scam scenarios and send examples directly to the analyzer."],
        ["🕘", "10. Check history", "Review recent checks or clear the stored history whenever you want."],
        ["📥", "11. Warning card", "Create a downloadable warning image with the risk result, major signs, and a QR code."],
        ["🌐", "12. 30+ languages", "Choose a language at the top; the interface and results follow the selected language."],
        ["🌗", "13. Light / Dark", "Switch between Light Mode and Dark Mode."],
        ["🔐", "14. API security", "The Gemini credential stays on the backend/Render instead of public browser JavaScript."]
      ],
      warningTitle: "Important notice",
      warningText: "ScamCheck supports risk recognition but cannot guarantee 100% accuracy. Never share OTPs, passwords, PINs, or financial information with strangers. Contact your bank or the appropriate authority for serious incidents.",
      libraryButton: "📚 Open Scam Library",
      startButton: "🔍 Start checking",
      closeLabel: "Close guide"
    };
  }

  // For every other language, reuse the already bundled static interface
  // translations. This keeps the guide language-homogeneous even offline.
  const selectedLanguageName =
    document.getElementById("language-select")?.selectedOptions?.[0]?.textContent?.trim() ||
    currentLanguage;

  return {
    triggerTitle: "👋 ScamCheck",
    triggerSubtitle: t("analyzeTab"),
    mini: "SCAMCHECK",
    title: `👋 ScamCheck · ${selectedLanguageName}`,
    intro: `${t("analyzeTab")} · ${t("imageAnalyzerTitle")} · ${t("linkCheck")} · ${t("rescue")}`,
    quickTitle: t("analyzeTab"),
    quickIntro: `${t("messagePlaceholder")} → ${t("analyzeButton")}`,
    steps: [
      [t("messagePlaceholder"), t("samplesLabel")],
      [t("analyzeButton"), t("loadingDetective")],
      [t("riskLevel"), `${t("recommendedActions")} · ${t("rescue")}`]
    ],
    fullTitle: t("analyzeTab"),
    fullIntro: `${t("detective")} · ${t("psychologist")} · ${t("rescue")}`,
    features: [
      ["💬", `1. ${t("analyzeTab")}`, `${t("messagePlaceholder")} → ${t("analyzeButton")}`],
      ["🚦", `2. ${t("riskLevel")}`, `${t("safe")} · ${t("suspicious")} · ${t("dangerous")}`],
      ["🕵️", `3. ${t("detective")}`, t("detectedSigns")],
      ["🧠", `4. ${t("psychologist")}`, t("manipulation")],
      ["🚨", `5. ${t("rescue")}`, t("rescueIntro")],
      ["🔗", `6. ${t("linkCheck")}`, `${t("resolvedLink")} · ${t("unresolvedLink")}`],
      ["🖼️", `7. ${t("imageAnalyzerTitle")}`, t("imageAnalyzerDescription")],
      ["▦", `8. QR`, t("qrFound")],
      ["📚", `9. ${t("libraryTitle")}`, t("libraryDescription")],
      ["🕘", `10. ${t("historyTitle")}`, `${t("clearHistory")} · ${t("noHistory")}`],
      ["📥", `11. ${t("shareCardTitle")}`, `${t("downloadImage")} · ${t("scanToOpen")}`],
      ["🌐", `12. 30+ · ${selectedLanguageName}`, selectedLanguageName],
      ["🌗", `13. ${t("themeDark")} / ${t("themeLight")}`, `${t("themeDark")} · ${t("themeLight")}`],
      ["🔐", "14. Gemini API", "Gemini · Render · API"]
    ],
    warningTitle: `⚠️ ${t("legalNotice")}`,
    warningText: t("legalNotice"),
    libraryButton: t("libraryTab"),
    startButton: t("analyzeButton"),
    closeLabel: t("clear")
  };
}

function renderUserGuide() {
  const copy = getUserGuideCopy();
  const titleEl = document.getElementById("guide-trigger-title");
  const subtitleEl = document.getElementById("guide-trigger-subtitle");
  const dialog = document.getElementById("user-guide-dialog");

  if (titleEl) titleEl.textContent = copy.triggerTitle;
  if (subtitleEl) subtitleEl.textContent = copy.triggerSubtitle;
  if (!dialog) return;

  dialog.innerHTML = `
    <div class="user-guide-header">
      <div>
        <span class="guide-mini-label">${escapeHtml(copy.mini)}</span>
        <h2 id="guide-title">${escapeHtml(copy.title)}</h2>
        <p>${escapeHtml(copy.intro)}</p>
      </div>
      <button type="button" class="guide-close" onclick="closeUserGuide()" aria-label="${escapeHtml(copy.closeLabel)}">×</button>
    </div>

    <section class="guide-quick-start">
      <div class="guide-section-title">
        <span>⚡</span>
        <div>
          <h3>${escapeHtml(copy.quickTitle)}</h3>
          <p>${escapeHtml(copy.quickIntro)}</p>
        </div>
      </div>
      <div class="quick-step-grid">
        ${copy.steps.map((step, index) => `
          <div class="quick-step">
            <span class="quick-step-number">${index + 1}</span>
            <div>
              <strong>${escapeHtml(step[0])}</strong>
              <p>${escapeHtml(step[1])}</p>
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <section>
      <div class="guide-section-title">
        <span>🧭</span>
        <div>
          <h3>${escapeHtml(copy.fullTitle)}</h3>
          <p>${escapeHtml(copy.fullIntro)}</p>
        </div>
      </div>
      <div class="guide-feature-grid">
        ${copy.features.map(feature => `
          <article class="guide-feature-card">
            <div class="guide-feature-icon">${feature[0]}</div>
            <div>
              <h4>${escapeHtml(feature[1])}</h4>
              <p>${escapeHtml(feature[2])}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="guide-important">
      <div class="guide-important-icon">⚠️</div>
      <div>
        <strong>${escapeHtml(copy.warningTitle)}</strong>
        <p>${escapeHtml(copy.warningText)}</p>
      </div>
    </section>

    <div class="guide-footer">
      <button type="button" class="guide-secondary-btn" onclick="openScamLibraryFromGuide()">
        ${escapeHtml(copy.libraryButton)}
      </button>
      <button type="button" class="guide-primary-btn" onclick="startScamCheckFromGuide()">
        ${escapeHtml(copy.startButton)}
      </button>
    </div>
  `;
}

// =====================================================
// USER GUIDE
// =====================================================

function openUserGuide() {
  const modal = document.getElementById("user-guide-modal");

  if (!modal) return;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

  const closeButton = modal.querySelector(".guide-close");

  if (closeButton) {
    setTimeout(() => closeButton.focus(), 50);
  }
}


function closeUserGuide() {
  const modal = document.getElementById("user-guide-modal");

  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}


function handleGuideBackdrop(event) {
  if (event.target.id === "user-guide-modal") {
    closeUserGuide();
  }
}


/* ESC closes guide */
document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeUserGuide();
  }

});


function startScamCheckFromGuide() {

  closeUserGuide();

  if (typeof switchTab === "function") {
    switchTab("analyzer");
  }

  setTimeout(() => {

    const messageBox =
      document.getElementById("message");

    if (messageBox) {

      messageBox.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      messageBox.focus();

    }

  }, 200);

}


function openScamLibraryFromGuide() {

  closeUserGuide();

  if (typeof switchTab === "function") {
    switchTab("library");
  }

  setTimeout(() => {

    const library =
      document.getElementById("tab-library");

    if (library) {

      library.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  }, 200);

}
