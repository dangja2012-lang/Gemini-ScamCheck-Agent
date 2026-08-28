// ScamCheck v10 offline scam-library localization.
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
