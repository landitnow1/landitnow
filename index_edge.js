/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Land_It_APP_Background',
                display: 'block',
                type: 'image',
                rect: ['-37px', '-246px','652px','1159px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Land%20It%20APP%20Background.png",'0px','0px']
            },
            {
                id: 'Land_It_APP_BackgroundCopy2',
                display: 'block',
                type: 'image',
                rect: ['-37px', '-246px','652px','1159px','auto', 'auto'],
                opacity: 0.63985710470085,
                fill: ["rgba(0,0,0,0)",im+"Land%20It%20APP%20Background.png",'0px','0px']
            },
            {
                id: 'Landit_Logo_Black',
                display: 'block',
                type: 'image',
                rect: ['-244px', '-128px','1014px','1033px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Landit%20Logo%20Black.png",'0px','0px']
            },
            {
                id: 'Text2',
                display: 'none',
                type: 'text',
                rect: ['123px', '435px','auto','auto','auto', 'auto'],
                text: "LAND IT NOW",
                align: "left",
                font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', 50, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'fb',
                display: 'block',
                type: 'rect',
                rect: ['50', '566','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'gomaps',
                display: 'none',
                type: 'rect',
                rect: ['16', '222','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'map',
                display: 'none',
                type: 'rect',
                rect: ['24', '112','auto','auto','auto', 'auto']
            },
            {
                id: 'Land_It_Now_Link-06',
                display: 'none',
                type: 'image',
                rect: ['-31px', '34px','391px','78px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"Land%20It%20Now%20Link-06.png",'0px','0px']
            },
            {
                id: 'Text',
                display: 'none',
                type: 'text',
                rect: ['153px', '353px','auto','auto','auto', 'auto'],
                text: "Go to Google Maps",
                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text4',
                display: 'none',
                type: 'text',
                rect: ['203px', '208px','auto','auto','auto', 'auto'],
                text: "Up it with friends",
                align: "left",
                font: ['Lucida Console, Monaco, monospace', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text7',
                display: 'none',
                type: 'text',
                rect: ['84px', '386px','auto','auto','auto', 'auto'],
                text: "Weekend 10% off<br>Atlantic shrimp dish",
                align: "center",
                font: ['Georgia, Times New Roman, Times, serif', 50, "rgba(255,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Googlemapslogo2014',
                display: 'none',
                type: 'image',
                rect: ['116px', '338px','311px','311px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Googlemapslogo2014.png",'0px','0px']
            },
            {
                id: 'face',
                display: 'none',
                type: 'image',
                rect: ['69px', '555px','411px','175px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"face.jpg",'0px','0px']
            },
            {
                id: 'Up_It_Link3',
                display: 'none',
                type: 'image',
                rect: ['-469px', '670px','1633px','326px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Up%20It%20Link.png",'0px','0px'],
                transform: [[],[],[],['0.38215','0.38215']]
            },
            {
                id: 'bubba',
                display: 'none',
                type: 'image',
                rect: ['-95px', '-77px','784px','480px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bubba.jpg",'0px','0px'],
                transform: [[],[],[],['0.616','0.61601']]
            },
            {
                id: 'Text6',
                display: 'none',
                type: 'text',
                rect: ['111px', '158px','auto','auto','auto', 'auto'],
                text: "234 People up this",
                align: "left",
                font: ['\'Lucida Console\', Monaco, monospace', 37, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'volta1',
                display: 'none',
                type: 'rect',
                rect: ['11', '4','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'Land_It_Now_Link-06Copy',
                display: 'none',
                type: 'image',
                rect: ['37px', '324px','222px','69px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Land%20It%20Now%20Link-06.png",'0px','0px']
            },
            {
                id: 'Up_It_Link',
                display: 'none',
                type: 'image',
                rect: ['283px', '34px','390px','78px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"Up%20It%20Link.png",'0px','0px']
            },
            {
                id: 'Text3',
                display: 'block',
                type: 'text',
                rect: ['187px', '673px','auto','auto','auto', 'auto'],
                text: "Register by email",
                align: "left",
                font: ['\'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif', 21, "rgba(107,107,107,1.00)", "400", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'gomaps',
                symbolName: 'gomaps',
                autoPlay: {

                }
            },
            {
                id: 'map',
                symbolName: 'map'
            },
            {
                id: 'fb',
                symbolName: 'fb',
                autoPlay: {

                }
            },
            {
                id: 'volta1',
                symbolName: 'volta1'
            }
            ]
        },
    states: {
        "Base State": {
            "${_Land_It_APP_Background}": [
                ["style", "top", '-246px'],
                ["style", "display", 'block'],
                ["style", "height", '1159px'],
                ["style", "left", '-37px'],
                ["style", "width", '652px']
            ],
            "${_Up_It_Link3}": [
                ["style", "top", '670px'],
                ["transform", "scaleY", '0.38215'],
                ["transform", "scaleX", '0.38215'],
                ["style", "left", '-469px'],
                ["style", "display", 'none']
            ],
            "${_Text7}": [
                ["style", "top", '370px'],
                ["style", "text-align", 'center'],
                ["style", "display", 'none'],
                ["color", "color", 'rgba(255,0,0,1.00)'],
                ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
                ["style", "left", '63px'],
                ["style", "font-size", '50px']
            ],
            "${_Land_It_Now_Link-06}": [
                ["style", "top", '34px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '78px'],
                ["style", "display", 'none'],
                ["style", "left", '-31px'],
                ["style", "width", '391px']
            ],
            "${_Text2}": [
                ["style", "top", '435px'],
                ["style", "opacity", '0'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Lucida Sans Unicode, Lucida Grande, sans-serif'],
                ["style", "left", '123px'],
                ["style", "font-size", '50px']
            ],
            "${_Land_It_APP_BackgroundCopy}": [
                ["style", "height", '1177px']
            ],
            "${_fb}": [
                ["style", "cursor", 'pointer'],
                ["style", "display", 'block']
            ],
            "${_Land_It_APP_BackgroundCopy2}": [
                ["style", "top", '-233px'],
                ["style", "display", 'block'],
                ["style", "height", '1159px'],
                ["style", "opacity", '0.63985710470085'],
                ["style", "left", '-51px'],
                ["style", "width", '652px']
            ],
            "${_Text4}": [
                ["transform", "scaleX", '0.77906'],
                ["style", "left", '199px'],
                ["style", "width", '258px'],
                ["style", "top", '71px'],
                ["transform", "scaleY", '0.77906'],
                ["transform", "skewX", '1.61deg'],
                ["style", "display", 'none'],
                ["style", "font-family", 'Lucida Console, Monaco, monospace'],
                ["style", "height", '185px'],
                ["style", "font-size", '58px']
            ],
            "${_Googlemapslogo2014}": [
                ["style", "top", '358px'],
                ["style", "height", '311px'],
                ["style", "display", 'none'],
                ["style", "left", '119px'],
                ["style", "width", '311px']
            ],
            "${_gomaps}": [
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer']
            ],
            "${_face}": [
                ["style", "top", '555px'],
                ["style", "height", '175px'],
                ["style", "display", 'none'],
                ["style", "left", '69px'],
                ["style", "width", '411px']
            ],
            "${_bubba}": [
                ["style", "top", '-77px'],
                ["transform", "scaleY", '0.61601'],
                ["transform", "scaleX", '0.616'],
                ["style", "left", '-95px'],
                ["style", "display", 'none']
            ],
            "${_Text3}": [
                ["style", "top", '673px'],
                ["style", "display", 'block'],
                ["color", "color", 'rgba(107,107,107,1.00)'],
                ["style", "left", '187px'],
                ["style", "font-size", '21px']
            ],
            "${_Text6}": [
                ["style", "top", '728px'],
                ["style", "width", '461px'],
                ["style", "height", '57px'],
                ["transform", "skewX", '2.96deg'],
                ["style", "display", 'none'],
                ["style", "-webkit-transform-origin", [40.31,48.32], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [40.31,48.32],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [40.31,48.32],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [40.31,48.32],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [40.31,48.32],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '91px'],
                ["style", "font-size", '29px']
            ],
            "${_map}": [
                ["style", "display", 'none'],
                ["style", "left", '27px']
            ],
            "${_Text}": [
                ["style", "top", '272px'],
                ["style", "left", '168px'],
                ["style", "display", 'none']
            ],
            "${_Landit_Logo_Black}": [
                ["style", "top", '-64px'],
                ["style", "display", 'block'],
                ["style", "height", '571px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '561px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'visible'],
                ["style", "height", '900px'],
                ["style", "width", '550px']
            ],
            "${_volta1}": [
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer']
            ],
            "${_Up_It_Link}": [
                ["style", "top", '34px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '78px'],
                ["style", "display", 'none'],
                ["style", "left", '283px'],
                ["style", "width", '390px']
            ],
            "${_Land_It_Now_Link-06Copy}": [
                ["style", "top", '324px'],
                ["style", "height", '69px'],
                ["style", "display", 'none'],
                ["style", "left", '37px'],
                ["style", "width", '222px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8951,
            autoPlay: true,
            labels: {
                "fbgo": 5396,
                "map": 6250,
                "land": 7298,
                "up": 8250
            },
            timeline: [
                { id: "eid61", tween: [ "style", "${_Landit_Logo_Black}", "display", 'none', { fromValue: 'block'}], position: 5152, duration: 0 },
                { id: "eid155", tween: [ "style", "${_Text4}", "font-size", '32px', { fromValue: '58px'}], position: 8045, duration: 126 },
                { id: "eid74", tween: [ "style", "${_Land_It_Now_Link-06Copy}", "display", 'block', { fromValue: 'none'}], position: 5105, duration: 0 },
                { id: "eid75", tween: [ "style", "${_Land_It_Now_Link-06Copy}", "display", 'none', { fromValue: 'block'}], position: 6058, duration: 0 },
                { id: "eid159", tween: [ "style", "${_Googlemapslogo2014}", "display", 'block', { fromValue: 'none'}], position: 7295, duration: 0 },
                { id: "eid160", tween: [ "style", "${_Googlemapslogo2014}", "display", 'none', { fromValue: 'block'}], position: 8030, duration: 0 },
                { id: "eid44", tween: [ "style", "${_Land_It_APP_BackgroundCopy2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid43", tween: [ "style", "${_Land_It_APP_BackgroundCopy2}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0 },
                { id: "eid45", tween: [ "style", "${_Land_It_APP_BackgroundCopy2}", "display", 'block', { fromValue: 'block'}], position: 5396, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Landit_Logo_Black}", "height", '397px', { fromValue: '571px'}], position: 0, duration: 2006 },
                { id: "eid47", tween: [ "style", "${_Landit_Logo_Black}", "height", '397px', { fromValue: '397px'}], position: 5396, duration: 0 },
                { id: "eid152", tween: [ "style", "${_Text4}", "width", '556px', { fromValue: '258px'}], position: 8045, duration: 126 },
                { id: "eid62", tween: [ "style", "${_fb}", "display", 'none', { fromValue: 'block'}], position: 5206, duration: 0 },
                { id: "eid84", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 7974, duration: 0 },
                { id: "eid85", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 8951, duration: 0 },
                { id: "eid157", tween: [ "style", "${_bubba}", "display", 'block', { fromValue: 'none'}], position: 8077, duration: 0 },
                { id: "eid150", tween: [ "style", "${_Text4}", "height", '160px', { fromValue: '185px'}], position: 8045, duration: 126 },
                { id: "eid141", tween: [ "transform", "${_Text4}", "scaleY", '0.77906', { fromValue: '0.77906'}], position: 8003, duration: 0 },
                { id: "eid41", tween: [ "style", "${_Land_It_APP_Background}", "display", 'block', { fromValue: 'block'}], position: 5250, duration: 0 },
                { id: "eid42", tween: [ "style", "${_Land_It_APP_Background}", "display", 'none', { fromValue: 'block'}], position: 5396, duration: 0 },
                { id: "eid120", tween: [ "style", "${_Text4}", "left", '233px', { fromValue: '199px'}], position: 7974, duration: 32 },
                { id: "eid151", tween: [ "style", "${_Text4}", "left", '19px', { fromValue: '233px'}], position: 8006, duration: 164 },
                { id: "eid20", tween: [ "style", "${_Landit_Logo_Black}", "width", '390px', { fromValue: '561px'}], position: 0, duration: 2006 },
                { id: "eid46", tween: [ "style", "${_Landit_Logo_Black}", "width", '390px', { fromValue: '390px'}], position: 5396, duration: 0 },
                { id: "eid82", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 7250, duration: 0 },
                { id: "eid83", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 7974, duration: 0 },
                { id: "eid179", tween: [ "style", "${_Text7}", "left", '63px', { fromValue: '63px'}], position: 8252, duration: 0 },
                { id: "eid98", tween: [ "style", "${_Land_It_APP_BackgroundCopy2}", "top", '-233px', { fromValue: '-233px'}], position: 6425, duration: 0 },
                { id: "eid35", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '0'}], position: 3026, duration: 0 },
                { id: "eid36", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 3750, duration: 0 },
                { id: "eid37", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '1'}], position: 4046, duration: 0 },
                { id: "eid178", tween: [ "style", "${_Text7}", "top", '370px', { fromValue: '370px'}], position: 8252, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Landit_Logo_Black}", "left", '14px', { fromValue: '0px'}], position: 0, duration: 17 },
                { id: "eid25", tween: [ "style", "${_Landit_Logo_Black}", "left", '94px', { fromValue: '14px'}], position: 17, duration: 1989 },
                { id: "eid48", tween: [ "style", "${_Landit_Logo_Black}", "left", '94px', { fromValue: '94px'}], position: 5396, duration: 0 },
                { id: "eid59", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid58", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'block'}], position: 3123, duration: 0 },
                { id: "eid60", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 5087, duration: 0 },
                { id: "eid171", tween: [ "style", "${_Text6}", "font-size", '29px', { fromValue: '29px'}], position: 8252, duration: 0 },
                { id: "eid80", tween: [ "style", "${_Up_It_Link}", "display", 'block', { fromValue: 'none'}], position: 6114, duration: 0 },
                { id: "eid81", tween: [ "style", "${_Up_It_Link}", "display", 'none', { fromValue: 'block'}], position: 7218, duration: 0 },
                { id: "eid140", tween: [ "transform", "${_Text4}", "scaleX", '0.77906', { fromValue: '0.77906'}], position: 8003, duration: 0 },
                { id: "eid170", tween: [ "style", "${_Text6}", "width", '461px', { fromValue: '461px'}], position: 8252, duration: 0 },
                { id: "eid169", tween: [ "style", "${_Text6}", "height", '57px', { fromValue: '57px'}], position: 8252, duration: 0 },
                { id: "eid164", tween: [ "style", "${_Text}", "top", '272px', { fromValue: '272px'}], position: 7444, duration: 0 },
                { id: "eid111", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 8040, duration: 0 },
                { id: "eid163", tween: [ "style", "${_Text}", "left", '168px', { fromValue: '168px'}], position: 7444, duration: 0 },
                { id: "eid161", tween: [ "style", "${_Googlemapslogo2014}", "left", '119px', { fromValue: '119px'}], position: 7444, duration: 0 },
                { id: "eid125", tween: [ "transform", "${_Text6}", "skewX", '2.96deg', { fromValue: '2.96deg'}], position: 8089, duration: 0 },
                { id: "eid162", tween: [ "style", "${_Googlemapslogo2014}", "top", '358px', { fromValue: '358px'}], position: 7444, duration: 0 },
                { id: "eid26", tween: [ "style", "${_Landit_Logo_Black}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2006 },
                { id: "eid158", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 8168, duration: 0 },
                { id: "eid156", tween: [ "style", "${_face}", "display", 'block', { fromValue: 'none'}], position: 8077, duration: 0 },
                { id: "eid94", tween: [ "style", "${_gomaps}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid93", tween: [ "style", "${_gomaps}", "display", 'block', { fromValue: 'none'}], position: 5266, duration: 0 },
                { id: "eid68", tween: [ "style", "${_gomaps}", "display", 'none', { fromValue: 'block'}], position: 6114, duration: 0 },
                { id: "eid67", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 3906, duration: 0 },
                { id: "eid65", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 5250, duration: 0 },
                { id: "eid148", tween: [ "style", "${_Up_It_Link3}", "display", 'block', { fromValue: 'none'}], position: 8082, duration: 0 },
                { id: "eid145", tween: [ "style", "${_Text6}", "-webkit-transform-origin", [40.31,48.32], { valueTemplate: '@@0@@% @@1@@%', fromValue: [40.31,48.32]}], position: 8082, duration: 0 },
                { id: "eid196", tween: [ "style", "${_Text6}", "-moz-transform-origin", [40.31,48.32], { valueTemplate: '@@0@@% @@1@@%', fromValue: [40.31,48.32]}], position: 8082, duration: 0 },
                { id: "eid197", tween: [ "style", "${_Text6}", "-ms-transform-origin", [40.31,48.32], { valueTemplate: '@@0@@% @@1@@%', fromValue: [40.31,48.32]}], position: 8082, duration: 0 },
                { id: "eid198", tween: [ "style", "${_Text6}", "msTransformOrigin", [40.31,48.32], { valueTemplate: '@@0@@% @@1@@%', fromValue: [40.31,48.32]}], position: 8082, duration: 0 },
                { id: "eid199", tween: [ "style", "${_Text6}", "-o-transform-origin", [40.31,48.32], { valueTemplate: '@@0@@% @@1@@%', fromValue: [40.31,48.32]}], position: 8082, duration: 0 },
                { id: "eid89", tween: [ "style", "${_volta1}", "display", 'block', { fromValue: 'none'}], position: 7265, duration: 0 },
                { id: "eid90", tween: [ "style", "${_volta1}", "display", 'none', { fromValue: 'block'}], position: 8951, duration: 0 },
                { id: "eid121", tween: [ "style", "${_Text4}", "top", '429px', { fromValue: '71px'}], position: 7974, duration: 32 },
                { id: "eid149", tween: [ "style", "${_Text4}", "top", '501px', { fromValue: '429px'}], position: 8006, duration: 164 },
                { id: "eid144", tween: [ "style", "${_Text6}", "top", '735px', { fromValue: '728px'}], position: 8082, duration: 7 },
                { id: "eid173", tween: [ "style", "${_Text6}", "top", '751px', { fromValue: '735px'}], position: 8252, duration: 0 },
                { id: "eid96", tween: [ "style", "${_Land_It_APP_BackgroundCopy2}", "left", '-51px', { fromValue: '-51px'}], position: 6425, duration: 0 },
                { id: "eid78", tween: [ "style", "${_Land_It_Now_Link-06}", "display", 'block', { fromValue: 'none'}], position: 6181, duration: 0 },
                { id: "eid79", tween: [ "style", "${_Land_It_Now_Link-06}", "display", 'none', { fromValue: 'block'}], position: 7138, duration: 0 },
                { id: "eid142", tween: [ "transform", "${_Text4}", "skewX", '1.61deg', { fromValue: '1.61deg'}], position: 8003, duration: 0 },
                { id: "eid24", tween: [ "style", "${_Landit_Logo_Black}", "top", '160px', { fromValue: '-64px'}], position: 0, duration: 2006 },
                { id: "eid27", tween: [ "style", "${_Landit_Logo_Black}", "top", '73px', { fromValue: '160px'}], position: 3026, duration: 1020 },
                { id: "eid49", tween: [ "style", "${_Landit_Logo_Black}", "top", '73px', { fromValue: '73px'}], position: 5396, duration: 0 },
                { id: "eid91", tween: [ "style", "${_map}", "display", 'block', { fromValue: 'none'}], position: 6181, duration: 0 },
                { id: "eid92", tween: [ "style", "${_map}", "display", 'none', { fromValue: 'block'}], position: 7271, duration: 0 },
                { id: "eid146", tween: [ "style", "${_Text6}", "left", '91px', { fromValue: '91px'}], position: 8082, duration: 0 },
                { id: "eid147", tween: [ "style", "${_Text6}", "left", '91px', { fromValue: '91px'}], position: 8089, duration: 0 },
                { id: "eid172", tween: [ "style", "${_Text6}", "left", '119px', { fromValue: '91px'}], position: 8252, duration: 0 },
                { id: "eid100", tween: [ "style", "${_map}", "left", '27px', { fromValue: '27px'}], position: 6425, duration: 0 }            ]
        }
    }
},
"fb": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'facebook-connect',
                    type: 'image',
                    rect: ['0px', '0px', '478px', '107px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/facebook-connect.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_facebook-connect}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '107px'],
                ["style", "width", '478px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: true,
            timeline: [
                { id: "eid40", tween: [ "style", "${_facebook-connect}", "opacity", '1', { fromValue: '0'}], position: 4046, duration: 954 }            ]
        }
    }
},
"gomaps": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0px', '0px', '512px', '397px', 'auto', 'auto'],
                    id: 'fbconnect',
                    fill: ['rgba(0,0,0,0)', 'images/fbconnect.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_fbconnect}": [
                ["style", "top", '0px'],
                ["style", "height", '397px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '512px']
            ],
            "${symbolSelector}": [
                ["style", "height", '397px'],
                ["style", "width", '512px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5239,
            autoPlay: true,
            timeline: [
                { id: "eid63", tween: [ "style", "${_fbconnect}", "display", 'block', { fromValue: 'none'}], position: 5239, duration: 0 }            ]
        }
    }
},
"map": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-29px', '3px', '560px', '788px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.88571', '0.95622']],
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    display: 'none',
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    id: 'mapa2',
                    type: 'image',
                    rect: ['-720px', '-28px', '1970px', '1064px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/mapa%282%29.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_mapa2}": [
                ["style", "left", '-720px'],
                ["style", "top", '-28px']
            ],
            "${symbolSelector}": [
                ["style", "height", '776px'],
                ["style", "overflow", 'scroll'],
                ["style", "width", '496px']
            ],
            "${_Rectangle}": [
                ["style", "top", '-17px'],
                ["transform", "scaleY", '0.95622'],
                ["transform", "scaleX", '0.88571'],
                ["style", "display", 'none'],
                ["style", "left", '-32px'],
                ["style", "height", '812px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7179,
            autoPlay: true,
            timeline: [
                { id: "eid72", tween: [ "style", "${_Rectangle}", "left", '-32px', { fromValue: '-32px'}], position: 6638, duration: 0 },
                { id: "eid76", tween: [ "style", "${_Rectangle}", "height", '812px', { fromValue: '812px'}], position: 6498, duration: 0 },
                { id: "eid70", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 6182, duration: 0 },
                { id: "eid71", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'block'}], position: 7179, duration: 0 },
                { id: "eid77", tween: [ "style", "${_Rectangle}", "top", '6px', { fromValue: '-17px'}], position: 6498, duration: 140 }            ]
        }
    }
},
"volta1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '52px', '59px', 'auto', 'auto'],
                    font: ['Verdana, Geneva, sans-serif', 49, 'rgba(145,145,145,1.00)', '400', 'none', 'normal'],
                    align: 'left',
                    id: 'Text5',
                    text: '&lt;',
                    display: 'none',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text5}": [
                ["style", "top", '0px'],
                ["style", "width", '52px'],
                ["style", "display", 'none'],
                ["style", "height", '59px'],
                ["color", "color", 'rgba(145,145,145,1.00)'],
                ["style", "font-family", 'Verdana, Geneva, sans-serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '49px']
            ],
            "${symbolSelector}": [
                ["style", "height", '59px'],
                ["style", "width", '52px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid86", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-5630612");
