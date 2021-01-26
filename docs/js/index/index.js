// 背景色をロードごとに変更するスクリプト
document.addEventListener("DOMContentLoaded", function() {
    const schmes = [
        "background-image: linear-gradient( 135deg, #FFF3B0 10%, #CA26FF 100%);",
        "background-image: linear-gradient( 135deg, #F0FF00 10%, #58CFFB 100%);",
        "background-image: linear-gradient( 135deg, #81FFEF 10%, #F067B4 100%);",
        "background-image: linear-gradient( 135deg, #EE9AE5 10%, #5961F9 100%);",
        "background-image: linear-gradient( 135deg, #C2FFD8 10%, #465EFB 100%);",
        "background-image: linear-gradient( 135deg, #FFA8A8 10%, #FCFF00 100%);"
    ];
    // 配列からランダムで値を選択
    let BGColor = schmes[ Math.floor( Math.random() * schmes.length ) ] ;
    console.log(BGColor);
    document.getElementById("body").style = BGColor;
 });