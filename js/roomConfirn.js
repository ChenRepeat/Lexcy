$(document).ready(function(){
  function getInformationFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      startDay: urlParams.get('startDay'),
      endDay: urlParams.get('endDay'),
      roomPrice: parseInt(urlParams.get('roomPrice')),
      totalRooms: parseInt(urlParams.get('totalRooms')),
      name: urlParams.get('firstName')+urlParams.get('lastName'),
      phone: urlParams.get('guestPhone'),
      mail: urlParams.get('guestEmail'),
      paymentOpt: urlParams.get('paymentOpt'),
      fullName : urlParams.get('guestName'),
    };
  }
  const dates = getInformationFromURL()
  const startDate = new Date(dates.startDay).getTime();
  const endtDate = new Date(dates.endDay).getTime();
  const totalRooms = dates.totalRooms;
  const roomPrice = dates.roomPrice;
  const secondsPerDay = 24 * 60 * 60 * 1000;
  const difDays =(endtDate - startDate)/secondsPerDay;
  const totalPrice = dates.roomPrice * difDays *totalRooms;
  const orderCost = Math.floor(totalPrice * 0.25);
  const guestName = dates.name;
  const guestEmail = dates.mail;
  const guestPhone = dates.phone;
  const paymentOpt = dates.paymentOpt;
  const fullName = dates.fullName;
  switch(roomPrice){
    case 2000 : 
      $('#roomName').text('望山居');
      $('.roompic-booking').attr('src','./img/room2-1.jpg')
      break;
    case 3999 : 
      $('#roomName').text('聞濤閣');
      $('.roompic-booking').attr('src','./img/room4-1.jpg');
      break;
    case 9800 : 
      $('#roomName').text('山海棠');
      $('.roompic-booking').attr('src','./img/roomall-1.jpg');
      break;
  }
  switch(paymentOpt){
    case 'credit' : $('#paymentOpt').text('信用卡付款');break;
    case 'linepay' : $('#paymentOpt').text('LINE Pay');break;
    case 'atm' : $('#paymentOpt').text('ATM 轉帳');break;
  }
  // <h標籤> 用
  $('#startDay').text(dates.startDay);
  $('#endDay').text(dates.endDay);
  $('#totalDays').text(`${difDays}晚`);
  $('#roomPrice').text(`NTD. ${dates.roomPrice}元/晚`);
  $('#totalPrice').text(`NTD. ${totalPrice}元`);
  $('#orderCost').text(`NTD. ${orderCost}元`)
  $('#totalRooms').text(`${totalRooms} 間`);
  $('#guestName').text(fullName);
  $('#guestPhone').text(guestPhone);
  $('#guestEmail').text(guestEmail);

  //input 用
  $('#guestEmail').val(guestEmail);
  $('#guestName').val(guestName);
  $('#guestPhone').val(guestPhone);


  $('#pinBtn').click(function(){
    $('.guest-mail').addClass('warningAct')
    $('#pin-text').addClass('warningAct')
    $('.payBtnList').addClass('warningAct')
  })

  $('#toPayment').click(function(){
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const guestEmail = $('#guestEmail').val();
    const guestPhone = $('#guestPhone').val();
    const pinInput = $('#pin-input').val();
    if(firstName != '' && lastName != '' && guestEmail != '' && guestPhone != '' && pinInput != ''){
      $('#toPayment').attr('href',`room-booking-pay.html?startDay=${dates.startDay}&endDay=${dates.endDay}&roomPrice=${roomPrice}&totalRooms=${totalRooms}&firstName=${firstName}&lastName=${lastName}&guestEmail=${guestEmail}&guestPhone=${guestPhone}`)
    }else{
      $(this).attr('href','#firstName')
      if(!firstName){$('.first-name').addClass('noInfo')};
      if(!lastName){$('.last-name').addClass('noInfo')};
      if(!guestEmail){$('.guest-mail').removeClass('warningAct').addClass('noInfo')};
      if(!guestPhone){$('.guest-phone').addClass('noInfo')};
      if(!pinInput){$('.guest-pin').addClass('noInfo')};
    }
  })
  $('#goPay').click(function(){
    const guestName = $('#guestName').val();
    const guestEmail = $('#guestEmail').val();
    const guestPhone = $('#guestPhone').val();
    const paymentOpt = $('input[name="payment"]:checked').val();
    
      if(guestName != '' && guestEmail != '' && guestPhone != ''){
        if($('.policy-section input[type="checkbox"]').is(':checked')){
          $('#goPay').attr('href',`room-booking-result.html?startDay=${dates.startDay}&endDay=${dates.endDay}&roomPrice=${roomPrice}&totalRooms=${totalRooms}&guestName=${guestName}&guestEmail=${guestEmail}&guestPhone=${guestPhone}&paymentOpt=${paymentOpt}`)
        }else{
          $('.policy-check').addClass('warningAct')
          $(this).attr('href','#payment-method')
        }
      }else{
        $('#goPay').attr('href','#payment-method')
        if(!guestName){$('#guestName').attr('placeholder','請確實填寫姓氏').addClass('colorRed')};
        if(!guestEmail){$('#guestEmail').attr('placeholder','請確實填寫信箱').addClass('colorRed')};
        if(!guestPhone){$('#guestPhone').attr('placeholder','請確實填寫電話').addClass('colorRed')};
      }
  })
})