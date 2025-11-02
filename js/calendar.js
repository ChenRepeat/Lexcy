$(document).ready(function(){
    let currentDate = new Date();
    let selectedDates = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let isCalendarOpen = false;
    let roomPrice = $('#roomPrice').val();
    let totalRooms = $('#totalRooms').val();
    
    function generateCalendar(year, month) {
        const $calendar = $('#calendar');
        const $monthYear = $('#monthYear');
        $calendar.find('tr:not(:first)').remove();
        $monthYear.text(`${year}年 ${month + 1}月`);
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        let date = 1;

        //月曆生成
        for(let i = 0; i < 6; i++) {
            const weekrow = $('<tr></tr>');
            
            for(let j = 0; j < 7; j++) {
                const dateBlock = $('<td></td>');
                if(i === 0 && j < firstDay.getDay()) {
                    dateBlock.html('');
                }
                else if(date <= lastDay.getDate()) {
                    dateBlock.text(date).addClass('day');
                    
                    const cellDate = new Date(year, month, date);
                    cellDate.setHours(0, 0, 0, 0);
                    if(cellDate < today) {
                        dateBlock.addClass('disabled');
                    } else {
                        dateBlock.data('date', {year, month, day: date});
                        dateBlock.on('click', function() {
                            const dateData = $(this).data('date');
                            selectDate(dateData.year, dateData.month, dateData.day);
                        });
                    }
                            
                    date++;
                }

                else {
                    dateBlock.html('');
                }
                weekrow.append(dateBlock);
            }
            $calendar.append(weekrow);
            if(date > lastDay.getDate()) break;
        }
        function updateSelectedDisplay() {
          const dateBlock = $('#calendar td.day');
          dateBlock.removeClass('selected');
          // 更新顯示文字
          $('#date1').text(selectedDates[0] || '請選擇日期');
          $('#date2').text(selectedDates[1] || '請選擇日期');
          $('#date1').removeClass('noInfo')
          if(selectedDates.length == 2) {
            const url = `room-booking-confirm.html?startDay=${selectedDates[0]}&endDay=${selectedDates[1]}&roomPrice=${roomPrice}&totalRooms=${totalRooms}`;
            $('#resultLink').attr('href', url);
          } else {
            $('#resultLink').attr('href', '#btn-list');
          }
            // 僅標記第一天和最後一天
            if(selectedDates.length > 0) {
                dateBlock.each(function() {
                    const cell = $(this);
                    if(!cell.hasClass('disabled')) {
                        const dateData = cell.data('date');
                        if(dateData) {
                            const day = dateData.day;
                            const cellDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                            const cellDateString = `${cellDate.getFullYear()}-${String(cellDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

                            // 只標記第一個和最後一個日期
                            if(selectedDates.indexOf(cellDateString) !== -1) {
                                cell.addClass('selected');
                            }
                        }
                    }
                });
            }

        }
    updateSelectedDisplay();
    function selectDate(year, month, day) {
        const selectedDate = new Date(year, month, day);
        selectedDate.setHours(0, 0, 0, 0);
        
        // 檢查是否為今天之前的日期
        if(selectedDate < today) return;
        
        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        
        // 如果已經選擇了這個日期，取消選擇
        const index = selectedDates.indexOf(dateString);
        if(index !== -1) {
            selectedDates.splice(index, 1);
        } else {
            // 如果已經有2個日期，移除第一個
            if(selectedDates.length === 2) {
                selectedDates.shift();
            }
            selectedDates.push(dateString);
        }
        
        // 排序日期
        selectedDates.sort();
        
        // 檢查第一個日期是否比第二個日期晚，如果是則清除
        if(selectedDates.length === 2 && selectedDates[0] > selectedDates[1]) {
            selectedDates = [];
        }
        

        updateSelectedDisplay();
    }
    $('#roomPrice').click(function(){
      roomPrice = $(this).val();
      updateSelectedDisplay();
    })
    $('#totalRooms').click(function(){
      totalRooms = $(this).val();
      updateSelectedDisplay();
    })
  }
    $('#resultBtn').click(function(){
       if(selectedDates.length < 2){
        $('#date1').addClass('noInfo')
       }
    }
    )
    $('#rightArrow').click(function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    });

    $('#leftArrow').click(function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    });
    $('#calendar-btn').click(function() {
        isCalendarOpen = !isCalendarOpen;
        if(isCalendarOpen) {
            $('.calenderCase').show();
            isCalendarOpen = true;
        } else {
            $('.calenderCase').hide();
            isCalendarOpen = false;
        }
    });
    $('.date-label').on('click', function() {
        isCalendarOpen = !isCalendarOpen;
        if(isCalendarOpen) {
            $('.calenderCase').show();
            isCalendarOpen = true;
        } else {
            $('.calenderCase').hide();
            isCalendarOpen = false;
        }
    });
    $('.close-btn').on('click', function() {
        $('.calenderCase').hide();
        isCalendarOpen = false;
    });

    $('.calenderCase').hide();
    
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth())
    $('.day').each(function(){
      if ($(this).text()!== '' && !$(this).hasClass('disabled')) {
        $(this).hover(
          function() { $(this).addClass('dayHover') },
          function() { $(this).removeClass('dayHover') }
        )
      }
    })
})