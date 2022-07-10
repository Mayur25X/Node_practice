

public cLASS APP6
{
    Color cr ;
    int x,y,w,h;
    int flg;
    public void draw(Graphic g)
    {
 cr=new Color((int)((Math.random())*255),(int)((Math.random())*255),(int)((Math.random())*255));
    g.setColor(cr);
    g.fillRect(x,y,w,h);
    }

    public void init()
    {
        flg=0;
        addMouseListener(new MouseAdpter(){
            public void MouseCliced(MouseEvent e)
            {
                if(flg==0)
                {
                    x=e.getX();
                    y=e.getY();
                    flg=1;
                }
                else
                {
                    w=e.getX()-x;
                    h=e.getY()-y;
                    draw();
                    flg=0;
                }
            }
        });


    }

    public void ()
    {
        
    }
}