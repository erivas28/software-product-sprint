package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get the value entered in the form.
    String textValue = request.getParameter("text-input");

    String nameValue = request.getParameter("name-input");

    String emailValue = request.getParameter("email-input");

    String subjectValue = request.getParameter("subject-input");

    // Print the value so you can see it in the server logs.
    System.out.println("The message is: " + textValue);

    System.out.println("The name is: " + nameValue);

    System.out.println("The email is: " + emailValue);

    System.out.println("The subject is: " + subjectValue);

    // Write the value to the response so the user can see it.
    response.getWriter().println("You submitted: " + textValue);
    
    response.getWriter().println("The name is: " + nameValue);

    response.sendRedirect("https://erivas-sps-summer22.uc.r.appspot.com/");
  }
}