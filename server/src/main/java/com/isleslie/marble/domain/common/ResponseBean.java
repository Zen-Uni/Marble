package com.isleslie.marble.domain.common;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.ResponseBody;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseBean<T> {
    private Integer code;
    private String msg;
    private T data;

    public ResponseBean<T> success(String msg, T data){
        return new ResponseBean<>(0, msg, data);
    }

    public ResponseBean<T> success(String msg){
        return new ResponseBean<>(0, msg, null);
    }

    public ResponseBean<T> failure(String msg, T data){
        return new ResponseBean<>(1, msg, data);
    }

    public ResponseBean<T> failure(String msg){
        return new ResponseBean<>(1, msg, null);
    }

}
