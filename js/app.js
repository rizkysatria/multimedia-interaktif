$(document).ready(function () {

  var firstTimeLoad = true;
  //your code here
  hideAllContent();

  //action click button profile
  document.getElementById("btnProfile").addEventListener("click", function() {
  	firstTimeLoad = false;
  	changeTitle("PROFILE");
  	hideAllContent();
  	showContent("contentProfile");
  });

  //action click button kamus basa
  document.getElementById("btnKamusBasa").addEventListener("click", function() {
  	firstTimeLoad = false;
  	changeTitle("KAMUS ASAM BASA");
  	hideAllContent();
  	showContent("contentKamus");
  });

  //action click button kamus basa
  document.getElementById("btnLabAsamBasa").addEventListener("click", function() {
  	firstTimeLoad = false;
  	changeTitle("Laboratorium Asam Basa");
  	hideAllContent();
  	showContent("contentLabAsamBasa");
  });

  //action click kelas pintar
  document.getElementById("btnKelasPintar").addEventListener("click", function() {
  	firstTimeLoad = false;
  	changeTitle("Kelas Pintar");
  	hideAllContent();
  	showContent("contentKelasPintar");
  });

  function hideAllContent() {
  	document.getElementById("contentKamus").style.display = 'none';
  	document.getElementById("contentLabAsamBasa").style.display = 'none';
  	document.getElementById("contentKelasPintar").style.display = 'none';
  	document.getElementById("contentProfile").style.display = !firstTimeLoad ? 'none' : 'block';
  }

  function showContent(id) {
  	if (document.getElementById(id).style.display == "none") {
  		document.getElementById(id).style.display = "block";
  	}
  }

  function hideContent(id) {
  	if (document.getElementById(id).style.display != "none") {
  		document.getElementById(id).style.display = "none";
  	}
  }

  function isContentShow(id) {
  	return document.getElementById(id).style.display == 'none' ? false : true; 
  }

  function changeTitle(title) {
  	document.getElementById("headerContent").innerText = title; 
  }
});