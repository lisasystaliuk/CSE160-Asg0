
// DrawRectangle.js 
function main() {
    // Retrieve <canvas> element <- (1)
    canvas = document.getElementById('example');
    if (!canvas) {
    console.log('Failed to retrieve the <canvas> element'); 
    return;
    }
// Get the rendering context for 2DCG <- (2)
ctx = canvas.getContext('2d'); 
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
// var v1 = new Vector3([2.25, 2.25,0]);
// drawVector(v1, "red");
document.getElementById('draw_button1').onclick = function() {
    handleDrawEvent();
}
document.getElementById('draw_button2').onclick = function() {
    handleDrawOperationEvent();
}
// Draw a blue rectangle <- (3) 
// ctx.fillStyle = 'rgba(0, 0, 255, 1.0)'; // Set a blue color 
// ctx.fillRect(120, 10, 150, 150); // Fill a rectangle with the color

}
function drawVector(v, color) {
    var scaledX = v.elements[0] * 20;
    var scaledY = v.elements[1] * 20;
    ctx.strokeStyle = color;
    ctx.beginPath();
    var centerX = canvas.width/2;
    var centerY = canvas.height/2;
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + scaledX, centerY - scaledY);
    ctx.stroke();
}
function handleDrawEvent() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    var inputX1 = document.getElementById("x_input_v1").value;
    var inputY1 = document.getElementById("y_input_v1").value;
    var inputX2 = document.getElementById("x_input_v2").value;
    var inputY2 = document.getElementById("y_input_v2").value;
    var v1 = new Vector3([inputX1, inputY1,0]);
    var v2 = new Vector3([inputX2, inputY2,0]);
    drawVector(v1, "red");
    drawVector(v2, "blue");
}
function handleDrawOperationEvent() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    var inputX1 = document.getElementById("x_input_v1").value;
    var inputY1 = document.getElementById("y_input_v1").value;
    var inputX2 = document.getElementById("x_input_v2").value;
    var inputY2 = document.getElementById("y_input_v2").value;
    var v1 = new Vector3([inputX1, inputY1,0]);
    var v2 = new Vector3([inputX2, inputY2,0]);
    drawVector(v1, "red")
    drawVector(v2, "blue")
    var v3 = new Vector3([inputX1, inputY1,0]);
    var v4 = new Vector3([inputX2, inputY2,0]);
    var op = document.getElementById("operation").value;
    if(op == "mult" || op == "div")
    {
        var scalar = document.getElementById("scalar").value;
        if(op == "mult") 
        {
            v3.mul(scalar);
            v4.mul(scalar);
        }
        else
        {
            v3.div(scalar);
            v4.div(scalar);
        }
    }
    else if(op == "add") 
    {
        v3.add(v2);
    }
    else if(op == "sub") 
    {
        v3.sub(v2);
    }
    else if(op == "magn" || op == "norm")
    {
        console.log("Magnitude of v1: " + v3.magnitude());
        console.log("Magnitude of v2: " + v4.magnitude());
        if(op == "norm")
        {
            v3.normalize();
            v4.normalize();
        }
    }
    else if(op == "angle")
    {
        angleBetween(v1, v2);
        v3 = new Vector3([0, 0,0]);
        v4 = new Vector3([0, 0,0]);
    }
    else if(op == "area")
    {
        areaTriangle(v1, v2);
        v3 = new Vector3([0, 0,0]);
        v4 = new Vector3([0, 0,0]);
    }
    else 
    {
        v3 = new Vector3([0, 0,0]);
        v4 = new Vector3([0, 0,0]);
    }
    drawVector(v3, "green");
    drawVector(v4, "green");
}
function angleBetween(v1, v2)
{
    var angle = Math.acos(Vector3.dot(v1, v2) / (v1.magnitude() * v2.magnitude()))*180/Math.PI;
    console.log("Angle: " + angle);
}
function areaTriangle(v1, v2)
{
    var cross = Vector3.cross(v1, v2);
    console.log("Area of the triangle: " + cross.magnitude()/2);
}