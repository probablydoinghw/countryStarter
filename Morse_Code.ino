int pin = 13;

void setup() {
  pinMode(pin, OUTPUT);

}

void loop() {
  H();
  I();
  spacebtwwds();
  I();
  spacebtwwds();
  A();
  M();
  spacebtwwds();
  T();
  I();
  D();
  B();
  O();
  T();
  spacebtwwds();

}

void dash() {
  digitalWrite(13, HIGH);
  delay(3000);
  digitalWrite(13, LOW);
  delay(1000);
}

void dot() {
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}

void spacebtwwds() {
  delay(7000);
}


void H() {
  for(int i=0; i<4; i++) {
    dot();
  }
}

void I() {
  for(int i=0; i<2; i++) {
    dot();
  }
}

void A() {
  dot();
  dash();
}

void M() {
  for(int i=0; i<2; i++) {
    dash();
  }
}

void T() {
  dash();
}

void D() {
  dash();
  for(int i=0; i<2; i++) {
    dot();
  }
  
}

void B() {
  dash();
  for(int i=0; i<3; i++) {
    dot();
  }
}

void O() {
  for(int i=0; i<3; i++) {
    dash();
  }
}

