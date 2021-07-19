import java.sql.*;

public class Main {
    public static void main(String[] args) {
        String url = "jdbc:mysql://127.0.0.1:3306/employees_database";
        int rowsAffected;

        try {
            // Typing 'Connection' adds the import
            Connection conn = DriverManager.getConnection(url, "root", "shellvoerika6011");  //(URL, user, pass)

            Statement statement = conn.createStatement();

//            ResultSet resultSet = statement.executeQuery("SELECT * FROM employees_tbl"); //Quesry: readying/getting database
//
//            int salaryTotal = 0;
//            while (resultSet.next()){
////                System.out.println(resultSet.getString("name"));
//                salaryTotal = salaryTotal + resultSet.getInt("salary");
//            }
//            System.out.println(salaryTotal);

//            statement.executeUpdate("INSERT INTO employees_tbl (id, name, dept, salary) " +
//                    "VALUES (700, 'Robert', 'sales', 4000)");

//            rowsAffected = statement.executeUpdate("INSERT INTO employees_tbl (id, name, dept, salary) " +
//                    "VALUES (800, 'Juliet', 'sales', 4000)");
//
//            System.out.println("Excuted a Insert statement - rows affected" + rowsAffected);

            //DELETE statement (table)
//            rowsAffected = statement.executeUpdate("DELETE FROM employees_tbl");
//            System.out.println("Excuted a delete statement - rows affected" + rowsAffected);

            //DELETE a single statement (table)
//            rowsAffected = statement.executeUpdate("DELETE FROM employees_tbl WHERE id = 700");
//            System.out.println("Excuted a delete statement (single row) - rows affected" + rowsAffected);

            //UPDATE statement
            rowsAffected = statement.executeUpdate("UPDATE employees_tbl SET salary = 10000 WHERE id = 800");
            System.out.println("Excuted a updated statement - rows affected" + rowsAffected);

        }catch (SQLException e){
            e.printStackTrace();
        }
    }
}
