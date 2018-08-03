



int leftWhisker = 5;
int rightWhisker = 7;
int aAnalogPin = A0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(leftWhisker, INPUT);
  pinMode(rightWhisker, INPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  int leftWhiskerValue = analogRead(leftWhisker);
  int rightWhiskerValue = analogRead(rightWhisker);
  int aValue = analogRead(aAnalogPin);

if(leftWhiskerValue == 0 && rightWhiskerValue == 0) {
  Serial.println("Left and Right whiskers are pressed!");
  }else if(leftWhiskerValue == 0) {
   Serial.print("Left pressed!");
   
  }else if(rightWhiskerValue == 0){
    Serial.print("Right pressed!");
  }else {
    Serial.print("No whiskers are pressed!");
    
}

  Serial.println("");

  delay(100);
}






