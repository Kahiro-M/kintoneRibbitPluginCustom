/**
 * kintoneのrabbitのカレンダープラグインで表示される[月]を初期状態にする
 **/

kintone.events.on(['app.record.index.show'], (event) => {
    console.log('app.record.index.show')
    // rabbitのプラグインで表示される[月]を初期状態にする
    if($('div#ribbit-scheduler').length > 0){
      console.log('rabbitのプラグインで表示される[月]を最初にクリックします');
      // クリック処理が実行されるまで、50ms = 0.05sec毎にクリック処理を実行
      $(function(){
        let clickedFlg = false
        let timerId = setInterval(function(){
            let monthButton = document.getElementsByClassName('fc-dayGridMonth-button');
            if(monthButton.length > 0 && clickedFlg == false){
              console.log('rabbitのプラグインで表示される[月]を最初にクリック');
              monthButton[0].click();
              clickedFlg = true
            }
        },50);
        setTimeout(() => {
          clearInterval(timerId);
          console.log('rabbitのプラグインで表示される[月]を最初にクリック終了');
        }, 5000);
      });
    }
    return event;
  });