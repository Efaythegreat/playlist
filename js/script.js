

let songNames = [
  "Arashi no Saxophone 5",
  "Jingle Jangle Jingle",
  "Trainwreck of Electro Swing"
];

let artists = [
  "King of Fighters",
  "Kay Kiser and His Orchestra",
  "Pascal Michael Stiefel"
];

let songLengths = ["5:43", "3:17", "4:07"];

let links = [
  "https://www.youtube.com/watch?v=vwqpjLfmjeQ",
  "https://www.youtube.com/watch?v=1DD_NCM_RJs",
  "https://www.youtube.com/watch?v=2c1iSpk3u1A"
];

let images = [
  "https://i.ytimg.com/vi/mIJtBZL-RaE/sddefault.jpg",
  "https://i.ytimg.com/vi/1DD_NCM_RJs/hqdefault.jpg",
  "https://i1.sndcdn.com/artworks-000124149113-q5mjuo-t500x500.jpg"
];


$(".hide").click(function(){
  $(".inputz").toggle();
  
  if($(".hide").text() == "hide"){
    $(".hide").text("show");
  }else{
    $(".hide").text("hide");
  }
});

for (let a of images){
 
  $(".image").append("<p><img  src="+a+"></p>");
  console.log(a)
};

for (let a of songNames){
 
  $(".songName").append("<p class='item'>"+a+"</p>");
  
  console.log(a)
};

for (let a of artists){
  $(".artist").append("<p class='item'>"+a+"</p>");
  
}

for (let a of songLengths){
  $(".songLength").append("<p class='item'>"+a+"</p>");
  
}

for (let a of links){
  $(".link").append("<a href='"+a+"'><p class='item'>link</p></a>");
}



$(".create").click(function(){
  
  
  
});