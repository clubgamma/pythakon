
var map2 = {
    DPY001:	"HURRACANS",
    DPY002:	"TECH_DUO",
    DPY003:	"Einstein Coders",
    DPY004:	"Spartans 300",
    DPY005:	"GLOBAL CHALLENGERS",
    DPY006:	"TEAM LEGENDS",
    DPY007:	"ProCluster",
    DPY008:	"RK CHALLENGERS",
    DPY009:	"EPIC SQUAD",
    DPY010:	"FUTURE STARS",
    DPY011:	"KPGU EE",
    DPY012:	"KPGU",
    DPY013:	"python killer",
    DPY014:	"Python Nuv1",
    DPY015:	"Pythakon NUV-2",
    DPY016:	"Pythakon NUV-3",
    DPY017:	"THUNDERBOLT",
    DPY018:	"Straw Hat Coders",
    DPY019:	"Minami Kaze",
    DPY020:	"Techsquad",
    DPY021:	"PEAKY BLINDERS",
    DPY022:	"TEAM ROLEX",
    DPY023:	"Phantoms",
    DPY024:	"The Equalizers",
    DPY025:	"Team Anarok",
    DPY026:	"Asu Team",
    DPY027:	"Base Bombers",
    DPY028:	"Mind Sight",
    DPY029:	"The unbeatables",
    DPY030:	"The Booleans",
    DPY031:	"comp crew",
    DPY032:	"BrownMunde",
    DPY033:	"4-Zero-4",
    DPY034:	"Sparkers",
    DPY035:	"META4",
    DPY036:	"Extreme Mutants",
    DPY037:	"TEaM1",
    DPY038:	"Kick",
    DPY039:	"The Ruminators",
    DPY040:	"CodeSquare",
    DPY041:	"PotterHeads",
    DPY042:	"PyStark",
    DPY043:	"Devisers",
    DPY044:	"PyScripters",
    DPY045:	"Gucci Gang",
    DPY046:	"Railway Accident Prevention",
    DPY047:	"MAPS",
    DPY048:	"Trouble Shouters",
    DPY049:	"Team nothing",
    DPY050:	"Dominator Coders",
    DPY051:	"Code Crackers - CC",
    DPY052:	"Revolutionary",
    DPY053:	"crazy creators",
    DPY054:	"Code smashers",
    DPY055:	"Code Wizards",
    DPY056:	"Ananth",
    DPY057:	"The Sheldonators",
    DPY058:	"GROCOAT",
    DPY059:	"Spyic",
    DPY060:	"Blueprint",
    DPY061:	"HackShop",
    DPY062:	"Binary Brains",
    DPY063:	"Centaurs",
    DPY064:	"Geeky Nerds",
    DPY065:	"Ascent",
    DPY066:	"Errors by Night",
    DPY067:	"Cyber Husters",
    DPY068:	"Hack the Tech",
    DPY069:	"BitByBit",
    DPY070:	"BREEZE",
    DPY071:	"Team Kraken",
    DPY072:	"Sigma Geeks",
    DPY073:	"Smart Attendees",
    DPY074:	"Pixels",
    DPY075:	"Python worriors",
    DPY076:	"Tech Bees",
    DPY077:	"Tech Wizard",
    DPY078:	"Pyrates",
    
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
