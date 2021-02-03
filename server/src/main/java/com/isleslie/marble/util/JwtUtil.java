package com.isleslie.marble.util;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import com.isleslie.marble.domain.dto.LoginDTO;
import com.isleslie.marble.domain.exception.ClientException;
import com.isleslie.marble.domain.exception.ServerException;

import java.util.Date;

public class JwtUtil {

    private static final String secret = "marble_secret";
    private static final Date expiresAt = new Date(System.currentTimeMillis() + 604800000); //7天

    public static String signToken(String email) throws ServerException {
        try {
            Algorithm algorithm = Algorithm.HMAC256(secret);
            return JWT.create()
                    .withSubject(email)    //email作为用户标识
                    .withExpiresAt(expiresAt)
                    .sign(algorithm);
        } catch (JWTCreationException exception){
            //Invalid Signing configuration / Couldn't convert Claims.
            throw new ServerException("生成Token失败！");
        }
    }

    public static DecodedJWT verifyToken(String token) throws ClientException {
        try {
            Algorithm algorithm = Algorithm.HMAC256(secret);
            JWTVerifier verifier = JWT.require(algorithm)
                    .build(); //Reusable verifier instance
            return verifier.verify(token);
        } catch (TokenExpiredException e){
            //Expired signature/claims
            throw new ClientException("登录失效，请重新登录！");
        } catch (JWTVerificationException e){
            //Invalid signature/claims
            throw new ClientException("登录无效，请登录后访问！");
        }
    }

}
