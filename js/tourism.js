const cardsData = {
  1: {
      title: '俊輝燒烤',
      imgurl: './img/foodpic-1.png',
      content: `俊輝燒烤以新鮮食材與道地風味聞名，是在地人及遊客喜愛的聚餐去處。店內提供多樣海鮮與肉類燒烤，食材講究、火候恰到好處，搭配特製醬料更添風味。環境寬敞舒適，氣氛熱鬧而親切，無論是家庭聚會或好友小酌都十分適合。俊輝燒烤以實在美味與親民價格，成為金門夜晚品味美食的絕佳選擇。`,
      located: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1816.2307239579716!2d118.3144631554231!3d24.434770631246696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3414a35ec4bbee5b%3A0xcc9e1c4037b0076c!2z6YeR6ZaA5oiw5Zyw576O6aOfLeS_iui8neeHkueDpC3ph5Hln47lupc!5e0!3m2!1szh-TW!2stw!4v1761193629064!5m2!1szh-TW!2stw" width="1200" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    },
  2: {
      title: '丸樂汽水',
      imgurl: './img/tour-detail-pic1.png',
      content: `丸樂汽水是金門極具懷舊風情的在地飲品品牌，以手工製作與獨特風味深受喜愛。採用天然原料調製，保留古早汽水的清爽口感與微甜滋味，喚起人們對純樸時光的記憶。瓶身設計復古可愛，成為旅客到金門必買的特色伴手禮。無論搭配餐點或單獨品嚐，丸樂汽水都能帶來沁涼愉悅的金門味道。`,
      located: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d540.0010474040173!2d118.24926398740168!3d24.427197561634614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34149915aefbac53%3A0xa33e9ae1fcc60423!2z6I-v5Y2X5rG95rC05bug772c6aCQ57SERElZ5rG95rC0!5e0!3m2!1szh-TW!2stw!4v1761193713856!5m2!1szh-TW!2stw" width="1200" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>` ,
    },
  3:{
      title: '夢酒館',
      imgurl: './img/tour-detail-pic1.png',
      content: `夢酒館是金門極具特色的風格酒吧，以溫馨氛圍與創意調酒聞名。店內融合復古與現代設計，燈光柔和、音樂悠揚，讓人能在夜色中放鬆小酌。主打金門高粱調酒與各式特調飲品，展現在地風味與獨特創意。無論是朋友聚會、情侶約會或旅人休憩，夢酒館都是感受金門夜生活魅力的理想去處。`,
      located: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227.03234963561698!2d118.31681871939035!3d24.432821387427058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3414a3a323bf37db%3A0x7e8a892c92c68fd7!2z5aSi6YWS6aSoIE1PSk8gfCDph5HploDphZLlkKcgKE1PSk8gQmFyIHwgS2lubWVuIEJhcik!5e0!3m2!1szh-TW!2stw!4v1761193804718!5m2!1szh-TW!2stw" width="1200" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
  4: {
      title: '東林北街黑糖剉冰',
      imgurl: './img/tour-detail-pic1.png',
      content: `東林北街黑糖剉冰是金門夏日人氣甜品店，以香濃黑糖與綿密剉冰聞名。採用手炒黑糖熬製糖漿，香氣濃郁不膩口，搭配紅豆、芋圓、粉粿等多樣配料，口感層次豐富。店面氛圍親切懷舊，讓人彷彿回到純樸年代。無論炎炎夏日或午後閒暇，來一碗黑糖剉冰，清涼消暑又療癒，是在地人與旅客都喜愛的金門甜點代表。`,
      located: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d381.83199315852266!2d118.24882191009812!3d24.42931493034282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x341499189e33e633%3A0xac135c50bee06ce2!2z5p2x5p6X5YyX6KGX6buR57OW5YmJ5Yaw!5e0!3m2!1szh-TW!2stw!4v1761193888566!5m2!1szh-TW!2stw" width="1200" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
  5: {
      title: '經武酒窖',
      imgurl: './img/tour-detail-pic1.png',
      content: `經武酒窖位於金門，為結合酒文化與休閒體驗的特色空間。以金門高粱為主題，展出釀造歷程與酒器收藏，讓遊客深入了解在地釀酒工藝。酒窖環境別緻，融合復古與現代設計，並提供試飲與伴手禮選購。無論是品味高粱、感受香氣，或體驗金門獨特的酒文化氛圍，經武酒窖都是探索在地風情的絕佳去處。`,
      located: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1284.1397434189066!2d118.39410363198586!3d24.4474654405079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3414a54969d3f6ef%3A0xac84a9633aef02c6!2z6YeR6YWS5YWs5Y-4IOe2k-atpumFkueqlijpoJDntIQp!5e0!3m2!1szh-TW!2stw!4v1761193929111!5m2!1szh-TW!2stw" width="1200" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
  6:{
      title: '浯倆',
      imgurl: './img/tour-detail-pic1.png',
      content: `浯倆是一間坐落於金門的特色咖啡館，以結合在地文化與現代美學聞名。店名取自「浯島」之意，象徵金門人情與生活風景。空間設計溫潤簡約，融合老屋元素與文青氛圍，讓人感受悠閒時光。店內提供手沖咖啡、甜點與輕食，每一道皆展現對品質的堅持。無論是旅途中歇腳、與友人閒聊，或靜靜感受金門的慢節奏，浯倆都是理想的心靈休憩角落。`,
      located: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d454.0648794390387!2d118.31672749979874!3d24.432771346052323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3414a31d8e71d50b%3A0xe72eb53a8ce0aa8f!2z5rWv5YCG54mb6IKJ6bq1772c6YeR6ZaA5oiw5Zyw5ruL5ZGz772c6YeR6ZaA576O6aOf!5e0!3m2!1szh-TW!2stw!4v1761193961791!5m2!1szh-TW!2stw" width="1200" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
};

function getCardIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function innerDetail() {
    const cardId = getCardIdFromURL();
    const container = document.querySelector('#introduction');
    const locate = document.querySelector('#location');
    const pageTitle = document.querySelector('.tour-detail-banner');
    if (cardId && cardsData[cardId]) {
        const card = cardsData[cardId];
        pageTitle.innerHTML=`<h1>${card.title}</h1>`;
        container.innerHTML = `
            <img src="${card.imgurl}" alt="">
            <ul class="tour-words">
                
                <li><h5>${card.content}</h5></li>
            </ul>`;
        locate.innerHTML = `${card.located}`
    }
}

innerDetail();