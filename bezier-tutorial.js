
function initContextAttrs(context) {
   context.strokeStyle = "#000000";
   context.lineWidth = 3;
}

function init() {
   var leftCanvas = document.getElementById("left");
   var context = document.getElementById("left").getContext("2d");
   initContextAttrs(context);

   curve = new Object();
   curve.context = context;
   curve.numCurves = 8;

   curve.curves = [
      [[180,280], [183,268], [186,256], [189,244]], // front leg
      [[191,244], [290,244], [300,230], [339,245]], // tummy
      [[340,246], [350,290], [360,300], [355,210]], // back leg
      [[353,210], [370,207], [380,196], [375,193]], // tail
      [[375,193], [310,220], [190,220], [164,205]], // back
      [[164,205], [135,194], [135,265], [153,275]], // ear start
      [[153,275], [168,275], [170,180], [150,190]], // ear end + head
      [[149,190], [122,214], [142,204], [85,240]],  // nose bridge
      [[86,240], [100,247], [125,233], [140,238]]   // mouth
   ];

   paintDrawing(curve);
}
