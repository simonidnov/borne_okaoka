var utilities = {
    colorLuminance : function(hex, lum) {
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
        }
        lum = lum || 0;
        var rgb = "#", c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i*2,2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00"+c).substr(c.length);
        }
        return rgb;
    }
}

var colors = {
    "orange":"#FF821D",
    "yellow":"#FFCF00",
    "lighblue":"#33CAD2",
    "blue":"#042367",
    "fblue":"#0095A7",
    "sblue":"#465FC4",
    "green":"#44AC34",
    "dgreen":"#008274",
    "purple":"#612B9B",
    "pink":"#E41694",
    "red":"#DA0036",
    "maroon":"#784217",
    "grey":"#7D868B",
    "black":"#000000"
}