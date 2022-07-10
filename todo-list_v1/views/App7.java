import java.awt.*;
import java.applet.*;

// app7.cLASS

{
    Image img;

    public void init()
    {
        img=getImage(get.DocumentBase,"Img.jpg");
        
    }
    public void paint(Graphic g)
    {
        g.DrawImage(img,20,20,200,200,this);
    }

    public static void main(String[] args) {
        App7 a=App7();
    }
}