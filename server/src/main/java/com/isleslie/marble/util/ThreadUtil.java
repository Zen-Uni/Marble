package com.isleslie.marble.util;

import com.isleslie.marble.domain.entity.User;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ThreadUtil {
    private static final ThreadLocal<HttpServletRequest> requestThreadLocal = new ThreadLocal<>();
    private static final ThreadLocal<HttpServletResponse> responseThreadLocal = new ThreadLocal<>();
    private static final ThreadLocal<User> userThreadLocal = new ThreadLocal<>();

    public static void addRequest(HttpServletRequest request){
        requestThreadLocal.set(request);
    }

    public static HttpServletRequest getRequest(){
        return requestThreadLocal.get();
    }

    public static void addResponse(HttpServletResponse response){
        responseThreadLocal.set(response);
    }

    public static HttpServletResponse getResponse(){
        return responseThreadLocal.get();
    }

    public static void addUser(User user){
        userThreadLocal.set(user);
    }

    public static User getUser(){
        return userThreadLocal.get();
    }

    public static void remove(){
        requestThreadLocal.remove();
        responseThreadLocal.remove();
        userThreadLocal.remove();
    }
}
