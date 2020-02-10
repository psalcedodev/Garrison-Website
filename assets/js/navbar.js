var feed2 = new Instafeed({
    target: "instafeed-gallery",
    get: "user",
    userId: "7312647104",
    limit: 8,
    resolution: "standard_resolution",
    accessToken: "7312647104.1677ed0.aad278e9b7ff4f449a3aee9d4fe29152",
    sortBy: "most-recent",
    template: ' <img src="{{image}}" />'
});
feed2.run();

var feed = new Instafeed({
    target: "instafeed-footer",
    get: "user",
    userId: "7312647104",
    limit: 9,
    resolution: "standard_resolution",
    accessToken: "7312647104.1677ed0.aad278e9b7ff4f449a3aee9d4fe29152",
    sortBy: "most-recent",
    template:
        '<div class="instagram-img" style="background-image: url({{image}})"><a title="" target="_blank" href="{{link}}"><i class="fab fa-instagram"></i></a></div>'
});
feed.run();
