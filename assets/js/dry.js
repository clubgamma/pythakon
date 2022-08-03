
var map2 = {
DYP001:	"PyScripters",
DYP002:	"BrownMunde",
DYP003:	"Team nothing ",
DYP004:	"Spartans 300",
DYP005:	"Techsquad",
DYP006:	"EPIC SQUAD",
DYP007:	"TEAM LEGENDS",
DYP008:	"Extreme Mutants",
DYP009:	"PEAKY BLINDERS",
DYP010:	"GLOBAL CHALLENGERS",
DYP011:	"RK CHALLENGERS",
DYP012:	"TECH_DUO",
DYP013:	"FUTURE STARS",
DYP014:	"HURRACANS",
DYP015:	"TEAM ROLEX",
DYP016:	"ProCluster",
DYP017:	"Dominator Coders",
DYP018:	"Code Wizards",
DYP019:	"Tech Wizard",
DYP020:	"Pyrates",
DYP021:	"Python worriors",
DYP022:	" Hack the Tech",
DYP023:	"crazy creators ",
DYP024:	"PyStark",
DYP025:	"4-Zero-4",
DYP026:	"Sparkers",
DYP027:	"The Ruminators",
DYP028:	"CodeSlayers",
DYP029:	"Trouble Shouters",
DYP030:	"Devisers",
DYP031:	"Tech geeks",
DYP032:	"Straw Hat Coders",
DYP033:	"SOMS CODER",
DYP034:	"TEaM1",
DYP035:	"The Sheldonators",
DYP036:	"Sigma Geeks",
DYP037:	"Mind Sight ",
DYP038:	"Binary Brains",
DYP039:	"Net Surfers",
DYP040:	"Base Bombers ",
DYP041:	"GROCOAT",
DYP042:	"Code smashers",
DYP043:	"Slect ",
DYP044:	"Minami Kaze",
DYP045:	"Einstein Coders",
DYP046:	"The One",
DYP047:	"Cyber Husters",
DYP048:	"Team Kraken",
DYP049:	"Binary Brains",
DYP050:	"Railway Accident Prevention",
DYP051:	"Kick",
DYP052:	"Smart Attendees",
DYP053:	"Pixels",
DYP054:	"The Booleans",
DYP055:	"KPGU",
DYP056:	"KPGU EE",
DYP057:	"python killer",
DYP058:	" Kpgu ",
DYP059:	"Pycore Healers",
DYP060:	"The Equalizers",
DYP061:	"Pythakon Nuv 3",
DYP062:	"Python Nuv1",
DYP063:	"Pythakon NUV-3",
DYP064:	"Pythakon NUV-2",
DYP065:	"Binary Brains",
DYP066:	"Binary Beasts",
DYP067:	"Tech Fantome",
DYP068:	"Phantoms",
DYP069:	"Team Anarok",
DYP070:	"CodeSquare",
DYP071:	"PotterHeads",
DYP072:	"MAPS",
DYP073:	"Alohomora ",
DYP074:	"The unbeatables",
DYP075:	"Error 404 Found",
DYP076:	"Team x",
DYP077:	"Gucci Gang",
DYP078:	"Asu Team ",
DYP079:	"Revolutionary",
DYP080:	"CodeMonkey",
DYP081:	"Vikings",
DYP082:	"Black Shadow ",
DYP083:	"Dreamers",
DYP084:	"Data Pirates",
DYP085:	"Study buddies ",
DYP086:	"Royal I.T.",
DYP087:	"Brainstormers",
DYP088:	"Bug Busters 🐛🔥",
DYP089:	"META4",
DYP090:	"BREEZE",
DYP091:	"Code Crackers - CC",
DYP092:	"Errors by Night",
DYP093:	"BitByBit",
DYP094:	"Tech Bees",
DYP095:	"Hackshop",

    
    };


    var row_counter=1;
    var sizeofteams=Object.keys(map2).length/3;
    var row_length=parseInt(sizeofteams,10);
    console.log(row_length);
    for (var key in map2) {
        var newRowContent="<tr><td>"+key+"</td><td>"+map2[key]+"</td></tr>";
        if (row_counter<=row_length) {
            $(newRowContent).appendTo($("#mtab1"));
        }else{
            if (row_counter<=row_length*2) {
                $(newRowContent).appendTo($("#mtab2"));
                
            }else{
                
                $(newRowContent).appendTo($("#mtab3"));
            }
        }

        row_counter = row_counter+1;
    // console.log(key + map2[key]);
}
