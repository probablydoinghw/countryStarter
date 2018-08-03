

#include <Servo.h>                           // Include servo library
 
Servo servoLeft;                             // Declare left and right servos
Servo servoRight;

int rightWhisker = 9;
int leftWhisker = 6;
int leftLED = 13;
int rightLED = 3;

void forward(int time)                       // Forward function
{
  servoLeft.writeMicroseconds(1700);         // Left wheel counterclockwise
  servoRight.writeMicroseconds(1300);        // Right wheel clockwise
  delay(time);                               // Maneuver for time ms
}

void turnLeft(int time)                      // Left turn function
{
  servoLeft.writeMicroseconds(1300);         // Left wheel clockwise
  servoRight.writeMicroseconds(1300);        // Right wheel clockwise
  delay(time);                               // Maneuver for time ms
}

void turnRight(int time)                     // Right turn function
{
  servoLeft.writeMicroseconds(1700);         // Left wheel counterclockwise
  servoRight.writeMicroseconds(1700);        // Right wheel counterclockwise
  delay(time);                               // Maneuver for time ms
}

void backward(int time)                      // Backward function
{
  servoLeft.writeMicroseconds(1300);         // Left wheel clockwise
  servoRight.writeMicroseconds(1700);        // Right wheel counterclockwise
  delay(time);                               // Maneuver for time ms

}







void setup() {

pinMode(7, INPUT);                         // Set right whisker pin to input
pinMode(5, INPUT);                         // Set left whisker pin to input  

tone(4, 3000, 1000);                       // Play tone for 1 second
delay(1000);                               // Delay to finish tone

servoLeft.attach(13);                      // Attach left signal to pin 13
servoRight.attach(12);                     // Attach right signal to pin 12

tone(4, 3000, 1000);                   // Play tone for 1 second
delay(1000);                           // Delay to finish tone
pinMode(rightWhisker, INPUT);          // Set right whisker pin to input
pinMode(leftWhisker, INPUT);           // Set left whisker pin to input
pinMode(leftLED, OUTPUT);
pinMode(rightLED, OUTPUT);
Serial.begin(9600);                    // Set data rate to 9600 bps

}

void loop() {

byte wLeft = digitalRead(leftWhisker);      // Copy left result to wLeft
byte wRight = digitalRead(rightWhisker);    // Copy right reslt tp wRight


if(wLeft == 0)            // If left whisker contact
{
  digitalWrite(leftLED, HIGH); // Left LED on
}
  else                     // If no left whisker contact
  {
    digitalWrite(leftLED, LOW);   // Left LED off
  }

if(wRight == 0)          // If right whisker contact
{
  digitalWrite(rightLED, HIGH);   // Right LED on

}
  else                    // If no right whisker contact
  {
    digitalWrite(rightLED, LOW);   // Right LED off
  }

if((wLeft == 0) && (wRight == 0))          // If both whiskers contact
  {
    backward(1000);                          // Back up 1 second
    turnLeft(800);                           // Turn left about 120 degrees
  }
  else if(wLeft == 0)                        // If only left whisker contact
  {
    backward(1000);                          // Back up 1 second
    turnLeft(400);                          // Turn right about 60 degrees
  }
  else if(wRight == 0)                       // If only right whisker contact
  {
    backward(1000);                          // Back up 1 second
    turnRight(400);                           // Turn left about 60 degrees
  }
  else                                       // Otherwise, no whisker contact
  {
    forward(20);                             // Forward 1/50 of a second
  }


Serial.print(wLeft);             // Display wLeft
Serial.print(wRight);            // Display wRight
delay(5000);                     // Pause for 50 ms (5 seconds)

}
