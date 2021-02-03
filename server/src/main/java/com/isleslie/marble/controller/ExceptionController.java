package com.isleslie.marble.controller;

import com.isleslie.marble.domain.common.ResponseBean;
import com.isleslie.marble.domain.exception.ClientException;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionController {

    @ExceptionHandler(ClientException.class)
    public ResponseBean<Object> handleCustomerException(ClientException e){
        return new ResponseBean<>().failure(e.getMessage());
    }

    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    public ResponseBean<Object> handleHttpRequestMethodNotSupportedException(HttpRequestMethodNotSupportedException e){
        return new ResponseBean<>().failure("HTTP请求方式错误！");
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseBean<Object> handleHttpMessageNotReadableException(HttpMessageNotReadableException e){
        return new ResponseBean<>().failure("缺失参数请求体，请使用JSON格式的参数！");
    }

    @ExceptionHandler(Exception.class)
    public ResponseBean<Object> handleCustomerException(Exception e){
        e.printStackTrace();
        return new ResponseBean<>().failure("未知异常，请联系管理员！");
    }



}
