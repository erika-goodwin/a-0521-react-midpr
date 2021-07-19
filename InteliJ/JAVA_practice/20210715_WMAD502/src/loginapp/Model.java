package loginapp;

import java.sql.Connection;

public class Model {

    Connection conn = null;
    public Model(){
        try{
            this.conn
        }
    }

            if(this.conn == null){
        System.out.println(1);
    }
}

    public boolean isDatabaseConnected(){
        return this.conn != null;
    }
}
