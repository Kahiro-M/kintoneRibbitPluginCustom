/**
 * kintoneのrabbitのカレンダープラグインで表示される「イベントのタイトル」を非表示にする
 **/

kintone.events.on(['app.record.index.show'], (event) => {
    console.log('app.record.index.show')
    // rabbitのプラグインで表示される「イベントのタイトル」を非表示にする
    if($('div#ribbit-scheduler').length > 0){
      console.log('rabbitのプラグインで表示される「イベントのタイトル」を非表示にします');
      // 100ms = 0.1sec毎に非表示処理を実行
      $(function(){
        setInterval(function(){
            $('div label.MuiFormLabel-root:contains("イベントのタイトル")').parent().hide()
        },100);
      });
    }
    return event;
  });