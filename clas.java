class Text {
    String text;
    String author;
    int length;
 
    String getText() 
    void setText(String s) 
    String getAuthor() 
    void setAuthor(String s) 
    int getLength() 
    void setLength(int k) 
 
    /*methods that change the text*/
    void allLettersToUpperCase() 
    void findSubTextAndDelete(String s) 
}
 
class Printer {
    Text text;
 
    Printer(Text t) {
       this.text = t;
    }
 
    void printText() 
}