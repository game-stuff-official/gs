if(typeof $ == "function"){
    $("#top-nav-holder").load("/gs/include/nav-bar.html")
    $("#footer-holder").load("/gs/include/footer.html")
    $("#outline-holder").load("/gs/include/hjson-outline.html")
}else{
    throw new Error("It appears you forgot to include jQuery.");
}
