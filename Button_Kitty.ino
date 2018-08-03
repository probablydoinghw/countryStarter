#include <Servo.h>                           // Include servo library

Servo servoRight;
Servo servoLeft;

int buttonPressed = 4;
int light = 7;
void moveKitty() {
  // Your Code Here
}

void stopKitty() {
  // Your Code Here
}

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(buttonPressed, INPUT);
  //Your Code Here
}

void loop() {
  
  // 0 == on
  //1 == off


  int buttonPressed = digitalRead(buttonPressed);

  Serial.print("button pressed?: ");
  Serial.print(buttonPressed);
  if(buttonPressed == 0){
    digitalWrite(light,HIGH);
  } else {
    digitalWrite(light, LOW);
  }
    delay(500);
  }
 

