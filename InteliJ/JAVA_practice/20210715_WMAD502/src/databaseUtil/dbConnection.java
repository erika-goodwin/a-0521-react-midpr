package databaseUtil;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class dbConnection {
    private static final String USERNAME = "root";
    private static final String PASSWORD = "1111";
    private static final String URL = "jdbc:mysql://localhost:3306/mployees_database";

    public static Connection getConnection() throws SQLException{
        try {
            return DriverManager,getConnection(URL,USERNAME, PASSWORD);
        }catch (SQLException e){
            System.out.println("Unable to establish th connection with DB");
            e.printStackTrace();
        }

    return null;
}
