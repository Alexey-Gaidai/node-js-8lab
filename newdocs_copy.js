var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throwerr;
  console.log("Database connected!");
  var dbo = db.db("test");
  dbo.collection("posts")
    .insertMany([{
        "title": "Билайн пытается принудительно сменить тариф и повысить его на 20%. Законно ли?",
        "author": "Semen",
        "text": "История о том, как Билайн пытается принудительно перевести клиента на более дорогой тариф (+20% к текущей цене). Законно ли это и почему Билайн нарушает действующий договор. Разбираемся, как абоненту защитить свои права перед оператором.",
        review: [{
          "name": "Viktor",
          "mark": "5",
          "reviewMessage": "Крутая статья емае"
        }],
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "title": "Почему свет и темнота на фотографии — это сложно",
        "author": "PatientZero",
        "text": "Мы привыкли считать, что фотографии просто объективно фиксируют освещение и отображают его, однако это не так. Оттенок фотографии отражает множество решений, сделанных фотографом и производителем камеры. Сегодня фотографии, снимаемыми нашими мобильными телефонами, становятся всё лучше и лучше, реализуя всё более сложные (но сокрытые от нас) эстетические решения.",
        review: [{
          "name": "Sanya",
          "mark": "10",
          "reviewMessage": "Отличная статья, спасибо за информацию"
        }],
        "createdAt": new Date(),
        "updatedAt": new Date()
      }, {
        "title": "Пространственный анализ тренировок",
        "author": "denis_afanasyev",
        "text": "В этой статье я расскажу как визуализировать пространственные данные одной или нескольких тренировок одновременно на интерактивной карте, как отобразить значение показателя скорости на треке тренировки и как определить самое частое место тренировок за период времени.",
        review: [{
          "name": "Александр",
          "mark": "2",
          "reviewMessage": "Ничего не понял, но очень интересно"
        }],
        "createdAt": new Date(),
        "updatedAt": new Date()
      }, {
        "title": "Клептография и криптовирология",
        "author": "Tituch",
        "text": "В современной криптографии широко используются асимметричные алгоритмы шифрования и электронной подписи. Большинство их реализаций имеет зарубежное происхождение и вызывает обоснованные сомнения в надёжности.Насколько можно доверять средствам шифрования, призванным защищать вашу приватность и коммерческую тайну? Нет ли в популярных криптографических продуктах скрытых лазеек, оставленных разработчиками в корыстных целях или под давлением спецслужб?",
        review: [{
          "name": "makkarpov",
          "mark": "10",
          "reviewMessage": "То ли дело Кузнечик со своим отечественным бекдором - это, как известно, совсем-совсем другое."
        }],
        "createdAt": new Date(),
        "updatedAt": new Date()
      }, {
        "title": "Цифровая валюта (CBDC) спасение или очередная утопия?",
        "author": "OSOM",
        "text": "CBDC (цифровая валюта) станет реальностью и станет важной и, возможно, доминирующей формой цифровой валюты в будущем. Суть цифровых валют — это определенность, поскольку глобальное развитие финансов требует инноваций от центральных банков. Преимущества для центральных банков очевидны: более жесткий контроль, выдающиеся возможности отслеживания и мониторинга, способность быстро реализовывать меры денежно-кредитной политики и способность противостоять растущему влиянию финтеха и финансовых институтов.  Тем не менее, у этих новых инноваций есть и темная сторона.",
        review: [{
          "name": "Sancho_SP",
          "mark": "9",
          "reviewMessage": "Все эти криптовалюты - не валюты на самом деле, а товары. Сама суть существующих сегодня почти всех государственных денег в фактически бесплатной и монопольной эмиссии, а выпуск того же биткоина по затратам сопоставим с ценой самого биткоина. Он в таком виде совершенно не нужен государствам)Использование всяких блокчейнов в банковской сфере имеет только одно преимущество: возможность моментально отследить весь путь платежей со счёта А до счёта Б через любое число транзитных счетов. В остальном лишь лишние затраты."
        }],
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ], function(err, res) {
      if (err) throwerr;
      console.log("Documents inserted");
      db.close();
    });
});


