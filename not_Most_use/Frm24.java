import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

/**
 * Frm24
 */
public class Frm24 extends frame implements ActionListener {

    Checkbox c1,c2,c3,c4,c5,c6,c7,c8;
    CheckboxGroup cG1 ,cg2;
    Button b1,b2;

    Frm24()
    {
        super("Radio Button");
        cg1=new Checkbox();
        c1=new Checkbox("Bsc",cG1,true)
        c2=new Checkbox("bcom",cG1,false)
        c3=new Checkbox("BA",cG1,false)
        c4=new Checkbox("BcA",cG1,false)


        cG2=new CheckboxGroup();
        c5=new Checkbox ("FY",cg2,true);
        c6=new Checkbox ("SY",cg2,false);
        c7=new Checkbox ("TY",cg2,false);
        c8=new Checkbox ("Final",cg2,false);


        b1=new Button("ok");
        b2=new Button("ok");


        b1.addActionListener(this);
        b2.addActionListener(this);

        setLayout(new FlowLayout);

        add(c1);
        add(c2);
        add(c3);
        add(c4);
        add(c5);
        add(c6);
        add(c7);
        add(c8);

        add(b1);
        add(b2);

        setVisible(true);
        setSize(400,500);
    }


    String s="Trade\n"+(cG1.getSelectedCheckbox()).getLabel()+"\n year\n"+(cg2.getSelectedCheckbox().getLabel());
    JOptionPane.showMessageDialog(null,s);

   public static void main(String[] args) {
        Frm24 a=new Frm24();
        }
}