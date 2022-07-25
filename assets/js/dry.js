
var map2 = {
    DPY001:"HURRACANS",
    DPY002:"TECH_DUO",
    DPY003:"Einstein Coders",
    DPY005:"Spartans 300",
    DPY006:"GLOBAL CHALLENGERS",
    DPY007:"TEAM LEGENDS",
    DPY008:"ProCluster",
    DPY009:"RK CHALLENGERS",
    DPY010:"EPIC SQUAD",
    DPY011:"FUTURE STARS",
    DPY012:"KPGU EE",
    DPY013:"KPGU",
    DPY014:"Python Killer",
    DPY016:"Python Nuv1",
    DPY017:"Pythakon NUV-2",
    DPY018:"Pythakon NUV-3",
    DPY019:"Pythakon Nuv 3",
    DPY020:"THUNDERBOLT",
    DPY021:"Straw Hat Coders",
    DPY022:"Minami Kaze",
    DPY023:"Techsquad",
    DPY024:"PEAKY BLINDERS",
    DPY025:"TEAM ROLEX",
    DPY026:"Phantoms",
    DPY027:"The Equalizers",
    DPY028:"Team Anarok",
    DPY029:"Asu Team ",
    DPY030:"Base Bombers ",
    DPY031:"Mind Sight ",
    DPY032:"The unbeatables",
    DPY033:"The Booleans",
    DPY034:"comp crew",
    DPY035:"BrownMunde",
    DPY036:"4-Zero-4",
    DPY037:"Sparkers",
    DPY038:"META4",
    DPY039:"Extreme Mutants",
    DPY040:"TEaM1",
    DPY041:"Kick",
    DPY043:"The Ruminators",
    DPY044:"CodeSquare",
    DPY045:"PotterHeads",
    DPY046:"PyStark",
    DPY047:"Devisers",
    DPY048:"PyScripters",
    DPY049:"Gucci Gang",
    DPY050:"Railway Accident Prevention",
    DPY051:"MAPS",
    DPY052:"Trouble Shouters",
    DPY053:"Team nothing ",
    DPY054:"Dominator Coders",
    DPY055:"Code Crackers - CC",
    DPY056:"Revolutionary",
    DPY057:"crazy creators ",
    DPY058:"Code smashers",
    DPY059:"Code Wizards",
    DPY060:"Ananth",
    DPY061:"The Sheldonators",
    DPY062:"GROCOAT",
    DPY063:"Spyic",
    DPY064:"Blueprint ",
    DPY065:"HackShop",
    DPY066:"Binary Brains",
    DPY067:"Centaurs",
    DPY068:"Geeky Nerds",
    DPY069:"Ascent",
    DPY070:"Errors by Night",
    DPY071:"Cyber Husters",
    DPY072:" Hack the Tech",
    DPY073:"BitByBit",
    DPY074:"BREEZE",
    DPY076:"Team Kraken",
    DPY077:"Sigma Geeks",
    DPY078:"Smart Attendees",
    DPY079:"Pixels",
    DPY080:"Python worriors",
    DPY081:"Tech Bees",
    DPY082:"Tech Wizard",
    DPY083:"Pyrates",
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
