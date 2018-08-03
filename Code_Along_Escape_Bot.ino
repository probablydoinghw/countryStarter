int rightWhisker = 9;
int leftWhisker = 6;
int leftLED = 13;
int rightLED = 3;



void setup() {
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
Serial.print(wLeft);             // Display wLeft
Serial.print(wRight);            // Display wRight
delay(5000);                     // Pause for 50 ms (5 seconds)

}
