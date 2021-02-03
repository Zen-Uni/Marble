package com.isleslie.marble.service;

import com.isleslie.marble.domain.dto.LoginDTO;
import com.isleslie.marble.domain.dto.RegisterDTO;
import com.isleslie.marble.domain.exception.ClientException;
import com.isleslie.marble.domain.exception.ServerException;

public interface IUserService {

    String login(LoginDTO dto) throws ClientException, ServerException;

    void sendCaptcha(String email) throws ClientException, ServerException;

    String register(RegisterDTO dto) throws ClientException, ServerException;

}
